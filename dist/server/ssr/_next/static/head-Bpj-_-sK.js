import { a as __toESM, t as require_react } from "./react-BSUe0WV4.js";
import { _ as isDangerousScheme, a as normalizePathnameForRouteMatch, b as hasBasePath, d as normalizePathTrailingSlash, f as resolveRelativeHref, h as withBasePath$1, i as decodeMatchedParams, l as isAbsoluteOrProtocolRelativeUrl, m as toSameOriginAppPath, p as toBrowserNavigationHref, v as reportBlockedDangerousNavigation, x as stripBasePath } from "./route-pattern-C9xOXorn.js";
import { C as VINEXT_MOUNTED_SLOTS_HEADER, S as AppElementsWire, _ as APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL, a as getPrefetchInterceptionContext, b as hasAppNavigationRuntime, c as navigateClientSide, f as ReadonlyURLSearchParams, g as stripRscSuffix, h as stripRscCacheBustingSearchParam, i as getPrefetchCache, l as prefetchRscResponse, m as createRscRequestUrl, o as getPrefetchedUrls, p as createRscRequestHeaders, r as getMountedSlotsHeader, t as require_jsx_runtime, v as createExternalHistoryStatePreservingMetadata, x as registerNavigationRuntimeFunctions, y as getNavigationRuntime } from "../../index.js";
//#region node_modules/vinext/dist/routing/route-trie.js
function createNode() {
	return {
		staticChildren: /* @__PURE__ */ new Map(),
		dynamicChild: null,
		catchAllChild: null,
		optionalCatchAllChild: null,
		route: null
	};
}
/**
* Build a trie from pre-sorted routes.
*
* Routes must have a `patternParts` property (string[] of URL segments).
* Pattern segment conventions:
*   - `:name`  — dynamic segment
*   - `:name+` — catch-all (1+ segments)
*   - `:name*` — optional catch-all (0+ segments)
*   - anything else — static segment
*
* First route to claim a terminal position wins (routes are pre-sorted
* by precedence, so insertion order preserves correct priority).
*/
function buildRouteTrie(routes) {
	const root = createNode();
	for (const route of routes) {
		const parts = route.patternParts;
		if (parts.length === 0) {
			if (root.route === null) root.route = route;
			continue;
		}
		let node = root;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part.endsWith("+") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.catchAllChild === null) node.catchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.endsWith("*") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.optionalCatchAllChild === null) node.optionalCatchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.startsWith(":")) {
				const paramName = part.slice(1);
				if (node.dynamicChild === null) node.dynamicChild = {
					paramName,
					node: createNode()
				};
				node = node.dynamicChild.node;
				if (i === parts.length - 1) {
					if (node.route === null) node.route = route;
				}
				continue;
			}
			let child = node.staticChildren.get(part);
			if (!child) {
				child = createNode();
				node.staticChildren.set(part, child);
			}
			node = child;
			if (i === parts.length - 1) {
				if (node.route === null) node.route = route;
			}
		}
	}
	return root;
}
/**
* Match a URL against the trie.
*
* Returns decoded param values — `decodeURIComponent` is applied to
* individual param entries so that `%2F` → `/`, `%23` → `#`, etc.
* Segment boundaries (the original `/` splits) are preserved by the
* upstream normalization layer; this step only decodes the captured
* param strings the caller sees.
*
* Mirrors Next.js route-matcher.ts:25-27.
*
* @param root - Trie root built by `buildRouteTrie`
* @param urlParts - Pre-split URL segments (no empty strings)
* @returns Match result with route and extracted params, or null
*/
function trieMatch(root, urlParts) {
	const result = match(root, urlParts, 0);
	if (result) decodeMatchedParams(result.params);
	return result;
}
function createParams() {
	return Object.create(null);
}
function match(node, urlParts, index) {
	if (index === urlParts.length) {
		if (node.route !== null) return {
			route: node.route,
			params: createParams()
		};
		if (node.optionalCatchAllChild !== null) return {
			route: node.optionalCatchAllChild.route,
			params: createParams()
		};
		return null;
	}
	const segment = urlParts[index];
	const staticChild = node.staticChildren.get(segment);
	if (staticChild) {
		const result = match(staticChild, urlParts, index + 1);
		if (result !== null) return result;
	}
	if (node.dynamicChild !== null) {
		const result = match(node.dynamicChild.node, urlParts, index + 1);
		if (result !== null) {
			result.params[node.dynamicChild.paramName] = segment;
			return result;
		}
	}
	if (node.catchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.catchAllChild.paramName] = remaining;
		return {
			route: node.catchAllChild.route,
			params
		};
	}
	if (node.optionalCatchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.optionalCatchAllChild.paramName] = remaining;
		return {
			route: node.optionalCatchAllChild.route,
			params
		};
	}
	return null;
}
//#endregion
//#region node_modules/vinext/dist/routing/route-matching.js
/**
* Shared route-match preamble used by both Pages Router and App Router.
*
* Both routers normalize URLs and call `trieMatch` with nearly-identical
* preamble: strip query, trailing-slash normalize, run
* `normalizePathnameForRouteMatch`, split into url parts, then look up via a
* per-routes-array trie cache. This module factors that out so each router
* just calls `matchRouteWithTrie(url, routes)`.
*/
function createRouteTrieCache() {
	return /* @__PURE__ */ new WeakMap();
}
function getOrBuildTrie(cache, routes) {
	let trie = cache.get(routes);
	if (!trie) {
		trie = buildRouteTrie(routes);
		cache.set(routes, trie);
	}
	return trie;
}
/**
* Match a URL path against a list of routes via the shared preamble:
*   1. strip query string
*   2. trailing-slash normalize (preserving root "/")
*   3. run `normalizePathnameForRouteMatch`
*   4. split into url parts and look up via the (cached) trie
*
* Generic over the route shape; both Pages `Route` and App `AppRoute`
* satisfy `{ patternParts: string[] }`.
*/
function matchRouteWithTrie(url, routes, cache) {
	const pathname = url.split("?")[0];
	let normalizedUrl = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
	normalizedUrl = normalizePathnameForRouteMatch(normalizedUrl);
	const urlParts = normalizedUrl.split("/").filter(Boolean);
	return trieMatch(getOrBuildTrie(cache, routes), urlParts);
}
//#endregion
//#region node_modules/vinext/dist/utils/query.js
function setOwnQueryValue(obj, key, value) {
	Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		writable: true,
		configurable: true
	});
}
function addQueryParam(obj, key, value) {
	if (Object.hasOwn(obj, key)) {
		const current = obj[key];
		setOwnQueryValue(obj, key, Array.isArray(current) ? current.concat(value) : [current, value]);
	} else setOwnQueryValue(obj, key, value);
}
/**
* Convert a Next.js-style query object into URLSearchParams while preserving
* repeated keys for array values.
*
* Ported from Next.js `urlQueryToSearchParams()`:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/shared/lib/router/utils/querystring.ts
*/
function stringifyUrlQueryParam(param) {
	if (typeof param === "string") return param;
	if (typeof param === "number" && !isNaN(param) || typeof param === "boolean") return String(param);
	return "";
}
function urlQueryToSearchParams(query) {
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(query)) {
		if (Array.isArray(value)) {
			for (const item of value) params.append(key, stringifyUrlQueryParam(item));
			continue;
		}
		params.set(key, stringifyUrlQueryParam(value));
	}
	return params;
}
/**
* Append query parameters to a URL while preserving any existing query string
* and fragment identifier.
*/
function appendSearchParamsToUrl(url, params) {
	const hashIndex = url.indexOf("#");
	const beforeHash = hashIndex === -1 ? url : url.slice(0, hashIndex);
	const hash = hashIndex === -1 ? "" : url.slice(hashIndex);
	const queryIndex = beforeHash.indexOf("?");
	const base = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex);
	const existingQuery = queryIndex === -1 ? "" : beforeHash.slice(queryIndex + 1);
	const merged = new URLSearchParams(existingQuery);
	for (const [key, value] of params) merged.append(key, value);
	const search = merged.toString();
	return `${base}${search ? `?${search}` : ""}${hash}`;
}
//#endregion
//#region node_modules/vinext/dist/utils/domain-locale.js
function normalizeDomainHostname(hostname) {
	if (!hostname) return void 0;
	return hostname.split(",", 1)[0]?.trim().split(":", 1)[0]?.toLowerCase() || void 0;
}
/**
* Match a configured domain either by hostname or locale.
* When both are provided, the checks intentionally use OR semantics so the
* same helper can cover Next.js's hostname lookup and preferred-locale lookup.
* If both are passed, the first domain matching either input wins, so callers
* should pass hostname or detectedLocale, not both.
*/
function detectDomainLocale(domainItems, hostname, detectedLocale) {
	if (!domainItems?.length) return void 0;
	const normalizedHostname = normalizeDomainHostname(hostname);
	const normalizedLocale = detectedLocale?.toLowerCase();
	for (const item of domainItems) if (normalizedHostname === normalizeDomainHostname(item.domain) || normalizedLocale === item.defaultLocale.toLowerCase() || item.locales?.some((locale) => locale.toLowerCase() === normalizedLocale)) return item;
}
function addLocalePrefix(path, locale, localeDefault) {
	const normalizedLocale = locale.toLowerCase();
	if (normalizedLocale === localeDefault.toLowerCase()) return path;
	const pathWithLeadingSlash = path.startsWith("/") ? path : `/${path}`;
	const normalizedPathname = (pathWithLeadingSlash.split(/[?#]/, 1)[0] ?? pathWithLeadingSlash).toLowerCase();
	const localePrefix = `/${normalizedLocale}`;
	if (normalizedPathname === localePrefix || normalizedPathname.startsWith(`${localePrefix}/`)) return path.startsWith("/") ? path : pathWithLeadingSlash;
	return `/${locale}${pathWithLeadingSlash}`;
}
function getLocalePathPrefix(path, locales) {
	if (!locales?.length) return void 0;
	const pathWithLeadingSlash = path.startsWith("/") ? path : `/${path}`;
	const firstSegment = (pathWithLeadingSlash.split(/[?#]/, 1)[0] ?? pathWithLeadingSlash).split("/").find(Boolean);
	if (!firstSegment) return void 0;
	const normalizedSegment = firstSegment.toLowerCase();
	return locales.find((locale) => locale.toLowerCase() === normalizedSegment);
}
function withBasePath(path, basePath = "") {
	if (!basePath) return path;
	return basePath + path;
}
function getDomainLocaleUrl(url, locale, { basePath, currentHostname, domainItems }) {
	if (!domainItems?.length) return void 0;
	const targetDomain = detectDomainLocale(domainItems, void 0, locale);
	if (!targetDomain) return void 0;
	const currentDomain = detectDomainLocale(domainItems, currentHostname ?? void 0);
	const localizedPath = addLocalePrefix(url, locale, targetDomain.defaultLocale);
	if (currentDomain && normalizeDomainHostname(currentDomain.domain) === normalizeDomainHostname(targetDomain.domain)) return;
	return `${`http${targetDomain.http ? "" : "s"}://`}${targetDomain.domain}${withBasePath(localizedPath, basePath)}`;
}
//#endregion
//#region node_modules/vinext/dist/shims/client-locale.js
function getCurrentBrowserLocale({ basePath, domainLocales, hostname }) {
	if (typeof window === "undefined") return void 0;
	const pathnameLocale = getLocalePathPrefix(stripBasePath(window.location.pathname, basePath), window.__VINEXT_LOCALES__);
	if (pathnameLocale) return pathnameLocale;
	return detectDomainLocale(domainLocales, hostname ?? void 0)?.defaultLocale ?? window.__VINEXT_DEFAULT_LOCALE__ ?? window.__VINEXT_LOCALE__;
}
//#endregion
//#region node_modules/vinext/dist/client/pages-router-link-navigation.js
async function navigatePagesRouterLink(router, { href, replace, scroll, shallow, locale }) {
	const routerOptions = {
		scroll,
		locale
	};
	if (shallow !== void 0) routerOptions.shallow = shallow;
	if (replace) await router.replace(href, void 0, routerOptions);
	else await router.push(href, void 0, routerOptions);
}
//#endregion
//#region node_modules/vinext/dist/shims/i18n-context.js
var _getI18nContext = () => {
	if (globalThis.__VINEXT_DEFAULT_LOCALE__ == null && globalThis.__VINEXT_LOCALE__ == null) return null;
	return {
		locale: globalThis.__VINEXT_LOCALE__,
		locales: globalThis.__VINEXT_LOCALES__,
		defaultLocale: globalThis.__VINEXT_DEFAULT_LOCALE__,
		domainLocales: globalThis.__VINEXT_DOMAIN_LOCALES__,
		hostname: globalThis.__VINEXT_HOSTNAME__
	};
};
function getI18nContext() {
	return _getI18nContext();
}
//#endregion
//#region node_modules/vinext/dist/shims/link-prefetch.js
function canLinkPrefetch(input) {
	return input.nodeEnv === "production" && input.prefetch !== false && !input.isDangerous;
}
function canLinkIntentPrefetch(input) {
	if (input.nodeEnv !== "production" || input.isDangerous) return false;
	return input.routerMode === "pages" || input.prefetch !== false;
}
/**
* Normalize absolute and protocol-relative Link hrefs to app-relative paths
* that are eligible for prefetching. Non-absolute relative hrefs are returned
* unchanged; callers must resolve them against the current browser URL before
* constructing a concrete fetch target.
*/
function getLinkPrefetchHref(input) {
	const { href, basePath, currentOrigin } = input;
	if (!isAbsoluteOrProtocolRelativeUrl(href)) return href;
	if (currentOrigin === void 0) return null;
	try {
		const current = new URL(currentOrigin);
		const parsed = href.startsWith("//") ? new URL(href, current.origin) : new URL(href);
		if (parsed.origin !== current.origin) return null;
		if (!basePath) return parsed.pathname + parsed.search + parsed.hash;
		if (!hasBasePath(parsed.pathname, basePath)) return null;
		return stripBasePath(parsed.pathname, basePath) + parsed.search + parsed.hash;
	} catch {
		return null;
	}
}
//#endregion
//#region node_modules/vinext/dist/shims/link.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
/**
* next/link shim
*
* Renders an <a> tag with client-side navigation support.
* On click, prevents full page reload and triggers client-side
* page swap via the router's navigation system.
*/
var LinkStatusContext = (0, import_react.createContext)({ pending: false });
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath$1 = "";
/** trailingSlash from next.config.js, injected by the plugin at build time */
var __trailingSlash = false;
var linkPrefetchRouteTrieCache = createRouteTrieCache();
function resolveHref(href) {
	if (typeof href === "string") return href;
	let url = href.pathname ?? "/";
	if (href.query) {
		const params = urlQueryToSearchParams(href.query);
		url = appendSearchParamsToUrl(url, params);
	}
	return url;
}
function resolveLinkPrefetchMode(prefetchProp, isDangerous) {
	if (isDangerous || prefetchProp === false) return "disabled";
	if (prefetchProp === true) return "full";
	return "auto";
}
function toSameOriginRouteHref(href) {
	if (typeof window === "undefined") return null;
	let url;
	try {
		url = new URL(href, window.location.href);
	} catch {
		return null;
	}
	if (url.origin !== window.location.origin) return null;
	return `${stripBasePath(url.pathname, __basePath$1)}${url.search}`;
}
function getLinkPrefetchRouterMode() {
	return hasAppNavigationRuntime() ? "app" : "pages";
}
function resolveAutoAppRoutePrefetch(href) {
	if (typeof window === "undefined") return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	const routes = window.__VINEXT_LINK_PREFETCH_ROUTES__;
	if (!routes) return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	const routeHref = toSameOriginRouteHref(href);
	if (routeHref === null) return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	const match = matchRouteWithTrie(routeHref, routes, linkPrefetchRouteTrieCache);
	if (!match) return {
		cacheForNavigation: false,
		shouldPrefetch: false
	};
	return {
		cacheForNavigation: !match.route.isDynamic,
		shouldPrefetch: !match.route.isDynamic || match.route.canPrefetchLoadingShell
	};
}
/**
* Prefetch a URL for faster navigation.
*
* For App Router (RSC): fetches the .rsc payload in the background and
* stores it in an in-memory cache for instant use during navigation.
* For Pages Router: injects a <link rel="prefetch"> for the page module.
*
* Uses `requestIdleCallback` (or `setTimeout` fallback) to avoid blocking
* the main thread during initial page load.
*/
function prefetchUrl(href, mode, priority = "low") {
	if (typeof window === "undefined") return;
	const prefetchHref = getLinkPrefetchHref({
		href,
		basePath: __basePath$1,
		currentOrigin: window.location.origin
	});
	if (prefetchHref == null) return;
	const fullHref = toBrowserNavigationHref(prefetchHref, window.location.href, __basePath$1);
	(window.requestIdleCallback ?? ((fn) => setTimeout(fn, 100)))(() => {
		(async () => {
			if (hasAppNavigationRuntime()) {
				const autoPrefetch = mode === "auto" ? resolveAutoAppRoutePrefetch(prefetchHref) : {
					cacheForNavigation: true,
					shouldPrefetch: true
				};
				if (!autoPrefetch.shouldPrefetch) return;
				const interceptionContext = getPrefetchInterceptionContext(fullHref);
				const mountedSlotsHeader = getMountedSlotsHeader();
				const isOptimisticRouteShellPrefetch = !autoPrefetch.cacheForNavigation;
				if (isOptimisticRouteShellPrefetch && interceptionContext !== null) return;
				const headers = createRscRequestHeaders({
					interceptionContext,
					renderMode: isOptimisticRouteShellPrefetch ? APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL : void 0
				});
				if (mountedSlotsHeader) headers.set(VINEXT_MOUNTED_SLOTS_HEADER, mountedSlotsHeader);
				const rscUrl = await createRscRequestUrl(fullHref, headers);
				const cacheKey = AppElementsWire.encodeCacheKey(rscUrl, interceptionContext);
				const prefetched = getPrefetchedUrls();
				if (prefetched.has(cacheKey)) {
					if (autoPrefetch.cacheForNavigation) {
						const existing = getPrefetchCache().get(cacheKey);
						if (existing?.cacheForNavigation === false) existing.cacheForNavigation = true;
					}
					return;
				}
				prefetched.add(cacheKey);
				prefetchRscResponse(rscUrl, fetch(rscUrl, {
					headers,
					credentials: "include",
					priority,
					purpose: "prefetch"
				}), interceptionContext, mountedSlotsHeader, void 0, {
					cacheForNavigation: autoPrefetch.cacheForNavigation,
					optimisticRouteShell: isOptimisticRouteShellPrefetch
				});
			} else if (window.__NEXT_DATA__?.__vinext?.pageModuleUrl) {
				const link = document.createElement("link");
				link.rel = "prefetch";
				link.href = fullHref;
				link.as = "document";
				document.head.appendChild(link);
			}
		})().catch((error) => {
			console.error("[vinext] RSC prefetch setup error:", error);
		});
	});
}
function promotePrefetchEntriesForNavigation(href) {
	if (typeof window === "undefined") return;
	let target;
	try {
		target = new URL(toBrowserNavigationHref(href, window.location.href, __basePath$1), window.location.href);
	} catch {
		return;
	}
	for (const [cacheKey, entry] of getPrefetchCache()) {
		if (entry.optimisticRouteShell === true) continue;
		const [rscUrl] = cacheKey.split("\0", 1);
		let cached;
		try {
			cached = new URL(rscUrl, window.location.href);
		} catch {
			continue;
		}
		stripRscCacheBustingSearchParam(cached);
		if (stripRscSuffix(cached.pathname) === target.pathname && cached.search === target.search) entry.cacheForNavigation = true;
	}
}
/**
* Shared IntersectionObserver for viewport-based prefetching.
* All Link elements use the same observer to minimize resource usage.
*/
var sharedObserver = null;
var observedLinkPrefetches = /* @__PURE__ */ new WeakMap();
var visibleLinkPrefetches = /* @__PURE__ */ new Set();
function setVisibleLinkPrefetch(instance, isVisible) {
	instance.isVisible = isVisible;
	if (isVisible) {
		visibleLinkPrefetches.add(instance);
		if (instance.routerMode === "pages" && instance.viewportPrefetched) return;
		prefetchUrl(instance.href, instance.mode, "low");
		instance.viewportPrefetched = true;
	} else visibleLinkPrefetches.delete(instance);
}
function registerVisibleLinkPing() {
	if (typeof window === "undefined") return;
	registerNavigationRuntimeFunctions({ pingVisibleLinks: pingVisibleLinkPrefetches });
}
function pingVisibleLinkPrefetches() {
	for (const instance of visibleLinkPrefetches) if (instance.isVisible && instance.routerMode === "app") prefetchUrl(instance.href, instance.mode, "low");
}
function getSharedObserver() {
	if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return null;
	if (sharedObserver) return sharedObserver;
	sharedObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const instance = observedLinkPrefetches.get(entry.target);
			if (!instance) continue;
			setVisibleLinkPrefetch(instance, entry.isIntersecting || entry.intersectionRatio > 0);
		}
	}, { rootMargin: "250px" });
	return sharedObserver;
}
function getDefaultLocale() {
	if (typeof window !== "undefined") return window.__VINEXT_DEFAULT_LOCALE__;
	return getI18nContext()?.defaultLocale;
}
function getCurrentLocale() {
	if (typeof window !== "undefined") return getCurrentBrowserLocale({
		basePath: __basePath$1,
		domainLocales: getDomainLocales(),
		hostname: getCurrentHostname()
	});
	return getI18nContext()?.locale;
}
function getDomainLocales() {
	if (typeof window !== "undefined") return window.__NEXT_DATA__?.domainLocales;
	return getI18nContext()?.domainLocales;
}
function getCurrentHostname() {
	if (typeof window !== "undefined") return window.location.hostname;
	return getI18nContext()?.hostname;
}
function getDomainLocaleHref(href, locale) {
	return getDomainLocaleUrl(href, locale, {
		basePath: __basePath$1,
		currentHostname: getCurrentHostname(),
		domainItems: getDomainLocales()
	});
}
function addLocalePrefixForRoot(href, locale) {
	if (href !== "/" && !href.startsWith("/?") && !href.startsWith("/#")) return;
	let parsed;
	try {
		parsed = new URL(href, "http://vinext.local");
	} catch {
		return;
	}
	if (parsed.origin !== "http://vinext.local" || parsed.pathname !== "/") return;
	return `/${locale}${parsed.search}${parsed.hash}`;
}
/**
* Apply locale prefix to a URL path based on the locale prop.
* - locale="fr" → prepend /fr (unless it already has a locale prefix)
* - locale={false} → use the href as-is (no locale prefix, link to default)
* - locale=undefined → use current locale (href as-is in most cases)
*/
function applyLocaleToHref(href, locale) {
	if (locale === false) return href;
	const resolvedLocale = locale ?? getCurrentLocale();
	if (resolvedLocale === void 0) return href;
	if (isAbsoluteOrProtocolRelativeUrl(href)) return href;
	const domainLocaleHref = getDomainLocaleHref(href, resolvedLocale);
	if (domainLocaleHref) return domainLocaleHref;
	const defaultLocale = getDefaultLocale() ?? "";
	if (resolvedLocale.toLowerCase() === defaultLocale.toLowerCase()) {
		const localeRootHref = addLocalePrefixForRoot(href, resolvedLocale);
		if (localeRootHref) return localeRootHref;
	}
	return addLocalePrefix(href, resolvedLocale, defaultLocale);
}
var Link = (0, import_react.forwardRef)(function Link({ href, as, replace = false, prefetch: prefetchProp, scroll = true, shallow = false, children, onClick, onMouseEnter, onTouchStart, onNavigate, unstable_dynamicOnHover = false, ...rest }, forwardedRef) {
	const { locale, ...restWithoutLocale } = rest;
	const resolvedHref = as ?? resolveHref(href);
	const isDangerous = typeof resolvedHref === "string" && isDangerousScheme(resolvedHref);
	const normalizedHref = normalizePathTrailingSlash(applyLocaleToHref(isDangerous ? "/" : resolvedHref, locale), __trailingSlash);
	const fullHref = normalizePathTrailingSlash(withBasePath$1(normalizedHref, __basePath$1), __trailingSlash);
	const [pending, setPending] = (0, import_react.useState)(false);
	const mountedRef = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);
	const internalRef = (0, import_react.useRef)(null);
	const prefetchMode = resolveLinkPrefetchMode(prefetchProp, isDangerous);
	const shouldViewportPrefetch = canLinkPrefetch({
		nodeEnv: "production",
		prefetch: prefetchProp,
		isDangerous
	});
	const setRefs = (0, import_react.useCallback)((node) => {
		internalRef.current = node;
		if (typeof forwardedRef === "function") forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	}, [forwardedRef]);
	(0, import_react.useEffect)(() => {
		if (!shouldViewportPrefetch || typeof window === "undefined") return;
		const node = internalRef.current;
		if (!node) return;
		const hrefToPrefetch = getLinkPrefetchHref({
			href: normalizedHref,
			basePath: __basePath$1,
			currentOrigin: window.location.origin
		});
		if (hrefToPrefetch == null) return;
		const observer = getSharedObserver();
		if (!observer) return;
		registerVisibleLinkPing();
		const instance = {
			href: hrefToPrefetch,
			isVisible: false,
			mode: prefetchMode,
			routerMode: getLinkPrefetchRouterMode(),
			viewportPrefetched: false
		};
		observedLinkPrefetches.set(node, instance);
		observer.observe(node);
		return () => {
			observer.unobserve(node);
			observedLinkPrefetches.delete(node);
			visibleLinkPrefetches.delete(instance);
		};
	}, [
		shouldViewportPrefetch,
		prefetchMode,
		normalizedHref
	]);
	const prefetchOnIntent = (0, import_react.useCallback)(() => {
		if (!canLinkIntentPrefetch({
			nodeEnv: "production",
			prefetch: prefetchProp,
			isDangerous,
			routerMode: getLinkPrefetchRouterMode()
		})) return;
		const intentMode = unstable_dynamicOnHover ? "full" : prefetchMode;
		if (unstable_dynamicOnHover && internalRef.current) {
			const instance = observedLinkPrefetches.get(internalRef.current);
			if (instance) instance.mode = "full";
			promotePrefetchEntriesForNavigation(normalizedHref);
		}
		prefetchUrl(normalizedHref, intentMode, "high");
	}, [
		prefetchProp,
		isDangerous,
		prefetchMode,
		normalizedHref,
		unstable_dynamicOnHover
	]);
	const handleMouseEnter = (0, import_react.useCallback)((e) => {
		onMouseEnter?.(e);
		prefetchOnIntent();
	}, [onMouseEnter, prefetchOnIntent]);
	const handleTouchStart = (0, import_react.useCallback)((e) => {
		onTouchStart?.(e);
		prefetchOnIntent();
	}, [onTouchStart, prefetchOnIntent]);
	const handleClick = async (e) => {
		if (onClick) onClick(e);
		if (e.defaultPrevented) return;
		if (e.currentTarget.hasAttribute("download")) return;
		if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		if (e.currentTarget.target && e.currentTarget.target !== "_self") return;
		let navigateHref = normalizedHref;
		if (isAbsoluteOrProtocolRelativeUrl(resolvedHref)) {
			const localPath = toSameOriginAppPath(resolvedHref, __basePath$1);
			if (localPath == null) {
				if (replace) {
					e.preventDefault();
					window.location.replace(resolvedHref);
				}
				return;
			}
			navigateHref = localPath;
		}
		e.preventDefault();
		const absoluteHref = resolveRelativeHref(navigateHref, window.location.href, __basePath$1);
		const absoluteFullHref = toBrowserNavigationHref(navigateHref, window.location.href, __basePath$1);
		if (onNavigate) try {
			const navUrl = new URL(absoluteFullHref, window.location.origin);
			let prevented = false;
			const navEvent = {
				url: navUrl,
				preventDefault() {
					prevented = true;
				},
				get defaultPrevented() {
					return prevented;
				}
			};
			onNavigate(navEvent);
			if (navEvent.defaultPrevented) return;
		} catch {}
		if (getNavigationRuntime()?.functions.navigate) {
			setPending(true);
			import_react.startTransition(() => {
				navigateClientSide(navigateHref, replace ? "replace" : "push", scroll, true).finally(() => {
					if (mountedRef.current) setPending(false);
				});
			});
			return;
		} else try {
			const Router = (await import("./router-D2NN95np.js")).default;
			await navigatePagesRouterLink(Router, {
				href: absoluteHref,
				replace,
				scroll,
				shallow,
				locale
			});
		} catch {
			if (replace) window.history.replaceState({}, "", absoluteFullHref);
			else window.history.pushState({}, "", absoluteFullHref);
			window.dispatchEvent(new PopStateEvent("popstate"));
		}
	};
	const { passHref: _p, ...anchorProps } = restWithoutLocale;
	const linkStatusValue = import_react.useMemo(() => ({ pending }), [pending]);
	if (isDangerous) {
		const handleDangerousClick = (event) => {
			if (onClick) onClick(event);
			reportBlockedDangerousNavigation();
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkStatusContext.Provider, {
			value: linkStatusValue,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				ref: setRefs,
				onClick: handleDangerousClick,
				onMouseEnter: handleMouseEnter,
				onTouchStart: handleTouchStart,
				...anchorProps,
				children
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkStatusContext.Provider, {
		value: linkStatusValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			ref: setRefs,
			href: fullHref,
			onClick: (event) => {
				handleClick(event);
			},
			onMouseEnter: handleMouseEnter,
			onTouchStart: handleTouchStart,
			...anchorProps,
			children
		})
	});
});
//#endregion
//#region node_modules/vinext/dist/shims/navigation.js
var _SERVER_INSERTED_HTML_CTX_KEY = Symbol.for("vinext.serverInsertedHTMLContext");
function getServerInsertedHTMLContext() {
	if (typeof import_react.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_SERVER_INSERTED_HTML_CTX_KEY]) globalState[_SERVER_INSERTED_HTML_CTX_KEY] = import_react.createContext(null);
	return globalState[_SERVER_INSERTED_HTML_CTX_KEY] ?? null;
}
getServerInsertedHTMLContext();
var _GLOBAL_ACCESSORS_KEY = Symbol.for("vinext.navigation.globalAccessors");
var _GLOBAL_HYDRATION_CONTEXT_KEY = Symbol.for("vinext.navigation.clientHydrationContext");
function _getGlobalAccessors() {
	return globalThis[_GLOBAL_ACCESSORS_KEY];
}
function _getClientHydrationContext() {
	const globalState = globalThis;
	if (Object.prototype.hasOwnProperty.call(globalState, _GLOBAL_HYDRATION_CONTEXT_KEY)) return globalState[_GLOBAL_HYDRATION_CONTEXT_KEY] ?? null;
}
var _serverContext = null;
var _getServerContext = () => {
	if (typeof window !== "undefined") {
		const hydrationContext = _getClientHydrationContext();
		return hydrationContext !== void 0 ? hydrationContext : _serverContext;
	}
	const g = _getGlobalAccessors();
	return g ? g.getServerContext() : _serverContext;
};
var PAGES_NAVIGATION_ACCESSOR_KEY = Symbol.for("vinext.navigation.pagesNavigationContextAccessor");
function _getPagesNavigationContext() {
	const accessor = globalThis[PAGES_NAVIGATION_ACCESSOR_KEY];
	if (!accessor) return null;
	try {
		return accessor();
	} catch {
		return null;
	}
}
var isServer = typeof window === "undefined";
var _CLIENT_NAV_STATE_KEY = Symbol.for("vinext.clientNavigationState");
function getClientNavigationState() {
	if (isServer) return null;
	const globalState = window;
	globalState[_CLIENT_NAV_STATE_KEY] ??= {
		listeners: /* @__PURE__ */ new Set(),
		cachedSearch: window.location.search,
		cachedReadonlySearchParams: new ReadonlyURLSearchParams(window.location.search),
		cachedPathname: stripBasePath(window.location.pathname, ""),
		clientParams: {},
		clientParamsJson: "{}",
		pendingClientParams: null,
		pendingClientParamsJson: null,
		pendingPathname: null,
		pendingPathnameNavId: null,
		originalPushState: window.history.pushState.bind(window.history),
		originalReplaceState: window.history.replaceState.bind(window.history),
		patchInstalled: false,
		hasPendingNavigationUpdate: false,
		suppressUrlNotifyCount: 0,
		navigationSnapshotActiveCount: 0
	};
	return globalState[_CLIENT_NAV_STATE_KEY];
}
function notifyNavigationListeners() {
	const state = getClientNavigationState();
	if (!state) return;
	for (const fn of state.listeners) fn();
}
/**
* Get cached pathname snapshot for useSyncExternalStore.
* Note: Returns cached value from ClientNavigationState, not live window.location.
* The cache is updated by syncCommittedUrlStateFromLocation() after navigation commits.
* This ensures referential stability and prevents infinite re-renders.
* External pushState/replaceState while URL notifications are suppressed won't
* be visible until the next commit.
*/
function getPathnameSnapshot() {
	return getClientNavigationState()?.cachedPathname ?? "/";
}
function syncCommittedUrlStateFromLocation() {
	const state = getClientNavigationState();
	if (!state) return false;
	let changed = false;
	const pathname = stripBasePath(window.location.pathname, "");
	if (pathname !== state.cachedPathname) {
		state.cachedPathname = pathname;
		changed = true;
	}
	const search = window.location.search;
	if (search !== state.cachedSearch) {
		state.cachedSearch = search;
		state.cachedReadonlySearchParams = new ReadonlyURLSearchParams(search);
		changed = true;
	}
	return changed;
}
var _EMPTY_PARAMS = {};
var _CLIENT_NAV_RENDER_CTX_KEY = Symbol.for("vinext.clientNavigationRenderContext");
function getClientNavigationRenderContext() {
	if (typeof import_react.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_CLIENT_NAV_RENDER_CTX_KEY]) globalState[_CLIENT_NAV_RENDER_CTX_KEY] = import_react.createContext(null);
	return globalState[_CLIENT_NAV_RENDER_CTX_KEY] ?? null;
}
function useClientNavigationRenderSnapshot() {
	const ctx = getClientNavigationRenderContext();
	if (!ctx || typeof import_react.useContext !== "function") return null;
	try {
		return import_react.useContext(ctx);
	} catch {
		return null;
	}
}
function getClientParamsSnapshot() {
	const state = getClientNavigationState();
	if (state && Object.keys(state.clientParams).length > 0) return state.clientParams;
	const pagesCtx = _getPagesNavigationContext();
	if (pagesCtx) return pagesCtx.params;
	return state?.clientParams ?? _EMPTY_PARAMS;
}
function getServerParamsSnapshot() {
	const ctx = _getServerContext();
	if (ctx) return ctx.params;
	return _getPagesNavigationContext()?.params ?? _EMPTY_PARAMS;
}
function subscribeToNavigation(cb) {
	const state = getClientNavigationState();
	if (!state) return () => {};
	state.listeners.add(cb);
	return () => {
		state.listeners.delete(cb);
	};
}
/**
* Returns the current pathname.
* Server: from request context. Client: from window.location.
*/
function usePathname() {
	if (isServer) {
		const ctx = _getServerContext();
		if (ctx) return ctx.pathname;
		return _getPagesNavigationContext()?.pathname ?? "/";
	}
	const renderSnapshot = useClientNavigationRenderSnapshot();
	const pathname = import_react.useSyncExternalStore(subscribeToNavigation, getPathnameSnapshot, () => _getServerContext()?.pathname ?? _getPagesNavigationContext()?.pathname ?? "/");
	if (renderSnapshot && (getClientNavigationState()?.navigationSnapshotActiveCount ?? 0) > 0) return renderSnapshot.pathname;
	return pathname;
}
/**
* Returns the dynamic params for the current route.
*/
function useParams() {
	if (isServer) return getServerParamsSnapshot();
	const renderSnapshot = useClientNavigationRenderSnapshot();
	const params = import_react.useSyncExternalStore(subscribeToNavigation, getClientParamsSnapshot, getServerParamsSnapshot);
	if (renderSnapshot && (getClientNavigationState()?.navigationSnapshotActiveCount ?? 0) > 0) return renderSnapshot.params;
	return params;
}
/**
* Commit pending client navigation state to committed snapshots.
*
* navId is optional: callers that don't own pendingPathname (for example,
* superseded pre-paint cleanup) may pass undefined to flush URL/params state
* without clearing pendingPathname owned by the active navigation. Such callers
* must opt in explicitly if they also own an activated render snapshot.
*/
function commitClientNavigationState(navId, options) {
	if (isServer) return;
	const state = getClientNavigationState();
	if (!state) return;
	if ((navId !== void 0 || options?.releaseSnapshot === true) && state.navigationSnapshotActiveCount > 0) state.navigationSnapshotActiveCount -= 1;
	const urlChanged = syncCommittedUrlStateFromLocation();
	if (state.pendingClientParams !== null && state.pendingClientParamsJson !== null) {
		state.clientParams = state.pendingClientParams;
		state.clientParamsJson = state.pendingClientParamsJson;
		state.pendingClientParams = null;
		state.pendingClientParamsJson = null;
	}
	if (state.pendingPathnameNavId === null || navId !== void 0 && state.pendingPathnameNavId === navId) {
		state.pendingPathname = null;
		state.pendingPathnameNavId = null;
	}
	const shouldNotify = urlChanged || state.hasPendingNavigationUpdate;
	state.hasPendingNavigationUpdate = false;
	if (shouldNotify) {
		notifyNavigationListeners();
		getNavigationRuntime()?.functions.pingVisibleLinks?.();
	}
}
/**
* Restore scroll position from a history state object (used on popstate).
*
* When an RSC navigation is in flight (back/forward triggers both this
* handler and the browser entry's popstate handler which calls the registered
* navigation runtime), we must wait for the new content to render
* before scrolling. Otherwise the user sees old content flash at the
* restored scroll position.
*
* This handler fires before the browser entry's popstate handler (because
* navigation.ts is loaded before hydration completes), so we defer via a
* microtask to give the browser entry handler a chance to set
* __VINEXT_RSC_PENDING__. Promise.resolve() schedules a microtask
* that runs after all synchronous event listeners have completed.
*/
function restoreScrollPosition(state) {
	if (state && typeof state === "object" && "__vinext_scrollY" in state) {
		const { __vinext_scrollX: x, __vinext_scrollY: y } = state;
		Promise.resolve().then(() => {
			const pending = window.__VINEXT_RSC_PENDING__ ?? null;
			if (pending) pending.then(() => {
				requestAnimationFrame(() => {
					window.scrollTo(x, y);
				});
			});
			else requestAnimationFrame(() => {
				window.scrollTo(x, y);
			});
		});
	}
}
if (!isServer) {
	const state = getClientNavigationState();
	if (state && !state.patchInstalled) {
		state.patchInstalled = true;
		window.addEventListener("popstate", (event) => {
			if (!hasAppNavigationRuntime()) {
				commitClientNavigationState();
				restoreScrollPosition(event.state);
			}
		});
		window.history.pushState = function patchedPushState(data, unused, url) {
			state.originalPushState.call(window.history, createExternalHistoryStatePreservingMetadata(data, window.history.state), unused, url);
			if (state.suppressUrlNotifyCount === 0) commitClientNavigationState();
		};
		window.history.replaceState = function patchedReplaceState(data, unused, url) {
			state.originalReplaceState.call(window.history, createExternalHistoryStatePreservingMetadata(data, window.history.state), unused, url);
			if (state.suppressUrlNotifyCount === 0) commitClientNavigationState();
		};
	}
}
//#endregion
//#region data/post.json
var post_default = [
	{
		"id": 1,
		"img": "news-11.jpg",
		"category": "food",
		"title": "Helpful Tips for Working from Home as a Freelancer",
		"author": "BARBARA CARTLAND",
		"date": "7 August",
		"readTime": "11",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "3k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 2,
		"img": "news-13.jpg",
		"category": "food",
		"title": "Helpful Tips for Working from Home as a Freelancer",
		"author": "BARBARA CARTLAND",
		"date": "7 August",
		"readTime": "11",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "3k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "269",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 3,
		"img": "news-4.jpg",
		"category": "cooking",
		"title": "10 Easy Ways to Be Environmentally Conscious At Home",
		"author": "BARBARA CARTLAND",
		"date": "27 August",
		"readTime": "10",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "22k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 4,
		"img": "news-2.jpg",
		"category": "cooking",
		"title": "My Favorite Comfies to Lounge in At Home",
		"author": "BARBARA CARTLAND",
		"date": "7 August",
		"readTime": "9",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "12k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 5,
		"img": "news-3.jpg",
		"category": "travel",
		"title": "Give Your Space a Parisian - Inspired  Makeover",
		"author": "BARBARA CARTLAND",
		"date": "27 August",
		"readTime": "12",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "23k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 6,
		"img": "news-11.jpg",
		"category": "food",
		"title": "Helpful Tips for Working from Home as a Freelancer",
		"author": "BARBARA CARTLAND",
		"date": "7 August",
		"readTime": "11",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "3k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 7,
		"img": "news-1.jpg",
		"category": "cooking",
		"title": "10 Easy Ways to Be Environmentally Conscious At Home",
		"author": "BARBARA CARTLAND",
		"date": "27 August",
		"readTime": "10",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "22k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 8,
		"img": "news-5.jpg",
		"category": "cooking",
		"title": "My Favorite Comfies to Lounge in At Home",
		"author": "BARBARA CARTLAND",
		"date": "7 August",
		"readTime": "9",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "12k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 9,
		"img": "news-6.jpg",
		"category": "travel",
		"title": "Give Your Space a Parisian - Inspired Makeover",
		"author": "BARBARA CARTLAND",
		"date": "27 August",
		"readTime": "12",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "23k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	},
	{
		"id": 10,
		"img": "news-11.jpg",
		"category": "hotels",
		"title": "Helpful Tips for Working from Home as a Freelancer",
		"author": "BARBARA CARTLAND",
		"date": "7 August",
		"readTime": "11",
		"desc": "Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.",
		"views": "3k",
		"tags": [
			"Deer",
			"Nature",
			"Conserve"
		],
		"comments": "182",
		"likes": "268",
		"rating": "9",
		"totalPost": "25"
	}
];
//#endregion
//#region node_modules/vinext/dist/shims/head.js
/**
* next/head shim
*
* In the Pages Router, <Head> manages document <head> elements.
* - On the server: collects elements into a module-level array that the
*   dev-server reads after render and injects into the HTML <head>.
* - On the client: reduces all mounted <Head> instances into one deduped
*   document.head projection and applies it with DOM manipulation.
*/
var _ssrHeadChildren = [];
var _clientHeadChildren = /* @__PURE__ */ new Map();
var _getSSRHeadChildren = () => _ssrHeadChildren;
/**
* Tags allowed inside <head>. Anything else is silently dropped.
* This prevents injection of dangerous elements like <iframe>, <object>, etc.
*/
var ALLOWED_HEAD_TAGS = /* @__PURE__ */ new Set([
	"title",
	"meta",
	"link",
	"style",
	"script",
	"base",
	"noscript"
]);
Array.from(ALLOWED_HEAD_TAGS).join(", ");
var META_TYPES = [
	"name",
	"httpEquiv",
	"charSet",
	"itemProp"
];
function collectHeadElements(list, child) {
	if (child == null || typeof child === "boolean" || typeof child === "string" || typeof child === "number") return list;
	if (!(0, import_react.isValidElement)(child)) return list;
	if (child.type === import_react.Fragment) return import_react.Children.toArray(child.props.children).reduce(collectHeadElements, list);
	if (typeof child.type !== "string") return list;
	if (!ALLOWED_HEAD_TAGS.has(child.type)) {
		child.type;
		return list;
	}
	return list.concat(child);
}
function normalizeHeadKey(key) {
	if (key == null || typeof key === "number") return null;
	const normalizedKey = String(key);
	const separatorIndex = normalizedKey.indexOf("$");
	return separatorIndex > 0 ? normalizedKey.slice(separatorIndex + 1) : null;
}
function createUniqueHeadFilter() {
	const keys = /* @__PURE__ */ new Set();
	const tags = /* @__PURE__ */ new Set();
	const metaTypes = /* @__PURE__ */ new Set();
	const metaCategories = /* @__PURE__ */ new Map();
	return (child) => {
		let isUnique = true;
		const normalizedKey = normalizeHeadKey(child.key);
		const hasKey = normalizedKey !== null;
		if (normalizedKey) if (keys.has(normalizedKey)) isUnique = false;
		else keys.add(normalizedKey);
		switch (child.type) {
			case "title":
			case "base":
				if (tags.has(child.type)) isUnique = false;
				else tags.add(child.type);
				break;
			case "meta": {
				const props = child.props;
				for (const metaType of META_TYPES) {
					if (!Object.prototype.hasOwnProperty.call(props, metaType)) continue;
					if (metaType === "charSet") {
						if (metaTypes.has(metaType)) isUnique = false;
						else metaTypes.add(metaType);
						continue;
					}
					const category = props[metaType];
					if (typeof category !== "string") continue;
					let categories = metaCategories.get(metaType);
					if (!categories) {
						categories = /* @__PURE__ */ new Set();
						metaCategories.set(metaType, categories);
					}
					if ((metaType !== "name" || !hasKey) && categories.has(category)) isUnique = false;
					else categories.add(category);
				}
				break;
			}
		}
		return isUnique;
	};
}
function reduceHeadChildren(headChildren) {
	return headChildren.reduce((flattenedChildren, child) => flattenedChildren.concat(import_react.Children.toArray(child)), []).reduce(collectHeadElements, []).reverse().filter(createUniqueHeadFilter()).reverse();
}
/**
* Validate an HTML attribute name. Rejects names that could break out of
* the attribute context during SSR serialization, or that represent inline
* event handlers (on*). Only allows alphanumeric characters, hyphens, and
* common data-attribute patterns.
*/
var SAFE_ATTR_NAME_RE = /^[a-zA-Z][a-zA-Z0-9\-:.]*$/;
function isSafeAttrName(name) {
	if (!SAFE_ATTR_NAME_RE.test(name)) return false;
	if (name.length > 2 && name[0] === "o" && name[1] === "n" && name[2] >= "A" && name[2] <= "z") return false;
	return true;
}
function getDangerouslySetInnerHTML(value) {
	if (typeof value !== "object" || value === null) return void 0;
	const html = Reflect.get(value, "__html");
	return typeof html === "string" ? html : void 0;
}
function _applyHeadPropsToElement(domEl, props) {
	const rawHtml = getDangerouslySetInnerHTML(props.dangerouslySetInnerHTML);
	if (rawHtml != null) domEl.innerHTML = rawHtml;
	else if (typeof props.children === "string") domEl.textContent = props.children;
	else if (Array.isArray(props.children)) domEl.textContent = props.children.join("");
	for (const [key, value] of Object.entries(props)) if (key === "children" || key === "dangerouslySetInnerHTML") continue;
	else if (key === "className") domEl.setAttribute("class", String(value));
	else if (typeof value === "boolean" && value) {
		if (!isSafeAttrName(key)) continue;
		domEl.setAttribute(key, "");
	} else if (typeof value === "string") {
		if (!isSafeAttrName(key)) continue;
		domEl.setAttribute(key, value);
	}
}
function syncClientHead() {
	document.querySelectorAll("[data-vinext-head]").forEach((el) => el.remove());
	for (const child of reduceHeadChildren([..._clientHeadChildren.values()])) {
		if (typeof child.type !== "string") continue;
		const domEl = document.createElement(child.type);
		const props = child.props;
		_applyHeadPropsToElement(domEl, props);
		domEl.setAttribute("data-vinext-head", "true");
		document.head.appendChild(domEl);
	}
}
function Head({ children }) {
	const headInstanceIdRef = (0, import_react.useRef)(null);
	if (headInstanceIdRef.current === null) headInstanceIdRef.current = Symbol("vinext-head");
	if (typeof window === "undefined") {
		_getSSRHeadChildren().push(children);
		return null;
	}
	(0, import_react.useEffect)(() => {
		const instanceId = headInstanceIdRef.current;
		_clientHeadChildren.set(instanceId, children);
		syncClientHead();
		return () => {
			_clientHeadChildren.delete(instanceId);
			syncClientHead();
		};
	}, [children]);
	return null;
}
//#endregion
export { Link as a, getDomainLocaleUrl as c, appendSearchParamsToUrl as d, urlQueryToSearchParams as f, usePathname as i, getLocalePathPrefix as l, post_default as n, getCurrentBrowserLocale as o, useParams as r, addLocalePrefix as s, Head as t, addQueryParam as u };
