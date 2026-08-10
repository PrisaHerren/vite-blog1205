globalThis.__VINEXT_LAZY_CHUNKS__ = ["_next/static/PostCarousel1-CKFapQS4.js","_next/static/author-N8ZDxohO.js","_next/static/comments-CYqmlEtA.js","_next/static/head-C3RpGZfv.js","_next/static/layout-Bk8fgxxY.js","_next/static/page-CuJVpAVZ.js","_next/static/page-DwK6Bceg.js","_next/static/page-DBJKgCfA.js","_next/static/page-B5qsiDnu.js","_next/static/page-JD4bZVqI.js","_next/static/page-eOvfkb5d.js","_next/static/page-DtjpBlfU.js","_next/static/page-fIX2oSny.js","_next/static/page-B4fVv88o.js","_next/static/page-BFUXk_px.js","_next/static/page-Dds3QHB5.js","_next/static/loading-CQxBiHvK.js","_next/static/page-CTvWNZT8.js","_next/static/page-4v7v5-Jv.js","_next/static/page-CKiGH-Uf.js","_next/static/page-jYQRV5bx.js","_next/static/page-bHX3STcc.js","_next/static/page-BLxMv1Ea.js","_next/static/page-BfSKzJ47.js","_next/static/page-LweaEPpC.js","_next/static/page-mxdQDjS-.js","_next/static/page-BAa09dTN.js","_next/static/page-BpsH8DLL.js","_next/static/page-DYOQCpq1.js","_next/static/page-7w_7BO-a.js","_next/static/ScrollProgress-B-WGN4uK.js","_next/static/PostCarousel1-DqrWcTFD.js","_next/static/default-global-error-Dy08h5xM.js","_next/static/layout-segment-context-BQzQLJBZ.js","_next/static/router-DkETmwLw.js"];
import * as __viteRscAsyncHooks from "node:async_hooks";
import { AsyncLocalStorage as AsyncLocalStorage$1 } from "node:async_hooks";
import assetsManifest from "./__vite_rsc_assets_manifest.js";
import fs from "node:fs";
import path from "node:path";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/vinext/dist/server/server-globals.js
/**
* Server runtime global setup shared by vinext's generated server entries.
*
* This module intentionally runs its installer at import time. Generated entry
* modules import user pages and layouts as static dependencies, so any global
* correction that must happen before user module evaluation has to live in a
* side-effect dependency. A runtime function call from the generated entry
* body would run after static user imports have already evaluated.
*/
function clearBrowserGlobal(name) {
	const descriptor = Object.getOwnPropertyDescriptor(globalThis, name);
	if (!descriptor && typeof Reflect.get(globalThis, name) === "undefined") return;
	if (!descriptor) Object.defineProperty(globalThis, name, {
		configurable: true,
		value: void 0,
		writable: true
	});
	else if (descriptor.configurable) Reflect.deleteProperty(globalThis, name);
	else Reflect.set(globalThis, name, void 0);
	if (typeof Reflect.get(globalThis, name) !== "undefined") throw new Error(`[vinext] Server runtime exposes a non-removable \`${name}\` global. This breaks Next.js SSR semantics where browser globals must be absent.`);
}
function installServerGlobals() {
	clearBrowserGlobal("window");
	clearBrowserGlobal("document");
	if (typeof Reflect.get(globalThis, "AsyncLocalStorage") === "undefined") Object.defineProperty(globalThis, "AsyncLocalStorage", {
		configurable: true,
		value: AsyncLocalStorage$1,
		writable: true
	});
}
installServerGlobals();
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/dist-uqdtSkzK.js
function tinyassert(value, message) {
	if (value) return;
	if (message instanceof Error) throw message;
	throw new TinyAssertionError(message, tinyassert);
}
var TinyAssertionError = class extends Error {
	constructor(message, stackStartFunction) {
		super(message ?? "TinyAssertionError");
		if (stackStartFunction && "captureStackTrace" in Error) Error.captureStackTrace(this, stackStartFunction);
	}
};
function safeFunctionCast(f) {
	return f;
}
function memoize(f, options) {
	const keyFn = options?.keyFn ?? ((...args) => args[0]);
	const cache = options?.cache ?? /* @__PURE__ */ new Map();
	return safeFunctionCast(function(...args) {
		const key = keyFn(...args);
		const value = cache.get(key);
		if (typeof value !== "undefined") return value;
		const newValue = f.apply(this, args);
		cache.set(key, newValue);
		return newValue;
	});
}
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/shared-Y4B6DJ99.js
var SERVER_REFERENCE_PREFIX = "$$server:";
var SERVER_DECODE_CLIENT_PREFIX = "$$decode-client:";
var SERVER_REFERENCE_PRESERVE_PREFIX = "$$preserve:";
function removeReferenceCacheTag(id) {
	return id.split("$$cache=")[0];
}
function setInternalRequire() {
	globalThis.__vite_rsc_require__ = (id) => {
		if (id.startsWith("$$server:")) {
			id = id.slice(9);
			return globalThis.__vite_rsc_server_require__(id);
		}
		return globalThis.__vite_rsc_client_require__(id);
	};
}
//#endregion
//#region node_modules/react/cjs/react.react-server.production.js
/**
* @license React
* react.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactSharedInternals = {
		H: null,
		A: null
	};
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var isArrayImpl = Array.isArray;
	function noop() {}
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var assign = Object.assign;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error(formatProdErrorMessage(31, "[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array));
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	function createCacheRoot() {
		return /* @__PURE__ */ new WeakMap();
	}
	function createCacheNode() {
		return {
			s: 0,
			v: void 0,
			o: null,
			p: null
		};
	}
	exports.Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error(formatProdErrorMessage(143));
			return children;
		}
	};
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.cache = function(fn) {
		return function() {
			var dispatcher = ReactSharedInternals.A;
			if (!dispatcher) return fn.apply(null, arguments);
			var fnMap = dispatcher.getCacheForType(createCacheRoot);
			dispatcher = fnMap.get(fn);
			void 0 === dispatcher && (dispatcher = createCacheNode(), fnMap.set(fn, dispatcher));
			fnMap = 0;
			for (var l = arguments.length; fnMap < l; fnMap++) {
				var arg = arguments[fnMap];
				if ("function" === typeof arg || "object" === typeof arg && null !== arg) {
					var objectCache = dispatcher.o;
					null === objectCache && (dispatcher.o = objectCache = /* @__PURE__ */ new WeakMap());
					dispatcher = objectCache.get(arg);
					void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
				} else objectCache = dispatcher.p, null === objectCache && (dispatcher.p = objectCache = /* @__PURE__ */ new Map()), dispatcher = objectCache.get(arg), void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
			}
			if (1 === dispatcher.s) return dispatcher.v;
			if (2 === dispatcher.s) throw dispatcher.v;
			try {
				var result = fn.apply(null, arguments);
				fnMap = dispatcher;
				fnMap.s = 1;
				return fnMap.v = result;
			} catch (error) {
				throw result = dispatcher, result.s = 2, result.v = error, error;
			}
		};
	};
	exports.cacheSignal = function() {
		var dispatcher = ReactSharedInternals.A;
		return dispatcher ? dispatcher.cacheSignal() : null;
	};
	exports.captureOwnerStack = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error(formatProdErrorMessage(267, element));
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useDebugValue = function() {};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.version = "19.2.8";
}));
//#endregion
//#region node_modules/react/react.react-server.js
var require_react_react_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_react_server_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.react-server.production.js
/**
* @license React
* react-dom.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react_react_server();
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	};
	if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.version = "19.2.8";
}));
//#endregion
//#region node_modules/react-dom/react-dom.react-server.js
var require_react_dom_react_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_dom_react_server_production();
}));
//#endregion
//#region node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack-server.edge.production.js
var require_react_server_dom_webpack_server_edge_production$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	globalThis.AsyncLocalStorage = __viteRscAsyncHooks.AsyncLocalStorage;
	/**
	* @license React
	* react-server-dom-webpack-server.edge.production.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var ReactDOM = require_react_dom_react_server();
	var React = require_react_react_server();
	function noop() {}
	var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ASYNC_ITERATOR = Symbol.asyncIterator;
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	var LocalPromise = Promise;
	var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
		LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	};
	var currentView = null;
	var writtenBytes = 0;
	function writeChunkAndReturn(destination, chunk) {
		if (0 !== chunk.byteLength) if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = /* @__PURE__ */ new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
		else {
			var allowableBytes = currentView.length - writtenBytes;
			allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = /* @__PURE__ */ new Uint8Array(2048), writtenBytes = 0);
			currentView.set(chunk, writtenBytes);
			writtenBytes += chunk.byteLength;
		}
		return !0;
	}
	var textEncoder = new TextEncoder();
	function stringToChunk(content) {
		return textEncoder.encode(content);
	}
	function byteLengthOfChunk(chunk) {
		return chunk.byteLength;
	}
	function closeWithError(destination, error) {
		"function" === typeof destination.error ? destination.error(error) : destination.close();
	}
	var CLIENT_REFERENCE_TAG$1 = Symbol.for("react.client.reference");
	var SERVER_REFERENCE_TAG = Symbol.for("react.server.reference");
	function registerClientReferenceImpl(proxyImplementation, id, async) {
		return Object.defineProperties(proxyImplementation, {
			$$typeof: { value: CLIENT_REFERENCE_TAG$1 },
			$$id: { value: id },
			$$async: { value: async }
		});
	}
	var FunctionBind = Function.prototype.bind;
	var ArraySlice = Array.prototype.slice;
	function bind() {
		var newFn = FunctionBind.apply(this, arguments);
		if (this.$$typeof === SERVER_REFERENCE_TAG) {
			var args = ArraySlice.call(arguments, 1), $$typeof = { value: SERVER_REFERENCE_TAG }, $$id = { value: this.$$id };
			args = { value: this.$$bound ? this.$$bound.concat(args) : args };
			return Object.defineProperties(newFn, {
				$$typeof,
				$$id,
				$$bound: args,
				bind: {
					value: bind,
					configurable: !0
				}
			});
		}
		return newFn;
	}
	var serverReferenceToString = {
		value: function() {
			return "function () { [omitted code] }";
		},
		configurable: !0,
		writable: !0
	};
	var PROMISE_PROTOTYPE = Promise.prototype;
	var deepProxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "$$id": return target.$$id;
				case "$$async": return target.$$async;
				case "name": return target.name;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
			}
			throw Error("Cannot access " + (String(target.name) + "." + String(name)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	};
	function getReference(target, name) {
		switch (name) {
			case "$$typeof": return target.$$typeof;
			case "$$id": return target.$$id;
			case "$$async": return target.$$async;
			case "name": return target.name;
			case "defaultProps": return;
			case "_debugInfo": return;
			case "toJSON": return;
			case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
			case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
			case "__esModule":
				var moduleId = target.$$id;
				target.default = registerClientReferenceImpl(function() {
					throw Error("Attempted to call the default export of " + moduleId + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
				}, target.$$id + "#", target.$$async);
				return !0;
			case "then":
				if (target.then) return target.then;
				if (target.$$async) return;
				var clientReference = registerClientReferenceImpl({}, target.$$id, !0), proxy = new Proxy(clientReference, proxyHandlers$1);
				target.status = "fulfilled";
				target.value = proxy;
				return target.then = registerClientReferenceImpl(function(resolve) {
					return Promise.resolve(resolve(proxy));
				}, target.$$id + "#then", !1);
		}
		if ("symbol" === typeof name) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
		clientReference = target[name];
		clientReference || (clientReference = registerClientReferenceImpl(function() {
			throw Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, target.$$id + "#" + name, target.$$async), Object.defineProperty(clientReference, "name", { value: name }), clientReference = target[name] = new Proxy(clientReference, deepProxyHandlers));
		return clientReference;
	}
	var proxyHandlers$1 = {
		get: function(target, name) {
			return getReference(target, name);
		},
		getOwnPropertyDescriptor: function(target, name) {
			var descriptor = Object.getOwnPropertyDescriptor(target, name);
			descriptor || (descriptor = {
				value: getReference(target, name),
				writable: !1,
				configurable: !1,
				enumerable: !1
			}, Object.defineProperty(target, name, descriptor));
			return descriptor;
		},
		getPrototypeOf: function() {
			return PROMISE_PROTOTYPE;
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	};
	var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: previousDispatcher.f,
		r: previousDispatcher.r,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule$1,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	function prefetchDNS(href) {
		if ("string" === typeof href && href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "D|" + href;
				hints.has(key) || (hints.add(key), emitHint(request, "D", href));
			} else previousDispatcher.D(href);
		}
	}
	function preconnect(href, crossOrigin) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "C|" + (null == crossOrigin ? "null" : crossOrigin) + "|" + href;
				hints.has(key) || (hints.add(key), "string" === typeof crossOrigin ? emitHint(request, "C", [href, crossOrigin]) : emitHint(request, "C", href));
			} else previousDispatcher.C(href, crossOrigin);
		}
	}
	function preload(href, as, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "L";
				if ("image" === as && options) {
					var imageSrcSet = options.imageSrcSet, imageSizes = options.imageSizes, uniquePart = "";
					"string" === typeof imageSrcSet && "" !== imageSrcSet ? (uniquePart += "[" + imageSrcSet + "]", "string" === typeof imageSizes && (uniquePart += "[" + imageSizes + "]")) : uniquePart += "[][]" + href;
					key += "[image]" + uniquePart;
				} else key += "[" + as + "]" + href;
				hints.has(key) || (hints.add(key), (options = trimOptions(options)) ? emitHint(request, "L", [
					href,
					as,
					options
				]) : emitHint(request, "L", [href, as]));
			} else previousDispatcher.L(href, as, options);
		}
	}
	function preloadModule$1(href, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "m|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "m", [href, options]) : emitHint(request, "m", href);
			}
			previousDispatcher.m(href, options);
		}
	}
	function preinitStyle(href, precedence, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "S|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "S", [
					href,
					"string" === typeof precedence ? precedence : 0,
					options
				]) : "string" === typeof precedence ? emitHint(request, "S", [href, precedence]) : emitHint(request, "S", href);
			}
			previousDispatcher.S(href, precedence, options);
		}
	}
	function preinitScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "X|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "X", [src, options]) : emitHint(request, "X", src);
			}
			previousDispatcher.X(src, options);
		}
	}
	function preinitModuleScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "M|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "M", [src, options]) : emitHint(request, "M", src);
			}
			previousDispatcher.M(src, options);
		}
	}
	function trimOptions(options) {
		if (null == options) return null;
		var hasProperties = !1, trimmed = {}, key;
		for (key in options) null != options[key] && (hasProperties = !0, trimmed[key] = options[key]);
		return hasProperties ? trimmed : null;
	}
	function getChildFormatContext(parentContext, type, props) {
		switch (type) {
			case "img":
				type = props.src;
				var srcSet = props.srcSet;
				if (!("lazy" === props.loading || !type && !srcSet || "string" !== typeof type && null != type || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || parentContext & 3) && ("string" !== typeof type || ":" !== type[4] || "d" !== type[0] && "D" !== type[0] || "a" !== type[1] && "A" !== type[1] || "t" !== type[2] && "T" !== type[2] || "a" !== type[3] && "A" !== type[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
					var sizes = "string" === typeof props.sizes ? props.sizes : void 0;
					var input = props.crossOrigin;
					preload(type || "", "image", {
						imageSrcSet: srcSet,
						imageSizes: sizes,
						crossOrigin: "string" === typeof input ? "use-credentials" === input ? input : "" : void 0,
						integrity: props.integrity,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy
					});
				}
				return parentContext;
			case "link":
				type = props.rel;
				srcSet = props.href;
				if (!(parentContext & 1 || null != props.itemProp || "string" !== typeof type || "string" !== typeof srcSet || "" === srcSet)) switch (type) {
					case "preload":
						preload(srcSet, props.as, {
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy,
							imageSrcSet: props.imageSrcSet,
							imageSizes: props.imageSizes,
							media: props.media
						});
						break;
					case "modulepreload":
						preloadModule$1(srcSet, {
							as: props.as,
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce
						});
						break;
					case "stylesheet": preload(srcSet, "stylesheet", {
						crossOrigin: props.crossOrigin,
						integrity: props.integrity,
						nonce: props.nonce,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy,
						media: props.media
					});
				}
				return parentContext;
			case "picture": return parentContext | 2;
			case "noscript": return parentContext | 1;
			default: return parentContext;
		}
	}
	var supportsRequestStorage = "function" === typeof AsyncLocalStorage;
	var requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null;
	var TEMPORARY_REFERENCE_TAG = Symbol.for("react.temporary.reference");
	var proxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "name": return;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": return;
			}
			throw Error("Cannot access " + String(name) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
		},
		set: function() {
			throw Error("Cannot assign to a temporary client reference from a server module.");
		}
	};
	function createTemporaryReference(temporaryReferences, id) {
		var reference = Object.defineProperties(function() {
			throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, { $$typeof: { value: TEMPORARY_REFERENCE_TAG } });
		reference = new Proxy(reference, proxyHandlers);
		temporaryReferences.set(reference, id);
		return reference;
	}
	var SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default:
				"string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
					if ("pending" === thenable.status) {
						var fulfilledThenable = thenable;
						fulfilledThenable.status = "fulfilled";
						fulfilledThenable.value = fulfilledValue;
					}
				}, function(error) {
					if ("pending" === thenable.status) {
						var rejectedThenable = thenable;
						rejectedThenable.status = "rejected";
						rejectedThenable.reason = error;
					}
				}));
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	var currentRequest$1 = null;
	var thenableIndexCounter = 0;
	var thenableState = null;
	function getThenableStateAfterSuspending() {
		var state = thenableState || [];
		thenableState = null;
		return state;
	}
	var HooksDispatcher = {
		readContext: unsupportedContext,
		use,
		useCallback: function(callback) {
			return callback;
		},
		useContext: unsupportedContext,
		useEffect: unsupportedHook,
		useImperativeHandle: unsupportedHook,
		useLayoutEffect: unsupportedHook,
		useInsertionEffect: unsupportedHook,
		useMemo: function(nextCreate) {
			return nextCreate();
		},
		useReducer: unsupportedHook,
		useRef: unsupportedHook,
		useState: unsupportedHook,
		useDebugValue: function() {},
		useDeferredValue: unsupportedHook,
		useTransition: unsupportedHook,
		useSyncExternalStore: unsupportedHook,
		useId,
		useHostTransitionStatus: unsupportedHook,
		useFormState: unsupportedHook,
		useActionState: unsupportedHook,
		useOptimistic: unsupportedHook,
		useMemoCache: function(size) {
			for (var data = Array(size), i = 0; i < size; i++) data[i] = REACT_MEMO_CACHE_SENTINEL;
			return data;
		},
		useCacheRefresh: function() {
			return unsupportedRefresh;
		}
	};
	HooksDispatcher.useEffectEvent = unsupportedHook;
	function unsupportedHook() {
		throw Error("This Hook is not supported in Server Components.");
	}
	function unsupportedRefresh() {
		throw Error("Refreshing the cache is not supported in Server Components.");
	}
	function unsupportedContext() {
		throw Error("Cannot read a Client Context from a Server Component.");
	}
	function useId() {
		if (null === currentRequest$1) throw Error("useId can only be used while React is rendering");
		var id = currentRequest$1.identifierCount++;
		return "_" + currentRequest$1.identifierPrefix + "S_" + id.toString(32) + "_";
	}
	function use(usable) {
		if (null !== usable && "object" === typeof usable || "function" === typeof usable) {
			if ("function" === typeof usable.then) {
				var index = thenableIndexCounter;
				thenableIndexCounter += 1;
				null === thenableState && (thenableState = []);
				return trackUsedThenable(thenableState, usable, index);
			}
			usable.$$typeof === REACT_CONTEXT_TYPE && unsupportedContext();
		}
		if (usable.$$typeof === CLIENT_REFERENCE_TAG$1) {
			if (null != usable.value && usable.value.$$typeof === REACT_CONTEXT_TYPE) throw Error("Cannot read a Client Context from a Server Component.");
			throw Error("Cannot use() an already resolved Client Reference.");
		}
		throw Error("An unsupported type was passed to use(): " + String(usable));
	}
	var DefaultAsyncDispatcher = {
		getCacheForType: function(resourceType) {
			var JSCompiler_inline_result = (JSCompiler_inline_result = resolveRequest()) ? JSCompiler_inline_result.cache : /* @__PURE__ */ new Map();
			var entry = JSCompiler_inline_result.get(resourceType);
			void 0 === entry && (entry = resourceType(), JSCompiler_inline_result.set(resourceType, entry));
			return entry;
		},
		cacheSignal: function() {
			var request = resolveRequest();
			return request ? request.cacheController.signal : null;
		}
	};
	var ReactSharedInternalsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	if (!ReactSharedInternalsServer) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	var isArrayImpl = Array.isArray;
	var getPrototypeOf = Object.getPrototypeOf;
	function objectName(object) {
		object = Object.prototype.toString.call(object);
		return object.slice(8, object.length - 1);
	}
	function describeValueForErrorMessage(value) {
		switch (typeof value) {
			case "string": return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
			case "object":
				if (isArrayImpl(value)) return "[...]";
				if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
				value = objectName(value);
				return "Object" === value ? "{...}" : value;
			case "function": return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
			default: return String(value);
		}
	}
	function describeElementType(type) {
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_FORWARD_REF_TYPE: return describeElementType(type.render);
			case REACT_MEMO_TYPE: return describeElementType(type.type);
			case REACT_LAZY_TYPE:
				var payload = type._payload;
				type = type._init;
				try {
					return describeElementType(type(payload));
				} catch (x) {}
		}
		return "";
	}
	var CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference");
	function describeObjectForErrorMessage(objectOrArray, expandedName) {
		var objKind = objectName(objectOrArray);
		if ("Object" !== objKind && "Array" !== objKind) return objKind;
		objKind = -1;
		var length = 0;
		if (isArrayImpl(objectOrArray)) {
			var str = "[";
			for (var i = 0; i < objectOrArray.length; i++) {
				0 < i && (str += ", ");
				var value = objectOrArray[i];
				value = "object" === typeof value && null !== value ? describeObjectForErrorMessage(value) : describeValueForErrorMessage(value);
				"" + i === expandedName ? (objKind = str.length, length = value.length, str += value) : str = 10 > value.length && 40 > str.length + value.length ? str + value : str + "...";
			}
			str += "]";
		} else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) str = "<" + describeElementType(objectOrArray.type) + "/>";
		else {
			if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
			str = "{";
			i = Object.keys(objectOrArray);
			for (value = 0; value < i.length; value++) {
				0 < value && (str += ", ");
				var name = i[value], encodedKey = JSON.stringify(name);
				str += ("\"" + name + "\"" === encodedKey ? name : encodedKey) + ": ";
				encodedKey = objectOrArray[name];
				encodedKey = "object" === typeof encodedKey && null !== encodedKey ? describeObjectForErrorMessage(encodedKey) : describeValueForErrorMessage(encodedKey);
				name === expandedName ? (objKind = str.length, length = encodedKey.length, str += encodedKey) : str = 10 > encodedKey.length && 40 > str.length + encodedKey.length ? str + encodedKey : str + "...";
			}
			str += "}";
		}
		return void 0 === expandedName ? str : -1 < objKind && 0 < length ? (objectOrArray = " ".repeat(objKind) + "^".repeat(length), "\n  " + str + "\n  " + objectOrArray) : "\n  " + str;
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var ObjectPrototype$1 = Object.prototype;
	var stringify = JSON.stringify;
	function defaultErrorHandler(error) {
		console.error(error);
	}
	function RequestInstance(type, model, bundlerConfig, onError, onPostpone, onAllReady, onFatalError, identifierPrefix, temporaryReferences) {
		if (null !== ReactSharedInternalsServer.A && ReactSharedInternalsServer.A !== DefaultAsyncDispatcher) throw Error("Currently React only supports one RSC renderer at a time.");
		ReactSharedInternalsServer.A = DefaultAsyncDispatcher;
		var abortSet = /* @__PURE__ */ new Set(), pingedTasks = [], hints = /* @__PURE__ */ new Set();
		this.type = type;
		this.status = 10;
		this.flushScheduled = !1;
		this.destination = this.fatalError = null;
		this.bundlerConfig = bundlerConfig;
		this.cache = /* @__PURE__ */ new Map();
		this.cacheController = new AbortController();
		this.pendingChunks = this.nextChunkId = 0;
		this.hints = hints;
		this.abortableTasks = abortSet;
		this.pingedTasks = pingedTasks;
		this.completedImportChunks = [];
		this.completedHintChunks = [];
		this.completedRegularChunks = [];
		this.completedErrorChunks = [];
		this.writtenSymbols = /* @__PURE__ */ new Map();
		this.writtenClientReferences = /* @__PURE__ */ new Map();
		this.writtenServerReferences = /* @__PURE__ */ new Map();
		this.writtenObjects = /* @__PURE__ */ new WeakMap();
		this.temporaryReferences = temporaryReferences;
		this.identifierPrefix = identifierPrefix || "";
		this.identifierCount = 1;
		this.taintCleanupQueue = [];
		this.onError = void 0 === onError ? defaultErrorHandler : onError;
		this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
		this.onAllReady = onAllReady;
		this.onFatalError = onFatalError;
		type = createTask(this, model, null, !1, 0, abortSet);
		pingedTasks.push(type);
	}
	var currentRequest = null;
	function resolveRequest() {
		if (currentRequest) return currentRequest;
		if (supportsRequestStorage) {
			var store = requestStorage.getStore();
			if (store) return store;
		}
		return null;
	}
	function serializeThenable(request, task, thenable) {
		var newTask = createTask(request, thenable, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		switch (thenable.status) {
			case "fulfilled": return newTask.model = thenable.value, pingTask(request, newTask), newTask.id;
			case "rejected": return erroredTask(request, newTask, thenable.reason), newTask.id;
			default:
				if (12 === request.status) return request.abortableTasks.delete(newTask), 21 === request.type ? (haltTask(newTask), finishHaltedTask(newTask, request)) : (task = request.fatalError, abortTask(newTask), finishAbortedTask(newTask, request, task)), newTask.id;
				"string" !== typeof thenable.status && (thenable.status = "pending", thenable.then(function(fulfilledValue) {
					"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
				}, function(error) {
					"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
				}));
		}
		thenable.then(function(value) {
			newTask.model = value;
			pingTask(request, newTask);
		}, function(reason) {
			0 === newTask.status && (erroredTask(request, newTask, reason), enqueueFlush(request));
		});
		return newTask.id;
	}
	function serializeReadableStream(request, task, stream) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) streamTask.status = 1, entry = streamTask.id.toString(16) + ":C\n", request.completedRegularChunks.push(stringToChunk(entry)), request.abortableTasks.delete(streamTask), request.cacheController.signal.removeEventListener("abort", abortStream), enqueueFlush(request), callOnAllReadyIfReady(request);
			else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), reader.read().then(progress, error);
			} catch (x$11) {
				error(x$11);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortStream), erroredTask(request, streamTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortStream() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortStream);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var supportsBYOB = stream.supportsBYOB;
		if (void 0 === supportsBYOB) try {
			stream.getReader({ mode: "byob" }).releaseLock(), supportsBYOB = !0;
		} catch (x) {
			supportsBYOB = !1;
		}
		var reader = stream.getReader(), streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (supportsBYOB ? "r" : "R") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortStream);
		reader.read().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function serializeAsyncIterable(request, task, iterable, iterator) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) {
				streamTask.status = 1;
				if (void 0 === entry.value) var endStreamRow = streamTask.id.toString(16) + ":C\n";
				else try {
					var chunkId = outlineModelWithFormatContext(request, entry.value, 0);
					endStreamRow = streamTask.id.toString(16) + ":C" + stringify(serializeByValueID(chunkId)) + "\n";
				} catch (x) {
					error(x);
					return;
				}
				request.completedRegularChunks.push(stringToChunk(endStreamRow));
				request.abortableTasks.delete(streamTask);
				request.cacheController.signal.removeEventListener("abort", abortIterable);
				enqueueFlush(request);
				callOnAllReadyIfReady(request);
			} else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), iterator.next().then(progress, error);
			} catch (x$12) {
				error(x$12);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortIterable), erroredTask(request, streamTask, reason), enqueueFlush(request), "function" === typeof iterator.throw && iterator.throw(reason).then(noop, noop));
		}
		function abortIterable() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortIterable);
				var reason = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal.reason), enqueueFlush(request));
				"function" === typeof iterator.throw && iterator.throw(reason).then(noop, noop);
			}
		}
		iterable = iterable === iterator;
		var streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (iterable ? "x" : "X") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortIterable);
		iterator.next().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function emitHint(request, code, model) {
		model = stringify(model);
		code = stringToChunk(":H" + code + model + "\n");
		request.completedHintChunks.push(code);
		enqueueFlush(request);
	}
	function readThenable(thenable) {
		if ("fulfilled" === thenable.status) return thenable.value;
		if ("rejected" === thenable.status) throw thenable.reason;
		throw thenable;
	}
	function createLazyWrapperAroundWakeable(request, task, wakeable) {
		switch (wakeable.status) {
			case "fulfilled": return wakeable.value;
			case "rejected": break;
			default: "string" !== typeof wakeable.status && (wakeable.status = "pending", wakeable.then(function(fulfilledValue) {
				"pending" === wakeable.status && (wakeable.status = "fulfilled", wakeable.value = fulfilledValue);
			}, function(error) {
				"pending" === wakeable.status && (wakeable.status = "rejected", wakeable.reason = error);
			}));
		}
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: wakeable,
			_init: readThenable
		};
	}
	function voidHandler() {}
	function processServerComponentReturnValue(request, task, Component, result) {
		if ("object" !== typeof result || null === result || result.$$typeof === CLIENT_REFERENCE_TAG$1) return result;
		if ("function" === typeof result.then) return createLazyWrapperAroundWakeable(request, task, result);
		var iteratorFn = getIteratorFn(result);
		return iteratorFn ? (request = {}, request[Symbol.iterator] = function() {
			return iteratorFn.call(result);
		}, request) : "function" !== typeof result[ASYNC_ITERATOR] || "function" === typeof ReadableStream && result instanceof ReadableStream ? result : (request = {}, request[ASYNC_ITERATOR] = function() {
			return result[ASYNC_ITERATOR]();
		}, request);
	}
	function renderFunctionComponent(request, task, key, Component, props) {
		var prevThenableState = task.thenableState;
		task.thenableState = null;
		thenableIndexCounter = 0;
		thenableState = prevThenableState;
		props = Component(props, void 0);
		if (12 === request.status) throw "object" === typeof props && null !== props && "function" === typeof props.then && props.$$typeof !== CLIENT_REFERENCE_TAG$1 && props.then(voidHandler, voidHandler), null;
		props = processServerComponentReturnValue(request, task, Component, props);
		Component = task.keyPath;
		prevThenableState = task.implicitSlot;
		null !== key ? task.keyPath = null === Component ? key : Component + "," + key : null === Component && (task.implicitSlot = !0);
		request = renderModelDestructive(request, task, emptyRoot, "", props);
		task.keyPath = Component;
		task.implicitSlot = prevThenableState;
		return request;
	}
	function renderFragment(request, task, children) {
		return null !== task.keyPath ? (request = [
			REACT_ELEMENT_TYPE,
			REACT_FRAGMENT_TYPE,
			task.keyPath,
			{ children }
		], task.implicitSlot ? [request] : request) : children;
	}
	var serializedSize = 0;
	function deferTask(request, task) {
		task = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		pingTask(request, task);
		return serializeLazyID(task.id);
	}
	function renderElement(request, task, type, key, ref, props) {
		if (null !== ref && void 0 !== ref) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
		if ("function" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1 && type.$$typeof !== TEMPORARY_REFERENCE_TAG) return renderFunctionComponent(request, task, key, type, props);
		if (type === REACT_FRAGMENT_TYPE && null === key) return type = task.implicitSlot, null === task.keyPath && (task.implicitSlot = !0), props = renderModelDestructive(request, task, emptyRoot, "", props.children), task.implicitSlot = type, props;
		if (null != type && "object" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1) switch (type.$$typeof) {
			case REACT_LAZY_TYPE:
				var init = type._init;
				type = init(type._payload);
				if (12 === request.status) throw null;
				return renderElement(request, task, type, key, ref, props);
			case REACT_FORWARD_REF_TYPE: return renderFunctionComponent(request, task, key, type.render, props);
			case REACT_MEMO_TYPE: return renderElement(request, task, type.type, key, ref, props);
		}
		else "string" === typeof type && (ref = task.formatContext, init = getChildFormatContext(ref, type, props), ref !== init && null != props.children && outlineModelWithFormatContext(request, props.children, init));
		request = key;
		key = task.keyPath;
		null === request ? request = key : null !== key && (request = key + "," + request);
		props = [
			REACT_ELEMENT_TYPE,
			type,
			request,
			props
		];
		task = task.implicitSlot && null !== request ? [props] : props;
		return task;
	}
	function pingTask(request, task) {
		var pingedTasks = request.pingedTasks;
		pingedTasks.push(task);
		1 === pingedTasks.length && (request.flushScheduled = null !== request.destination, 21 === request.type || 10 === request.status ? scheduleMicrotask(function() {
			return performWork(request);
		}) : setTimeout(function() {
			return performWork(request);
		}, 0));
	}
	function createTask(request, model, keyPath, implicitSlot, formatContext, abortSet) {
		request.pendingChunks++;
		var id = request.nextChunkId++;
		"object" !== typeof model || null === model || null !== keyPath || implicitSlot || request.writtenObjects.set(model, serializeByValueID(id));
		var task = {
			id,
			status: 0,
			model,
			keyPath,
			implicitSlot,
			formatContext,
			ping: function() {
				return pingTask(request, task);
			},
			toJSON: function(parentPropertyName, value) {
				serializedSize += parentPropertyName.length;
				var prevKeyPath = task.keyPath, prevImplicitSlot = task.implicitSlot;
				try {
					var JSCompiler_inline_result = renderModelDestructive(request, task, this, parentPropertyName, value);
				} catch (thrownValue) {
					if (parentPropertyName = task.model, parentPropertyName = "object" === typeof parentPropertyName && null !== parentPropertyName && (parentPropertyName.$$typeof === REACT_ELEMENT_TYPE || parentPropertyName.$$typeof === REACT_LAZY_TYPE), 12 === request.status) task.status = 3, 21 === request.type ? (prevKeyPath = request.nextChunkId++, prevKeyPath = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath), JSCompiler_inline_result = prevKeyPath) : (prevKeyPath = request.fatalError, JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath));
					else if (value = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof value && null !== value && "function" === typeof value.then) {
						JSCompiler_inline_result = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
						var ping = JSCompiler_inline_result.ping;
						value.then(ping, ping);
						JSCompiler_inline_result.thenableState = getThenableStateAfterSuspending();
						task.keyPath = prevKeyPath;
						task.implicitSlot = prevImplicitSlot;
						JSCompiler_inline_result = parentPropertyName ? serializeLazyID(JSCompiler_inline_result.id) : serializeByValueID(JSCompiler_inline_result.id);
					} else task.keyPath = prevKeyPath, task.implicitSlot = prevImplicitSlot, request.pendingChunks++, prevKeyPath = request.nextChunkId++, prevImplicitSlot = logRecoverableError(request, value, task), emitErrorChunk(request, prevKeyPath, prevImplicitSlot), JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath);
				}
				return JSCompiler_inline_result;
			},
			thenableState: null
		};
		abortSet.add(task);
		return task;
	}
	function serializeByValueID(id) {
		return "$" + id.toString(16);
	}
	function serializeLazyID(id) {
		return "$L" + id.toString(16);
	}
	function encodeReferenceChunk(request, id, reference) {
		request = stringify(reference);
		id = id.toString(16) + ":" + request + "\n";
		return stringToChunk(id);
	}
	function serializeClientReference(request, parent, parentPropertyName, clientReference) {
		var clientReferenceKey = clientReference.$$async ? clientReference.$$id + "#async" : clientReference.$$id, writtenClientReferences = request.writtenClientReferences, existingId = writtenClientReferences.get(clientReferenceKey);
		if (void 0 !== existingId) return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(existingId) : serializeByValueID(existingId);
		try {
			var config = request.bundlerConfig, modulePath = clientReference.$$id;
			existingId = "";
			var resolvedModuleData = config[modulePath];
			if (resolvedModuleData) existingId = resolvedModuleData.name;
			else {
				var idx = modulePath.lastIndexOf("#");
				-1 !== idx && (existingId = modulePath.slice(idx + 1), resolvedModuleData = config[modulePath.slice(0, idx)]);
				if (!resolvedModuleData) throw Error("Could not find the module \"" + modulePath + "\" in the React Client Manifest. This is probably a bug in the React Server Components bundler.");
			}
			if (!0 === resolvedModuleData.async && !0 === clientReference.$$async) throw Error("The module \"" + modulePath + "\" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.");
			var JSCompiler_inline_result = !0 === resolvedModuleData.async || !0 === clientReference.$$async ? [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId,
				1
			] : [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId
			];
			request.pendingChunks++;
			var importId = request.nextChunkId++, json = stringify(JSCompiler_inline_result), processedChunk = stringToChunk(importId.toString(16) + ":I" + json + "\n");
			request.completedImportChunks.push(processedChunk);
			writtenClientReferences.set(clientReferenceKey, importId);
			return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(importId) : serializeByValueID(importId);
		} catch (x) {
			return request.pendingChunks++, parent = request.nextChunkId++, parentPropertyName = logRecoverableError(request, x, null), emitErrorChunk(request, parent, parentPropertyName), serializeByValueID(parent);
		}
	}
	function outlineModelWithFormatContext(request, value, formatContext) {
		value = createTask(request, value, null, !1, formatContext, request.abortableTasks);
		retryTask(request, value);
		return value.id;
	}
	function serializeTypedArray(request, tag, typedArray) {
		request.pendingChunks++;
		var bufferId = request.nextChunkId++;
		emitTypedArrayChunk(request, bufferId, tag, typedArray, !1);
		return serializeByValueID(bufferId);
	}
	function serializeBlob(request, blob) {
		function progress(entry) {
			if (0 === newTask.status) if (entry.done) request.cacheController.signal.removeEventListener("abort", abortBlob), pingTask(request, newTask);
			else return model.push(entry.value), reader.read().then(progress).catch(error);
		}
		function error(reason) {
			0 === newTask.status && (request.cacheController.signal.removeEventListener("abort", abortBlob), erroredTask(request, newTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortBlob() {
			if (0 === newTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortBlob);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(newTask), haltTask(newTask), finishHaltedTask(newTask, request)) : (erroredTask(request, newTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var model = [blob.type], newTask = createTask(request, model, null, !1, 0, request.abortableTasks), reader = blob.stream().getReader();
		request.cacheController.signal.addEventListener("abort", abortBlob);
		reader.read().then(progress).catch(error);
		return "$B" + newTask.id.toString(16);
	}
	var modelRoot = !1;
	function renderModelDestructive(request, task, parent, parentPropertyName, value) {
		task.model = value;
		if (value === REACT_ELEMENT_TYPE) return "$";
		if (null === value) return null;
		if ("object" === typeof value) {
			switch (value.$$typeof) {
				case REACT_ELEMENT_TYPE:
					var elementReference = null, writtenObjects = request.writtenObjects;
					if (null === task.keyPath && !task.implicitSlot) {
						var existingReference = writtenObjects.get(value);
						if (void 0 !== existingReference) if (modelRoot === value) modelRoot = null;
						else return existingReference;
						else -1 === parentPropertyName.indexOf(":") && (parent = writtenObjects.get(parent), void 0 !== parent && (elementReference = parent + ":" + parentPropertyName, writtenObjects.set(value, elementReference)));
					}
					if (3200 < serializedSize) return deferTask(request, task);
					parentPropertyName = value.props;
					parent = parentPropertyName.ref;
					request = renderElement(request, task, value.type, value.key, void 0 !== parent ? parent : null, parentPropertyName);
					"object" === typeof request && null !== request && null !== elementReference && (writtenObjects.has(request) || writtenObjects.set(request, elementReference));
					return request;
				case REACT_LAZY_TYPE:
					if (3200 < serializedSize) return deferTask(request, task);
					task.thenableState = null;
					parentPropertyName = value._init;
					value = parentPropertyName(value._payload);
					if (12 === request.status) throw null;
					return renderModelDestructive(request, task, emptyRoot, "", value);
				case REACT_LEGACY_ELEMENT_TYPE: throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
			}
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (void 0 !== request.temporaryReferences && (elementReference = request.temporaryReferences.get(value), void 0 !== elementReference)) return "$T" + elementReference;
			elementReference = request.writtenObjects;
			writtenObjects = elementReference.get(value);
			if ("function" === typeof value.then) {
				if (void 0 !== writtenObjects) {
					if (null !== task.keyPath || task.implicitSlot) return "$@" + serializeThenable(request, task, value).toString(16);
					if (modelRoot === value) modelRoot = null;
					else return writtenObjects;
				}
				request = "$@" + serializeThenable(request, task, value).toString(16);
				elementReference.set(value, request);
				return request;
			}
			if (void 0 !== writtenObjects) if (modelRoot === value) {
				if (writtenObjects !== serializeByValueID(task.id)) return writtenObjects;
				modelRoot = null;
			} else return writtenObjects;
			else if (-1 === parentPropertyName.indexOf(":") && (writtenObjects = elementReference.get(parent), void 0 !== writtenObjects)) {
				existingReference = parentPropertyName;
				if (isArrayImpl(parent) && parent[0] === REACT_ELEMENT_TYPE) switch (parentPropertyName) {
					case "1":
						existingReference = "type";
						break;
					case "2":
						existingReference = "key";
						break;
					case "3":
						existingReference = "props";
						break;
					case "4": existingReference = "_owner";
				}
				elementReference.set(value, writtenObjects + ":" + existingReference);
			}
			if (isArrayImpl(value)) return renderFragment(request, task, value);
			if (value instanceof Map) return value = Array.from(value), "$Q" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Set) return value = Array.from(value), "$W" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if ("function" === typeof FormData && value instanceof FormData) return value = Array.from(value.entries()), "$K" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Error) return "$Z";
			if (value instanceof ArrayBuffer) return serializeTypedArray(request, "A", new Uint8Array(value));
			if (value instanceof Int8Array) return serializeTypedArray(request, "O", value);
			if (value instanceof Uint8Array) return serializeTypedArray(request, "o", value);
			if (value instanceof Uint8ClampedArray) return serializeTypedArray(request, "U", value);
			if (value instanceof Int16Array) return serializeTypedArray(request, "S", value);
			if (value instanceof Uint16Array) return serializeTypedArray(request, "s", value);
			if (value instanceof Int32Array) return serializeTypedArray(request, "L", value);
			if (value instanceof Uint32Array) return serializeTypedArray(request, "l", value);
			if (value instanceof Float32Array) return serializeTypedArray(request, "G", value);
			if (value instanceof Float64Array) return serializeTypedArray(request, "g", value);
			if (value instanceof BigInt64Array) return serializeTypedArray(request, "M", value);
			if (value instanceof BigUint64Array) return serializeTypedArray(request, "m", value);
			if (value instanceof DataView) return serializeTypedArray(request, "V", value);
			if ("function" === typeof Blob && value instanceof Blob) return serializeBlob(request, value);
			if (elementReference = getIteratorFn(value)) return parentPropertyName = elementReference.call(value), parentPropertyName === value ? (value = Array.from(parentPropertyName), "$i" + outlineModelWithFormatContext(request, value, 0).toString(16)) : renderFragment(request, task, Array.from(parentPropertyName));
			if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(request, task, value);
			elementReference = value[ASYNC_ITERATOR];
			if ("function" === typeof elementReference) return null !== task.keyPath ? (request = [
				REACT_ELEMENT_TYPE,
				REACT_FRAGMENT_TYPE,
				task.keyPath,
				{ children: value }
			], request = task.implicitSlot ? [request] : request) : (parentPropertyName = elementReference.call(value), request = serializeAsyncIterable(request, task, value, parentPropertyName)), request;
			if (value instanceof Date) return "$D" + value.toJSON();
			request = getPrototypeOf(value);
			if (request !== ObjectPrototype$1 && (null === request || null !== getPrototypeOf(request))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + describeObjectForErrorMessage(parent, parentPropertyName));
			return value;
		}
		if ("string" === typeof value) {
			serializedSize += value.length;
			if ("Z" === value[value.length - 1] && parent[parentPropertyName] instanceof Date) return "$D" + value;
			if (1024 <= value.length && null !== byteLengthOfChunk) return request.pendingChunks++, task = request.nextChunkId++, emitTextChunk(request, task, value, !1), serializeByValueID(task);
			request = "$" === value[0] ? "$" + value : value;
			return request;
		}
		if ("boolean" === typeof value) return value;
		if ("number" === typeof value) return Number.isFinite(value) ? 0 === value && -Infinity === 1 / value ? "$-0" : value : Infinity === value ? "$Infinity" : -Infinity === value ? "$-Infinity" : "$NaN";
		if ("undefined" === typeof value) return "$undefined";
		if ("function" === typeof value) {
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (value.$$typeof === SERVER_REFERENCE_TAG) return task = request.writtenServerReferences, parentPropertyName = task.get(value), void 0 !== parentPropertyName ? request = "$h" + parentPropertyName.toString(16) : (parentPropertyName = value.$$bound, parentPropertyName = null === parentPropertyName ? null : Promise.resolve(parentPropertyName), request = outlineModelWithFormatContext(request, {
				id: value.$$id,
				bound: parentPropertyName
			}, 0), task.set(value, request), request = "$h" + request.toString(16)), request;
			if (void 0 !== request.temporaryReferences && (request = request.temporaryReferences.get(value), void 0 !== request)) return "$T" + request;
			if (value.$$typeof === TEMPORARY_REFERENCE_TAG) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
			if (/^on[A-Z]/.test(parentPropertyName)) throw Error("Event handlers cannot be passed to Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
			throw Error("Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with \"use server\". Or maybe you meant to call this function rather than return it." + describeObjectForErrorMessage(parent, parentPropertyName));
		}
		if ("symbol" === typeof value) {
			task = request.writtenSymbols;
			elementReference = task.get(value);
			if (void 0 !== elementReference) return serializeByValueID(elementReference);
			elementReference = value.description;
			if (Symbol.for(elementReference) !== value) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, parentPropertyName));
			request.pendingChunks++;
			parentPropertyName = request.nextChunkId++;
			parent = encodeReferenceChunk(request, parentPropertyName, "$S" + elementReference);
			request.completedImportChunks.push(parent);
			task.set(value, parentPropertyName);
			return serializeByValueID(parentPropertyName);
		}
		if ("bigint" === typeof value) return "$n" + value.toString(10);
		throw Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName));
	}
	function logRecoverableError(request, error) {
		var prevRequest = currentRequest;
		currentRequest = null;
		try {
			var onError = request.onError;
			var errorDigest = supportsRequestStorage ? requestStorage.run(void 0, onError, error) : onError(error);
		} finally {
			currentRequest = prevRequest;
		}
		if (null != errorDigest && "string" !== typeof errorDigest) throw Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
		return errorDigest || "";
	}
	function fatalError(request, error) {
		var onFatalError = request.onFatalError;
		onFatalError(error);
		null !== request.destination ? (request.status = 14, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
		request.cacheController.abort(Error("The render was aborted due to a fatal error.", { cause: error }));
	}
	function emitErrorChunk(request, id, digest) {
		digest = { digest };
		id = id.toString(16) + ":E" + stringify(digest) + "\n";
		id = stringToChunk(id);
		request.completedErrorChunks.push(id);
	}
	function emitModelChunk(request, id, json) {
		id = id.toString(16) + ":" + json + "\n";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id);
	}
	function emitTypedArrayChunk(request, id, tag, typedArray, debug) {
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		debug = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
		typedArray = 2048 < typedArray.byteLength ? debug.slice() : debug;
		debug = typedArray.byteLength;
		id = id.toString(16) + ":" + tag + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, typedArray);
	}
	function emitTextChunk(request, id, text, debug) {
		if (null === byteLengthOfChunk) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		text = stringToChunk(text);
		debug = text.byteLength;
		id = id.toString(16) + ":T" + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, text);
	}
	function emitChunk(request, task, value) {
		var id = task.id;
		"string" === typeof value && null !== byteLengthOfChunk ? emitTextChunk(request, id, value, !1) : value instanceof ArrayBuffer ? emitTypedArrayChunk(request, id, "A", new Uint8Array(value), !1) : value instanceof Int8Array ? emitTypedArrayChunk(request, id, "O", value, !1) : value instanceof Uint8Array ? emitTypedArrayChunk(request, id, "o", value, !1) : value instanceof Uint8ClampedArray ? emitTypedArrayChunk(request, id, "U", value, !1) : value instanceof Int16Array ? emitTypedArrayChunk(request, id, "S", value, !1) : value instanceof Uint16Array ? emitTypedArrayChunk(request, id, "s", value, !1) : value instanceof Int32Array ? emitTypedArrayChunk(request, id, "L", value, !1) : value instanceof Uint32Array ? emitTypedArrayChunk(request, id, "l", value, !1) : value instanceof Float32Array ? emitTypedArrayChunk(request, id, "G", value, !1) : value instanceof Float64Array ? emitTypedArrayChunk(request, id, "g", value, !1) : value instanceof BigInt64Array ? emitTypedArrayChunk(request, id, "M", value, !1) : value instanceof BigUint64Array ? emitTypedArrayChunk(request, id, "m", value, !1) : value instanceof DataView ? emitTypedArrayChunk(request, id, "V", value, !1) : (value = stringify(value, task.toJSON), emitModelChunk(request, task.id, value));
	}
	function erroredTask(request, task, error) {
		task.status = 4;
		error = logRecoverableError(request, error, task);
		emitErrorChunk(request, task.id, error);
		request.abortableTasks.delete(task);
		callOnAllReadyIfReady(request);
	}
	var emptyRoot = {};
	function retryTask(request, task) {
		if (0 === task.status) {
			task.status = 5;
			var parentSerializedSize = serializedSize;
			try {
				modelRoot = task.model;
				var resolvedModel = renderModelDestructive(request, task, emptyRoot, "", task.model);
				modelRoot = resolvedModel;
				task.keyPath = null;
				task.implicitSlot = !1;
				if ("object" === typeof resolvedModel && null !== resolvedModel) request.writtenObjects.set(resolvedModel, serializeByValueID(task.id)), emitChunk(request, task, resolvedModel);
				else {
					var json = stringify(resolvedModel);
					emitModelChunk(request, task.id, json);
				}
				task.status = 1;
				request.abortableTasks.delete(task);
				callOnAllReadyIfReady(request);
			} catch (thrownValue) {
				if (12 === request.status) if (request.abortableTasks.delete(task), task.status = 0, 21 === request.type) haltTask(task), finishHaltedTask(task, request);
				else {
					var errorId = request.fatalError;
					abortTask(task);
					finishAbortedTask(task, request, errorId);
				}
				else {
					var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
					if ("object" === typeof x && null !== x && "function" === typeof x.then) {
						task.status = 0;
						task.thenableState = getThenableStateAfterSuspending();
						var ping = task.ping;
						x.then(ping, ping);
					} else erroredTask(request, task, x);
				}
			} finally {
				serializedSize = parentSerializedSize;
			}
		}
	}
	function tryStreamTask(request, task) {
		var parentSerializedSize = serializedSize;
		try {
			emitChunk(request, task, task.model);
		} finally {
			serializedSize = parentSerializedSize;
		}
	}
	function performWork(request) {
		var prevDispatcher = ReactSharedInternalsServer.H;
		ReactSharedInternalsServer.H = HooksDispatcher;
		var prevRequest = currentRequest;
		currentRequest$1 = currentRequest = request;
		try {
			var pingedTasks = request.pingedTasks;
			request.pingedTasks = [];
			for (var i = 0; i < pingedTasks.length; i++) retryTask(request, pingedTasks[i]);
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		} finally {
			ReactSharedInternalsServer.H = prevDispatcher, currentRequest$1 = null, currentRequest = prevRequest;
		}
	}
	function abortTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishAbortedTask(task, request, errorId) {
		3 === task.status && (errorId = serializeByValueID(errorId), task = encodeReferenceChunk(request, task.id, errorId), request.completedErrorChunks.push(task));
	}
	function haltTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishHaltedTask(task, request) {
		3 === task.status && request.pendingChunks--;
	}
	function flushCompletedChunks(request) {
		var destination = request.destination;
		if (null !== destination) {
			currentView = /* @__PURE__ */ new Uint8Array(2048);
			writtenBytes = 0;
			try {
				for (var importsChunks = request.completedImportChunks, i = 0; i < importsChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, importsChunks[i]);
				importsChunks.splice(0, i);
				var hintChunks = request.completedHintChunks;
				for (i = 0; i < hintChunks.length; i++) writeChunkAndReturn(destination, hintChunks[i]);
				hintChunks.splice(0, i);
				var regularChunks = request.completedRegularChunks;
				for (i = 0; i < regularChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, regularChunks[i]);
				regularChunks.splice(0, i);
				var errorChunks = request.completedErrorChunks;
				for (i = 0; i < errorChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, errorChunks[i]);
				errorChunks.splice(0, i);
			} finally {
				request.flushScheduled = !1, currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
			}
		}
		0 === request.pendingChunks && (12 > request.status && request.cacheController.abort(Error("This render completed successfully. All cacheSignals are now aborted to allow clean up of any unused resources.")), null !== request.destination && (request.status = 14, request.destination.close(), request.destination = null));
	}
	function startWork(request) {
		request.flushScheduled = null !== request.destination;
		supportsRequestStorage ? scheduleMicrotask(function() {
			requestStorage.run(request, performWork, request);
		}) : scheduleMicrotask(function() {
			return performWork(request);
		});
		setTimeout(function() {
			10 === request.status && (request.status = 11);
		}, 0);
	}
	function enqueueFlush(request) {
		!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = !0, setTimeout(function() {
			request.flushScheduled = !1;
			flushCompletedChunks(request);
		}, 0));
	}
	function callOnAllReadyIfReady(request) {
		0 === request.abortableTasks.size && (request = request.onAllReady, request());
	}
	function startFlowing(request, destination) {
		if (13 === request.status) request.status = 14, closeWithError(destination, request.fatalError);
		else if (14 !== request.status && null === request.destination) {
			request.destination = destination;
			try {
				flushCompletedChunks(request);
			} catch (error) {
				logRecoverableError(request, error, null), fatalError(request, error);
			}
		}
	}
	function finishHalt(request, abortedTasks) {
		try {
			abortedTasks.forEach(function(task) {
				return finishHaltedTask(task, request);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function finishAbort(request, abortedTasks, errorId) {
		try {
			abortedTasks.forEach(function(task) {
				return finishAbortedTask(task, request, errorId);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function abort(request, reason) {
		if (!(11 < request.status)) try {
			request.status = 12;
			request.cacheController.abort(reason);
			var abortableTasks = request.abortableTasks;
			if (0 < abortableTasks.size) if (21 === request.type) abortableTasks.forEach(function(task) {
				return haltTask(task, request);
			}), setTimeout(function() {
				return finishHalt(request, abortableTasks);
			}, 0);
			else {
				var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason, digest = logRecoverableError(request, error, null), errorId = request.nextChunkId++;
				request.fatalError = errorId;
				request.pendingChunks++;
				emitErrorChunk(request, errorId, digest, error, !1, null);
				abortableTasks.forEach(function(task) {
					return abortTask(task, request, errorId);
				});
				setTimeout(function() {
					return finishAbort(request, abortableTasks, errorId);
				}, 0);
			}
			else {
				var onAllReady = request.onAllReady;
				onAllReady();
				flushCompletedChunks(request);
			}
		} catch (error$26) {
			logRecoverableError(request, error$26, null), fatalError(request, error$26);
		}
	}
	function resolveServerReference(bundlerConfig, id) {
		var name = "", resolvedModuleData = bundlerConfig[id];
		if (resolvedModuleData) name = resolvedModuleData.name;
		else {
			var idx = id.lastIndexOf("#");
			-1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
			if (!resolvedModuleData) throw Error("Could not find the module \"" + id + "\" in the React Server Manifest. This is probably a bug in the React Server Components bundler.");
		}
		return resolvedModuleData.async ? [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name,
			1
		] : [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name
		];
	}
	var chunkCache = /* @__PURE__ */ new Map();
	function requireAsyncModule(id) {
		var promise = __vite_rsc_require__(id);
		if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
		promise.then(function(value) {
			promise.status = "fulfilled";
			promise.value = value;
		}, function(reason) {
			promise.status = "rejected";
			promise.reason = reason;
		});
		return promise;
	}
	function ignoreReject() {}
	function preloadModule(metadata) {
		for (var chunks = metadata[1], promises = [], i = 0; i < chunks.length;) {
			var chunkId = chunks[i++];
			chunks[i++];
			var entry = chunkCache.get(chunkId);
			if (void 0 === entry) {
				entry = __webpack_chunk_load__(chunkId);
				promises.push(entry);
				var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
				entry.then(resolve, ignoreReject);
				chunkCache.set(chunkId, entry);
			} else null !== entry && promises.push(entry);
		}
		return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
			return requireAsyncModule(metadata[0]);
		}) : 0 < promises.length ? Promise.all(promises) : null;
	}
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	function appendBackingEntry(backingStore, key, value) {
		backingStore.data.append(key, value);
		value = backingStore.keys;
		null === value ? (backingStore.keys = Array.from(backingStore.data.keys()), backingStore.keyPointer = 0) : value.push(key);
	}
	var RESPONSE_SYMBOL = Symbol();
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model": initializeModelChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				if ("function" === typeof resolve) {
					for (var inspectedValue = this.value, cycleProtection = 0, visited = /* @__PURE__ */ new Set(); inspectedValue instanceof ReactPromise;) {
						cycleProtection++;
						if (inspectedValue === this || visited.has(inspectedValue) || 1e3 < cycleProtection) {
							"function" === typeof reject && reject(Error("Cannot have cyclic thenables."));
							return;
						}
						visited.add(inspectedValue);
						if ("fulfilled" === inspectedValue.status) inspectedValue = inspectedValue.value;
						else break;
					}
					resolve(this.value);
				}
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	var ObjectPrototype = Object.prototype;
	var ArrayPrototype = Array.prototype;
	function wakeChunk(response, listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, chunk.reason);
		}
	}
	function rejectChunk(response, listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(response, listener.handler, error);
		}
	}
	function triggerErrorOnChunk(response, chunk, error) {
		if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
		else {
			var listeners = chunk.reason;
			chunk.status = "rejected";
			chunk.reason = error;
			null !== listeners && rejectChunk(response, listeners, error);
		}
	}
	function createResolvedModelChunk(response, value, id) {
		var $jscomp$compprop2 = {};
		return new ReactPromise("resolved_model", value, ($jscomp$compprop2.id = id, $jscomp$compprop2[RESPONSE_SYMBOL] = response, $jscomp$compprop2));
	}
	function resolveModelChunk(response, chunk, value, id) {
		if ("pending" !== chunk.status) chunk = chunk.reason, "C" === value[0] ? chunk.close("C" === value ? "\"$undefined\"" : value.slice(1)) : chunk.enqueueModel(value);
		else {
			var resolveListeners = chunk.value, rejectListeners = chunk.reason;
			chunk.status = "resolved_model";
			chunk.value = value;
			value = {};
			chunk.reason = (value.id = id, value[RESPONSE_SYMBOL] = response, value);
			if (null !== resolveListeners) switch (initializeModelChunk(chunk), chunk.status) {
				case "fulfilled":
					wakeChunk(response, resolveListeners, chunk.value, chunk);
					break;
				case "blocked":
				case "pending":
					if (chunk.value) for (response = 0; response < resolveListeners.length; response++) chunk.value.push(resolveListeners[response]);
					else chunk.value = resolveListeners;
					if (chunk.reason) {
						if (rejectListeners) for (resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++) chunk.reason.push(rejectListeners[resolveListeners]);
					} else chunk.reason = rejectListeners;
					break;
				case "rejected": rejectListeners && rejectChunk(response, rejectListeners, chunk.reason);
			}
		}
	}
	function createResolvedIteratorResultChunk(response, value, done) {
		var $jscomp$compprop4 = {};
		return new ReactPromise("resolved_model", (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", ($jscomp$compprop4.id = -1, $jscomp$compprop4[RESPONSE_SYMBOL] = response, $jscomp$compprop4));
	}
	function resolveIteratorResultChunk(response, chunk, value, done) {
		resolveModelChunk(response, chunk, (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", -1);
	}
	function loadServerReference$1(response, metaData, parentObject, key) {
		function reject(error) {
			var rejectListeners = blockedPromise.reason, erroredPromise = blockedPromise;
			erroredPromise.status = "rejected";
			erroredPromise.value = null;
			erroredPromise.reason = error;
			null !== rejectListeners && rejectChunk(response, rejectListeners, error);
			rejectReference(response, handler, error);
		}
		var id = metaData.id;
		if ("string" !== typeof id || "then" === key) return null;
		var cachedPromise = metaData.$$promise;
		if (void 0 !== cachedPromise) {
			if ("fulfilled" === cachedPromise.status) return cachedPromise = cachedPromise.value, "__proto__" === key ? null : parentObject[key] = cachedPromise;
			initializingHandler ? (id = initializingHandler, id.deps++) : id = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			};
			cachedPromise.then(resolveReference.bind(null, response, id, parentObject, key), rejectReference.bind(null, response, id));
			return null;
		}
		var blockedPromise = new ReactPromise("blocked", null, null);
		metaData.$$promise = blockedPromise;
		var serverReference = resolveServerReference(response._bundlerConfig, id);
		cachedPromise = metaData.bound;
		if (id = preloadModule(serverReference)) cachedPromise instanceof ReactPromise && (id = Promise.all([id, cachedPromise]));
		else if (cachedPromise instanceof ReactPromise) id = Promise.resolve(cachedPromise);
		else return cachedPromise = requireModule(serverReference), id = blockedPromise, id.status = "fulfilled", id.value = cachedPromise;
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		id.then(function() {
			var resolvedValue = requireModule(serverReference);
			if (metaData.bound) {
				var promiseValue = metaData.bound.value;
				promiseValue = isArrayImpl(promiseValue) ? promiseValue.slice(0) : [];
				if (1e3 < promiseValue.length) {
					reject(Error("Server Function has too many bound arguments. Received " + promiseValue.length + " but the limit is 1000."));
					return;
				}
				promiseValue.unshift(null);
				resolvedValue = resolvedValue.bind.apply(resolvedValue, promiseValue);
			}
			promiseValue = blockedPromise.value;
			var initializedPromise = blockedPromise;
			initializedPromise.status = "fulfilled";
			initializedPromise.value = resolvedValue;
			initializedPromise.reason = null;
			null !== promiseValue && wakeChunk(response, promiseValue, resolvedValue, initializedPromise);
			resolveReference(response, handler, parentObject, key, resolvedValue);
		}, reject);
		return null;
	}
	function reviveModel(response, parentObj, parentKey, value, reference, arrayRoot) {
		if ("string" === typeof value) return parseModelString(response, parentObj, parentKey, value, reference, arrayRoot);
		if ("object" === typeof value && null !== value) if (void 0 !== reference && void 0 !== response._temporaryReferences && response._temporaryReferences.set(value, reference), isArrayImpl(value)) {
			if (null === arrayRoot) {
				var childContext = {
					count: 0,
					fork: !1
				};
				response._rootArrayContexts.set(value, childContext);
			} else childContext = arrayRoot;
			1 < value.length && (childContext.fork = !0);
			bumpArrayCount(childContext, value.length + 1, response);
			for (parentObj = 0; parentObj < value.length; parentObj++) value[parentObj] = reviveModel(response, value, "" + parentObj, value[parentObj], void 0 !== reference ? reference + ":" + parentObj : void 0, childContext);
		} else for (childContext in value) hasOwnProperty.call(value, childContext) && ("__proto__" === childContext ? delete value[childContext] : (parentObj = void 0 !== reference && -1 === childContext.indexOf(":") ? reference + ":" + childContext : void 0, parentObj = reviveModel(response, value, childContext, value[childContext], parentObj, null), void 0 !== parentObj ? value[childContext] = parentObj : delete value[childContext]));
		return value;
	}
	function bumpArrayCount(arrayContext, slots, response) {
		if ((arrayContext.count += slots) > response._arraySizeLimit && arrayContext.fork) throw Error("Maximum array nesting exceeded. Large nested arrays can be dangerous. Try adding intermediate objects.");
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var _chunk$reason = chunk.reason, response = _chunk$reason[RESPONSE_SYMBOL];
		_chunk$reason = _chunk$reason.id;
		_chunk$reason = -1 === _chunk$reason ? void 0 : _chunk$reason.toString(16);
		var resolvedModel = chunk.value;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var rawModel = JSON.parse(resolvedModel);
			resolvedModel = {
				count: 0,
				fork: !1
			};
			var value = reviveModel(response, { "": rawModel }, "", rawModel, _chunk$reason, resolvedModel), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, rawModel = 0; rawModel < resolveListeners.length; rawModel++) {
				var listener = resolveListeners[rawModel];
				"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, resolvedModel);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.reason = resolvedModel;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
			chunk.reason = resolvedModel;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function reportGlobalError(response, error) {
		response._closed = !0;
		response._closedReason = error;
		response._chunks.forEach(function(chunk) {
			"pending" === chunk.status ? triggerErrorOnChunk(response, chunk, error) : "fulfilled" === chunk.status && null !== chunk.reason && (chunk = chunk.reason, "function" === typeof chunk.error && chunk.error(error));
		});
	}
	function getChunk(response, id) {
		var chunks = response._chunks, chunk = chunks.get(id);
		chunk || (chunk = response._formData.data.get(response._prefix + id), chunk = "string" === typeof chunk ? createResolvedModelChunk(response, chunk, id) : response._closed ? new ReactPromise("rejected", null, response._closedReason) : new ReactPromise("pending", null, null), chunks.set(id, chunk));
		return chunk;
	}
	function fulfillReference(response, reference, value, arrayRoot) {
		var handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < path.length; i++) {
				var name = path[i];
				if ("object" !== typeof value || null === value || getPrototypeOf(value) !== ObjectPrototype && getPrototypeOf(value) !== ArrayPrototype || !hasOwnProperty.call(value, name)) throw Error("Invalid reference.");
				value = value[name];
				if (isArrayImpl(value)) localLength = 0, arrayRoot = rootArrayContexts.get(value) || arrayRoot;
				else if (arrayRoot = null, "string" === typeof value) localLength = value.length;
				else if ("bigint" === typeof value) {
					var n = Math.abs(Number(value));
					localLength = 0 === n ? 1 : Math.floor(Math.log10(n)) + 1;
				} else localLength = ArrayBuffer.isView(value) ? value.byteLength : 0;
			}
			var resolvedValue = map(response, value, parentObject, key);
			var referenceArrayRoot = reference.arrayRoot;
			null !== referenceArrayRoot && (null !== arrayRoot ? (arrayRoot.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, arrayRoot.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
		} catch (error) {
			rejectReference(response, handler, error);
			return;
		}
		resolveReference(response, handler, parentObject, key, resolvedValue);
	}
	function resolveReference(response, handler, parentObject, key, resolvedValue) {
		"__proto__" !== key && (parentObject[key] = resolvedValue);
		"" === key && null === handler.value && (handler.value = resolvedValue);
		handler.deps--;
		0 === handler.deps && (parentObject = handler.chunk, null !== parentObject && "blocked" === parentObject.status && (key = parentObject.value, parentObject.status = "fulfilled", parentObject.value = handler.value, parentObject.reason = handler.reason, null !== key && wakeChunk(response, key, handler.value, parentObject)));
	}
	function rejectReference(response, handler, error) {
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(response, handler, error));
	}
	function getOutlinedModel(response, reference, parentObject, key, referenceArrayRoot, map) {
		reference = reference.split(":");
		var id = parseInt(reference[0], 16), chunk = getChunk(response, id);
		switch (chunk.status) {
			case "resolved_model": initializeModelChunk(chunk);
		}
		switch (chunk.status) {
			case "fulfilled":
				id = chunk.value;
				chunk = chunk.reason;
				if (null !== chunk && "error" in chunk) throw Error("Expected an initialized chunk but got an initialized stream chunk instead. This payload may have been submitted by an older version of React.");
				for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < reference.length; i++) {
					localLength = reference[i];
					if ("object" !== typeof id || null === id || getPrototypeOf(id) !== ObjectPrototype && getPrototypeOf(id) !== ArrayPrototype || !hasOwnProperty.call(id, localLength)) throw Error("Invalid reference.");
					id = id[localLength];
					isArrayImpl(id) ? (localLength = 0, chunk = rootArrayContexts.get(id) || chunk) : (chunk = null, "string" === typeof id ? localLength = id.length : "bigint" === typeof id ? (localLength = Math.abs(Number(id)), localLength = 0 === localLength ? 1 : Math.floor(Math.log10(localLength)) + 1) : localLength = ArrayBuffer.isView(id) ? id.byteLength : 0);
				}
				parentObject = map(response, id, parentObject, key);
				null !== referenceArrayRoot && (null !== chunk ? (chunk.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, chunk.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
				return parentObject;
			case "blocked": return initializingHandler ? (response = initializingHandler, response.deps++) : response = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			}, referenceArrayRoot = {
				handler: response,
				parentObject,
				key,
				map,
				path: reference,
				arrayRoot: referenceArrayRoot
			}, null === chunk.value ? chunk.value = [referenceArrayRoot] : chunk.value.push(referenceArrayRoot), null === chunk.reason ? chunk.reason = [referenceArrayRoot] : chunk.reason.push(referenceArrayRoot), null;
			case "pending": throw Error("Invalid forward reference.");
			default: return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = null, initializingHandler.reason = chunk.reason) : initializingHandler = {
				chunk: null,
				value: null,
				reason: chunk.reason,
				deps: 0,
				errored: !0
			}, null;
		}
	}
	function createMap(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Map initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Map.");
		model.$$consumed = !0;
		return new Map(model);
	}
	function createSet(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Set initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Set.");
		model.$$consumed = !0;
		return new Set(model);
	}
	function extractIterator(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Iterator initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Iterator.");
		model.$$consumed = !0;
		return model[Symbol.iterator]();
	}
	function createModel(response, model, parentObject, key) {
		return "then" === key && "function" === typeof model ? null : model;
	}
	function parseTypedArray(response, reference, constructor, bytesPerElement, parentObject, parentKey, referenceArrayRoot) {
		function reject(error) {
			if (!handler.errored) {
				handler.errored = !0;
				handler.value = null;
				handler.reason = error;
				var chunk = handler.chunk;
				null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(response, chunk, error);
			}
		}
		reference = parseInt(reference.slice(2), 16);
		var key = response._prefix + reference;
		bytesPerElement = response._chunks;
		if (bytesPerElement.has(reference)) throw Error("Already initialized typed array.");
		bytesPerElement.set(reference, new ReactPromise("rejected", null, Error("Already initialized typed array.")));
		reference = response._formData.data.get(key).arrayBuffer();
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		reference.then(function(buffer) {
			try {
				null !== referenceArrayRoot && bumpArrayCount(referenceArrayRoot, buffer.byteLength, response);
				var resolvedValue = constructor === ArrayBuffer ? buffer : new constructor(buffer);
				"__proto__" !== key && (parentObject[parentKey] = resolvedValue);
				"" === parentKey && null === handler.value && (handler.value = resolvedValue);
			} catch (x) {
				reject(x);
				return;
			}
			handler.deps--;
			0 === handler.deps && (buffer = handler.chunk, null !== buffer && "blocked" === buffer.status && (resolvedValue = buffer.value, buffer.status = "fulfilled", buffer.value = handler.value, buffer.reason = null, null !== resolvedValue && wakeChunk(response, resolvedValue, handler.value, buffer)));
		}, reject);
		return null;
	}
	function resolveStream(response, id, stream, controller) {
		var chunks = response._chunks;
		stream = new ReactPromise("fulfilled", stream, controller);
		chunks.set(id, stream);
		response = response._formData.data.getAll(response._prefix + id);
		for (id = 0; id < response.length; id++) chunks = response[id], "string" === typeof chunks && ("C" === chunks[0] ? controller.close("C" === chunks ? "\"$undefined\"" : chunks.slice(1)) : controller.enqueueModel(chunks));
	}
	function parseReadableStream(response, reference, type) {
		function enqueue(value) {
			"bytes" !== type || ArrayBuffer.isView(value) ? controller.enqueue(value) : flightController.error(Error("Invalid data for bytes stream."));
		}
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var controller = null, closed = !1, stream = new ReadableStream({
			type,
			start: function(c) {
				controller = c;
			}
		}), previousBlockedChunk = null, flightController = {
			enqueueModel: function(json) {
				if (null === previousBlockedChunk) {
					var chunk = createResolvedModelChunk(response, json, -1);
					initializeModelChunk(chunk);
					"fulfilled" === chunk.status ? enqueue(chunk.value) : (chunk.then(enqueue, flightController.error), previousBlockedChunk = chunk);
				} else {
					chunk = previousBlockedChunk;
					var chunk$31 = new ReactPromise("pending", null, null);
					chunk$31.then(enqueue, flightController.error);
					previousBlockedChunk = chunk$31;
					chunk.then(function() {
						previousBlockedChunk === chunk$31 && (previousBlockedChunk = null);
						resolveModelChunk(response, chunk$31, json, -1);
					});
				}
			},
			close: function() {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.close();
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.close();
					});
				}
			},
			error: function(error) {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.error(error);
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.error(error);
					});
				}
			}
		};
		resolveStream(response, reference, stream, flightController);
		return stream;
	}
	function FlightIterator(next) {
		this.next = next;
	}
	FlightIterator.prototype = {};
	FlightIterator.prototype[ASYNC_ITERATOR] = function() {
		return this;
	};
	function parseAsyncIterable(response, reference, iterator) {
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var buffer = [], closed = !1, nextWriteIndex = 0, $jscomp$compprop5 = {};
		$jscomp$compprop5 = ($jscomp$compprop5[ASYNC_ITERATOR] = function() {
			var nextReadIndex = 0;
			return new FlightIterator(function(arg) {
				if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
				if (nextReadIndex === buffer.length) {
					if (closed) return new ReactPromise("fulfilled", {
						done: !0,
						value: void 0
					}, null);
					buffer[nextReadIndex] = new ReactPromise("pending", null, null);
				}
				return buffer[nextReadIndex++];
			});
		}, $jscomp$compprop5);
		iterator = iterator ? $jscomp$compprop5[ASYNC_ITERATOR]() : $jscomp$compprop5;
		resolveStream(response, reference, iterator, {
			enqueueModel: function(value) {
				nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !1);
				nextWriteIndex++;
			},
			close: function(value) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !0), nextWriteIndex++; nextWriteIndex < buffer.length;) resolveIteratorResultChunk(response, buffer[nextWriteIndex++], "\"$undefined\"", !0);
			},
			error: function(error) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = new ReactPromise("pending", null, null)); nextWriteIndex < buffer.length;) triggerErrorOnChunk(response, buffer[nextWriteIndex++], error);
			}
		});
		return iterator;
	}
	function parseModelString(response, obj, key, value, reference, arrayRoot) {
		if ("$" === value[0]) {
			switch (value[1]) {
				case "$": return null !== arrayRoot && bumpArrayCount(arrayRoot, value.length - 1, response), value.slice(1);
				case "@": return obj = parseInt(value.slice(2), 16), getChunk(response, obj);
				case "h": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, loadServerReference$1);
				case "T":
					if (void 0 === reference || void 0 === response._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
					return createTemporaryReference(response._temporaryReferences, reference);
				case "Q": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createMap);
				case "W": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createSet);
				case "K":
					key = value.slice(2);
					obj = response._prefix + "_";
					key = obj + key + "_";
					arrayRoot = new FormData();
					for (response = response._formData;;) {
						value = response.keys;
						null === value && (value = response.keys = Array.from(response.data.keys()), response.keyPointer = 0);
						value = value[response.keyPointer];
						if (void 0 === value) break;
						if (value.startsWith(key)) {
							reference = response.data.getAll(value);
							for (var referencedFormDataKey = value.slice(key.length), i = 0; i < reference.length; i++) arrayRoot.append(referencedFormDataKey, reference[i]);
							response.data.delete(value);
							response.keyPointer++;
						} else if (value.startsWith(obj)) break;
						else response.keyPointer++;
					}
					return arrayRoot;
				case "i": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, extractIterator);
				case "I": return Infinity;
				case "-": return "$-0" === value ? -0 : -Infinity;
				case "N": return NaN;
				case "u": return;
				case "D": return new Date(Date.parse(value.slice(2)));
				case "n":
					obj = value.slice(2);
					if (300 < obj.length) throw Error("BigInt is too large. Received " + obj.length + " digits but the limit is 300.");
					null !== arrayRoot && bumpArrayCount(arrayRoot, obj.length, response);
					return BigInt(obj);
				case "A": return parseTypedArray(response, value, ArrayBuffer, 1, obj, key, arrayRoot);
				case "O": return parseTypedArray(response, value, Int8Array, 1, obj, key, arrayRoot);
				case "o": return parseTypedArray(response, value, Uint8Array, 1, obj, key, arrayRoot);
				case "U": return parseTypedArray(response, value, Uint8ClampedArray, 1, obj, key, arrayRoot);
				case "S": return parseTypedArray(response, value, Int16Array, 2, obj, key, arrayRoot);
				case "s": return parseTypedArray(response, value, Uint16Array, 2, obj, key, arrayRoot);
				case "L": return parseTypedArray(response, value, Int32Array, 4, obj, key, arrayRoot);
				case "l": return parseTypedArray(response, value, Uint32Array, 4, obj, key, arrayRoot);
				case "G": return parseTypedArray(response, value, Float32Array, 4, obj, key, arrayRoot);
				case "g": return parseTypedArray(response, value, Float64Array, 8, obj, key, arrayRoot);
				case "M": return parseTypedArray(response, value, BigInt64Array, 8, obj, key, arrayRoot);
				case "m": return parseTypedArray(response, value, BigUint64Array, 8, obj, key, arrayRoot);
				case "V": return parseTypedArray(response, value, DataView, 1, obj, key, arrayRoot);
				case "B": return obj = parseInt(value.slice(2), 16), response._formData.data.get(response._prefix + obj);
				case "R": return parseReadableStream(response, value, void 0);
				case "r": return parseReadableStream(response, value, "bytes");
				case "X": return parseAsyncIterable(response, value, !1);
				case "x": return parseAsyncIterable(response, value, !0);
			}
			value = value.slice(1);
			return getOutlinedModel(response, value, obj, key, arrayRoot, createModel);
		}
		null !== arrayRoot && bumpArrayCount(arrayRoot, value.length, response);
		return value;
	}
	function createResponse(bundlerConfig, formFieldPrefix, temporaryReferences) {
		var backingFormData = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), arraySizeLimit = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1e6;
		return {
			_bundlerConfig: bundlerConfig,
			_prefix: formFieldPrefix,
			_formData: {
				data: backingFormData,
				keyPointer: -1,
				keys: null
			},
			_chunks: /* @__PURE__ */ new Map(),
			_closed: !1,
			_closedReason: null,
			_temporaryReferences: temporaryReferences,
			_rootArrayContexts: /* @__PURE__ */ new WeakMap(),
			_arraySizeLimit: arraySizeLimit
		};
	}
	function close(response) {
		reportGlobalError(response, Error("Connection closed."));
	}
	function loadServerReference(bundlerConfig, metaData) {
		var id = metaData.id;
		if ("string" !== typeof id) return null;
		var serverReference = resolveServerReference(bundlerConfig, id);
		bundlerConfig = preloadModule(serverReference);
		metaData = metaData.bound;
		return metaData instanceof Promise ? Promise.all([metaData, bundlerConfig]).then(function(_ref) {
			_ref = _ref[0];
			var fn = requireModule(serverReference);
			if (1e3 < _ref.length) throw Error("Server Function has too many bound arguments. Received " + _ref.length + " but the limit is 1000.");
			return fn.bind.apply(fn, [null].concat(_ref));
		}) : bundlerConfig ? Promise.resolve(bundlerConfig).then(function() {
			return requireModule(serverReference);
		}) : Promise.resolve(requireModule(serverReference));
	}
	function decodeBoundActionMetaData(body, serverManifest, formFieldPrefix, arraySizeLimit) {
		body = createResponse(serverManifest, formFieldPrefix, void 0, body, arraySizeLimit);
		close(body);
		body = getChunk(body, 0);
		body.then(function() {});
		if ("fulfilled" !== body.status) throw body.reason;
		return body.value;
	}
	exports.createClientModuleProxy = function(moduleId) {
		moduleId = registerClientReferenceImpl({}, moduleId, !1);
		return new Proxy(moduleId, proxyHandlers$1);
	};
	exports.createTemporaryReferenceSet = function() {
		return /* @__PURE__ */ new WeakMap();
	};
	exports.decodeAction = function(body, serverManifest) {
		var formData = new FormData(), maybeActionKey = null;
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_") ? key.startsWith("$ACTION_REF_") ? maybeActionKey = key : key.startsWith("$ACTION_ID_") && (maybeActionKey = key) : formData.append(key, value);
		});
		if (null === maybeActionKey) return null;
		var actionKey = maybeActionKey, action = null;
		if (actionKey.startsWith("$ACTION_REF_")) actionKey = "$ACTION_" + actionKey.slice(12) + ":", body = decodeBoundActionMetaData(body, serverManifest, actionKey), action = loadServerReference(serverManifest, body);
		else if (actionKey.startsWith("$ACTION_ID_")) body = actionKey.slice(11), action = loadServerReference(serverManifest, {
			id: body,
			bound: null
		});
		else throw Error("Cannot handle action key. This is a bug in React.");
		return action.then(function(fn) {
			return fn.bind(null, formData);
		});
	};
	exports.decodeFormState = function(actionResult, body, serverManifest) {
		var keyPath = body.get("$ACTION_KEY");
		if ("string" !== typeof keyPath) return Promise.resolve(null);
		var actionKey = null;
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_REF_") && (actionKey = key);
		});
		if (null === actionKey) return Promise.resolve(null);
		var formFieldPrefix = "$ACTION_" + actionKey.slice(12) + ":";
		body = decodeBoundActionMetaData(body, serverManifest, formFieldPrefix);
		var referenceId = body.id;
		return Promise.resolve(body.bound).then(function(bound) {
			return null === bound ? null : [
				actionResult,
				keyPath,
				referenceId,
				bound.length - 1
			];
		});
	};
	exports.decodeReply = function(body, webpackMap, options) {
		if ("string" === typeof body) {
			var form = new FormData();
			form.append("0", body);
			body = form;
		}
		body = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, body, options ? options.arraySizeLimit : void 0);
		webpackMap = getChunk(body, 0);
		close(body);
		return webpackMap;
	};
	exports.decodeReplyFromAsyncIterable = function(iterable, webpackMap, options) {
		function progress(entry) {
			if (entry.done) close(response);
			else {
				entry = entry.value;
				var name = entry[0];
				entry = entry[1];
				if ("string" === typeof entry) {
					appendBackingEntry(response._formData, name, entry);
					var prefix = response._prefix;
					if (name.startsWith(prefix)) {
						var chunks = response._chunks;
						name = +name.slice(prefix.length);
						(chunks = chunks.get(name)) && resolveModelChunk(response, chunks, entry, name);
					}
				} else appendBackingEntry(response._formData, name, entry);
				iterator.next().then(progress, error);
			}
		}
		function error(reason) {
			reportGlobalError(response, reason);
			"function" === typeof iterator.throw && iterator.throw(reason).then(noop, noop);
		}
		var iterator = iterable[ASYNC_ITERATOR](), response = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, void 0, options ? options.arraySizeLimit : void 0);
		iterator.next().then(progress, error);
		return getChunk(response, 0);
	};
	exports.prerender = function(model, webpackMap, options) {
		return new Promise(function(resolve, reject) {
			var request = new RequestInstance(21, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, function() {
				resolve({ prelude: new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 }) });
			}, reject, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
			if (options && options.signal) {
				var signal = options.signal;
				if (signal.aborted) abort(request, signal.reason);
				else {
					var listener = function() {
						abort(request, signal.reason);
						signal.removeEventListener("abort", listener);
					};
					signal.addEventListener("abort", listener);
				}
			}
			startWork(request);
		});
	};
	exports.registerClientReference = function(proxyImplementation, id, exportName) {
		return registerClientReferenceImpl(proxyImplementation, id + "#" + exportName, !1);
	};
	exports.registerServerReference = function(reference, id, exportName) {
		return Object.defineProperties(reference, {
			$$typeof: { value: SERVER_REFERENCE_TAG },
			$$id: {
				value: null === exportName ? id : id + "#" + exportName,
				configurable: !0
			},
			$$bound: {
				value: null,
				configurable: !0
			},
			bind: {
				value: bind,
				configurable: !0
			},
			toString: serverReferenceToString
		});
	};
	exports.renderToReadableStream = function(model, webpackMap, options) {
		var request = new RequestInstance(20, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, noop, noop, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
		if (options && options.signal) {
			var signal = options.signal;
			if (signal.aborted) abort(request, signal.reason);
			else {
				var listener = function() {
					abort(request, signal.reason);
					signal.removeEventListener("abort", listener);
				};
				signal.addEventListener("abort", listener);
			}
		}
		return new ReadableStream({
			type: "bytes",
			start: function() {
				startWork(request);
			},
			pull: function(controller) {
				startFlowing(request, controller);
			},
			cancel: function(reason) {
				request.destination = null;
				abort(request, reason);
			}
		}, { highWaterMark: 0 });
	};
}));
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/core/rsc.js
var import_server_edge$1 = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var s = require_react_server_dom_webpack_server_edge_production$1();
	exports.renderToReadableStream = s.renderToReadableStream;
	exports.decodeReply = s.decodeReply;
	exports.decodeReplyFromAsyncIterable = s.decodeReplyFromAsyncIterable;
	exports.decodeAction = s.decodeAction;
	exports.decodeFormState = s.decodeFormState;
	exports.registerServerReference = s.registerServerReference;
	exports.registerClientReference = s.registerClientReference;
	exports.createClientModuleProxy = s.createClientModuleProxy;
	exports.createTemporaryReferenceSet = s.createTemporaryReferenceSet;
})))(), 1);
var init = false;
var requireModule;
function setRequireModule(options) {
	if (init) return;
	init = true;
	requireModule = (id) => {
		return options.load(removeReferenceCacheTag(id));
	};
	globalThis.__vite_rsc_server_require__ = memoize(async (id) => {
		if (id.startsWith("$$preserve:")) {
			id = id.slice(SERVER_REFERENCE_PRESERVE_PREFIX.length);
			id = removeReferenceCacheTag(id);
			const target = {};
			const getOrCreateServerReference = (name) => {
				return target[name] ??= import_server_edge$1.registerServerReference(() => {
					throw new Error(`Unexpectedly decoded server reference '${id}#${name}' is called on server`);
				}, id, name);
			};
			return new Proxy(target, { getOwnPropertyDescriptor(_target, name) {
				if (typeof name !== "string" || name === "then") return Reflect.getOwnPropertyDescriptor(target, name);
				getOrCreateServerReference(name);
				return Reflect.getOwnPropertyDescriptor(target, name);
			} });
		}
		if (id.startsWith("$$decode-client:")) {
			id = id.slice(SERVER_DECODE_CLIENT_PREFIX.length);
			id = removeReferenceCacheTag(id);
			const target = {};
			const getOrCreateClientReference = (name) => {
				return target[name] ??= import_server_edge$1.registerClientReference(() => {
					throw new Error(`Unexpectedly client reference export '${name}' is called on server`);
				}, id, name);
			};
			return new Proxy(target, { getOwnPropertyDescriptor(_target, name) {
				if (typeof name !== "string" || name === "then") return Reflect.getOwnPropertyDescriptor(target, name);
				getOrCreateClientReference(name);
				return Reflect.getOwnPropertyDescriptor(target, name);
			} });
		}
		return requireModule(id);
	});
	setInternalRequire();
}
async function loadServerAction(id) {
	const [file, name] = id.split("#");
	return (await requireModule(file))[name];
}
function createServerManifest(options) {
	const prefix = options?.preserveServerReferences ? SERVER_REFERENCE_PRESERVE_PREFIX : "";
	const cacheTag = "";
	return new Proxy({}, { get(_target, $$id, _receiver) {
		tinyassert(typeof $$id === "string");
		let [id, name] = $$id.split("#");
		tinyassert(id);
		tinyassert(name);
		return {
			id: SERVER_REFERENCE_PREFIX + prefix + id + cacheTag,
			name,
			chunks: [],
			async: true
		};
	} });
}
function createClientManifest(options) {
	const cacheTag = "";
	return new Proxy({}, { get(_target, $$id, _receiver) {
		tinyassert(typeof $$id === "string");
		let [id, name] = $$id.split("#");
		tinyassert(id);
		tinyassert(name);
		options?.onClientReference?.({
			id,
			name
		});
		return {
			id: id + cacheTag,
			name,
			chunks: [],
			async: true
		};
	} });
}
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/react/rsc/server.js
function renderToReadableStream$2(data, options, extraOptions) {
	return import_server_edge$1.renderToReadableStream(data, createClientManifest({ onClientReference: extraOptions?.onClientReference }), options);
}
var decodeReply = (body, options) => import_server_edge$1.decodeReply(body, createServerManifest(), options);
function decodeAction(body) {
	return import_server_edge$1.decodeAction(body, createServerManifest());
}
function decodeFormState(actionResult, body) {
	return import_server_edge$1.decodeFormState(actionResult, body, createServerManifest());
}
var createTemporaryReferenceSet = import_server_edge$1.createTemporaryReferenceSet;
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/client-reference-CCekXxax.js
function createOnClientReference(onClientReference) {
	return (metadata) => {
		const deps = assetsManifest.clientReferenceDeps[metadata.id] ?? {
			js: [],
			css: []
		};
		onClientReference({
			...metadata,
			deps
		});
	};
}
//#endregion
//#region \0virtual:vite-rsc/server-references
var server_references_default = {};
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/shared-D42sHPD1.js
setRequireModule({ load: async (id) => {
	{
		const import_ = server_references_default[id];
		if (!import_) throw new Error(`server reference not found '${id}'`);
		return import_();
	}
} });
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/rsc/server.js
function renderToReadableStream$1(data, options, extraOptions) {
	return renderToReadableStream$2(data, options, { onClientReference: extraOptions?.onClientReference ? createOnClientReference(extraOptions.onClientReference) : void 0 });
}
//#endregion
//#region node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack-client.edge.production.js
/**
* @license React
* react-server-dom-webpack-client.edge.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_server_dom_webpack_client_edge_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactDOM = require_react_dom_react_server();
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	Array.isArray;
	Function.prototype.bind;
	Array.prototype.slice;
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model":
				initializeModelChunk(this);
				break;
			case "resolved_module": initializeModuleChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				"function" === typeof resolve && resolve(this.value);
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			case "halted": break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	function wakeChunk(listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
		}
	}
	function rejectChunk(listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(listener, error);
		}
	}
	function resolveBlockedCycle(resolvedChunk, reference) {
		var referencedChunk = reference.handler.chunk;
		if (null === referencedChunk) return null;
		if (referencedChunk === resolvedChunk) return reference.handler;
		reference = referencedChunk.value;
		if (null !== reference) for (referencedChunk = 0; referencedChunk < reference.length; referencedChunk++) {
			var listener = reference[referencedChunk];
			if ("function" !== typeof listener && (listener = resolveBlockedCycle(resolvedChunk, listener), null !== listener)) return listener;
		}
		return null;
	}
	function triggerErrorOnChunk(response, chunk, error) {
		"pending" !== chunk.status && "blocked" !== chunk.status ? chunk.reason.error(error) : (response = chunk.reason, chunk.status = "rejected", chunk.reason = error, null !== response && rejectChunk(response, error));
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var resolvedModel = chunk.value, response = chunk.reason;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var value = JSON.parse(resolvedModel, response._fromJSON), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, resolvedModel = 0; resolvedModel < resolveListeners.length; resolvedModel++) {
				var listener = resolveListeners[resolvedModel];
				"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function initializeModuleChunk(chunk) {
		try {
			var value = requireModule(chunk.value);
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		}
	}
	function fulfillReference(reference, value) {
		var response = reference.response, handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var i = 1; i < path.length; i++) {
				for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
					var referencedChunk = value._payload;
					if (referencedChunk === handler.chunk) value = handler.value;
					else {
						switch (referencedChunk.status) {
							case "resolved_model":
								initializeModelChunk(referencedChunk);
								break;
							case "resolved_module": initializeModuleChunk(referencedChunk);
						}
						switch (referencedChunk.status) {
							case "fulfilled":
								value = referencedChunk.value;
								continue;
							case "blocked":
								var cyclicHandler = resolveBlockedCycle(referencedChunk, reference);
								if (null !== cyclicHandler) {
									value = cyclicHandler.value;
									continue;
								}
							case "pending":
								path.splice(0, i - 1);
								null === referencedChunk.value ? referencedChunk.value = [reference] : referencedChunk.value.push(reference);
								null === referencedChunk.reason ? referencedChunk.reason = [reference] : referencedChunk.reason.push(reference);
								return;
							case "halted": return;
							default:
								rejectReference(reference, referencedChunk.reason);
								return;
						}
					}
				}
				var name = path[i];
				if ("object" === typeof value && null !== value && hasOwnProperty.call(value, name)) value = value[name];
				else throw Error("Invalid reference.");
			}
			for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
				var referencedChunk$44 = value._payload;
				if (referencedChunk$44 === handler.chunk) value = handler.value;
				else {
					switch (referencedChunk$44.status) {
						case "resolved_model":
							initializeModelChunk(referencedChunk$44);
							break;
						case "resolved_module": initializeModuleChunk(referencedChunk$44);
					}
					switch (referencedChunk$44.status) {
						case "fulfilled":
							value = referencedChunk$44.value;
							continue;
					}
					break;
				}
			}
			var mappedValue = map(response, value, parentObject, key);
			"__proto__" !== key && (parentObject[key] = mappedValue);
			"" === key && null === handler.value && (handler.value = mappedValue);
			if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) {
				var element = handler.value;
				switch (key) {
					case "3": element.props = mappedValue;
				}
			}
		} catch (error) {
			rejectReference(reference, error);
			return;
		}
		handler.deps--;
		0 === handler.deps && (reference = handler.chunk, null !== reference && "blocked" === reference.status && (value = reference.value, reference.status = "fulfilled", reference.value = handler.value, reference.reason = handler.reason, null !== value && wakeChunk(value, handler.value, reference)));
	}
	function rejectReference(reference, error) {
		var handler = reference.handler;
		reference = reference.response;
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(reference, handler, error));
	}
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_server_dom_webpack_client_edge_production();
})))();
//#endregion
//#region node_modules/vinext/dist/server/rsc-stream-hints.js
var REACT_FLIGHT_STYLESHEET_PRELOAD_HINT = /(\d*:HL\[.*?),"stylesheet"(\]|,)/g;
/**
* React Flight emits HL hints with "stylesheet" for CSS preloads, but the
* HTML spec requires "style" for <link rel="preload">. Rewrite each complete
* Flight line so SSR embeds, navigation, and server actions see valid hints.
*/
function normalizeReactFlightHintLine(line) {
	return line.replace(REACT_FLIGHT_STYLESHEET_PRELOAD_HINT, "$1,\"style\"$2");
}
function normalizeReactFlightPreloadHints(stream) {
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	let carry = "";
	return stream.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			const text = carry + decoder.decode(chunk, { stream: true });
			const lastNewline = text.lastIndexOf("\n");
			if (lastNewline === -1) {
				carry = text;
				return;
			}
			carry = text.slice(lastNewline + 1);
			controller.enqueue(encoder.encode(normalizeReactFlightHintLine(text.slice(0, lastNewline + 1))));
		},
		flush(controller) {
			const text = carry + decoder.decode();
			if (text) controller.enqueue(encoder.encode(normalizeReactFlightHintLine(text)));
		}
	}));
}
function createRscRenderer(render) {
	return (model, options) => normalizeReactFlightPreloadHints(render(model, options));
}
//#endregion
//#region node_modules/vinext/dist/shims/readonly-url-search-params.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
var ReadonlyURLSearchParamsError = class extends Error {
	constructor() {
		super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
	}
};
/**
* Read-only URLSearchParams wrapper matching Next.js runtime behavior.
* Mutation methods remain present for instanceof/API compatibility but throw.
*/
var ReadonlyURLSearchParams = class extends URLSearchParams {
	append(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	delete(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	set(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	sort() {
		throw new ReadonlyURLSearchParamsError();
	}
};
//#endregion
//#region node_modules/vinext/dist/utils/base-path.js
/**
* Shared basePath helpers.
*
* Next.js only treats a pathname as being under basePath when it is an exact
* match ("/app") or starts with the basePath followed by a path separator
* ("/app/..."). Prefix-only matches like "/application" must be left intact.
*/
/**
* Check whether a pathname is inside the configured basePath.
*/
function hasBasePath(pathname, basePath) {
	if (!basePath) return false;
	return pathname === basePath || pathname.startsWith(basePath + "/");
}
/**
* Strip the basePath prefix from a pathname when it matches on a segment
* boundary. Returns the original pathname when it is outside the basePath.
*/
function stripBasePath(pathname, basePath) {
	if (!hasBasePath(pathname, basePath)) return pathname;
	return pathname.slice(basePath.length) || "/";
}
/**
* Add the configured basePath to a pathname unless it is already inside that
* basePath. Query strings and hashes must be handled by callers before calling
* this pathname-only helper.
*/
function addBasePathToPathname(pathname, basePath) {
	if (!basePath || hasBasePath(pathname, basePath)) return pathname;
	return pathname === "/" ? basePath : `${basePath}${pathname}`;
}
/**
* Remove trailing slashes from a pathname while preserving the root "/".
* Collapses any number of trailing slashes ("/a//" → "/a"). Used by the
* trailing-slash redirect path and route pattern normalization.
*/
function removeTrailingSlash(pathname) {
	if (pathname === "/") return "/";
	let end = pathname.length;
	while (end > 0 && pathname.charCodeAt(end - 1) === 47) end--;
	return end === 0 ? "/" : pathname.slice(0, end);
}
//#endregion
//#region node_modules/vinext/dist/server/headers.js
/**
* Internal HTTP header name constants used throughout vinext.
*
* Centralizes all custom header names so they are defined once and referenced
* everywhere via imports. Keeping them in one module prevents typos, makes
* rename-refactors trivial, and lets grep find every consumer instantly.
*
* Standard HTTP headers (Content-Type, Cache-Control, etc.) are intentionally
* omitted — only vinext-internal and Next.js-protocol headers belong here.
*/
/** ISR / page cache state indicator: "HIT" | "MISS" | "STALE" | "STATIC". */
var VINEXT_CACHE_HEADER = "X-Vinext-Cache";
/** Next.js public ISR / page cache state indicator. */
var NEXTJS_CACHE_HEADER = "x-nextjs-cache";
/** Static file signal — value is URL-encoded pathname. */
var VINEXT_STATIC_FILE_HEADER = "x-vinext-static-file";
/** Serialized middleware context (JSON) forwarded from dev server to RSC entry. */
var VINEXT_MW_CTX_HEADER = "x-vinext-mw-ctx";
/** Timing metrics: `handlerStart,compileMs,renderMs`. */
var VINEXT_TIMING_HEADER = "x-vinext-timing";
/** Build-time prerender authentication secret. */
var VINEXT_PRERENDER_SECRET_HEADER = "x-vinext-prerender-secret";
/** URL-encoded JSON route params carried on RSC responses. */
var VINEXT_PARAMS_HEADER = "X-Vinext-Params";
/** Deduplicated, sorted list of mounted layout slots for cache keying. */
var VINEXT_MOUNTED_SLOTS_HEADER = "X-Vinext-Mounted-Slots";
/** Route interception context for parallel/intercepting routes. */
var VINEXT_INTERCEPTION_CONTEXT_HEADER = "X-Vinext-Interception-Context";
/** RSC render mode (e.g. "navigation", "prefetch"). */
var VINEXT_RSC_RENDER_MODE_HEADER = "X-Vinext-Rsc-Render-Mode";
/** Disabled-by-default client hint describing already-held App Router payload entries. */
var VINEXT_CLIENT_REUSE_MANIFEST_HEADER = "X-Vinext-Client-Reuse-Manifest";
/**
* Side-channel signal that an RSC response (HTTP 200) encodes a `redirect()`
* thrown during render. The header value is the redirect target (path-only
* for same-origin, absolute for cross-origin). The flight body still carries
* the canonical `NEXT_REDIRECT;...` digest so Next.js's own tests can read it
* via response.body; this header is purely for vinext's own client
* (`navigateRsc` in app-browser-entry.ts) to follow the redirect inside the
* same navigation transaction — keeping `useTransition`'s pending state
* continuous across the hop. Pre-1347 vinext relied on `fetch`'s auto-follow
* of a 307 for that, but the new 200 + flight format leaves it without a
* cheap way to detect the redirect ahead of stream decode.
*/
var VINEXT_RSC_REDIRECT_HEADER = "X-Vinext-Rsc-Redirect";
/** Next.js action-not-found indicator (value "1"). */
var NEXTJS_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";
/** Forwarded action marker — set when a request has already been forwarded between workers. */
var ACTION_FORWARDED_HEADER = "x-action-forwarded";
/** Indicates revalidation occurred — value is JSON kind (1 = path/tag, 2 = dynamic-only). */
var ACTION_REVALIDATED_HEADER = "x-action-revalidated";
/** Redirect URL from a Server Action. */
var ACTION_REDIRECT_HEADER = "x-action-redirect";
/** Redirect type from a Server Action ("push" | "replace"). */
var ACTION_REDIRECT_TYPE_HEADER = "x-action-redirect-type";
/** HTTP status for a Server Action redirect (e.g. "308"). */
var ACTION_REDIRECT_STATUS_HEADER = "x-action-redirect-status";
/** Prefix for forwarded request headers (e.g. `x-middleware-request-cookie`). */
var MIDDLEWARE_REQUEST_HEADER_PREFIX = "x-middleware-request-";
/** Comma-separated list of header names that middleware wants to override. */
var MIDDLEWARE_OVERRIDE_HEADERS = "x-middleware-override-headers";
/** Carries cookies set by middleware for same-render reads. */
var MIDDLEWARE_SET_COOKIE_HEADER = "x-middleware-set-cookie";
/** Signal from `NextResponse.next()` — value "1" means "continue to next handler". */
var MIDDLEWARE_NEXT_HEADER = "x-middleware-next";
/** Rewrite destination URL set by `NextResponse.rewrite()`. */
var MIDDLEWARE_REWRITE_HEADER = "x-middleware-rewrite";
/** Redirect URL set by middleware. */
var MIDDLEWARE_REDIRECT_HEADER = "x-middleware-redirect";
/** Skip-middleware signal. */
var MIDDLEWARE_SKIP_HEADER = "x-middleware-skip";
var NEXT_ROUTER_STATE_TREE_HEADER = "Next-Router-State-Tree";
var NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "Next-Router-Segment-Prefetch";
var NEXT_URL_HEADER = "Next-Url";
/** Lowercase flight header variants used in middleware forwarding. */
var FLIGHT_HEADERS = [
	"rsc",
	"next-router-state-tree",
	"next-router-prefetch",
	"next-hmr-refresh",
	"next-router-segment-prefetch"
];
/**
* Headers that must be stripped from external requests before any handler
* processes them. An attacker could forge these to influence routing or
* impersonate internal data fetches.
*
* Ported from Next.js `INTERNAL_HEADERS`:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/lib/server-ipc/utils.ts
*/
var INTERNAL_HEADERS = [
	MIDDLEWARE_REWRITE_HEADER,
	MIDDLEWARE_REDIRECT_HEADER,
	MIDDLEWARE_SET_COOKIE_HEADER,
	MIDDLEWARE_SKIP_HEADER,
	MIDDLEWARE_OVERRIDE_HEADERS,
	MIDDLEWARE_NEXT_HEADER,
	"x-now-route-matches",
	"x-matched-path",
	"x-nextjs-data",
	"x-next-resume-state-length",
	ACTION_FORWARDED_HEADER
];
//#endregion
//#region node_modules/vinext/dist/shims/url-safety.js
/**
* Shared URL safety utilities for Link, Form, and navigation shims.
*
* Centralizes dangerous URI scheme detection so all components and
* navigation functions use the same validation logic.
*/
/**
* Detect dangerous URI schemes that should never be navigated to.
*
* Adapted from Next.js's javascript URL detector:
* packages/next/src/client/lib/javascript-url.ts
* https://github.com/vercel/next.js/blob/canary/packages/next/src/client/lib/javascript-url.ts
*
* URL parsing ignores leading C0 control characters / spaces, and treats
* embedded tab/newline characters in the scheme as insignificant. We mirror
* that behavior here so obfuscated values like `java\nscript:` and
* `\x00javascript:` are still blocked.
*
* Vinext intentionally extends this handling to `data:` and `vbscript:` too,
* since both are also dangerous navigation targets.
*/
var LEADING_IGNORED = "[\\u0000-\\u001F \\u200B\\uFEFF]*";
var SCHEME_IGNORED = "[\\r\\n\\t]*";
function buildDangerousSchemeRegex(scheme) {
	const chars = scheme.split("").join(SCHEME_IGNORED);
	return new RegExp(`^${LEADING_IGNORED}${chars}${SCHEME_IGNORED}:`, "i");
}
buildDangerousSchemeRegex("javascript"), buildDangerousSchemeRegex("data"), buildDangerousSchemeRegex("vbscript");
//#endregion
//#region node_modules/vinext/dist/shims/url-utils.js
/**
* Shared URL utilities for same-origin detection.
*
* Used by link.tsx, navigation.ts, and router.ts to normalize
* same-origin absolute URLs to local paths for client-side navigation.
*/
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
function isAbsoluteUrl(url) {
	const firstChar = url.charCodeAt(0);
	return (firstChar >= 65 && firstChar <= 90 || firstChar >= 97 && firstChar <= 122) && ABSOLUTE_URL_REGEX.test(url);
}
function isAbsoluteOrProtocolRelativeUrl(url) {
	return isAbsoluteUrl(url) || url.startsWith("//");
}
//#endregion
//#region node_modules/vinext/dist/utils/record.js
function isUnknownRecord(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
var NAVIGATION_RUNTIME_KEY = Symbol.for("vinext.navigationRuntime");
var ROUTE_MANIFEST_SEGMENT_GRAPH_MAP_KEYS = [
	"boundaries",
	"defaults",
	"interceptions",
	"interceptionsBySlotId",
	"layouts",
	"pages",
	"rootBoundaries",
	"routeHandlers",
	"routes",
	"slotBindings",
	"slots",
	"templates"
];
function readRuntimeWindow() {
	if (typeof window === "undefined") return null;
	return window;
}
function isNavigationRuntimeFunctions(value) {
	if (!isUnknownRecord(value)) return false;
	return isOptionalRuntimeFunction(Reflect.get(value, "clearNavigationCaches")) && isOptionalRuntimeFunction(Reflect.get(value, "commitHashNavigation")) && isOptionalRuntimeFunction(Reflect.get(value, "navigate")) && isOptionalRuntimeFunction(Reflect.get(value, "pingVisibleLinks"));
}
function isNavigationRuntimeRscChunk(value) {
	if (typeof value === "string") return true;
	return Array.isArray(value) && value.length === 2 && value[0] === 3 && typeof value[1] === "string";
}
function isNavigationRuntimeSnapshot(value) {
	if (!isUnknownRecord(value)) return false;
	const pathname = Reflect.get(value, "pathname");
	const searchParams = Reflect.get(value, "searchParams");
	return typeof pathname === "string" && Array.isArray(searchParams) && searchParams.every((entry) => Array.isArray(entry) && entry.length === 2 && typeof entry[0] === "string" && typeof entry[1] === "string");
}
function isNavigationRuntimeParams(value) {
	if (!isUnknownRecord(value)) return false;
	return Object.values(value).every((entry) => typeof entry === "string" || Array.isArray(entry) && entry.every((part) => typeof part === "string"));
}
function isNavigationRuntimeRscBootstrap(value) {
	if (!isUnknownRecord(value)) return false;
	const done = Reflect.get(value, "done");
	const nav = Reflect.get(value, "nav");
	const params = Reflect.get(value, "params");
	const rsc = Reflect.get(value, "rsc");
	return (done === void 0 || typeof done === "boolean") && (nav === void 0 || isNavigationRuntimeSnapshot(nav)) && (params === void 0 || isNavigationRuntimeParams(params)) && Array.isArray(rsc) && rsc.every(isNavigationRuntimeRscChunk);
}
function isReadonlyStringArray(value) {
	return Array.isArray(value) && value.every((entry) => typeof entry === "string");
}
function isNullableString(value) {
	return value === null || typeof value === "string";
}
function isNavigationRuntimeInterception(value) {
	if (!isUnknownRecord(value)) return false;
	return typeof value.id === "string" && typeof value.sourcePattern === "string" && isReadonlyStringArray(value.sourcePatternParts) && typeof value.targetPattern === "string" && isReadonlyStringArray(value.targetPatternParts) && typeof value.slotId === "string" && isNullableString(value.ownerLayoutId) && isNullableString(value.interceptingRouteId) && isNullableString(value.targetRouteId);
}
function isNavigationRuntimeInterceptionArray(value) {
	return Array.isArray(value) && value.every(isNavigationRuntimeInterception);
}
function isNavigationRuntimeRouteManifest(value) {
	if (!isUnknownRecord(value)) return false;
	const graphVersion = Reflect.get(value, "graphVersion");
	const segmentGraph = Reflect.get(value, "segmentGraph");
	if (typeof graphVersion !== "string" || !isUnknownRecord(segmentGraph)) return false;
	const interceptions = Reflect.get(segmentGraph, "interceptions");
	const interceptionsBySlotId = Reflect.get(segmentGraph, "interceptionsBySlotId");
	if (!ROUTE_MANIFEST_SEGMENT_GRAPH_MAP_KEYS.every((key) => Reflect.get(segmentGraph, key) instanceof Map) || !(interceptions instanceof Map) || !(interceptionsBySlotId instanceof Map)) return false;
	for (const interception of interceptions.values()) if (!isNavigationRuntimeInterception(interception)) return false;
	for (const slotInterceptions of interceptionsBySlotId.values()) if (!isNavigationRuntimeInterceptionArray(slotInterceptions)) return false;
	return true;
}
function isNavigationRuntimeBootstrap(value) {
	if (!isUnknownRecord(value)) return false;
	const routeManifest = Reflect.get(value, "routeManifest");
	const rsc = Reflect.get(value, "rsc");
	return (routeManifest === null || isNavigationRuntimeRouteManifest(routeManifest)) && (rsc === void 0 || isNavigationRuntimeRscBootstrap(rsc));
}
function isNavigationRuntime(value) {
	if (!isUnknownRecord(value)) return false;
	if (!("bootstrap" in value) || !("functions" in value)) return false;
	const { bootstrap, functions } = value;
	return isNavigationRuntimeBootstrap(bootstrap) && isNavigationRuntimeFunctions(functions);
}
function isOptionalRuntimeFunction(value) {
	return value === void 0 || typeof value === "function";
}
function getNavigationRuntime() {
	const runtimeWindow = readRuntimeWindow();
	if (runtimeWindow === null) return null;
	const runtime = Reflect.get(runtimeWindow, NAVIGATION_RUNTIME_KEY);
	return isNavigationRuntime(runtime) ? runtime : null;
}
function hasAppNavigationRuntime() {
	return typeof getNavigationRuntime()?.functions.navigate === "function";
}
//#endregion
//#region node_modules/vinext/dist/server/normalize-path.js
function isInterceptionMatchedUrlPath(value) {
	return value.startsWith("/") && !value.startsWith("//") && !value.includes("?") && !value.includes("#") && !value.includes("\0");
}
/**
* Path normalization utility for request handling.
*
* Normalizes URL pathnames to a canonical form BEFORE any matching occurs
* (middleware, routing, redirects, rewrites). This ensures middleware and
* the router always see the same path, preventing path-confusion issues like
* double-slash mismatches.
*
* Normalization rules:
*  1. Collapse consecutive slashes: //foo///bar → /foo/bar
*  2. Resolve single-dot segments:  /foo/./bar  → /foo/bar
*  3. Resolve double-dot segments:  /foo/../bar → /bar
*  4. Ensure leading slash:         foo/bar     → /foo/bar
*  5. Preserve root:                /           → /
*
* This function does NOT:
*  - Strip or add trailing slashes (handled separately by trailingSlash config)
*  - Decode percent-encoded characters (callers should decode before calling this)
*  - Lowercase the path (route matching is case-sensitive)
*/
function normalizePath(pathname) {
	if (pathname === "/" || pathname.length > 1 && pathname[0] === "/" && !pathname.includes("//") && !pathname.includes("/./") && !pathname.includes("/../") && !pathname.endsWith("/.") && !pathname.endsWith("/..")) return pathname;
	const segments = pathname.split("/");
	const resolved = [];
	for (const segment of segments) {
		if (segment === "" || segment === ".") continue;
		if (segment === "..") resolved.pop();
		else resolved.push(segment);
	}
	return "/" + resolved.join("/");
}
//#endregion
//#region node_modules/vinext/dist/utils/hash.js
/**
* FNV-1a hash producing a 64-bit result (two 32-bit rounds with different seeds).
* Used for deterministic key generation where collisions must be rare.
*/
function fnv1a64(input) {
	let h1 = 2166136261;
	for (let i = 0; i < input.length; i++) {
		h1 ^= input.charCodeAt(i);
		h1 = h1 * 16777619 >>> 0;
	}
	let h2 = 84696351;
	for (let i = 0; i < input.length; i++) {
		h2 ^= input.charCodeAt(i);
		h2 = h2 * 16777619 >>> 0;
	}
	return h1.toString(36) + h2.toString(36);
}
//#endregion
//#region node_modules/vinext/dist/server/artifact-compatibility.js
function createArtifactCompatibilityEnvelope(input = {}) {
	return {
		schemaVersion: 1,
		graphVersion: input.graphVersion ?? null,
		deploymentVersion: input.deploymentVersion ?? null,
		appElementsSchemaVersion: 1,
		rscPayloadSchemaVersion: 1,
		rootBoundaryId: input.rootBoundaryId ?? null,
		renderEpoch: input.renderEpoch ?? null
	};
}
function createArtifactCompatibilityGraphVersion(input) {
	return `app-route-graph:${fnv1a64(JSON.stringify([input.routePattern, input.rootBoundaryId]))}`;
}
function isRecord$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isStringOrNull(value) {
	return typeof value === "string" || value === null;
}
function hasCurrentSchemaVersions(record) {
	return record.schemaVersion === 1 && record.appElementsSchemaVersion === 1 && record.rscPayloadSchemaVersion === 1;
}
function parseArtifactCompatibilityEnvelope(value) {
	if (!isRecord$1(value)) return null;
	if (!hasCurrentSchemaVersions(value)) return null;
	if (!isStringOrNull(value.graphVersion)) return null;
	if (!isStringOrNull(value.deploymentVersion)) return null;
	if (!isStringOrNull(value.rootBoundaryId)) return null;
	if (!isStringOrNull(value.renderEpoch)) return null;
	return {
		schemaVersion: 1,
		graphVersion: value.graphVersion,
		deploymentVersion: value.deploymentVersion,
		appElementsSchemaVersion: 1,
		rscPayloadSchemaVersion: 1,
		rootBoundaryId: value.rootBoundaryId,
		renderEpoch: value.renderEpoch
	};
}
//#endregion
//#region node_modules/vinext/dist/server/app-elements-wire.js
var APP_INTERCEPTION_SEPARATOR = "\0";
var APP_ARTIFACT_COMPATIBILITY_KEY = "__artifactCompatibility";
var APP_CACHE_ENTRY_REUSE_PROOF_KEY = "__cacheEntryReuseProof";
var APP_INTERCEPTION_KEY = "__interception";
var APP_INTERCEPTION_CONTEXT_KEY = "__interceptionContext";
var APP_LAYOUT_IDS_KEY = "__layoutIds";
var APP_LAYOUT_FLAGS_KEY = "__layoutFlags";
var APP_RENDER_OBSERVATION_KEY = "__renderObservation";
var APP_ROUTE_KEY = "__route";
var APP_ROOT_LAYOUT_KEY = "__rootLayout";
var APP_SLOT_BINDINGS_KEY = "__slotBindings";
var APP_UNMATCHED_SLOT_WIRE_VALUE = "__VINEXT_UNMATCHED_SLOT__";
var UNMATCHED_SLOT = Symbol.for("vinext.unmatchedSlot");
function createCacheProofRejectionCodeSet(codes) {
	return new Set(codes);
}
var CACHE_PROOF_REJECTION_CODES = createCacheProofRejectionCodeSet([
	"CP_CACHE_ENTRY_PROOF_MISSING",
	"CP_MODEL_DISABLED",
	"CP_ARTIFACT_COMPATIBILITY_INCOMPATIBLE",
	"CP_ARTIFACT_COMPATIBILITY_UNKNOWN",
	"CP_DIMENSION_COUNT_EXCEEDED",
	"CP_DIMENSION_NAME_MISSING",
	"CP_DIMENSION_NAME_TOO_LONG",
	"CP_DIMENSION_VALUE_COUNT_EXCEEDED",
	"CP_DIMENSION_VALUE_TOO_LONG",
	"CP_DIMENSION_VALUES_MISSING",
	"CP_ENCODED_VARIANT_TOO_LONG",
	"CP_INVALID_VARIANT_BUDGET",
	"CP_ROUTE_VARIANT_BUDGET_ROUTE_MISMATCH",
	"CP_ROUTE_VARIANT_CEILING_EXCEEDED",
	"CP_UNSAFE_PUBLIC_DIMENSION",
	"CP_BOUNDARY_OUTCOME_MISMATCH",
	"CP_BOUNDARY_OUTCOME_UNKNOWN",
	"CP_PRIVATE_DYNAMIC_DOWNGRADE",
	"CP_STATIC_LAYOUT_CANDIDATE_OUTPUT_KIND",
	"CP_STATIC_LAYOUT_CURRENT_OUTPUT_KIND",
	"CP_STATIC_LAYOUT_ID_MISMATCH",
	"CP_STATIC_LAYOUT_OBSERVATION_OUTPUT_KIND",
	"CP_STATIC_LAYOUT_OBSERVATION_OUTPUT_MISMATCH",
	"CP_STATIC_LAYOUT_PRIVATE_DYNAMIC_DOWNGRADE",
	"CP_STATIC_LAYOUT_REQUEST_API_OBSERVED",
	"CP_STATIC_LAYOUT_REQUEST_API_UNKNOWN",
	"CP_STATIC_LAYOUT_ROOT_BOUNDARY_MISMATCH",
	"CP_STATIC_LAYOUT_ROOT_BOUNDARY_UNKNOWN",
	"CP_STATIC_LAYOUT_VARIANT_DIMENSION_UNPROVEN"
]);
function compareAppElementsSlotIds(left, right) {
	if (left < right) return -1;
	if (left > right) return 1;
	return 0;
}
function compareAppElementsSlotBindingsBySlotId(left, right) {
	return compareAppElementsSlotIds(left.slotId, right.slotId);
}
function normalizeAppElementsSlotBindings(slotBindings, options = {}) {
	const ownerLayoutIds = options.layoutIds ? new Set(options.layoutIds) : null;
	const seenSlotIds = /* @__PURE__ */ new Set();
	const normalized = [];
	for (const binding of slotBindings) {
		if (seenSlotIds.has(binding.slotId)) throw new Error("[vinext] Invalid __slotBindings in App Router payload: duplicate slot id");
		seenSlotIds.add(binding.slotId);
		if (ownerLayoutIds && binding.ownerLayoutId !== null && !ownerLayoutIds.has(binding.ownerLayoutId)) throw new Error("[vinext] Invalid __slotBindings in App Router payload: owner layout id missing from __layoutIds");
		normalized.push({ ...binding });
	}
	return normalized.sort(compareAppElementsSlotBindingsBySlotId);
}
function appendInterceptionContext(identity, interceptionContext) {
	return interceptionContext === null ? identity : `${identity}${APP_INTERCEPTION_SEPARATOR}${interceptionContext}`;
}
function createAppPayloadRouteId(routePath, interceptionContext) {
	return appendInterceptionContext(`route:${routePath}`, interceptionContext);
}
function createAppPayloadPageId(routePath, interceptionContext) {
	return appendInterceptionContext(`page:${routePath}`, interceptionContext);
}
function createAppPayloadLayoutId(treePath) {
	return `layout:${treePath}`;
}
function createAppPayloadTemplateId(treePath) {
	return `template:${treePath}`;
}
function createAppPayloadSlotId(slotName, treePath) {
	return `slot:${slotName}:${treePath}`;
}
function createAppPayloadCacheKey(rscUrl, interceptionContext) {
	return appendInterceptionContext(rscUrl, interceptionContext);
}
function parsePathWithInterception(input) {
	const separatorIndex = input.indexOf(APP_INTERCEPTION_SEPARATOR);
	const path = separatorIndex === -1 ? input : input.slice(0, separatorIndex);
	if (!path.startsWith("/")) return null;
	return {
		interceptionContext: separatorIndex === -1 ? null : input.slice(separatorIndex + 1),
		path
	};
}
/**
* AppElements tree paths are absolute route-tree paths on the wire.
* Bare segment names are not valid layout/template/slot tree identities.
*/
function parseTreePath(input) {
	return input.startsWith("/") ? input : null;
}
function parseAppElementsWireElementKey(key) {
	if (key.startsWith("route:")) {
		const parsed = parsePathWithInterception(key.slice(6));
		if (!parsed) return null;
		return {
			interceptionContext: parsed.interceptionContext,
			kind: "route",
			path: parsed.path
		};
	}
	if (key.startsWith("page:")) {
		const parsed = parsePathWithInterception(key.slice(5));
		if (!parsed) return null;
		return {
			interceptionContext: parsed.interceptionContext,
			kind: "page",
			path: parsed.path
		};
	}
	if (key.startsWith("layout:")) {
		const treePath = parseTreePath(key.slice(7));
		return treePath ? {
			kind: "layout",
			treePath
		} : null;
	}
	if (key.startsWith("template:")) {
		const treePath = parseTreePath(key.slice(9));
		return treePath ? {
			kind: "template",
			treePath
		} : null;
	}
	if (key.startsWith("slot:")) {
		const body = key.slice(5);
		const separatorIndex = body.indexOf(":");
		if (separatorIndex <= 0) return null;
		const name = body.slice(0, separatorIndex);
		const treePath = parseTreePath(body.slice(separatorIndex + 1));
		return treePath ? {
			kind: "slot",
			name,
			treePath
		} : null;
	}
	return null;
}
function isAppElementsWireSlotId(key) {
	if (!key.startsWith("slot:")) return false;
	const body = key.slice(5);
	const separatorIndex = body.indexOf(":");
	return separatorIndex > 0 && body.charCodeAt(separatorIndex + 1) === 47;
}
function createAppElementsWireMetadataEntries(input) {
	const layoutIds = [...input.layoutIds ?? []];
	const entries = {
		[APP_ROUTE_KEY]: input.routeId,
		[APP_INTERCEPTION_CONTEXT_KEY]: input.interceptionContext,
		[APP_LAYOUT_IDS_KEY]: layoutIds,
		[APP_ROOT_LAYOUT_KEY]: input.rootLayoutTreePath
	};
	const entriesWithInterception = input.interception ? {
		...entries,
		[APP_INTERCEPTION_KEY]: input.interception
	} : entries;
	if (input.slotBindings && input.slotBindings.length > 0) return {
		...entriesWithInterception,
		[APP_SLOT_BINDINGS_KEY]: normalizeAppElementsSlotBindings(input.slotBindings, { layoutIds })
	};
	return entriesWithInterception;
}
function normalizeAppElements(elements) {
	let needsNormalization = false;
	for (const [key, value] of Object.entries(elements)) if (isAppElementsWireSlotId(key) && value === "__VINEXT_UNMATCHED_SLOT__") {
		needsNormalization = true;
		break;
	}
	if (!needsNormalization) return elements;
	const normalized = {};
	for (const [key, value] of Object.entries(elements)) normalized[key] = isAppElementsWireSlotId(key) && value === "__VINEXT_UNMATCHED_SLOT__" ? UNMATCHED_SLOT : value;
	return normalized;
}
function isLayoutFlagsRecord(value) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
	for (const v of Object.values(value)) if (v !== "s" && v !== "d") return false;
	return true;
}
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function parseLayoutFlags(value) {
	if (isLayoutFlagsRecord(value)) return value;
	return {};
}
function parseLayoutIds(value) {
	if (value === void 0) return [];
	if (!Array.isArray(value)) throw new Error("[vinext] Invalid __layoutIds in App Router payload: expected layout id string[]");
	const layoutIds = [];
	for (const entry of value) {
		if (typeof entry !== "string") throw new Error("[vinext] Invalid __layoutIds in App Router payload: expected layout id string[]");
		if (parseAppElementsWireElementKey(entry)?.kind !== "layout") throw new Error("[vinext] Invalid __layoutIds in App Router payload: expected layout ids");
		layoutIds.push(entry);
	}
	return layoutIds;
}
function isSlotBindingState(value) {
	return value === "active" || value === "default" || value === "unmatched";
}
function parseSlotBindings(value, options = {}) {
	if (value === void 0) return [];
	if (!Array.isArray(value)) throw new Error("[vinext] Invalid __slotBindings in App Router payload: expected array");
	const slotBindings = [];
	for (const entry of value) {
		if (!isRecord(entry)) throw new Error("[vinext] Invalid __slotBindings in App Router payload: expected objects");
		const slotId = entry.slotId;
		if (typeof slotId !== "string" || parseAppElementsWireElementKey(slotId)?.kind !== "slot") throw new Error("[vinext] Invalid __slotBindings in App Router payload: expected slot ids");
		const ownerLayoutId = entry.ownerLayoutId;
		if (ownerLayoutId !== null && (typeof ownerLayoutId !== "string" || parseAppElementsWireElementKey(ownerLayoutId)?.kind !== "layout")) throw new Error("[vinext] Invalid __slotBindings in App Router payload: expected owner layout ids");
		const state = entry.state;
		if (!isSlotBindingState(state)) throw new Error("[vinext] Invalid __slotBindings in App Router payload: expected state");
		slotBindings.push({
			ownerLayoutId,
			slotId,
			state
		});
	}
	return normalizeAppElementsSlotBindings(slotBindings, options);
}
function readRequiredInterceptionString(entry, fieldName) {
	const value = entry[fieldName];
	if (typeof value !== "string") throw new Error("[vinext] Invalid __interception in App Router payload: expected strings");
	return value;
}
function parseInterceptionMatchedUrl(value) {
	if (!isInterceptionMatchedUrlPath(value)) throw new Error("[vinext] Invalid __interception in App Router payload: expected path URLs");
	return value;
}
function parseInterceptionRouteId(value, matchedUrl) {
	const parsed = parseAppElementsWireElementKey(value);
	if (parsed?.kind !== "route" || parsed.path !== matchedUrl || parsed.interceptionContext !== null) throw new Error("[vinext] Invalid __interception in App Router payload: expected route ids");
	return value;
}
function parseInterceptionSlotId(value) {
	if (parseAppElementsWireElementKey(value)?.kind !== "slot") throw new Error("[vinext] Invalid __interception in App Router payload: expected slot id");
	return value;
}
function parseInterceptionMetadata(value) {
	if (value === void 0 || value === null) return null;
	if (!isRecord(value)) throw new Error("[vinext] Invalid __interception in App Router payload: expected object");
	const sourceMatchedUrl = parseInterceptionMatchedUrl(readRequiredInterceptionString(value, "sourceMatchedUrl"));
	const targetMatchedUrl = parseInterceptionMatchedUrl(readRequiredInterceptionString(value, "targetMatchedUrl"));
	return {
		sourceMatchedUrl,
		sourceRouteId: parseInterceptionRouteId(readRequiredInterceptionString(value, "sourceRouteId"), sourceMatchedUrl),
		slotId: parseInterceptionSlotId(readRequiredInterceptionString(value, "slotId")),
		targetMatchedUrl,
		targetRouteId: parseInterceptionRouteId(readRequiredInterceptionString(value, "targetRouteId"), targetMatchedUrl)
	};
}
/**
* Type predicate for a plain (non-null, non-array) record of app payload values.
* Used to distinguish the App Router payload object from bare React elements at
* the render boundary. Narrows to `Readonly<Record<string, unknown>>` because
* the outgoing payload carries heterogeneous values (ReactNodes for the rendered
* tree, plus metadata like `__layoutFlags` which is a plain object). Delegates
* to React's canonical `isValidElement` so we don't depend on React's internal
* `$$typeof` marker scheme.
*/
function isAppElementsRecord(value) {
	if (typeof value !== "object" || value === null) return false;
	if (Array.isArray(value)) return false;
	if ((0, import_react_react_server.isValidElement)(value)) return false;
	return true;
}
function withLayoutFlags(elements, layoutFlags) {
	return {
		...elements,
		[APP_LAYOUT_FLAGS_KEY]: layoutFlags
	};
}
function buildOutgoingAppPayload(input) {
	if (!isAppElementsRecord(input.element)) return input.element;
	const payload = {
		...input.element,
		[APP_LAYOUT_FLAGS_KEY]: input.layoutFlags,
		[APP_ARTIFACT_COMPATIBILITY_KEY]: input.artifactCompatibility ?? createArtifactCompatibilityEnvelope()
	};
	if (input.cacheEntryReuseProof) payload[APP_CACHE_ENTRY_REUSE_PROOF_KEY] = input.cacheEntryReuseProof;
	if (input.renderObservation) payload[APP_RENDER_OBSERVATION_KEY] = input.renderObservation;
	return payload;
}
function readArtifactCompatibilityMetadata(value) {
	if (value === void 0) return createArtifactCompatibilityEnvelope();
	return parseArtifactCompatibilityEnvelope(value) ?? createArtifactCompatibilityEnvelope();
}
function createMissingCacheEntryReuseProof() {
	return {
		kind: "runtime-cache-entry",
		decision: null
	};
}
function isCacheProofRejectionCode(value) {
	return typeof value === "string" && CACHE_PROOF_REJECTION_CODES.has(value);
}
function isCacheProofFallbackMode(value) {
	return value === "renderFresh" || value === "privateUncacheable";
}
function isCacheProofFallbackScope(value) {
	return value === "affectedOutput" || value === "route";
}
function parseCacheEntryReuseProofMetadata(value) {
	if (value === void 0) return null;
	if (!isRecord(value) || value.kind !== "runtime-cache-entry") return createMissingCacheEntryReuseProof();
	const decision = value.decision;
	if (decision === null) return createMissingCacheEntryReuseProof();
	if (!isRecord(decision)) return createMissingCacheEntryReuseProof();
	if (decision.kind === "reuse" && decision.canReuse === true && decision.code === "CP_STATIC_LAYOUT_REUSE_PROVEN" && decision.reuseClass === "static-layout") return {
		kind: "runtime-cache-entry",
		decision: {
			canReuse: true,
			code: decision.code,
			kind: "reuse",
			reuseClass: decision.reuseClass
		}
	};
	if (decision.kind === "reject" && decision.canReuse === false && isCacheProofRejectionCode(decision.code) && isCacheProofFallbackMode(decision.mode) && isCacheProofFallbackScope(decision.scope)) return {
		kind: "runtime-cache-entry",
		decision: {
			canReuse: false,
			code: decision.code,
			kind: "reject",
			mode: decision.mode,
			scope: decision.scope
		}
	};
	return createMissingCacheEntryReuseProof();
}
function readAppElementsMetadata(elements) {
	const routeId = elements[APP_ROUTE_KEY];
	if (typeof routeId !== "string") throw new Error("[vinext] Missing __route string in App Router payload");
	const interceptionContext = elements[APP_INTERCEPTION_CONTEXT_KEY];
	if (interceptionContext !== void 0 && interceptionContext !== null && typeof interceptionContext !== "string") throw new Error("[vinext] Invalid __interceptionContext in App Router payload");
	const rootLayoutTreePath = elements[APP_ROOT_LAYOUT_KEY];
	if (rootLayoutTreePath === void 0) throw new Error("[vinext] Missing __rootLayout key in App Router payload");
	if (rootLayoutTreePath !== null && typeof rootLayoutTreePath !== "string") throw new Error("[vinext] Invalid __rootLayout in App Router payload: expected string or null");
	const layoutFlags = parseLayoutFlags(elements[APP_LAYOUT_FLAGS_KEY]);
	const layoutIds = parseLayoutIds(elements[APP_LAYOUT_IDS_KEY]);
	const slotBindings = parseSlotBindings(elements[APP_SLOT_BINDINGS_KEY], { layoutIds });
	const interception = parseInterceptionMetadata(elements[APP_INTERCEPTION_KEY]);
	const artifactCompatibility = readArtifactCompatibilityMetadata(elements[APP_ARTIFACT_COMPATIBILITY_KEY]);
	const cacheEntryReuseProof = parseCacheEntryReuseProofMetadata(elements[APP_CACHE_ENTRY_REUSE_PROOF_KEY]);
	return {
		artifactCompatibility,
		...cacheEntryReuseProof ? { cacheEntryReuseProof } : {},
		interception,
		interceptionContext: interceptionContext ?? null,
		layoutIds,
		layoutFlags,
		routeId,
		rootLayoutTreePath,
		slotBindings
	};
}
var AppElementsWire = {
	keys: {
		artifactCompatibility: APP_ARTIFACT_COMPATIBILITY_KEY,
		cacheEntryReuseProof: APP_CACHE_ENTRY_REUSE_PROOF_KEY,
		interception: APP_INTERCEPTION_KEY,
		interceptionContext: APP_INTERCEPTION_CONTEXT_KEY,
		layoutIds: APP_LAYOUT_IDS_KEY,
		layoutFlags: APP_LAYOUT_FLAGS_KEY,
		renderObservation: APP_RENDER_OBSERVATION_KEY,
		rootLayout: APP_ROOT_LAYOUT_KEY,
		route: APP_ROUTE_KEY,
		slotBindings: APP_SLOT_BINDINGS_KEY
	},
	unmatchedSlotValue: APP_UNMATCHED_SLOT_WIRE_VALUE,
	createMetadataEntries: createAppElementsWireMetadataEntries,
	decode: normalizeAppElements,
	encodeCacheKey: createAppPayloadCacheKey,
	encodeLayoutId: createAppPayloadLayoutId,
	encodeOutgoingPayload: buildOutgoingAppPayload,
	encodePageId: createAppPayloadPageId,
	encodeRouteId: createAppPayloadRouteId,
	encodeSlotId: createAppPayloadSlotId,
	encodeTemplateId: createAppPayloadTemplateId,
	isSlotId: isAppElementsWireSlotId,
	parseElementKey: parseAppElementsWireElementKey,
	readMetadata: readAppElementsMetadata,
	withLayoutFlags
};
//#endregion
//#region node_modules/vinext/dist/server/app-mounted-slots-header.js
/**
* Normalize the `x-vinext-mounted-slots` header for request handling and cache keying.
*
* The browser sends mounted slot ids as a space-separated list in the order slots were
* rendered, which changes across navigations. This normalizes to a canonical form
* (sorted, deduplicated) so equivalent slot sets map to the same RSC cache entry.
*
* Consumed by:
*   - app-rsc-request-normalization (request lifecycle, reads incoming header)
*   - app-elements (outgoing x-vinext-mounted-slots construction)
*   - isr-cache (RSC cache key generation)
*/
function normalizeMountedSlotsHeader(raw) {
	if (!raw) return null;
	return Array.from(new Set(raw.split(/\s+/).filter(Boolean))).sort().join(" ") || null;
}
//#endregion
//#region node_modules/vinext/dist/server/app-elements.js
var APP_PREFETCH_LOADING_SHELL_MARKER_KEY = "__prefetchLoadingShell";
//#endregion
//#region node_modules/vinext/dist/routing/utils.js
var PATH_DELIMITER_REGEX = /([/#?\\]|%(2f|23|3f|5c))/gi;
function encodePathDelimiters(segment) {
	return segment.replace(PATH_DELIMITER_REGEX, (char) => encodeURIComponent(char));
}
/**
* Decode a filesystem or URL path segment while preserving encoded path delimiters.
* Mirrors Next.js segment-wise decoding so "%5F" becomes "_" but "%2F" stays "%2F".
*/
function decodeRouteSegment(segment) {
	try {
		return encodePathDelimiters(decodeURIComponent(segment));
	} catch {
		return segment;
	}
}
/**
* Strict variant for request pipelines that should reject malformed percent-encoding.
*/
function decodeRouteSegmentStrict(segment) {
	return encodePathDelimiters(decodeURIComponent(segment));
}
/**
* Normalize a pathname for route matching by decoding each segment independently.
* This prevents encoded slashes from turning into real path separators.
*/
function normalizePathnameForRouteMatch(pathname) {
	return pathname.split("/").map((segment) => decodeRouteSegment(segment)).join("/");
}
function splitPathnameForRouteMatch(pathname) {
	return normalizePathnameForRouteMatch(pathname).split("/").filter(Boolean);
}
/**
* Strict pathname normalization for live request handling.
* Throws on malformed percent-encoding so callers can return 400.
*/
function normalizePathnameForRouteMatchStrict(pathname) {
	return pathname.split("/").map((segment) => decodeRouteSegmentStrict(segment)).join("/");
}
function decodeMatchedParam(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}
/**
* Decode captured route params with `decodeURIComponent`, mirroring Next.js
* route-matcher.ts:25-27. Mutates the params object in place. Catch-all
* arrays are decoded element-wise. Malformed escapes are preserved (the
* strict normalization layer rejects them at the request boundary).
*/
function decodeMatchedParams(params) {
	for (const key of Object.keys(params)) {
		const value = params[key];
		if (Array.isArray(value)) params[key] = value.map(decodeMatchedParam);
		else params[key] = decodeMatchedParam(value);
	}
}
//#endregion
//#region node_modules/vinext/dist/routing/route-pattern.js
function routePatternPart(segment) {
	if (segment.startsWith("[[...") && segment.endsWith("]]")) return `:${segment.slice(5, -2)}*`;
	if (segment.startsWith("[...") && segment.endsWith("]")) return `:${segment.slice(4, -1)}+`;
	if (segment.startsWith("[") && segment.endsWith("]")) return `:${segment.slice(1, -1)}`;
	return segment;
}
function routePatternParts(pathname) {
	return pathname.split("/").filter(Boolean).map(routePatternPart);
}
function routePattern(pathname) {
	const parts = routePatternParts(pathname);
	return parts.length > 0 ? `/${parts.join("/")}` : "";
}
function appendParamValue(target, value) {
	if (Array.isArray(value)) {
		for (const entry of value) target.push(entry);
		return;
	}
	target.push(value);
}
function fillRoutePatternSegments(pathname, params) {
	const segments = pathname.split("/").filter(Boolean);
	const resolvedSegments = [];
	for (const segment of segments) {
		if (segment.startsWith("[[...") && segment.endsWith("]]")) {
			const value = params[segment.slice(5, -2)];
			if (value !== void 0 && value !== "") {
				if (Array.isArray(value) && value.length === 0) continue;
				appendParamValue(resolvedSegments, value);
			}
			continue;
		}
		if (segment.startsWith("[...") && segment.endsWith("]")) {
			const value = params[segment.slice(4, -1)];
			if (value === void 0 || (Array.isArray(value) ? value.length === 0 : value === "")) return null;
			appendParamValue(resolvedSegments, value);
			continue;
		}
		if (segment.startsWith("[") && segment.endsWith("]")) {
			const value = params[segment.slice(1, -1)];
			if (typeof value === "string") {
				resolvedSegments.push(value);
				continue;
			}
			if (Array.isArray(value) && value.length > 0) {
				if (value.length > 1) return null;
				resolvedSegments.push(value[0]);
				continue;
			}
			return null;
		}
		resolvedSegments.push(segment);
	}
	return resolvedSegments.length > 0 ? `/${resolvedSegments.join("/")}` : "/";
}
function matchRoutePattern(urlParts, patternParts) {
	const params = Object.create(null);
	function matchFrom(urlIndex, patternIndex) {
		if (patternIndex === patternParts.length) return urlIndex === urlParts.length;
		const patternPart = patternParts[patternIndex];
		if (patternPart.startsWith(":") && (patternPart.endsWith("+") || patternPart.endsWith("*"))) {
			const paramName = patternPart.slice(1, -1);
			const minLength = patternPart.endsWith("+") ? 1 : 0;
			for (let endIndex = urlIndex + minLength; endIndex <= urlParts.length; endIndex++) {
				const value = urlParts.slice(urlIndex, endIndex);
				if (value.length > 0) params[paramName] = value;
				else delete params[paramName];
				if (matchFrom(endIndex, patternIndex + 1)) return true;
			}
			delete params[paramName];
			return false;
		}
		if (patternPart.startsWith(":")) {
			if (urlIndex >= urlParts.length) return false;
			const paramName = patternPart.slice(1);
			params[paramName] = urlParts[urlIndex];
			if (matchFrom(urlIndex + 1, patternIndex + 1)) return true;
			delete params[paramName];
			return false;
		}
		if (urlIndex >= urlParts.length || urlParts[urlIndex] !== patternPart) return false;
		return matchFrom(urlIndex + 1, patternIndex + 1);
	}
	if (!matchFrom(0, 0)) return null;
	decodeMatchedParams(params);
	return params;
}
function matchRoutePatternPrefix(pathParts, patternParts) {
	let pathIndex = 0;
	for (let patternIndex = 0; patternIndex < patternParts.length; patternIndex++) {
		const patternPart = patternParts[patternIndex];
		const isTerminal = patternIndex === patternParts.length - 1;
		if (patternPart.startsWith(":") && patternPart.endsWith("+")) return isTerminal && pathParts.length - pathIndex >= 1;
		if (patternPart.startsWith(":") && patternPart.endsWith("*")) return isTerminal;
		if (pathIndex >= pathParts.length) return false;
		if (patternPart.startsWith(":")) {
			pathIndex++;
			continue;
		}
		if (pathParts[pathIndex] !== patternPart) return false;
		pathIndex++;
	}
	return true;
}
//#endregion
//#region node_modules/vinext/dist/server/app-history-state.js
var VINEXT_PREVIOUS_NEXT_URL_HISTORY_STATE_KEY = "__vinext_previousNextUrl";
var VINEXT_HISTORY_INDEX_HISTORY_STATE_KEY = "__vinext_historyIndex";
function cloneHistoryState(state) {
	if (!state || typeof state !== "object") return {};
	const nextState = {};
	for (const [key, value] of Object.entries(state)) nextState[key] = value;
	return nextState;
}
function createHistoryStateWithPreviousNextUrl(state, previousNextUrl) {
	return createHistoryStateWithNavigationMetadata(state, { previousNextUrl });
}
function createHistoryStateWithNavigationMetadata(state, metadata) {
	const nextState = cloneHistoryState(state);
	if (metadata.previousNextUrl === null) delete nextState[VINEXT_PREVIOUS_NEXT_URL_HISTORY_STATE_KEY];
	else nextState[VINEXT_PREVIOUS_NEXT_URL_HISTORY_STATE_KEY] = metadata.previousNextUrl;
	if (metadata.traversalIndex !== void 0) if (isValidHistoryTraversalIndex(metadata.traversalIndex)) nextState[VINEXT_HISTORY_INDEX_HISTORY_STATE_KEY] = metadata.traversalIndex;
	else delete nextState[VINEXT_HISTORY_INDEX_HISTORY_STATE_KEY];
	return Object.keys(nextState).length > 0 ? nextState : null;
}
function createExternalHistoryStatePreservingMetadata(callerState, currentHistoryState) {
	const previousNextUrl = readHistoryStatePreviousNextUrl(currentHistoryState);
	if (previousNextUrl === null) return callerState;
	return createHistoryStateWithPreviousNextUrl(callerState, previousNextUrl);
}
function readHistoryStatePreviousNextUrl(state) {
	const value = cloneHistoryState(state)[VINEXT_PREVIOUS_NEXT_URL_HISTORY_STATE_KEY];
	return typeof value === "string" ? value : null;
}
function isValidHistoryTraversalIndex(value) {
	return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}
//#endregion
//#region node_modules/vinext/dist/server/app-rsc-render-mode.js
var APP_RSC_RENDER_MODE_NAVIGATION = "navigation";
var APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL = "prefetch-loading-shell";
var APP_RSC_RENDER_MODE_REFRESH_PRESERVE_UI = "refresh-preserve-ui";
var APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI = "action-rerender-preserve-ui";
function shouldSuppressLoadingBoundaries(mode) {
	return mode === "refresh-preserve-ui" || mode === "action-rerender-preserve-ui";
}
function shouldUsePreserveUiCacheVariant(mode) {
	return shouldSuppressLoadingBoundaries(mode);
}
function getRscRenderModeCacheVariant(mode) {
	if (mode === "prefetch-loading-shell") return "prefetch-loading-shell";
	return shouldUsePreserveUiCacheVariant(mode) ? "preserve-ui" : null;
}
function parseAppRscRenderMode(value) {
	switch (value) {
		case APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL: return APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL;
		case APP_RSC_RENDER_MODE_REFRESH_PRESERVE_UI: return APP_RSC_RENDER_MODE_REFRESH_PRESERVE_UI;
		case APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI: return APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI;
		default: return APP_RSC_RENDER_MODE_NAVIGATION;
	}
}
//#endregion
//#region node_modules/vinext/dist/server/app-rsc-cache-busting.js
/**
* RSC cache-busting hashes cover the headers that make a `.rsc` payload vary.
* Client-side variant headers must survive transit through CDNs and reverse
* proxies; stripping them changes the server hash and turns stale URLs into
* repeated canonicalization redirects.
*/
var VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM = "_rsc";
var VINEXT_RSC_COMPATIBILITY_ID_HEADER = "X-Vinext-RSC-Compatibility-Id";
var VINEXT_RSC_CONTENT_TYPE = "text/x-component";
var VINEXT_RSC_VARY_HEADER = [
	"RSC",
	"Accept",
	NEXT_ROUTER_STATE_TREE_HEADER,
	NEXT_ROUTER_PREFETCH_HEADER,
	NEXT_ROUTER_SEGMENT_PREFETCH_HEADER,
	NEXT_URL_HEADER,
	VINEXT_INTERCEPTION_CONTEXT_HEADER,
	VINEXT_MOUNTED_SLOTS_HEADER,
	VINEXT_RSC_RENDER_MODE_HEADER
].join(", ");
var CACHE_BUSTING_DIGEST_BYTES = 12;
var textEncoder$1 = new TextEncoder();
function encodeBase64Url(bytes) {
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
function normalizeHeaderValue(value) {
	return value ?? "0";
}
function normalizeCompatibilityId(value) {
	return value && value.length > 0 ? value : null;
}
function getVinextRscCompatibilityId() {
	return normalizeCompatibilityId("2e278443-c091-4eb2-8c0d-56d473c4b779");
}
function applyRscCompatibilityIdHeader(headers, compatibilityId = getVinextRscCompatibilityId()) {
	const normalized = normalizeCompatibilityId(compatibilityId);
	if (normalized) headers.set(VINEXT_RSC_COMPATIBILITY_ID_HEADER, normalized);
	else headers.delete(VINEXT_RSC_COMPATIBILITY_ID_HEADER);
}
function normalizeRenderModeHeaderValue(value) {
	const renderMode = parseAppRscRenderMode(value);
	return renderMode === "navigation" ? null : renderMode;
}
function createCacheBustingInput(headers, options = {}) {
	const values = [
		headers.get(NEXT_ROUTER_PREFETCH_HEADER),
		headers.get(NEXT_ROUTER_SEGMENT_PREFETCH_HEADER),
		headers.get(NEXT_ROUTER_STATE_TREE_HEADER),
		headers.get(NEXT_URL_HEADER),
		headers.get(VINEXT_INTERCEPTION_CONTEXT_HEADER),
		headers.get(VINEXT_MOUNTED_SLOTS_HEADER),
		...options.includeRenderModeHeader === false ? [] : [normalizeRenderModeHeaderValue(headers.get(VINEXT_RSC_RENDER_MODE_HEADER))]
	];
	if (values.every((value) => value === null)) return null;
	return values.map(normalizeHeaderValue).join(",");
}
async function sha256CacheBustingHash(input) {
	const digest = await globalThis.crypto.subtle.digest("SHA-256", textEncoder$1.encode(input));
	return encodeBase64Url(new Uint8Array(digest).subarray(0, CACHE_BUSTING_DIGEST_BYTES));
}
function computeLegacyRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers);
	return input === null ? "" : fnv1a64(input);
}
async function computePreviousRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers, { includeRenderModeHeader: false });
	if (input === null) return null;
	return sha256CacheBustingHash(input);
}
function computePreviousLegacyRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers, { includeRenderModeHeader: false });
	return input === null ? null : fnv1a64(input);
}
function getSearchPairsWithoutRscCacheBusting(url) {
	return (url.search.startsWith("?") ? url.search.slice(1) : url.search).split("&").filter((pair) => pair.length > 0 && !isRscCacheBustingSearchPair(pair));
}
function isRscCacheBustingSearchPair(pair) {
	const separatorIndex = pair.indexOf("=");
	const rawKey = separatorIndex === -1 ? pair : pair.slice(0, separatorIndex);
	try {
		return decodeURIComponent(rawKey.replaceAll("+", " ")) === VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM;
	} catch {
		return rawKey === VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM;
	}
}
async function computeRscCacheBustingSearchParam(headers) {
	const input = createCacheBustingInput(headers);
	if (input === null) return "";
	return sha256CacheBustingHash(input);
}
function setRscCacheBustingSearchParam(url, hash) {
	const pairs = getSearchPairsWithoutRscCacheBusting(url);
	pairs.push(hash.length > 0 ? `${VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM}=${hash}` : VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM);
	url.search = `?${pairs.join("&")}`;
}
function stripRscCacheBustingSearchParam(url) {
	const pairs = getSearchPairsWithoutRscCacheBusting(url);
	url.search = pairs.length > 0 ? `?${pairs.join("&")}` : "";
}
/**
* Remove a trailing `.rsc` suffix from a pathname. Returns the pathname
* unchanged when the suffix is absent.
*/
function stripRscSuffix(pathname) {
	return pathname.endsWith(".rsc") ? pathname.slice(0, -4) : pathname;
}
function toRscRequestPath(href) {
	const hashIndex = href.indexOf("#");
	const beforeHash = hashIndex === -1 ? href : href.slice(0, hashIndex);
	const queryIndex = beforeHash.indexOf("?");
	const pathname = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex);
	const query = queryIndex === -1 ? "" : beforeHash.slice(queryIndex);
	return `${pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname}.rsc${query}`;
}
async function createRscRequestUrl(href, headers) {
	const url = new URL(toRscRequestPath(href), "http://vinext.local");
	setRscCacheBustingSearchParam(url, await computeRscCacheBustingSearchParam(headers));
	return `${url.pathname}${url.search}`;
}
async function createRscRedirectLocation(location, request) {
	const requestUrl = new URL(request.url);
	const destinationUrl = new URL(location, requestUrl);
	if (destinationUrl.origin !== requestUrl.origin) return destinationUrl.toString();
	const rscPath = await createRscRequestUrl(`${destinationUrl.pathname}${destinationUrl.search}`, request.headers);
	return `${destinationUrl.origin}${rscPath}`;
}
async function resolveInvalidRscCacheBustingRequest(options) {
	if (!options.isRscRequest || options.request.method !== "GET" && options.request.method !== "HEAD") return null;
	const url = new URL(options.request.url);
	const actualHash = url.searchParams.get(VINEXT_RSC_CACHE_BUSTING_SEARCH_PARAM);
	const expectedHash = await computeRscCacheBustingSearchParam(options.request.headers);
	if (actualHash === null && expectedHash === "") return null;
	const acceptedHashes = /* @__PURE__ */ new Set([expectedHash]);
	if (actualHash !== null && actualHash !== expectedHash) {
		acceptedHashes.add(computeLegacyRscCacheBustingSearchParam(options.request.headers));
		if (normalizeRenderModeHeaderValue(options.request.headers.get("X-Vinext-Rsc-Render-Mode")) === null) {
			const previousHash = await computePreviousRscCacheBustingSearchParam(options.request.headers);
			const previousLegacyHash = computePreviousLegacyRscCacheBustingSearchParam(options.request.headers);
			if (previousHash !== null) acceptedHashes.add(previousHash);
			if (previousLegacyHash !== null) acceptedHashes.add(previousLegacyHash);
		}
	}
	if (actualHash !== null && acceptedHashes.has(actualHash)) return null;
	setRscCacheBustingSearchParam(url, expectedHash);
	return new Response(null, {
		status: 307,
		headers: { Location: `${url.pathname}${url.search}` }
	});
}
//#endregion
//#region node_modules/vinext/dist/shims/internal/app-router-context.js
/**
* Shim for next/dist/shared/lib/app-router-context.shared-runtime
*
* Used by: @clerk/nextjs, next-intl, next-nprogress-bar, nextjs-toploader,
* next-view-transitions. Mostly type-only imports in published .d.ts files.
*
* We export the types and minimal context objects so these libraries resolve.
*/
var APP_ROUTER_CONTEXT_KEY = Symbol.for("vinext.appRouterContext");
var GLOBAL_LAYOUT_ROUTER_CONTEXT_KEY = Symbol.for("vinext.globalLayoutRouterContext");
var LAYOUT_ROUTER_CONTEXT_KEY = Symbol.for("vinext.layoutRouterContext");
var MISSING_SLOT_CONTEXT_KEY = Symbol.for("vinext.missingSlotContext");
var TEMPLATE_CONTEXT_KEY = Symbol.for("vinext.templateContext");
function getOrCreateContext(key, defaultValue) {
	if (typeof import_react_react_server.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[key]) globalState[key] = import_react_react_server.createContext(defaultValue);
	return globalState[key] ?? null;
}
getOrCreateContext(APP_ROUTER_CONTEXT_KEY, null);
getOrCreateContext(GLOBAL_LAYOUT_ROUTER_CONTEXT_KEY, null);
getOrCreateContext(LAYOUT_ROUTER_CONTEXT_KEY, null);
getOrCreateContext(MISSING_SLOT_CONTEXT_KEY, /* @__PURE__ */ new Set());
getOrCreateContext(TEMPLATE_CONTEXT_KEY, null);
//#endregion
//#region node_modules/vinext/dist/shims/navigation.js
var _SERVER_INSERTED_HTML_CTX_KEY = Symbol.for("vinext.serverInsertedHTMLContext");
function getServerInsertedHTMLContext() {
	if (typeof import_react_react_server.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_SERVER_INSERTED_HTML_CTX_KEY]) globalState[_SERVER_INSERTED_HTML_CTX_KEY] = import_react_react_server.createContext(null);
	return globalState[_SERVER_INSERTED_HTML_CTX_KEY] ?? null;
}
getServerInsertedHTMLContext();
var GLOBAL_ACCESSORS_KEY = Symbol.for("vinext.navigation.globalAccessors");
var _GLOBAL_ACCESSORS_KEY = GLOBAL_ACCESSORS_KEY;
var _GLOBAL_HYDRATION_CONTEXT_KEY = Symbol.for("vinext.navigation.clientHydrationContext");
function _getGlobalAccessors() {
	return globalThis[_GLOBAL_ACCESSORS_KEY];
}
function _getClientHydrationContext() {
	const globalState = globalThis;
	if (Object.prototype.hasOwnProperty.call(globalState, _GLOBAL_HYDRATION_CONTEXT_KEY)) return globalState[_GLOBAL_HYDRATION_CONTEXT_KEY] ?? null;
}
function _setClientHydrationContext(ctx) {
	globalThis[_GLOBAL_HYDRATION_CONTEXT_KEY] = ctx;
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
var _setServerContext = (ctx) => {
	if (typeof window !== "undefined") {
		_serverContext = ctx;
		_setClientHydrationContext(ctx);
		return;
	}
	const g = _getGlobalAccessors();
	if (g) g.setServerContext(ctx);
	else _serverContext = ctx;
};
/**
* Register ALS-backed state accessors. Called by navigation-state.ts on import.
* @internal
*/
function _registerStateAccessors(accessors) {
	_getServerContext = accessors.getServerContext;
	_setServerContext = accessors.setServerContext;
	accessors.getInsertedHTMLCallbacks;
	accessors.clearInsertedHTMLCallbacks;
}
/**
* Get the navigation context for the current SSR/RSC render.
* Reads from AsyncLocalStorage when available (concurrent-safe),
* otherwise falls back to module-level state.
*/
function getNavigationContext() {
	return _getServerContext();
}
/**
* Set the navigation context for the current SSR/RSC render.
* Called by the framework entry before rendering each request.
*/
function setNavigationContext(ctx) {
	_setServerContext(ctx);
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
//#region node_modules/vinext/dist/shims/client-hook-error.js
/**
* Shared error helper for client-only hooks called in Server Components.
*
* Used by `.react-server.ts` shim variants to provide a clear, actionable
* error message when a developer forgets the "use client" directive.
*
* @see https://github.com/cloudflare/vinext/issues/834
*/
function buildClientHookErrorMessage(hookName) {
	return `${hookName} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`;
}
//#endregion
//#region node_modules/vinext/dist/shims/internal/als-registry.js
/**
* Shared helper for registering AsyncLocalStorage instances on `globalThis`
* via `Symbol.for(...)` so that they survive multiple module instances.
*
* Why this helper exists
* ----------------------
* Vite's multi-environment setup (RSC / SSR / client) and HMR can load a
* single source module under several different specifiers, producing more
* than one module instance at runtime. If each instance kept its own
* module-local `new AsyncLocalStorage()`, request-scoped state would silently
* fork across instances — `headers()` in one environment wouldn't see what
* `connection()` registered in another, concurrent requests would stomp each
* other, etc.
*
* The fix every shim was applying inline:
*
*   const _ALS_KEY = Symbol.for("vinext.foo.als");
*   const _g = globalThis as unknown as Record<PropertyKey, unknown>;
*   const _als = (_g[_ALS_KEY] ??=
*     new AsyncLocalStorage<T>()) as AsyncLocalStorage<T>;
*
* This helper packages that pattern.
*
* Cross-bundle singleton property — preserved
* -------------------------------------------
* - `Symbol.for(key)` consults the global symbol registry and returns the
*   same symbol regardless of which module instance calls it.
* - `globalThis[sym]` is a single slot shared by every module instance.
* - `??=` only assigns when the slot is empty, so the first caller wins and
*   every subsequent caller (in any module instance) reads the same ALS.
*
* The helper module itself never holds the ALS by reference — it always
* round-trips through `globalThis`. So even if this helper file is itself
* loaded under multiple module instances, every copy still hands back the
* one true ALS for a given key.
*/
var _g$8 = globalThis;
/**
* Get (or lazily create) the AsyncLocalStorage registered on `globalThis`
* under `Symbol.for(key)`. Multiple callers — including callers in different
* module instances — that pass the same `key` receive the same ALS instance.
*
* @param key - String key fed to `Symbol.for(...)`. By convention vinext
*   shims use a dotted namespace such as `"vinext.cache.als"`.
*/
function getOrCreateAls(key) {
	const sym = Symbol.for(key);
	return _g$8[sym] ??= new AsyncLocalStorage$1();
}
//#endregion
//#region node_modules/vinext/dist/shims/unified-request-context.js
var _REQUEST_CONTEXT_ALS_KEY = Symbol.for("vinext.requestContext.als");
var _g$7 = globalThis;
var _als$5 = getOrCreateAls("vinext.unifiedRequestContext.als");
function _getInheritedExecutionContext() {
	const unifiedStore = _als$5.getStore();
	if (unifiedStore) return unifiedStore.executionContext;
	return _g$7[_REQUEST_CONTEXT_ALS_KEY]?.getStore() ?? null;
}
/**
* Create a fresh `UnifiedRequestContext` with defaults for all fields.
* Pass partial overrides for the fields you need to pre-populate.
*/
function createRequestContext(opts) {
	return {
		headersContext: null,
		actionRevalidationKind: 0,
		dynamicUsageDetected: false,
		renderRequestApiUsage: /* @__PURE__ */ new Set(),
		invalidDynamicUsageError: null,
		pendingSetCookies: [],
		draftModeCookieHeader: null,
		phase: "render",
		i18nContext: null,
		serverContext: null,
		serverInsertedHTMLCallbacks: [],
		requestScopedCacheLife: null,
		unstableCacheRevalidation: "foreground",
		_privateCache: null,
		currentRequestTags: [],
		currentFetchSoftTags: [],
		currentFetchCacheMode: null,
		dynamicFetchUrls: /* @__PURE__ */ new Set(),
		isFetchDedupeActive: false,
		currentFetchDedupeEntries: /* @__PURE__ */ new Map(),
		executionContext: _getInheritedExecutionContext(),
		requestCache: /* @__PURE__ */ new WeakMap(),
		ssrContext: null,
		ssrHeadChildren: [],
		rootParams: null,
		...opts
	};
}
function runWithRequestContext(ctx, fn) {
	return _als$5.run(ctx, fn);
}
function runWithUnifiedStateMutation(mutate, fn) {
	const parentCtx = _als$5.getStore();
	if (!parentCtx) return fn();
	const childCtx = { ...parentCtx };
	mutate(childCtx);
	return _als$5.run(childCtx, fn);
}
/**
* Get the current unified request context.
* Returns the ALS store when inside a `runWithRequestContext()` scope,
* or a fresh detached context otherwise. Unlike the legacy per-shim fallback
* singletons, this detached value is ephemeral — mutations do not persist
* across calls. This is intentional to prevent state leakage outside request
* scopes.
*
* Only direct callers observe this detached fallback. Shim `_getState()`
* helpers should continue to gate on `isInsideUnifiedScope()` and fall back
* to their standalone ALS/fallback singletons outside the unified scope.
* If called inside a standalone `runWithExecutionContext()` scope, the
* detached context still reflects that inherited `executionContext`.
*/
function getRequestContext() {
	return _als$5.getStore() ?? createRequestContext();
}
/**
* Check whether the current execution is inside a `runWithRequestContext()` scope.
* Shim modules use this to decide whether to read from the unified store
* or fall back to their own standalone ALS.
*/
function isInsideUnifiedScope() {
	return _als$5.getStore() != null;
}
//#endregion
//#region node_modules/vinext/dist/server/middleware-request-headers.js
var CREDENTIAL_REQUEST_HEADERS = ["authorization", "cookie"];
function getMiddlewareHeaderValue(source, key) {
	if (source instanceof Headers) return source.get(key);
	const value = source[key];
	if (value === void 0) return null;
	return Array.isArray(value) ? value[0] ?? null : value;
}
function getOverrideHeaderNames(source) {
	const rawValue = getMiddlewareHeaderValue(source, MIDDLEWARE_OVERRIDE_HEADERS);
	if (rawValue === null) return null;
	return rawValue.split(",").map((key) => key.trim()).filter(Boolean);
}
function getForwardedRequestHeaders(source) {
	const forwardedHeaders = /* @__PURE__ */ new Map();
	if (source instanceof Headers) {
		for (const [key, value] of source.entries()) if (key.startsWith("x-middleware-request-")) forwardedHeaders.set(key.slice(MIDDLEWARE_REQUEST_HEADER_PREFIX.length), value);
		return forwardedHeaders;
	}
	for (const [key, value] of Object.entries(source)) {
		if (!key.startsWith("x-middleware-request-")) continue;
		const normalizedValue = Array.isArray(value) ? value[0] ?? "" : value;
		forwardedHeaders.set(key.slice(MIDDLEWARE_REQUEST_HEADER_PREFIX.length), normalizedValue);
	}
	return forwardedHeaders;
}
function cloneHeaders(source) {
	const cloned = new Headers();
	for (const [key, value] of source.entries()) cloned.append(key, value);
	return cloned;
}
function buildRequestHeadersFromMiddlewareResponse(baseHeaders, middlewareHeaders, options = {}) {
	const overrideHeaderNames = getOverrideHeaderNames(middlewareHeaders);
	const forwardedHeaders = getForwardedRequestHeaders(middlewareHeaders);
	if (overrideHeaderNames === null && forwardedHeaders.size === 0) return null;
	const nextHeaders = overrideHeaderNames === null ? cloneHeaders(baseHeaders) : new Headers();
	if (overrideHeaderNames === null) {
		for (const [key, value] of forwardedHeaders) nextHeaders.set(key, value);
		return nextHeaders;
	}
	if (options.preserveCredentialHeaders) {
		const overrideHeaderNameSet = new Set(overrideHeaderNames);
		for (const key of CREDENTIAL_REQUEST_HEADERS) {
			if (overrideHeaderNameSet.has(key)) continue;
			const value = baseHeaders.get(key);
			if (value !== null) nextHeaders.set(key, value);
		}
	}
	for (const key of overrideHeaderNames) {
		const value = forwardedHeaders.get(key);
		if (value !== void 0) nextHeaders.set(key, value);
	}
	return nextHeaders;
}
function shouldKeepMiddlewareHeader(key) {
	return key === "x-middleware-override-headers" || key === "x-middleware-set-cookie" || key.startsWith("x-middleware-request-");
}
//#endregion
//#region node_modules/vinext/dist/shims/internal/cookie-serialize.js
/**
* RFC 6265 §4.1.1: cookie-name is a token (RFC 2616 §2.2).
* Allowed: any visible ASCII (0x21-0x7E) except separators: ()<>@,;:\"/[]?={}
*/
var VALID_COOKIE_NAME_RE = /^[\x21\x23-\x27\x2A\x2B\x2D\x2E\x30-\x39\x41-\x5A\x5E-\x7A\x7C\x7E]+$/;
function validateCookieName(name) {
	if (!name || !VALID_COOKIE_NAME_RE.test(name)) throw new Error(`Invalid cookie name: ${JSON.stringify(name)}`);
}
//#endregion
//#region node_modules/vinext/dist/shims/internal/parse-cookie-header.js
/**
* Port of the current Next.js/@edge-runtime request cookie parser semantics.
*
* Important details:
* - split on a semicolon-plus-optional-spaces pattern
* - preserve whitespace around names/values otherwise
* - bare tokens become "true"
* - malformed percent-encoded values are skipped
* - duplicate names collapse to the last value via Map.set()
*/
function parseCookieHeader(cookieHeader) {
	const cookies = /* @__PURE__ */ new Map();
	for (const pair of cookieHeader.split(/; */)) {
		if (!pair) continue;
		const splitAt = pair.indexOf("=");
		if (splitAt === -1) {
			cookies.set(pair, "true");
			continue;
		}
		const key = pair.slice(0, splitAt);
		const value = pair.slice(splitAt + 1);
		try {
			cookies.set(key, decodeURIComponent(value));
		} catch {}
	}
	return cookies;
}
//#endregion
//#region node_modules/vinext/dist/shims/headers.js
var _FALLBACK_KEY$4 = Symbol.for("vinext.nextHeadersShim.fallback");
var _g$6 = globalThis;
var _als$4 = getOrCreateAls("vinext.nextHeadersShim.als");
var _fallbackState$3 = _g$6[_FALLBACK_KEY$4] ??= {
	headersContext: null,
	dynamicUsageDetected: false,
	renderRequestApiUsage: /* @__PURE__ */ new Set(),
	invalidDynamicUsageError: null,
	pendingSetCookies: [],
	draftModeCookieHeader: null,
	phase: "render"
};
(/* @__PURE__ */ new Date(0)).toUTCString();
function splitMiddlewareSetCookieHeader(value) {
	const cookies = [];
	let start = 0;
	let inExpires = false;
	let expiresCommaSeen = false;
	for (let i = 0; i < value.length; i++) {
		if (value.slice(i, i + 8).toLowerCase() === "expires=") {
			inExpires = true;
			expiresCommaSeen = false;
			i += 7;
			continue;
		}
		const ch = value[i];
		if (inExpires && ch === ";") {
			inExpires = false;
			expiresCommaSeen = false;
			continue;
		}
		if (ch !== ",") continue;
		if (inExpires && !expiresCommaSeen) {
			expiresCommaSeen = true;
			continue;
		}
		const cookie = value.slice(start, i).trim();
		if (cookie) cookies.push(cookie);
		start = i + 1;
		inExpires = false;
		expiresCommaSeen = false;
	}
	const cookie = value.slice(start).trim();
	if (cookie) cookies.push(cookie);
	return cookies;
}
function setCookieNameValue(setCookie) {
	const equalsIndex = setCookie.indexOf("=");
	if (equalsIndex <= 0) return null;
	const name = setCookie.slice(0, equalsIndex).trim();
	const valueEnd = setCookie.indexOf(";", equalsIndex + 1);
	const encodedValue = setCookie.slice(equalsIndex + 1, valueEnd === -1 ? void 0 : valueEnd);
	let value;
	try {
		value = decodeURIComponent(encodedValue);
	} catch {
		value = encodedValue;
	}
	return {
		name,
		value
	};
}
function rebuildCookiesFromHeader(ctx, cookieHeader) {
	ctx.cookies.clear();
	if (cookieHeader === null) return;
	const nextCookies = parseCookieHeader(cookieHeader);
	for (const [name, value] of nextCookies) ctx.cookies.set(name, value);
}
function mergeMiddlewareSetCookies(ctx, rawHeader) {
	if (rawHeader === null) return false;
	let merged = false;
	for (const setCookie of splitMiddlewareSetCookieHeader(rawHeader)) {
		const entry = setCookieNameValue(setCookie);
		if (!entry) continue;
		ctx.cookies.set(entry.name, entry.value);
		merged = true;
	}
	return merged;
}
function _getState$2() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als$4.getStore() ?? _fallbackState$3;
}
/**
* Dynamic usage flag — set when a component calls connection(), cookies(),
* headers(), or noStore() during rendering. When true, ISR caching is
* bypassed and the response gets Cache-Control: no-store.
*/
/**
* Mark the current render as requiring dynamic (uncached) rendering.
* Called by connection(), cookies(), headers(), and noStore().
*/
function markDynamicUsage() {
	const state = _getState$2();
	if (state.headersContext?.forceStatic) return;
	state.dynamicUsageDetected = true;
}
function markRenderRequestApiUsage(kind) {
	_getState$2().renderRequestApiUsage.add(kind);
}
function peekRenderRequestApiUsage() {
	return [..._getState$2().renderRequestApiUsage].sort();
}
function consumeRenderRequestApiUsage() {
	const state = _getState$2();
	const observed = [...state.renderRequestApiUsage].sort();
	state.renderRequestApiUsage = /* @__PURE__ */ new Set();
	return observed;
}
/**
* Check, consume, and return any invalid dynamic usage error recorded during
* the render (e.g. cookies() called inside "use cache"). This error persists
* even if the throw was caught by user-code try/catch, so it can surface on
* client-side navigations where the static shell validation is skipped.
* Ported from Next.js: workStore.invalidDynamicUsageError in
* packages/next/src/server/app-render/app-render.tsx
* https://github.com/vercel/next.js/commit/f5e54c06726b571a042fce67417e40a29f6b8689
*/
function consumeInvalidDynamicUsageError() {
	const state = _getState$2();
	const err = state.invalidDynamicUsageError;
	state.invalidDynamicUsageError = null;
	return err;
}
/**
* Check and reset the dynamic usage flag.
* Called by the server after rendering to decide on caching.
*/
function consumeDynamicUsage() {
	const state = _getState$2();
	const used = state.dynamicUsageDetected;
	state.dynamicUsageDetected = false;
	return used;
}
function _setStatePhase(state, phase) {
	const previous = state.phase;
	state.phase = phase;
	return previous;
}
function setHeadersAccessPhase(phase) {
	return _setStatePhase(_getState$2(), phase);
}
/**
* Set the headers/cookies context for the current RSC render.
* Called by the framework's RSC entry before rendering each request.
*
* @deprecated Prefer runWithHeadersContext() which uses als.run() for
* proper per-request isolation. This function mutates the ALS store
* in-place and is only safe for cleanup (ctx=null) within an existing
* als.run() scope.
*/
/**
* Returns the current live HeadersContext from ALS (or the fallback).
* Used after applyMiddlewareRequestHeaders() to build a post-middleware
* request context for afterFiles/fallback rewrite has/missing evaluation.
*/
function getHeadersContext() {
	return _getState$2().headersContext;
}
function setHeadersContext(ctx) {
	const state = _getState$2();
	if (ctx !== null) {
		state.headersContext = ctx;
		state.dynamicUsageDetected = false;
		state.renderRequestApiUsage = /* @__PURE__ */ new Set();
		state.pendingSetCookies = [];
		state.draftModeCookieHeader = null;
		state.phase = "render";
	} else {
		state.headersContext = null;
		state.phase = "render";
	}
}
/**
* Apply middleware-forwarded request headers to the current headers context.
*
* When Next.js middleware calls `NextResponse.next()` or `NextResponse.rewrite()`
* with `{ request: { headers } }`, the modified headers are encoded on the
* middleware response. This function decodes that protocol and applies the
* resulting request header set to the live `HeadersContext`. When an override
* list is present, omitted headers are deleted as part of the rebuild.
*
* Cached `readonlyHeaders` and `readonlyCookies` snapshots on the
* HeadersContext must be invalidated whenever this function rebuilds the
* underlying `headers`/`cookies`. Otherwise a middleware that reads
* `headers()` (or `cookies()`) before returning a request-header override —
* for example `@clerk/nextjs`, whose `clerkClient()` reads `headers()` via
* `buildRequestLike()` during middleware execution — primes a sealed snapshot
* built from the *pre*-override request, and any subsequent `headers()` call
* from a Server Component would return that stale snapshot instead of the
* middleware-modified view.
*/
function applyMiddlewareRequestHeaders(middlewareResponseHeaders) {
	const state = _getState$2();
	if (!state.headersContext) return;
	const ctx = state.headersContext;
	const previousCookieHeader = ctx.headers.get("cookie");
	const middlewareSetCookieHeader = middlewareResponseHeaders.get(MIDDLEWARE_SET_COOKIE_HEADER);
	const nextHeaders = buildRequestHeadersFromMiddlewareResponse(ctx.headers, middlewareResponseHeaders);
	if (!nextHeaders && middlewareSetCookieHeader === null) return;
	if (nextHeaders) {
		ctx.headers = nextHeaders;
		ctx.readonlyHeaders = void 0;
		const nextCookieHeader = nextHeaders.get("cookie");
		if (previousCookieHeader !== nextCookieHeader) {
			rebuildCookiesFromHeader(ctx, nextCookieHeader);
			ctx.readonlyCookies = void 0;
			ctx.mutableCookies = void 0;
		}
	}
	if (mergeMiddlewareSetCookies(ctx, middlewareSetCookieHeader)) {
		ctx.readonlyCookies = void 0;
		ctx.mutableCookies = void 0;
	}
}
/** Methods on `Headers` that mutate state. Hoisted to module scope — static. */
var _HEADERS_MUTATING_METHODS = /* @__PURE__ */ new Set([
	"set",
	"delete",
	"append"
]);
/**
* Create a HeadersContext from a standard Request object.
*
* Performance note: In Workerd (Cloudflare Workers), `new Headers(request.headers)`
* copies the entire header map across the V8/C++ boundary, which shows up as
* ~815 ms self-time in production profiles when requests carry many headers.
* We defer this copy with a lazy proxy:
*
* - Reads (`get`, `has`, `entries`, …) are forwarded directly to the original
*   immutable `request.headers` — zero copy cost on the hot path.
* - The first mutating call (`set`, `delete`, `append`) materialises
*   `new Headers(request.headers)` once, then applies the mutation to the copy.
*   All subsequent operations go to the copy.
*
* This means the ~815 ms copy only occurs when middleware actually rewrites
* request headers via `NextResponse.next({ request: { headers } })`, which is
* uncommon.  Pure read requests (the vast majority) pay zero copy cost.
*
* Cookie parsing is also deferred: the `cookie` header string is not split
* until the first call to `cookies()` or `draftMode()`.
*/
function headersContextFromRequest(request) {
	let _mutable = null;
	const headersProxy = new Proxy(request.headers, { get(target, prop) {
		const src = _mutable ?? target;
		if (typeof prop === "string" && _HEADERS_MUTATING_METHODS.has(prop)) return (...args) => {
			if (!_mutable) _mutable = new Headers(target);
			return _mutable[prop](...args);
		};
		const value = Reflect.get(src, prop, src);
		return typeof value === "function" ? value.bind(src) : value;
	} });
	let _cookies = null;
	function getCookies() {
		if (_cookies) return _cookies;
		_cookies = parseCookieHeader(headersProxy.get("cookie") || "");
		return _cookies;
	}
	return {
		headers: headersProxy,
		get cookies() {
			return getCookies();
		}
	};
}
/** Accumulated Set-Cookie headers from cookies().set() / .delete() calls */
/**
* Get and clear all pending Set-Cookie headers generated by cookies().set()/delete().
* Called by the framework after rendering to attach headers to the response.
*/
function getAndClearPendingCookies() {
	const state = _getState$2();
	const cookies = state.pendingSetCookies;
	state.pendingSetCookies = [];
	return cookies;
}
var DRAFT_MODE_COOKIE = "__prerender_bypass";
(/* @__PURE__ */ new Date(0)).toUTCString();
function getDraftSecret() {
	return "b984d910-9c95-4623-b074-8d06d136eacb";
}
/**
* Get any Set-Cookie header generated by draftMode().enable()/disable().
* Called by the framework after rendering to attach the header to the response.
*/
function getDraftModeCookieHeader() {
	const state = _getState$2();
	const header = state.draftModeCookieHeader;
	state.draftModeCookieHeader = null;
	return header;
}
function isDraftModeRequest(request) {
	const cookieHeader = request.headers.get("cookie");
	if (!cookieHeader) return false;
	return parseCookieHeader(cookieHeader).get(DRAFT_MODE_COOKIE) === getDraftSecret();
}
//#endregion
//#region node_modules/vinext/dist/shims/thenable-params.js
function hasParamProperty(obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
}
var wellKnownProperties = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toString",
	"valueOf",
	"toLocaleString",
	"then",
	"catch",
	"finally",
	"status",
	"value",
	"error",
	"displayName",
	"_debugInfo",
	"toJSON",
	"$$typeof",
	"__esModule",
	"@@iterator"
]);
function isWellKnownProperty(prop) {
	return wellKnownProperties.has(prop);
}
function makeThenableParams(obj) {
	const plain = { ...obj };
	const promise = Promise.resolve(plain);
	return new Proxy(promise, {
		get(target, prop, receiver) {
			if (!isWellKnownProperty(prop) && hasParamProperty(plain, prop)) return Reflect.get(plain, prop);
			const value = Reflect.get(target, prop, receiver);
			return typeof value === "function" ? value.bind(target) : value;
		},
		getOwnPropertyDescriptor(target, prop) {
			if (!isWellKnownProperty(prop) && hasParamProperty(plain, prop)) return {
				configurable: true,
				enumerable: true,
				value: Reflect.get(plain, prop),
				writable: true
			};
			return Reflect.getOwnPropertyDescriptor(target, prop);
		},
		has(target, prop) {
			return Reflect.has(target, prop) || !isWellKnownProperty(prop) && hasParamProperty(plain, prop);
		},
		ownKeys() {
			return Reflect.ownKeys(plain).filter((prop) => !isWellKnownProperty(prop));
		}
	});
}
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.react-server.production.js
/**
* @license React
* react-jsx-runtime.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react_react_server();
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/vinext/dist/shims/metadata.js
var import_jsx_runtime_react_server = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_react_server_production();
})))();
/**
* Resolve viewport config from a module. Handles both static `viewport` export
* and async `generateViewport()` function.
*/
async function resolveModuleViewport(mod, params) {
	if (typeof mod.generateViewport === "function") {
		const asyncParams = makeThenableParams(params);
		return await mod.generateViewport({ params: asyncParams });
	}
	if (mod.viewport && typeof mod.viewport === "object") return mod.viewport;
	return null;
}
/**
* Merge viewport configs from multiple sources (layouts + page).
* Later entries override earlier ones.
*/
var DEFAULT_VIEWPORT = {
	width: "device-width",
	initialScale: 1
};
function mergeViewport(viewportList) {
	const merged = { ...DEFAULT_VIEWPORT };
	for (const vp of viewportList) Object.assign(merged, vp);
	return merged;
}
/**
* React component that renders viewport meta tags into <head>.
*/
function ViewportHead({ viewport }) {
	const elements = [];
	let key = 0;
	const parts = [];
	if (viewport.width !== void 0) parts.push(`width=${viewport.width}`);
	if (viewport.height !== void 0) parts.push(`height=${viewport.height}`);
	if (viewport.initialScale !== void 0) parts.push(`initial-scale=${viewport.initialScale}`);
	if (viewport.minimumScale !== void 0) parts.push(`minimum-scale=${viewport.minimumScale}`);
	if (viewport.maximumScale !== void 0) parts.push(`maximum-scale=${viewport.maximumScale}`);
	if (viewport.userScalable !== void 0) parts.push(`user-scalable=${viewport.userScalable ? "yes" : "no"}`);
	if (parts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "viewport",
		content: parts.join(", ")
	}, key++));
	if (viewport.themeColor) {
		if (typeof viewport.themeColor === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "theme-color",
			content: viewport.themeColor
		}, key++));
		else if (Array.isArray(viewport.themeColor)) for (const entry of viewport.themeColor) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "theme-color",
			content: entry.color,
			...entry.media ? { media: entry.media } : {}
		}, key++));
	}
	if (viewport.colorScheme) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "color-scheme",
		content: viewport.colorScheme
	}, key++));
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: elements });
}
function isPlainObject$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value) && !(value instanceof URL);
}
function isOtherMetadata(value) {
	if (!isPlainObject$1(value)) return false;
	return Object.values(value).every((item) => {
		if (typeof item === "string") return true;
		return Array.isArray(item) && item.every((nestedItem) => typeof nestedItem === "string");
	});
}
/**
* Extract a plain string title from a metadata title value.
*/
function resolveStringTitle(title) {
	if (typeof title === "string") return title;
	if (title && typeof title === "object") return title.absolute ?? title.default ?? void 0;
}
function applyTitleTemplate(template, title) {
	return template ? template.replace(/%s/g, title) : title;
}
function resolveTitle(title, stashedTemplate) {
	if (typeof title === "string") return applyTitleTemplate(stashedTemplate, title);
	if (title && typeof title === "object") {
		let resolved = title.default === void 0 ? void 0 : applyTitleTemplate(stashedTemplate, title.default);
		if (title.absolute) resolved = title.absolute;
		return resolved;
	}
}
/**
* Post-process merged metadata to cross-fill openGraph and Twitter fields.
*
* Next.js runs this once after all layouts/pages and file-based metadata
* have been resolved. When openGraph exists, it auto-fills missing
* twitter:title/description/images from openGraph (falling back to root
* metadata title/description). Existing openGraph/twitter objects also inherit
* missing title/description from root metadata.
*
* Ported from Next.js:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/lib/metadata/resolve-metadata.ts
*/
function postProcessMetadata(merged) {
	const result = { ...merged };
	const resolvedTitle = resolveStringTitle(result.title);
	if (result.openGraph) {
		const og = { ...result.openGraph };
		if (!og.title && resolvedTitle) og.title = resolvedTitle;
		if (!og.description && result.description) og.description = result.description;
		result.openGraph = og;
	}
	if (result.openGraph) {
		const autoFill = {};
		const existingTwitter = result.twitter;
		const hasTwTitle = existingTwitter ? Boolean(existingTwitter.title) : false;
		const hasTwDescription = existingTwitter ? Boolean(existingTwitter.description) : false;
		const hasTwImages = existingTwitter ? Object.prototype.hasOwnProperty.call(existingTwitter, "images") && Boolean(existingTwitter.images) : false;
		if (!hasTwTitle) {
			if (result.openGraph.title) autoFill.title = result.openGraph.title;
			else if (resolvedTitle) autoFill.title = resolvedTitle;
		}
		if (!hasTwDescription) autoFill.description = result.openGraph.description || result.description || void 0;
		if (!hasTwImages && result.openGraph.images !== void 0) autoFill.images = result.openGraph.images;
		if (Object.keys(autoFill).length > 0) if (existingTwitter) result.twitter = {
			...existingTwitter,
			...autoFill
		};
		else result.twitter = autoFill;
	}
	if (result.twitter) {
		const tw = { ...result.twitter };
		if (!tw.title && resolvedTitle) tw.title = resolvedTitle;
		if (!tw.description && result.description) tw.description = result.description;
		result.twitter = tw;
	}
	if (result.twitter) {
		const tw = { ...result.twitter };
		if (!tw.card) {
			const images = tw.images;
			tw.card = (Array.isArray(images) ? images.length > 0 : Boolean(images)) ? "summary_large_image" : "summary";
		}
		result.twitter = tw;
	}
	return result;
}
/**
* Merge metadata from multiple sources (layouts + page).
*
* The list is ordered [rootLayout, nestedLayout, ..., page].
* Title template from layouts applies to the page title but NOT to
* the segment that defines the template itself. `title.absolute`
* skips all templates. `title.default` is the fallback when no
* child provides a title.
*
* For top-level keys, later entries override earlier ones. `other` custom meta
* tags are the exception: Next.js merges those across segments.
*/
function mergeMetadataEntries(entries) {
	if (entries.length === 0) return {};
	const merged = {};
	let parentTemplate;
	for (const entry of entries) {
		const meta = entry.metadata;
		const isPage = Boolean(entry.isPage);
		const contributesTitle = entry.contributesTitle !== false;
		for (const key of Object.keys(meta)) {
			if (key === "title") continue;
			const incoming = meta[key];
			const existing = merged[key];
			if (key === "other" && isOtherMetadata(existing) && isOtherMetadata(incoming)) merged.other = {
				...existing,
				...incoming
			};
			else merged[key] = incoming;
		}
		if (contributesTitle && meta.title !== void 0) merged.title = resolveTitle(meta.title, parentTemplate);
		if (contributesTitle && !isPage && meta.title && typeof meta.title === "object" && meta.title.template) parentTemplate = meta.title.template;
	}
	return merged;
}
/**
* Resolve metadata from a module. Handles both static `metadata` export
* and async `generateMetadata()` function.
*
* @param parent - A Promise that resolves to the accumulated (merged) metadata
*   from all ancestor segments. Passed as the second argument to
*   `generateMetadata()`, matching Next.js's eager-execution-with-serial-
*   resolution approach. If not provided, defaults to a promise that resolves
*   to an empty object (so `await parent` never throws).
*/
async function resolveModuleMetadata$1(mod, params = {}, searchParams, parent = Promise.resolve({})) {
	if (typeof mod.generateMetadata === "function") {
		const asyncParams = makeThenableParams(params);
		const props = searchParams === void 0 ? { params: asyncParams } : {
			params: asyncParams,
			searchParams: makeThenableParams(searchParams)
		};
		return await mod.generateMetadata(props, parent);
	}
	if (mod.metadata && typeof mod.metadata === "object") return mod.metadata;
	return null;
}
/**
* React component that renders metadata as HTML head elements.
* Used by the RSC entry to inject into the <head>.
*/
function isIconDescriptor(value) {
	if (typeof value !== "object" || value === null || value instanceof URL || Array.isArray(value)) return false;
	const urlValue = Reflect.get(value, "url");
	return typeof urlValue === "string" || urlValue instanceof URL;
}
function isIconsMap(value) {
	return typeof value === "object" && !(value instanceof URL) && !Array.isArray(value) && !isIconDescriptor(value);
}
function normalizeUrlDescriptor(value, createDescriptor) {
	if (typeof value === "string" || value instanceof URL) return createDescriptor(value);
	return value;
}
function normalizeUrlDescriptorEntries(value, createDescriptor) {
	if (!value) return [];
	if (Array.isArray(value)) return value.map((entry) => normalizeUrlDescriptor(entry, createDescriptor));
	return [normalizeUrlDescriptor(value, createDescriptor)];
}
function stringifyUrl(url) {
	return typeof url === "string" ? url : url.toString();
}
function createLocalMetadataBase() {
	const protocol = process.env.__NEXT_EXPERIMENTAL_HTTPS ? "https" : "http";
	return new URL(`${protocol}://localhost:${process.env.PORT || 3e3}`);
}
function getPreviewDeploymentUrl() {
	const origin = process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;
	return origin ? new URL(`https://${origin}`) : null;
}
function getProductionDeploymentUrl() {
	const origin = process.env.VERCEL_PROJECT_PRODUCTION_URL;
	return origin ? new URL(`https://${origin}`) : null;
}
function getSocialImageMetadataBaseFallback(metadataBase) {
	const defaultMetadataBase = createLocalMetadataBase();
	const previewDeploymentUrl = getPreviewDeploymentUrl();
	const productionDeploymentUrl = getProductionDeploymentUrl();
	if (process.env.VERCEL_ENV === "preview" && previewDeploymentUrl) return previewDeploymentUrl;
	return metadataBase || productionDeploymentUrl || defaultMetadataBase;
}
function trimSlashes(value) {
	return value.replace(/^\/+|\/+$/g, "");
}
function joinMetadataPath(basePathname, pathname) {
	if (!basePathname || basePathname === "/") return pathname;
	const base = trimSlashes(basePathname);
	const path = trimSlashes(pathname);
	return path ? `/${base}/${path}` : `/${base}`;
}
function resolveRelativeMetadataUrl(url, pathname) {
	if (url === "." || url === "./") return pathname || "/";
	if (!url.startsWith("./")) return url;
	return `${pathname === "/" ? "" : pathname.replace(/\/+$/g, "")}/${url.slice(2)}`;
}
function formatResolvedMetadataUrl(url) {
	if (url.pathname === "/" && url.search === "" && url.hash === "") return url.origin;
	return url.href;
}
function resolveMetadataUrl(url, metadataBase) {
	const value = stringifyUrl(url);
	if (isAbsoluteOrProtocolRelativeUrl(value) || !metadataBase) return value;
	try {
		return formatResolvedMetadataUrl(new URL(joinMetadataPath(metadataBase.pathname, value), metadataBase));
	} catch {
		return value;
	}
}
function resolveCanonicalUrl(url, metadataBase, pathname) {
	if (url instanceof URL) return resolveMetadataUrl(url, metadataBase);
	return resolveMetadataUrl(resolveRelativeMetadataUrl(url, pathname), metadataBase);
}
function isSocialImageDescriptor(value) {
	return typeof value === "object" && !(value instanceof URL);
}
function isMetadataRouteSocialImage(value) {
	return Reflect.get(value, "metadataRoute") === true;
}
function resolveSocialImageUrl(image, metadataBase) {
	const imageUrl = isSocialImageDescriptor(image) ? image.url : image;
	const metadataRoute = isSocialImageDescriptor(image) && isMetadataRouteSocialImage(image);
	if (typeof imageUrl === "string" && !isAbsoluteOrProtocolRelativeUrl(imageUrl) && (!metadataBase || metadataRoute)) return resolveMetadataUrl(imageUrl, getSocialImageMetadataBaseFallback(metadataBase));
	return resolveMetadataUrl(imageUrl, metadataBase);
}
function MetadataHead({ metadata, pathname = "/" }) {
	const elements = [];
	let key = 0;
	const base = metadata.metadataBase;
	function resolveUrl(url) {
		if (!url) return void 0;
		return resolveMetadataUrl(url, base);
	}
	const title = typeof metadata.title === "string" ? metadata.title : typeof metadata.title === "object" ? metadata.title.absolute || metadata.title.default : void 0;
	if (title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("title", { children: title }, key++));
	if (metadata.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "description",
		content: metadata.description
	}, key++));
	if (metadata.generator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "generator",
		content: metadata.generator
	}, key++));
	if (metadata.applicationName) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "application-name",
		content: metadata.applicationName
	}, key++));
	if (metadata.referrer) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "referrer",
		content: metadata.referrer
	}, key++));
	if (metadata.keywords) {
		const kw = Array.isArray(metadata.keywords) ? metadata.keywords.join(",") : metadata.keywords;
		elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "keywords",
			content: kw
		}, key++));
	}
	if (metadata.authors) {
		const authorList = Array.isArray(metadata.authors) ? metadata.authors : [metadata.authors];
		for (const author of authorList) {
			if (author.name) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name: "author",
				content: author.name
			}, key++));
			if (author.url) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "author",
				href: author.url
			}, key++));
		}
	}
	if (metadata.creator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "creator",
		content: metadata.creator
	}, key++));
	if (metadata.publisher) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "publisher",
		content: metadata.publisher
	}, key++));
	if (metadata.formatDetection) {
		const parts = [];
		if (metadata.formatDetection.telephone === false) parts.push("telephone=no");
		if (metadata.formatDetection.address === false) parts.push("address=no");
		if (metadata.formatDetection.email === false) parts.push("email=no");
		if (parts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "format-detection",
			content: parts.join(", ")
		}, key++));
	}
	if (metadata.category) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "category",
		content: metadata.category
	}, key++));
	if (metadata.robots) if (typeof metadata.robots === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "robots",
		content: metadata.robots
	}, key++));
	else {
		const { googleBot, ...robotsRest } = metadata.robots;
		const robotParts = [];
		for (const [k, v] of Object.entries(robotsRest)) if (v === true) robotParts.push(k);
		else if (v === false) robotParts.push(`no${k}`);
		else if (typeof v === "string" || typeof v === "number") robotParts.push(`${k}:${v}`);
		if (robotParts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "robots",
			content: robotParts.join(", ")
		}, key++));
		if (googleBot) if (typeof googleBot === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "googlebot",
			content: googleBot
		}, key++));
		else {
			const gbParts = [];
			for (const [k, v] of Object.entries(googleBot)) if (v === true) gbParts.push(k);
			else if (v === false) gbParts.push(`no${k}`);
			else if (typeof v === "string" || typeof v === "number") gbParts.push(`${k}:${v}`);
			if (gbParts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name: "googlebot",
				content: gbParts.join(", ")
			}, key++));
		}
	}
	if (metadata.openGraph) {
		const og = metadata.openGraph;
		if (og.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:title",
			content: og.title
		}, key++));
		if (og.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:description",
			content: og.description
		}, key++));
		if (og.url) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:url",
			content: resolveUrl(og.url)
		}, key++));
		if (og.siteName) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:site_name",
			content: og.siteName
		}, key++));
		if (og.type) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:type",
			content: og.type
		}, key++));
		if (og.locale) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:locale",
			content: og.locale
		}, key++));
		if (og.publishedTime) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:published_time",
			content: og.publishedTime
		}, key++));
		if (og.modifiedTime) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:modified_time",
			content: og.modifiedTime
		}, key++));
		if (og.authors) for (const author of og.authors) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:author",
			content: author
		}, key++));
		if (og.images) {
			const imgList = typeof og.images === "string" || og.images instanceof URL ? [{ url: og.images }] : Array.isArray(og.images) ? og.images : [og.images];
			for (const img of imgList) {
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					property: "og:image",
					content: resolveSocialImageUrl(img, base)
				}, key++));
				if (typeof img !== "string" && !(img instanceof URL)) {
					if (img.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:width",
						content: String(img.width)
					}, key++));
					if (img.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:height",
						content: String(img.height)
					}, key++));
					if (img.type) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:type",
						content: img.type
					}, key++));
					if (img.alt) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:alt",
						content: img.alt
					}, key++));
				}
			}
		}
		if (og.videos) for (const video of og.videos) {
			elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video",
				content: resolveUrl(video.url)
			}, key++));
			if (video.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video:width",
				content: String(video.width)
			}, key++));
			if (video.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video:height",
				content: String(video.height)
			}, key++));
		}
		if (og.audio) for (const audio of og.audio) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:audio",
			content: resolveUrl(audio.url)
		}, key++));
	}
	if (metadata.twitter) {
		const tw = metadata.twitter;
		if (tw.card) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:card",
			content: tw.card
		}, key++));
		if (tw.site) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:site",
			content: tw.site
		}, key++));
		if (tw.siteId) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:site:id",
			content: tw.siteId
		}, key++));
		if (tw.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:title",
			content: tw.title
		}, key++));
		if (tw.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:description",
			content: tw.description
		}, key++));
		if (tw.creator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:creator",
			content: tw.creator
		}, key++));
		if (tw.creatorId) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:creator:id",
			content: tw.creatorId
		}, key++));
		if (tw.images) {
			const imgList = typeof tw.images === "string" || tw.images instanceof URL ? [tw.images] : Array.isArray(tw.images) ? tw.images : [tw.images];
			for (const img of imgList) {
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:image",
					content: resolveSocialImageUrl(img, base)
				}, key++));
				if (typeof img !== "string" && !(img instanceof URL)) {
					if (img.type) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:type",
						content: img.type
					}, key++));
					if (img.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:width",
						content: String(img.width)
					}, key++));
					if (img.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:height",
						content: String(img.height)
					}, key++));
					if (img.alt) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: "twitter:image:alt",
						content: img.alt
					}, key++));
				}
			}
		}
		if (tw.players) {
			const players = Array.isArray(tw.players) ? tw.players : [tw.players];
			for (const player of players) {
				const playerUrl = player.playerUrl.toString();
				const streamUrl = player.streamUrl.toString();
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player",
					content: resolveUrl(playerUrl)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:stream",
					content: resolveUrl(streamUrl)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:width",
					content: String(player.width)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:height",
					content: String(player.height)
				}, key++));
			}
		}
		if (tw.app) {
			const { app } = tw;
			for (const platform of [
				"iphone",
				"ipad",
				"googleplay"
			]) {
				if (app.name) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: `twitter:app:name:${platform}`,
					content: app.name
				}, key++));
				if (app.id[platform] !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: `twitter:app:id:${platform}`,
					content: String(app.id[platform])
				}, key++));
				if (app.url?.[platform] !== void 0) {
					const appUrl = app.url[platform].toString();
					elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: `twitter:app:url:${platform}`,
						content: resolveUrl(appUrl)
					}, key++));
				}
			}
		}
	}
	if (metadata.icons) {
		const iconEntries = isIconsMap(metadata.icons) ? normalizeUrlDescriptorEntries(metadata.icons.icon, (url) => ({ url })) : normalizeUrlDescriptorEntries(metadata.icons, (url) => ({ url }));
		if (isIconsMap(metadata.icons) && metadata.icons.shortcut) {
			const shortcuts = Array.isArray(metadata.icons.shortcut) ? metadata.icons.shortcut : [metadata.icons.shortcut];
			for (const s of shortcuts) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "shortcut icon",
				href: stringifyUrl(s)
			}, key++));
		}
		if (iconEntries.length > 0) for (const i of iconEntries) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "icon",
			href: stringifyUrl(i.url),
			...i.sizes ? { sizes: i.sizes } : {},
			...i.type ? { type: i.type } : {},
			...i.media ? { media: i.media } : {}
		}, key++));
		if (isIconsMap(metadata.icons) && metadata.icons.apple) for (const a of normalizeUrlDescriptorEntries(metadata.icons.apple, (url) => ({ url }))) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "apple-touch-icon",
			href: stringifyUrl(a.url),
			...a.sizes ? { sizes: a.sizes } : {},
			...a.type ? { type: a.type } : {}
		}, key++));
		if (isIconsMap(metadata.icons) && metadata.icons.other) for (const o of metadata.icons.other) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: o.rel,
			href: stringifyUrl(o.url),
			...o.sizes ? { sizes: o.sizes } : {}
		}, key++));
	}
	if (metadata.manifest) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
		rel: "manifest",
		href: stringifyUrl(metadata.manifest)
	}, key++));
	if (metadata.alternates) {
		const alt = metadata.alternates;
		if (alt.canonical) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "canonical",
			href: resolveCanonicalUrl(alt.canonical, base, pathname)
		}, key++));
		if (alt.languages) for (const [lang, href] of Object.entries(alt.languages)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			hrefLang: lang,
			href: resolveUrl(href)
		}, key++));
		if (alt.media) for (const [media, href] of Object.entries(alt.media)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			media,
			href: resolveUrl(href)
		}, key++));
		if (alt.types) for (const [type, href] of Object.entries(alt.types)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			type,
			href: resolveUrl(href)
		}, key++));
	}
	if (metadata.verification) {
		const v = metadata.verification;
		if (v.google) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "google-site-verification",
			content: v.google
		}, key++));
		if (v.yahoo) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "y_key",
			content: v.yahoo
		}, key++));
		if (v.yandex) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "yandex-verification",
			content: v.yandex
		}, key++));
		if (v.other) for (const [name, content] of Object.entries(v.other)) {
			const values = Array.isArray(content) ? content : [content];
			for (const val of values) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name,
				content: val
			}, key++));
		}
	}
	if (metadata.appleWebApp) {
		const awa = metadata.appleWebApp;
		if (awa.capable !== false) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "mobile-web-app-capable",
			content: "yes"
		}, key++));
		if (awa.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-mobile-web-app-title",
			content: awa.title
		}, key++));
		if (awa.statusBarStyle) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-mobile-web-app-status-bar-style",
			content: awa.statusBarStyle
		}, key++));
		if (awa.startupImage) {
			const imgs = typeof awa.startupImage === "string" ? [{ url: awa.startupImage }] : awa.startupImage;
			for (const img of imgs) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "apple-touch-startup-image",
				href: resolveUrl(img.url),
				...img.media ? { media: img.media } : {}
			}, key++));
		}
	}
	if (metadata.itunes) {
		const { appId, appArgument } = metadata.itunes;
		let content = `app-id=${appId}`;
		if (appArgument) content += `, app-argument=${appArgument}`;
		elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-itunes-app",
			content
		}, key++));
	}
	if (metadata.appLinks) {
		const al = metadata.appLinks;
		for (const platform of [
			"ios",
			"iphone",
			"ipad",
			"android",
			"windows_phone",
			"windows",
			"windows_universal",
			"web"
		]) {
			const entries = al[platform];
			if (!entries) continue;
			const list = Array.isArray(entries) ? entries : [entries];
			for (const entry of list) for (const [k, v] of Object.entries(entry)) {
				if (v === void 0 || v === null) continue;
				const str = String(v);
				const content = k === "url" ? resolveUrl(str) : str;
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					property: `al:${platform}:${k}`,
					content
				}, key++));
			}
		}
	}
	if (metadata.other) for (const [name, content] of Object.entries(metadata.other)) {
		const values = Array.isArray(content) ? content : [content];
		for (const val of values) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name,
			content: val
		}, key++));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: elements });
}
//#endregion
//#region node_modules/vinext/dist/shims/request-context.js
/**
* Request ExecutionContext — AsyncLocalStorage-backed accessor.
*
* Makes the Cloudflare Workers `ExecutionContext` (which provides
* `waitUntil`) available to any code on the call stack during a request
* without requiring it to be threaded through every function signature.
*
* Usage:
*
*   // In the worker entry, wrap the handler:
*   import { runWithExecutionContext } from "vinext/shims/request-context";
*   export default {
*     fetch(request, env, ctx) {
*       return runWithExecutionContext(ctx, () => handler.fetch(request, env, ctx));
*     }
*   };
*
*   // Anywhere downstream:
*   import { getRequestExecutionContext } from "vinext/shims/request-context";
*   const ctx = getRequestExecutionContext(); // null on Node.js dev
*   ctx?.waitUntil(somePromise);
*/
var _als$3 = getOrCreateAls("vinext.requestContext.als");
/**
* Get the `ExecutionContext` for the current request, or `null` when called
* outside a `runWithExecutionContext()` scope (e.g. on Node.js dev server).
*
* Use `ctx?.waitUntil(promise)` to schedule background work that must
* complete before the Worker isolate is torn down.
*/
function getRequestExecutionContext() {
	if (isInsideUnifiedScope()) return getRequestContext().executionContext;
	return _als$3.getStore() ?? null;
}
//#endregion
//#region node_modules/vinext/dist/config/config-matchers.js
/**
* Cache for compiled regex patterns in matchConfigPattern.
*
* Redirect/rewrite patterns are static — they come from next.config.js and
* never change at runtime. Without caching, every request that hits the regex
* branch re-runs the full tokeniser walk + isSafeRegex + new RegExp() for
* every rule in the array. On apps with many locale-prefixed rules (which all
* contain `(` and therefore enter the regex branch) this dominated profiling
* at ~2.4 seconds of CPU self-time.
*
* Value is `null` when safeRegExp rejected the pattern (ReDoS risk), so we
* skip it on subsequent requests too without re-running the scanner.
*/
var _compiledPatternCache = /* @__PURE__ */ new Map();
/**
* Cache for compiled header source regexes in matchHeaders.
*
* Each NextHeader rule has a `source` that is run through escapeHeaderSource()
* then safeRegExp() to produce a RegExp. Both are pure functions of the source
* string and the result never changes. Without caching, every request
* re-runs the full escapeHeaderSource tokeniser + isSafeRegex scan + new RegExp()
* for every header rule.
*
* Value is `null` when safeRegExp rejected the pattern (ReDoS risk).
*/
var _compiledHeaderSourceCache = /* @__PURE__ */ new Map();
/**
* Cache for compiled has/missing condition value regexes in checkSingleCondition.
*
* Each has/missing condition may carry a `value` string that is passed directly
* to safeRegExp() for matching against header/cookie/query/host values. The
* condition objects are static (from next.config.js) so the compiled RegExp
* never changes. Without caching, safeRegExp() is called on every request for
* every condition on every rule.
*
* Value is `null` when safeRegExp rejected the pattern, or `false` when the
* value string was undefined (no regex needed — use exact string comparison).
*/
var _compiledConditionCache = /* @__PURE__ */ new Map();
/**
* Cache for destination substitution regexes in substituteDestinationParams.
*
* The regex depends only on the set of param keys captured from the matched
* source pattern. Caching by sorted key list avoids recompiling a new RegExp
* for repeated redirect/rewrite calls that use the same param shape.
*/
var _compiledDestinationParamCache = /* @__PURE__ */ new Map();
/**
* Generic helper for the regex compilation caches above.
*
* Each cache stores the compiled artifact (or `null` when safeRegExp rejected
* the pattern) the first time a key is seen, and reuses it forever. The
* `undefined` sentinel distinguishes "not yet seen" from "seen and rejected"
* so we never re-run isSafeRegex on the same input.
*
* Keep the security path intact: `compile()` is responsible for calling
* safeRegExp(); this helper only handles caching.
*/
function getCachedRegex(cache, key, compile) {
	let value = cache.get(key);
	if (value === void 0) {
		value = compile();
		cache.set(key, value);
	}
	return value;
}
/**
* Redirect index for O(1) locale-static rule lookup.
*
* Many Next.js apps generate 50-100 redirect rules of the form:
*   /:locale(en|es|fr|...)?/some-static-path  →  /some-destination
*
* The compiled regex for each is like:
*   ^/(en|es|fr|...)?/some-static-path$
*
* When no redirect matches (the common case for ordinary page loads),
* matchRedirect previously ran exec() on every one of those regexes —
* ~2ms per call, ~2992ms total self-time in profiles.
*
* The index splits rules into two buckets:
*
*   localeStatic — rules whose source is exactly /:paramName(alt1|alt2|...)?/suffix
*     where `suffix` is a static path with no further params or regex groups.
*     These are indexed in a Map<suffix, entry[]> for O(1) lookup after a
*     single fast strip of the optional locale prefix.
*
*   linear — all other rules. Matched with the original O(n) loop.
*
* The index is stored in a WeakMap keyed by the redirects array so it is
* computed once per config load and GC'd when the array is no longer live.
*
* ## Ordering invariant
*
* Redirect rules must be evaluated in their original order (first match wins).
* Each locale-static entry stores its `originalIndex` so that, when a
* locale-static fast-path match is found, any linear rules that appear earlier
* in the array are still checked first.
*/
/**
* Matches `/:param(alternation)?/static/suffix` — the locale-static pattern.
*
* The `?` after the capture group is itself optional so that both forms are
* detected:
*   - `/:locale(en|fr)?/foo` (locale segment optional — user-written rules)
*   - `/:nextInternalLocale(en|fr)/foo` (locale segment mandatory — emitted
*      by `applyLocaleToRoutes` for the locale-capture variant)
* Both forms benefit from O(1) suffix lookup; the optionality is recorded
* on the entry so we know whether to try the no-locale-prefix bucket.
*/
var _LOCALE_STATIC_RE = /^\/:[\w-]+\(([^)]+)\)(\??)\/([a-zA-Z0-9_~.%@!$&'*+,;=:/-]+)$/;
var _redirectIndexCache = /* @__PURE__ */ new WeakMap();
/**
* Build (or retrieve from cache) the redirect index for a given redirects array.
*
* Called once per config load from matchRedirect. The WeakMap ensures the index
* is recomputed if the config is reloaded (new array reference) and GC'd when
* the array is collected.
*/
function _getRedirectIndex(redirects) {
	let index = _redirectIndexCache.get(redirects);
	if (index !== void 0) return index;
	const localeStatic = /* @__PURE__ */ new Map();
	const linear = [];
	for (let i = 0; i < redirects.length; i++) {
		const redirect = redirects[i];
		const m = _LOCALE_STATIC_RE.exec(redirect.source);
		if (m) {
			const paramName = redirect.source.slice(2, redirect.source.indexOf("("));
			const alternation = m[1];
			const optional = m[2] === "?";
			const suffix = "/" + m[3];
			const altRe = safeRegExp("^(?:" + alternation + ")$");
			if (!altRe) {
				linear.push([i, redirect]);
				continue;
			}
			const entry = {
				paramName,
				altRe,
				optional,
				redirect,
				originalIndex: i
			};
			const bucket = localeStatic.get(suffix);
			if (bucket) bucket.push(entry);
			else localeStatic.set(suffix, [entry]);
		} else linear.push([i, redirect]);
	}
	index = {
		localeStatic,
		linear
	};
	_redirectIndexCache.set(redirects, index);
	return index;
}
/** Hop-by-hop headers that should not be forwarded through a proxy. */
var HOP_BY_HOP_HEADERS = /* @__PURE__ */ new Set([
	"connection",
	"keep-alive",
	"proxy-authenticate",
	"proxy-authorization",
	"te",
	"trailers",
	"transfer-encoding",
	"upgrade"
]);
/**
* Request hop-by-hop headers to strip before proxying with fetch().
* Intentionally narrower than HOP_BY_HOP_HEADERS: external rewrite proxying
* still forwards proxy auth credentials, while response sanitization strips
* them before returning data to the client.
*/
var REQUEST_HOP_BY_HOP_HEADERS = /* @__PURE__ */ new Set([
	"connection",
	"keep-alive",
	"te",
	"trailers",
	"transfer-encoding",
	"upgrade"
]);
function stripHopByHopRequestHeaders(headers) {
	const connectionTokens = (headers.get("connection") || "").split(",").map((value) => value.trim().toLowerCase()).filter(Boolean);
	for (const header of REQUEST_HOP_BY_HOP_HEADERS) headers.delete(header);
	for (const token of connectionTokens) headers.delete(token);
}
/**
* Detect regex patterns vulnerable to catastrophic backtracking (ReDoS).
*
* Uses a lightweight heuristic: scans the pattern string for nested quantifiers
* (a quantifier applied to a group that itself contains a quantifier). This
* catches the most common pathological patterns like `(a+)+`, `(.*)*`,
* `([^/]+)+`, `(a|a+)+` without needing a full regex parser.
*
* Returns true if the pattern appears safe, false if it's potentially dangerous.
*/
function isSafeRegex(pattern) {
	const quantifierAtDepth = [];
	let depth = 0;
	let i = 0;
	while (i < pattern.length) {
		const ch = pattern[i];
		if (ch === "\\") {
			i += 2;
			continue;
		}
		if (ch === "[") {
			i++;
			while (i < pattern.length && pattern[i] !== "]") {
				if (pattern[i] === "\\") i++;
				i++;
			}
			i++;
			continue;
		}
		if (ch === "(") {
			depth++;
			if (quantifierAtDepth.length <= depth) quantifierAtDepth.push(false);
			else quantifierAtDepth[depth] = false;
			i++;
			continue;
		}
		if (ch === ")") {
			const hadQuantifier = depth > 0 && quantifierAtDepth[depth];
			if (depth > 0) depth--;
			const next = pattern[i + 1];
			if (next === "+" || next === "*" || next === "{") {
				if (hadQuantifier) return false;
				if (depth >= 0 && depth < quantifierAtDepth.length) quantifierAtDepth[depth] = true;
			}
			i++;
			continue;
		}
		if (ch === "+" || ch === "*") {
			if (depth > 0) quantifierAtDepth[depth] = true;
			i++;
			continue;
		}
		if (ch === "?") {
			const prev = i > 0 ? pattern[i - 1] : "";
			if (prev !== "+" && prev !== "*" && prev !== "?" && prev !== "}") {
				if (depth > 0) quantifierAtDepth[depth] = true;
			}
			i++;
			continue;
		}
		if (ch === "{") {
			let j = i + 1;
			while (j < pattern.length && /[\d,]/.test(pattern[j])) j++;
			if (j < pattern.length && pattern[j] === "}" && j > i + 1) {
				if (depth > 0) quantifierAtDepth[depth] = true;
				i = j + 1;
				continue;
			}
		}
		i++;
	}
	return true;
}
/**
* Compile a regex pattern safely. Returns the compiled RegExp or null if the
* pattern is invalid or vulnerable to ReDoS.
*
* Logs a warning when a pattern is rejected so developers can fix their config.
*/
function safeRegExp(pattern, flags) {
	if (!isSafeRegex(pattern)) {
		console.warn(`[vinext] Ignoring potentially unsafe regex pattern (ReDoS risk): ${pattern}\n  Patterns with nested quantifiers (e.g. (a+)+) can cause catastrophic backtracking.\n  Simplify the pattern to avoid nested repetition.`);
		return null;
	}
	try {
		return new RegExp(pattern, flags);
	} catch {
		return null;
	}
}
/**
* Convert a Next.js header/rewrite/redirect source pattern into a regex string.
*
* Regex groups in the source (e.g. `(\d+)`) are extracted first, the remaining
* text is escaped/converted in a **single pass** (avoiding chained `.replace()`
* which CodeQL flags as incomplete sanitization), then groups are restored.
*/
function escapeHeaderSource(source) {
	const S = "";
	const groups = [];
	const withPlaceholders = source.replace(/\(([^)]+)\)/g, (_m, inner) => {
		groups.push(inner);
		return `${S}G${groups.length - 1}${S}`;
	});
	let result = "";
	const re = new RegExp(`${S}G(\\d+)${S}|:[\\w-]+|[.+?*]|[^.+?*:\\uE000]+`, "g");
	let m;
	while ((m = re.exec(withPlaceholders)) !== null) if (m[1] !== void 0) result += `(${groups[Number(m[1])]})`;
	else if (m[0].startsWith(":")) {
		const constraintMatch = withPlaceholders.slice(re.lastIndex).match(new RegExp(`^${S}G(\\d+)${S}`));
		if (constraintMatch) {
			re.lastIndex += constraintMatch[0].length;
			result += `(${groups[Number(constraintMatch[1])]})`;
		} else result += "[^/]+";
	} else switch (m[0]) {
		case ".":
			result += "\\.";
			break;
		case "+":
			result += "\\+";
			break;
		case "?":
			result += "\\?";
			break;
		case "*":
			result += ".*";
			break;
		default:
			result += m[0];
			break;
	}
	return result;
}
var _BASEPATH_DEFAULT = {
	basePath: "",
	hadBasePath: true
};
/**
* Decide whether a rule should be evaluated at all given the current
* basePath-gating state.
*
* Encodes the Next.js rules:
*   - basePath: false rule → only when the request was NOT under basePath
*     (i.e. it's the explicit opt-out path). When `basePath` itself is
*     empty, basePath: false rules are still allowed to match — there's
*     just no basePath to gate them.
*   - default rule (basePath !== false) → only when the request WAS under
*     basePath (or no basePath is configured).
*/
function shouldEvaluateRule(ruleBasePath, state) {
	if (!state.basePath) return true;
	return ruleBasePath === false ? !state.hadBasePath : state.hadBasePath;
}
/**
* Parse a Cookie header string into a key-value record.
*/
function parseCookies(cookieHeader) {
	if (!cookieHeader) return {};
	const cookies = {};
	for (const part of cookieHeader.split(";")) {
		const eq = part.indexOf("=");
		if (eq === -1) continue;
		const key = part.slice(0, eq).trim();
		const value = part.slice(eq + 1).trim();
		if (key) cookies[key] = value;
	}
	return cookies;
}
/**
* Build a RequestContext from a Web Request object.
*/
function requestContextFromRequest(request) {
	const url = new URL(request.url);
	return {
		headers: request.headers,
		cookies: parseCookies(request.headers.get("cookie")),
		query: url.searchParams,
		host: normalizeHost(request.headers.get("host"), url.hostname)
	};
}
function normalizeHost(hostHeader, fallbackHostname) {
	return (hostHeader ?? fallbackHostname).split(":", 1)[0].toLowerCase();
}
function _emptyParams() {
	return Object.create(null);
}
function _matchConditionValue(actualValue, expectedValue) {
	if (expectedValue === void 0) return _emptyParams();
	const re = _cachedConditionRegex(expectedValue);
	if (re) {
		const match = re.exec(actualValue);
		if (!match) return null;
		const params = _emptyParams();
		if (match.groups) {
			for (const [key, value] of Object.entries(match.groups)) if (value !== void 0) params[key] = value;
		}
		return params;
	}
	return actualValue === expectedValue ? _emptyParams() : null;
}
/**
* Check a single has/missing condition against request context.
* Returns captured params when the condition is satisfied, or null otherwise.
*/
function matchSingleCondition(condition, ctx) {
	switch (condition.type) {
		case "header": {
			const headerValue = ctx.headers.get(condition.key);
			if (headerValue === null) return null;
			return _matchConditionValue(headerValue, condition.value);
		}
		case "cookie": {
			const cookieValue = ctx.cookies[condition.key];
			if (cookieValue === void 0) return null;
			return _matchConditionValue(cookieValue, condition.value);
		}
		case "query": {
			const queryValue = ctx.query.get(condition.key);
			if (queryValue === null) return null;
			return _matchConditionValue(queryValue, condition.value);
		}
		case "host":
			if (condition.value !== void 0) return _matchConditionValue(ctx.host, condition.value);
			return ctx.host === condition.key ? _emptyParams() : null;
		default: return null;
	}
}
/**
* Return a cached RegExp for a has/missing condition value string, compiling
* on first use. Returns null if safeRegExp rejected the pattern or if the
* value is not a valid regex (fall back to exact string comparison).
*/
function _cachedConditionRegex(value) {
	return getCachedRegex(_compiledConditionCache, value, () => safeRegExp(`^${value}$`));
}
/**
* Check all has/missing conditions for a config rule.
* Returns true if the rule should be applied (all has conditions pass, all missing conditions pass).
*
* - has: every condition must match (the request must have it)
* - missing: every condition must NOT match (the request must not have it)
*/
function collectConditionParams(has, missing, ctx) {
	const params = _emptyParams();
	if (has) for (const condition of has) {
		const conditionParams = matchSingleCondition(condition, ctx);
		if (!conditionParams) return null;
		Object.assign(params, conditionParams);
	}
	if (missing) {
		for (const condition of missing) if (matchSingleCondition(condition, ctx)) return null;
	}
	return params;
}
function checkHasConditions(has, missing, ctx) {
	return collectConditionParams(has, missing, ctx) !== null;
}
/**
* If the current position in `str` starts with a parenthesized group, consume
* it and advance `re.lastIndex` past the closing `)`. Returns the group
* contents or null if no group is present.
*/
function extractConstraint$1(str, re) {
	if (str[re.lastIndex] !== "(") return null;
	const start = re.lastIndex + 1;
	let depth = 1;
	let i = start;
	while (i < str.length && depth > 0) {
		if (str[i] === "(") depth++;
		else if (str[i] === ")") depth--;
		i++;
	}
	if (depth !== 0) return null;
	re.lastIndex = i;
	return str.slice(start, i - 1);
}
/**
* Match a Next.js config pattern (from redirects/rewrites sources) against a pathname.
* Returns matched params or null.
*
* Supports:
*   :param     - matches a single path segment
*   :param*    - matches zero or more segments (catch-all)
*   :param+    - matches one or more segments
*   (regex)    - inline regex patterns in the source
*   :param(constraint) - named param with inline regex constraint
*/
/**
* Strip a single trailing slash from a pathname for config-source matching.
*
* Next.js conditionally appends `(/)?` to rewrite/redirect/header source
* regexes when `trailingSlash: true` (see Next.js
* `resolve-rewrites.ts` and `server-utils.ts:checkRewrite`). Rather than
* threading the trailingSlash flag through every matcher, we unconditionally
* strip a trailing slash from the incoming pathname. When `trailingSlash: false`
* the request pipeline emits a normalizing redirect (step 3) before config
* rewrites/redirects (step 6) ever run, so the pathname is already slash-free;
* the unconditional strip is defense-in-depth for that ordering. When
* `trailingSlash: true` it bridges the gap between the canonicalized request
* path (`/rewrite-1/`) and source patterns written without a trailing slash
* (`/rewrite-1`).
*
* The root path `"/"` is preserved as-is.
*/
function stripTrailingSlashForConfigMatch(pathname) {
	return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}
function matchConfigPattern(pathname, pattern) {
	pathname = stripTrailingSlashForConfigMatch(pathname);
	const catchAllAnchor = /:[\w-]+[*+]/.test(pattern);
	const namedParamCount = (pattern.match(/:[\w-]+/g) || []).length;
	if (pattern.includes("(") || pattern.includes("\\") || /:[\w-]+[*+][^/]/.test(pattern) || /:[\w-]+\./.test(pattern) || catchAllAnchor && namedParamCount > 1) try {
		const compiled = getCachedRegex(_compiledPatternCache, pattern, () => {
			const paramNames = [];
			let regexStr = "";
			const tokenRe = /:([\w-]+)|[.]|[^:.]+/g;
			let tok;
			while ((tok = tokenRe.exec(pattern)) !== null) if (tok[1] !== void 0) {
				const name = tok[1];
				const rest = pattern.slice(tokenRe.lastIndex);
				if (rest.startsWith("*") || rest.startsWith("+")) {
					const quantifier = rest[0];
					tokenRe.lastIndex += 1;
					const constraint = extractConstraint$1(pattern, tokenRe);
					paramNames.push(name);
					if (constraint !== null) regexStr += `(${constraint})`;
					else regexStr += quantifier === "*" ? "(.*)" : "(.+)";
				} else {
					const constraint = extractConstraint$1(pattern, tokenRe);
					paramNames.push(name);
					regexStr += constraint !== null ? `(${constraint})` : "([^/]+)";
				}
			} else if (tok[0] === ".") regexStr += "\\.";
			else regexStr += tok[0];
			const re = safeRegExp("^" + regexStr + "$");
			return re ? {
				re,
				paramNames
			} : null;
		});
		if (!compiled) return null;
		const match = compiled.re.exec(pathname);
		if (!match) return null;
		const params = Object.create(null);
		for (let i = 0; i < compiled.paramNames.length; i++) params[compiled.paramNames[i]] = match[i + 1] ?? "";
		return params;
	} catch {}
	const catchAllMatch = pattern.match(/:([\w-]+)(\*|\+)$/);
	if (catchAllMatch) {
		const prefix = pattern.slice(0, pattern.lastIndexOf(":"));
		const paramName = catchAllMatch[1];
		const isPlus = catchAllMatch[2] === "+";
		const prefixNoSlash = prefix.replace(/\/$/, "");
		if (!pathname.startsWith(prefixNoSlash)) return null;
		const charAfter = pathname[prefixNoSlash.length];
		if (charAfter !== void 0 && charAfter !== "/") return null;
		const rest = pathname.slice(prefixNoSlash.length);
		if (isPlus && (!rest || rest === "/")) return null;
		let restValue = rest.startsWith("/") ? rest.slice(1) : rest;
		return { [paramName]: restValue };
	}
	const parts = pattern.split("/");
	const pathParts = pathname.split("/");
	if (parts.length !== pathParts.length) return null;
	const params = Object.create(null);
	for (let i = 0; i < parts.length; i++) if (parts[i].startsWith(":")) params[parts[i].slice(1)] = pathParts[i];
	else if (parts[i] !== pathParts[i]) return null;
	return params;
}
/**
* Apply redirect rules from next.config.js.
* Returns the redirect info if a redirect was matched, or null.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating redirects, so this parameter is required.
*
* ## Performance
*
* Rules with a locale-capture-group prefix (the dominant pattern in large
* Next.js apps — e.g. `/:locale(en|es|fr|...)?/some-path`) are handled via
* a pre-built index. Instead of running exec() on each locale regex
* individually, we:
*
*   1. Strip the optional locale prefix from the pathname with one cheap
*      string-slice check (no regex exec on the hot path).
*   2. Look up the stripped suffix in a Map<suffix, entry[]>.
*   3. For each matching entry, validate the captured locale string against
*      a small, anchored alternation regex.
*
* This reduces the per-request cost from O(n × regex) to O(1) map lookup +
* O(matches × tiny-regex), eliminating the ~2992ms self-time reported in
* profiles for apps with 63+ locale-prefixed rules.
*
* Rules that don't fit the locale-static pattern fall back to the original
* linear matchConfigPattern scan.
*
* ## Ordering invariant
*
* First match wins, preserving the original redirect array order. When a
* locale-static fast-path match is found at position N, all linear rules with
* an original index < N are checked via matchConfigPattern first — they are
* few in practice (typically zero) so this is not a hot-path concern.
*/
function matchRedirect(pathname, redirects, ctx, basePathState = _BASEPATH_DEFAULT) {
	if (redirects.length === 0) return null;
	pathname = stripTrailingSlashForConfigMatch(pathname);
	const index = _getRedirectIndex(redirects);
	let localeMatch = null;
	let localeMatchIndex = Infinity;
	if (index.localeStatic.size > 0) {
		const noLocaleBucket = index.localeStatic.get(pathname);
		if (noLocaleBucket) for (const entry of noLocaleBucket) {
			if (!entry.optional) continue;
			if (entry.originalIndex >= localeMatchIndex) continue;
			const redirect = entry.redirect;
			if (!shouldEvaluateRule(redirect.basePath, basePathState)) continue;
			const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			localeMatch = {
				destination: substituteAndSanitizeDestination(redirect.destination, {
					[entry.paramName]: "",
					...conditionParams
				}),
				permanent: redirect.permanent
			};
			localeMatchIndex = entry.originalIndex;
			break;
		}
		const slashTwo = pathname.indexOf("/", 1);
		if (slashTwo !== -1) {
			const suffix = pathname.slice(slashTwo);
			const localePart = pathname.slice(1, slashTwo);
			const localeBucket = index.localeStatic.get(suffix);
			if (localeBucket) for (const entry of localeBucket) {
				if (entry.originalIndex >= localeMatchIndex) continue;
				if (!entry.altRe.test(localePart)) continue;
				const redirect = entry.redirect;
				if (!shouldEvaluateRule(redirect.basePath, basePathState)) continue;
				const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
				if (!conditionParams) continue;
				localeMatch = {
					destination: substituteAndSanitizeDestination(redirect.destination, {
						[entry.paramName]: localePart,
						...conditionParams
					}),
					permanent: redirect.permanent
				};
				localeMatchIndex = entry.originalIndex;
				break;
			}
		}
	}
	for (const [origIdx, redirect] of index.linear) {
		if (origIdx >= localeMatchIndex) break;
		if (!shouldEvaluateRule(redirect.basePath, basePathState)) continue;
		const params = matchConfigPattern(pathname, redirect.source);
		if (params) {
			const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			return {
				destination: substituteAndSanitizeDestination(redirect.destination, {
					...params,
					...conditionParams
				}),
				permanent: redirect.permanent
			};
		}
	}
	return localeMatch;
}
/**
* Apply rewrite rules from next.config.js.
* Returns the rewritten URL or null if no rewrite matched.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating rewrites, so this parameter is required.
*/
function matchRewrite(pathname, rewrites, ctx, basePathState = _BASEPATH_DEFAULT) {
	for (const rewrite of rewrites) {
		if (!shouldEvaluateRule(rewrite.basePath, basePathState)) continue;
		const params = matchConfigPattern(pathname, rewrite.source);
		if (params) {
			const conditionParams = rewrite.has || rewrite.missing ? collectConditionParams(rewrite.has, rewrite.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			return substituteAndSanitizeDestination(rewrite.destination, {
				...params,
				...conditionParams
			});
		}
	}
	return null;
}
/**
* Substitute all matched route params into a redirect/rewrite destination.
*
* Handles repeated params (e.g. `/api/:id/:id`) and catch-all suffix forms
* (`:path*`, `:path+`) in a single pass. Unknown params are left intact.
*/
function substituteDestinationParams(destination, params) {
	const keys = Object.keys(params);
	if (keys.length === 0) return destination;
	const sortedKeys = [...keys].sort((a, b) => b.length - a.length);
	const cacheKey = sortedKeys.join("\0");
	let paramRe = _compiledDestinationParamCache.get(cacheKey);
	if (!paramRe) {
		const paramAlternation = sortedKeys.map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
		paramRe = new RegExp(`:(${paramAlternation})([+*])?(?![A-Za-z0-9_])`, "g");
		_compiledDestinationParamCache.set(cacheKey, paramRe);
	}
	return destination.replace(paramRe, (_token, key) => params[key]);
}
/**
* Substitute params into a redirect/rewrite destination and sanitize the
* result. Used by every redirect/rewrite branch — the substitution can
* introduce protocol-relative URLs (e.g. `//evil.com` from a decoded `%2F`
* in a catch-all param), which sanitizeDestination collapses.
*/
function substituteAndSanitizeDestination(destination, params) {
	return sanitizeDestination(substituteDestinationParams(destination, params));
}
/**
* Sanitize a redirect/rewrite destination to collapse protocol-relative URLs.
*
* After parameter substitution, a destination like `/:path*` can become
* `//evil.com` if the catch-all captured a decoded `%2F` (`/evil.com`).
* Browsers interpret `//evil.com` as a protocol-relative URL, redirecting
* users off-site.
*
* This function collapses any leading double (or more) slashes to a single
* slash for non-external (relative) destinations.
*/
function sanitizeDestination(dest) {
	if (dest.startsWith("http://") || dest.startsWith("https://")) return dest;
	dest = dest.replace(/^[\\/]+/, "/");
	return dest;
}
/**
* Check if a URL is external (absolute URL or protocol-relative).
* Detects any URL scheme (http:, https:, data:, javascript:, blob:, etc.)
* per RFC 3986, plus protocol-relative URLs (//).
*/
function isExternalUrl(url) {
	return /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//");
}
/**
* Proxy an incoming request to an external URL and return the upstream response.
*
* Used for external rewrites (e.g. `/ph/:path*` → `https://us.i.posthog.com/:path*`).
* Next.js handles these as server-side reverse proxies, forwarding the request
* method, headers, and body to the external destination.
*
* Works in all runtimes (Node.js, Cloudflare Workers) via the standard fetch() API.
*/
async function proxyExternalRequest(request, externalUrl) {
	const originalUrl = new URL(request.url);
	const targetUrl = new URL(externalUrl);
	const destinationKeys = new Set(targetUrl.searchParams.keys());
	for (const [key, value] of originalUrl.searchParams) if (!destinationKeys.has(key)) targetUrl.searchParams.append(key, value);
	const headers = new Headers(request.headers);
	headers.set("host", targetUrl.host);
	stripHopByHopRequestHeaders(headers);
	const keysToDelete = [];
	for (const key of headers.keys()) if (key.startsWith("x-middleware-")) keysToDelete.push(key);
	for (const key of keysToDelete) headers.delete(key);
	headers.delete(VINEXT_PRERENDER_SECRET_HEADER);
	headers.delete(VINEXT_MW_CTX_HEADER);
	const method = request.method;
	const hasBody = method !== "GET" && method !== "HEAD";
	const init = {
		method,
		headers,
		redirect: "manual"
	};
	if (hasBody && request.body) {
		init.body = request.body;
		init.duplex = "half";
	}
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 3e4);
	let upstreamResponse;
	try {
		upstreamResponse = await fetch(targetUrl.href, {
			...init,
			signal: controller.signal
		});
	} catch (e) {
		if (e instanceof Error && e.name === "AbortError") {
			console.error("[vinext] External rewrite proxy timeout:", targetUrl.href);
			return new Response("Gateway Timeout", { status: 504 });
		}
		console.error("[vinext] External rewrite proxy error:", e);
		return new Response("Bad Gateway", { status: 502 });
	} finally {
		clearTimeout(timeout);
	}
	const isNodeRuntime = typeof process !== "undefined" && !!process.versions?.node;
	const responseHeaders = new Headers();
	upstreamResponse.headers.forEach((value, key) => {
		const lower = key.toLowerCase();
		if (HOP_BY_HOP_HEADERS.has(lower)) return;
		if (isNodeRuntime && (lower === "content-encoding" || lower === "content-length")) return;
		responseHeaders.append(key, value);
	});
	return new Response(upstreamResponse.body, {
		status: upstreamResponse.status,
		statusText: upstreamResponse.statusText,
		headers: responseHeaders
	});
}
/**
* Apply custom header rules from next.config.js.
* Returns an array of { key, value } pairs to set on the response.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating headers, so this parameter is required.
*/
function matchHeaders(pathname, headers, ctx, basePathState = _BASEPATH_DEFAULT) {
	pathname = stripTrailingSlashForConfigMatch(pathname);
	const result = [];
	for (const rule of headers) {
		if (!shouldEvaluateRule(rule.basePath, basePathState)) continue;
		const sourceRegex = getCachedRegex(_compiledHeaderSourceCache, rule.source, () => safeRegExp("^" + escapeHeaderSource(rule.source) + "$"));
		if (sourceRegex && sourceRegex.test(pathname)) {
			if (rule.has || rule.missing) {
				if (!checkHasConditions(rule.has, rule.missing, ctx)) continue;
			}
			result.push(...rule.headers);
		}
	}
	return result;
}
//#endregion
//#region node_modules/vinext/dist/server/http-error-responses.js
/**
* Build a 400 Bad Request plain-text response.
*
* Used for malformed percent-encoding, invalid HTTP methods (where Next.js
* returns 400), and other request-shape validation failures.
*/
function badRequestResponse(init) {
	return new Response("Bad Request", {
		status: 400,
		headers: init?.headers
	});
}
/**
* Build a 403 Forbidden plain-text response.
*
* Used by CSRF origin validation and dev-server origin checks.
*/
function forbiddenResponse() {
	return new Response("Forbidden", {
		status: 403,
		headers: { "Content-Type": "text/plain" }
	});
}
/**
* Build a 404 Not Found plain-text response.
*
* The body matches Next.js's plain-text 404 response exactly. Next.js writes
* `res.end('This page could not be found')` (no trailing period) for the
* fallback 404 path; see in `.nextjs-ref`:
*   - packages/next/src/server/route-modules/pages/pages-handler.ts L121, L535
*   - packages/next/src/build/templates/app-route.ts L170, L349
*   - packages/next/src/build/templates/app-page.ts L701, L1043
* (The React-rendered not-found component in `packages/next/src/client/components/builtin/not-found.tsx`
* uses the same text with a trailing period — that variant is rendered as HTML,
* not returned as the plain-text body.)
*
* The `headers` option lets call sites merge middleware response headers into
* the 404, matching the pattern used by `app-rsc-handler` after a route match
* fails but middleware has already contributed headers.
*/
function notFoundResponse(init) {
	return new Response("This page could not be found", {
		status: 404,
		headers: init?.headers
	});
}
/**
* Build a 405 Method Not Allowed plain-text response with the `Allow` header set.
*
* `allowedMethods` is rendered as the comma-separated `Allow` header value.
* Existing headers (e.g. middleware response headers) can be merged via `init.headers`;
* the `Allow` header takes precedence and overwrites any colliding entry.
*/
function methodNotAllowedResponse(allowedMethods, init) {
	const headers = new Headers(init?.headers);
	headers.set("Allow", allowedMethods);
	return new Response("Method Not Allowed", {
		status: 405,
		headers
	});
}
/**
* Build a 413 Payload Too Large plain-text response.
*
* Used by server action body-size enforcement.
*/
function payloadTooLargeResponse() {
	return new Response("Payload Too Large", { status: 413 });
}
/**
* Build a 500 Internal Server Error plain-text response.
*
* The `message` argument lets dev-mode handlers surface failure details while
* production paths fall back to the canonical body. Pass `undefined` (or omit)
* to use the canonical "Internal Server Error" body.
*/
function internalServerErrorResponse(message, init) {
	return new Response(message ?? "Internal Server Error", {
		status: 500,
		headers: init?.headers
	});
}
//#endregion
//#region node_modules/vinext/dist/server/request-pipeline.js
/**
* Shared request pipeline utilities.
*
* Extracted from generated entries and server hot paths to keep codegen focused
* on app shape while normal modules own request behavior. Some dev-server and
* worker-template setup code still has inline normalization that should be
* migrated in follow-up work.
*
* These utilities handle the common request lifecycle steps: protocol-
* relative URL guards, basePath stripping, trailing slash normalization,
* and CSRF origin validation.
*
* Plain-text error response builders (forbidden / not-found / etc.) live in
* `./http-error-responses.ts`.
*/
/**
* Guard against protocol-relative URL open redirects.
*
* Paths like `//example.com/` would be redirected to `//example.com` by the
* trailing-slash normalizer, which browsers interpret as `http://example.com`.
* Backslashes are equivalent to forward slashes in the URL spec
* (e.g. `/\evil.com` is treated as `//evil.com` by browsers).
*
* Next.js returns 404 for these paths. We check the RAW pathname before
* normalization so the guard fires before normalizePath collapses `//`.
*
* Percent-encoded variants are also blocked because:
*   - `%5C` decodes to `\` (browsers treat `/\evil.com` as `//evil.com`).
*   - `%2F` decodes to `/` (so `/%2F/evil.com` effectively becomes `//evil.com`).
* These forms survive segment-wise decoding that re-encodes path delimiters
* (e.g. `normalizePathnameForRouteMatchStrict`), so a later trailing-slash
* redirect would still echo the encoded form in its `Location` header. See
* `isOpenRedirectShaped` for the full list of rejected leading-segment forms.
*
* @param rawPathname - The raw pathname from the URL, before any normalization
* @returns A 404 Response if the path is protocol-relative, or null to continue
*/
function guardProtocolRelativeUrl(rawPathname) {
	if (isOpenRedirectShaped(rawPathname)) return notFoundResponse();
	return null;
}
/**
* Returns true if a request pathname looks like a protocol-relative open
* redirect, in either literal or percent-encoded form.
*
* Exported for call sites that need to replicate the guard inline (Pages
* Router worker codegen, Node production server) and for defense-in-depth
* checks inside redirect emitters.
*
* A pathname is considered "open redirect shaped" when its first segment,
* after decoding backslashes and encoded delimiters, would cause a browser
* to resolve a `Location` containing the pathname as protocol-relative:
*
*   - literal   `//evil.com`
*   - literal   `/\evil.com`             (browsers normalize `\` to `/`)
*   - encoded   `/%5Cevil.com`           (`%5C` decodes to `\` in Location)
*   - encoded   `/%2F/evil.com`          (`%2F` decodes to `/` → `//`)
*   - mixed     `/%5C%2F`, `/%5C%5C`     (and other combinations)
*
* We explicitly do not require a valid percent sequence elsewhere in the
* pathname — we only examine the leading bytes (up to the second real or
* encoded delimiter) so malformed suffixes can still reach the normal
* "400 Bad Request" decode path instead of being masked as "404".
*/
function isOpenRedirectShaped(rawPathname) {
	if (!rawPathname.startsWith("/")) return false;
	const afterSlash = rawPathname.slice(1);
	if (afterSlash.startsWith("/") || afterSlash.startsWith("\\")) return true;
	if (afterSlash.length >= 3 && afterSlash[0] === "%") {
		const encoded = afterSlash.slice(0, 3).toLowerCase();
		if (encoded === "%5c" || encoded === "%2f") return true;
	}
	return false;
}
var FILE_LIKE_PATHNAME_RE = /\.[^/]+\/?$/;
function isWellKnownPathname(pathname) {
	return pathname === "/.well-known" || pathname.startsWith("/.well-known/");
}
/**
* Apply matched next.config.js headers to a Web Headers object.
*
* Next.js evaluates config header match conditions against the original
* request snapshot. Middleware response headers still win for the same
* response key, while multi-value headers are additive.
*/
function applyConfigHeadersToResponse(responseHeaders, options) {
	const matched = matchHeaders(options.pathname, options.configHeaders, options.requestContext, options.basePathState);
	for (const header of matched) {
		const lowerName = header.key.toLowerCase();
		if (lowerName === "vary" || lowerName === "set-cookie") responseHeaders.append(header.key, header.value);
		else if (!responseHeaders.has(lowerName)) responseHeaders.set(header.key, header.value);
	}
}
function createStaticFileSignal(pathname, context) {
	const headers = new Headers({ [VINEXT_STATIC_FILE_HEADER]: encodeURIComponent(pathname) });
	if (context.headers) for (const [key, value] of context.headers) headers.append(key, value);
	return new Response(null, {
		status: context.status ?? 200,
		headers
	});
}
/**
* Resolve the public/ filesystem-route slot in the Next.js routing order.
*
* Public files are checked after middleware and before afterFiles/fallback
* rewrites. The generated App Router entry provides the public-file set; this
* helper owns the request-method and RSC exclusions plus static-file signaling.
*/
function resolvePublicFileRoute(options) {
	if (options.request.method !== "GET" && options.request.method !== "HEAD") return null;
	if (options.pathname.endsWith(".rsc")) return null;
	if (!options.publicFiles.has(options.cleanPathname)) return null;
	return createStaticFileSignal(options.cleanPathname, options.middlewareContext);
}
function normalizeTrailingSlashPathname(pathname, trailingSlash) {
	if (pathname === "/" || pathname === "/api" || pathname.startsWith("/api/")) return null;
	const hasTrailing = pathname.endsWith("/");
	if (trailingSlash) {
		if (isWellKnownPathname(pathname)) return null;
		if (FILE_LIKE_PATHNAME_RE.test(pathname)) {
			const normalized = removeTrailingSlash(pathname);
			return normalized === pathname ? null : normalized;
		}
		if (!hasTrailing && !pathname.endsWith(".rsc")) return `${pathname}/`;
		return null;
	}
	if (hasTrailing) return removeTrailingSlash(pathname);
	return null;
}
/**
* Check if the pathname needs a trailing slash redirect, and return the
* redirect Response if so.
*
* Follows Next.js behavior:
* - `/api` routes are never redirected
* - The root path `/` is never redirected
* - If `trailingSlash` is true, redirect `/about` → `/about/`
* - If `trailingSlash` is true, redirect file-looking `/file.ext/` → `/file.ext`
* - If `trailingSlash` is true, do not redirect `/.well-known/*`
* - If `trailingSlash` is false (default), redirect `/about/` → `/about`
*
* @param pathname - The basePath-stripped pathname
* @param basePath - The basePath to prepend to the redirect Location
* @param trailingSlash - Whether trailing slashes should be enforced
* @param search - The query string (including `?`) to preserve in the redirect
* @returns A 308 redirect Response, or null if no redirect is needed
*/
function normalizeTrailingSlash(pathname, basePath, trailingSlash, search) {
	if (pathname === "/" || pathname === "/api" || pathname.startsWith("/api/")) return null;
	if (isOpenRedirectShaped(pathname)) return notFoundResponse();
	const normalizedPathname = normalizeTrailingSlashPathname(pathname, trailingSlash);
	if (normalizedPathname === null) return null;
	return new Response(null, {
		status: 308,
		headers: { Location: basePath + normalizedPathname + search }
	});
}
/**
* Validate CSRF origin for server action requests.
*
* Matches Next.js behavior: compares the Origin header against the Host
* header. If they don't match, the request is rejected with 403 unless
* the origin is in the allowedOrigins list.
*
* @param request - The incoming Request
* @param allowedOrigins - Origins from experimental.serverActions.allowedOrigins
* @returns A 403 Response if origin validation fails, or null to continue
*/
function validateCsrfOrigin(request, allowedOrigins = []) {
	const originHeader = request.headers.get("origin");
	if (!originHeader) return null;
	if (originHeader === "null") {
		if (allowedOrigins.includes("null")) return null;
		console.warn(`[vinext] CSRF origin "null" blocked for server action. To allow requests from sandboxed contexts, add "null" to experimental.serverActions.allowedOrigins.`);
		return forbiddenResponse();
	}
	let originHost;
	try {
		originHost = new URL(originHeader).host.toLowerCase();
	} catch {
		return forbiddenResponse();
	}
	const hostHeader = (request.headers.get("host") || "").split(",")[0].trim().toLowerCase() || new URL(request.url).host.toLowerCase();
	if (originHost === hostHeader) return null;
	if (allowedOrigins.length > 0 && isOriginAllowed(originHost, allowedOrigins)) return null;
	console.warn(`[vinext] CSRF origin mismatch: origin "${originHost}" does not match host "${hostHeader}". Blocking server action request.`);
	return forbiddenResponse();
}
/**
* Reject malformed Flight container reference graphs in server action payloads.
*
* `@vitejs/plugin-rsc` vendors its own React Flight decoder. Malicious action
* payloads can abuse container references (`$Q`, `$W`, `$i`) to trigger very
* expensive deserialization before the action is even looked up.
*
* Legitimate React-encoded container payloads use separate numeric backing
* fields (e.g. field `1` plus root field `0` containing `"$Q1"`). We reject
* numeric backing-field graphs that contain missing backing fields or cycles.
* Regular user form fields are ignored entirely.
*/
async function validateServerActionPayload(body) {
	const containerRefRe = /"\$([QWi])(\d+)"/g;
	const fieldRefs = /* @__PURE__ */ new Map();
	const collectRefs = (fieldKey, text) => {
		const refs = /* @__PURE__ */ new Set();
		let match;
		containerRefRe.lastIndex = 0;
		while ((match = containerRefRe.exec(text)) !== null) refs.add(match[2]);
		fieldRefs.set(fieldKey, refs);
	};
	if (typeof body === "string") collectRefs("0", body);
	else for (const [key, value] of body.entries()) {
		if (!/^\d+$/.test(key)) continue;
		if (typeof value === "string") {
			collectRefs(key, value);
			continue;
		}
		if (typeof value?.text === "function") collectRefs(key, await value.text());
	}
	if (fieldRefs.size === 0) return null;
	const knownFields = new Set(fieldRefs.keys());
	for (const refs of fieldRefs.values()) for (const ref of refs) if (!knownFields.has(ref)) return new Response("Invalid server action payload", {
		status: 400,
		headers: { "Content-Type": "text/plain" }
	});
	const visited = /* @__PURE__ */ new Set();
	const stack = /* @__PURE__ */ new Set();
	const hasCycle = (node) => {
		if (stack.has(node)) return true;
		if (visited.has(node)) return false;
		visited.add(node);
		stack.add(node);
		for (const ref of fieldRefs.get(node) ?? []) if (hasCycle(ref)) return true;
		stack.delete(node);
		return false;
	};
	for (const node of fieldRefs.keys()) if (hasCycle(node)) return new Response("Invalid server action payload", {
		status: 400,
		headers: { "Content-Type": "text/plain" }
	});
	return null;
}
/**
* Check if an origin matches any pattern in the allowed origins list.
* Supports wildcard subdomains (e.g. `*.example.com`).
*/
/**
* Segment-by-segment domain matching for wildcard origin patterns.
* `*` matches exactly one DNS label; `**` matches one or more labels.
*
* Ported from Next.js: packages/next/src/server/app-render/csrf-protection.ts
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/csrf-protection.ts
*/
function matchWildcardDomain(domain, pattern) {
	const normalizedDomain = domain.replace(/[A-Z]/g, (c) => c.toLowerCase());
	const normalizedPattern = pattern.replace(/[A-Z]/g, (c) => c.toLowerCase());
	const domainParts = normalizedDomain.split(".");
	const patternParts = normalizedPattern.split(".");
	if (patternParts.length < 1) return false;
	if (domainParts.length < patternParts.length) return false;
	if (patternParts.length === 1 && (patternParts[0] === "*" || patternParts[0] === "**")) return false;
	while (patternParts.length) {
		const patternPart = patternParts.pop();
		const domainPart = domainParts.pop();
		if (patternPart === void 0) return false;
		switch (patternPart) {
			case "": return false;
			case "*": if (domainPart) continue;
			else return false;
			case "**":
				if (patternParts.length > 0) return false;
				return domainPart !== void 0;
			default: if (patternPart !== domainPart) return false;
		}
	}
	return domainParts.length === 0;
}
function isOriginAllowed(origin, allowed) {
	for (const pattern of allowed) if (pattern.includes("*")) {
		if (matchWildcardDomain(origin, pattern)) return true;
	} else if (origin.toLowerCase() === pattern.toLowerCase()) return true;
	return false;
}
/**
* Validate an image optimization URL parameter.
*
* Ensures the URL is a relative path that doesn't escape the origin:
* - Must start with "/" but not "//"
* - Backslashes are normalized (browsers treat `\` as `/`)
* - Origin validation as defense-in-depth
*
* @param rawUrl - The raw `url` query parameter value
* @param requestUrl - The full request URL for origin comparison
* @returns An error Response if validation fails, or the normalized image URL
*/
function validateImageUrl(rawUrl, requestUrl) {
	const imgUrl = rawUrl?.replaceAll("\\", "/") ?? null;
	if (!imgUrl || !imgUrl.startsWith("/") || imgUrl.startsWith("//")) return new Response(!rawUrl ? "Missing url parameter" : "Only relative URLs allowed", { status: 400 });
	const url = new URL(requestUrl);
	if (new URL(imgUrl, url.origin).origin !== url.origin) return new Response("Only relative URLs allowed", { status: 400 });
	return imgUrl;
}
/**
* Strip internal `x-middleware-*` headers from a Headers object.
*
* Middleware uses `x-middleware-*` headers as internal signals (e.g.
* `x-middleware-next`, `x-middleware-rewrite`, `x-middleware-request-*`).
* These must be removed before sending the response to the client.
*
* @param headers - The Headers object to modify in place
*/
function processMiddlewareHeaders(headers) {
	const keysToDelete = [];
	for (const key of headers.keys()) if (key.startsWith("x-middleware-")) keysToDelete.push(key);
	for (const key of keysToDelete) headers.delete(key);
}
/**
* Strip internal headers from an inbound request so they cannot be forged by
* an external attacker to influence routing or impersonate internal state.
*
* Must be called at every request entry point BEFORE middleware, routing,
* or any handler logic accesses the request headers.
*
* Returns a new Headers object with internal headers removed. The input
* is never mutated — Request.headers is immutable in Workers/miniflare
* environments (see applyMiddlewareRequestHeaders in config-matchers.ts
* for the same cloning pattern).
*
* @param headers - The source Headers (never modified)
* @returns A new Headers with INTERNAL_HEADERS removed
*/
function filterInternalHeaders(headers) {
	const filtered = new Headers();
	for (const [key, value] of headers) if (!INTERNAL_HEADERS.includes(key.toLowerCase())) filtered.append(key, value);
	return filtered;
}
function getRequestCf(request) {
	const cf = Reflect.get(request, "cf");
	return cf === void 0 ? void 0 : cf;
}
/**
* Clone a Request while overriding headers, preserving metadata when possible.
*
* Some runtimes (Workers) allow `new Request(request, { headers })` which
* retains redirect/signal/cf data. Others (Node/undici across realms) can throw
* when cloning a foreign Request instance. In that case, fall back to building
* a RequestInit with best-effort metadata.
*/
function cloneRequestWithHeaders(request, headers) {
	let cloned;
	try {
		cloned = new Request(request, { headers });
	} catch {
		const init = {
			method: request.method,
			headers,
			body: request.body ?? void 0,
			redirect: request.redirect,
			signal: request.signal,
			integrity: request.integrity,
			cache: request.cache,
			mode: request.mode,
			credentials: request.credentials,
			referrer: request.referrer,
			referrerPolicy: request.referrerPolicy
		};
		if (request.body) init.duplex = "half";
		cloned = new Request(request.url, init);
	}
	const cf = getRequestCf(request);
	if (cf !== void 0) Object.defineProperty(cloned, "cf", {
		value: cf,
		enumerable: true,
		configurable: true
	});
	return cloned;
}
//#endregion
//#region node_modules/vinext/dist/utils/encode-cache-tag.js
/**
* Cache-tag canonicalisation.
*
* Tags can flow into HTTP headers (e.g. `x-next-cache-tags` on ISR responses,
* Cloudflare cache-tag headers, downstream Worker code) where Node's
* `validateHeaderValue` rejects any byte outside `\t\x20-\x7e` and crashes
* the response with `ERR_INVALID_CHAR`. Even on platforms with permissive
* header setters, divergence between storage form and wire form silently
* breaks invalidation when a `revalidateTag` call's tag does not byte-match
* the form that was stored.
*
* The fix is to apply this encoding at every public boundary so storage,
* comparison, and the wire all see the same ASCII-safe form. The fast-path
* returns the input unchanged for already-ASCII tags (the common case), so
* pre-encoded `%xx` input round-trips losslessly without `decodeURIComponent`
* mangling literal `%xx` characters.
*
* The replacement matches *runs* of out-of-class code units rather than each
* code unit individually so surrogate pairs (emoji, non-BMP characters) are
* handed to `encodeURIComponent` as a complete code point — a per-code-unit
* regex would split the pair and throw `URIError`.
*
* Mirrors Next.js's `packages/next/src/server/lib/encode-cache-tag.ts`
* (introduced in vercel/next.js#93601).
*/
var OUT_OF_CLASS_CHAR = /[^\t\x20-\x7e]/;
var OUT_OF_CLASS_RUN = /[^\t\x20-\x7e]+/g;
function encodeCacheTag(tag) {
	return OUT_OF_CLASS_CHAR.test(tag) ? tag.replace(OUT_OF_CLASS_RUN, (run) => encodeURIComponent(run)) : tag;
}
function encodeCacheTags(tags) {
	return tags.map(encodeCacheTag);
}
//#endregion
//#region node_modules/vinext/dist/shims/internal/work-unit-async-storage.js
/**
* Shim for next/dist/server/app-render/work-unit-async-storage.external
* and next/dist/client/components/request-async-storage.external
*
* Tracks the current rendering context type so that dynamic APIs
* (io, headers, cookies, etc.) can branch on whether they're
* inside a request, prerender, cache scope, or other context.
*
* Used by: @sentry/nextjs (runtime resolve for request context injection),
* io() for hanging-promise behavior during prerendering.
*/
var workUnitAsyncStorage = new AsyncLocalStorage$1();
//#endregion
//#region node_modules/vinext/dist/utils/cache-control-metadata.js
function readRecordField(ctx, field) {
	const value = ctx?.[field];
	return isUnknownRecord(value) ? value : void 0;
}
function readCacheControlNumberField(ctx, field) {
	const value = readRecordField(ctx, "cacheControl")?.[field] ?? ctx?.[field];
	return typeof value === "number" ? value : void 0;
}
//#endregion
//#region node_modules/vinext/dist/shims/cache.js
function readStringArrayField(ctx, field) {
	const value = ctx?.[field];
	if (!Array.isArray(value)) return [];
	return value.filter((item) => typeof item === "string");
}
var MemoryCacheHandler = class {
	store = /* @__PURE__ */ new Map();
	tagRevalidatedAt = /* @__PURE__ */ new Map();
	async get(key, _ctx) {
		const entry = this.store.get(key);
		if (!entry) return null;
		for (const tag of entry.tags) {
			const revalidatedAt = this.tagRevalidatedAt.get(tag);
			if (revalidatedAt && revalidatedAt >= entry.lastModified) {
				this.store.delete(key);
				return null;
			}
		}
		for (const tag of readStringArrayField(_ctx, "softTags")) {
			const revalidatedAt = this.tagRevalidatedAt.get(tag);
			if (revalidatedAt && revalidatedAt >= entry.lastModified) return null;
		}
		if (entry.expireAt !== null && Date.now() > entry.expireAt) {
			this.store.delete(key);
			return null;
		}
		if (entry.revalidateAt !== null && Date.now() > entry.revalidateAt) return {
			lastModified: entry.lastModified,
			value: entry.value,
			cacheState: "stale",
			cacheControl: entry.cacheControl
		};
		return {
			lastModified: entry.lastModified,
			value: entry.value,
			cacheControl: entry.cacheControl
		};
	}
	async set(key, data, ctx) {
		const tagSet = /* @__PURE__ */ new Set();
		if (data && "tags" in data && Array.isArray(data.tags)) for (const t of data.tags) tagSet.add(t);
		for (const t of readStringArrayField(ctx, "tags")) tagSet.add(t);
		const tags = [...tagSet];
		let effectiveRevalidate;
		let effectiveExpire;
		effectiveRevalidate = readCacheControlNumberField(ctx, "revalidate");
		effectiveExpire = readCacheControlNumberField(ctx, "expire");
		if (data && "revalidate" in data && typeof data.revalidate === "number") effectiveRevalidate = data.revalidate;
		if (effectiveRevalidate === 0) return;
		const now = Date.now();
		const revalidateAt = typeof effectiveRevalidate === "number" && effectiveRevalidate > 0 ? now + effectiveRevalidate * 1e3 : null;
		const expireAt = typeof effectiveExpire === "number" && effectiveExpire > 0 ? now + effectiveExpire * 1e3 : null;
		const cacheControl = typeof effectiveRevalidate === "number" ? effectiveExpire === void 0 ? { revalidate: effectiveRevalidate } : {
			revalidate: effectiveRevalidate,
			expire: effectiveExpire
		} : void 0;
		this.store.set(key, {
			value: data,
			tags,
			lastModified: now,
			revalidateAt,
			expireAt,
			cacheControl
		});
	}
	async revalidateTag(tags, _durations) {
		const tagList = Array.isArray(tags) ? tags : [tags];
		const now = Date.now();
		for (const tag of tagList) this.tagRevalidatedAt.set(tag, now);
	}
	resetRequestCache() {}
};
var _HANDLER_KEY = Symbol.for("vinext.cacheHandler");
var _gHandler = globalThis;
function _getActiveHandler() {
	return _gHandler[_HANDLER_KEY] ?? (_gHandler[_HANDLER_KEY] = new MemoryCacheHandler());
}
/**
* Get the active CacheHandler (for internal use or testing).
*/
function getCacheHandler() {
	return _getActiveHandler();
}
/**
* A fulfilled thenable that React can unwrap synchronously via `use()`
* without ever suspending. Reusing a single instance avoids allocating
* on every call — matching Next.js's browser/client implementation.
*
* @see https://github.com/vercel/next.js/blob/canary/packages/next/src/client/request/io.browser.ts
*/
var _resolvedIOPromise = Promise.resolve(void 0);
_resolvedIOPromise.status = "fulfilled";
_resolvedIOPromise.value = void 0;
var _FALLBACK_KEY$3 = Symbol.for("vinext.cache.fallback");
var _g$5 = globalThis;
var _cacheAls = getOrCreateAls("vinext.cache.als");
var _cacheFallbackState = _g$5[_FALLBACK_KEY$3] ??= {
	actionRevalidationKind: 0,
	requestScopedCacheLife: null,
	unstableCacheRevalidation: "foreground"
};
var ACTION_DID_NOT_REVALIDATE$1 = 0;
function _getCacheState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _cacheAls.getStore() ?? _cacheFallbackState;
}
function getAndClearActionRevalidationKind() {
	const state = _getCacheState();
	const kind = state.actionRevalidationKind;
	state.actionRevalidationKind = ACTION_DID_NOT_REVALIDATE$1;
	return kind;
}
/**
* Read the request-scoped cache life without clearing it. Prerender response
* shaping needs the metadata before the manifest writer consumes it after the
* body has been fully rendered.
* @internal
*/
function _peekRequestScopedCacheLife() {
	const config = _getCacheState().requestScopedCacheLife;
	return config === null ? null : { ...config };
}
/**
* Consume and reset the request-scoped cache life. Returns null if none was set.
* @internal
*/
function _consumeRequestScopedCacheLife() {
	const state = _getCacheState();
	const config = state.requestScopedCacheLife;
	state.requestScopedCacheLife = null;
	return config;
}
getOrCreateAls("vinext.unstableCache.als");
//#endregion
//#region node_modules/vinext/dist/shims/fetch-cache.js
/**
* Extended fetch() with Next.js caching semantics.
*
* Patches `globalThis.fetch` during server rendering to support:
*
*   fetch(url, { next: { revalidate: 60, tags: ['posts'] } })
*   fetch(url, { cache: 'force-cache' })
*   fetch(url, { cache: 'no-store' })
*
* Cached responses are stored via the pluggable CacheHandler, so
* revalidateTag() and revalidatePath() invalidate fetch-level caches.
*
* Usage (in server entry):
*   import { withFetchCache, cleanupFetchCache } from './fetch-cache';
*   const cleanup = withFetchCache();
*   try { ... render ... } finally { cleanup(); }
*
* Or use the async helper:
*   await runWithFetchCache(async () => { ... render ... });
*/
/**
* Headers excluded from the cache key. These are W3C trace context headers
* that can break request caching and deduplication.
* All other headers ARE included in the cache key, matching Next.js behavior.
*/
var HEADER_BLOCKLIST = ["traceparent", "tracestate"];
var CACHE_KEY_PREFIX = "v3";
var MAX_CACHE_KEY_BODY_BYTES = 1048576;
var BodyTooLargeForCacheKeyError = class extends Error {
	constructor() {
		super("Fetch body too large for cache key generation");
	}
};
var SkipCacheKeyGenerationError = class extends Error {
	constructor() {
		super("Fetch body could not be serialized for cache key generation");
	}
};
/**
* Collect all headers from the request, excluding the blocklist.
* Merges headers from both the Request object and the init object,
* with init taking precedence (matching fetch() spec behavior).
*/
function collectHeaders(input, init) {
	const merged = {};
	if (input instanceof Request && input.headers) input.headers.forEach((v, k) => {
		merged[k] = v;
	});
	if (init?.headers) (init.headers instanceof Headers ? init.headers : new Headers(init.headers)).forEach((v, k) => {
		merged[k] = v;
	});
	for (const blocked of HEADER_BLOCKLIST) delete merged[blocked];
	return merged;
}
/**
* Check whether a fetch request carries any per-user auth headers.
* Used for the safety bypass (skip caching when auth headers are present
* without an explicit cache opt-in).
*/
var AUTH_HEADERS = [
	"authorization",
	"cookie",
	"x-api-key"
];
function hasAuthHeaders(input, init) {
	const headers = collectHeaders(input, init);
	return AUTH_HEADERS.some((name) => name in headers);
}
async function serializeFormData(formData, pushBodyChunk, getTotalBodyBytes) {
	for (const [key, val] of formData.entries()) {
		if (typeof val === "string") {
			pushBodyChunk(JSON.stringify([key, {
				kind: "string",
				value: val
			}]));
			continue;
		}
		if (val.size > MAX_CACHE_KEY_BODY_BYTES || getTotalBodyBytes() + val.size > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(JSON.stringify([key, {
			kind: "file",
			name: val.name,
			type: val.type,
			value: await val.text()
		}]));
	}
}
function getParsedFormContentType(contentType) {
	const mediaType = contentType?.split(";")[0]?.trim().toLowerCase();
	if (mediaType === "multipart/form-data" || mediaType === "application/x-www-form-urlencoded") return mediaType;
}
function stripMultipartBoundary(contentType) {
	const [type, ...params] = contentType.split(";");
	const keptParams = params.map((param) => param.trim()).filter(Boolean).filter((param) => !/^boundary\s*=/i.test(param));
	const normalizedType = type.trim().toLowerCase();
	return keptParams.length > 0 ? `${normalizedType}; ${keptParams.join("; ")}` : normalizedType;
}
async function readRequestBodyChunksWithinLimit(request) {
	const contentLengthHeader = request.headers.get("content-length");
	if (contentLengthHeader) {
		const contentLength = Number(contentLengthHeader);
		if (Number.isFinite(contentLength) && contentLength > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
	}
	const requestClone = request.clone();
	const contentType = requestClone.headers.get("content-type") ?? void 0;
	const reader = requestClone.body?.getReader();
	if (!reader) return {
		chunks: [],
		contentType
	};
	const chunks = [];
	let totalBodyBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBodyBytes += value.byteLength;
			if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
			chunks.push(value);
		}
	} catch (err) {
		reader.cancel().catch(() => {});
		throw err;
	}
	return {
		chunks,
		contentType
	};
}
/**
* Serialize request body into string chunks for cache key inclusion.
* Handles all body types: string, Uint8Array, ReadableStream, FormData, Blob,
* and Request object bodies.
* Returns the serialized body chunks and optionally stashes the original body
* on init as `_ogBody` so it can still be used after stream consumption.
*/
async function serializeBody(input, init) {
	if (!init?.body && !(input instanceof Request && input.body)) return { bodyChunks: [] };
	const bodyChunks = [];
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();
	let totalBodyBytes = 0;
	let canonicalizedContentType;
	const pushBodyChunk = (chunk) => {
		totalBodyBytes += encoder.encode(chunk).byteLength;
		if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		bodyChunks.push(chunk);
	};
	const getTotalBodyBytes = () => totalBodyBytes;
	if (init?.body instanceof Uint8Array) {
		if (init.body.byteLength > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(decoder.decode(init.body));
		init._ogBody = init.body;
	} else if (init?.body && typeof init.body.getReader === "function") {
		const [bodyForHashing, bodyForFetch] = init.body.tee();
		init._ogBody = bodyForFetch;
		const reader = bodyForHashing.getReader();
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (typeof value === "string") pushBodyChunk(value);
				else {
					totalBodyBytes += value.byteLength;
					if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
					bodyChunks.push(decoder.decode(value, { stream: true }));
				}
			}
			const finalChunk = decoder.decode();
			if (finalChunk) pushBodyChunk(finalChunk);
		} catch (err) {
			await reader.cancel();
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
	} else if (init?.body instanceof URLSearchParams) {
		init._ogBody = init.body;
		pushBodyChunk(init.body.toString());
	} else if (init?.body && typeof init.body.keys === "function") {
		const formData = init.body;
		init._ogBody = init.body;
		await serializeFormData(formData, pushBodyChunk, getTotalBodyBytes);
	} else if (init?.body && typeof init.body.arrayBuffer === "function") {
		const blob = init.body;
		if (blob.size > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(await blob.text());
		const arrayBuffer = await blob.arrayBuffer();
		init._ogBody = new Blob([arrayBuffer], { type: blob.type });
	} else if (typeof init?.body === "string") {
		if (init.body.length > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(init.body);
		init._ogBody = init.body;
	} else if (input instanceof Request && input.body) {
		let chunks;
		let contentType;
		try {
			({chunks, contentType} = await readRequestBodyChunksWithinLimit(input));
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
		const formContentType = getParsedFormContentType(contentType);
		if (formContentType) try {
			await serializeFormData(await new Request(input.url, {
				method: input.method,
				headers: contentType ? { "content-type": contentType } : void 0,
				body: new Blob(chunks)
			}).formData(), pushBodyChunk, getTotalBodyBytes);
			canonicalizedContentType = formContentType === "multipart/form-data" && contentType ? stripMultipartBoundary(contentType) : void 0;
			return {
				bodyChunks,
				canonicalizedContentType
			};
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
		for (const chunk of chunks) pushBodyChunk(decoder.decode(chunk, { stream: true }));
		const finalChunk = decoder.decode();
		if (finalChunk) pushBodyChunk(finalChunk);
	}
	return {
		bodyChunks,
		canonicalizedContentType
	};
}
/**
* Generate a deterministic cache key from a fetch request.
*
* Matches Next.js behavior: the key is a SHA-256 hash of a JSON array
* containing URL, method, all headers (minus blocklist), all RequestInit
* options, and the serialized body.
*/
async function buildFetchCacheKey(input, init) {
	let url;
	let method = "GET";
	if (typeof input === "string") url = input;
	else if (input instanceof URL) url = input.toString();
	else {
		url = input.url;
		method = input.method || "GET";
	}
	if (init?.method) method = init.method;
	const headers = collectHeaders(input, init);
	const { bodyChunks, canonicalizedContentType } = await serializeBody(input, init);
	if (canonicalizedContentType) headers["content-type"] = canonicalizedContentType;
	const cacheString = JSON.stringify([
		CACHE_KEY_PREFIX,
		url,
		method,
		headers,
		init?.mode,
		init?.redirect,
		init?.credentials,
		init?.referrer,
		init?.referrerPolicy,
		init?.integrity,
		init?.cache,
		bodyChunks
	]);
	const buffer = new TextEncoder().encode(cacheString);
	const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
	return Array.prototype.map.call(new Uint8Array(hashBuffer), (b) => b.toString(16).padStart(2, "0")).join("");
}
var _PENDING_KEY = Symbol.for("vinext.fetchCache.pendingRefetches");
var _gPending = globalThis;
var pendingRefetches = _gPending[_PENDING_KEY] ??= /* @__PURE__ */ new Map();
var DEDUP_TIMEOUT_MS = 6e4;
var _ORIG_FETCH_KEY = Symbol.for("vinext.fetchCache.originalFetch");
var _gFetch = globalThis;
var originalFetch = _gFetch[_ORIG_FETCH_KEY] ??= globalThis.fetch;
var _FALLBACK_KEY$2 = Symbol.for("vinext.fetchCache.fallback");
var _g$4 = globalThis;
var _als$2 = getOrCreateAls("vinext.fetchCache.als");
var _noop = () => {};
var _responseBodyRegistry;
if (globalThis.FinalizationRegistry) _responseBodyRegistry = new FinalizationRegistry((weakRef) => {
	const stream = weakRef.deref();
	if (stream && !stream.locked) stream.cancel("Response object has been garbage collected").then(_noop, _noop);
});
var _fallbackState$2 = _g$4[_FALLBACK_KEY$2] ??= {
	currentRequestTags: [],
	currentFetchSoftTags: [],
	currentFetchCacheMode: null,
	dynamicFetchUrls: /* @__PURE__ */ new Set(),
	isFetchDedupeActive: false,
	currentFetchDedupeEntries: /* @__PURE__ */ new Map()
};
function _getState$1() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als$2.getStore() ?? _fallbackState$2;
}
function getFetchObservationUrl(input) {
	return typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
}
function recordDynamicFetchObservation(input) {
	_getState$1().dynamicFetchUrls.add(getFetchObservationUrl(input));
}
function peekDynamicFetchObservations() {
	return [..._getState$1().dynamicFetchUrls].sort();
}
function consumeDynamicFetchObservations() {
	const state = _getState$1();
	const observed = [...state.dynamicFetchUrls].sort();
	state.dynamicFetchUrls = /* @__PURE__ */ new Set();
	return observed;
}
/**
* Get tags collected during the current render pass.
* Useful for associating page-level cache entries with all the
* fetch tags used during rendering.
*/
function getCollectedFetchTags() {
	return [..._getState$1().currentRequestTags];
}
/**
* Set path-derived implicit tags for fetch cache reads in the current render.
*
* These are intentionally not persisted on fetch entries. They mirror Next.js
* `softTags`: `revalidatePath()` should make a fetch miss while rendering the
* affected route, without permanently coupling a shared fetch entry to one path.
*/
function setCurrentFetchSoftTags(tags) {
	_getState$1().currentFetchSoftTags = [...tags];
}
function setCurrentFetchCacheMode(mode) {
	_getState$1().currentFetchCacheMode = mode;
}
function isNoStoreFetch(cacheDirective, nextOpts) {
	return cacheDirective === "no-store" || cacheDirective === "no-cache" || nextOpts?.revalidate === false || nextOpts?.revalidate === 0;
}
function isCacheableFetch(cacheDirective, nextOpts) {
	return cacheDirective === "force-cache" || typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0;
}
function hasExplicitRevalidateValue(nextOpts) {
	return nextOpts?.revalidate !== void 0;
}
function resolveSegmentCacheDirective(cacheDirective, nextOpts, mode) {
	if (!mode || mode === "auto") return cacheDirective;
	switch (mode) {
		case "force-cache": return "force-cache";
		case "force-no-store": return "no-store";
		case "only-cache":
			if (isNoStoreFetch(cacheDirective, nextOpts)) throw new Error("Route segment config `fetchCache = \"only-cache\"` conflicts with no-store fetch.");
			return cacheDirective ?? "force-cache";
		case "only-no-store":
			if (isCacheableFetch(cacheDirective, nextOpts)) throw new Error("Route segment config `fetchCache = \"only-no-store\"` conflicts with cacheable fetch.");
			return cacheDirective ?? "no-store";
		case "default-cache": return cacheDirective ?? (hasExplicitRevalidateValue(nextOpts) ? void 0 : "force-cache");
		case "default-no-store": return cacheDirective ?? (hasExplicitRevalidateValue(nextOpts) ? void 0 : "no-store");
	}
	return cacheDirective;
}
function getFetchCacheDirective(input, init) {
	if (init?.cache !== void 0) return init.cache;
	if (!(input instanceof Request) || input.cache === "default") return;
	return input.cache;
}
function buildFetchDedupeKey(request) {
	const filteredHeaders = Array.from(request.headers.entries()).filter(([key]) => !HEADER_BLOCKLIST.includes(key.toLowerCase()));
	return JSON.stringify([
		request.method,
		filteredHeaders,
		request.mode,
		request.redirect,
		request.credentials,
		request.referrer,
		request.referrerPolicy,
		request.integrity
	]);
}
function createFetchDedupeCandidate(input, init) {
	if (init?.signal) return null;
	const method = init?.method?.toUpperCase();
	if (method && method !== "GET" && method !== "HEAD") return null;
	if (init?.keepalive) return null;
	const request = typeof input === "string" || input instanceof URL ? new Request(input, init) : input;
	if (request.method !== "GET" && request.method !== "HEAD" || request.keepalive) return null;
	return {
		url: request.url,
		key: buildFetchDedupeKey(request)
	};
}
function buildDedupeClone(body, source) {
	const cloned = new Response(body, {
		status: source.status,
		statusText: source.statusText,
		headers: new Headers(source.headers)
	});
	Object.defineProperty(cloned, "url", {
		value: source.url,
		configurable: true,
		enumerable: true,
		writable: false
	});
	if (_responseBodyRegistry && cloned.body) _responseBodyRegistry.register(cloned, new WeakRef(cloned.body));
	return cloned;
}
function cloneDedupeResponse(response) {
	if (!response.body) return [buildDedupeClone(null, response), buildDedupeClone(null, response)];
	const [body1, body2] = response.body.tee();
	return [buildDedupeClone(body1, response), buildDedupeClone(body2, response)];
}
function dedupeFetch(input, init) {
	const state = _getState$1();
	if (!state.isFetchDedupeActive) return originalFetch(input, init);
	const candidate = createFetchDedupeCandidate(input, init);
	if (!candidate) return originalFetch(input, init);
	const entriesByUrl = state.currentFetchDedupeEntries;
	let entries = entriesByUrl.get(candidate.url);
	if (!entries) {
		entries = [];
		entriesByUrl.set(candidate.url, entries);
	}
	for (const entry of entries) {
		if (entry.key !== candidate.key) continue;
		return entry.promise.then(() => {
			if (!entry.response) throw new Error("[vinext] Missing deduped fetch response");
			const [responseForCaller, responseForFutureCaller] = cloneDedupeResponse(entry.response);
			entry.response = responseForFutureCaller;
			return responseForCaller;
		});
	}
	const promise = originalFetch(input, init);
	const entry = {
		key: candidate.key,
		promise,
		response: null
	};
	entries.push(entry);
	return promise.then((response) => {
		const [responseForCaller, responseForFutureCaller] = cloneDedupeResponse(response);
		entry.response = responseForFutureCaller;
		return responseForCaller;
	}, (err) => {
		const idx = entries.indexOf(entry);
		if (idx !== -1) entries.splice(idx, 1);
		throw err;
	});
}
/**
* Create a patched fetch function with Next.js caching semantics.
*
* The patched fetch:
* 1. Checks `cache` and `next` options to determine caching behavior
* 2. On cache hit, returns the cached response without hitting the network
* 3. On cache miss, fetches from network, stores in cache, returns response
* 4. Respects `next.revalidate` for TTL-based revalidation
* 5. Respects `next.tags` for tag-based invalidation via revalidateTag()
*/
function createPatchedFetch() {
	return async function patchedFetch(input, init) {
		const nextOpts = init?.next;
		const cacheDirective = resolveSegmentCacheDirective(getFetchCacheDirective(input, init), nextOpts, _getState$1().currentFetchCacheMode);
		if (!nextOpts && !cacheDirective) {
			recordDynamicFetchObservation(input);
			return dedupeFetch(input, init);
		}
		if (cacheDirective === "no-store" || cacheDirective === "no-cache" || nextOpts?.revalidate === false || nextOpts?.revalidate === 0) {
			const cleanInit = stripNextFromInit(init, cacheDirective);
			recordDynamicFetchObservation(input);
			return dedupeFetch(input, cleanInit);
		}
		if (!(cacheDirective === "force-cache" || typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0) && hasAuthHeaders(input, init)) {
			const cleanInit = stripNextFromInit(init, cacheDirective);
			recordDynamicFetchObservation(input);
			return dedupeFetch(input, cleanInit);
		}
		let revalidateSeconds;
		if (cacheDirective === "force-cache") revalidateSeconds = nextOpts?.revalidate && typeof nextOpts.revalidate === "number" ? nextOpts.revalidate : 31536e3;
		else if (typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0) revalidateSeconds = nextOpts.revalidate;
		else if (nextOpts?.tags && nextOpts.tags.length > 0) revalidateSeconds = 31536e3;
		else {
			const cleanInit = stripNextFromInit(init, cacheDirective);
			recordDynamicFetchObservation(input);
			return dedupeFetch(input, cleanInit);
		}
		const tags = encodeCacheTags(nextOpts?.tags ?? []);
		const softTags = _getState$1().currentFetchSoftTags;
		let fetchInit = stripNextFromInit(init, cacheDirective);
		let cacheKey;
		try {
			cacheKey = await buildFetchCacheKey(input, fetchInit);
			fetchInit = stripNextFromInit(fetchInit, cacheDirective);
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError || err instanceof SkipCacheKeyGenerationError) {
				fetchInit = stripNextFromInit(fetchInit, cacheDirective);
				recordDynamicFetchObservation(input);
				return dedupeFetch(input, fetchInit);
			}
			throw err;
		}
		const handler = getCacheHandler();
		const reqTags = _getState$1().currentRequestTags;
		if (tags.length > 0) {
			for (const tag of tags) if (!reqTags.includes(tag)) reqTags.push(tag);
		}
		try {
			const cached = await handler.get(cacheKey, {
				kind: "FETCH",
				tags,
				softTags
			});
			if (cached?.value && cached.value.kind === "FETCH" && cached.cacheState !== "stale") {
				const cachedData = cached.value.data;
				return new Response(cachedData.body, {
					status: cachedData.status ?? 200,
					headers: cachedData.headers
				});
			}
			if (cached?.value && cached.value.kind === "FETCH" && cached.cacheState === "stale") {
				const staleData = cached.value.data;
				if (!pendingRefetches.has(cacheKey)) {
					const refetchPromise = originalFetch(input, fetchInit).then(async (freshResp) => {
						if (freshResp.status !== 200) return;
						const freshBody = await freshResp.text();
						const freshHeaders = {};
						freshResp.headers.forEach((v, k) => {
							if (k.toLowerCase() === "set-cookie") return;
							freshHeaders[k] = v;
						});
						const freshValue = {
							kind: "FETCH",
							data: {
								headers: freshHeaders,
								body: freshBody,
								url: typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url,
								status: freshResp.status
							},
							tags,
							revalidate: revalidateSeconds
						};
						await handler.set(cacheKey, freshValue, {
							fetchCache: true,
							tags,
							revalidate: revalidateSeconds
						});
					}).catch((err) => {
						const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
						console.error(`[vinext] fetch cache background revalidation failed for ${url} (key=${cacheKey.slice(0, 12)}...):`, err);
					}).finally(() => {
						if (pendingRefetches.get(cacheKey) === refetchPromise) pendingRefetches.delete(cacheKey);
						clearTimeout(timeoutId);
					});
					pendingRefetches.set(cacheKey, refetchPromise);
					const timeoutId = setTimeout(() => {
						if (pendingRefetches.get(cacheKey) === refetchPromise) pendingRefetches.delete(cacheKey);
					}, DEDUP_TIMEOUT_MS);
					getRequestExecutionContext()?.waitUntil(refetchPromise);
				}
				return new Response(staleData.body, {
					status: staleData.status ?? 200,
					headers: staleData.headers
				});
			}
		} catch (cacheErr) {
			console.error("[vinext] fetch cache read error:", cacheErr);
		}
		const response = await dedupeFetch(input, fetchInit);
		if (response.status === 200) {
			const cloned = response.clone();
			const body = await cloned.text();
			const headers = {};
			cloned.headers.forEach((v, k) => {
				if (k.toLowerCase() === "set-cookie") return;
				headers[k] = v;
			});
			const cacheValue = {
				kind: "FETCH",
				data: {
					headers,
					body,
					url: typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url,
					status: cloned.status
				},
				tags,
				revalidate: revalidateSeconds
			};
			handler.set(cacheKey, cacheValue, {
				fetchCache: true,
				tags,
				revalidate: revalidateSeconds
			}).catch((err) => {
				console.error("[vinext] fetch cache write error:", err);
			});
		}
		return response;
	};
}
/**
* Strip the `next` property from RequestInit before passing to real fetch.
* The `next` property is not a standard fetch option and would cause warnings
* in some environments.
*/
function stripNextFromInit(init, cacheOverride) {
	if (!init) return cacheOverride === void 0 ? void 0 : { cache: cacheOverride };
	const { next: _next, _ogBody, ...rest } = init;
	if (cacheOverride !== void 0) rest.cache = cacheOverride;
	if (_ogBody !== void 0) rest.body = _ogBody;
	return Object.keys(rest).length > 0 ? rest : void 0;
}
var _PATCH_KEY = Symbol.for("vinext.fetchCache.patchInstalled");
function _ensurePatchInstalled() {
	if (_g$4[_PATCH_KEY]) return;
	_g$4[_PATCH_KEY] = true;
	globalThis.fetch = createPatchedFetch();
}
function runWithFetchDedupe(fn) {
	_ensurePatchInstalled();
	const state = _getState$1();
	if (state.isFetchDedupeActive) return fn();
	if (isInsideUnifiedScope()) return runWithUnifiedStateMutation((uCtx) => {
		uCtx.isFetchDedupeActive = true;
		uCtx.currentFetchDedupeEntries = /* @__PURE__ */ new Map();
	}, fn);
	return _als$2.run({
		...state,
		isFetchDedupeActive: true,
		currentFetchDedupeEntries: /* @__PURE__ */ new Map()
	}, fn);
}
/**
* Install the patched fetch without creating a standalone ALS scope.
*
* `runWithFetchCache()` is the standalone helper: it installs the patch and
* creates an isolated per-request tag store. The unified request context owns
* that isolation itself via `currentRequestTags`, so callers inside
* `runWithRequestContext()` only need the process-global fetch monkey-patch.
*/
function ensureFetchPatch() {
	_ensurePatchInstalled();
}
//#endregion
//#region node_modules/vinext/dist/server/csp.js
var ESCAPE_REGEX = /[&><\u2028\u2029]/;
function matchesDirectiveName(directive, name) {
	return directive === name || directive.startsWith(`${name} `);
}
function getScriptNonceFromHeader(cspHeaderValue) {
	const directives = cspHeaderValue.split(";").map((directive) => directive.trim());
	const directive = directives.find((value) => matchesDirectiveName(value, "script-src")) ?? directives.find((value) => matchesDirectiveName(value, "default-src"));
	if (!directive) return;
	const nonce = directive.split(" ").slice(1).map((source) => source.trim()).find((source) => source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))?.slice(7, -1);
	if (!nonce) return;
	if (ESCAPE_REGEX.test(nonce)) throw new Error("Nonce value from Content-Security-Policy contained HTML escape characters.\nLearn more: https://nextjs.org/docs/messages/nonce-contained-invalid-characters");
	return nonce;
}
function getScriptNonceFromHeaders(headers) {
	const csp = headers?.get("content-security-policy") ?? headers?.get("content-security-policy-report-only");
	if (!csp) return;
	return getScriptNonceFromHeader(csp);
}
function getScriptNonceFromHeaderSources(...headersList) {
	for (const headers of headersList) {
		const nonce = getScriptNonceFromHeaders(headers);
		if (nonce) return nonce;
	}
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
//#endregion
//#region node_modules/vinext/dist/server/pages-i18n.js
/**
* Prepend the default locale prefix to a pathname when i18n is configured and
* the path does not already carry a locale prefix. Mirrors Next.js's
* server-side path normalisation in `resolve-routes.ts` (lines ~250-263):
*
*   if (!initialLocaleResult.detectedLocale && !pathname.startsWith('/_next/')) {
*     parsedUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
*   }
*
* Run this **before** matching against `next.config.js` redirects/rewrites
* (which are emitted by `applyLocaleToRoutes` in locale-prefixed forms) so
* that requests arriving without a locale prefix still match those rules.
*
* Skips internal paths that Next.js leaves alone:
*   - `/_next/*` (build assets, prerender manifests, image optimisation)
*   - `/__vinext/*` (vinext-internal endpoints)
*
* Returns the input unchanged when i18n is not configured or when the path
* already starts with one of the configured locales. The host-based default
* locale (i18n.domains[].defaultLocale) is preferred over the global default
* when supplied, matching Next.js's `domainLocale.defaultLocale` branch.
*
* Item 4 of issue #1336: without this normalisation, requests like
* `/to-sv` (default locale = en) against a rule `source: '/:locale/to-sv'`
* with `locale: false` do not match because there is no segment for
* `:locale`. After normalisation the request looks like `/en/to-sv` and
* the rule matches with `:locale=en`.
*
* Ported from Next.js: packages/next/src/server/lib/router-utils/resolve-routes.ts
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/lib/router-utils/resolve-routes.ts
*/
function normalizeDefaultLocalePathname(pathname, i18n, options = {}) {
	if (!i18n) return pathname;
	if (pathname.startsWith("/_next/") || pathname.startsWith("/__vinext/")) return pathname;
	const parts = pathname.split("/", 3);
	if (parts[1] && i18n.locales.includes(parts[1])) return pathname;
	const defaultLocale = detectDomainLocale(i18n.domains, options.hostname ?? void 0)?.defaultLocale ?? i18n.defaultLocale;
	if (pathname === "/") return `/${defaultLocale}`;
	return `/${defaultLocale}${pathname}`;
}
//#endregion
//#region node_modules/vinext/dist/server/middleware-response-headers.js
var ADDITIVE_RESPONSE_HEADER_NAMES = /* @__PURE__ */ new Set(["set-cookie", "vary"]);
function mergeVaryHeader(target, value) {
	const existing = target.get("Vary");
	const tokens = (existing ? `${existing}, ${value}` : value).split(",").map((token) => token.trim()).filter((token) => token.length > 0);
	if (tokens.some((token) => token === "*")) {
		target.set("Vary", "*");
		return;
	}
	const seen = /* @__PURE__ */ new Set();
	const merged = [];
	for (const token of tokens) {
		const normalized = token.toLowerCase();
		if (seen.has(normalized)) continue;
		seen.add(normalized);
		merged.push(token);
	}
	target.set("Vary", merged.join(", "));
}
/**
* Merge middleware response headers into a target Headers object.
*
* Set-Cookie and Vary are accumulated (append) since multiple sources can
* contribute values. All other headers use set() so middleware owns singular
* response headers like Cache-Control.
*/
function mergeMiddlewareResponseHeaders(target, middlewareHeaders) {
	if (!middlewareHeaders) return;
	for (const [key, value] of middlewareHeaders) {
		if (key.toLowerCase() === "vary") {
			mergeVaryHeader(target, value);
			continue;
		}
		if (ADDITIVE_RESPONSE_HEADER_NAMES.has(key.toLowerCase())) {
			target.append(key, value);
			continue;
		}
		target.set(key, value);
	}
}
//#endregion
//#region node_modules/vinext/dist/shims/server.js
var NextRequest = class extends Request {
	_nextUrl;
	_url;
	_cookies;
	constructor(input, init) {
		const { nextConfig: _nextConfig, ...requestInit } = init ?? {};
		if (input instanceof Request) {
			const requestInput = requestInit.body === void 0 && input.body && !input.bodyUsed ? input.clone() : input;
			super(requestInput, requestInit);
		} else super(input, requestInit);
		const url = typeof input === "string" ? new URL(input, "http://localhost") : input instanceof URL ? input : new URL(input.url, "http://localhost");
		const urlConfig = _nextConfig ? {
			basePath: _nextConfig.basePath,
			nextConfig: {
				i18n: _nextConfig.i18n,
				trailingSlash: _nextConfig.trailingSlash
			}
		} : void 0;
		this._nextUrl = new NextURL(url, void 0, urlConfig);
		this._url = process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url.toString() : this._nextUrl.toString();
		this._cookies = new RequestCookies(this.headers);
	}
	get nextUrl() {
		return this._nextUrl;
	}
	get url() {
		return this._url;
	}
	get cookies() {
		return this._cookies;
	}
	/**
	* Client IP address. Prefers Cloudflare's trusted CF-Connecting-IP header
	* over the spoofable X-Forwarded-For. Returns undefined if unavailable.
	*/
	get ip() {
		return this.headers.get("cf-connecting-ip") ?? this.headers.get("x-real-ip") ?? this.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? void 0;
	}
	/**
	* Geolocation data. Platform-dependent (e.g., Cloudflare, Vercel).
	* Returns undefined if not available.
	*/
	get geo() {
		const country = this.headers.get("cf-ipcountry") ?? this.headers.get("x-vercel-ip-country") ?? void 0;
		if (!country) return void 0;
		return {
			country,
			city: this.headers.get("cf-ipcity") ?? this.headers.get("x-vercel-ip-city") ?? void 0,
			region: this.headers.get("cf-region") ?? this.headers.get("x-vercel-ip-country-region") ?? void 0,
			latitude: this.headers.get("cf-iplatitude") ?? this.headers.get("x-vercel-ip-latitude") ?? void 0,
			longitude: this.headers.get("cf-iplongitude") ?? this.headers.get("x-vercel-ip-longitude") ?? void 0
		};
	}
	/**
	* The build ID of the Next.js application.
	* Delegates to `nextUrl.buildId` to match Next.js API surface.
	* Can be used in middleware to detect deployment skew between client and server.
	*/
	get buildId() {
		return this._nextUrl.buildId;
	}
};
var NextURL = class NextURL {
	/** Internal URL stores the pathname WITHOUT basePath or locale prefix. */
	_url;
	_basePath;
	_trailingSlash;
	_locale;
	_defaultLocale;
	_locales;
	constructor(input, base, config) {
		this._url = new URL(input.toString(), base);
		this._basePath = config?.basePath ?? "";
		this._trailingSlash = config?.nextConfig?.trailingSlash ?? false;
		this._stripBasePath();
		const i18n = config?.nextConfig?.i18n;
		if (i18n) {
			this._locales = [...i18n.locales];
			this._defaultLocale = i18n.defaultLocale;
			this._analyzeLocale(this._locales);
		}
	}
	/** Strip basePath prefix from the internal pathname. */
	_stripBasePath() {
		if (!this._basePath) return;
		this._url.pathname = stripBasePath(this._url.pathname, this._basePath);
	}
	/** Extract locale from pathname, stripping it from the internal URL. */
	_analyzeLocale(locales) {
		const segments = this._url.pathname.split("/");
		const candidate = segments[1]?.toLowerCase();
		const match = locales.find((l) => l.toLowerCase() === candidate);
		if (match) {
			this._locale = match;
			this._url.pathname = "/" + segments.slice(2).join("/");
		} else this._locale = this._defaultLocale;
	}
	/**
	* Reconstruct the full pathname with basePath + locale prefix and apply
	* the configured trailingSlash policy.
	* Mirrors Next.js's internal formatNextPathnameInfo().
	*/
	_formatPathname() {
		let prefix = this._basePath;
		if (this._locale && this._locale !== this._defaultLocale) prefix += "/" + this._locale;
		const inner = this._url.pathname;
		const composed = !prefix ? inner : inner === "/" ? prefix : prefix + inner;
		return this._applyTrailingSlash(composed);
	}
	/**
	* Apply the configured trailingSlash policy to a composed pathname. Matches
	* Next.js's `formatNextPathnameInfo`: when `trailingSlash` is true, add a
	* trailing slash unless the path is empty/root; when false, strip a trailing
	* slash unless the path is empty/root.
	*/
	_applyTrailingSlash(pathname) {
		if (pathname === "" || pathname === "/") return pathname;
		if (this._trailingSlash) return pathname.endsWith("/") ? pathname : pathname + "/";
		return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
	}
	get href() {
		const formatted = this._formatPathname();
		if (formatted === this._url.pathname) return this._url.href;
		const { href, pathname, search, hash } = this._url;
		const baseEnd = href.length - pathname.length - search.length - hash.length;
		return href.slice(0, baseEnd) + formatted + search + hash;
	}
	set href(value) {
		this._url.href = value;
		this._stripBasePath();
		if (this._locales) this._analyzeLocale(this._locales);
	}
	get origin() {
		return this._url.origin;
	}
	get protocol() {
		return this._url.protocol;
	}
	set protocol(value) {
		this._url.protocol = value;
	}
	get username() {
		return this._url.username;
	}
	set username(value) {
		this._url.username = value;
	}
	get password() {
		return this._url.password;
	}
	set password(value) {
		this._url.password = value;
	}
	get host() {
		return this._url.host;
	}
	set host(value) {
		this._url.host = value;
	}
	get hostname() {
		return this._url.hostname;
	}
	set hostname(value) {
		this._url.hostname = value;
	}
	get port() {
		return this._url.port;
	}
	set port(value) {
		this._url.port = value;
	}
	/** Returns the pathname WITHOUT basePath or locale prefix. */
	get pathname() {
		return this._url.pathname;
	}
	set pathname(value) {
		this._url.pathname = value;
	}
	get search() {
		return this._url.search;
	}
	set search(value) {
		this._url.search = value;
	}
	get searchParams() {
		return this._url.searchParams;
	}
	get hash() {
		return this._url.hash;
	}
	set hash(value) {
		this._url.hash = value;
	}
	get basePath() {
		return this._basePath;
	}
	set basePath(value) {
		this._basePath = value === "" ? "" : value.startsWith("/") ? value : "/" + value;
	}
	get locale() {
		return this._locale ?? "";
	}
	set locale(value) {
		if (this._locales) {
			if (!value) {
				this._locale = this._defaultLocale;
				return;
			}
			if (!this._locales.includes(value)) throw new TypeError(`The locale "${value}" is not in the configured locales: ${this._locales.join(", ")}`);
		}
		this._locale = this._locales ? value : this._locale;
	}
	get defaultLocale() {
		return this._defaultLocale;
	}
	get locales() {
		return this._locales ? [...this._locales] : void 0;
	}
	clone() {
		const nextConfig = {};
		if (this._locales) nextConfig.i18n = {
			locales: [...this._locales],
			defaultLocale: this._defaultLocale
		};
		if (this._trailingSlash) nextConfig.trailingSlash = true;
		const config = {
			basePath: this._basePath,
			nextConfig: Object.keys(nextConfig).length > 0 ? nextConfig : void 0
		};
		return new NextURL(this.href, void 0, config);
	}
	toString() {
		return this.href;
	}
	/**
	* The build ID of the Next.js application.
	* Set from `generateBuildId` in next.config.js, or a random UUID if not configured.
	* Can be used in middleware to detect deployment skew between client and server.
	* Matches the Next.js API: `request.nextUrl.buildId`.
	*/
	get buildId() {
		return "270619c0-7a6a-443e-8299-4c81ed348c94";
	}
};
var RequestCookies = class {
	_headers;
	_parsed;
	constructor(headers) {
		this._headers = headers;
		this._parsed = parseCookieHeader(headers.get("cookie") ?? "");
	}
	get(name) {
		const value = this._parsed.get(name);
		return value !== void 0 ? {
			name,
			value
		} : void 0;
	}
	getAll(nameOrOptions) {
		const name = typeof nameOrOptions === "string" ? nameOrOptions : nameOrOptions?.name;
		return [...this._parsed.entries()].filter(([cookieName]) => name === void 0 || cookieName === name).map(([cookieName, value]) => ({
			name: cookieName,
			value
		}));
	}
	has(name) {
		return this._parsed.has(name);
	}
	set(nameOrOptions, value) {
		let cookieName;
		let cookieValue;
		if (typeof nameOrOptions === "string") {
			cookieName = nameOrOptions;
			cookieValue = value ?? "";
		} else {
			cookieName = nameOrOptions.name;
			cookieValue = nameOrOptions.value;
		}
		validateCookieName(cookieName);
		this._parsed.set(cookieName, cookieValue);
		this._syncHeader();
		return this;
	}
	delete(names) {
		if (Array.isArray(names)) {
			const results = names.map((name) => {
				validateCookieName(name);
				return this._parsed.delete(name);
			});
			this._syncHeader();
			return results;
		}
		validateCookieName(names);
		const result = this._parsed.delete(names);
		this._syncHeader();
		return result;
	}
	clear() {
		this._parsed.clear();
		this._syncHeader();
		return this;
	}
	get size() {
		return this._parsed.size;
	}
	toString() {
		return this._serialize();
	}
	_serialize() {
		return [...this._parsed.entries()].map(([n, v]) => `${n}=${encodeURIComponent(v)}`).join("; ");
	}
	_syncHeader() {
		if (this._parsed.size === 0) this._headers.delete("cookie");
		else this._headers.set("cookie", this._serialize());
	}
	[Symbol.iterator]() {
		return this.getAll().map((c) => [c.name, c])[Symbol.iterator]();
	}
};
var ReadonlyRequestCookiesError = class ReadonlyRequestCookiesError extends Error {
	constructor() {
		super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
	}
	static callable() {
		throw new ReadonlyRequestCookiesError();
	}
};
var REQUEST_HEADERS_MUTATING_METHODS = /* @__PURE__ */ new Set([
	"set",
	"delete",
	"append"
]);
var ReadonlyRequestHeadersError = class ReadonlyRequestHeadersError extends Error {
	constructor() {
		super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
	}
	static callable() {
		throw new ReadonlyRequestHeadersError();
	}
};
function sealRequestHeaders(headers) {
	return new Proxy(headers, { get(target, prop) {
		if (typeof prop === "string" && REQUEST_HEADERS_MUTATING_METHODS.has(prop)) return ReadonlyRequestHeadersError.callable;
		const value = Reflect.get(target, prop, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
}
function sealRequestCookies(cookies) {
	return new Proxy(cookies, { get(target, prop) {
		if (prop === "set" || prop === "delete" || prop === "clear") return ReadonlyRequestCookiesError.callable;
		const value = Reflect.get(target, prop, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
}
/**
* Minimal NextFetchEvent — extends FetchEvent where available,
* otherwise provides the waitUntil pattern standalone.
*/
var NextFetchEvent = class {
	sourcePage;
	_waitUntilPromises = [];
	constructor(params) {
		this.sourcePage = params.page;
	}
	waitUntil(promise) {
		this._waitUntilPromises.push(promise);
	}
	get waitUntilPromises() {
		return this._waitUntilPromises;
	}
	/** Drain all waitUntil promises. Returns a single promise that settles when all are done. */
	drainWaitUntil() {
		return Promise.allSettled(this._waitUntilPromises);
	}
};
globalThis.URLPattern;
//#endregion
//#region node_modules/vinext/dist/server/middleware-matcher.js
var EMPTY_MIDDLEWARE_REQUEST_CONTEXT = {
	headers: new Headers(),
	cookies: {},
	query: new URLSearchParams(),
	host: ""
};
var _mwPatternCache = /* @__PURE__ */ new Map();
function matchesMiddleware(pathname, matcher, request, i18nConfig) {
	if (!matcher) return true;
	if (typeof matcher === "string") return matchMatcherPattern(pathname, matcher, i18nConfig);
	if (!Array.isArray(matcher)) return false;
	const requestContext = request ? requestContextFromRequest(request) : EMPTY_MIDDLEWARE_REQUEST_CONTEXT;
	for (const m of matcher) {
		if (typeof m === "string") {
			if (matchMatcherPattern(pathname, m, i18nConfig)) return true;
			continue;
		}
		if (isValidMiddlewareMatcherObject(m)) {
			if (!matchObjectMatcher(pathname, m, i18nConfig)) continue;
			if (!checkHasConditions(m.has, m.missing, requestContext)) continue;
			return true;
		}
	}
	return false;
}
function isValidMiddlewareMatcherObject(value) {
	if (!value || typeof value !== "object" || Array.isArray(value)) return false;
	if (!("source" in value) || typeof value.source !== "string") return false;
	for (const key of Object.keys(value)) if (key !== "source" && key !== "locale" && key !== "has" && key !== "missing") return false;
	if ("locale" in value && value.locale !== void 0 && value.locale !== false) return false;
	if ("has" in value && value.has !== void 0 && !Array.isArray(value.has)) return false;
	if ("missing" in value && value.missing !== void 0 && !Array.isArray(value.missing)) return false;
	return true;
}
function matchMatcherPattern(pathname, pattern, i18nConfig) {
	if (!i18nConfig) return matchPattern(pathname, pattern);
	return matchPattern(stripLocalePrefix(pathname, i18nConfig) ?? pathname, pattern);
}
function matchObjectMatcher(pathname, matcher, i18nConfig) {
	return matcher.locale === false ? matchPattern(pathname, matcher.source) : matchMatcherPattern(pathname, matcher.source, i18nConfig);
}
function stripLocalePrefix(pathname, i18nConfig) {
	if (pathname === "/") return null;
	const segments = pathname.split("/");
	const firstSegment = segments[1];
	if (!firstSegment || !i18nConfig.locales.includes(firstSegment)) return null;
	return removeTrailingSlash("/" + segments.slice(2).join("/"));
}
function matchPattern(pathname, pattern) {
	let cached = _mwPatternCache.get(pattern);
	if (cached === void 0) {
		cached = compileMatcherPattern(pattern);
		_mwPatternCache.set(pattern, cached);
	}
	if (cached === null) return pathname === pattern;
	return cached.test(pathname);
}
function extractConstraint(str, re) {
	if (str[re.lastIndex] !== "(") return null;
	const start = re.lastIndex + 1;
	let depth = 1;
	let i = start;
	while (i < str.length && depth > 0) {
		if (str[i] === "(") depth++;
		else if (str[i] === ")") depth--;
		i++;
	}
	if (depth !== 0) return null;
	re.lastIndex = i;
	return str.slice(start, i - 1);
}
function compileMatcherPattern(pattern) {
	const hasConstraints = /:[\w-]+[*+]?\(/.test(pattern);
	if (!hasConstraints && (pattern.includes("(") || pattern.includes("\\"))) return safeRegExp("^" + pattern + "$");
	let regexStr = "";
	const tokenRe = /\/:([\w-]+)\*|\/:([\w-]+)\+|:([\w-]+)|[.]|[^/:.]+|./g;
	let tok;
	while ((tok = tokenRe.exec(pattern)) !== null) if (tok[1] !== void 0) {
		const constraint = hasConstraints ? extractConstraint(pattern, tokenRe) : null;
		regexStr += constraint !== null ? `(?:/(${constraint}))?` : "(?:/.*)?";
	} else if (tok[2] !== void 0) {
		const constraint = hasConstraints ? extractConstraint(pattern, tokenRe) : null;
		regexStr += constraint !== null ? `(?:/(${constraint}))` : "(?:/.+)";
	} else if (tok[3] !== void 0) {
		const constraint = hasConstraints ? extractConstraint(pattern, tokenRe) : null;
		const isOptional = pattern[tokenRe.lastIndex] === "?";
		if (isOptional) tokenRe.lastIndex += 1;
		const group = constraint !== null ? `(${constraint})` : "([^/]+)";
		if (isOptional && regexStr.endsWith("/")) regexStr = regexStr.slice(0, -1) + `(?:/${group})?`;
		else if (isOptional) regexStr += `${group}?`;
		else regexStr += group;
	} else if (tok[0] === ".") regexStr += "\\.";
	else regexStr += tok[0];
	return safeRegExp("^" + regexStr + "$");
}
//#endregion
//#region node_modules/vinext/dist/utils/query.js
/**
* Merge the original request URL's query parameters into a rewrite-target URL.
*
* Matches Next.js behavior: original query params are preserved on rewrites,
* but the rewrite-target URL wins on key conflicts. Ported from Next.js
* `Object.assign(parsedUrl.query, rewrittenParsedUrl.query)` in
* route-modules/route-module.ts.
*
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/route-modules/route-module.ts
*
* The fragment from `rewriteUrl` is preserved (origin/pathname always come
* from the rewrite target). Absolute rewrite URLs are returned unchanged when
* the origin differs from the original — external rewrites are proxied
* elsewhere and shouldn't have local query params smuggled in.
*/
function mergeRewriteQuery(originalUrl, rewriteUrl) {
	const originalSearchIndex = originalUrl.indexOf("?");
	if (originalSearchIndex === -1) return rewriteUrl;
	const originalQuery = originalUrl.slice(originalSearchIndex + 1).split("#")[0];
	if (!originalQuery) return rewriteUrl;
	const hashIndex = rewriteUrl.indexOf("#");
	const beforeHash = hashIndex === -1 ? rewriteUrl : rewriteUrl.slice(0, hashIndex);
	const hash = hashIndex === -1 ? "" : rewriteUrl.slice(hashIndex);
	const queryIndex = beforeHash.indexOf("?");
	const base = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex);
	const rewriteQuery = queryIndex === -1 ? "" : beforeHash.slice(queryIndex + 1);
	const merged = new URLSearchParams(originalQuery);
	const rewriteParams = new URLSearchParams(rewriteQuery);
	const rewriteKeys = /* @__PURE__ */ new Set();
	for (const key of rewriteParams.keys()) rewriteKeys.add(key);
	for (const key of rewriteKeys) merged.delete(key);
	for (const [key, value] of rewriteParams) merged.append(key, value);
	const search = merged.toString();
	return `${base}${search ? `?${search}` : ""}${hash}`;
}
//#endregion
//#region node_modules/vinext/dist/server/middleware-runtime.js
function isMiddlewareHandler(value) {
	return typeof value === "function";
}
function isMiddlewareConfigExport(value) {
	return !!value && typeof value === "object";
}
function middlewareFileLabel(isProxy) {
	return isProxy ? "Proxy" : "Middleware";
}
function middlewareExpectedExport(isProxy) {
	return isProxy ? "proxy" : "middleware";
}
function resolveMiddlewareModuleHandler(mod, options) {
	const handler = options.isProxy ? mod.proxy ?? mod.default : mod.middleware ?? mod.default;
	if (isMiddlewareHandler(handler)) return handler;
	const fileLabel = middlewareFileLabel(options.isProxy);
	const expectedExport = middlewareExpectedExport(options.isProxy);
	const fileSuffix = options.filePath ? ` "${options.filePath}"` : "";
	throw new Error(`The ${fileLabel} file${fileSuffix} must export a function named \`${expectedExport}\` or a \`default\` function.`);
}
function middlewareMatcher(mod) {
	const config = mod.config;
	if (!isMiddlewareConfigExport(config)) return void 0;
	return config.matcher;
}
function stripMiddlewareHeadersFromResponse(response) {
	const headers = new Headers(response.headers);
	processMiddlewareHeaders(headers);
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
/**
* Make a same-host URL relative to the request origin. Cross-origin URLs are
* returned unchanged. Mirrors Next.js's `getRelativeURL` behaviour:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/shared/lib/router/utils/relativize-url.ts
*/
function relativizeLocation(location, requestUrl) {
	let parsed;
	try {
		parsed = new URL(location, requestUrl);
	} catch {
		return location;
	}
	const base = new URL(requestUrl);
	if (parsed.origin !== base.origin) return parsed.toString();
	return parsed.pathname + parsed.search + parsed.hash;
}
/**
* Translate a middleware redirect Response into the soft-redirect protocol
* used by Next.js for `_next/data` requests: a 200 OK with the redirect target
* carried in the `x-nextjs-redirect` header. The client router consumes this
* header to perform the navigation, avoiding CORS issues that would arise from
* an actual cross-origin HTTP redirect on a data fetch.
*
* Reference: packages/next/src/server/web/adapter.ts
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/web/adapter.ts
*/
function dataRedirectResponse(target, originalResponse) {
	const headers = new Headers(originalResponse.headers);
	processMiddlewareHeaders(headers);
	headers.delete("Location");
	headers.set("x-nextjs-redirect", target);
	return new Response(null, {
		status: 200,
		headers
	});
}
function collectMiddlewareHeaders(response) {
	const responseHeaders = new Headers();
	for (const [key, value] of response.headers) if (!key.startsWith("x-middleware-") || shouldKeepMiddlewareHeader(key)) responseHeaders.append(key, value);
	return responseHeaders;
}
function drainFetchEvent(fetchEvent) {
	const waitUntilPromises = fetchEvent.waitUntilPromises;
	const drained = fetchEvent.drainWaitUntil();
	const executionContext = getRequestExecutionContext();
	if (executionContext) executionContext.waitUntil(drained);
	return waitUntilPromises;
}
function resolveMiddlewarePathname(request) {
	const url = new URL(request.url);
	try {
		return normalizePath(normalizePathnameForRouteMatchStrict(url.pathname));
	} catch {
		return badRequestResponse();
	}
}
function createNextRequest(request, normalizedPathname, i18nConfig, basePath, trailingSlash) {
	const url = new URL(request.url);
	let mwRequest = request.body && !request.bodyUsed ? request.clone() : request;
	if (normalizedPathname !== url.pathname) {
		const mwUrl = new URL(url);
		mwUrl.pathname = normalizedPathname;
		mwRequest = new Request(mwUrl, mwRequest);
	}
	const nextConfig = basePath || i18nConfig || trailingSlash ? {
		basePath: basePath ?? "",
		i18n: i18nConfig ?? void 0,
		trailingSlash: trailingSlash ?? void 0
	} : void 0;
	return mwRequest instanceof NextRequest ? mwRequest : new NextRequest(mwRequest, nextConfig ? { nextConfig } : void 0);
}
async function executeMiddleware(options) {
	const middlewareFn = resolveMiddlewareModuleHandler(options.module, {
		filePath: options.filePath,
		isProxy: options.isProxy
	});
	const normalizedPathname = options.normalizedPathname ?? resolveMiddlewarePathname(options.request);
	if (normalizedPathname instanceof Response) return {
		continue: false,
		response: normalizedPathname
	};
	if (!matchesMiddleware(normalizedPathname, middlewareMatcher(options.module), options.request, options.i18nConfig)) return { continue: true };
	const nextRequest = createNextRequest(options.request, normalizedPathname, options.i18nConfig, options.basePath, options.trailingSlash);
	const fetchEvent = new NextFetchEvent({ page: normalizedPathname });
	let response;
	try {
		response = await middlewareFn(nextRequest, fetchEvent);
	} catch (e) {
		console.error("[vinext] Middleware error:", e);
		const waitUntilPromises = drainFetchEvent(fetchEvent);
		return {
			continue: false,
			response: internalServerErrorResponse(options.includeErrorDetails ? "Middleware Error: " + (e instanceof Error ? e.message : String(e)) : "Internal Server Error"),
			waitUntilPromises
		};
	}
	const waitUntilPromises = drainFetchEvent(fetchEvent);
	if (!response) return {
		continue: true,
		waitUntilPromises
	};
	if (response.headers.get("x-middleware-next") === "1") return {
		continue: true,
		responseHeaders: collectMiddlewareHeaders(response),
		status: response.status !== 200 ? response.status : void 0,
		waitUntilPromises
	};
	if (response.status >= 300 && response.status < 400) {
		const location = response.headers.get("Location") ?? response.headers.get("location");
		if (location) {
			const relativeLocation = relativizeLocation(location, options.request.url);
			if (options.isDataRequest) return {
				continue: false,
				response: dataRedirectResponse(relativeLocation, response),
				waitUntilPromises
			};
			const responseHeaders = new Headers();
			for (const [key, value] of response.headers) if (!key.startsWith("x-middleware-") && key.toLowerCase() !== "location") responseHeaders.append(key, value);
			const relativizedResponseHeaders = new Headers(response.headers);
			relativizedResponseHeaders.set("Location", relativeLocation);
			const relativizedResponse = new Response(response.body, {
				status: response.status,
				statusText: response.statusText,
				headers: relativizedResponseHeaders
			});
			return {
				continue: false,
				redirectUrl: relativeLocation,
				redirectStatus: response.status,
				response: stripMiddlewareHeadersFromResponse(relativizedResponse),
				responseHeaders,
				waitUntilPromises
			};
		}
	}
	const rewriteUrl = response.headers.get(MIDDLEWARE_REWRITE_HEADER);
	if (rewriteUrl) {
		let rewritePath;
		try {
			const rewriteParsed = new URL(rewriteUrl, options.request.url);
			const requestOrigin = new URL(options.request.url).origin;
			if (rewriteParsed.origin === requestOrigin) rewritePath = mergeRewriteQuery(options.request.url, rewriteParsed.pathname + rewriteParsed.search);
			else rewritePath = rewriteParsed.href;
		} catch {
			rewritePath = rewriteUrl;
		}
		return {
			continue: true,
			rewriteUrl: rewritePath,
			rewriteStatus: response.status !== 200 ? response.status : void 0,
			responseHeaders: collectMiddlewareHeaders(response),
			status: response.status !== 200 ? response.status : void 0,
			waitUntilPromises
		};
	}
	return {
		continue: false,
		response: stripMiddlewareHeadersFromResponse(response),
		waitUntilPromises
	};
}
//#endregion
//#region node_modules/vinext/dist/server/app-middleware.js
var FLIGHT_HEADER_SET = new Set(FLIGHT_HEADERS);
function requestWithoutFlightHeaders(request) {
	let hasFlightHeader = false;
	const headers = new Headers();
	for (const [key, value] of request.headers) if (FLIGHT_HEADER_SET.has(key.toLowerCase())) hasFlightHeader = true;
	else headers.append(key, value);
	if (!hasFlightHeader) return request;
	return cloneRequestWithHeaders(request.body ? request.clone() : request, headers);
}
function responseFromMiddlewareRedirect(result) {
	if (result.response) return result.response;
	const headers = new Headers(result.responseHeaders);
	if (result.redirectUrl) headers.set("Location", result.redirectUrl);
	return new Response(null, {
		status: result.redirectStatus ?? 307,
		headers
	});
}
function isExternalMiddlewareRewrite(rewriteUrl, request) {
	return new URL(rewriteUrl, request.url).origin !== new URL(request.url).origin;
}
function requestWithMiddlewareRequestHeaders(request, middlewareHeaders) {
	const nextHeaders = middlewareHeaders ? buildRequestHeadersFromMiddlewareResponse(request.headers, middlewareHeaders, { preserveCredentialHeaders: true }) : null;
	if (!nextHeaders) return request;
	const init = {
		method: request.method,
		headers: nextHeaders,
		body: request.body
	};
	if (request.body) Object.defineProperty(init, "duplex", {
		value: "half",
		enumerable: true
	});
	return new Request(request.url, init);
}
async function proxyExternalMiddlewareRewrite(request, rewriteUrl, context) {
	const proxyRequest = requestWithMiddlewareRequestHeaders(request, context.requestHeaders ?? context.headers);
	setHeadersContext(null);
	setNavigationContext(null);
	const proxyResponse = await proxyExternalRequest(proxyRequest, rewriteUrl);
	const headers = new Headers(proxyResponse.headers);
	processMiddlewareHeaders(headers);
	if (!context.headers) return new Response(proxyResponse.body, {
		status: proxyResponse.status,
		statusText: proxyResponse.statusText,
		headers
	});
	const middlewareHeaders = new Headers(context.headers);
	processMiddlewareHeaders(middlewareHeaders);
	mergeMiddlewareResponseHeaders(headers, middlewareHeaders);
	return new Response(proxyResponse.body, {
		status: proxyResponse.status,
		statusText: proxyResponse.statusText,
		headers
	});
}
function applyForwardedMiddlewareContext(request, context) {
	return { applied: false };
}
async function applyAppMiddleware(options) {
	const forwarded = applyForwardedMiddlewareContext(options.request, options.context);
	const middlewareRequest = requestWithoutFlightHeaders(options.request);
	let cleanPathname = options.cleanPathname;
	let search = null;
	if (forwarded.rewriteUrl) try {
		if (isExternalMiddlewareRewrite(forwarded.rewriteUrl, middlewareRequest)) return {
			kind: "response",
			response: await proxyExternalMiddlewareRewrite(middlewareRequest, forwarded.rewriteUrl, options.context)
		};
		const rewriteParsed = new URL(forwarded.rewriteUrl, middlewareRequest.url);
		cleanPathname = rewriteParsed.pathname;
		search = rewriteParsed.search;
	} catch (e) {
		console.error("[vinext] Failed to apply forwarded middleware rewrite:", e);
		forwarded.applied = false;
	}
	if (!forwarded.applied) {
		const result = await executeMiddleware({
			basePath: options.basePath,
			i18nConfig: options.i18nConfig,
			isDataRequest: options.isDataRequest,
			isProxy: options.isProxy,
			module: options.module,
			normalizedPathname: cleanPathname,
			request: middlewareRequest,
			trailingSlash: options.trailingSlash
		});
		if (!result.continue) {
			if (result.redirectUrl) return {
				kind: "response",
				response: responseFromMiddlewareRedirect(result)
			};
			if (result.response) return {
				kind: "response",
				response: result.response
			};
			return {
				kind: "response",
				response: internalServerErrorResponse()
			};
		}
		if (result.responseHeaders) options.context.headers = new Headers(result.responseHeaders);
		if (result.status !== void 0) options.context.status = result.status;
		if (result.rewriteUrl) {
			if (result.rewriteStatus !== void 0) options.context.status = result.rewriteStatus;
			if (isExternalUrl(result.rewriteUrl)) return {
				kind: "response",
				response: await proxyExternalMiddlewareRewrite(middlewareRequest, result.rewriteUrl, options.context)
			};
			const rewriteParsed = new URL(result.rewriteUrl, middlewareRequest.url);
			cleanPathname = rewriteParsed.pathname;
			search = rewriteParsed.search;
		}
	}
	if (options.context.headers) {
		options.context.requestHeaders = new Headers(options.context.headers);
		applyMiddlewareRequestHeaders(options.context.headers);
		processMiddlewareHeaders(options.context.headers);
	}
	return {
		kind: "continue",
		cleanPathname,
		search
	};
}
//#endregion
//#region node_modules/vinext/dist/server/cache-headers.js
function toNextJsCacheState(cacheState) {
	return cacheState === "STATIC" ? "HIT" : cacheState;
}
function setCacheStateHeaders(headers, cacheState) {
	headers.set(VINEXT_CACHE_HEADER, cacheState);
	headers.set(NEXTJS_CACHE_HEADER, toNextJsCacheState(cacheState));
}
//#endregion
//#region node_modules/vinext/dist/server/cache-control.js
var NEVER_CACHE_CONTROL = "private, no-cache, no-store, max-age=0, must-revalidate";
var STATIC_CACHE_CONTROL = "s-maxage=31536000, stale-while-revalidate";
var STALE_REVALIDATE_CACHE_CONTROL = "s-maxage=0, stale-while-revalidate";
var NO_STORE_CACHE_CONTROL$1 = "no-store, must-revalidate";
/**
* Matches Next.js's `getCacheControlHeader` stale window semantics while
* preserving vinext's legacy unbounded SWR header when no expire ceiling is
* available yet.
*
* Next.js source:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/lib/cache-control.ts
*/
function buildRevalidateCacheControl(revalidateSeconds, expireSeconds) {
	if (expireSeconds === void 0) return `s-maxage=${revalidateSeconds}, stale-while-revalidate`;
	if (revalidateSeconds >= expireSeconds) return `s-maxage=${revalidateSeconds}`;
	return `s-maxage=${revalidateSeconds}, stale-while-revalidate=${expireSeconds - revalidateSeconds}`;
}
/**
* Builds Cache-Control for ISR cache reads. HIT responses and STALE responses
* with stored expire metadata use the same route policy because Next.js derives
* this header from cache-control metadata, not from the cache hit/stale state.
* STALE entries without expire metadata keep vinext's legacy `s-maxage=0`
* fallback so older cache entries are not treated as newly fresh downstream.
*/
function buildCachedRevalidateCacheControl(cacheState, revalidateSeconds, expireSeconds) {
	if (revalidateSeconds === Infinity) return STATIC_CACHE_CONTROL;
	if (cacheState === "STALE" && expireSeconds === void 0) return STALE_REVALIDATE_CACHE_CONTROL;
	return buildRevalidateCacheControl(revalidateSeconds, expireSeconds);
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-response.js
function applyTimingHeader(headers, timing) {
	if (!timing) return;
	const handlerStart = Math.round(timing.handlerStart);
	const compileMs = timing.compileEnd !== void 0 ? Math.round(timing.compileEnd - timing.handlerStart) : -1;
	const renderMs = timing.responseKind === "html" && timing.renderEnd !== void 0 && timing.compileEnd !== void 0 ? Math.round(timing.renderEnd - timing.compileEnd) : -1;
	headers.set(VINEXT_TIMING_HEADER, `${handlerStart},${compileMs},${renderMs}`);
}
function resolveAppPageRscResponsePolicy(options) {
	if (options.isDraftMode) return { cacheControl: NO_STORE_CACHE_CONTROL$1 };
	if (options.isForceDynamic || options.dynamicUsedDuringBuild) return { cacheControl: NO_STORE_CACHE_CONTROL$1 };
	if (options.revalidateSeconds === 0) return { cacheControl: NO_STORE_CACHE_CONTROL$1 };
	if ((options.isForceStatic || options.isDynamicError) && !options.revalidateSeconds || options.revalidateSeconds === Infinity) return {
		cacheControl: STATIC_CACHE_CONTROL,
		cacheState: "STATIC"
	};
	if (options.revalidateSeconds) return {
		cacheControl: buildRevalidateCacheControl(options.revalidateSeconds, options.expireSeconds),
		cacheState: options.isProduction ? "MISS" : void 0
	};
	return {};
}
function resolveAppPageHtmlResponsePolicy(options) {
	if (options.isDraftMode) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.isForceDynamic) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.hasScriptNonce) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.isProgressiveActionRender) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.revalidateSeconds === 0) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if ((options.isForceStatic || options.isDynamicError) && options.revalidateSeconds === null) return {
		cacheControl: STATIC_CACHE_CONTROL,
		cacheState: "STATIC",
		shouldWriteToCache: false
	};
	if (options.dynamicUsedDuringRender) return {
		cacheControl: NO_STORE_CACHE_CONTROL$1,
		shouldWriteToCache: false
	};
	if (options.revalidateSeconds !== null && options.revalidateSeconds > 0 && options.revalidateSeconds !== Infinity) return {
		cacheControl: buildRevalidateCacheControl(options.revalidateSeconds, options.expireSeconds),
		cacheState: options.isProduction ? "MISS" : void 0,
		shouldWriteToCache: options.isProduction
	};
	if (options.revalidateSeconds === Infinity) return {
		cacheControl: STATIC_CACHE_CONTROL,
		cacheState: "STATIC",
		shouldWriteToCache: false
	};
	return { shouldWriteToCache: false };
}
function buildAppPageRscResponse(body, options) {
	const headers = new Headers({
		"Content-Type": VINEXT_RSC_CONTENT_TYPE,
		Vary: VINEXT_RSC_VARY_HEADER
	});
	if (options.params && Object.keys(options.params).length > 0) headers.set(VINEXT_PARAMS_HEADER, encodeURIComponent(JSON.stringify(options.params)));
	if (options.mountedSlotsHeader) headers.set(VINEXT_MOUNTED_SLOTS_HEADER, options.mountedSlotsHeader);
	if (options.policy.cacheControl) headers.set("Cache-Control", options.policy.cacheControl);
	if (options.policy.cacheState) setCacheStateHeaders(headers, options.policy.cacheState);
	mergeMiddlewareResponseHeaders(headers, options.middlewareContext.headers);
	applyRscCompatibilityIdHeader(headers);
	applyTimingHeader(headers, options.timing);
	return new Response(body, {
		status: options.middlewareContext.status ?? 200,
		headers
	});
}
function buildAppPageHtmlResponse(body, options) {
	const headers = new Headers({
		"Content-Type": "text/html; charset=utf-8",
		Vary: VINEXT_RSC_VARY_HEADER
	});
	if (options.policy.cacheControl) headers.set("Cache-Control", options.policy.cacheControl);
	if (options.policy.cacheState) setCacheStateHeaders(headers, options.policy.cacheState);
	if (options.draftCookie) headers.append("Set-Cookie", options.draftCookie);
	if (options.fontLinkHeader) headers.set("Link", options.fontLinkHeader);
	mergeMiddlewareResponseHeaders(headers, options.middlewareContext.headers);
	applyTimingHeader(headers, options.timing);
	return new Response(body, {
		status: options.middlewareContext.status ?? 200,
		headers
	});
}
//#endregion
//#region node_modules/vinext/dist/server/implicit-tags.js
var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
function appendUnique(tags, tag) {
	if (!tags.includes(tag)) tags.push(tag);
}
function normalizeRouteSegment(segment) {
	if (!segment || segment === "." || segment.startsWith("@")) return null;
	return segment;
}
function buildRouteCachePath(routeSegments, leafKind) {
	const parts = [];
	for (const segment of routeSegments) {
		const normalized = normalizeRouteSegment(segment);
		if (normalized) parts.push(normalized);
	}
	parts.push(leafKind);
	return `/${parts.join("/")}`;
}
function appendDerivedTags(tags, routePath) {
	appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}/layout`);
	if (!routePath.startsWith("/")) return;
	const routeParts = routePath.split("/");
	const leafIndex = routeParts.length - 1;
	for (let i = 1; i <= routeParts.length; i++) {
		let currentPathname = routeParts.slice(0, i).join("/");
		if (!currentPathname) continue;
		if (!(i - 1 === leafIndex)) currentPathname = `${currentPathname}/layout`;
		appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}${currentPathname}`);
	}
}
function buildPageCacheTags(pathname, extraTags, routeSegments, leafKind) {
	const tags = [pathname, `${NEXT_CACHE_IMPLICIT_TAG_ID}${pathname}`];
	if (pathname === "/") appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}/index`);
	if (pathname === "/index") appendUnique(tags, `${NEXT_CACHE_IMPLICIT_TAG_ID}/`);
	appendDerivedTags(tags, buildRouteCachePath(routeSegments, leafKind));
	for (const tag of extraTags) appendUnique(tags, tag);
	return tags.map(encodeCacheTag);
}
//#endregion
//#region node_modules/vinext/dist/server/app-post-middleware-context.js
/**
* Build a request context from the live ALS HeadersContext, which reflects
* any x-middleware-request-* header mutations applied by middleware.
* Used for afterFiles and fallback rewrite has/missing evaluation — these
* run after middleware in the App Router execution order.
*
* Falls back to `requestContextFromRequest(request)` when no HeadersContext
* is set (no middleware ran, or middleware didn't set request headers).
*/
function buildPostMwRequestContext(request) {
	const url = new URL(request.url);
	const ctx = getHeadersContext();
	if (!ctx) return requestContextFromRequest(request);
	const cookiesRecord = Object.fromEntries(ctx.cookies);
	return {
		headers: ctx.headers,
		cookies: cookiesRecord,
		query: url.searchParams,
		host: normalizeHost(ctx.headers.get("host"), url.hostname)
	};
}
//#endregion
//#region node_modules/vinext/dist/shims/root-params.js
var _FALLBACK_KEY$1 = Symbol.for("vinext.rootParams.fallback");
var _g$3 = globalThis;
var _als$1 = getOrCreateAls("vinext.rootParams.als");
var _fallbackState$1 = _g$3[_FALLBACK_KEY$1] ??= { rootParams: null };
function getState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als$1.getStore() ?? _fallbackState$1;
}
function pickRootParams(params, rootParamNames) {
	const picked = {};
	for (const name of rootParamNames ?? []) picked[name] = params[name];
	return picked;
}
function setRootParams(params) {
	getState().rootParams = params;
}
function runWithRootParamsScope(params, fn) {
	if (isInsideUnifiedScope()) return runWithUnifiedStateMutation((ctx) => {
		ctx.rootParams = params;
	}, fn);
	else return _als$1.run({ rootParams: params }, fn);
}
//#endregion
//#region node_modules/vinext/dist/server/app-prerender-static-params.js
function isGenerateStaticParamsFunction(value) {
	return typeof value === "function";
}
function isRootParams(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
function createAppPrerenderStaticParamsResolver(sources, rootParamNames) {
	const generateStaticParamsFns = sources.filter(isGenerateStaticParamsFunction);
	if (generateStaticParamsFns.length === 0) return null;
	const filterRootParams = (params) => pickRootParams(params, rootParamNames ?? []);
	if (generateStaticParamsFns.length === 1) {
		const single = generateStaticParamsFns[0];
		return async (input) => {
			return runWithRootParamsScope(filterRootParams(input.params), async () => {
				const result = await single(input);
				if (!Array.isArray(result)) return [];
				for (const item of result) if (!isRootParams(item)) return [];
				return result;
			});
		};
	}
	return async ({ params }) => {
		let paramSets = [params];
		for (const generateStaticParams of generateStaticParamsFns) {
			const nextParamSets = [];
			for (const parentParams of paramSets) {
				const result = await runWithRootParamsScope(filterRootParams(parentParams), async () => generateStaticParams({ params: parentParams }));
				if (!Array.isArray(result)) return [];
				for (const item of result) {
					if (!isRootParams(item)) return [];
					nextParamSets.push({
						...parentParams,
						...item
					});
				}
			}
			paramSets = nextParamSets;
		}
		return paramSets;
	};
}
async function callAppPrerenderStaticParams(options) {
	return runWithRootParamsScope(pickRootParams(options.params, options.rootParamNamesByPattern[options.pattern]), () => options.fn({ params: options.params }));
}
//#endregion
//#region node_modules/vinext/dist/server/app-prerender-endpoints.js
var STATIC_PARAMS_ENDPOINT = "/__vinext/prerender/static-params";
var PAGES_STATIC_PATHS_ENDPOINT = "/__vinext/prerender/pages-static-paths";
var JSON_HEADERS = { "content-type": "application/json" };
async function handleAppPrerenderEndpoint(request, options) {
	if (options.pathname === STATIC_PARAMS_ENDPOINT) return handleStaticParamsEndpoint(request, options);
	if (options.pathname === PAGES_STATIC_PATHS_ENDPOINT) {
		if (!options.loadPagesRoutes) return null;
		return handlePagesStaticPathsEndpoint(request, options);
	}
	return null;
}
async function handleStaticParamsEndpoint(request, options) {
	if (!isEnabled(options)) return notFoundResponse();
	const url = new URL(request.url);
	const pattern = url.searchParams.get("pattern");
	if (!pattern) return new Response("missing pattern", { status: 400 });
	const generateStaticParams = options.staticParamsMap[pattern];
	if (typeof generateStaticParams !== "function") return jsonNullResponse();
	try {
		return jsonResponse(await callAppPrerenderStaticParams({
			fn: generateStaticParams,
			params: parseParentParams(url.searchParams.get("parentParams")),
			pattern,
			rootParamNamesByPattern: options.rootParamNamesByPattern ?? {}
		}));
	} catch (error) {
		return jsonResponse({ error: String(error) }, 500);
	}
}
async function handlePagesStaticPathsEndpoint(request, options) {
	if (!isEnabled(options)) return notFoundResponse();
	const url = new URL(request.url);
	const pattern = url.searchParams.get("pattern");
	if (!pattern) return new Response("missing pattern", { status: 400 });
	try {
		const getStaticPaths = findPageRoute(await options.loadPagesRoutes?.(), pattern)?.module?.getStaticPaths;
		if (typeof getStaticPaths !== "function") return jsonNullResponse();
		return jsonResponse(await getStaticPaths({
			locales: parseLocales(url.searchParams.get("locales")),
			defaultLocale: url.searchParams.get("defaultLocale") ?? ""
		}));
	} catch (error) {
		return jsonResponse({ error: String(error) }, 500);
	}
}
function isEnabled(options) {
	return options.isPrerenderEnabled?.() ?? false;
}
function jsonResponse(body, status = 200) {
	return new Response(JSON.stringify(body), {
		headers: JSON_HEADERS,
		status
	});
}
function jsonNullResponse() {
	return new Response("null", {
		headers: JSON_HEADERS,
		status: 200
	});
}
function parseParentParams(raw) {
	if (!raw) return {};
	const value = JSON.parse(raw);
	if (!isPlainObject(value)) return {};
	const params = {};
	for (const [key, paramValue] of Object.entries(value)) if (typeof paramValue === "string" || paramValue === void 0 || isStringArray(paramValue)) params[key] = paramValue;
	return params;
}
function parseLocales(raw) {
	if (!raw) return [];
	const value = JSON.parse(raw);
	if (!Array.isArray(value)) return [];
	return value.filter((locale) => typeof locale === "string");
}
function findPageRoute(value, pattern) {
	if (!Array.isArray(value)) return void 0;
	for (const route of value) if (isPageRoute(route) && route.pattern === pattern) return route;
}
function isPageRoute(value) {
	if (!isPlainObject(value) || typeof value.pattern !== "string") return false;
	if (value.module === void 0) return true;
	if (!isPlainObject(value.module)) return false;
	return value.module.getStaticPaths === void 0 || typeof value.module.getStaticPaths === "function";
}
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isStringArray(value) {
	return Array.isArray(value) && value.every((item) => typeof item === "string");
}
//#endregion
//#region node_modules/vinext/dist/server/app-rsc-response-finalizer.js
/**
* Apply App Router response finalization that must happen outside individual
* route dispatchers.
*
* Called once per request in the outer handler() wrapper, after all route
* handling, so that every response path (page, route handler, server action,
* metadata, not-found) gets headers applied consistently.
*
* Skips 3xx redirect responses. Response.redirect() creates immutable
* headers that throw on mutation, and Next.js does not apply config headers
* to redirects regardless.
*/
function finalizeAppRscResponse(response, request, options) {
	if (response.status >= 300 && response.status < 400) return response;
	if (!response.headers.has("x-vinext-static-file")) mergeVaryHeader(response.headers, VINEXT_RSC_VARY_HEADER);
	if (!options.configHeaders.length) return response;
	const url = new URL(request.url);
	let pathname;
	try {
		pathname = normalizePath(normalizePathnameForRouteMatch(url.pathname));
	} catch {
		pathname = url.pathname;
	}
	const hadBasePath = !options.basePath || hasBasePath(pathname, options.basePath);
	pathname = stripBasePath(pathname, options.basePath);
	const matchPathname = options.i18nConfig ? normalizeDefaultLocalePathname(pathname, options.i18nConfig, { hostname: url.hostname }) : pathname;
	applyConfigHeadersToResponse(response.headers, {
		configHeaders: options.configHeaders,
		pathname: matchPathname,
		requestContext: options.requestContext,
		basePathState: {
			basePath: options.basePath,
			hadBasePath
		}
	});
	return response;
}
//#endregion
//#region node_modules/vinext/dist/server/client-reuse-manifest.js
var CLIENT_REUSE_MANIFEST_HASH_ALGORITHM = "fnv1a64";
var DEFAULT_CLIENT_REUSE_MANIFEST_LIMITS = {
	maxEntryCount: 64,
	maxEntryIdLength: 512,
	maxManifestBytes: 4096,
	maxPayloadHashLength: 16,
	maxVariantCacheKeyLength: 256
};
var HASH_DIGEST_PATTERN = /^[0-9a-z]+$/;
var textEncoder = new TextEncoder();
function createRejection(code, fields = {}) {
	return {
		code,
		fields
	};
}
function rejectManifest(code, fields = {}) {
	return {
		kind: "rejected",
		rejection: createRejection(code, fields)
	};
}
function rejectEntry(code, entryId, fields = {}) {
	return {
		code,
		entryId,
		fields
	};
}
function countUtf8Bytes(input) {
	return textEncoder.encode(input).length;
}
function isVisibleCommitVersion(value) {
	return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}
function parseReplayWindow(value, visibleCommitVersion) {
	if (!isUnknownRecord(value)) return {
		kind: "rejected",
		rejection: createRejection("SKIP_REPLAY_WINDOW_INVALID", { field: "replayWindow" })
	};
	const validFromVisibleCommitVersion = value.validFromVisibleCommitVersion;
	const validUntilVisibleCommitVersion = value.validUntilVisibleCommitVersion;
	if (!isVisibleCommitVersion(validFromVisibleCommitVersion) || !isVisibleCommitVersion(validUntilVisibleCommitVersion) || validFromVisibleCommitVersion > validUntilVisibleCommitVersion || visibleCommitVersion < validFromVisibleCommitVersion || visibleCommitVersion > validUntilVisibleCommitVersion) return {
		kind: "rejected",
		rejection: createRejection("SKIP_REPLAY_WINDOW_INVALID", {
			validFromVisibleCommitVersion: isVisibleCommitVersion(validFromVisibleCommitVersion) ? validFromVisibleCommitVersion : null,
			validUntilVisibleCommitVersion: isVisibleCommitVersion(validUntilVisibleCommitVersion) ? validUntilVisibleCommitVersion : null,
			visibleCommitVersion
		})
	};
	return {
		kind: "parsed",
		replayWindow: {
			validFromVisibleCommitVersion,
			validUntilVisibleCommitVersion
		}
	};
}
function currentCommitVersionMatchesReplayWindow(currentVisibleCommitVersion, replayWindow) {
	if (currentVisibleCommitVersion === void 0) return true;
	return currentVisibleCommitVersion >= replayWindow.validFromVisibleCommitVersion && currentVisibleCommitVersion <= replayWindow.validUntilVisibleCommitVersion;
}
function parseEntryKind(id) {
	const parsed = AppElementsWire.parseElementKey(id);
	if (parsed === null) return null;
	return parsed.kind;
}
function isValidPayloadHash(value, limits) {
	return typeof value === "string" && value.length > 0 && value.length <= limits.maxPayloadHashLength && HASH_DIGEST_PATTERN.test(value);
}
function parseManifestEntry(value, limits, index) {
	if (!isUnknownRecord(value)) return rejectEntry("SKIP_ENTRY_MALFORMED", null, { index });
	const id = value.id;
	if (typeof id !== "string" || id.length === 0) return rejectEntry("SKIP_ENTRY_ID_INVALID", null, { index });
	if (id.length > limits.maxEntryIdLength) return rejectEntry("SKIP_ENTRY_ID_TOO_LONG", id, {
		idHash: createClientReusePayloadHash(id),
		maxEntryIdLength: limits.maxEntryIdLength
	});
	const kind = parseEntryKind(id);
	if (kind === null) return rejectEntry("SKIP_UNKNOWN_ENTRY", id, { idHash: createClientReusePayloadHash(id) });
	const privacy = value.privacy;
	if (privacy === "private") return rejectEntry("SKIP_PRIVATE_ENTRY", id, { privacy });
	if (privacy !== "public") return rejectEntry("SKIP_ENTRY_MALFORMED", id, { field: "privacy" });
	const payloadHash = value.payloadHash;
	if (!isValidPayloadHash(payloadHash, limits)) return rejectEntry("SKIP_ENTRY_HASH_INVALID", id, { maxPayloadHashLength: limits.maxPayloadHashLength });
	const variantCacheKey = value.variantCacheKey;
	if (typeof variantCacheKey !== "string" || variantCacheKey.length === 0) return rejectEntry("SKIP_VARIANT_CACHE_KEY_INVALID", id, { field: "variantCacheKey" });
	if (variantCacheKey.length > limits.maxVariantCacheKeyLength) return rejectEntry("SKIP_VARIANT_CACHE_KEY_TOO_LONG", id, {
		maxVariantCacheKeyLength: limits.maxVariantCacheKeyLength,
		variantCacheKeyHash: createClientReusePayloadHash(variantCacheKey)
	});
	const artifactCompatibility = parseArtifactCompatibilityEnvelope(value.artifactCompatibility);
	if (artifactCompatibility === null) return rejectEntry("SKIP_ARTIFACT_COMPATIBILITY_INVALID", id, { field: "artifactCompatibility" });
	return {
		artifactCompatibility,
		id,
		kind,
		payloadHash,
		privacy,
		variantCacheKey
	};
}
function createClientReusePayloadHash(input) {
	return fnv1a64(input);
}
function parseClientReuseManifestHeader(rawHeader, options = {}) {
	const header = rawHeader?.trim();
	if (!header) return { kind: "absent" };
	const limits = options.limits ?? DEFAULT_CLIENT_REUSE_MANIFEST_LIMITS;
	const manifestBytes = countUtf8Bytes(header);
	if (manifestBytes > limits.maxManifestBytes) return rejectManifest("SKIP_MANIFEST_TOO_LARGE", {
		manifestBytes,
		maxManifestBytes: limits.maxManifestBytes
	});
	let decoded;
	try {
		decoded = JSON.parse(header);
	} catch {
		return rejectManifest("SKIP_MANIFEST_MALFORMED");
	}
	if (!isUnknownRecord(decoded)) return rejectManifest("SKIP_MANIFEST_MALFORMED", { field: "manifest" });
	if (decoded.schemaVersion !== 1) return rejectManifest("SKIP_MANIFEST_SCHEMA_UNSUPPORTED", { schemaVersion: typeof decoded.schemaVersion === "number" || typeof decoded.schemaVersion === "string" ? decoded.schemaVersion : null });
	if (decoded.hashAlgorithm !== "fnv1a64") return rejectManifest("SKIP_HASH_ALGORITHM_UNSUPPORTED", { hashAlgorithm: typeof decoded.hashAlgorithm === "string" ? decoded.hashAlgorithm : null });
	const visibleCommitVersion = decoded.visibleCommitVersion;
	if (!isVisibleCommitVersion(visibleCommitVersion)) return rejectManifest("SKIP_VISIBLE_COMMIT_VERSION_INVALID", { visibleCommitVersion: null });
	const replayWindowResult = parseReplayWindow(decoded.replayWindow, visibleCommitVersion);
	if (replayWindowResult.kind === "rejected") return {
		kind: "rejected",
		rejection: replayWindowResult.rejection
	};
	const { replayWindow } = replayWindowResult;
	if (!currentCommitVersionMatchesReplayWindow(options.currentVisibleCommitVersion, replayWindow)) return rejectManifest("SKIP_VISIBLE_COMMIT_VERSION_MISMATCH", {
		currentVisibleCommitVersion: options.currentVisibleCommitVersion ?? null,
		validFromVisibleCommitVersion: replayWindow.validFromVisibleCommitVersion,
		validUntilVisibleCommitVersion: replayWindow.validUntilVisibleCommitVersion,
		visibleCommitVersion
	});
	const entriesValue = decoded.entries;
	if (!Array.isArray(entriesValue)) return rejectManifest("SKIP_MANIFEST_MALFORMED", { field: "entries" });
	if (entriesValue.length > limits.maxEntryCount) return rejectManifest("SKIP_ENTRY_COUNT_EXCEEDED", {
		entryCount: entriesValue.length,
		maxEntryCount: limits.maxEntryCount
	});
	const entries = [];
	const entryRejections = [];
	let previousEntryId = null;
	for (let index = 0; index < entriesValue.length; index++) {
		const value = entriesValue[index];
		if (isUnknownRecord(value) && typeof value.id === "string") {
			if (previousEntryId !== null && value.id <= previousEntryId) return rejectManifest("SKIP_ENTRY_ORDER_NON_CANONICAL", {
				entryIdHash: createClientReusePayloadHash(value.id),
				previousEntryIdHash: createClientReusePayloadHash(previousEntryId)
			});
			previousEntryId = value.id;
		}
		const parsedEntry = parseManifestEntry(value, limits, index);
		if ("code" in parsedEntry) entryRejections.push(parsedEntry);
		else entries.push(parsedEntry);
	}
	return {
		entryRejections,
		kind: "parsed",
		manifest: {
			entries,
			hashAlgorithm: CLIENT_REUSE_MANIFEST_HASH_ALGORITHM,
			replayWindow,
			schemaVersion: 1,
			visibleCommitVersion
		},
		skipDisposition: {
			code: "SKIP_MODEL_DISABLED",
			enabled: false,
			mode: "renderAndSend"
		}
	};
}
//#endregion
//#region node_modules/vinext/dist/server/app-rsc-request-normalization.js
/**
* Normalize an App Router RSC request.
*
* Performs all security-sensitive and compatibility-sensitive preprocessing before
* route matching. The ordering of steps is security-critical — changing it introduces
* vulnerabilities:
*
*   1. Parse URL
*   2. Protocol-relative URL guard — on the raw pathname, BEFORE normalizePath collapses
*      `//` to `/`. If the guard ran after normalization, `//evil.com` → `/evil.com`
*      would bypass the check and reach the trailing-slash redirector, which echoes the
*      path into a `Location` header that browsers interpret as protocol-relative.
*   3. Strict percent-decode each segment — throws on malformed sequences (→ 400). Must
*      run before basePath check so %2F-encoded slashes cannot create fake basePath prefixes.
*   4. Collapse double-slashes, resolve `.` and `..` segments (normalizePath)
*   5. basePath check + strip — 404 when pathname lacks the basePath prefix.
*      `/__vinext/` bypasses this for internal prerender endpoints.
*   6. RSC detection: `.rsc` suffix only. RSC headers do not select payload
*      rendering at the canonical HTML URL, so caches that ignore Vary cannot
*      store Flight responses under HTML URLs.
*   7. cleanPathname — pathname with `.rsc` suffix stripped
*   8. Sanitize X-Vinext-Interception-Context — strip null bytes (header injection)
*   9. Normalize x-vinext-mounted-slots — dedup and sort for canonical cache keys
*   10. Read semantic render mode for refresh/action payload rendering
*   11. Parse disabled ClientReuseManifest hints on canonical RSC payload requests
*
* @returns A 400 or 404 Response for invalid or out-of-scope inputs,
*          or a NormalizedRscRequest for valid requests.
*/
function normalizeRscRequest(request, basePath) {
	const url = new URL(request.url);
	const protoGuard = guardProtocolRelativeUrl(url.pathname);
	if (protoGuard) return protoGuard;
	let decoded;
	try {
		decoded = normalizePathnameForRouteMatchStrict(url.pathname);
	} catch {
		return badRequestResponse();
	}
	let pathname = normalizePath(decoded);
	if (basePath) {
		if (!hasBasePath(pathname, basePath) && !pathname.startsWith("/__vinext/")) return notFoundResponse();
		pathname = stripBasePath(pathname, basePath);
	}
	const isRscRequest = pathname.endsWith(".rsc");
	const cleanPathname = stripRscSuffix(pathname);
	const interceptionContextHeader = request.headers.get("X-Vinext-Interception-Context")?.replaceAll("\0", "") || null;
	const mountedSlotsHeader = normalizeMountedSlotsHeader(request.headers.get(VINEXT_MOUNTED_SLOTS_HEADER));
	const renderMode = isRscRequest ? parseAppRscRenderMode(request.headers.get(VINEXT_RSC_RENDER_MODE_HEADER)) : APP_RSC_RENDER_MODE_NAVIGATION;
	return {
		clientReuseManifest: isRscRequest ? parseClientReuseManifestHeader(request.headers.get(VINEXT_CLIENT_REUSE_MANIFEST_HEADER)) : { kind: "absent" },
		url,
		pathname,
		cleanPathname,
		isRscRequest,
		interceptionContextHeader,
		mountedSlotsHeader,
		renderMode
	};
}
//#endregion
//#region node_modules/vinext/dist/server/metadata-routes.js
/** Escape the five XML special characters in text content and attribute values. */
function escapeXml(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
/**
* Convert a sitemap array to XML string.
*/
function sitemapToXml(entries) {
	const hasAlternates = entries.some((entry) => Object.keys(entry.alternates ?? {}).length > 0);
	const hasImages = entries.some((entry) => Boolean(entry.images?.length));
	const hasVideos = entries.some((entry) => Boolean(entry.videos?.length));
	let content = "";
	content += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	content += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"";
	if (hasImages) content += " xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\"";
	if (hasVideos) content += " xmlns:video=\"http://www.google.com/schemas/sitemap-video/1.1\"";
	if (hasAlternates) content += " xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\n";
	else content += ">\n";
	for (const entry of entries) {
		content += "<url>\n";
		content += `<loc>${escapeXml(entry.url)}</loc>\n`;
		const languages = entry.alternates?.languages;
		if (languages && Object.keys(languages).length) for (const language in languages) content += `<xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(languages[language])}" />\n`;
		if (entry.images?.length) for (const image of entry.images) content += `<image:image>\n<image:loc>${escapeXml(image)}</image:loc>\n</image:image>\n`;
		if (entry.videos?.length) for (const video of entry.videos) {
			const videoFields = [
				"<video:video>",
				`<video:title>${escapeXml(String(video.title))}</video:title>`,
				`<video:thumbnail_loc>${escapeXml(String(video.thumbnail_loc))}</video:thumbnail_loc>`,
				`<video:description>${escapeXml(String(video.description))}</video:description>`,
				video.content_loc && `<video:content_loc>${escapeXml(String(video.content_loc))}</video:content_loc>`,
				video.player_loc && `<video:player_loc>${escapeXml(String(video.player_loc))}</video:player_loc>`,
				video.duration && `<video:duration>${video.duration}</video:duration>`,
				video.view_count && `<video:view_count>${video.view_count}</video:view_count>`,
				video.tag && `<video:tag>${escapeXml(String(video.tag))}</video:tag>`,
				video.rating && `<video:rating>${video.rating}</video:rating>`,
				video.expiration_date && `<video:expiration_date>${escapeXml(String(video.expiration_date))}</video:expiration_date>`,
				video.publication_date && `<video:publication_date>${escapeXml(String(video.publication_date))}</video:publication_date>`,
				video.family_friendly && `<video:family_friendly>${video.family_friendly}</video:family_friendly>`,
				video.requires_subscription && `<video:requires_subscription>${video.requires_subscription}</video:requires_subscription>`,
				video.live && `<video:live>${video.live}</video:live>`,
				video.restriction && `<video:restriction relationship="${escapeXml(String(video.restriction.relationship))}">${escapeXml(String(video.restriction.content))}</video:restriction>`,
				video.platform && `<video:platform relationship="${escapeXml(String(video.platform.relationship))}">${escapeXml(String(video.platform.content))}</video:platform>`,
				video.uploader && `<video:uploader${video.uploader.info ? ` info="${escapeXml(String(video.uploader.info))}"` : ""}>${escapeXml(String(video.uploader.content))}</video:uploader>`,
				"</video:video>\n"
			].filter(Boolean);
			content += videoFields.join("\n");
		}
		if (entry.lastModified) content += `<lastmod>${serializeDate(entry.lastModified)}</lastmod>\n`;
		if (entry.changeFrequency) content += `<changefreq>${entry.changeFrequency}</changefreq>\n`;
		if (typeof entry.priority === "number") content += `<priority>${entry.priority}</priority>\n`;
		content += "</url>\n";
	}
	content += "</urlset>\n";
	return content;
}
/**
* Convert a robots config to text format.
*/
function robotsToText(config) {
	const lines = [];
	const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
	for (const rule of rules) {
		const agents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent ?? "*"];
		for (const agent of agents) lines.push(`User-Agent: ${agent}`);
		if (rule.allow) {
			const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
			for (const allow of allows) lines.push(`Allow: ${allow}`);
		}
		if (rule.disallow) {
			const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
			for (const disallow of disallows) lines.push(`Disallow: ${disallow}`);
		}
		if (rule.crawlDelay !== void 0) lines.push(`Crawl-delay: ${rule.crawlDelay}`);
		if (rule.other) for (const key of Object.keys(rule.other)) {
			const value = rule.other[key];
			if (value == null) continue;
			const values = Array.isArray(value) ? value : [value];
			for (const v of values) lines.push(`${key}: ${v}`);
		}
		lines.push("");
	}
	if (config.host) lines.push(`Host: ${config.host}`);
	if (config.sitemap) {
		const sitemaps = Array.isArray(config.sitemap) ? config.sitemap : [config.sitemap];
		for (const sitemap of sitemaps) lines.push(`Sitemap: ${sitemap}`);
	}
	return lines.join("\n").trim() + "\n";
}
/**
* Convert a manifest config to JSON string.
*/
function manifestToJson(config) {
	return JSON.stringify(config, null, 2);
}
function serializeDate(value) {
	return value instanceof Date ? value.toISOString() : value;
}
function getMetadataRouteKind(route) {
	if (route.type === "favicon") return "favicon";
	if (route.type === "icon") return "icon";
	if (route.type === "apple-icon") return "apple";
	if (route.type === "opengraph-image") return "openGraph";
	if (route.type === "twitter-image") return "twitter";
	if (route.type === "manifest") return "manifest";
	return null;
}
function getMetadataImageRouteKind(route) {
	const kind = getMetadataRouteKind(route);
	if (kind === "icon" || kind === "apple" || kind === "openGraph" || kind === "twitter") return kind;
	return null;
}
var metadataImageIdPattern = /^[a-zA-Z0-9-_.]+$/;
function isValidMetadataImageId(id) {
	return metadataImageIdPattern.test(id);
}
function matchMetadataRoutePattern(urlParts, patternParts) {
	return matchRoutePattern(urlParts, patternParts);
}
//#endregion
//#region node_modules/vinext/dist/server/metadata-route-response.js
var routeFunctionCache = /* @__PURE__ */ new WeakMap();
var CACHE_HEADERS = {
	noCache: "no-cache, no-store",
	revalidate: "public, max-age=0, must-revalidate"
};
function isObject(value) {
	return typeof value === "object" && value !== null;
}
function readFunction(module, key) {
	if (!module) return null;
	const value = Reflect.get(module, key);
	if (typeof value !== "function") return null;
	return (props) => Reflect.apply(value, module, [props]);
}
function isSitemapEntries(value) {
	return Array.isArray(value);
}
function isRobotsConfig(value) {
	return isObject(value) && !Array.isArray(value);
}
function isManifestConfig(value) {
	return isObject(value) && !Array.isArray(value);
}
function isImageMetadataRoute(route) {
	return route.type === "icon" || route.type === "apple-icon" || route.type === "opengraph-image" || route.type === "twitter-image";
}
function metadataRouteCacheHeader(route) {
	if (route.isDynamic && isImageMetadataRoute(route) && false);
	return CACHE_HEADERS.revalidate;
}
function withMetadataRouteCacheHeader(response, route) {
	const headers = new Headers(response.headers);
	if (!headers.has("Cache-Control")) headers.set("Cache-Control", metadataRouteCacheHeader(route));
	return new Response(response.body, {
		headers,
		status: response.status,
		statusText: response.statusText
	});
}
function getMetadataRouteFunctions(route) {
	const cached = routeFunctionCache.get(route);
	if (cached) return cached;
	const generateImageMetadata = route.isDynamic && isImageMetadataRoute(route) ? readFunction(route.module, "generateImageMetadata") : null;
	const functions = {
		defaultExport: route.isDynamic ? readFunction(route.module, "default") : null,
		generateImageMetadata,
		generateSitemaps: route.type === "sitemap" && route.isDynamic ? readFunction(route.module, "generateSitemaps") : null,
		hasGeneratedImageMetadata: route.isDynamic && isImageMetadataRoute(route) && Boolean(generateImageMetadata)
	};
	routeFunctionCache.set(route, functions);
	return functions;
}
function matchMetadataRoute(route, cleanPathname, functions) {
	if (route.patternParts) {
		const urlParts = cleanPathname.split("/").filter(Boolean);
		if (functions.hasGeneratedImageMetadata && urlParts.length > 0) {
			const params = matchMetadataRoutePattern(urlParts.slice(0, -1), route.patternParts);
			if (params) return {
				params,
				imageId: urlParts[urlParts.length - 1]
			};
		}
		const params = matchMetadataRoutePattern(urlParts, route.patternParts);
		return params ? {
			params,
			imageId: null
		} : null;
	}
	if (functions.hasGeneratedImageMetadata && cleanPathname.startsWith(`${route.servedUrl}/`)) {
		const imageSuffix = cleanPathname.slice(route.servedUrl.length + 1);
		if (!imageSuffix || imageSuffix.includes("/")) return null;
		return {
			params: Object.create(null),
			imageId: imageSuffix
		};
	}
	return cleanPathname === route.servedUrl ? {
		params: null,
		imageId: null
	} : null;
}
function findGeneratedSitemapId(entries, rawId) {
	if (!Array.isArray(entries)) return null;
	for (const entry of entries) {
		if (!isObject(entry) || Reflect.get(entry, "id") == null) throw new Error("id property is required for every item returned from generateSitemaps");
		const id = Reflect.get(entry, "id");
		if (String(id) === rawId) return rawId;
	}
	return null;
}
function makeThenableMetadataRouteId(id) {
	return Object.assign(Promise.resolve(id), {
		toString() {
			return id;
		},
		valueOf() {
			return id;
		},
		[Symbol.toPrimitive]() {
			return id;
		}
	});
}
async function handleGeneratedSitemap(route, cleanPathname, functions) {
	if (!functions.generateSitemaps || !functions.defaultExport) return null;
	const sitemapPrefix = route.servedUrl.slice(0, -4);
	if (!cleanPathname.startsWith(`${sitemapPrefix}/`) || !cleanPathname.endsWith(".xml")) return null;
	const rawId = cleanPathname.slice(sitemapPrefix.length + 1, -4);
	if (rawId.includes("/")) return null;
	const matchedId = findGeneratedSitemapId(await functions.generateSitemaps({}), rawId);
	if (!matchedId) return notFoundResponse();
	const result = await functions.defaultExport({ id: makeThenableMetadataRouteId(matchedId) });
	if (result instanceof Response) return withMetadataRouteCacheHeader(result, route);
	if (!isSitemapEntries(result)) throw new TypeError("Metadata sitemap routes must return an array.");
	return new Response(sitemapToXml(result), { headers: {
		"Content-Type": route.contentType,
		"Cache-Control": metadataRouteCacheHeader(route)
	} });
}
function findGeneratedImageId(imageMetadata, imageId, servedUrl) {
	if (!Array.isArray(imageMetadata)) return null;
	for (const item of imageMetadata) {
		if (!isObject(item) || Reflect.get(item, "id") == null) throw new Error("id property is required for every item returned from generateImageMetadata");
		const itemId = String(Reflect.get(item, "id"));
		if (!isValidMetadataImageId(itemId)) {
			console.warn(`[vinext] Skipping metadata route ${servedUrl} image id "${itemId}" because metadata image ids must match /^[a-zA-Z0-9-_.]+$/.`);
			continue;
		}
		if (itemId === imageId) return itemId;
	}
	return null;
}
async function callDynamicMetadataRoute(route, match, makeThenableParams, functions) {
	if (!functions.defaultExport) {
		console.warn(`[vinext] Dynamic metadata route ${route.servedUrl} has no default export.`);
		return notFoundResponse();
	}
	const paramsThenable = makeThenableParams(match.params ?? {});
	let result;
	if (functions.hasGeneratedImageMetadata) {
		if (match.imageId === null || !isValidMetadataImageId(match.imageId)) return notFoundResponse();
		if (!functions.generateImageMetadata) return notFoundResponse();
		const matchedImageId = findGeneratedImageId(await functions.generateImageMetadata({ params: paramsThenable }), match.imageId, route.servedUrl);
		if (!matchedImageId) return notFoundResponse();
		result = await functions.defaultExport({
			params: paramsThenable,
			id: makeThenableMetadataRouteId(matchedImageId)
		});
	} else result = await functions.defaultExport({ params: paramsThenable });
	if (result instanceof Response) return withMetadataRouteCacheHeader(result, route);
	let body;
	if (route.type === "sitemap") {
		if (!isSitemapEntries(result)) throw new TypeError("Metadata sitemap routes must return an array.");
		body = sitemapToXml(result);
	} else if (route.type === "robots") {
		if (!isRobotsConfig(result)) throw new TypeError("Metadata robots routes must return an object.");
		body = robotsToText(result);
	} else if (route.type === "manifest") {
		if (!isManifestConfig(result)) throw new TypeError("Metadata manifest routes must return an object.");
		body = manifestToJson(result);
	} else if (isImageMetadataRoute(route)) throw new TypeError(`Dynamic metadata ${route.type} route ${route.servedUrl} must return a Response.`);
	else body = JSON.stringify(result);
	return new Response(body, { headers: {
		"Content-Type": route.contentType,
		"Cache-Control": metadataRouteCacheHeader(route)
	} });
}
function serveStaticMetadataRoute(route) {
	if (typeof route.fileDataBase64 !== "string") throw new Error(`[vinext] Static metadata route ${route.servedUrl} is missing embedded file data.`);
	try {
		const binary = atob(route.fileDataBase64);
		const bytes = new Uint8Array(binary.length);
		for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
		return new Response(bytes, { headers: {
			"Content-Type": route.contentType,
			"Cache-Control": metadataRouteCacheHeader(route)
		} });
	} catch (error) {
		const reason = error instanceof Error && error.message ? `: ${error.message}` : "";
		throw new Error(`[vinext] Failed to decode embedded metadata route file data for ${route.servedUrl}${reason}`, { cause: error });
	}
}
async function handleMetadataRouteRequest(options) {
	for (const route of options.metadataRoutes) {
		const functions = getMetadataRouteFunctions(route);
		if (route.type === "sitemap" && route.isDynamic) {
			if (functions.generateSitemaps) {
				const generatedSitemapResponse = await handleGeneratedSitemap(route, options.cleanPathname, functions);
				if (generatedSitemapResponse) return generatedSitemapResponse;
				continue;
			}
		}
		const match = matchMetadataRoute(route, options.cleanPathname, functions);
		if (!match) continue;
		return route.isDynamic ? callDynamicMetadataRoute(route, match, options.makeThenableParams, functions) : serveStaticMetadataRoute(route);
	}
	return null;
}
//#endregion
//#region node_modules/vinext/dist/server/prerender-work-unit-setup.js
/**
* Sets up the work unit async storage for prerendering.
*
* When VINEXT_PRERENDER=1, wraps execution in a workUnitAsyncStorage.run()
* with a PrerenderStore so that dynamic APIs (e.g., io()) can
* detect the prerender context and return hanging promises.
*
* Used by: app-rsc-entry.ts handler template.
*
* TODO: If future dynamic APIs need request-scoped stores for normal (non-prerender)
* requests, add a `{ type: "request" }` store during normal request handling.
*/
function runWithPrerenderWorkUnit(fn, options) {
	if (process.env.VINEXT_PRERENDER === "1") {
		const controller = new AbortController();
		const route = typeof options?.route === "function" ? options.route() : options?.route;
		return workUnitAsyncStorage.run({
			type: "prerender",
			renderSignal: controller.signal,
			route
		}, fn).finally(() => controller.abort());
	}
	return fn();
}
//#endregion
//#region node_modules/vinext/dist/server/app-rsc-handler.js
function hasProperty(value, key) {
	return key in value;
}
function isExecutionContextLike(value) {
	if (!value || typeof value !== "object") return false;
	return hasProperty(value, "waitUntil") && typeof value.waitUntil === "function";
}
function redirectDestinationWithBasePath(destination, basePath) {
	if (!basePath || isExternalUrl(destination) || hasBasePath(destination, basePath)) return destination;
	return basePath + destination;
}
async function applyRewrite(options, cleanPathname) {
	if (!options.rewrites.length) return null;
	const rewritten = matchRewrite(cleanPathname, options.rewrites, options.requestContext, options.basePathState);
	if (!rewritten) return null;
	if (isExternalUrl(rewritten)) {
		options.clearRequestContext();
		return proxyExternalRequest(options.request, rewritten);
	}
	return rewritten;
}
function applyConfigHeadersToMiddlewareRedirect(response, options) {
	if (response.status < 300 || response.status >= 400) return response;
	if (!options.configHeaders.length) return response;
	const headers = new Headers();
	applyConfigHeadersToResponse(headers, {
		configHeaders: options.configHeaders,
		pathname: options.pathname,
		requestContext: options.requestContext,
		basePathState: options.basePathState
	});
	if (!headers.entries().next().done) {
		mergeMiddlewareResponseHeaders(headers, response.headers);
		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers
		});
	}
	return response;
}
async function handleAppRscRequest(options, request, preMiddlewareRequestContext, isDataRequest) {
	const handlerStart = 0;
	const normalized = normalizeRscRequest(request, options.basePath);
	if (normalized instanceof Response) return normalized;
	const { url, isRscRequest, interceptionContextHeader, mountedSlotsHeader, renderMode } = normalized;
	let { pathname, cleanPathname } = normalized;
	const canonicalPathname = cleanPathname;
	const basePathState = {
		basePath: options.basePath,
		hadBasePath: true
	};
	const prerenderEndpointResponse = await handleAppPrerenderEndpoint(request, {
		isPrerenderEnabled() {
			return process.env.VINEXT_PRERENDER === "1";
		},
		loadPagesRoutes: options.loadPrerenderPagesRoutes,
		pathname,
		rootParamNamesByPattern: options.rootParamNamesByPattern,
		staticParamsMap: options.staticParamsMap
	});
	if (prerenderEndpointResponse) return prerenderEndpointResponse;
	const trailingSlashRedirect = normalizeTrailingSlash(pathname, options.basePath, options.trailingSlash, url.search);
	if (trailingSlashRedirect) return trailingSlashRedirect;
	const matchPathname = (p) => normalizeDefaultLocalePathname(p, options.i18nConfig, { hostname: url.hostname });
	const redirect = matchRedirect(matchPathname(stripRscSuffix(pathname)), options.configRedirects, preMiddlewareRequestContext, basePathState);
	if (redirect) {
		const destination = sanitizeDestination(redirectDestinationWithBasePath(redirect.destination, options.basePath));
		const location = isRscRequest && request.headers.get("RSC") === "1" ? await createRscRedirectLocation(destination, request) : destination;
		return new Response(null, {
			status: redirect.permanent ? 308 : 307,
			headers: { Location: location }
		});
	}
	const rscCacheBustingRedirect = await resolveInvalidRscCacheBustingRequest({
		isRscRequest,
		request
	});
	if (rscCacheBustingRedirect) return rscCacheBustingRedirect;
	const middlewareContext = {
		headers: null,
		requestHeaders: null,
		status: null
	};
	if (options.middlewareModule) {
		const middlewareResult = await applyAppMiddleware({
			basePath: options.basePath,
			cleanPathname,
			context: middlewareContext,
			i18nConfig: options.i18nConfig,
			isDataRequest,
			isProxy: options.isMiddlewareProxy,
			module: options.middlewareModule,
			request,
			trailingSlash: options.trailingSlash
		});
		if (middlewareResult.kind === "response") return applyConfigHeadersToMiddlewareRedirect(middlewareResult.response, {
			basePathState,
			configHeaders: options.configHeaders,
			pathname: matchPathname(cleanPathname),
			requestContext: preMiddlewareRequestContext
		});
		cleanPathname = middlewareResult.cleanPathname;
		if (middlewareResult.search !== null) url.search = middlewareResult.search;
	}
	const scriptNonce = getScriptNonceFromHeaderSources(request.headers, middlewareContext.headers);
	const postMiddlewareRequestContext = buildPostMwRequestContext(request);
	const beforeFilesRewrite = await applyRewrite({
		basePathState,
		clearRequestContext: options.clearRequestContext,
		request,
		requestContext: postMiddlewareRequestContext,
		rewrites: options.configRewrites.beforeFiles
	}, matchPathname(cleanPathname));
	if (beforeFilesRewrite instanceof Response) return beforeFilesRewrite;
	if (beforeFilesRewrite) cleanPathname = beforeFilesRewrite;
	if (cleanPathname === "/_vinext/image") {
		const imageUrlResult = validateImageUrl(url.searchParams.get("url"), request.url);
		if (imageUrlResult instanceof Response) return imageUrlResult;
		return Response.redirect(new URL(imageUrlResult, url.origin).href, 302);
	}
	const metadataRouteResponse = await handleMetadataRouteRequest({
		metadataRoutes: options.metadataRoutes,
		cleanPathname,
		makeThenableParams: options.makeThenableParams
	});
	if (metadataRouteResponse) return metadataRouteResponse;
	const publicFileResponse = resolvePublicFileRoute({
		cleanPathname,
		middlewareContext,
		pathname,
		publicFiles: options.publicFiles,
		request
	});
	if (publicFileResponse) {
		options.clearRequestContext();
		return publicFileResponse;
	}
	if (isRscRequest) stripRscCacheBustingSearchParam(url);
	options.setNavigationContext({
		pathname: canonicalPathname,
		searchParams: url.searchParams,
		params: {}
	});
	const actionId = request.headers.get("x-rsc-action") ?? request.headers.get("next-action");
	const contentType = request.headers.get("content-type") || "";
	const progressiveActionResult = await options.handleProgressiveActionRequest({
		actionId,
		cleanPathname,
		contentType,
		middlewareContext,
		request
	});
	if (progressiveActionResult instanceof Response) return progressiveActionResult;
	const isProgressiveActionRender = progressiveActionResult?.kind === "form-state";
	const formState = isProgressiveActionRender ? progressiveActionResult.formState : null;
	const failedProgressiveActionResult = isProgressiveActionRender && "actionFailed" in progressiveActionResult ? progressiveActionResult : null;
	const actionFailed = failedProgressiveActionResult !== null;
	const actionError = failedProgressiveActionResult?.actionError;
	const serverActionResponse = await options.handleServerActionRequest({
		actionId,
		cleanPathname,
		contentType,
		interceptionContext: interceptionContextHeader,
		isRscRequest,
		middlewareContext,
		mountedSlotsHeader,
		request,
		searchParams: url.searchParams
	});
	if (serverActionResponse) return serverActionResponse;
	let match = options.matchRoute(cleanPathname);
	if (!match || match.route.isDynamic) {
		const afterFilesRewrite = await applyRewrite({
			basePathState,
			clearRequestContext: options.clearRequestContext,
			request,
			requestContext: postMiddlewareRequestContext,
			rewrites: options.configRewrites.afterFiles
		}, matchPathname(cleanPathname));
		if (afterFilesRewrite instanceof Response) return afterFilesRewrite;
		if (afterFilesRewrite) {
			cleanPathname = afterFilesRewrite;
			match = options.matchRoute(cleanPathname);
		}
	}
	if (!match) {
		const fallbackRewrite = await applyRewrite({
			basePathState,
			clearRequestContext: options.clearRequestContext,
			request,
			requestContext: postMiddlewareRequestContext,
			rewrites: options.configRewrites.fallback
		}, matchPathname(cleanPathname));
		if (fallbackRewrite instanceof Response) return fallbackRewrite;
		if (fallbackRewrite) {
			cleanPathname = fallbackRewrite;
			match = options.matchRoute(cleanPathname);
		}
	}
	if (!match) {
		const pagesFallbackResponse = await options.renderPagesFallback?.({
			isRscRequest,
			middlewareContext,
			request,
			url
		});
		if (pagesFallbackResponse) {
			options.clearRequestContext();
			return pagesFallbackResponse;
		}
		const renderedNotFoundResponse = await options.renderNotFound({
			isRscRequest,
			middlewareContext,
			request,
			route: null,
			scriptNonce
		});
		if (renderedNotFoundResponse) return renderedNotFoundResponse;
		options.clearRequestContext();
		const headers = new Headers();
		mergeMiddlewareResponseHeaders(headers, middlewareContext.headers);
		return notFoundResponse({ headers });
	}
	const { route, params } = match;
	options.setNavigationContext({
		pathname: canonicalPathname,
		searchParams: url.searchParams,
		params
	});
	const rootParams = pickRootParams(params, route.rootParamNames);
	setRootParams(rootParams);
	if (route.routeHandler) {
		setCurrentFetchSoftTags(buildPageCacheTags(cleanPathname, [], [...route.routeSegments], "route"));
		return options.dispatchMatchedRouteHandler({
			cleanPathname,
			middlewareContext,
			params: route.isDynamic ? params : null,
			request,
			route,
			searchParams: url.searchParams
		});
	}
	return options.dispatchMatchedPage({
		cleanPathname,
		formState,
		actionError,
		actionFailed,
		handlerStart,
		interceptionContext: interceptionContextHeader,
		isProgressiveActionRender,
		isRscRequest,
		middlewareContext,
		mountedSlotsHeader,
		params,
		rootParams,
		request,
		route,
		scriptNonce,
		searchParams: url.searchParams,
		renderMode
	});
}
function createAppRscHandler(options) {
	return async function appRscHandler(rawRequest, ctx) {
		await options.ensureInstrumentation?.();
		const mwCtx = rawRequest.headers.get(VINEXT_MW_CTX_HEADER);
		const isDataRequest = rawRequest.headers.get("x-nextjs-data") === "1";
		const filteredHeaders = filterInternalHeaders(rawRequest.headers);
		if (mwCtx !== null) filteredHeaders.set(VINEXT_MW_CTX_HEADER, mwCtx);
		const request = cloneRequestWithHeaders(rawRequest, filteredHeaders);
		const executionContext = isExecutionContextLike(ctx) ? ctx : getRequestExecutionContext() ?? null;
		return runWithRequestContext(createRequestContext({
			headersContext: headersContextFromRequest(request),
			executionContext,
			unstableCacheRevalidation: "background"
		}), () => runWithPrerenderWorkUnit(async () => {
			ensureFetchPatch();
			const preMiddlewareRequestContext = requestContextFromRequest(request);
			let response;
			try {
				response = await handleAppRscRequest(options, request, preMiddlewareRequestContext, isDataRequest);
			} catch (error) {
				throw error;
			}
			return finalizeAppRscResponse(response, request, {
				basePath: options.basePath,
				configHeaders: options.configHeaders,
				i18nConfig: options.i18nConfig,
				requestContext: preMiddlewareRequestContext
			});
		}, { route: () => new URL(request.url).pathname }));
	};
}
//#endregion
//#region node_modules/vinext/dist/server/instrumentation.js
/**
* Get the registered onRequestError handler (if any).
*
* Reads from globalThis so it works across Vite environment boundaries.
*/
function getOnRequestErrorHandler() {
	return globalThis.__VINEXT_onRequestErrorHandler__ ?? null;
}
/**
* Report a request error via the instrumentation handler.
*
* No-op if no onRequestError handler is registered.
*
* Reads the handler from globalThis so this function works correctly regardless
* of which environment it is called from.
*/
function reportRequestError(error, request, context) {
	const handler = getOnRequestErrorHandler();
	if (!handler) return Promise.resolve();
	const promise = (async () => {
		try {
			await handler(error, request, context);
		} catch (reportErr) {
			console.error("[vinext] onRequestError handler threw:", reportErr instanceof Error ? reportErr.message : String(reportErr));
		}
	})();
	getRequestExecutionContext()?.waitUntil(promise);
	return promise;
}
//#endregion
//#region node_modules/vinext/dist/server/app-route-handler-runtime.js
var ROUTE_HANDLER_HTTP_METHODS = [
	"GET",
	"HEAD",
	"POST",
	"PUT",
	"DELETE",
	"PATCH",
	"OPTIONS"
];
/**
* Checks whether a string is a recognized HTTP method for App Router route
* handlers. Invalid methods must be rejected with 400 before any auto-OPTIONS
* or 405 logic runs.
*
* @see https://github.com/vercel/next.js/blob/canary/packages/next/src/server/web/http.ts
*/
function isValidHTTPMethod(maybeMethod) {
	return ROUTE_HANDLER_HTTP_METHODS.includes(maybeMethod);
}
function collectRouteHandlerMethods(handler) {
	const methods = ROUTE_HANDLER_HTTP_METHODS.filter((method) => typeof handler[method] === "function");
	if (methods.includes("GET") && !methods.includes("HEAD")) methods.push("HEAD");
	return methods;
}
function buildRouteHandlerAllowHeader(exportedMethods) {
	const allow = new Set(exportedMethods);
	allow.add("OPTIONS");
	return Array.from(allow).sort().join(", ");
}
var _KNOWN_DYNAMIC_APP_ROUTE_HANDLERS_KEY = Symbol.for("vinext.appRouteHandlerRuntime.knownDynamicHandlers");
var _g$2 = globalThis;
var knownDynamicAppRouteHandlers = _g$2[_KNOWN_DYNAMIC_APP_ROUTE_HANDLERS_KEY] ??= /* @__PURE__ */ new Set();
function isKnownDynamicAppRoute(pattern) {
	return knownDynamicAppRouteHandlers.has(pattern);
}
function markKnownDynamicAppRoute(pattern) {
	knownDynamicAppRouteHandlers.add(pattern);
}
function bindMethodIfNeeded(value, target) {
	return typeof value === "function" ? value.bind(target) : value;
}
function buildNextConfig(options) {
	if (!options.basePath && !options.i18n) return null;
	return {
		basePath: options.basePath,
		i18n: options.i18n ?? void 0
	};
}
function rebuildRequestWithHeaders(input, headers) {
	const method = input.method;
	const hasBody = method !== "GET" && method !== "HEAD";
	const init = {
		method,
		headers,
		cache: input.cache,
		credentials: input.credentials,
		integrity: input.integrity,
		keepalive: input.keepalive,
		mode: input.mode,
		redirect: input.redirect,
		referrer: input.referrer,
		referrerPolicy: input.referrerPolicy,
		signal: input.signal
	};
	if (hasBody && input.body) {
		init.body = input.body;
		init.duplex = "half";
	}
	return new Request(input.url, init);
}
function cleanStaticUrl(url) {
	const cleanUrl = new URL(url);
	cleanUrl.protocol = "http:";
	cleanUrl.host = "localhost:3000";
	cleanUrl.username = "";
	cleanUrl.password = "";
	cleanUrl.search = "";
	cleanUrl.hash = "";
	return cleanUrl.href;
}
function readEmptyBodyAsArrayBuffer() {
	return new Response(null).arrayBuffer();
}
function readEmptyBodyAsBlob() {
	return new Response(null).blob();
}
function readEmptyBodyAsFormData() {
	return new Response(null).formData();
}
function readEmptyBodyAsJson() {
	return new Response(null).json();
}
function readEmptyBodyAsText() {
	return new Response(null).text();
}
function createTrackedAppRouteRequest(request, options = {}) {
	let didAccessDynamicRequest = false;
	const requestMode = options.requestMode ?? "auto";
	const nextConfig = buildNextConfig(options);
	const markDynamicAccess = (access) => {
		didAccessDynamicRequest = true;
		options.onDynamicAccess?.(access);
	};
	const wrapNextUrl = (nextUrl) => {
		return new Proxy(nextUrl, { get(target, prop) {
			switch (prop) {
				case "search":
				case "searchParams":
				case "url":
				case "href":
				case "toJSON":
				case "toString":
				case "origin":
					markDynamicAccess(`nextUrl.${String(prop)}`);
					return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
				case "clone": return () => wrapNextUrl(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	const wrapForceStaticNextUrl = (nextUrl) => {
		const emptySearchParams = new URLSearchParams();
		const staticHref = cleanStaticUrl(nextUrl.href);
		return new Proxy(nextUrl, { get(target, prop) {
			switch (prop) {
				case "search": return "";
				case "searchParams": return emptySearchParams;
				case "href": return staticHref;
				case "url": return;
				case "toJSON":
				case "toString": return () => staticHref;
				case "clone": return () => wrapForceStaticNextUrl(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	const throwStaticGenerationError = (expression) => {
		throw new Error(options.staticGenerationErrorMessage?.(expression) ?? `Route handler with \`dynamic = "error"\` used ${expression}.`);
	};
	const wrapRequireStaticNextUrl = (nextUrl) => {
		return new Proxy(nextUrl, { get(target, prop) {
			switch (prop) {
				case "search":
				case "searchParams":
				case "url":
				case "href":
				case "toJSON":
				case "toString":
				case "origin": return throwStaticGenerationError(`nextUrl.${String(prop)}`);
				case "clone": return () => wrapRequireStaticNextUrl(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	const wrapRequest = (input) => {
		const requestHeaders = options.middlewareHeaders ? buildRequestHeadersFromMiddlewareResponse(input.headers, options.middlewareHeaders) : null;
		const requestWithOverrides = requestHeaders ? rebuildRequestWithHeaders(input, requestHeaders) : input;
		const nextRequest = requestWithOverrides instanceof NextRequest ? requestWithOverrides : new NextRequest(requestWithOverrides, { nextConfig: nextConfig ?? void 0 });
		let proxiedNextUrl = null;
		let forceStaticNextUrl = null;
		let requireStaticNextUrl = null;
		let forceStaticHeaders = null;
		let forceStaticCookies = null;
		return new Proxy(nextRequest, { get(target, prop) {
			if (requestMode === "force-static") switch (prop) {
				case "nextUrl":
					forceStaticNextUrl ??= wrapForceStaticNextUrl(target.nextUrl);
					return forceStaticNextUrl;
				case "headers":
					forceStaticHeaders ??= sealRequestHeaders(new Headers());
					return forceStaticHeaders;
				case "cookies":
					forceStaticCookies ??= sealRequestCookies(new RequestCookies(new Headers()));
					return forceStaticCookies;
				case "url": return cleanStaticUrl(target.nextUrl.href);
				case "ip":
				case "geo": return;
				case "body": return null;
				case "arrayBuffer": return readEmptyBodyAsArrayBuffer;
				case "blob": return readEmptyBodyAsBlob;
				case "formData": return readEmptyBodyAsFormData;
				case "json": return readEmptyBodyAsJson;
				case "text": return readEmptyBodyAsText;
				case "clone": return () => wrapRequest(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
			if (requestMode === "error") switch (prop) {
				case "nextUrl":
					requireStaticNextUrl ??= wrapRequireStaticNextUrl(target.nextUrl);
					return requireStaticNextUrl;
				case "headers":
				case "cookies":
				case "url":
				case "ip":
				case "geo":
				case "body":
				case "blob":
				case "json":
				case "text":
				case "arrayBuffer":
				case "formData": return throwStaticGenerationError(`request.${String(prop)}`);
				case "clone": return () => wrapRequest(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
			switch (prop) {
				case "nextUrl":
					proxiedNextUrl ??= wrapNextUrl(target.nextUrl);
					return proxiedNextUrl;
				case "headers":
				case "cookies":
				case "ip":
				case "geo":
				case "url":
				case "body":
				case "blob":
				case "json":
				case "text":
				case "arrayBuffer":
				case "formData":
					markDynamicAccess(`request.${String(prop)}`);
					return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
				case "clone": return () => wrapRequest(target.clone());
				default: return bindMethodIfNeeded(Reflect.get(target, prop, target), target);
			}
		} });
	};
	return {
		request: wrapRequest(request),
		didAccessDynamicRequest() {
			return didAccessDynamicRequest;
		}
	};
}
//#endregion
//#region node_modules/vinext/dist/server/next-error-digest.js
/**
* Pulls a stringified `digest` off an unknown thrown value, or returns null
* when the value is not a digest-bearing error.
*/
function getNextErrorDigest(error) {
	if (!error || typeof error !== "object" || !("digest" in error)) return null;
	return String(error.digest);
}
/**
* Parses a `NEXT_REDIRECT;<type>;<encodedUrl>;<status>` digest. Returns null
* when the digest is not a redirect digest or the encoded URL segment is
* missing. The `url` is decoded with `decodeURIComponent`; the `status`
* defaults to 307 when omitted; an omitted `type` is left as null so the
* caller can apply the correct context-sensitive default.
*/
function parseNextRedirectDigest(digest) {
	if (!digest.startsWith("NEXT_REDIRECT;")) return null;
	const parts = digest.split(";");
	const encodedUrl = parts[2];
	if (!encodedUrl) return null;
	const type = parts[1];
	return {
		status: parts[3] ? parseInt(parts[3], 10) : 307,
		type: type || null,
		url: decodeURIComponent(encodedUrl)
	};
}
/**
* Parses a `NEXT_NOT_FOUND` or `NEXT_HTTP_ERROR_FALLBACK;<status>` digest.
* Returns `{ status: 404 }` for `NEXT_NOT_FOUND` and the parsed status code
* for the fallback form. Returns null otherwise.
*/
function parseNextHttpErrorDigest(digest) {
	if (digest === "NEXT_NOT_FOUND") return { status: 404 };
	if (digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) return { status: parseInt(digest.split(";")[1], 10) };
	return null;
}
//#endregion
//#region node_modules/vinext/dist/server/app-route-handler-policy.js
function isPossibleAppRouteActionRequest(request) {
	if (request.method.toUpperCase() !== "POST") return false;
	const contentType = request.headers.get("content-type");
	return request.headers.has("x-rsc-action") || request.headers.has("next-action") || contentType === "application/x-www-form-urlencoded" || contentType?.startsWith("multipart/form-data") === true;
}
function getAppRouteHandlerRevalidateSeconds(handler) {
	const { revalidate } = handler;
	if (revalidate === false) return Infinity;
	if (typeof revalidate !== "number" || !Number.isFinite(revalidate) || revalidate < 0) return null;
	return revalidate;
}
function hasAppRouteHandlerDefaultExport(handler) {
	return typeof handler.default === "function";
}
function resolveAppRouteHandlerMethod(handler, method) {
	const exportedMethods = collectRouteHandlerMethods(handler);
	const allowHeaderForOptions = buildRouteHandlerAllowHeader(exportedMethods);
	const shouldAutoRespondToOptions = method === "OPTIONS" && typeof handler.OPTIONS !== "function";
	let handlerFn = typeof handler[method] === "function" ? handler[method] : void 0;
	let isAutoHead = false;
	if (method === "HEAD" && typeof handler.HEAD !== "function" && typeof handler.GET === "function") {
		handlerFn = handler.GET;
		isAutoHead = true;
	}
	return {
		allowHeaderForOptions,
		exportedMethods,
		handlerFn,
		isAutoHead,
		shouldAutoRespondToOptions
	};
}
function shouldReadAppRouteHandlerCache(options) {
	return options.isProduction && options.revalidateSeconds !== null && options.revalidateSeconds > 0 && options.revalidateSeconds !== Infinity && options.dynamicConfig !== "force-dynamic" && !options.isKnownDynamic && (options.method === "GET" || options.isAutoHead) && typeof options.handlerFn === "function";
}
function shouldApplyAppRouteHandlerRevalidateHeader(options) {
	return options.revalidateSeconds !== null && !options.dynamicUsedInHandler && (options.method === "GET" || options.isAutoHead) && !options.handlerSetCacheControl;
}
function shouldWriteAppRouteHandlerCache(options) {
	return options.isProduction && options.revalidateSeconds !== null && options.revalidateSeconds > 0 && options.revalidateSeconds !== Infinity && options.dynamicConfig !== "force-dynamic" && shouldApplyAppRouteHandlerRevalidateHeader(options);
}
function resolveAppRouteHandlerSpecialError(error, requestUrl, options) {
	if (!(error && typeof error === "object" && "digest" in error)) return null;
	const digest = String(error.digest);
	const redirect = parseNextRedirectDigest(digest);
	if (redirect) return {
		kind: "redirect",
		location: new URL(redirect.url, requestUrl).toString(),
		statusCode: options?.isAction ? 303 : redirect.status
	};
	const httpError = parseNextHttpErrorDigest(digest);
	if (httpError) return {
		kind: "status",
		statusCode: httpError.status
	};
	return null;
}
//#endregion
//#region node_modules/vinext/dist/server/app-static-generation.js
function getAppPageStaticGenerationErrorMessage() {
	return "Page with `dynamic = \"error\"` used a dynamic API. This page was expected to be fully static, but headers(), cookies(), or searchParams was accessed. Remove the dynamic API usage or change the dynamic config to \"auto\" or \"force-dynamic\".";
}
function getAppRouteStaticGenerationErrorMessage(routePattern, expression) {
	return `Route ${routePattern ?? "unknown route"} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression ?? "a dynamic request API"}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`;
}
function createStaticGenerationHeadersContext(options) {
	const context = {
		headers: new Headers(),
		cookies: /* @__PURE__ */ new Map()
	};
	if (options.dynamicConfig === "force-static") context.forceStatic = true;
	if (options.dynamicConfig === "error") context.accessError = new Error(options.routeKind === "route" ? getAppRouteStaticGenerationErrorMessage(options.routePattern) : getAppPageStaticGenerationErrorMessage());
	return context;
}
//#endregion
//#region node_modules/vinext/dist/server/app-route-handler-response.js
var APP_ROUTE_REWRITE_ERROR = "NextResponse.rewrite() was used in a app route handler, this is not currently supported. Please remove the invocation to continue.";
var APP_ROUTE_NEXT_ERROR = "NextResponse.next() was used in a app route handler, this is not supported. See here for more info: https://nextjs.org/docs/messages/next-response-next-in-app-route-handler";
function hasMiddlewareHeader(headers) {
	for (const key of headers.keys()) if (key.startsWith("x-middleware-")) return true;
	return false;
}
function buildRouteHandlerCacheControl(cacheState, revalidateSeconds, expireSeconds) {
	if (revalidateSeconds === 0) return NEVER_CACHE_CONTROL;
	if (revalidateSeconds === Infinity) return STATIC_CACHE_CONTROL;
	return buildCachedRevalidateCacheControl(cacheState, revalidateSeconds, expireSeconds);
}
function applyRouteHandlerMiddlewareContext(response, middlewareContext) {
	if (!middlewareContext.headers && middlewareContext.status == null) return response;
	const responseHeaders = new Headers(response.headers);
	mergeMiddlewareResponseHeaders(responseHeaders, middlewareContext.headers);
	return new Response(response.body, {
		status: middlewareContext.status ?? response.status,
		statusText: response.statusText,
		headers: responseHeaders
	});
}
function assertSupportedAppRouteHandlerResponse(response) {
	if (response.headers.has("x-middleware-rewrite")) throw new Error(APP_ROUTE_REWRITE_ERROR);
	if (response.headers.get("x-middleware-next") === "1") throw new Error(APP_ROUTE_NEXT_ERROR);
}
function buildRouteHandlerCachedResponse(cachedValue, options) {
	const headers = new Headers();
	for (const [key, value] of Object.entries(cachedValue.headers)) if (Array.isArray(value)) for (const entry of value) headers.append(key, entry);
	else headers.set(key, value);
	setCacheStateHeaders(headers, options.cacheState);
	const revalidateSeconds = options.cacheControl?.revalidate ?? options.revalidateSeconds;
	const expireSeconds = options.cacheControl === void 0 ? void 0 : options.cacheControl.expire ?? options.expireSeconds;
	headers.set("Cache-Control", buildRouteHandlerCacheControl(options.cacheState, revalidateSeconds, expireSeconds));
	return new Response(options.isHead ? null : cachedValue.body, {
		status: cachedValue.status,
		headers
	});
}
function applyRouteHandlerRevalidateHeader(response, revalidateSeconds, expireSeconds) {
	response.headers.set("cache-control", buildRouteHandlerCacheControl("HIT", revalidateSeconds, expireSeconds));
}
function markRouteHandlerCacheMiss(response) {
	setCacheStateHeaders(response.headers, "MISS");
}
function getSetCookieName(cookie) {
	const equalsIndex = cookie.indexOf("=");
	if (equalsIndex <= 0) return null;
	return cookie.slice(0, equalsIndex);
}
function applyMutableCookieFallbacks(headers, pendingCookies) {
	if (pendingCookies.length === 0) return;
	const returnedCookies = headers.getSetCookie();
	const returnedCookieNames = /* @__PURE__ */ new Set();
	for (const cookie of returnedCookies) {
		const name = getSetCookieName(cookie);
		if (name) returnedCookieNames.add(name);
	}
	const fallbackCookies = /* @__PURE__ */ new Map();
	const unkeyedFallbackCookies = [];
	for (const cookie of pendingCookies) {
		const name = getSetCookieName(cookie);
		if (!name) {
			unkeyedFallbackCookies.push(cookie);
			continue;
		}
		if (!returnedCookieNames.has(name)) fallbackCookies.set(name, cookie);
	}
	headers.delete("Set-Cookie");
	for (const cookie of unkeyedFallbackCookies) headers.append("Set-Cookie", cookie);
	for (const cookie of fallbackCookies.values()) headers.append("Set-Cookie", cookie);
	for (const cookie of returnedCookies) headers.append("Set-Cookie", cookie);
}
async function buildAppRouteCacheValue(response) {
	const body = await response.arrayBuffer();
	const headers = {};
	response.headers.forEach((value, key) => {
		if (key === "set-cookie" || key === "X-Vinext-Cache".toLowerCase() || key === "x-nextjs-cache".toLowerCase() || key === "cache-control" || key.startsWith("x-middleware-")) return;
		headers[key] = value;
	});
	const setCookies = response.headers.getSetCookie?.() ?? [];
	if (setCookies.length > 0) headers["set-cookie"] = setCookies;
	return {
		kind: "APP_ROUTE",
		body,
		status: response.status,
		headers
	};
}
function finalizeRouteHandlerResponse(response, options) {
	const { pendingCookies, draftCookie, isHead } = options;
	if (pendingCookies.length === 0 && !draftCookie && !isHead && !hasMiddlewareHeader(response.headers)) return response;
	const headers = new Headers(response.headers);
	processMiddlewareHeaders(headers);
	applyMutableCookieFallbacks(headers, pendingCookies);
	if (draftCookie) headers.append("Set-Cookie", draftCookie);
	return new Response(isHead ? null : response.body, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
//#endregion
//#region node_modules/vinext/dist/server/app-route-handler-execution.js
function configureAppRouteStaticGenerationContext(options) {
	if (options.dynamicConfig === "force-static" || options.dynamicConfig === "error") {
		setHeadersContext(createStaticGenerationHeadersContext({
			dynamicConfig: options.dynamicConfig,
			routeKind: "route",
			routePattern: options.routePattern
		}));
		options.setHeadersAccessPhase?.("route-handler");
	}
}
async function runAppRouteHandler(options) {
	options.consumeDynamicUsage();
	configureAppRouteStaticGenerationContext(options);
	const trackedRequest = createTrackedAppRouteRequest(options.request, {
		basePath: options.basePath,
		i18n: options.i18n,
		middlewareHeaders: options.middlewareRequestHeaders,
		onDynamicAccess() {
			options.markDynamicUsage();
		},
		requestMode: options.dynamicConfig === "force-static" || options.dynamicConfig === "error" ? options.dynamicConfig : "auto",
		staticGenerationErrorMessage(expression) {
			return getAppRouteStaticGenerationErrorMessage(options.routePattern, expression);
		}
	});
	const response = await options.handlerFn(trackedRequest.request, { params: options.params });
	return {
		dynamicUsedInHandler: options.consumeDynamicUsage(),
		response
	};
}
async function executeAppRouteHandler(options) {
	const previousHeadersPhase = options.setHeadersAccessPhase("route-handler");
	try {
		const { dynamicUsedInHandler, response } = await runAppRouteHandler({
			...options,
			dynamicConfig: options.handler.dynamic
		});
		assertSupportedAppRouteHandlerResponse(response);
		const handlerSetCacheControl = response.headers.has("cache-control");
		if (dynamicUsedInHandler) markKnownDynamicAppRoute(options.routePattern);
		if (shouldApplyAppRouteHandlerRevalidateHeader({
			dynamicUsedInHandler,
			handlerSetCacheControl,
			isAutoHead: options.isAutoHead,
			method: options.method,
			revalidateSeconds: options.revalidateSeconds
		})) {
			const revalidateSeconds = options.revalidateSeconds;
			if (revalidateSeconds == null) throw new Error("Expected route handler revalidate seconds");
			applyRouteHandlerRevalidateHeader(response, revalidateSeconds, options.expireSeconds);
		}
		if (shouldWriteAppRouteHandlerCache({
			dynamicConfig: options.handler.dynamic,
			dynamicUsedInHandler,
			handlerSetCacheControl,
			isAutoHead: options.isAutoHead,
			isProduction: options.isProduction,
			method: options.method,
			revalidateSeconds: options.revalidateSeconds
		})) {
			markRouteHandlerCacheMiss(response);
			const routeClone = response.clone();
			const routeKey = options.isrRouteKey(options.cleanPathname);
			const revalidateSeconds = options.revalidateSeconds;
			if (revalidateSeconds == null) throw new Error("Expected route handler cache revalidate seconds");
			const routeTags = options.buildPageCacheTags(options.cleanPathname, options.getCollectedFetchTags());
			const routeWritePromise = (async () => {
				try {
					const routeCacheValue = await buildAppRouteCacheValue(routeClone);
					await options.isrSet(routeKey, routeCacheValue, revalidateSeconds, routeTags, options.expireSeconds);
					options.isrDebug?.("route cache written", routeKey);
				} catch (cacheErr) {
					console.error("[vinext] ISR route cache write error:", cacheErr);
				}
			})();
			options.executionContext?.waitUntil(routeWritePromise);
		}
		const pendingCookies = options.getAndClearPendingCookies();
		const draftCookie = options.getDraftModeCookieHeader();
		options.clearRequestContext();
		return applyRouteHandlerMiddlewareContext(finalizeRouteHandlerResponse(response, {
			pendingCookies,
			draftCookie,
			isHead: options.isAutoHead
		}), options.middlewareContext);
	} catch (error) {
		const pendingCookies = options.getAndClearPendingCookies();
		const draftCookie = options.getDraftModeCookieHeader();
		const specialError = resolveAppRouteHandlerSpecialError(error, options.request.url, { isAction: isPossibleAppRouteActionRequest(options.request) });
		options.clearRequestContext();
		if (specialError) {
			if (specialError.kind === "redirect") return applyRouteHandlerMiddlewareContext(finalizeRouteHandlerResponse(new Response(null, {
				status: specialError.statusCode,
				headers: { Location: specialError.location }
			}), {
				pendingCookies,
				draftCookie,
				isHead: options.isAutoHead
			}), options.middlewareContext);
			return applyRouteHandlerMiddlewareContext(new Response(null, { status: specialError.statusCode }), options.middlewareContext);
		}
		console.error("[vinext] Route handler error:", error);
		options.reportRequestError(error instanceof Error ? error : new Error(String(error)), {
			path: options.cleanPathname,
			method: options.request.method,
			headers: Object.fromEntries(options.request.headers.entries())
		}, {
			routerKind: "App Router",
			routePath: options.routePattern,
			routeType: "route"
		});
		return applyRouteHandlerMiddlewareContext(new Response(null, { status: 500 }), options.middlewareContext);
	} finally {
		options.setHeadersAccessPhase(previousHeadersPhase);
	}
}
//#endregion
//#region node_modules/vinext/dist/server/app-route-handler-cache.js
var EMPTY_PARAMS = Object.freeze({});
function getCachedAppRouteValue(entry) {
	return entry?.value.value && entry.value.value.kind === "APP_ROUTE" ? entry.value.value : null;
}
async function readAppRouteHandlerCacheResponse(options) {
	const routeKey = options.isrRouteKey(options.cleanPathname);
	try {
		const cached = await options.isrGet(routeKey);
		const cachedValue = getCachedAppRouteValue(cached);
		if (cachedValue && !cached?.isStale) {
			options.isrDebug?.("HIT (route)", options.cleanPathname);
			options.clearRequestContext();
			return applyRouteHandlerMiddlewareContext(buildRouteHandlerCachedResponse(cachedValue, {
				cacheState: "HIT",
				cacheControl: cached?.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isHead: options.isAutoHead,
				revalidateSeconds: options.revalidateSeconds
			}), options.middlewareContext);
		}
		if (cached?.isStale && cachedValue) {
			const staleValue = cachedValue;
			const revalidateSearchParams = new URLSearchParams(options.revalidateSearchParams);
			options.scheduleBackgroundRegeneration(routeKey, async () => {
				await options.runInRevalidationContext(async () => {
					options.setNavigationContext({
						pathname: options.cleanPathname,
						searchParams: revalidateSearchParams,
						params: options.params ?? EMPTY_PARAMS
					});
					const { dynamicUsedInHandler, response } = await runAppRouteHandler({
						basePath: options.basePath,
						consumeDynamicUsage: options.consumeDynamicUsage,
						dynamicConfig: options.dynamicConfig,
						handlerFn: options.handlerFn,
						i18n: options.i18n,
						markDynamicUsage: options.markDynamicUsage,
						params: options.params === null ? null : makeThenableParams(options.params),
						request: new Request(options.requestUrl, { method: "GET" }),
						routePattern: options.routePattern,
						setHeadersAccessPhase: options.setHeadersAccessPhase
					});
					options.setNavigationContext(null);
					assertSupportedAppRouteHandlerResponse(response);
					if (dynamicUsedInHandler) {
						markKnownDynamicAppRoute(options.routePattern);
						options.isrDebug?.("route regen skipped (dynamic usage)", options.cleanPathname);
						return;
					}
					const routeTags = options.buildPageCacheTags(options.cleanPathname, options.getCollectedFetchTags());
					const routeCacheValue = await buildAppRouteCacheValue(response);
					await options.isrSet(routeKey, routeCacheValue, options.revalidateSeconds, routeTags, options.expireSeconds);
					options.isrDebug?.("route regen complete", routeKey);
				});
			});
			options.isrDebug?.("STALE (route)", options.cleanPathname);
			options.clearRequestContext();
			return applyRouteHandlerMiddlewareContext(buildRouteHandlerCachedResponse(staleValue, {
				cacheState: "STALE",
				cacheControl: cached.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isHead: options.isAutoHead,
				revalidateSeconds: options.revalidateSeconds
			}), options.middlewareContext);
		}
	} catch (routeCacheError) {
		console.error("[vinext] ISR route cache read error:", routeCacheError);
	}
	return null;
}
//#endregion
//#region node_modules/vinext/dist/server/app-route-handler-dispatch.js
function isAppRouteHandlerFunction(value) {
	return typeof value === "function";
}
function buildRouteHandlerPageCacheTags(pathname, extraTags, routeSegments) {
	return buildPageCacheTags(pathname, extraTags, routeSegments, "route");
}
async function runInRouteHandlerRevalidationContext(options, renderFn) {
	await runWithRequestContext(createRequestContext({
		headersContext: createStaticGenerationHeadersContext({
			dynamicConfig: options.dynamicConfig,
			routeKind: "route",
			routePattern: options.routePattern
		}),
		executionContext: getRequestExecutionContext(),
		unstableCacheRevalidation: "foreground"
	}), async () => {
		ensureFetchPatch();
		setCurrentFetchSoftTags(buildRouteHandlerPageCacheTags(options.cleanPathname, [], options.routeSegments));
		await renderFn();
	});
}
async function dispatchAppRouteHandler(options) {
	const { route } = options;
	const handler = route.routeHandler;
	const method = options.request.method.toUpperCase();
	const revalidateSeconds = getAppRouteHandlerRevalidateSeconds(handler);
	const isDevelopment = options.isDevelopment ?? false;
	const isProduction = options.isProduction ?? true;
	if (hasAppRouteHandlerDefaultExport(handler) && isDevelopment) console.error("[vinext] Detected default export in route handler " + route.pattern + ". Export a named export for each HTTP method instead.");
	if (!isValidHTTPMethod(method)) {
		options.clearRequestContext();
		return applyRouteHandlerMiddlewareContext(new Response(null, { status: 400 }), options.middlewareContext);
	}
	const { allowHeaderForOptions, handlerFn, isAutoHead, shouldAutoRespondToOptions } = resolveAppRouteHandlerMethod(handler, method);
	if (shouldAutoRespondToOptions) {
		options.clearRequestContext();
		return applyRouteHandlerMiddlewareContext(new Response(null, {
			status: 204,
			headers: { Allow: allowHeaderForOptions }
		}), options.middlewareContext);
	}
	const resolvedHandlerFn = isAppRouteHandlerFunction(handlerFn) ? handlerFn : void 0;
	if (revalidateSeconds !== null && shouldReadAppRouteHandlerCache({
		dynamicConfig: handler.dynamic,
		handlerFn: resolvedHandlerFn,
		isAutoHead,
		isKnownDynamic: isKnownDynamicAppRoute(route.pattern),
		isProduction,
		method,
		revalidateSeconds
	}) && resolvedHandlerFn) {
		const cachedRouteResponse = await readAppRouteHandlerCacheResponse({
			basePath: options.basePath,
			buildPageCacheTags(pathname, extraTags) {
				return buildRouteHandlerPageCacheTags(pathname, extraTags, route.routeSegments);
			},
			cleanPathname: options.cleanPathname,
			clearRequestContext: options.clearRequestContext,
			consumeDynamicUsage,
			dynamicConfig: handler.dynamic,
			getCollectedFetchTags,
			handlerFn: resolvedHandlerFn,
			i18n: options.i18n,
			isAutoHead,
			isrDebug: options.isrDebug,
			isrGet: options.isrGet,
			isrRouteKey: options.isrRouteKey,
			isrSet: options.isrSet,
			markDynamicUsage,
			middlewareContext: options.middlewareContext,
			params: options.params,
			requestUrl: options.request.url,
			revalidateSearchParams: options.searchParams,
			expireSeconds: options.expireSeconds,
			revalidateSeconds,
			routePattern: route.pattern,
			runInRevalidationContext(renderFn) {
				return runInRouteHandlerRevalidationContext({
					cleanPathname: options.cleanPathname,
					dynamicConfig: handler.dynamic,
					routePattern: route.pattern,
					routeSegments: route.routeSegments
				}, renderFn);
			},
			scheduleBackgroundRegeneration(key, renderFn) {
				options.scheduleBackgroundRegeneration(key, renderFn, {
					routerKind: "App Router",
					routePath: route.pattern,
					routeType: "route"
				});
			},
			setHeadersAccessPhase,
			setNavigationContext
		});
		if (cachedRouteResponse) return cachedRouteResponse;
	}
	if (resolvedHandlerFn) return executeAppRouteHandler({
		basePath: options.basePath,
		buildPageCacheTags(pathname, extraTags) {
			return buildRouteHandlerPageCacheTags(pathname, extraTags, route.routeSegments);
		},
		cleanPathname: options.cleanPathname,
		clearRequestContext: options.clearRequestContext,
		consumeDynamicUsage,
		executionContext: getRequestExecutionContext(),
		getAndClearPendingCookies,
		getCollectedFetchTags,
		getDraftModeCookieHeader,
		handler,
		handlerFn: resolvedHandlerFn,
		i18n: options.i18n,
		isAutoHead,
		isProduction,
		isrDebug: options.isrDebug,
		isrRouteKey: options.isrRouteKey,
		isrSet: options.isrSet,
		markDynamicUsage,
		method,
		middlewareContext: options.middlewareContext,
		middlewareRequestHeaders: options.middlewareRequestHeaders,
		params: options.params === null ? null : makeThenableParams(options.params),
		reportRequestError(error, request, context) {
			reportRequestError(error, request, context);
		},
		request: options.request,
		expireSeconds: options.expireSeconds,
		revalidateSeconds,
		routePattern: route.pattern,
		setHeadersAccessPhase
	});
	options.clearRequestContext();
	return applyRouteHandlerMiddlewareContext(new Response(null, { status: 405 }), options.middlewareContext);
}
//#endregion
//#region node_modules/vinext/dist/server/server-action-not-found.js
var SERVER_ACTION_NOT_FOUND_DOCS = "https://nextjs.org/docs/messages/failed-to-find-server-action";
var SERVER_ACTION_NOT_FOUND_BODY = "Server action not found.";
function getServerActionNotFoundPrefix(actionId) {
	return `Failed to find Server Action${actionId ? ` "${actionId}"` : ""}.`;
}
function getServerActionNotFoundMessage(actionId) {
	return `${getServerActionNotFoundPrefix(actionId)} This request might be from an older or newer deployment.\nRead more: ${SERVER_ACTION_NOT_FOUND_DOCS}`;
}
function getUnknownMessage(error) {
	if (error instanceof Error) return error.message;
	return typeof error === "string" ? error : "";
}
function isServerActionNotFoundError(error, actionId) {
	const message = getUnknownMessage(error);
	if (!message) return false;
	if (actionId && message.startsWith(getServerActionNotFoundPrefix(actionId))) return true;
	if (!actionId && message.startsWith("Failed to find Server Action")) return true;
	if (actionId) {
		if (message.includes(`[vite-rsc] invalid server reference '${actionId}'`)) return true;
		if (message.includes(`server reference not found '${actionId}'`)) return true;
		return false;
	}
	return /\[vite-rsc] invalid server reference '/.test(message) || /server reference not found '/.test(message);
}
function createServerActionNotFoundResponse() {
	return new Response(SERVER_ACTION_NOT_FOUND_BODY, {
		status: 404,
		headers: {
			[NEXTJS_ACTION_NOT_FOUND_HEADER]: "1",
			"content-type": "text/plain"
		}
	});
}
//#endregion
//#region node_modules/vinext/dist/utils/text-stream.js
/**
* Helpers for the repeated `new TextDecoder()` + `ReadableStream` chunk-loop
* pattern used across the server. Each helper handles the streaming-decode
* boundary correctly (final empty `decoder.decode()` flush so any incomplete
* trailing UTF-8 sequence is reported).
*
* Sites with additional load-bearing behaviour (line-buffered transforms,
* raw-byte accumulators, mixed string/Uint8Array streams, cache-key body
* canonicalisation) intentionally still inline their own decoder.
*/
/**
* Drain a UTF-8 byte stream and return the full decoded text. The stream
* reader is released on both success and failure.
*/
async function readStreamAsText(stream) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	const chunks = [];
	try {
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			chunks.push(decoder.decode(value, { stream: true }));
		}
		chunks.push(decoder.decode());
		return chunks.join("");
	} finally {
		reader.releaseLock();
	}
}
/**
* Drain a UTF-8 byte stream up to `maxBytes` of *raw* input, returning the
* decoded text. If the raw size limit is exceeded, the reader is cancelled
* and `onLimitExceeded` is invoked; it MUST throw — its return type is
* `never` to enforce that. Each caller passes its own error type.
*
* The size check is on raw bytes (pre-decode) to bound memory before
* paying the decoder cost.
*/
async function readStreamAsTextWithLimit(stream, maxBytes, onLimitExceeded) {
	const reader = stream.getReader();
	const decoder = new TextDecoder();
	const chunks = [];
	let totalSize = 0;
	try {
		for (;;) {
			const result = await reader.read();
			if (result.done) break;
			totalSize += result.value.byteLength;
			if (totalSize > maxBytes) {
				await reader.cancel();
				onLimitExceeded();
			}
			chunks.push(decoder.decode(result.value, { stream: true }));
		}
		chunks.push(decoder.decode());
		return chunks.join("");
	} finally {
		reader.releaseLock();
	}
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-params.js
function getAppPageSegmentParamName(segment) {
	if (segment.startsWith("[[...") && segment.endsWith("]]") && segment.length > 7) return segment.slice(5, -2);
	if (segment.startsWith("[...") && segment.endsWith("]") && segment.length > 5) return segment.slice(4, -1);
	if (segment.startsWith("[") && segment.endsWith("]") && !segment.includes(".") && segment.length > 2) return segment.slice(1, -1);
	return null;
}
function isEmptyOptionalCatchAll(segment, paramValue) {
	return segment.startsWith("[[...") && Array.isArray(paramValue) && paramValue.length === 0;
}
function resolveAppPageSegmentParams(routeSegments, treePosition, matchedParams) {
	const segmentParams = {};
	const segments = routeSegments ?? [];
	const end = Math.min(Math.max(treePosition, 0), segments.length);
	for (let index = 0; index < end; index++) {
		const segment = segments[index];
		const paramName = getAppPageSegmentParamName(segment);
		if (!paramName) continue;
		const paramValue = matchedParams[paramName];
		if (paramValue === void 0 || isEmptyOptionalCatchAll(segment, paramValue)) continue;
		segmentParams[paramName] = paramValue;
	}
	return segmentParams;
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-request.js
function pickRouteParams(matchedParams, routeParamNames) {
	const params = {};
	for (const paramName of routeParamNames) {
		const value = matchedParams[paramName];
		if (value !== void 0) params[paramName] = value;
	}
	return params;
}
function collectParentParamNames(routeSegments, boundaryPosition) {
	const limit = Math.max(0, Math.min(boundaryPosition, routeSegments.length));
	const names = [];
	for (const segment of routeSegments.slice(0, limit)) {
		const name = getAppPageSegmentParamName(segment);
		if (name && !names.includes(name)) names.push(name);
	}
	return names;
}
function getLayoutGenerateStaticParamsBoundary(layoutTreePosition) {
	return (layoutTreePosition ?? 0) - 1;
}
function resolveAppPageGenerateStaticParamsSources(options) {
	const sources = [];
	options.layouts?.forEach((layout, index) => {
		if (typeof layout?.generateStaticParams !== "function") return;
		sources.push({
			generateStaticParams: layout.generateStaticParams,
			parentParamNames: collectParentParamNames(options.routeSegments, getLayoutGenerateStaticParamsBoundary(options.layoutTreePositions?.[index]))
		});
	});
	if (typeof options.page?.generateStaticParams === "function") sources.push({
		generateStaticParams: options.page.generateStaticParams,
		parentParamNames: collectParentParamNames(options.routeSegments, Math.max(0, options.routeSegments.length - 1))
	});
	return sources;
}
function areStaticParamsAllowed(params, staticParams) {
	const paramKeys = Object.keys(params);
	return staticParams.some((staticParamSet) => paramKeys.every((key) => {
		const value = params[key];
		const staticValue = staticParamSet[key];
		if (staticValue === void 0) return true;
		if (Array.isArray(value)) return JSON.stringify(value) === JSON.stringify(staticValue);
		if (typeof staticValue === "string" || typeof staticValue === "number" || typeof staticValue === "boolean") return String(value) === String(staticValue);
		return JSON.stringify(value) === JSON.stringify(staticValue);
	}));
}
function normalizeGenerateStaticParams(generateStaticParams) {
	return (Array.isArray(generateStaticParams) ? generateStaticParams : [generateStaticParams]).flatMap((source) => {
		if (typeof source === "function") return [{
			generateStaticParams: source,
			parentParamNames: []
		}];
		if (typeof source?.generateStaticParams === "function") return [source];
		return [];
	});
}
async function validateAppPageDynamicParams(options) {
	if (!options.enforceStaticParamsOnly || !options.isDynamicRoute) return null;
	const generateStaticParamsSources = normalizeGenerateStaticParams(options.generateStaticParams);
	if (generateStaticParamsSources.length === 0) {
		options.clearRequestContext();
		return notFoundResponse();
	}
	for (const source of generateStaticParamsSources) {
		const staticParams = await runWithFetchDedupe(() => source.generateStaticParams({ params: pickRouteParams(options.params, source.parentParamNames) }));
		if (Array.isArray(staticParams) && !areStaticParamsAllowed(options.params, staticParams)) {
			options.clearRequestContext();
			return notFoundResponse();
		}
	}
	return null;
}
function resolveAppPageInterceptState(options) {
	if (!options.isRscRequest) return { kind: "none" };
	const intercept = options.findIntercept(options.cleanPathname);
	if (!intercept) return { kind: "none" };
	const sourceRoute = options.getSourceRoute(intercept.sourceRouteIndex);
	if (!sourceRoute) return { kind: "none" };
	if (sourceRoute === options.currentRoute) return {
		kind: "current-route",
		intercept
	};
	return {
		kind: "source-route",
		intercept,
		sourceRoute
	};
}
function resolveAppPageActionRerenderTarget(options) {
	const interceptState = resolveAppPageInterceptState({
		cleanPathname: options.cleanPathname,
		currentRoute: options.currentRoute,
		findIntercept: options.findIntercept,
		getRouteParamNames: options.getRouteParamNames,
		getSourceRoute: options.getSourceRoute,
		isRscRequest: options.isRscRequest,
		toInterceptOpts: options.toInterceptOpts
	});
	if (interceptState.kind === "source-route") return {
		interceptOpts: options.toInterceptOpts(interceptState.intercept),
		navigationParams: interceptState.intercept.matchedParams,
		params: pickRouteParams(interceptState.intercept.matchedParams, options.getRouteParamNames(interceptState.sourceRoute)),
		route: interceptState.sourceRoute
	};
	return {
		interceptOpts: interceptState.kind === "current-route" ? options.toInterceptOpts(interceptState.intercept) : void 0,
		navigationParams: options.currentParams,
		params: options.currentParams,
		route: options.currentRoute
	};
}
async function resolveAppPageIntercept(options) {
	const interceptState = resolveAppPageInterceptState({
		cleanPathname: options.cleanPathname,
		currentRoute: options.currentRoute,
		findIntercept: options.findIntercept,
		getRouteParamNames: options.getRouteParamNames,
		getSourceRoute: options.getSourceRoute,
		isRscRequest: options.isRscRequest,
		toInterceptOpts: options.toInterceptOpts
	});
	if (interceptState.kind === "source-route") {
		options.setNavigationContext({
			params: interceptState.intercept.matchedParams,
			pathname: options.cleanPathname,
			searchParams: options.searchParams
		});
		const interceptElement = await options.buildPageElement(interceptState.sourceRoute, pickRouteParams(interceptState.intercept.matchedParams, options.getRouteParamNames(interceptState.sourceRoute)), options.toInterceptOpts(interceptState.intercept), options.searchParams);
		return {
			interceptOpts: void 0,
			response: await options.renderInterceptResponse(interceptState.sourceRoute, interceptElement)
		};
	}
	return {
		interceptOpts: interceptState.kind === "current-route" ? options.toInterceptOpts(interceptState.intercept) : void 0,
		response: null
	};
}
async function buildAppPageElement(options) {
	try {
		return {
			element: await options.buildPageElement(),
			response: null
		};
	} catch (error) {
		const specialError = options.resolveSpecialError(error);
		if (specialError) return {
			element: null,
			response: await options.renderSpecialError(specialError)
		};
		const errorBoundaryResponse = await options.renderErrorBoundaryPage(error);
		if (errorBoundaryResponse) return {
			element: null,
			response: errorBoundaryResponse
		};
		throw error;
	}
}
//#endregion
//#region node_modules/vinext/dist/server/app-server-action-execution.js
/**
* Matches Next.js' server action argument cap to prevent stack overflow in
* Function.prototype.apply when decoding hostile action payloads.
*/
var SERVER_ACTION_ARGS_LIMIT = 1e3;
var ACTION_DID_NOT_REVALIDATE = 0;
var ACTION_DID_REVALIDATE_STATIC_AND_DYNAMIC = 1;
function setActionRevalidatedHeader(headers, kind) {
	if (kind === ACTION_DID_NOT_REVALIDATE) return;
	headers.set(ACTION_REVALIDATED_HEADER, JSON.stringify(kind));
}
function resolveActionRevalidationKind(hasModifiedCookies) {
	const revalidationKind = getAndClearActionRevalidationKind();
	if (hasModifiedCookies) return ACTION_DID_REVALIDATE_STATIC_AND_DYNAMIC;
	return revalidationKind;
}
function isRequestBodyTooLarge(error) {
	return error instanceof Error && error.message === "Request body too large";
}
function isAppServerActionFunction(action) {
	return typeof action === "function";
}
function normalizeError(error) {
	return error instanceof Error ? error : new Error(String(error));
}
function validateServerActionArgs(args) {
	if (args.length > SERVER_ACTION_ARGS_LIMIT) throw new Error(`Server Action arguments list is too long (${args.length}). Maximum allowed is ${SERVER_ACTION_ARGS_LIMIT}.`);
}
async function readActionBodyWithLimit(request, maxBytes) {
	if (!request.body) return "";
	return readStreamAsTextWithLimit(request.body, maxBytes, () => {
		throw new Error("Request body too large");
	});
}
async function readActionFormDataWithLimit(request, maxBytes) {
	if (!request.body) return new FormData();
	const reader = request.body.getReader();
	const chunks = [];
	let totalSize = 0;
	for (;;) {
		const result = await reader.read();
		if (result.done) break;
		totalSize += result.value.byteLength;
		if (totalSize > maxBytes) {
			await reader.cancel();
			throw new Error("Request body too large");
		}
		chunks.push(result.value);
	}
	const combined = new Uint8Array(totalSize);
	let offset = 0;
	for (const chunk of chunks) {
		combined.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return new Response(combined, { headers: { "Content-Type": request.headers.get("content-type") || "" } }).formData();
}
function getActionRedirect(error) {
	const digest = getNextErrorDigest(error);
	if (!digest) return null;
	const redirect = parseNextRedirectDigest(digest);
	if (!redirect) return null;
	return {
		status: redirect.status,
		type: redirect.type ?? "push",
		url: redirect.url
	};
}
/**
* Prepend the configured next.config `basePath` to a server-action redirect
* target before it goes on the wire.
*
* `redirect("/foo")` called from a server action mounted at `/base/...` must
* land the browser at `/base/foo`, mirroring how Next.js threads basePath
* through `addPathPrefix(getURLFromRedirectError(err), basePath)` in
* `app-render.tsx` for SSR redirects and in `action-handler.ts` for action
* redirects.
*
* Idempotent and external-aware:
*  - Empty basePath → returned unchanged.
*  - External URLs (`http://`, `https://`, `data:`, protocol-relative `//`)
*    are returned unchanged because the framework does not own those routes.
*  - Targets that already start with the configured basePath are returned
*    unchanged so this helper can be applied at any layer without risk of
*    double-prefixing (`/base/base/foo`).
*
* Exported for tests. Used by both the progressive (no-JS form POST) and
* RSC (`ACTION_REDIRECT_HEADER`) action redirect paths below.
*
* @see https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/action-handler.ts
*/
function applyActionRedirectBasePath(url, basePath) {
	if (!basePath) return url;
	if (isExternalUrl(url)) return url;
	if (hasBasePath(url, basePath)) return url;
	if (!url.startsWith("/")) return url;
	const queryIndex = url.indexOf("?");
	const hashIndex = url.indexOf("#");
	const splitAt = queryIndex === -1 ? hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
	const pathname = splitAt === -1 ? url : url.slice(0, splitAt);
	const suffix = splitAt === -1 ? "" : url.slice(splitAt);
	return `${addBasePathToPathname(pathname, basePath)}${suffix}`;
}
function getActionHttpFallbackStatus(error) {
	const digest = getNextErrorDigest(error);
	if (!digest) return null;
	const httpError = parseNextHttpErrorDigest(digest);
	if (!httpError || !Number.isInteger(httpError.status)) return null;
	return httpError.status;
}
function createServerActionErrorResponse(error, options) {
	options.getAndClearPendingCookies();
	console.error("[vinext] Server action error:", error);
	options.reportRequestError(normalizeError(error), {
		path: options.cleanPathname,
		method: options.request.method,
		headers: Object.fromEntries(options.request.headers.entries())
	}, {
		routerKind: "App Router",
		routePath: options.cleanPathname,
		routeType: "action"
	});
	options.clearRequestContext();
	return internalServerErrorResponse(void 0);
}
function createActionNotFoundResponse(actionId, options) {
	options.getAndClearPendingCookies();
	console.warn(getServerActionNotFoundMessage(actionId));
	options.clearRequestContext();
	return createServerActionNotFoundResponse();
}
function isProgressiveServerActionRequest(request, contentType, actionId) {
	return request.method.toUpperCase() === "POST" && contentType.startsWith("multipart/form-data") && !actionId;
}
async function handleProgressiveServerActionRequest(options) {
	if (!isProgressiveServerActionRequest(options.request, options.contentType, options.actionId)) return null;
	if (options.request.headers.get("x-action-forwarded")) return createActionNotFoundResponse(null, {
		clearRequestContext: options.clearRequestContext,
		getAndClearPendingCookies: options.getAndClearPendingCookies
	});
	const csrfResponse = validateCsrfOrigin(options.request, options.allowedOrigins);
	if (csrfResponse) return csrfResponse;
	if (parseInt(options.request.headers.get("content-length") || "0", 10) > options.maxActionBodySize) {
		options.clearRequestContext();
		return payloadTooLargeResponse();
	}
	try {
		let body;
		try {
			body = await options.readFormDataWithLimit(options.request.clone(), options.maxActionBodySize);
		} catch (error) {
			if (isRequestBodyTooLarge(error)) {
				options.clearRequestContext();
				return payloadTooLargeResponse();
			}
			throw error;
		}
		const payloadResponse = await validateServerActionPayload(body);
		if (payloadResponse) {
			options.clearRequestContext();
			return payloadResponse;
		}
		const action = await options.decodeAction(body);
		if (!isAppServerActionFunction(action)) return null;
		let actionRedirect = null;
		let actionError = void 0;
		let actionFailed = false;
		let actionResult;
		const previousHeadersPhase = options.setHeadersAccessPhase("action");
		try {
			actionResult = await action();
		} catch (error) {
			actionRedirect = getActionRedirect(error);
			if (!actionRedirect) {
				actionError = error;
				actionFailed = true;
				if (!(getActionHttpFallbackStatus(error) !== null || isServerActionNotFoundError(error, null))) {
					console.error("[vinext] Server action error:", error);
					options.reportRequestError(normalizeError(error), {
						path: options.cleanPathname,
						method: options.request.method,
						headers: Object.fromEntries(options.request.headers.entries())
					}, {
						routerKind: "App Router",
						routePath: options.cleanPathname,
						routeType: "action"
					});
				}
			}
		} finally {
			options.setHeadersAccessPhase(previousHeadersPhase);
		}
		if (!actionRedirect) {
			getAndClearActionRevalidationKind();
			if (actionFailed) return {
				kind: "form-state",
				formState: null,
				actionError,
				actionFailed
			};
			return {
				kind: "form-state",
				formState: await options.decodeFormState(actionResult, body) ?? null
			};
		}
		const actionPendingCookies = options.getAndClearPendingCookies();
		const actionDraftCookie = options.getDraftModeCookieHeader();
		const actionRevalidationKind = resolveActionRevalidationKind(actionPendingCookies.length > 0 || Boolean(actionDraftCookie));
		options.clearRequestContext();
		const headers = new Headers();
		const prefixedRedirectUrl = applyActionRedirectBasePath(actionRedirect.url, options.basePath ?? "");
		headers.set("Location", new URL(prefixedRedirectUrl, options.request.url).toString());
		mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders);
		for (const cookie of actionPendingCookies) headers.append("Set-Cookie", cookie);
		if (actionDraftCookie) headers.append("Set-Cookie", actionDraftCookie);
		setActionRevalidatedHeader(headers, actionRevalidationKind);
		return new Response(null, {
			status: 303,
			headers
		});
	} catch (error) {
		if (isServerActionNotFoundError(error, null)) return createActionNotFoundResponse(null, {
			clearRequestContext: options.clearRequestContext,
			getAndClearPendingCookies: options.getAndClearPendingCookies
		});
		getAndClearActionRevalidationKind();
		options.getAndClearPendingCookies();
		console.error("[vinext] Server action payload parsing error:", error);
		options.reportRequestError(normalizeError(error), {
			path: options.cleanPathname,
			method: options.request.method,
			headers: Object.fromEntries(options.request.headers.entries())
		}, {
			routerKind: "App Router",
			routePath: options.cleanPathname,
			routeType: "action"
		});
		options.clearRequestContext();
		return internalServerErrorResponse(void 0);
	}
}
async function handleServerActionRscRequest(options) {
	if (options.request.method.toUpperCase() !== "POST" || !options.actionId) return null;
	if (options.request.headers.get("x-action-forwarded")) return createActionNotFoundResponse(options.actionId, {
		clearRequestContext: options.clearRequestContext,
		getAndClearPendingCookies: options.getAndClearPendingCookies
	});
	const csrfResponse = validateCsrfOrigin(options.request, options.allowedOrigins);
	if (csrfResponse) return csrfResponse;
	if (parseInt(options.request.headers.get("content-length") || "0", 10) > options.maxActionBodySize) {
		options.clearRequestContext();
		return payloadTooLargeResponse();
	}
	try {
		let body;
		try {
			body = options.contentType.startsWith("multipart/form-data") ? await options.readFormDataWithLimit(options.request, options.maxActionBodySize) : await options.readBodyWithLimit(options.request, options.maxActionBodySize);
		} catch (error) {
			if (isRequestBodyTooLarge(error)) {
				options.clearRequestContext();
				return payloadTooLargeResponse();
			}
			throw error;
		}
		const payloadResponse = await validateServerActionPayload(body);
		if (payloadResponse) {
			options.clearRequestContext();
			return payloadResponse;
		}
		let action;
		try {
			action = await options.loadServerAction(options.actionId);
		} catch (error) {
			if (isServerActionNotFoundError(error, options.actionId)) return createActionNotFoundResponse(options.actionId, {
				clearRequestContext: options.clearRequestContext,
				getAndClearPendingCookies: options.getAndClearPendingCookies
			});
			throw error;
		}
		if (!isAppServerActionFunction(action)) return createActionNotFoundResponse(options.actionId, {
			clearRequestContext: options.clearRequestContext,
			getAndClearPendingCookies: options.getAndClearPendingCookies
		});
		const temporaryReferences = options.createTemporaryReferenceSet();
		const args = await options.decodeReply(body, { temporaryReferences });
		let returnValue;
		let actionRedirect = null;
		let actionStatus = 200;
		const previousHeadersPhase = options.setHeadersAccessPhase("action");
		try {
			try {
				validateServerActionArgs(args);
				returnValue = {
					ok: true,
					data: await action.apply(null, args)
				};
			} catch (error) {
				actionRedirect = getActionRedirect(error);
				if (actionRedirect) returnValue = {
					ok: true,
					data: void 0
				};
				else {
					const httpFallbackStatus = getActionHttpFallbackStatus(error);
					if (httpFallbackStatus !== null) {
						actionStatus = httpFallbackStatus;
						returnValue = {
							ok: false,
							data: error
						};
					} else {
						console.error("[vinext] Server action error:", error);
						returnValue = {
							ok: false,
							data: options.sanitizeErrorForClient(error)
						};
					}
				}
			}
		} finally {
			options.setHeadersAccessPhase(previousHeadersPhase);
		}
		if (actionRedirect) {
			const actionPendingCookies = options.getAndClearPendingCookies();
			const actionDraftCookie = options.getDraftModeCookieHeader();
			const actionRevalidationKind = resolveActionRevalidationKind(actionPendingCookies.length > 0 || Boolean(actionDraftCookie));
			options.clearRequestContext();
			const redirectHeaders = new Headers({
				"Content-Type": VINEXT_RSC_CONTENT_TYPE,
				Vary: VINEXT_RSC_VARY_HEADER
			});
			mergeMiddlewareResponseHeaders(redirectHeaders, options.middlewareHeaders);
			applyRscCompatibilityIdHeader(redirectHeaders);
			redirectHeaders.set(ACTION_REDIRECT_HEADER, applyActionRedirectBasePath(actionRedirect.url, options.basePath ?? ""));
			redirectHeaders.set(ACTION_REDIRECT_TYPE_HEADER, actionRedirect.type);
			redirectHeaders.set(ACTION_REDIRECT_STATUS_HEADER, String(actionRedirect.status));
			for (const cookie of actionPendingCookies) redirectHeaders.append("Set-Cookie", cookie);
			if (actionDraftCookie) redirectHeaders.append("Set-Cookie", actionDraftCookie);
			setActionRevalidatedHeader(redirectHeaders, actionRevalidationKind);
			return new Response("", {
				status: 200,
				headers: redirectHeaders
			});
		}
		const actionPendingCookies = options.getAndClearPendingCookies();
		const actionDraftCookie = options.getDraftModeCookieHeader();
		const actionRevalidationKind = resolveActionRevalidationKind(actionPendingCookies.length > 0 || Boolean(actionDraftCookie));
		if (actionRevalidationKind === ACTION_DID_NOT_REVALIDATE) {
			const onRenderError = options.createRscOnErrorHandler(options.request, options.cleanPathname, options.cleanPathname);
			const rscStream = await options.renderToReadableStream({ returnValue }, {
				temporaryReferences,
				onError: onRenderError
			});
			options.clearRequestContext();
			const actionHeaders = new Headers({
				"Content-Type": VINEXT_RSC_CONTENT_TYPE,
				Vary: VINEXT_RSC_VARY_HEADER
			});
			mergeMiddlewareResponseHeaders(actionHeaders, options.middlewareHeaders);
			applyRscCompatibilityIdHeader(actionHeaders);
			return new Response(rscStream, {
				status: options.middlewareStatus ?? actionStatus,
				headers: actionHeaders
			});
		}
		const match = options.matchRoute(options.cleanPathname);
		let element;
		let errorPattern = match ? match.route.pattern : options.cleanPathname;
		if (match) {
			const { route: actionRoute, params: actionParams } = match;
			const actionRerenderTarget = resolveAppPageActionRerenderTarget({
				cleanPathname: options.cleanPathname,
				currentParams: actionParams,
				currentRoute: actionRoute,
				findIntercept: options.findIntercept,
				getRouteParamNames: options.getRouteParamNames,
				getSourceRoute: options.getSourceRoute,
				isRscRequest: options.isRscRequest,
				toInterceptOpts: options.toInterceptOpts
			});
			options.setNavigationContext({
				pathname: options.cleanPathname,
				searchParams: options.searchParams,
				params: actionRerenderTarget.navigationParams
			});
			setCurrentFetchCacheMode(options.resolveRouteFetchCacheMode?.(actionRerenderTarget.route) ?? null);
			element = options.buildPageElement({
				cleanPathname: options.cleanPathname,
				interceptOpts: actionRerenderTarget.interceptOpts,
				isRscRequest: options.isRscRequest,
				mountedSlotsHeader: options.mountedSlotsHeader,
				params: actionRerenderTarget.params,
				request: options.request,
				route: actionRerenderTarget.route,
				searchParams: options.searchParams,
				renderMode: APP_RSC_RENDER_MODE_ACTION_RERENDER_PRESERVE_UI
			});
			errorPattern = actionRerenderTarget.route.pattern;
		} else {
			const actionRouteId = options.createPayloadRouteId(options.cleanPathname, null);
			element = options.createNotFoundElement(actionRouteId);
		}
		const onRenderError = options.createRscOnErrorHandler(options.request, options.cleanPathname, errorPattern);
		const rscStream = await options.renderToReadableStream({
			root: element,
			returnValue
		}, {
			temporaryReferences,
			onError: onRenderError
		});
		const actionHeaders = new Headers({
			"Content-Type": VINEXT_RSC_CONTENT_TYPE,
			Vary: VINEXT_RSC_VARY_HEADER
		});
		mergeMiddlewareResponseHeaders(actionHeaders, options.middlewareHeaders);
		applyRscCompatibilityIdHeader(actionHeaders);
		setActionRevalidatedHeader(actionHeaders, actionRevalidationKind);
		const actionResponse = new Response(rscStream, {
			status: options.middlewareStatus ?? actionStatus,
			headers: actionHeaders
		});
		if (actionPendingCookies.length > 0 || actionDraftCookie) {
			for (const cookie of actionPendingCookies) actionResponse.headers.append("Set-Cookie", cookie);
			if (actionDraftCookie) actionResponse.headers.append("Set-Cookie", actionDraftCookie);
		}
		return actionResponse;
	} catch (error) {
		getAndClearActionRevalidationKind();
		return createServerActionErrorResponse(error, {
			cleanPathname: options.cleanPathname,
			clearRequestContext: options.clearRequestContext,
			getAndClearPendingCookies: options.getAndClearPendingCookies,
			reportRequestError: options.reportRequestError,
			request: options.request
		});
	}
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-execution.js
/**
* Builds the canonical `NEXT_REDIRECT;<type>;<url>;<status>;` digest that
* Next.js encodes on `redirect()` / `permanentRedirect()` throws. Used when
* we synthesize a flight payload for an RSC navigation: the digest must
* round-trip through the client's `RedirectErrorBoundary` so the same
* `getURLFromRedirectError` / `getRedirectTypeFromError` helpers decode it.
*
* The URL is included verbatim, not encoded — Next.js's `getRedirectError`
* sets `digest = ${CODE};${type};${url};${status};` with the raw URL, and the
* client decodes via `error.digest.split(';').slice(2, -2).join(';')`. We
* default `type=replace` because `redirect()` is replace-style outside of
* server actions, matching Next.js's `getRedirectError` default.
*
* Reference:
*   `.nextjs-ref/packages/next/src/client/components/redirect.ts:20-23`
*   `.nextjs-ref/packages/next/src/client/components/redirect-error.ts`
*/
function formatNextRedirectDigest(options) {
	return `NEXT_REDIRECT;replace;${options.url};${options.statusCode};`;
}
/**
* Marker we tag onto a thrown redirect/notFound error when it originates from
* `generateMetadata()` (vs. a server component itself). Metadata resolution is
* suspended/streamed in Next.js, so a redirect from metadata never becomes an
* HTTP-level 307 — it rides inside the flight payload with a 200 status,
* regardless of whether the request is RSC or a full document SSR. Page-level
* redirect()s, by contrast, still produce a 307 for SSR document requests.
*
* See Next.js test:
*   test/e2e/app-dir/metadata-navigation/metadata-navigation.test.ts
*   ("should support redirect in generateMetadata")
*/
var APP_PAGE_METADATA_ERROR_MARKER = Symbol.for("vinext.appPage.metadataError");
function tagAppPageMetadataError(error) {
	if (error && typeof error === "object") try {
		Object.defineProperty(error, APP_PAGE_METADATA_ERROR_MARKER, {
			value: true,
			enumerable: false,
			configurable: true,
			writable: false
		});
	} catch {}
	return error;
}
function isPromiseLike(value) {
	return Boolean(value && (typeof value === "object" || typeof value === "function") && "then" in value && typeof value.then === "function");
}
function getAppPageStatusText(statusCode) {
	return statusCode === 403 ? "Forbidden" : statusCode === 401 ? "Unauthorized" : "Not Found";
}
function mergeAppPageSpecialErrorHeaders(response, middlewareContext) {
	const headers = new Headers(response.headers);
	mergeMiddlewareResponseHeaders(headers, middlewareContext?.headers ?? null);
	return new Response(response.body, {
		headers,
		status: response.status,
		statusText: response.statusText
	});
}
function resolveAppPageSpecialError(error) {
	if (!(error && typeof error === "object" && "digest" in error)) return null;
	const digest = String(error.digest);
	const fromMetadata = error[APP_PAGE_METADATA_ERROR_MARKER] === true;
	const redirect = parseNextRedirectDigest(digest);
	if (redirect) return {
		kind: "redirect",
		location: redirect.url,
		statusCode: redirect.status,
		...fromMetadata ? { fromMetadata: true } : {}
	};
	const httpError = parseNextHttpErrorDigest(digest);
	if (httpError) return {
		kind: "http-access-fallback",
		statusCode: httpError.status,
		...fromMetadata ? { fromMetadata: true } : {}
	};
	return null;
}
/**
* Resolves a redirect() target against the request URL and prepends the
* configured basePath when the target is an app-internal absolute path.
*
* Mirrors Next.js's `addPathPrefix(getURLFromRedirectError(err), basePath)`
* in `app-render.tsx`: a `redirect("/about")` call from a page mounted at
* `/blog` (basePath) produces `Location: /blog/about`.
*
* Skips prefixing when:
*  - basePath is unset / empty
*  - the target is a full URL pointing at a different origin (external redirect)
*  - the target already starts with the basePath (caller did the work themselves)
*/
function applyAppPageRedirectBasePath(location, requestUrl, basePath) {
	const resolved = new URL(location, requestUrl);
	const requestOrigin = new URL(requestUrl).origin;
	if (!basePath || resolved.origin !== requestOrigin) return resolved.toString();
	resolved.pathname = addBasePathToPathname(resolved.pathname, basePath);
	return resolved.toString();
}
/**
* Returns a path-relative form (`/foo?bar`) of an absolute URL when it shares
* the request's origin; otherwise returns the URL verbatim. Used so the digest
* we embed in the flight payload matches Next.js's convention — the digest
* stores the path the developer passed to `redirect("/about")`, not a
* fully-qualified URL like `https://example.com/about`.
*/
function sameOriginPathOrAbsolute(location, requestUrl) {
	try {
		const resolved = new URL(location, requestUrl);
		const requestOrigin = new URL(requestUrl).origin;
		if (resolved.origin !== requestOrigin) return resolved.toString();
		return `${resolved.pathname}${resolved.search}${resolved.hash}`;
	} catch {
		return location;
	}
}
async function buildAppPageSpecialErrorResponse(options) {
	if (options.specialError.kind === "redirect") {
		options.clearRequestContext();
		const prefixedLocation = applyAppPageRedirectBasePath(options.specialError.location, options.request.url, options.basePath);
		if (Boolean(options.buildRscRedirectFlightStream) && (options.isRscRequest || options.specialError.fromMetadata === true) && options.buildRscRedirectFlightStream) {
			const digestUrl = sameOriginPathOrAbsolute(prefixedLocation, options.request.url);
			const digest = formatNextRedirectDigest({
				url: digestUrl,
				statusCode: options.specialError.statusCode
			});
			const stream = options.buildRscRedirectFlightStream({ digest });
			const headers = new Headers({
				"Content-Type": VINEXT_RSC_CONTENT_TYPE,
				[VINEXT_RSC_REDIRECT_HEADER]: digestUrl
			});
			applyRscCompatibilityIdHeader(headers);
			mergeMiddlewareResponseHeaders(headers, options.middlewareContext?.headers ?? null);
			const pendingCookies = options.getAndClearPendingCookies?.() ?? [];
			for (const cookie of pendingCookies) headers.append("Set-Cookie", cookie);
			return new Response(stream, {
				headers,
				status: 200
			});
		}
		const location = options.isRscRequest ? await createRscRedirectLocation(prefixedLocation, options.request) : prefixedLocation;
		const headers = new Headers({ Location: location });
		mergeMiddlewareResponseHeaders(headers, options.middlewareContext?.headers ?? null);
		const pendingCookies = options.getAndClearPendingCookies?.() ?? [];
		for (const cookie of pendingCookies) headers.append("Set-Cookie", cookie);
		return new Response(null, {
			headers,
			status: options.specialError.statusCode
		});
	}
	if (options.renderFallbackPage) {
		const fallbackResponse = await options.renderFallbackPage(options.specialError.statusCode);
		if (fallbackResponse) return mergeAppPageSpecialErrorHeaders(fallbackResponse, options.middlewareContext);
	}
	options.clearRequestContext();
	return mergeAppPageSpecialErrorHeaders(new Response(getAppPageStatusText(options.specialError.statusCode), { status: options.specialError.statusCode }), options.middlewareContext);
}
/** See `LayoutFlags` type docblock in app-elements.ts for lifecycle. */
async function probeAppPageLayouts(options) {
	const layoutFlags = {};
	const cls = options.classification ?? null;
	return {
		response: await options.runWithSuppressedHookWarning(async () => {
			for (let layoutIndex = options.layoutCount - 1; layoutIndex >= 0; layoutIndex--) {
				const buildTimeResult = cls?.buildTimeClassifications?.get(layoutIndex);
				if (cls && buildTimeResult) {
					layoutFlags[cls.getLayoutId(layoutIndex)] = buildTimeResult === "static" ? "s" : "d";
					if (cls.debugClassification) cls.debugClassification(cls.getLayoutId(layoutIndex), cls.buildTimeReasons?.get(layoutIndex) ?? { layer: "no-classifier" });
					const errorResponse = await probeLayoutForErrors(options, layoutIndex);
					if (errorResponse) return errorResponse;
					continue;
				}
				if (cls) {
					try {
						const { dynamicDetected } = await cls.runWithIsolatedDynamicScope(() => options.probeLayoutAt(layoutIndex));
						layoutFlags[cls.getLayoutId(layoutIndex)] = dynamicDetected ? "d" : "s";
						if (cls.debugClassification) cls.debugClassification(cls.getLayoutId(layoutIndex), {
							layer: "runtime-probe",
							outcome: dynamicDetected ? "dynamic" : "static"
						});
					} catch (error) {
						layoutFlags[cls.getLayoutId(layoutIndex)] = "d";
						if (cls.debugClassification) cls.debugClassification(cls.getLayoutId(layoutIndex), {
							layer: "runtime-probe",
							outcome: "dynamic",
							error: error instanceof Error ? error.message : String(error)
						});
						const errorResponse = await options.onLayoutError(error, layoutIndex);
						if (errorResponse) return errorResponse;
					}
					continue;
				}
				const errorResponse = await probeLayoutForErrors(options, layoutIndex);
				if (errorResponse) return errorResponse;
			}
			return null;
		}),
		layoutFlags
	};
}
async function probeLayoutForErrors(options, layoutIndex) {
	try {
		const layoutResult = options.probeLayoutAt(layoutIndex);
		if (isPromiseLike(layoutResult)) await layoutResult;
	} catch (error) {
		return options.onLayoutError(error, layoutIndex);
	}
	return null;
}
async function probeAppPageComponent(options) {
	return options.runWithSuppressedHookWarning(async () => {
		try {
			const pageResult = options.probePage();
			if (isPromiseLike(pageResult)) if (options.awaitAsyncResult) await pageResult;
			else Promise.resolve(pageResult).catch(() => {});
		} catch (error) {
			return options.onError(error);
		}
		return null;
	});
}
async function readAppPageBinaryStream(stream) {
	const reader = stream.getReader();
	const chunks = [];
	let totalLength = 0;
	for (;;) {
		const { done, value } = await reader.read();
		if (done) break;
		chunks.push(value);
		totalLength += value.byteLength;
	}
	const buffer = new Uint8Array(totalLength);
	let offset = 0;
	for (const chunk of chunks) {
		buffer.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return buffer.buffer;
}
function teeAppPageRscStreamForCapture(stream, shouldCapture) {
	if (!shouldCapture) return { ssrStream: stream };
	const [ssrStream, sideStream] = stream.tee();
	return {
		ssrStream,
		sideStream
	};
}
function buildAppPageFontLinkHeader(preloads) {
	if (!preloads || preloads.length === 0) return "";
	return preloads.map((preload) => `<${preload.href}>; rel=preload; as=font; type=${preload.type}; crossorigin`).join(", ");
}
//#endregion
//#region node_modules/vinext/dist/server/app-rsc-errors.js
function hasDigest(error) {
	return Boolean(error && typeof error === "object" && "digest" in error);
}
function getThrownValueMessage(error) {
	return error instanceof Error ? error.message : String(error);
}
function getThrownValueStack(error) {
	return error instanceof Error ? error.stack || "" : "";
}
/**
* djb2 hash matching Next.js's string-hash package for RSC error digests.
*/
function errorDigest(input) {
	let hash = 5381;
	for (let i = input.length - 1; i >= 0; i--) hash = hash * 33 ^ input.charCodeAt(i);
	return (hash >>> 0).toString();
}
function sanitizeErrorForClient(error, nodeEnv = "production") {
	if (resolveAppPageSpecialError(error)) return error;
	if (nodeEnv !== "production") return error;
	const sanitized = /* @__PURE__ */ new Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
	sanitized.digest = errorDigest(getThrownValueMessage(error) + getThrownValueStack(error));
	return sanitized;
}
function createRscOnErrorHandler$1(options) {
	return (error) => {
		const nodeEnv = options.nodeEnv ?? "production";
		if (hasDigest(error)) return String(error.digest);
		if (nodeEnv !== "production" && error instanceof Error && error.message.includes("Only plain objects, and a few built-ins, can be passed to Client Components")) {
			console.error("[vinext] RSC serialization error: a non-plain object was passed from a Server Component to a Client Component.\n\nCommon causes:\n  * Passing a module namespace (import * as X) directly as a prop.\n    Unlike Next.js (webpack), Vite produces real ESM module namespace objects\n    which are not serializable. Fix: pass individual values instead,\n    e.g. <Comp value={module.value} />\n  * Passing a class instance (new Foo()) as a prop.\n    Fix: convert to a plain object, e.g. { id: foo.id, name: foo.name }\n  * Passing a Date, Map, or Set. Use .toISOString(), [...map.entries()], etc.\n  * Passing Object.create(null). Use { ...obj } to restore a prototype.\n\nOriginal error:", error.message);
			return;
		}
		if (options.requestInfo && options.errorContext && error) options.reportRequestError(error instanceof Error ? error : new Error(getThrownValueMessage(error)), options.requestInfo, options.errorContext);
		if (nodeEnv === "production" && error) return errorDigest(getThrownValueMessage(error) + getThrownValueStack(error));
	};
}
//#endregion
//#region node_modules/vinext/dist/server/app-rsc-error-handler.js
/**
* Build a per-request RSC error handler that extracts request metadata from
* the incoming Web `Request`, wires it into a `createRscOnErrorHandler` call,
* and binds the configured `reportRequestError` reporter.
*
* Pure factory: takes all deps explicitly — no closure over module-level state.
*/
function createAppRscOnErrorHandler(reportRequestError, request, pathname, routePath) {
	const requestHeaders = Object.fromEntries(request.headers.entries());
	const requestInfo = {
		path: pathname,
		method: request.method,
		headers: requestHeaders
	};
	return createRscOnErrorHandler$1({
		errorContext: {
			routerKind: "App Router",
			routePath: routePath || pathname,
			routeType: "render"
		},
		reportRequestError,
		requestInfo
	});
}
//#endregion
//#region node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack-server.edge.production.js
var require_react_server_dom_webpack_server_edge_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	globalThis.AsyncLocalStorage = __viteRscAsyncHooks.AsyncLocalStorage;
	/**
	* @license React
	* react-server-dom-webpack-server.edge.production.js
	*
	* Copyright (c) Meta Platforms, Inc. and affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var ReactDOM = require_react_dom_react_server();
	var React = require_react_react_server();
	function noop() {}
	var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element");
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ASYNC_ITERATOR = Symbol.asyncIterator;
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	var LocalPromise = Promise;
	var scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
		LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	};
	var currentView = null;
	var writtenBytes = 0;
	function writeChunkAndReturn(destination, chunk) {
		if (0 !== chunk.byteLength) if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = /* @__PURE__ */ new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
		else {
			var allowableBytes = currentView.length - writtenBytes;
			allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = /* @__PURE__ */ new Uint8Array(2048), writtenBytes = 0);
			currentView.set(chunk, writtenBytes);
			writtenBytes += chunk.byteLength;
		}
		return !0;
	}
	var textEncoder = new TextEncoder();
	function stringToChunk(content) {
		return textEncoder.encode(content);
	}
	function byteLengthOfChunk(chunk) {
		return chunk.byteLength;
	}
	function closeWithError(destination, error) {
		"function" === typeof destination.error ? destination.error(error) : destination.close();
	}
	var CLIENT_REFERENCE_TAG$1 = Symbol.for("react.client.reference");
	var SERVER_REFERENCE_TAG = Symbol.for("react.server.reference");
	function registerClientReferenceImpl(proxyImplementation, id, async) {
		return Object.defineProperties(proxyImplementation, {
			$$typeof: { value: CLIENT_REFERENCE_TAG$1 },
			$$id: { value: id },
			$$async: { value: async }
		});
	}
	var FunctionBind = Function.prototype.bind;
	var ArraySlice = Array.prototype.slice;
	function bind() {
		var newFn = FunctionBind.apply(this, arguments);
		if (this.$$typeof === SERVER_REFERENCE_TAG) {
			var args = ArraySlice.call(arguments, 1), $$typeof = { value: SERVER_REFERENCE_TAG }, $$id = { value: this.$$id };
			args = { value: this.$$bound ? this.$$bound.concat(args) : args };
			return Object.defineProperties(newFn, {
				$$typeof,
				$$id,
				$$bound: args,
				bind: {
					value: bind,
					configurable: !0
				}
			});
		}
		return newFn;
	}
	var serverReferenceToString = {
		value: function() {
			return "function () { [omitted code] }";
		},
		configurable: !0,
		writable: !0
	};
	var PROMISE_PROTOTYPE = Promise.prototype;
	var deepProxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "$$id": return target.$$id;
				case "$$async": return target.$$async;
				case "name": return target.name;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
			}
			throw Error("Cannot access " + (String(target.name) + "." + String(name)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	};
	function getReference(target, name) {
		switch (name) {
			case "$$typeof": return target.$$typeof;
			case "$$id": return target.$$id;
			case "$$async": return target.$$async;
			case "name": return target.name;
			case "defaultProps": return;
			case "_debugInfo": return;
			case "toJSON": return;
			case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
			case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
			case "__esModule":
				var moduleId = target.$$id;
				target.default = registerClientReferenceImpl(function() {
					throw Error("Attempted to call the default export of " + moduleId + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
				}, target.$$id + "#", target.$$async);
				return !0;
			case "then":
				if (target.then) return target.then;
				if (target.$$async) return;
				var clientReference = registerClientReferenceImpl({}, target.$$id, !0), proxy = new Proxy(clientReference, proxyHandlers$1);
				target.status = "fulfilled";
				target.value = proxy;
				return target.then = registerClientReferenceImpl(function(resolve) {
					return Promise.resolve(resolve(proxy));
				}, target.$$id + "#then", !1);
		}
		if ("symbol" === typeof name) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
		clientReference = target[name];
		clientReference || (clientReference = registerClientReferenceImpl(function() {
			throw Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, target.$$id + "#" + name, target.$$async), Object.defineProperty(clientReference, "name", { value: name }), clientReference = target[name] = new Proxy(clientReference, deepProxyHandlers));
		return clientReference;
	}
	var proxyHandlers$1 = {
		get: function(target, name) {
			return getReference(target, name);
		},
		getOwnPropertyDescriptor: function(target, name) {
			var descriptor = Object.getOwnPropertyDescriptor(target, name);
			descriptor || (descriptor = {
				value: getReference(target, name),
				writable: !1,
				configurable: !1,
				enumerable: !1
			}, Object.defineProperty(target, name, descriptor));
			return descriptor;
		},
		getPrototypeOf: function() {
			return PROMISE_PROTOTYPE;
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	};
	var ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: previousDispatcher.f,
		r: previousDispatcher.r,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule$1,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	function prefetchDNS(href) {
		if ("string" === typeof href && href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "D|" + href;
				hints.has(key) || (hints.add(key), emitHint(request, "D", href));
			} else previousDispatcher.D(href);
		}
	}
	function preconnect(href, crossOrigin) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "C|" + (null == crossOrigin ? "null" : crossOrigin) + "|" + href;
				hints.has(key) || (hints.add(key), "string" === typeof crossOrigin ? emitHint(request, "C", [href, crossOrigin]) : emitHint(request, "C", href));
			} else previousDispatcher.C(href, crossOrigin);
		}
	}
	function preload(href, as, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "L";
				if ("image" === as && options) {
					var imageSrcSet = options.imageSrcSet, imageSizes = options.imageSizes, uniquePart = "";
					"string" === typeof imageSrcSet && "" !== imageSrcSet ? (uniquePart += "[" + imageSrcSet + "]", "string" === typeof imageSizes && (uniquePart += "[" + imageSizes + "]")) : uniquePart += "[][]" + href;
					key += "[image]" + uniquePart;
				} else key += "[" + as + "]" + href;
				hints.has(key) || (hints.add(key), (options = trimOptions(options)) ? emitHint(request, "L", [
					href,
					as,
					options
				]) : emitHint(request, "L", [href, as]));
			} else previousDispatcher.L(href, as, options);
		}
	}
	function preloadModule$1(href, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "m|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "m", [href, options]) : emitHint(request, "m", href);
			}
			previousDispatcher.m(href, options);
		}
	}
	function preinitStyle(href, precedence, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "S|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "S", [
					href,
					"string" === typeof precedence ? precedence : 0,
					options
				]) : "string" === typeof precedence ? emitHint(request, "S", [href, precedence]) : emitHint(request, "S", href);
			}
			previousDispatcher.S(href, precedence, options);
		}
	}
	function preinitScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "X|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "X", [src, options]) : emitHint(request, "X", src);
			}
			previousDispatcher.X(src, options);
		}
	}
	function preinitModuleScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "M|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "M", [src, options]) : emitHint(request, "M", src);
			}
			previousDispatcher.M(src, options);
		}
	}
	function trimOptions(options) {
		if (null == options) return null;
		var hasProperties = !1, trimmed = {}, key;
		for (key in options) null != options[key] && (hasProperties = !0, trimmed[key] = options[key]);
		return hasProperties ? trimmed : null;
	}
	function getChildFormatContext(parentContext, type, props) {
		switch (type) {
			case "img":
				type = props.src;
				var srcSet = props.srcSet;
				if (!("lazy" === props.loading || !type && !srcSet || "string" !== typeof type && null != type || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || parentContext & 3) && ("string" !== typeof type || ":" !== type[4] || "d" !== type[0] && "D" !== type[0] || "a" !== type[1] && "A" !== type[1] || "t" !== type[2] && "T" !== type[2] || "a" !== type[3] && "A" !== type[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
					var sizes = "string" === typeof props.sizes ? props.sizes : void 0;
					var input = props.crossOrigin;
					preload(type || "", "image", {
						imageSrcSet: srcSet,
						imageSizes: sizes,
						crossOrigin: "string" === typeof input ? "use-credentials" === input ? input : "" : void 0,
						integrity: props.integrity,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy
					});
				}
				return parentContext;
			case "link":
				type = props.rel;
				srcSet = props.href;
				if (!(parentContext & 1 || null != props.itemProp || "string" !== typeof type || "string" !== typeof srcSet || "" === srcSet)) switch (type) {
					case "preload":
						preload(srcSet, props.as, {
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy,
							imageSrcSet: props.imageSrcSet,
							imageSizes: props.imageSizes,
							media: props.media
						});
						break;
					case "modulepreload":
						preloadModule$1(srcSet, {
							as: props.as,
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce
						});
						break;
					case "stylesheet": preload(srcSet, "stylesheet", {
						crossOrigin: props.crossOrigin,
						integrity: props.integrity,
						nonce: props.nonce,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy,
						media: props.media
					});
				}
				return parentContext;
			case "picture": return parentContext | 2;
			case "noscript": return parentContext | 1;
			default: return parentContext;
		}
	}
	var supportsRequestStorage = "function" === typeof AsyncLocalStorage;
	var requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null;
	var TEMPORARY_REFERENCE_TAG = Symbol.for("react.temporary.reference");
	var proxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "name": return;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": return;
			}
			throw Error("Cannot access " + String(name) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
		},
		set: function() {
			throw Error("Cannot assign to a temporary client reference from a server module.");
		}
	};
	function createTemporaryReference(temporaryReferences, id) {
		var reference = Object.defineProperties(function() {
			throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, { $$typeof: { value: TEMPORARY_REFERENCE_TAG } });
		reference = new Proxy(reference, proxyHandlers);
		temporaryReferences.set(reference, id);
		return reference;
	}
	var SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default:
				"string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
					if ("pending" === thenable.status) {
						var fulfilledThenable = thenable;
						fulfilledThenable.status = "fulfilled";
						fulfilledThenable.value = fulfilledValue;
					}
				}, function(error) {
					if ("pending" === thenable.status) {
						var rejectedThenable = thenable;
						rejectedThenable.status = "rejected";
						rejectedThenable.reason = error;
					}
				}));
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	var currentRequest$1 = null;
	var thenableIndexCounter = 0;
	var thenableState = null;
	function getThenableStateAfterSuspending() {
		var state = thenableState || [];
		thenableState = null;
		return state;
	}
	var HooksDispatcher = {
		readContext: unsupportedContext,
		use,
		useCallback: function(callback) {
			return callback;
		},
		useContext: unsupportedContext,
		useEffect: unsupportedHook,
		useImperativeHandle: unsupportedHook,
		useLayoutEffect: unsupportedHook,
		useInsertionEffect: unsupportedHook,
		useMemo: function(nextCreate) {
			return nextCreate();
		},
		useReducer: unsupportedHook,
		useRef: unsupportedHook,
		useState: unsupportedHook,
		useDebugValue: function() {},
		useDeferredValue: unsupportedHook,
		useTransition: unsupportedHook,
		useSyncExternalStore: unsupportedHook,
		useId,
		useHostTransitionStatus: unsupportedHook,
		useFormState: unsupportedHook,
		useActionState: unsupportedHook,
		useOptimistic: unsupportedHook,
		useMemoCache: function(size) {
			for (var data = Array(size), i = 0; i < size; i++) data[i] = REACT_MEMO_CACHE_SENTINEL;
			return data;
		},
		useCacheRefresh: function() {
			return unsupportedRefresh;
		}
	};
	HooksDispatcher.useEffectEvent = unsupportedHook;
	function unsupportedHook() {
		throw Error("This Hook is not supported in Server Components.");
	}
	function unsupportedRefresh() {
		throw Error("Refreshing the cache is not supported in Server Components.");
	}
	function unsupportedContext() {
		throw Error("Cannot read a Client Context from a Server Component.");
	}
	function useId() {
		if (null === currentRequest$1) throw Error("useId can only be used while React is rendering");
		var id = currentRequest$1.identifierCount++;
		return "_" + currentRequest$1.identifierPrefix + "S_" + id.toString(32) + "_";
	}
	function use(usable) {
		if (null !== usable && "object" === typeof usable || "function" === typeof usable) {
			if ("function" === typeof usable.then) {
				var index = thenableIndexCounter;
				thenableIndexCounter += 1;
				null === thenableState && (thenableState = []);
				return trackUsedThenable(thenableState, usable, index);
			}
			usable.$$typeof === REACT_CONTEXT_TYPE && unsupportedContext();
		}
		if (usable.$$typeof === CLIENT_REFERENCE_TAG$1) {
			if (null != usable.value && usable.value.$$typeof === REACT_CONTEXT_TYPE) throw Error("Cannot read a Client Context from a Server Component.");
			throw Error("Cannot use() an already resolved Client Reference.");
		}
		throw Error("An unsupported type was passed to use(): " + String(usable));
	}
	var DefaultAsyncDispatcher = {
		getCacheForType: function(resourceType) {
			var JSCompiler_inline_result = (JSCompiler_inline_result = resolveRequest()) ? JSCompiler_inline_result.cache : /* @__PURE__ */ new Map();
			var entry = JSCompiler_inline_result.get(resourceType);
			void 0 === entry && (entry = resourceType(), JSCompiler_inline_result.set(resourceType, entry));
			return entry;
		},
		cacheSignal: function() {
			var request = resolveRequest();
			return request ? request.cacheController.signal : null;
		}
	};
	var ReactSharedInternalsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	if (!ReactSharedInternalsServer) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	var isArrayImpl = Array.isArray;
	var getPrototypeOf = Object.getPrototypeOf;
	function objectName(object) {
		object = Object.prototype.toString.call(object);
		return object.slice(8, object.length - 1);
	}
	function describeValueForErrorMessage(value) {
		switch (typeof value) {
			case "string": return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
			case "object":
				if (isArrayImpl(value)) return "[...]";
				if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
				value = objectName(value);
				return "Object" === value ? "{...}" : value;
			case "function": return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
			default: return String(value);
		}
	}
	function describeElementType(type) {
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_FORWARD_REF_TYPE: return describeElementType(type.render);
			case REACT_MEMO_TYPE: return describeElementType(type.type);
			case REACT_LAZY_TYPE:
				var payload = type._payload;
				type = type._init;
				try {
					return describeElementType(type(payload));
				} catch (x) {}
		}
		return "";
	}
	var CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference");
	function describeObjectForErrorMessage(objectOrArray, expandedName) {
		var objKind = objectName(objectOrArray);
		if ("Object" !== objKind && "Array" !== objKind) return objKind;
		objKind = -1;
		var length = 0;
		if (isArrayImpl(objectOrArray)) {
			var str = "[";
			for (var i = 0; i < objectOrArray.length; i++) {
				0 < i && (str += ", ");
				var value = objectOrArray[i];
				value = "object" === typeof value && null !== value ? describeObjectForErrorMessage(value) : describeValueForErrorMessage(value);
				"" + i === expandedName ? (objKind = str.length, length = value.length, str += value) : str = 10 > value.length && 40 > str.length + value.length ? str + value : str + "...";
			}
			str += "]";
		} else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) str = "<" + describeElementType(objectOrArray.type) + "/>";
		else {
			if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
			str = "{";
			i = Object.keys(objectOrArray);
			for (value = 0; value < i.length; value++) {
				0 < value && (str += ", ");
				var name = i[value], encodedKey = JSON.stringify(name);
				str += ("\"" + name + "\"" === encodedKey ? name : encodedKey) + ": ";
				encodedKey = objectOrArray[name];
				encodedKey = "object" === typeof encodedKey && null !== encodedKey ? describeObjectForErrorMessage(encodedKey) : describeValueForErrorMessage(encodedKey);
				name === expandedName ? (objKind = str.length, length = encodedKey.length, str += encodedKey) : str = 10 > encodedKey.length && 40 > str.length + encodedKey.length ? str + encodedKey : str + "...";
			}
			str += "}";
		}
		return void 0 === expandedName ? str : -1 < objKind && 0 < length ? (objectOrArray = " ".repeat(objKind) + "^".repeat(length), "\n  " + str + "\n  " + objectOrArray) : "\n  " + str;
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var ObjectPrototype$1 = Object.prototype;
	var stringify = JSON.stringify;
	function defaultErrorHandler(error) {
		console.error(error);
	}
	function RequestInstance(type, model, bundlerConfig, onError, onPostpone, onAllReady, onFatalError, identifierPrefix, temporaryReferences) {
		if (null !== ReactSharedInternalsServer.A && ReactSharedInternalsServer.A !== DefaultAsyncDispatcher) throw Error("Currently React only supports one RSC renderer at a time.");
		ReactSharedInternalsServer.A = DefaultAsyncDispatcher;
		var abortSet = /* @__PURE__ */ new Set(), pingedTasks = [], hints = /* @__PURE__ */ new Set();
		this.type = type;
		this.status = 10;
		this.flushScheduled = !1;
		this.destination = this.fatalError = null;
		this.bundlerConfig = bundlerConfig;
		this.cache = /* @__PURE__ */ new Map();
		this.cacheController = new AbortController();
		this.pendingChunks = this.nextChunkId = 0;
		this.hints = hints;
		this.abortableTasks = abortSet;
		this.pingedTasks = pingedTasks;
		this.completedImportChunks = [];
		this.completedHintChunks = [];
		this.completedRegularChunks = [];
		this.completedErrorChunks = [];
		this.writtenSymbols = /* @__PURE__ */ new Map();
		this.writtenClientReferences = /* @__PURE__ */ new Map();
		this.writtenServerReferences = /* @__PURE__ */ new Map();
		this.writtenObjects = /* @__PURE__ */ new WeakMap();
		this.temporaryReferences = temporaryReferences;
		this.identifierPrefix = identifierPrefix || "";
		this.identifierCount = 1;
		this.taintCleanupQueue = [];
		this.onError = void 0 === onError ? defaultErrorHandler : onError;
		this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
		this.onAllReady = onAllReady;
		this.onFatalError = onFatalError;
		type = createTask(this, model, null, !1, 0, abortSet);
		pingedTasks.push(type);
	}
	var currentRequest = null;
	function resolveRequest() {
		if (currentRequest) return currentRequest;
		if (supportsRequestStorage) {
			var store = requestStorage.getStore();
			if (store) return store;
		}
		return null;
	}
	function serializeThenable(request, task, thenable) {
		var newTask = createTask(request, thenable, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		switch (thenable.status) {
			case "fulfilled": return newTask.model = thenable.value, pingTask(request, newTask), newTask.id;
			case "rejected": return erroredTask(request, newTask, thenable.reason), newTask.id;
			default:
				if (12 === request.status) return request.abortableTasks.delete(newTask), 21 === request.type ? (haltTask(newTask), finishHaltedTask(newTask, request)) : (task = request.fatalError, abortTask(newTask), finishAbortedTask(newTask, request, task)), newTask.id;
				"string" !== typeof thenable.status && (thenable.status = "pending", thenable.then(function(fulfilledValue) {
					"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
				}, function(error) {
					"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
				}));
		}
		thenable.then(function(value) {
			newTask.model = value;
			pingTask(request, newTask);
		}, function(reason) {
			0 === newTask.status && (erroredTask(request, newTask, reason), enqueueFlush(request));
		});
		return newTask.id;
	}
	function serializeReadableStream(request, task, stream) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) streamTask.status = 1, entry = streamTask.id.toString(16) + ":C\n", request.completedRegularChunks.push(stringToChunk(entry)), request.abortableTasks.delete(streamTask), request.cacheController.signal.removeEventListener("abort", abortStream), enqueueFlush(request), callOnAllReadyIfReady(request);
			else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), reader.read().then(progress, error);
			} catch (x$11) {
				error(x$11);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortStream), erroredTask(request, streamTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortStream() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortStream);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var supportsBYOB = stream.supportsBYOB;
		if (void 0 === supportsBYOB) try {
			stream.getReader({ mode: "byob" }).releaseLock(), supportsBYOB = !0;
		} catch (x) {
			supportsBYOB = !1;
		}
		var reader = stream.getReader(), streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (supportsBYOB ? "r" : "R") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortStream);
		reader.read().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function serializeAsyncIterable(request, task, iterable, iterator) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) {
				streamTask.status = 1;
				if (void 0 === entry.value) var endStreamRow = streamTask.id.toString(16) + ":C\n";
				else try {
					var chunkId = outlineModelWithFormatContext(request, entry.value, 0);
					endStreamRow = streamTask.id.toString(16) + ":C" + stringify(serializeByValueID(chunkId)) + "\n";
				} catch (x) {
					error(x);
					return;
				}
				request.completedRegularChunks.push(stringToChunk(endStreamRow));
				request.abortableTasks.delete(streamTask);
				request.cacheController.signal.removeEventListener("abort", abortIterable);
				enqueueFlush(request);
				callOnAllReadyIfReady(request);
			} else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), iterator.next().then(progress, error);
			} catch (x$12) {
				error(x$12);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortIterable), erroredTask(request, streamTask, reason), enqueueFlush(request), "function" === typeof iterator.throw && iterator.throw(reason).then(noop, noop));
		}
		function abortIterable() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortIterable);
				var reason = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal.reason), enqueueFlush(request));
				"function" === typeof iterator.throw && iterator.throw(reason).then(noop, noop);
			}
		}
		iterable = iterable === iterator;
		var streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (iterable ? "x" : "X") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortIterable);
		iterator.next().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function emitHint(request, code, model) {
		model = stringify(model);
		code = stringToChunk(":H" + code + model + "\n");
		request.completedHintChunks.push(code);
		enqueueFlush(request);
	}
	function readThenable(thenable) {
		if ("fulfilled" === thenable.status) return thenable.value;
		if ("rejected" === thenable.status) throw thenable.reason;
		throw thenable;
	}
	function createLazyWrapperAroundWakeable(request, task, wakeable) {
		switch (wakeable.status) {
			case "fulfilled": return wakeable.value;
			case "rejected": break;
			default: "string" !== typeof wakeable.status && (wakeable.status = "pending", wakeable.then(function(fulfilledValue) {
				"pending" === wakeable.status && (wakeable.status = "fulfilled", wakeable.value = fulfilledValue);
			}, function(error) {
				"pending" === wakeable.status && (wakeable.status = "rejected", wakeable.reason = error);
			}));
		}
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: wakeable,
			_init: readThenable
		};
	}
	function voidHandler() {}
	function processServerComponentReturnValue(request, task, Component, result) {
		if ("object" !== typeof result || null === result || result.$$typeof === CLIENT_REFERENCE_TAG$1) return result;
		if ("function" === typeof result.then) return createLazyWrapperAroundWakeable(request, task, result);
		var iteratorFn = getIteratorFn(result);
		return iteratorFn ? (request = {}, request[Symbol.iterator] = function() {
			return iteratorFn.call(result);
		}, request) : "function" !== typeof result[ASYNC_ITERATOR] || "function" === typeof ReadableStream && result instanceof ReadableStream ? result : (request = {}, request[ASYNC_ITERATOR] = function() {
			return result[ASYNC_ITERATOR]();
		}, request);
	}
	function renderFunctionComponent(request, task, key, Component, props) {
		var prevThenableState = task.thenableState;
		task.thenableState = null;
		thenableIndexCounter = 0;
		thenableState = prevThenableState;
		props = Component(props, void 0);
		if (12 === request.status) throw "object" === typeof props && null !== props && "function" === typeof props.then && props.$$typeof !== CLIENT_REFERENCE_TAG$1 && props.then(voidHandler, voidHandler), null;
		props = processServerComponentReturnValue(request, task, Component, props);
		Component = task.keyPath;
		prevThenableState = task.implicitSlot;
		null !== key ? task.keyPath = null === Component ? key : Component + "," + key : null === Component && (task.implicitSlot = !0);
		request = renderModelDestructive(request, task, emptyRoot, "", props);
		task.keyPath = Component;
		task.implicitSlot = prevThenableState;
		return request;
	}
	function renderFragment(request, task, children) {
		return null !== task.keyPath ? (request = [
			REACT_ELEMENT_TYPE,
			REACT_FRAGMENT_TYPE,
			task.keyPath,
			{ children }
		], task.implicitSlot ? [request] : request) : children;
	}
	var serializedSize = 0;
	function deferTask(request, task) {
		task = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		pingTask(request, task);
		return serializeLazyID(task.id);
	}
	function renderElement(request, task, type, key, ref, props) {
		if (null !== ref && void 0 !== ref) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
		if ("function" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1 && type.$$typeof !== TEMPORARY_REFERENCE_TAG) return renderFunctionComponent(request, task, key, type, props);
		if (type === REACT_FRAGMENT_TYPE && null === key) return type = task.implicitSlot, null === task.keyPath && (task.implicitSlot = !0), props = renderModelDestructive(request, task, emptyRoot, "", props.children), task.implicitSlot = type, props;
		if (null != type && "object" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1) switch (type.$$typeof) {
			case REACT_LAZY_TYPE:
				var init = type._init;
				type = init(type._payload);
				if (12 === request.status) throw null;
				return renderElement(request, task, type, key, ref, props);
			case REACT_FORWARD_REF_TYPE: return renderFunctionComponent(request, task, key, type.render, props);
			case REACT_MEMO_TYPE: return renderElement(request, task, type.type, key, ref, props);
		}
		else "string" === typeof type && (ref = task.formatContext, init = getChildFormatContext(ref, type, props), ref !== init && null != props.children && outlineModelWithFormatContext(request, props.children, init));
		request = key;
		key = task.keyPath;
		null === request ? request = key : null !== key && (request = key + "," + request);
		props = [
			REACT_ELEMENT_TYPE,
			type,
			request,
			props
		];
		task = task.implicitSlot && null !== request ? [props] : props;
		return task;
	}
	function pingTask(request, task) {
		var pingedTasks = request.pingedTasks;
		pingedTasks.push(task);
		1 === pingedTasks.length && (request.flushScheduled = null !== request.destination, 21 === request.type || 10 === request.status ? scheduleMicrotask(function() {
			return performWork(request);
		}) : setTimeout(function() {
			return performWork(request);
		}, 0));
	}
	function createTask(request, model, keyPath, implicitSlot, formatContext, abortSet) {
		request.pendingChunks++;
		var id = request.nextChunkId++;
		"object" !== typeof model || null === model || null !== keyPath || implicitSlot || request.writtenObjects.set(model, serializeByValueID(id));
		var task = {
			id,
			status: 0,
			model,
			keyPath,
			implicitSlot,
			formatContext,
			ping: function() {
				return pingTask(request, task);
			},
			toJSON: function(parentPropertyName, value) {
				serializedSize += parentPropertyName.length;
				var prevKeyPath = task.keyPath, prevImplicitSlot = task.implicitSlot;
				try {
					var JSCompiler_inline_result = renderModelDestructive(request, task, this, parentPropertyName, value);
				} catch (thrownValue) {
					if (parentPropertyName = task.model, parentPropertyName = "object" === typeof parentPropertyName && null !== parentPropertyName && (parentPropertyName.$$typeof === REACT_ELEMENT_TYPE || parentPropertyName.$$typeof === REACT_LAZY_TYPE), 12 === request.status) task.status = 3, 21 === request.type ? (prevKeyPath = request.nextChunkId++, prevKeyPath = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath), JSCompiler_inline_result = prevKeyPath) : (prevKeyPath = request.fatalError, JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath));
					else if (value = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof value && null !== value && "function" === typeof value.then) {
						JSCompiler_inline_result = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
						var ping = JSCompiler_inline_result.ping;
						value.then(ping, ping);
						JSCompiler_inline_result.thenableState = getThenableStateAfterSuspending();
						task.keyPath = prevKeyPath;
						task.implicitSlot = prevImplicitSlot;
						JSCompiler_inline_result = parentPropertyName ? serializeLazyID(JSCompiler_inline_result.id) : serializeByValueID(JSCompiler_inline_result.id);
					} else task.keyPath = prevKeyPath, task.implicitSlot = prevImplicitSlot, request.pendingChunks++, prevKeyPath = request.nextChunkId++, prevImplicitSlot = logRecoverableError(request, value, task), emitErrorChunk(request, prevKeyPath, prevImplicitSlot), JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath);
				}
				return JSCompiler_inline_result;
			},
			thenableState: null
		};
		abortSet.add(task);
		return task;
	}
	function serializeByValueID(id) {
		return "$" + id.toString(16);
	}
	function serializeLazyID(id) {
		return "$L" + id.toString(16);
	}
	function encodeReferenceChunk(request, id, reference) {
		request = stringify(reference);
		id = id.toString(16) + ":" + request + "\n";
		return stringToChunk(id);
	}
	function serializeClientReference(request, parent, parentPropertyName, clientReference) {
		var clientReferenceKey = clientReference.$$async ? clientReference.$$id + "#async" : clientReference.$$id, writtenClientReferences = request.writtenClientReferences, existingId = writtenClientReferences.get(clientReferenceKey);
		if (void 0 !== existingId) return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(existingId) : serializeByValueID(existingId);
		try {
			var config = request.bundlerConfig, modulePath = clientReference.$$id;
			existingId = "";
			var resolvedModuleData = config[modulePath];
			if (resolvedModuleData) existingId = resolvedModuleData.name;
			else {
				var idx = modulePath.lastIndexOf("#");
				-1 !== idx && (existingId = modulePath.slice(idx + 1), resolvedModuleData = config[modulePath.slice(0, idx)]);
				if (!resolvedModuleData) throw Error("Could not find the module \"" + modulePath + "\" in the React Client Manifest. This is probably a bug in the React Server Components bundler.");
			}
			if (!0 === resolvedModuleData.async && !0 === clientReference.$$async) throw Error("The module \"" + modulePath + "\" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.");
			var JSCompiler_inline_result = !0 === resolvedModuleData.async || !0 === clientReference.$$async ? [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId,
				1
			] : [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId
			];
			request.pendingChunks++;
			var importId = request.nextChunkId++, json = stringify(JSCompiler_inline_result), processedChunk = stringToChunk(importId.toString(16) + ":I" + json + "\n");
			request.completedImportChunks.push(processedChunk);
			writtenClientReferences.set(clientReferenceKey, importId);
			return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(importId) : serializeByValueID(importId);
		} catch (x) {
			return request.pendingChunks++, parent = request.nextChunkId++, parentPropertyName = logRecoverableError(request, x, null), emitErrorChunk(request, parent, parentPropertyName), serializeByValueID(parent);
		}
	}
	function outlineModelWithFormatContext(request, value, formatContext) {
		value = createTask(request, value, null, !1, formatContext, request.abortableTasks);
		retryTask(request, value);
		return value.id;
	}
	function serializeTypedArray(request, tag, typedArray) {
		request.pendingChunks++;
		var bufferId = request.nextChunkId++;
		emitTypedArrayChunk(request, bufferId, tag, typedArray, !1);
		return serializeByValueID(bufferId);
	}
	function serializeBlob(request, blob) {
		function progress(entry) {
			if (0 === newTask.status) if (entry.done) request.cacheController.signal.removeEventListener("abort", abortBlob), pingTask(request, newTask);
			else return model.push(entry.value), reader.read().then(progress).catch(error);
		}
		function error(reason) {
			0 === newTask.status && (request.cacheController.signal.removeEventListener("abort", abortBlob), erroredTask(request, newTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortBlob() {
			if (0 === newTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortBlob);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(newTask), haltTask(newTask), finishHaltedTask(newTask, request)) : (erroredTask(request, newTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var model = [blob.type], newTask = createTask(request, model, null, !1, 0, request.abortableTasks), reader = blob.stream().getReader();
		request.cacheController.signal.addEventListener("abort", abortBlob);
		reader.read().then(progress).catch(error);
		return "$B" + newTask.id.toString(16);
	}
	var modelRoot = !1;
	function renderModelDestructive(request, task, parent, parentPropertyName, value) {
		task.model = value;
		if (value === REACT_ELEMENT_TYPE) return "$";
		if (null === value) return null;
		if ("object" === typeof value) {
			switch (value.$$typeof) {
				case REACT_ELEMENT_TYPE:
					var elementReference = null, writtenObjects = request.writtenObjects;
					if (null === task.keyPath && !task.implicitSlot) {
						var existingReference = writtenObjects.get(value);
						if (void 0 !== existingReference) if (modelRoot === value) modelRoot = null;
						else return existingReference;
						else -1 === parentPropertyName.indexOf(":") && (parent = writtenObjects.get(parent), void 0 !== parent && (elementReference = parent + ":" + parentPropertyName, writtenObjects.set(value, elementReference)));
					}
					if (3200 < serializedSize) return deferTask(request, task);
					parentPropertyName = value.props;
					parent = parentPropertyName.ref;
					request = renderElement(request, task, value.type, value.key, void 0 !== parent ? parent : null, parentPropertyName);
					"object" === typeof request && null !== request && null !== elementReference && (writtenObjects.has(request) || writtenObjects.set(request, elementReference));
					return request;
				case REACT_LAZY_TYPE:
					if (3200 < serializedSize) return deferTask(request, task);
					task.thenableState = null;
					parentPropertyName = value._init;
					value = parentPropertyName(value._payload);
					if (12 === request.status) throw null;
					return renderModelDestructive(request, task, emptyRoot, "", value);
				case REACT_LEGACY_ELEMENT_TYPE: throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
			}
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (void 0 !== request.temporaryReferences && (elementReference = request.temporaryReferences.get(value), void 0 !== elementReference)) return "$T" + elementReference;
			elementReference = request.writtenObjects;
			writtenObjects = elementReference.get(value);
			if ("function" === typeof value.then) {
				if (void 0 !== writtenObjects) {
					if (null !== task.keyPath || task.implicitSlot) return "$@" + serializeThenable(request, task, value).toString(16);
					if (modelRoot === value) modelRoot = null;
					else return writtenObjects;
				}
				request = "$@" + serializeThenable(request, task, value).toString(16);
				elementReference.set(value, request);
				return request;
			}
			if (void 0 !== writtenObjects) if (modelRoot === value) {
				if (writtenObjects !== serializeByValueID(task.id)) return writtenObjects;
				modelRoot = null;
			} else return writtenObjects;
			else if (-1 === parentPropertyName.indexOf(":") && (writtenObjects = elementReference.get(parent), void 0 !== writtenObjects)) {
				existingReference = parentPropertyName;
				if (isArrayImpl(parent) && parent[0] === REACT_ELEMENT_TYPE) switch (parentPropertyName) {
					case "1":
						existingReference = "type";
						break;
					case "2":
						existingReference = "key";
						break;
					case "3":
						existingReference = "props";
						break;
					case "4": existingReference = "_owner";
				}
				elementReference.set(value, writtenObjects + ":" + existingReference);
			}
			if (isArrayImpl(value)) return renderFragment(request, task, value);
			if (value instanceof Map) return value = Array.from(value), "$Q" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Set) return value = Array.from(value), "$W" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if ("function" === typeof FormData && value instanceof FormData) return value = Array.from(value.entries()), "$K" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Error) return "$Z";
			if (value instanceof ArrayBuffer) return serializeTypedArray(request, "A", new Uint8Array(value));
			if (value instanceof Int8Array) return serializeTypedArray(request, "O", value);
			if (value instanceof Uint8Array) return serializeTypedArray(request, "o", value);
			if (value instanceof Uint8ClampedArray) return serializeTypedArray(request, "U", value);
			if (value instanceof Int16Array) return serializeTypedArray(request, "S", value);
			if (value instanceof Uint16Array) return serializeTypedArray(request, "s", value);
			if (value instanceof Int32Array) return serializeTypedArray(request, "L", value);
			if (value instanceof Uint32Array) return serializeTypedArray(request, "l", value);
			if (value instanceof Float32Array) return serializeTypedArray(request, "G", value);
			if (value instanceof Float64Array) return serializeTypedArray(request, "g", value);
			if (value instanceof BigInt64Array) return serializeTypedArray(request, "M", value);
			if (value instanceof BigUint64Array) return serializeTypedArray(request, "m", value);
			if (value instanceof DataView) return serializeTypedArray(request, "V", value);
			if ("function" === typeof Blob && value instanceof Blob) return serializeBlob(request, value);
			if (elementReference = getIteratorFn(value)) return parentPropertyName = elementReference.call(value), parentPropertyName === value ? (value = Array.from(parentPropertyName), "$i" + outlineModelWithFormatContext(request, value, 0).toString(16)) : renderFragment(request, task, Array.from(parentPropertyName));
			if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(request, task, value);
			elementReference = value[ASYNC_ITERATOR];
			if ("function" === typeof elementReference) return null !== task.keyPath ? (request = [
				REACT_ELEMENT_TYPE,
				REACT_FRAGMENT_TYPE,
				task.keyPath,
				{ children: value }
			], request = task.implicitSlot ? [request] : request) : (parentPropertyName = elementReference.call(value), request = serializeAsyncIterable(request, task, value, parentPropertyName)), request;
			if (value instanceof Date) return "$D" + value.toJSON();
			request = getPrototypeOf(value);
			if (request !== ObjectPrototype$1 && (null === request || null !== getPrototypeOf(request))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + describeObjectForErrorMessage(parent, parentPropertyName));
			return value;
		}
		if ("string" === typeof value) {
			serializedSize += value.length;
			if ("Z" === value[value.length - 1] && parent[parentPropertyName] instanceof Date) return "$D" + value;
			if (1024 <= value.length && null !== byteLengthOfChunk) return request.pendingChunks++, task = request.nextChunkId++, emitTextChunk(request, task, value, !1), serializeByValueID(task);
			request = "$" === value[0] ? "$" + value : value;
			return request;
		}
		if ("boolean" === typeof value) return value;
		if ("number" === typeof value) return Number.isFinite(value) ? 0 === value && -Infinity === 1 / value ? "$-0" : value : Infinity === value ? "$Infinity" : -Infinity === value ? "$-Infinity" : "$NaN";
		if ("undefined" === typeof value) return "$undefined";
		if ("function" === typeof value) {
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (value.$$typeof === SERVER_REFERENCE_TAG) return task = request.writtenServerReferences, parentPropertyName = task.get(value), void 0 !== parentPropertyName ? request = "$h" + parentPropertyName.toString(16) : (parentPropertyName = value.$$bound, parentPropertyName = null === parentPropertyName ? null : Promise.resolve(parentPropertyName), request = outlineModelWithFormatContext(request, {
				id: value.$$id,
				bound: parentPropertyName
			}, 0), task.set(value, request), request = "$h" + request.toString(16)), request;
			if (void 0 !== request.temporaryReferences && (request = request.temporaryReferences.get(value), void 0 !== request)) return "$T" + request;
			if (value.$$typeof === TEMPORARY_REFERENCE_TAG) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
			if (/^on[A-Z]/.test(parentPropertyName)) throw Error("Event handlers cannot be passed to Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
			throw Error("Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with \"use server\". Or maybe you meant to call this function rather than return it." + describeObjectForErrorMessage(parent, parentPropertyName));
		}
		if ("symbol" === typeof value) {
			task = request.writtenSymbols;
			elementReference = task.get(value);
			if (void 0 !== elementReference) return serializeByValueID(elementReference);
			elementReference = value.description;
			if (Symbol.for(elementReference) !== value) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, parentPropertyName));
			request.pendingChunks++;
			parentPropertyName = request.nextChunkId++;
			parent = encodeReferenceChunk(request, parentPropertyName, "$S" + elementReference);
			request.completedImportChunks.push(parent);
			task.set(value, parentPropertyName);
			return serializeByValueID(parentPropertyName);
		}
		if ("bigint" === typeof value) return "$n" + value.toString(10);
		throw Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName));
	}
	function logRecoverableError(request, error) {
		var prevRequest = currentRequest;
		currentRequest = null;
		try {
			var onError = request.onError;
			var errorDigest = supportsRequestStorage ? requestStorage.run(void 0, onError, error) : onError(error);
		} finally {
			currentRequest = prevRequest;
		}
		if (null != errorDigest && "string" !== typeof errorDigest) throw Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
		return errorDigest || "";
	}
	function fatalError(request, error) {
		var onFatalError = request.onFatalError;
		onFatalError(error);
		null !== request.destination ? (request.status = 14, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
		request.cacheController.abort(Error("The render was aborted due to a fatal error.", { cause: error }));
	}
	function emitErrorChunk(request, id, digest) {
		digest = { digest };
		id = id.toString(16) + ":E" + stringify(digest) + "\n";
		id = stringToChunk(id);
		request.completedErrorChunks.push(id);
	}
	function emitModelChunk(request, id, json) {
		id = id.toString(16) + ":" + json + "\n";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id);
	}
	function emitTypedArrayChunk(request, id, tag, typedArray, debug) {
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		debug = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
		typedArray = 2048 < typedArray.byteLength ? debug.slice() : debug;
		debug = typedArray.byteLength;
		id = id.toString(16) + ":" + tag + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, typedArray);
	}
	function emitTextChunk(request, id, text, debug) {
		if (null === byteLengthOfChunk) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		text = stringToChunk(text);
		debug = text.byteLength;
		id = id.toString(16) + ":T" + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, text);
	}
	function emitChunk(request, task, value) {
		var id = task.id;
		"string" === typeof value && null !== byteLengthOfChunk ? emitTextChunk(request, id, value, !1) : value instanceof ArrayBuffer ? emitTypedArrayChunk(request, id, "A", new Uint8Array(value), !1) : value instanceof Int8Array ? emitTypedArrayChunk(request, id, "O", value, !1) : value instanceof Uint8Array ? emitTypedArrayChunk(request, id, "o", value, !1) : value instanceof Uint8ClampedArray ? emitTypedArrayChunk(request, id, "U", value, !1) : value instanceof Int16Array ? emitTypedArrayChunk(request, id, "S", value, !1) : value instanceof Uint16Array ? emitTypedArrayChunk(request, id, "s", value, !1) : value instanceof Int32Array ? emitTypedArrayChunk(request, id, "L", value, !1) : value instanceof Uint32Array ? emitTypedArrayChunk(request, id, "l", value, !1) : value instanceof Float32Array ? emitTypedArrayChunk(request, id, "G", value, !1) : value instanceof Float64Array ? emitTypedArrayChunk(request, id, "g", value, !1) : value instanceof BigInt64Array ? emitTypedArrayChunk(request, id, "M", value, !1) : value instanceof BigUint64Array ? emitTypedArrayChunk(request, id, "m", value, !1) : value instanceof DataView ? emitTypedArrayChunk(request, id, "V", value, !1) : (value = stringify(value, task.toJSON), emitModelChunk(request, task.id, value));
	}
	function erroredTask(request, task, error) {
		task.status = 4;
		error = logRecoverableError(request, error, task);
		emitErrorChunk(request, task.id, error);
		request.abortableTasks.delete(task);
		callOnAllReadyIfReady(request);
	}
	var emptyRoot = {};
	function retryTask(request, task) {
		if (0 === task.status) {
			task.status = 5;
			var parentSerializedSize = serializedSize;
			try {
				modelRoot = task.model;
				var resolvedModel = renderModelDestructive(request, task, emptyRoot, "", task.model);
				modelRoot = resolvedModel;
				task.keyPath = null;
				task.implicitSlot = !1;
				if ("object" === typeof resolvedModel && null !== resolvedModel) request.writtenObjects.set(resolvedModel, serializeByValueID(task.id)), emitChunk(request, task, resolvedModel);
				else {
					var json = stringify(resolvedModel);
					emitModelChunk(request, task.id, json);
				}
				task.status = 1;
				request.abortableTasks.delete(task);
				callOnAllReadyIfReady(request);
			} catch (thrownValue) {
				if (12 === request.status) if (request.abortableTasks.delete(task), task.status = 0, 21 === request.type) haltTask(task), finishHaltedTask(task, request);
				else {
					var errorId = request.fatalError;
					abortTask(task);
					finishAbortedTask(task, request, errorId);
				}
				else {
					var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
					if ("object" === typeof x && null !== x && "function" === typeof x.then) {
						task.status = 0;
						task.thenableState = getThenableStateAfterSuspending();
						var ping = task.ping;
						x.then(ping, ping);
					} else erroredTask(request, task, x);
				}
			} finally {
				serializedSize = parentSerializedSize;
			}
		}
	}
	function tryStreamTask(request, task) {
		var parentSerializedSize = serializedSize;
		try {
			emitChunk(request, task, task.model);
		} finally {
			serializedSize = parentSerializedSize;
		}
	}
	function performWork(request) {
		var prevDispatcher = ReactSharedInternalsServer.H;
		ReactSharedInternalsServer.H = HooksDispatcher;
		var prevRequest = currentRequest;
		currentRequest$1 = currentRequest = request;
		try {
			var pingedTasks = request.pingedTasks;
			request.pingedTasks = [];
			for (var i = 0; i < pingedTasks.length; i++) retryTask(request, pingedTasks[i]);
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		} finally {
			ReactSharedInternalsServer.H = prevDispatcher, currentRequest$1 = null, currentRequest = prevRequest;
		}
	}
	function abortTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishAbortedTask(task, request, errorId) {
		3 === task.status && (errorId = serializeByValueID(errorId), task = encodeReferenceChunk(request, task.id, errorId), request.completedErrorChunks.push(task));
	}
	function haltTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishHaltedTask(task, request) {
		3 === task.status && request.pendingChunks--;
	}
	function flushCompletedChunks(request) {
		var destination = request.destination;
		if (null !== destination) {
			currentView = /* @__PURE__ */ new Uint8Array(2048);
			writtenBytes = 0;
			try {
				for (var importsChunks = request.completedImportChunks, i = 0; i < importsChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, importsChunks[i]);
				importsChunks.splice(0, i);
				var hintChunks = request.completedHintChunks;
				for (i = 0; i < hintChunks.length; i++) writeChunkAndReturn(destination, hintChunks[i]);
				hintChunks.splice(0, i);
				var regularChunks = request.completedRegularChunks;
				for (i = 0; i < regularChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, regularChunks[i]);
				regularChunks.splice(0, i);
				var errorChunks = request.completedErrorChunks;
				for (i = 0; i < errorChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, errorChunks[i]);
				errorChunks.splice(0, i);
			} finally {
				request.flushScheduled = !1, currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
			}
		}
		0 === request.pendingChunks && (12 > request.status && request.cacheController.abort(Error("This render completed successfully. All cacheSignals are now aborted to allow clean up of any unused resources.")), null !== request.destination && (request.status = 14, request.destination.close(), request.destination = null));
	}
	function startWork(request) {
		request.flushScheduled = null !== request.destination;
		supportsRequestStorage ? scheduleMicrotask(function() {
			requestStorage.run(request, performWork, request);
		}) : scheduleMicrotask(function() {
			return performWork(request);
		});
		setTimeout(function() {
			10 === request.status && (request.status = 11);
		}, 0);
	}
	function enqueueFlush(request) {
		!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = !0, setTimeout(function() {
			request.flushScheduled = !1;
			flushCompletedChunks(request);
		}, 0));
	}
	function callOnAllReadyIfReady(request) {
		0 === request.abortableTasks.size && (request = request.onAllReady, request());
	}
	function startFlowing(request, destination) {
		if (13 === request.status) request.status = 14, closeWithError(destination, request.fatalError);
		else if (14 !== request.status && null === request.destination) {
			request.destination = destination;
			try {
				flushCompletedChunks(request);
			} catch (error) {
				logRecoverableError(request, error, null), fatalError(request, error);
			}
		}
	}
	function finishHalt(request, abortedTasks) {
		try {
			abortedTasks.forEach(function(task) {
				return finishHaltedTask(task, request);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function finishAbort(request, abortedTasks, errorId) {
		try {
			abortedTasks.forEach(function(task) {
				return finishAbortedTask(task, request, errorId);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function abort(request, reason) {
		if (!(11 < request.status)) try {
			request.status = 12;
			request.cacheController.abort(reason);
			var abortableTasks = request.abortableTasks;
			if (0 < abortableTasks.size) if (21 === request.type) abortableTasks.forEach(function(task) {
				return haltTask(task, request);
			}), setTimeout(function() {
				return finishHalt(request, abortableTasks);
			}, 0);
			else {
				var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason, digest = logRecoverableError(request, error, null), errorId = request.nextChunkId++;
				request.fatalError = errorId;
				request.pendingChunks++;
				emitErrorChunk(request, errorId, digest, error, !1, null);
				abortableTasks.forEach(function(task) {
					return abortTask(task, request, errorId);
				});
				setTimeout(function() {
					return finishAbort(request, abortableTasks, errorId);
				}, 0);
			}
			else {
				var onAllReady = request.onAllReady;
				onAllReady();
				flushCompletedChunks(request);
			}
		} catch (error$26) {
			logRecoverableError(request, error$26, null), fatalError(request, error$26);
		}
	}
	function resolveServerReference(bundlerConfig, id) {
		var name = "", resolvedModuleData = bundlerConfig[id];
		if (resolvedModuleData) name = resolvedModuleData.name;
		else {
			var idx = id.lastIndexOf("#");
			-1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
			if (!resolvedModuleData) throw Error("Could not find the module \"" + id + "\" in the React Server Manifest. This is probably a bug in the React Server Components bundler.");
		}
		return resolvedModuleData.async ? [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name,
			1
		] : [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name
		];
	}
	var chunkCache = /* @__PURE__ */ new Map();
	function requireAsyncModule(id) {
		var promise = __vite_rsc_require__(id);
		if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
		promise.then(function(value) {
			promise.status = "fulfilled";
			promise.value = value;
		}, function(reason) {
			promise.status = "rejected";
			promise.reason = reason;
		});
		return promise;
	}
	function ignoreReject() {}
	function preloadModule(metadata) {
		for (var chunks = metadata[1], promises = [], i = 0; i < chunks.length;) {
			var chunkId = chunks[i++];
			chunks[i++];
			var entry = chunkCache.get(chunkId);
			if (void 0 === entry) {
				entry = __webpack_chunk_load__(chunkId);
				promises.push(entry);
				var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
				entry.then(resolve, ignoreReject);
				chunkCache.set(chunkId, entry);
			} else null !== entry && promises.push(entry);
		}
		return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
			return requireAsyncModule(metadata[0]);
		}) : 0 < promises.length ? Promise.all(promises) : null;
	}
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	function appendBackingEntry(backingStore, key, value) {
		backingStore.data.append(key, value);
		value = backingStore.keys;
		null === value ? (backingStore.keys = Array.from(backingStore.data.keys()), backingStore.keyPointer = 0) : value.push(key);
	}
	var RESPONSE_SYMBOL = Symbol();
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model": initializeModelChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				if ("function" === typeof resolve) {
					for (var inspectedValue = this.value, cycleProtection = 0, visited = /* @__PURE__ */ new Set(); inspectedValue instanceof ReactPromise;) {
						cycleProtection++;
						if (inspectedValue === this || visited.has(inspectedValue) || 1e3 < cycleProtection) {
							"function" === typeof reject && reject(Error("Cannot have cyclic thenables."));
							return;
						}
						visited.add(inspectedValue);
						if ("fulfilled" === inspectedValue.status) inspectedValue = inspectedValue.value;
						else break;
					}
					resolve(this.value);
				}
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	var ObjectPrototype = Object.prototype;
	var ArrayPrototype = Array.prototype;
	function wakeChunk(response, listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, chunk.reason);
		}
	}
	function rejectChunk(response, listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(response, listener.handler, error);
		}
	}
	function triggerErrorOnChunk(response, chunk, error) {
		if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
		else {
			var listeners = chunk.reason;
			chunk.status = "rejected";
			chunk.reason = error;
			null !== listeners && rejectChunk(response, listeners, error);
		}
	}
	function createResolvedModelChunk(response, value, id) {
		var $jscomp$compprop2 = {};
		return new ReactPromise("resolved_model", value, ($jscomp$compprop2.id = id, $jscomp$compprop2[RESPONSE_SYMBOL] = response, $jscomp$compprop2));
	}
	function resolveModelChunk(response, chunk, value, id) {
		if ("pending" !== chunk.status) chunk = chunk.reason, "C" === value[0] ? chunk.close("C" === value ? "\"$undefined\"" : value.slice(1)) : chunk.enqueueModel(value);
		else {
			var resolveListeners = chunk.value, rejectListeners = chunk.reason;
			chunk.status = "resolved_model";
			chunk.value = value;
			value = {};
			chunk.reason = (value.id = id, value[RESPONSE_SYMBOL] = response, value);
			if (null !== resolveListeners) switch (initializeModelChunk(chunk), chunk.status) {
				case "fulfilled":
					wakeChunk(response, resolveListeners, chunk.value, chunk);
					break;
				case "blocked":
				case "pending":
					if (chunk.value) for (response = 0; response < resolveListeners.length; response++) chunk.value.push(resolveListeners[response]);
					else chunk.value = resolveListeners;
					if (chunk.reason) {
						if (rejectListeners) for (resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++) chunk.reason.push(rejectListeners[resolveListeners]);
					} else chunk.reason = rejectListeners;
					break;
				case "rejected": rejectListeners && rejectChunk(response, rejectListeners, chunk.reason);
			}
		}
	}
	function createResolvedIteratorResultChunk(response, value, done) {
		var $jscomp$compprop4 = {};
		return new ReactPromise("resolved_model", (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", ($jscomp$compprop4.id = -1, $jscomp$compprop4[RESPONSE_SYMBOL] = response, $jscomp$compprop4));
	}
	function resolveIteratorResultChunk(response, chunk, value, done) {
		resolveModelChunk(response, chunk, (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", -1);
	}
	function loadServerReference$1(response, metaData, parentObject, key) {
		function reject(error) {
			var rejectListeners = blockedPromise.reason, erroredPromise = blockedPromise;
			erroredPromise.status = "rejected";
			erroredPromise.value = null;
			erroredPromise.reason = error;
			null !== rejectListeners && rejectChunk(response, rejectListeners, error);
			rejectReference(response, handler, error);
		}
		var id = metaData.id;
		if ("string" !== typeof id || "then" === key) return null;
		var cachedPromise = metaData.$$promise;
		if (void 0 !== cachedPromise) {
			if ("fulfilled" === cachedPromise.status) return cachedPromise = cachedPromise.value, "__proto__" === key ? null : parentObject[key] = cachedPromise;
			initializingHandler ? (id = initializingHandler, id.deps++) : id = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			};
			cachedPromise.then(resolveReference.bind(null, response, id, parentObject, key), rejectReference.bind(null, response, id));
			return null;
		}
		var blockedPromise = new ReactPromise("blocked", null, null);
		metaData.$$promise = blockedPromise;
		var serverReference = resolveServerReference(response._bundlerConfig, id);
		cachedPromise = metaData.bound;
		if (id = preloadModule(serverReference)) cachedPromise instanceof ReactPromise && (id = Promise.all([id, cachedPromise]));
		else if (cachedPromise instanceof ReactPromise) id = Promise.resolve(cachedPromise);
		else return cachedPromise = requireModule(serverReference), id = blockedPromise, id.status = "fulfilled", id.value = cachedPromise;
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		id.then(function() {
			var resolvedValue = requireModule(serverReference);
			if (metaData.bound) {
				var promiseValue = metaData.bound.value;
				promiseValue = isArrayImpl(promiseValue) ? promiseValue.slice(0) : [];
				if (1e3 < promiseValue.length) {
					reject(Error("Server Function has too many bound arguments. Received " + promiseValue.length + " but the limit is 1000."));
					return;
				}
				promiseValue.unshift(null);
				resolvedValue = resolvedValue.bind.apply(resolvedValue, promiseValue);
			}
			promiseValue = blockedPromise.value;
			var initializedPromise = blockedPromise;
			initializedPromise.status = "fulfilled";
			initializedPromise.value = resolvedValue;
			initializedPromise.reason = null;
			null !== promiseValue && wakeChunk(response, promiseValue, resolvedValue, initializedPromise);
			resolveReference(response, handler, parentObject, key, resolvedValue);
		}, reject);
		return null;
	}
	function reviveModel(response, parentObj, parentKey, value, reference, arrayRoot) {
		if ("string" === typeof value) return parseModelString(response, parentObj, parentKey, value, reference, arrayRoot);
		if ("object" === typeof value && null !== value) if (void 0 !== reference && void 0 !== response._temporaryReferences && response._temporaryReferences.set(value, reference), isArrayImpl(value)) {
			if (null === arrayRoot) {
				var childContext = {
					count: 0,
					fork: !1
				};
				response._rootArrayContexts.set(value, childContext);
			} else childContext = arrayRoot;
			1 < value.length && (childContext.fork = !0);
			bumpArrayCount(childContext, value.length + 1, response);
			for (parentObj = 0; parentObj < value.length; parentObj++) value[parentObj] = reviveModel(response, value, "" + parentObj, value[parentObj], void 0 !== reference ? reference + ":" + parentObj : void 0, childContext);
		} else for (childContext in value) hasOwnProperty.call(value, childContext) && ("__proto__" === childContext ? delete value[childContext] : (parentObj = void 0 !== reference && -1 === childContext.indexOf(":") ? reference + ":" + childContext : void 0, parentObj = reviveModel(response, value, childContext, value[childContext], parentObj, null), void 0 !== parentObj ? value[childContext] = parentObj : delete value[childContext]));
		return value;
	}
	function bumpArrayCount(arrayContext, slots, response) {
		if ((arrayContext.count += slots) > response._arraySizeLimit && arrayContext.fork) throw Error("Maximum array nesting exceeded. Large nested arrays can be dangerous. Try adding intermediate objects.");
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var _chunk$reason = chunk.reason, response = _chunk$reason[RESPONSE_SYMBOL];
		_chunk$reason = _chunk$reason.id;
		_chunk$reason = -1 === _chunk$reason ? void 0 : _chunk$reason.toString(16);
		var resolvedModel = chunk.value;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var rawModel = JSON.parse(resolvedModel);
			resolvedModel = {
				count: 0,
				fork: !1
			};
			var value = reviveModel(response, { "": rawModel }, "", rawModel, _chunk$reason, resolvedModel), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, rawModel = 0; rawModel < resolveListeners.length; rawModel++) {
				var listener = resolveListeners[rawModel];
				"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, resolvedModel);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.reason = resolvedModel;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
			chunk.reason = resolvedModel;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function reportGlobalError(response, error) {
		response._closed = !0;
		response._closedReason = error;
		response._chunks.forEach(function(chunk) {
			"pending" === chunk.status ? triggerErrorOnChunk(response, chunk, error) : "fulfilled" === chunk.status && null !== chunk.reason && (chunk = chunk.reason, "function" === typeof chunk.error && chunk.error(error));
		});
	}
	function getChunk(response, id) {
		var chunks = response._chunks, chunk = chunks.get(id);
		chunk || (chunk = response._formData.data.get(response._prefix + id), chunk = "string" === typeof chunk ? createResolvedModelChunk(response, chunk, id) : response._closed ? new ReactPromise("rejected", null, response._closedReason) : new ReactPromise("pending", null, null), chunks.set(id, chunk));
		return chunk;
	}
	function fulfillReference(response, reference, value, arrayRoot) {
		var handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < path.length; i++) {
				var name = path[i];
				if ("object" !== typeof value || null === value || getPrototypeOf(value) !== ObjectPrototype && getPrototypeOf(value) !== ArrayPrototype || !hasOwnProperty.call(value, name)) throw Error("Invalid reference.");
				value = value[name];
				if (isArrayImpl(value)) localLength = 0, arrayRoot = rootArrayContexts.get(value) || arrayRoot;
				else if (arrayRoot = null, "string" === typeof value) localLength = value.length;
				else if ("bigint" === typeof value) {
					var n = Math.abs(Number(value));
					localLength = 0 === n ? 1 : Math.floor(Math.log10(n)) + 1;
				} else localLength = ArrayBuffer.isView(value) ? value.byteLength : 0;
			}
			var resolvedValue = map(response, value, parentObject, key);
			var referenceArrayRoot = reference.arrayRoot;
			null !== referenceArrayRoot && (null !== arrayRoot ? (arrayRoot.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, arrayRoot.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
		} catch (error) {
			rejectReference(response, handler, error);
			return;
		}
		resolveReference(response, handler, parentObject, key, resolvedValue);
	}
	function resolveReference(response, handler, parentObject, key, resolvedValue) {
		"__proto__" !== key && (parentObject[key] = resolvedValue);
		"" === key && null === handler.value && (handler.value = resolvedValue);
		handler.deps--;
		0 === handler.deps && (parentObject = handler.chunk, null !== parentObject && "blocked" === parentObject.status && (key = parentObject.value, parentObject.status = "fulfilled", parentObject.value = handler.value, parentObject.reason = handler.reason, null !== key && wakeChunk(response, key, handler.value, parentObject)));
	}
	function rejectReference(response, handler, error) {
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(response, handler, error));
	}
	function getOutlinedModel(response, reference, parentObject, key, referenceArrayRoot, map) {
		reference = reference.split(":");
		var id = parseInt(reference[0], 16), chunk = getChunk(response, id);
		switch (chunk.status) {
			case "resolved_model": initializeModelChunk(chunk);
		}
		switch (chunk.status) {
			case "fulfilled":
				id = chunk.value;
				chunk = chunk.reason;
				if (null !== chunk && "error" in chunk) throw Error("Expected an initialized chunk but got an initialized stream chunk instead. This payload may have been submitted by an older version of React.");
				for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < reference.length; i++) {
					localLength = reference[i];
					if ("object" !== typeof id || null === id || getPrototypeOf(id) !== ObjectPrototype && getPrototypeOf(id) !== ArrayPrototype || !hasOwnProperty.call(id, localLength)) throw Error("Invalid reference.");
					id = id[localLength];
					isArrayImpl(id) ? (localLength = 0, chunk = rootArrayContexts.get(id) || chunk) : (chunk = null, "string" === typeof id ? localLength = id.length : "bigint" === typeof id ? (localLength = Math.abs(Number(id)), localLength = 0 === localLength ? 1 : Math.floor(Math.log10(localLength)) + 1) : localLength = ArrayBuffer.isView(id) ? id.byteLength : 0);
				}
				parentObject = map(response, id, parentObject, key);
				null !== referenceArrayRoot && (null !== chunk ? (chunk.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, chunk.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
				return parentObject;
			case "blocked": return initializingHandler ? (response = initializingHandler, response.deps++) : response = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			}, referenceArrayRoot = {
				handler: response,
				parentObject,
				key,
				map,
				path: reference,
				arrayRoot: referenceArrayRoot
			}, null === chunk.value ? chunk.value = [referenceArrayRoot] : chunk.value.push(referenceArrayRoot), null === chunk.reason ? chunk.reason = [referenceArrayRoot] : chunk.reason.push(referenceArrayRoot), null;
			case "pending": throw Error("Invalid forward reference.");
			default: return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = null, initializingHandler.reason = chunk.reason) : initializingHandler = {
				chunk: null,
				value: null,
				reason: chunk.reason,
				deps: 0,
				errored: !0
			}, null;
		}
	}
	function createMap(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Map initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Map.");
		model.$$consumed = !0;
		return new Map(model);
	}
	function createSet(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Set initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Set.");
		model.$$consumed = !0;
		return new Set(model);
	}
	function extractIterator(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Iterator initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Iterator.");
		model.$$consumed = !0;
		return model[Symbol.iterator]();
	}
	function createModel(response, model, parentObject, key) {
		return "then" === key && "function" === typeof model ? null : model;
	}
	function parseTypedArray(response, reference, constructor, bytesPerElement, parentObject, parentKey, referenceArrayRoot) {
		function reject(error) {
			if (!handler.errored) {
				handler.errored = !0;
				handler.value = null;
				handler.reason = error;
				var chunk = handler.chunk;
				null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(response, chunk, error);
			}
		}
		reference = parseInt(reference.slice(2), 16);
		var key = response._prefix + reference;
		bytesPerElement = response._chunks;
		if (bytesPerElement.has(reference)) throw Error("Already initialized typed array.");
		bytesPerElement.set(reference, new ReactPromise("rejected", null, Error("Already initialized typed array.")));
		reference = response._formData.data.get(key).arrayBuffer();
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		reference.then(function(buffer) {
			try {
				null !== referenceArrayRoot && bumpArrayCount(referenceArrayRoot, buffer.byteLength, response);
				var resolvedValue = constructor === ArrayBuffer ? buffer : new constructor(buffer);
				"__proto__" !== key && (parentObject[parentKey] = resolvedValue);
				"" === parentKey && null === handler.value && (handler.value = resolvedValue);
			} catch (x) {
				reject(x);
				return;
			}
			handler.deps--;
			0 === handler.deps && (buffer = handler.chunk, null !== buffer && "blocked" === buffer.status && (resolvedValue = buffer.value, buffer.status = "fulfilled", buffer.value = handler.value, buffer.reason = null, null !== resolvedValue && wakeChunk(response, resolvedValue, handler.value, buffer)));
		}, reject);
		return null;
	}
	function resolveStream(response, id, stream, controller) {
		var chunks = response._chunks;
		stream = new ReactPromise("fulfilled", stream, controller);
		chunks.set(id, stream);
		response = response._formData.data.getAll(response._prefix + id);
		for (id = 0; id < response.length; id++) chunks = response[id], "string" === typeof chunks && ("C" === chunks[0] ? controller.close("C" === chunks ? "\"$undefined\"" : chunks.slice(1)) : controller.enqueueModel(chunks));
	}
	function parseReadableStream(response, reference, type) {
		function enqueue(value) {
			"bytes" !== type || ArrayBuffer.isView(value) ? controller.enqueue(value) : flightController.error(Error("Invalid data for bytes stream."));
		}
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var controller = null, closed = !1, stream = new ReadableStream({
			type,
			start: function(c) {
				controller = c;
			}
		}), previousBlockedChunk = null, flightController = {
			enqueueModel: function(json) {
				if (null === previousBlockedChunk) {
					var chunk = createResolvedModelChunk(response, json, -1);
					initializeModelChunk(chunk);
					"fulfilled" === chunk.status ? enqueue(chunk.value) : (chunk.then(enqueue, flightController.error), previousBlockedChunk = chunk);
				} else {
					chunk = previousBlockedChunk;
					var chunk$31 = new ReactPromise("pending", null, null);
					chunk$31.then(enqueue, flightController.error);
					previousBlockedChunk = chunk$31;
					chunk.then(function() {
						previousBlockedChunk === chunk$31 && (previousBlockedChunk = null);
						resolveModelChunk(response, chunk$31, json, -1);
					});
				}
			},
			close: function() {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.close();
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.close();
					});
				}
			},
			error: function(error) {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.error(error);
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.error(error);
					});
				}
			}
		};
		resolveStream(response, reference, stream, flightController);
		return stream;
	}
	function FlightIterator(next) {
		this.next = next;
	}
	FlightIterator.prototype = {};
	FlightIterator.prototype[ASYNC_ITERATOR] = function() {
		return this;
	};
	function parseAsyncIterable(response, reference, iterator) {
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var buffer = [], closed = !1, nextWriteIndex = 0, $jscomp$compprop5 = {};
		$jscomp$compprop5 = ($jscomp$compprop5[ASYNC_ITERATOR] = function() {
			var nextReadIndex = 0;
			return new FlightIterator(function(arg) {
				if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
				if (nextReadIndex === buffer.length) {
					if (closed) return new ReactPromise("fulfilled", {
						done: !0,
						value: void 0
					}, null);
					buffer[nextReadIndex] = new ReactPromise("pending", null, null);
				}
				return buffer[nextReadIndex++];
			});
		}, $jscomp$compprop5);
		iterator = iterator ? $jscomp$compprop5[ASYNC_ITERATOR]() : $jscomp$compprop5;
		resolveStream(response, reference, iterator, {
			enqueueModel: function(value) {
				nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !1);
				nextWriteIndex++;
			},
			close: function(value) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !0), nextWriteIndex++; nextWriteIndex < buffer.length;) resolveIteratorResultChunk(response, buffer[nextWriteIndex++], "\"$undefined\"", !0);
			},
			error: function(error) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = new ReactPromise("pending", null, null)); nextWriteIndex < buffer.length;) triggerErrorOnChunk(response, buffer[nextWriteIndex++], error);
			}
		});
		return iterator;
	}
	function parseModelString(response, obj, key, value, reference, arrayRoot) {
		if ("$" === value[0]) {
			switch (value[1]) {
				case "$": return null !== arrayRoot && bumpArrayCount(arrayRoot, value.length - 1, response), value.slice(1);
				case "@": return obj = parseInt(value.slice(2), 16), getChunk(response, obj);
				case "h": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, loadServerReference$1);
				case "T":
					if (void 0 === reference || void 0 === response._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
					return createTemporaryReference(response._temporaryReferences, reference);
				case "Q": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createMap);
				case "W": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createSet);
				case "K":
					key = value.slice(2);
					obj = response._prefix + "_";
					key = obj + key + "_";
					arrayRoot = new FormData();
					for (response = response._formData;;) {
						value = response.keys;
						null === value && (value = response.keys = Array.from(response.data.keys()), response.keyPointer = 0);
						value = value[response.keyPointer];
						if (void 0 === value) break;
						if (value.startsWith(key)) {
							reference = response.data.getAll(value);
							for (var referencedFormDataKey = value.slice(key.length), i = 0; i < reference.length; i++) arrayRoot.append(referencedFormDataKey, reference[i]);
							response.data.delete(value);
							response.keyPointer++;
						} else if (value.startsWith(obj)) break;
						else response.keyPointer++;
					}
					return arrayRoot;
				case "i": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, extractIterator);
				case "I": return Infinity;
				case "-": return "$-0" === value ? -0 : -Infinity;
				case "N": return NaN;
				case "u": return;
				case "D": return new Date(Date.parse(value.slice(2)));
				case "n":
					obj = value.slice(2);
					if (300 < obj.length) throw Error("BigInt is too large. Received " + obj.length + " digits but the limit is 300.");
					null !== arrayRoot && bumpArrayCount(arrayRoot, obj.length, response);
					return BigInt(obj);
				case "A": return parseTypedArray(response, value, ArrayBuffer, 1, obj, key, arrayRoot);
				case "O": return parseTypedArray(response, value, Int8Array, 1, obj, key, arrayRoot);
				case "o": return parseTypedArray(response, value, Uint8Array, 1, obj, key, arrayRoot);
				case "U": return parseTypedArray(response, value, Uint8ClampedArray, 1, obj, key, arrayRoot);
				case "S": return parseTypedArray(response, value, Int16Array, 2, obj, key, arrayRoot);
				case "s": return parseTypedArray(response, value, Uint16Array, 2, obj, key, arrayRoot);
				case "L": return parseTypedArray(response, value, Int32Array, 4, obj, key, arrayRoot);
				case "l": return parseTypedArray(response, value, Uint32Array, 4, obj, key, arrayRoot);
				case "G": return parseTypedArray(response, value, Float32Array, 4, obj, key, arrayRoot);
				case "g": return parseTypedArray(response, value, Float64Array, 8, obj, key, arrayRoot);
				case "M": return parseTypedArray(response, value, BigInt64Array, 8, obj, key, arrayRoot);
				case "m": return parseTypedArray(response, value, BigUint64Array, 8, obj, key, arrayRoot);
				case "V": return parseTypedArray(response, value, DataView, 1, obj, key, arrayRoot);
				case "B": return obj = parseInt(value.slice(2), 16), response._formData.data.get(response._prefix + obj);
				case "R": return parseReadableStream(response, value, void 0);
				case "r": return parseReadableStream(response, value, "bytes");
				case "X": return parseAsyncIterable(response, value, !1);
				case "x": return parseAsyncIterable(response, value, !0);
			}
			value = value.slice(1);
			return getOutlinedModel(response, value, obj, key, arrayRoot, createModel);
		}
		null !== arrayRoot && bumpArrayCount(arrayRoot, value.length, response);
		return value;
	}
	function createResponse(bundlerConfig, formFieldPrefix, temporaryReferences) {
		var backingFormData = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), arraySizeLimit = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1e6;
		return {
			_bundlerConfig: bundlerConfig,
			_prefix: formFieldPrefix,
			_formData: {
				data: backingFormData,
				keyPointer: -1,
				keys: null
			},
			_chunks: /* @__PURE__ */ new Map(),
			_closed: !1,
			_closedReason: null,
			_temporaryReferences: temporaryReferences,
			_rootArrayContexts: /* @__PURE__ */ new WeakMap(),
			_arraySizeLimit: arraySizeLimit
		};
	}
	function close(response) {
		reportGlobalError(response, Error("Connection closed."));
	}
	function loadServerReference(bundlerConfig, metaData) {
		var id = metaData.id;
		if ("string" !== typeof id) return null;
		var serverReference = resolveServerReference(bundlerConfig, id);
		bundlerConfig = preloadModule(serverReference);
		metaData = metaData.bound;
		return metaData instanceof Promise ? Promise.all([metaData, bundlerConfig]).then(function(_ref) {
			_ref = _ref[0];
			var fn = requireModule(serverReference);
			if (1e3 < _ref.length) throw Error("Server Function has too many bound arguments. Received " + _ref.length + " but the limit is 1000.");
			return fn.bind.apply(fn, [null].concat(_ref));
		}) : bundlerConfig ? Promise.resolve(bundlerConfig).then(function() {
			return requireModule(serverReference);
		}) : Promise.resolve(requireModule(serverReference));
	}
	function decodeBoundActionMetaData(body, serverManifest, formFieldPrefix, arraySizeLimit) {
		body = createResponse(serverManifest, formFieldPrefix, void 0, body, arraySizeLimit);
		close(body);
		body = getChunk(body, 0);
		body.then(function() {});
		if ("fulfilled" !== body.status) throw body.reason;
		return body.value;
	}
	exports.createClientModuleProxy = function(moduleId) {
		moduleId = registerClientReferenceImpl({}, moduleId, !1);
		return new Proxy(moduleId, proxyHandlers$1);
	};
	exports.createTemporaryReferenceSet = function() {
		return /* @__PURE__ */ new WeakMap();
	};
	exports.decodeAction = function(body, serverManifest) {
		var formData = new FormData(), maybeActionKey = null;
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_") ? key.startsWith("$ACTION_REF_") ? maybeActionKey = key : key.startsWith("$ACTION_ID_") && (maybeActionKey = key) : formData.append(key, value);
		});
		if (null === maybeActionKey) return null;
		var actionKey = maybeActionKey, action = null;
		if (actionKey.startsWith("$ACTION_REF_")) actionKey = "$ACTION_" + actionKey.slice(12) + ":", body = decodeBoundActionMetaData(body, serverManifest, actionKey), action = loadServerReference(serverManifest, body);
		else if (actionKey.startsWith("$ACTION_ID_")) body = actionKey.slice(11), action = loadServerReference(serverManifest, {
			id: body,
			bound: null
		});
		else throw Error("Cannot handle action key. This is a bug in React.");
		return action.then(function(fn) {
			return fn.bind(null, formData);
		});
	};
	exports.decodeFormState = function(actionResult, body, serverManifest) {
		var keyPath = body.get("$ACTION_KEY");
		if ("string" !== typeof keyPath) return Promise.resolve(null);
		var actionKey = null;
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_REF_") && (actionKey = key);
		});
		if (null === actionKey) return Promise.resolve(null);
		var formFieldPrefix = "$ACTION_" + actionKey.slice(12) + ":";
		body = decodeBoundActionMetaData(body, serverManifest, formFieldPrefix);
		var referenceId = body.id;
		return Promise.resolve(body.bound).then(function(bound) {
			return null === bound ? null : [
				actionResult,
				keyPath,
				referenceId,
				bound.length - 1
			];
		});
	};
	exports.decodeReply = function(body, webpackMap, options) {
		if ("string" === typeof body) {
			var form = new FormData();
			form.append("0", body);
			body = form;
		}
		body = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, body, options ? options.arraySizeLimit : void 0);
		webpackMap = getChunk(body, 0);
		close(body);
		return webpackMap;
	};
	exports.decodeReplyFromAsyncIterable = function(iterable, webpackMap, options) {
		function progress(entry) {
			if (entry.done) close(response);
			else {
				entry = entry.value;
				var name = entry[0];
				entry = entry[1];
				if ("string" === typeof entry) {
					appendBackingEntry(response._formData, name, entry);
					var prefix = response._prefix;
					if (name.startsWith(prefix)) {
						var chunks = response._chunks;
						name = +name.slice(prefix.length);
						(chunks = chunks.get(name)) && resolveModelChunk(response, chunks, entry, name);
					}
				} else appendBackingEntry(response._formData, name, entry);
				iterator.next().then(progress, error);
			}
		}
		function error(reason) {
			reportGlobalError(response, reason);
			"function" === typeof iterator.throw && iterator.throw(reason).then(noop, noop);
		}
		var iterator = iterable[ASYNC_ITERATOR](), response = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, void 0, options ? options.arraySizeLimit : void 0);
		iterator.next().then(progress, error);
		return getChunk(response, 0);
	};
	exports.prerender = function(model, webpackMap, options) {
		return new Promise(function(resolve, reject) {
			var request = new RequestInstance(21, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, function() {
				resolve({ prelude: new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 }) });
			}, reject, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
			if (options && options.signal) {
				var signal = options.signal;
				if (signal.aborted) abort(request, signal.reason);
				else {
					var listener = function() {
						abort(request, signal.reason);
						signal.removeEventListener("abort", listener);
					};
					signal.addEventListener("abort", listener);
				}
			}
			startWork(request);
		});
	};
	exports.registerClientReference = function(proxyImplementation, id, exportName) {
		return registerClientReferenceImpl(proxyImplementation, id + "#" + exportName, !1);
	};
	exports.registerServerReference = function(reference, id, exportName) {
		return Object.defineProperties(reference, {
			$$typeof: { value: SERVER_REFERENCE_TAG },
			$$id: {
				value: null === exportName ? id : id + "#" + exportName,
				configurable: !0
			},
			$$bound: {
				value: null,
				configurable: !0
			},
			bind: {
				value: bind,
				configurable: !0
			},
			toString: serverReferenceToString
		});
	};
	exports.renderToReadableStream = function(model, webpackMap, options) {
		var request = new RequestInstance(20, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, noop, noop, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
		if (options && options.signal) {
			var signal = options.signal;
			if (signal.aborted) abort(request, signal.reason);
			else {
				var listener = function() {
					abort(request, signal.reason);
					signal.removeEventListener("abort", listener);
				};
				signal.addEventListener("abort", listener);
			}
		}
		return new ReadableStream({
			type: "bytes",
			start: function() {
				startWork(request);
			},
			pull: function(controller) {
				startFlowing(request, controller);
			},
			cancel: function(reason) {
				request.destination = null;
				abort(request, reason);
			}
		}, { highWaterMark: 0 });
	};
}));
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/core/rsc.js
var import_server_edge = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var s = require_react_server_dom_webpack_server_edge_production();
	exports.renderToReadableStream = s.renderToReadableStream;
	exports.decodeReply = s.decodeReply;
	exports.decodeReplyFromAsyncIterable = s.decodeReplyFromAsyncIterable;
	exports.decodeAction = s.decodeAction;
	exports.decodeFormState = s.decodeFormState;
	exports.registerServerReference = s.registerServerReference;
	exports.registerClientReference = s.registerClientReference;
	exports.createClientModuleProxy = s.createClientModuleProxy;
	exports.createTemporaryReferenceSet = s.createTemporaryReferenceSet;
})))(), 1);
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/react/rsc/server.js
function registerClientReference(proxy, id, name) {
	return import_server_edge.registerClientReference(proxy, id, name);
}
//#endregion
//#region node_modules/vinext/dist/shims/error-boundary.js
var ErrorBoundary = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ErrorBoundary' is called on server");
}, "593f344dc510", "ErrorBoundary");
var ForbiddenBoundary = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ForbiddenBoundary' is called on server");
}, "593f344dc510", "ForbiddenBoundary");
var NotFoundBoundary = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'NotFoundBoundary' is called on server");
}, "593f344dc510", "NotFoundBoundary");
var RedirectBoundary = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'RedirectBoundary' is called on server");
}, "593f344dc510", "RedirectBoundary");
var UnauthorizedBoundary = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'UnauthorizedBoundary' is called on server");
}, "593f344dc510", "UnauthorizedBoundary");
//#endregion
//#region node_modules/vinext/dist/shims/layout-segment-context.js
/**
* Layout segment context provider.
*
* Must be "use client" so that Vite's RSC bundler renders this component in
* the SSR/browser environment where React.createContext is available. The RSC
* entry imports and renders LayoutSegmentProvider directly, but because of the
* "use client" boundary the actual execution happens on the SSR/client side
* where the context can be created and consumed by useSelectedLayoutSegment(s).
*
* Without "use client", this runs in the RSC environment where
* React.createContext is undefined, getLayoutSegmentContext() returns null,
* the provider becomes a no-op, and useSelectedLayoutSegments always returns [].
*
* The context is shared with navigation.ts via getLayoutSegmentContext()
* to avoid creating separate contexts in different modules.
*/
/**
* Wraps children with the layout segment context.
*
* Each layout in the App Router tree wraps its children with this provider,
* passing a map of parallel route key to segment path. The "children" key is
* always present (the default parallel route). Named parallel slots at this
* layout level add their own keys.
*
* Components inside the provider call useSelectedLayoutSegments(parallelRoutesKey)
* to read the segments for a specific parallel route.
*/
var LayoutSegmentProvider = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'LayoutSegmentProvider' is called on server");
}, "15c18cfaeeff", "LayoutSegmentProvider");
//#endregion
//#region node_modules/vinext/dist/shims/slot.js
/**
* Holds resolved AppElements (not a Promise). React 19's use(Promise) during
* hydration triggers "async Client Component" for native Promises that lack
* React's internal .status property. Storing resolved values sidesteps this.
*/
var Children = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Children' is called on server");
}, "8c0f216c4604", "Children");
var ParallelSlot = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ParallelSlot' is called on server");
}, "8c0f216c4604", "ParallelSlot");
var Slot = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'Slot' is called on server");
}, "8c0f216c4604", "Slot");
//#endregion
//#region node_modules/vinext/dist/server/app-render-dependency.js
function createAppRenderDependency() {
	let released = false;
	let resolve;
	return {
		promise: new Promise((promiseResolve) => {
			resolve = promiseResolve;
		}),
		release() {
			if (released) return;
			released = true;
			resolve();
		}
	};
}
function renderAfterAppDependencies(children, dependencies) {
	if (dependencies.length === 0) return children;
	async function AwaitAppRenderDependencies() {
		await Promise.all(dependencies.map((dependency) => dependency.promise));
		return children;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(AwaitAppRenderDependencies, {});
}
function renderWithAppDependencyBarrier(children, dependency) {
	function ReleaseAppRenderDependency() {
		dependency.release();
		return null;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [children, /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ReleaseAppRenderDependency, {})] });
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-segment-state.js
function isOptionalCatchAllSegment(segment) {
	return segment.startsWith("[[...") && segment.endsWith("]]") && segment.length > 7;
}
function isCatchAllSegment(segment) {
	return segment.startsWith("[...") && segment.endsWith("]") && segment.length > 5;
}
function isDynamicSegment(segment) {
	return segment.startsWith("[") && segment.endsWith("]") && !segment.includes(".");
}
function isRouteGroupSegment(segment) {
	return segment.startsWith("(") && segment.endsWith(")");
}
function formatParamSegmentValue(value) {
	if (Array.isArray(value)) return value.join("/");
	return value;
}
function readSegmentParam(segment) {
	if (isOptionalCatchAllSegment(segment)) return {
		name: segment.slice(5, -2),
		type: "oc"
	};
	if (isCatchAllSegment(segment)) return {
		name: segment.slice(4, -1),
		type: "c"
	};
	if (isDynamicSegment(segment)) return {
		name: segment.slice(1, -1),
		type: "d"
	};
	return null;
}
function formatSegmentStateParamValue(param, params, fallbackSegment) {
	const value = params[param.name];
	if (param.type === "oc" && (value === void 0 || Array.isArray(value) && value.length === 0)) return "";
	return formatParamSegmentValue(value) ?? fallbackSegment;
}
function resolveSingleSegmentStateKey(segment, params) {
	const param = readSegmentParam(segment);
	if (!param) return segment;
	return `${param.name}|${formatSegmentStateParamValue(param, params, segment)}|${param.type}`;
}
function resolveAppPageChildSegments(routeSegments, treePosition, params) {
	const rawSegments = routeSegments.slice(treePosition);
	const resolvedSegments = [];
	for (const segment of rawSegments) {
		if (isOptionalCatchAllSegment(segment)) {
			const paramValue = params[segment.slice(5, -2)];
			if (Array.isArray(paramValue) && paramValue.length === 0) continue;
			const resolvedValue = formatParamSegmentValue(paramValue);
			if (resolvedValue !== void 0) resolvedSegments.push(resolvedValue);
			continue;
		}
		if (isCatchAllSegment(segment)) {
			const paramName = segment.slice(4, -1);
			resolvedSegments.push(formatParamSegmentValue(params[paramName]) ?? segment);
			continue;
		}
		if (isDynamicSegment(segment)) {
			const paramName = segment.slice(1, -1);
			resolvedSegments.push(formatParamSegmentValue(params[paramName]) ?? segment);
			continue;
		}
		resolvedSegments.push(segment);
	}
	return resolvedSegments;
}
function resolveAppPageSegmentStateKey(routeSegments, treePosition, params) {
	for (const segment of routeSegments.slice(treePosition)) if (!isRouteGroupSegment(segment)) return resolveSingleSegmentStateKey(segment, params);
	return "";
}
function resolveAppPageRouteStateKey(routeSegments, params) {
	const statePath = [];
	for (const segment of routeSegments) if (!isRouteGroupSegment(segment)) statePath.push(resolveSingleSegmentStateKey(segment, params));
	return statePath.length > 0 ? JSON.stringify(statePath) : "";
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-route-wiring.js
function getDefaultExport$1(module) {
	return module?.default ?? null;
}
function getErrorBoundaryExport(module) {
	return module?.default ?? null;
}
function createAppPageTreePath(routeSegments, treePosition) {
	const treePathSegments = routeSegments?.slice(0, treePosition) ?? [];
	if (treePathSegments.length === 0) return "/";
	return `/${treePathSegments.join("/")}`;
}
function createAppPageLayoutEntries(route) {
	return route.layouts.map((layoutModule, index) => {
		const treePosition = route.layoutTreePositions?.[index] ?? 0;
		const treePath = createAppPageTreePath(route.routeSegments, treePosition);
		return {
			errorModule: route.errorTreePositions ? null : route.errors?.[index] ?? null,
			forbiddenModule: route.forbiddens?.[index] ?? null,
			id: AppElementsWire.encodeLayoutId(treePath),
			layoutModule,
			notFoundModule: route.notFounds?.[index] ?? null,
			unauthorizedModule: route.unauthorizeds?.[index] ?? null,
			treePath,
			treePosition
		};
	});
}
function createAppPageTemplateEntries(route) {
	return (route.templates ?? []).map((templateModule, index) => {
		const treePosition = route.templateTreePositions?.[index] ?? 0;
		const treePath = createAppPageTreePath(route.routeSegments, treePosition);
		return {
			id: AppElementsWire.encodeTemplateId(treePath),
			templateModule,
			treePath,
			treePosition
		};
	});
}
function createAppPageErrorEntries(route) {
	return (route.errorPaths ?? route.errors ?? []).flatMap((errorModule, index) => {
		if (!errorModule) return [];
		const treePosition = route.errorTreePositions?.[index];
		if (treePosition === void 0) return [];
		return [{
			errorModule,
			treePosition
		}];
	});
}
function createAppPageParallelSlotEntries(layoutIndex, layoutEntries, route, getEffectiveSlotParams) {
	const parallelSlots = {};
	for (const [slotKey, slot] of Object.entries(route.slots ?? {})) {
		const slotName = slot.name;
		const targetIndex = slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1;
		if (targetIndex !== layoutIndex) continue;
		const slotId = resolveAppPageSlotId(slot, layoutEntries[targetIndex]?.treePath ?? "/");
		const slotParams = getEffectiveSlotParams(slotKey, slotName);
		parallelSlots[slotName] = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutSegmentProvider, {
			segmentMap: { children: slot.routeSegments ? resolveAppPageChildSegments(slot.routeSegments, 0, slotParams) : [] },
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, { id: slotId })
		});
	}
	return Object.keys(parallelSlots).length > 0 ? parallelSlots : void 0;
}
function resolveAppPageSlotId(slot, treePath) {
	const slotId = AppElementsWire.encodeSlotId(slot.name, treePath);
	if (slot.id && slot.id !== slotId) throw new Error(`[vinext] App Router slot id mismatch for @${slot.name}: graph id ${slot.id} does not match wire id ${slotId}`);
	return slotId;
}
function resolveAppPageSlotBindingState(slot, override) {
	if (getDefaultExport$1(override?.pageModule) ?? getDefaultExport$1(slot.page)) return "active";
	if (getDefaultExport$1(slot.default)) return "default";
	return "unmatched";
}
function createAppPageSlotBindings(route, layoutEntries, resolveSlotOverride) {
	const bindings = [];
	for (const [slotKey, slot] of Object.entries(route.slots ?? {})) {
		const layoutEntry = layoutEntries[slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1] ?? null;
		const ownerLayoutId = layoutEntry?.id ?? null;
		const override = resolveSlotOverride(slotKey, slot.name);
		bindings.push({
			ownerLayoutId,
			slotId: resolveAppPageSlotId(slot, layoutEntry?.treePath ?? "/"),
			state: resolveAppPageSlotBindingState(slot, override)
		});
	}
	return normalizeAppElementsSlotBindings(bindings, { layoutIds: layoutEntries.map((entry) => entry.id) });
}
function createAppPageRouteHead(metadata, viewport, pathname) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", { charSet: "utf-8" }),
		metadata ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(MetadataHead, {
			metadata,
			pathname
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ViewportHead, { viewport })
	] });
}
function buildAppPageElements(options) {
	const interceptionContext = options.interceptionContext ?? null;
	const renderMode = options.renderMode ?? "navigation";
	const routeSegments = options.route.routeSegments ?? [];
	const routeResetKey = resolveAppPageRouteStateKey(routeSegments, options.matchedParams);
	const routeId = AppElementsWire.encodeRouteId(options.routePath, interceptionContext);
	const pageId = AppElementsWire.encodePageId(options.routePath, interceptionContext);
	const layoutEntries = createAppPageLayoutEntries(options.route);
	const templateEntries = createAppPageTemplateEntries(options.route);
	const errorEntries = createAppPageErrorEntries(options.route);
	const layoutEntriesByTreePosition = /* @__PURE__ */ new Map();
	const templateEntriesByTreePosition = /* @__PURE__ */ new Map();
	const errorEntriesByTreePosition = /* @__PURE__ */ new Map();
	for (const layoutEntry of layoutEntries) layoutEntriesByTreePosition.set(layoutEntry.treePosition, layoutEntry);
	for (const templateEntry of templateEntries) templateEntriesByTreePosition.set(templateEntry.treePosition, templateEntry);
	for (const errorEntry of errorEntries) errorEntriesByTreePosition.set(errorEntry.treePosition, errorEntry);
	const layoutIndicesByTreePosition = /* @__PURE__ */ new Map();
	for (let index = 0; index < layoutEntries.length; index++) layoutIndicesByTreePosition.set(layoutEntries[index].treePosition, index);
	const layoutDependenciesByIndex = /* @__PURE__ */ new Map();
	const layoutDependenciesBefore = [];
	const slotDependenciesByLayoutIndex = [];
	const templateDependenciesById = /* @__PURE__ */ new Map();
	const templateDependenciesBeforeById = /* @__PURE__ */ new Map();
	const pageDependencies = [];
	const rootLayoutTreePath = layoutEntries[0]?.treePath ?? null;
	const slotNameCounts = /* @__PURE__ */ new Map();
	for (const slot of Object.values(options.route.slots ?? {})) {
		const slotName = slot.name;
		slotNameCounts.set(slotName, (slotNameCounts.get(slotName) ?? 0) + 1);
	}
	const orderedTreePositions = Array.from(/* @__PURE__ */ new Set([
		...layoutEntries.map((entry) => entry.treePosition),
		...templateEntries.map((entry) => entry.treePosition),
		...errorEntries.map((entry) => entry.treePosition)
	])).sort((left, right) => left - right);
	const resolveSlotOverride = (slotKey, slotName) => {
		const overrideByKey = options.slotOverrides?.[slotKey];
		if (overrideByKey) return overrideByKey;
		if (slotKey === slotName || (slotNameCounts.get(slotName) ?? 0) === 1) return options.slotOverrides?.[slotName];
	};
	const elements = { ...AppElementsWire.createMetadataEntries({
		interception: options.interception ?? null,
		interceptionContext,
		layoutIds: options.route.ids?.layouts ?? layoutEntries.map((entry) => entry.id),
		rootLayoutTreePath,
		routeId,
		slotBindings: createAppPageSlotBindings(options.route, layoutEntries, resolveSlotOverride)
	}) };
	const getEffectiveSlotParams = (slotKey, slotName) => resolveSlotOverride(slotKey, slotName)?.params ?? options.matchedParams;
	for (const treePosition of orderedTreePositions) {
		const layoutIndex = layoutIndicesByTreePosition.get(treePosition);
		if (layoutIndex !== void 0) {
			const layoutEntry = layoutEntries[layoutIndex];
			layoutDependenciesBefore[layoutIndex] = [...pageDependencies];
			if (getDefaultExport$1(layoutEntry.layoutModule)) {
				const layoutDependency = createAppRenderDependency();
				layoutDependenciesByIndex.set(layoutIndex, layoutDependency);
				pageDependencies.push(layoutDependency);
			}
			slotDependenciesByLayoutIndex[layoutIndex] = [...pageDependencies];
		}
		const templateEntry = templateEntriesByTreePosition.get(treePosition);
		if (!templateEntry || !getDefaultExport$1(templateEntry.templateModule)) continue;
		const templateDependency = createAppRenderDependency();
		templateDependenciesById.set(templateEntry.id, templateDependency);
		templateDependenciesBeforeById.set(templateEntry.id, [...pageDependencies]);
		pageDependencies.push(templateDependency);
	}
	const routeLoadingComponent = getDefaultExport$1(options.route.loading);
	const isPrefetchLoadingShell = renderMode === APP_RSC_RENDER_MODE_PREFETCH_LOADING_SHELL;
	if (isPrefetchLoadingShell && routeLoadingComponent !== null) elements[APP_PREFETCH_LOADING_SHELL_MARKER_KEY] = "LoadingBoundary";
	elements[pageId] = isPrefetchLoadingShell ? null : renderAfterAppDependencies(options.element, pageDependencies);
	for (const templateEntry of templateEntries) {
		const templateComponent = getDefaultExport$1(templateEntry.templateModule);
		if (!templateComponent) continue;
		const TemplateComponent = templateComponent;
		const templateDependency = templateDependenciesById.get(templateEntry.id);
		const templateElement = templateDependency ? renderWithAppDependencyBarrier(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(TemplateComponent, {
			params: options.matchedParams,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		}), templateDependency) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(TemplateComponent, {
			params: options.matchedParams,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		});
		elements[templateEntry.id] = renderAfterAppDependencies(templateElement, templateDependenciesBeforeById.get(templateEntry.id) ?? []);
	}
	for (let index = 0; index < layoutEntries.length; index++) {
		const layoutEntry = layoutEntries[index];
		const layoutComponent = getDefaultExport$1(layoutEntry.layoutModule);
		if (!layoutComponent) continue;
		const layoutProps = { params: options.makeThenableParams(resolveAppPageSegmentParams(options.route.routeSegments, layoutEntry.treePosition, options.matchedParams)) };
		for (const slot of Object.values(options.route.slots ?? {})) {
			const slotName = slot.name;
			if ((slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1) !== index) continue;
			layoutProps[slotName] = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ParallelSlot, { name: slotName });
		}
		const LayoutComponent = layoutComponent;
		const layoutDependency = layoutDependenciesByIndex.get(index);
		const layoutElement = layoutDependency ? renderWithAppDependencyBarrier(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutComponent, {
			...layoutProps,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		}), layoutDependency) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutComponent, {
			...layoutProps,
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Children, {})
		});
		elements[layoutEntry.id] = renderAfterAppDependencies(layoutElement, layoutDependenciesBefore[index] ?? []);
	}
	for (const [slotKey, slot] of Object.entries(options.route.slots ?? {})) {
		const slotName = slot.name;
		const targetIndex = slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1;
		const slotId = resolveAppPageSlotId(slot, layoutEntries[targetIndex]?.treePath ?? "/");
		const slotOverride = resolveSlotOverride(slotKey, slotName);
		const slotParams = getEffectiveSlotParams(slotKey, slotName);
		const slotResetKey = resolveAppPageRouteStateKey(slot.routeSegments ?? [], slotParams);
		const overrideOrPageComponent = getDefaultExport$1(slotOverride?.pageModule) ?? getDefaultExport$1(slot.page);
		const defaultComponent = getDefaultExport$1(slot.default);
		if (!overrideOrPageComponent && defaultComponent && options.isRscRequest && options.mountedSlotIds?.has(slotId)) continue;
		const slotComponent = overrideOrPageComponent ?? defaultComponent;
		if (!slotComponent) {
			elements[slotId] = AppElementsWire.unmatchedSlotValue;
			continue;
		}
		const slotThenableParams = options.makeThenableParams(slotParams);
		const slotProps = { params: slotThenableParams };
		if (slotOverride?.props) Object.assign(slotProps, slotOverride.props);
		let slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(slotComponent, { ...slotProps });
		const interceptLayouts = slotOverride?.layoutModules ?? [];
		for (let layoutIndex = interceptLayouts.length - 1; layoutIndex >= 0; layoutIndex--) {
			const interceptLayoutComponent = getDefaultExport$1(interceptLayouts[layoutIndex]);
			if (!interceptLayoutComponent) continue;
			slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(interceptLayoutComponent, {
				params: slotThenableParams,
				children: slotElement
			});
		}
		const slotLayoutComponent = getDefaultExport$1(slot.layout);
		if (slotLayoutComponent) slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(slotLayoutComponent, {
			params: slotThenableParams,
			children: slotElement
		});
		const slotLoadingComponent = getDefaultExport$1(slot.loading);
		if (slotLoadingComponent && !shouldSuppressLoadingBoundaries(renderMode)) slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_react_react_server.Suspense, {
			fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(slotLoadingComponent, {}),
			children: slotElement
		}, slotResetKey);
		const slotErrorComponent = getErrorBoundaryExport(slot.error);
		if (slotErrorComponent) slotElement = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
			resetKey: slotResetKey,
			fallback: slotErrorComponent,
			children: slotElement
		});
		elements[slotId] = renderAfterAppDependencies(slotElement, targetIndex >= 0 ? slotDependenciesByLayoutIndex[targetIndex] ?? [] : []);
	}
	let routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutSegmentProvider, {
		segmentMap: { children: [] },
		children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, { id: pageId })
	});
	if (isPrefetchLoadingShell) if (routeLoadingComponent === null) routeChildren = null;
	else routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(routeLoadingComponent, {});
	else {
		routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(RedirectBoundary, { children: routeChildren });
		if (routeLoadingComponent && !shouldSuppressLoadingBoundaries(renderMode)) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_react_react_server.Suspense, {
			fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(routeLoadingComponent, {}),
			children: routeChildren
		}, routeResetKey);
	}
	const lastLayoutErrorModule = errorEntries.length > 0 ? errorEntries[errorEntries.length - 1].errorModule : null;
	const notFoundComponent = getDefaultExport$1(options.route.notFound) ?? getDefaultExport$1(options.rootNotFoundModule);
	if (notFoundComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(NotFoundBoundary, {
		resetKey: routeResetKey,
		fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(notFoundComponent, {}),
		children: routeChildren
	});
	const forbiddenComponent = getDefaultExport$1(options.route.forbidden) ?? getDefaultExport$1(options.rootForbiddenModule);
	if (forbiddenComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ForbiddenBoundary, {
		resetKey: routeResetKey,
		fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(forbiddenComponent, {}),
		children: routeChildren
	});
	const unauthorizedComponent = getDefaultExport$1(options.route.unauthorized) ?? getDefaultExport$1(options.rootUnauthorizedModule);
	if (unauthorizedComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(UnauthorizedBoundary, {
		resetKey: routeResetKey,
		fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(unauthorizedComponent, {}),
		children: routeChildren
	});
	const pageErrorComponent = getErrorBoundaryExport(options.route.error);
	if (pageErrorComponent && options.route.error !== lastLayoutErrorModule) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
		resetKey: routeResetKey,
		fallback: pageErrorComponent,
		children: routeChildren
	});
	for (let index = orderedTreePositions.length - 1; index >= 0; index--) {
		const treePosition = orderedTreePositions[index];
		const segmentResetKey = resolveAppPageSegmentStateKey(routeSegments, treePosition, options.matchedParams);
		let segmentChildren = routeChildren;
		const layoutEntry = layoutEntriesByTreePosition.get(treePosition);
		const templateEntry = templateEntriesByTreePosition.get(treePosition);
		const errorEntry = errorEntriesByTreePosition.get(treePosition);
		if (layoutEntry) {
			const layoutNotFoundComponent = getDefaultExport$1(layoutEntry.notFoundModule);
			if (layoutNotFoundComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(NotFoundBoundary, {
				resetKey: segmentResetKey,
				fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(layoutNotFoundComponent, {}),
				children: segmentChildren
			});
			const layoutForbiddenComponent = getDefaultExport$1(layoutEntry.forbiddenModule);
			if (layoutForbiddenComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ForbiddenBoundary, {
				resetKey: segmentResetKey,
				fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(layoutForbiddenComponent, {}),
				children: segmentChildren
			});
			const layoutUnauthorizedComponent = getDefaultExport$1(layoutEntry.unauthorizedModule);
			if (layoutUnauthorizedComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(UnauthorizedBoundary, {
				resetKey: segmentResetKey,
				fallback: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(layoutUnauthorizedComponent, {}),
				children: segmentChildren
			});
		}
		const segmentErrorComponent = getErrorBoundaryExport(errorEntry?.errorModule ?? layoutEntry?.errorModule);
		if (segmentErrorComponent) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
			resetKey: segmentResetKey,
			fallback: segmentErrorComponent,
			children: segmentChildren
		});
		if (templateEntry && getDefaultExport$1(templateEntry.templateModule)) segmentChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, {
			id: templateEntry.id,
			children: segmentChildren
		}, segmentResetKey);
		if (!layoutEntry) {
			routeChildren = segmentChildren;
			continue;
		}
		const layoutHasElement = getDefaultExport$1(layoutEntry.layoutModule) !== null;
		const layoutIndex = layoutIndicesByTreePosition.get(treePosition) ?? -1;
		const segmentMap = { children: resolveAppPageChildSegments(routeSegments, layoutEntry.treePosition, options.matchedParams) };
		for (const [slotKey, slot] of Object.entries(options.route.slots ?? {})) {
			const slotName = slot.name;
			if ((slot.layoutIndex >= 0 ? slot.layoutIndex : layoutEntries.length - 1) !== layoutIndex) continue;
			const slotParams = getEffectiveSlotParams(slotKey, slotName);
			segmentMap[slotName] = slot.routeSegments ? resolveAppPageChildSegments(slot.routeSegments, 0, slotParams) : [];
		}
		routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(LayoutSegmentProvider, {
			segmentMap,
			children: layoutHasElement ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Slot, {
				id: layoutEntry.id,
				parallelSlots: createAppPageParallelSlotEntries(layoutIndex, layoutEntries, options.route, getEffectiveSlotParams),
				children: segmentChildren
			}) : segmentChildren
		});
	}
	const globalErrorComponent = getErrorBoundaryExport(options.globalErrorModule);
	if (globalErrorComponent) routeChildren = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ErrorBoundary, {
		fallback: globalErrorComponent,
		children: routeChildren
	});
	elements[routeId] = /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [createAppPageRouteHead(options.resolvedMetadata, options.resolvedViewport, options.resolvedMetadataPathname ?? options.routePath), routeChildren] });
	return elements;
}
//#endregion
//#region node_modules/vinext/dist/server/file-based-metadata.js
function routeApplies(routePath, routePrefix) {
	if (!routePrefix) return true;
	return routePath === routePrefix || routePath.startsWith(`${routePrefix}/`);
}
function routeScore(routePrefix) {
	return routePrefix.split("/").filter(Boolean).length;
}
function routeSegmentsApply(routeSegments, routePrefixSegments) {
	if (routePrefixSegments.length > routeSegments.length) return false;
	for (let index = 0; index < routePrefixSegments.length; index++) if (routeSegments[index] !== routePrefixSegments[index]) return false;
	return true;
}
function removeParallelRouteSegments(routeSegments) {
	return routeSegments.filter((segment) => !segment.startsWith("@"));
}
function routeSegmentsApplyWithParallelSlots(routeSegments, routePrefixSegments) {
	if (routeSegmentsApply(routeSegments, routePrefixSegments)) return true;
	const visiblePrefixSegments = removeParallelRouteSegments(routePrefixSegments);
	return visiblePrefixSegments.length !== routePrefixSegments.length && routeSegmentsApply(routeSegments, visiblePrefixSegments);
}
function routeSpecificity(route) {
	return route.routeSegments?.length ?? routeScore(route.routePrefix);
}
function selectDeepestRoutes(metadataRoutes, kind, routePath, params, routeSegments) {
	if (!metadataRoutes || metadataRoutes.length === 0) return [];
	let selectedScore = -1;
	const selectedRoutes = [];
	for (const route of metadataRoutes) {
		if ((route.headData?.kind ?? getMetadataRouteKind(route)) !== kind) continue;
		if (routeSegments && route.routeSegments) {
			if (!routeSegmentsApplyWithParallelSlots(routeSegments, route.routeSegments)) continue;
			const currentScore = routeSpecificity(route);
			if (currentScore > selectedScore) {
				selectedScore = currentScore;
				selectedRoutes.length = 0;
				selectedRoutes.push(route);
				continue;
			}
			if (currentScore === selectedScore) selectedRoutes.push(route);
			continue;
		}
		const routePrefix = route.routePrefix;
		const resolvedRoutePrefix = fillRoutePatternSegments(routePrefix, params);
		const normalizedRoutePrefix = routePattern(routePrefix);
		if (!routeApplies(routePath, routePrefix) && !routeApplies(routePath, normalizedRoutePrefix) && (!resolvedRoutePrefix || !routeApplies(routePath, resolvedRoutePrefix))) continue;
		const currentScore = routeSpecificity(route);
		if (currentScore > selectedScore) {
			selectedScore = currentScore;
			selectedRoutes.length = 0;
			selectedRoutes.push(route);
			continue;
		}
		if (currentScore === selectedScore) selectedRoutes.push(route);
	}
	return selectedRoutes;
}
function isStringOrUrl(value) {
	return typeof value === "string" || typeof value === "object" && value instanceof URL;
}
function normalizeIconDescriptor(value) {
	if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
	const urlValue = Reflect.get(value, "url");
	if (!isStringOrUrl(urlValue)) return null;
	const entry = { url: urlValue };
	const sizesValue = Reflect.get(value, "sizes");
	if (typeof sizesValue === "string") entry.sizes = sizesValue;
	const typeValue = Reflect.get(value, "type");
	if (typeof typeValue === "string") entry.type = typeValue;
	const mediaValue = Reflect.get(value, "media");
	if (typeof mediaValue === "string") entry.media = mediaValue;
	return entry;
}
function normalizeIconValue(value) {
	if (isStringOrUrl(value)) return { url: value };
	return normalizeIconDescriptor(value);
}
function normalizeIconValueList(values) {
	const normalizedEntries = [];
	for (const value of values) {
		const normalizedValue = normalizeIconValue(value);
		if (normalizedValue) normalizedEntries.push(normalizedValue);
	}
	return normalizedEntries;
}
function normalizeIconEntries(icon) {
	const normalizedTopLevelValue = normalizeIconValue(icon);
	if (normalizedTopLevelValue) return [normalizedTopLevelValue];
	if (Array.isArray(icon)) return normalizeIconValueList(icon);
	if (!isIconMap(icon)) return [];
	const iconValue = icon.icon;
	if (!iconValue) return [];
	if (Array.isArray(iconValue)) return normalizeIconValueList(iconValue);
	const normalizedValue = normalizeIconValue(iconValue);
	return normalizedValue ? [normalizedValue] : [];
}
function isIconMap(value) {
	if (!value || typeof value !== "object" || value instanceof URL || Array.isArray(value)) return false;
	return normalizeIconValue(value) === null;
}
function cloneIconMap(value) {
	if (!value) return {};
	if (isIconMap(value)) return { ...value };
	const iconEntries = normalizeIconEntries(value);
	return iconEntries.length > 0 ? { icon: iconEntries } : {};
}
function buildIconEntry(headData) {
	if (headData.kind !== "favicon" && headData.kind !== "icon") return null;
	const iconEntry = { url: headData.href };
	if (headData.sizes) iconEntry.sizes = headData.sizes;
	if (headData.type) iconEntry.type = headData.type;
	return iconEntry;
}
function buildAppleEntry(headData) {
	if (headData.kind !== "apple") return null;
	const appleEntry = { url: headData.href };
	if (headData.sizes) appleEntry.sizes = headData.sizes;
	if (headData.type) appleEntry.type = headData.type;
	return appleEntry;
}
function normalizeAppleEntry(value) {
	if (isStringOrUrl(value)) return { url: value };
	return { ...value };
}
function markMetadataRouteSocialImage(entry) {
	Object.defineProperty(entry, "metadataRoute", {
		configurable: true,
		enumerable: false,
		value: true
	});
	return entry;
}
function buildSocialEntry(headData) {
	if (headData.kind !== "openGraph" && headData.kind !== "twitter") return null;
	const socialEntry = { url: headData.href };
	if (headData.width !== void 0) socialEntry.width = headData.width;
	if (headData.height !== void 0) socialEntry.height = headData.height;
	if (headData.alt) socialEntry.alt = headData.alt;
	if (headData.type) socialEntry.type = headData.type;
	return markMetadataRouteSocialImage(socialEntry);
}
function normalizeMetadataImageId(route, id) {
	const normalizedId = String(id);
	if (!isValidMetadataImageId(normalizedId)) {
		console.warn(`[vinext] Skipping metadata route ${route.servedUrl} image id "${normalizedId}" because metadata image ids must match /^[a-zA-Z0-9-_.]+$/.`);
		return null;
	}
	return normalizedId;
}
function withContentHash(href, contentHash) {
	if (!contentHash) return href;
	return `${href}?${contentHash}`;
}
function hasOwnProperty(source, key) {
	return Boolean(source && Object.prototype.hasOwnProperty.call(source, key));
}
function hasOpenGraphImages(metadata) {
	return hasOwnProperty(metadata?.openGraph, "images");
}
function hasTwitterImages(metadata) {
	return hasOwnProperty(metadata?.twitter, "images");
}
function hasIcons(metadata) {
	return Boolean(metadata?.icons);
}
function getMetadataSourceForRoute(route, options, fallbackMetadata) {
	if (!options?.metadataSources) return fallbackMetadata;
	if (!route.routeSegments) return null;
	for (let index = options.metadataSources.length - 1; index >= 0; index--) {
		const source = options.metadataSources[index];
		if (routeSegmentsApplyWithParallelSlots(source.routeSegments, route.routeSegments)) return source.metadata;
	}
	return null;
}
function socialRouteHasExplicitImagesAtSource(route, kind, options, fallbackMetadata) {
	const sourceMetadata = getMetadataSourceForRoute(route, options, fallbackMetadata);
	return kind === "openGraph" ? hasOpenGraphImages(sourceMetadata) : hasTwitterImages(sourceMetadata);
}
function iconRouteHasExplicitIconsAtSource(route, options, fallbackMetadata) {
	return hasIcons(fallbackMetadata) || hasIcons(getMetadataSourceForRoute(route, options, null));
}
function readStringProperty(source, key) {
	const value = Reflect.get(source, key);
	return typeof value === "string" ? value : void 0;
}
function readNumberProperty(source, key) {
	const value = Reflect.get(source, key);
	return typeof value === "number" ? value : void 0;
}
function readStringOrNumberProperty(source, key) {
	const value = Reflect.get(source, key);
	if (typeof value === "string" || typeof value === "number") return value;
}
function readSizeProperty(source) {
	const sizeValue = Reflect.get(source, "size");
	if (typeof sizeValue !== "object" || sizeValue === null) return;
	const width = readNumberProperty(sizeValue, "width");
	const height = readNumberProperty(sizeValue, "height");
	if (width === void 0 && height === void 0) return;
	return {
		width,
		height
	};
}
function readDynamicImageMetadataSource(source) {
	return {
		id: readStringOrNumberProperty(source, "id"),
		alt: readStringProperty(source, "alt"),
		contentType: readStringProperty(source, "contentType"),
		size: readSizeProperty(source)
	};
}
async function resolveDynamicImageMetadataSources(route, params) {
	if (!route.module || typeof route.module !== "object") return [];
	const generateImageMetadata = Reflect.get(route.module, "generateImageMetadata");
	if (typeof generateImageMetadata !== "function") return [readDynamicImageMetadataSource(route.module)];
	const result = await generateImageMetadata({ params: makeThenableParams(params) });
	if (!Array.isArray(result)) return [];
	const sources = [];
	for (const entry of result) if (typeof entry === "object" && entry !== null) {
		const source = readDynamicImageMetadataSource(entry);
		if (source.id === void 0) {
			console.warn(`[vinext] Skipping metadata route ${route.servedUrl} image metadata entry because generateImageMetadata entries must include an id.`);
			continue;
		}
		sources.push(source);
	}
	return sources;
}
async function resolveRouteHeadData(route, params) {
	if (!route.isDynamic || !route.module || typeof route.module !== "object") return route.headData ? [route.headData] : [];
	const routeKind = getMetadataImageRouteKind(route);
	if (!routeKind) return route.headData ? [route.headData] : [];
	const resolvedUrl = fillRoutePatternSegments(route.servedUrl, params);
	if (!resolvedUrl) {
		console.warn(`[vinext] Skipping metadata route ${route.servedUrl} because params did not fill all dynamic segments.`);
		return [];
	}
	const metadataSources = await resolveDynamicImageMetadataSources(route, params);
	const resolvedHeadData = [];
	for (const metadataSource of metadataSources) {
		let hrefBase = resolvedUrl;
		if (metadataSource.id !== void 0) {
			const normalizedId = normalizeMetadataImageId(route, metadataSource.id);
			if (!normalizedId) continue;
			hrefBase = `${resolvedUrl}/${normalizedId}`;
		}
		const href = withContentHash(hrefBase, route.contentHash);
		const contentType = metadataSource.contentType ?? route.contentType;
		const size = metadataSource.size;
		if (routeKind === "icon" || routeKind === "apple") {
			let sizes;
			if (size?.width !== void 0 && size.height !== void 0) sizes = `${size.width}x${size.height}`;
			resolvedHeadData.push({
				kind: routeKind,
				href,
				sizes,
				type: contentType
			});
			continue;
		}
		resolvedHeadData.push({
			kind: routeKind,
			href,
			alt: metadataSource.alt,
			height: size?.height,
			type: contentType,
			width: size?.width
		});
	}
	return resolvedHeadData;
}
async function resolveHeadDataList(routes, params) {
	return (await Promise.all(routes.map((route) => resolveRouteHeadData(route, params)))).flat();
}
/**
* Prepend the configured basePath to a file-based metadata href.
*
* Hrefs at this point are framework-built strings of the form
*   "/<route>/<file>[?<contentHash>]"
* The basePath must go before the path portion only; the query (cache-busting
* content hash) must be preserved verbatim. External URLs (http://, https://,
* //, data:, blob:) are left untouched — those are user-controlled and the
* framework has no business prefixing them.
*
* Idempotent: when the path already starts with `basePath` (or equals it),
* the path is returned unchanged so consumers may safely apply the prefix
* at any layer without risking `/base/base/icon.png`.
*/
function prefixMetadataHrefWithBasePath(href, basePath) {
	if (!basePath) return href;
	if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return href;
	if (!href.startsWith("/")) return href;
	const queryIndex = href.indexOf("?");
	const pathname = queryIndex === -1 ? href : href.slice(0, queryIndex);
	const search = queryIndex === -1 ? "" : href.slice(queryIndex);
	if (hasBasePath(pathname, basePath)) return href;
	return `${addBasePathToPathname(pathname, basePath)}${search}`;
}
function applyBasePathToHeadDataList(headDataList, basePath) {
	if (!basePath) return headDataList;
	return headDataList.map((entry) => ({
		...entry,
		href: prefixMetadataHrefWithBasePath(entry.href, basePath)
	}));
}
async function applyFileBasedMetadata(metadata, routePath, params, metadataRoutes, options) {
	if (!metadataRoutes || metadataRoutes.length === 0) return metadata;
	const routeSegments = options?.routeSegments ?? null;
	const faviconRoutes = selectDeepestRoutes(metadataRoutes, "favicon", routePath, params, routeSegments);
	const iconRoutes = selectDeepestRoutes(metadataRoutes, "icon", routePath, params, routeSegments).filter((route) => !iconRouteHasExplicitIconsAtSource(route, options, metadata));
	const appleRoutes = selectDeepestRoutes(metadataRoutes, "apple", routePath, params, routeSegments).filter((route) => !iconRouteHasExplicitIconsAtSource(route, options, metadata));
	const openGraphRoutes = selectDeepestRoutes(metadataRoutes, "openGraph", routePath, params, routeSegments).filter((route) => !socialRouteHasExplicitImagesAtSource(route, "openGraph", options, metadata));
	const twitterRoutes = selectDeepestRoutes(metadataRoutes, "twitter", routePath, params, routeSegments).filter((route) => !socialRouteHasExplicitImagesAtSource(route, "twitter", options, metadata));
	const manifestRoutes = selectDeepestRoutes(metadataRoutes, "manifest", routePath, params, routeSegments);
	const basePath = options?.basePath ?? "";
	const [rawFaviconHeadData, rawIconHeadData, rawAppleHeadData, rawOpenGraphHeadData, rawTwitterHeadData, rawManifestHeadData] = await Promise.all([
		resolveHeadDataList(faviconRoutes, params),
		resolveHeadDataList(iconRoutes, params),
		resolveHeadDataList(appleRoutes, params),
		resolveHeadDataList(openGraphRoutes, params),
		resolveHeadDataList(twitterRoutes, params),
		resolveHeadDataList(manifestRoutes, params)
	]);
	const faviconHeadData = applyBasePathToHeadDataList(rawFaviconHeadData, basePath);
	const iconHeadData = applyBasePathToHeadDataList(rawIconHeadData, basePath);
	const appleHeadData = applyBasePathToHeadDataList(rawAppleHeadData, basePath);
	const openGraphHeadData = applyBasePathToHeadDataList(rawOpenGraphHeadData, basePath);
	const twitterHeadData = applyBasePathToHeadDataList(rawTwitterHeadData, basePath);
	const manifestHeadData = applyBasePathToHeadDataList(rawManifestHeadData, basePath);
	if (!metadata && faviconHeadData.length === 0 && iconHeadData.length === 0 && appleHeadData.length === 0 && openGraphHeadData.length === 0 && twitterHeadData.length === 0 && manifestHeadData.length === 0) return null;
	const nextMetadata = metadata ? { ...metadata } : {};
	const faviconEntries = [];
	for (const headData of faviconHeadData) {
		const iconEntry = buildIconEntry(headData);
		if (iconEntry) faviconEntries.push(iconEntry);
	}
	if (faviconEntries.length > 0) {
		const nextIcons = cloneIconMap(nextMetadata.icons);
		const normalizedIcons = normalizeIconEntries(nextIcons);
		nextIcons.icon = [...faviconEntries, ...normalizedIcons];
		nextMetadata.icons = nextIcons;
	}
	{
		const nextIcons = cloneIconMap(nextMetadata.icons);
		const iconEntries = [];
		for (const headData of iconHeadData) {
			const iconEntry = buildIconEntry(headData);
			if (iconEntry) iconEntries.push(iconEntry);
		}
		if (iconEntries.length > 0) {
			const normalizedIcons = normalizeIconEntries(nextIcons);
			nextIcons.icon = [...iconEntries, ...normalizedIcons];
		}
		const appleEntries = [];
		for (const headData of appleHeadData) {
			const appleEntry = buildAppleEntry(headData);
			if (appleEntry) appleEntries.push(appleEntry);
		}
		if (appleEntries.length > 0) {
			const existingApple = nextIcons.apple;
			const normalizedAppleEntries = [];
			if (Array.isArray(existingApple)) for (const entry of existingApple) normalizedAppleEntries.push(normalizeAppleEntry(entry));
			else if (existingApple) normalizedAppleEntries.push(normalizeAppleEntry(existingApple));
			nextIcons.apple = [...appleEntries, ...normalizedAppleEntries];
		}
		if (iconEntries.length > 0 || appleEntries.length > 0) nextMetadata.icons = nextIcons;
	}
	if (openGraphHeadData.length > 0) {
		const socialEntries = [];
		for (const headData of openGraphHeadData) {
			const socialEntry = buildSocialEntry(headData);
			if (socialEntry) socialEntries.push(socialEntry);
		}
		if (socialEntries.length > 0) {
			const nextOpenGraph = nextMetadata.openGraph ? { ...nextMetadata.openGraph } : {};
			nextOpenGraph.images = socialEntries;
			nextMetadata.openGraph = nextOpenGraph;
		}
	}
	if (twitterHeadData.length > 0) {
		const socialEntries = [];
		for (const headData of twitterHeadData) {
			const socialEntry = buildSocialEntry(headData);
			if (socialEntry) socialEntries.push(socialEntry);
		}
		if (socialEntries.length > 0) {
			const nextTwitter = nextMetadata.twitter ? { ...nextMetadata.twitter } : {};
			nextTwitter.images = socialEntries;
			nextMetadata.twitter = nextTwitter;
		}
	}
	if (manifestHeadData.length > 0 && manifestHeadData[0].kind === "manifest") nextMetadata.manifest = manifestHeadData[0].href;
	return nextMetadata;
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-head.js
/**
* Wrapped {@link _resolveModuleMetadata} that tags any thrown error with the
* `APP_PAGE_METADATA_ERROR_MARKER` symbol. The marker lets downstream special-
* error handling distinguish a `generateMetadata()` redirect/notFound from a
* page-component redirect/notFound, which matters because metadata is
* suspended/streamed in Next.js: its redirects ride inside the flight payload
* with a 200 status code even for document SSR, whereas page redirects still
* emit a 307 for SSR. See https://github.com/cloudflare/vinext/issues/1347
* and Next.js test/e2e/app-dir/metadata-navigation.
*/
async function resolveModuleMetadata(...args) {
	try {
		return await resolveModuleMetadata$1(...args);
	} catch (error) {
		throw tagAppPageMetadataError(error);
	}
}
function resolveActiveParallelRouteHeadInputs(options) {
	return Object.entries(options.slots ?? {}).map(([slotKey, slot]) => {
		if (options.interceptSlotKey === slotKey && options.interceptPage) return {
			layoutModules: options.interceptLayouts ?? [],
			pageModule: options.interceptPage,
			params: options.interceptParams ?? options.params,
			routeSegments: options.routeSegments
		};
		return {
			layoutModules: slot.layout ? [slot.layout] : [],
			pageModule: slot.page,
			params: options.params,
			routeSegments: options.routeSegments
		};
	});
}
function isPresent(value) {
	return value !== null && value !== void 0;
}
function collectAppPageSearchParams(searchParams) {
	const pageSearchParams = Object.create(null);
	let hasSearchParams = false;
	searchParams?.forEach((value, key) => {
		hasSearchParams = true;
		const currentValue = pageSearchParams[key];
		if (Array.isArray(currentValue)) {
			pageSearchParams[key] = [...currentValue, value];
			return;
		}
		if (currentValue !== void 0) {
			pageSearchParams[key] = [currentValue, value];
			return;
		}
		pageSearchParams[key] = value;
	});
	return {
		hasSearchParams,
		pageSearchParams
	};
}
function createMetadataSources(metadataResults, routeSegments, layoutTreePositions, pageMetadata, includePageSource) {
	const metadataSources = metadataResults.map((metadata, index) => ({
		routeSegments: routeSegments.slice(0, layoutTreePositions[index] ?? 0),
		metadata
	}));
	if (includePageSource) metadataSources.push({
		routeSegments,
		metadata: pageMetadata
	});
	return metadataSources;
}
function createLayoutInputs(layoutModules, layoutTreePositions) {
	const layoutInputs = [];
	for (let index = 0; index < layoutModules.length; index++) {
		const layoutModule = layoutModules[index];
		if (!isPresent(layoutModule)) continue;
		layoutInputs.push({
			module: layoutModule,
			treePosition: layoutTreePositions[index] ?? 0
		});
	}
	return layoutInputs;
}
async function resolveLayoutMetadata(layoutInputs, params, routeSegments) {
	const layoutMetadataPromises = [];
	let accumulatedMetadata = Promise.resolve({});
	for (const layoutInput of layoutInputs) {
		const parentForLayout = accumulatedMetadata;
		const layoutParams = resolveAppPageSegmentParams(routeSegments, layoutInput.treePosition, params);
		const metadataPromise = resolveModuleMetadata(layoutInput.module, layoutParams, void 0, parentForLayout);
		layoutMetadataPromises.push(metadataPromise);
		metadataPromise.catch(() => null);
		accumulatedMetadata = metadataPromise.then(async (metadataResult) => {
			if (metadataResult) return mergeMetadataEntries([{ metadata: await parentForLayout }, { metadata: metadataResult }]);
			return parentForLayout;
		});
		accumulatedMetadata.catch(() => null);
	}
	return Promise.all(layoutMetadataPromises);
}
async function resolveLayoutViewport(layoutInputs, params, routeSegments) {
	return Promise.all(layoutInputs.map((layoutInput) => {
		const layoutParams = resolveAppPageSegmentParams(routeSegments, layoutInput.treePosition, params);
		return resolveModuleViewport(layoutInput.module, layoutParams);
	}));
}
async function resolveParallelRouteHead(parallelRoute, fallbackParams, fallbackRouteSegments, pageSearchParams, parent) {
	const params = parallelRoute.params ?? fallbackParams;
	const routeSegments = parallelRoute.routeSegments ?? fallbackRouteSegments;
	const metadataResults = [];
	const viewportResults = [];
	const metadataSources = [];
	let accumulatedMetadata = parent;
	const layoutModules = [...parallelRoute.layoutModules ?? [], parallelRoute.layoutModule].filter(isPresent);
	const layoutViewportPromises = layoutModules.map((layoutModule) => resolveModuleViewport(layoutModule, params));
	const pageViewportPromise = parallelRoute.pageModule ? resolveModuleViewport(parallelRoute.pageModule, params) : Promise.resolve(null);
	for (const layoutViewportPromise of layoutViewportPromises) layoutViewportPromise.catch(() => null);
	pageViewportPromise.catch(() => null);
	for (const layoutModule of layoutModules) {
		const layoutMetadata = await resolveModuleMetadata(layoutModule, params, void 0, accumulatedMetadata);
		metadataResults.push(layoutMetadata);
		metadataSources.push({
			metadata: layoutMetadata,
			routeSegments
		});
		if (layoutMetadata) {
			accumulatedMetadata = accumulatedMetadata.then(async (parentMetadata) => mergeMetadataEntries([{ metadata: parentMetadata }, { metadata: layoutMetadata }]));
			accumulatedMetadata.catch(() => null);
		}
	}
	if (parallelRoute.pageModule) {
		const pageMetadata = await resolveModuleMetadata(parallelRoute.pageModule, params, pageSearchParams, accumulatedMetadata);
		metadataResults.push(pageMetadata);
		metadataSources.push({
			metadata: pageMetadata,
			routeSegments
		});
	}
	viewportResults.push(...await Promise.all(layoutViewportPromises));
	const pageViewport = await pageViewportPromise;
	if (parallelRoute.pageModule) viewportResults.push(pageViewport);
	return {
		metadataResults,
		metadataSources,
		viewportResults
	};
}
async function resolveAppPageHead(options) {
	return await runWithFetchDedupe(() => resolveAppPageHeadInner(options));
}
async function resolveAppPageHeadInner(options) {
	const routeSegments = options.routeSegments ?? [];
	const layoutTreePositions = options.layoutTreePositions ?? [];
	const layoutInputs = createLayoutInputs(options.layoutModules, layoutTreePositions);
	const layoutSourcePositions = layoutInputs.map((input) => input.treePosition);
	const { hasSearchParams, pageSearchParams } = collectAppPageSearchParams(options.searchParams);
	const layoutMetadataPromise = resolveLayoutMetadata(layoutInputs, options.params, routeSegments);
	const layoutViewportPromise = resolveLayoutViewport(layoutInputs, options.params, routeSegments);
	const layoutMetadataResultsForParent = layoutMetadataPromise.then((metadataResults) => metadataResults.filter(isPresent));
	layoutMetadataResultsForParent.catch(() => null);
	const pageParentPromise = layoutMetadataResultsForParent.then((metadataResults) => metadataResults.length > 0 ? mergeMetadataEntries(metadataResults.map((metadata) => ({ metadata }))) : {});
	pageParentPromise.catch(() => null);
	const pageMetadataPromise = options.pageModule ? resolveModuleMetadata(options.pageModule, options.params, pageSearchParams, pageParentPromise) : Promise.resolve(null);
	const pageViewportPromise = options.pageModule ? resolveModuleViewport(options.pageModule, options.params) : Promise.resolve(null);
	const parallelRouteHeadPromise = Promise.all((options.parallelRoutes ?? []).map((parallelRoute) => resolveParallelRouteHead(parallelRoute, options.params, routeSegments, pageSearchParams, pageParentPromise)));
	const [layoutMetadataResults, layoutViewportResults, pageMetadata, pageViewport, parallelRouteHeads] = await Promise.all([
		layoutMetadataPromise,
		layoutViewportPromise,
		pageMetadataPromise,
		pageViewportPromise,
		parallelRouteHeadPromise
	]);
	const parallelMetadataResults = parallelRouteHeads.flatMap((head) => head.metadataResults);
	const parallelViewportResults = parallelRouteHeads.flatMap((head) => head.viewportResults);
	const parallelMetadataSources = parallelRouteHeads.flatMap((head) => head.metadataSources);
	const primaryPageHasTitle = pageMetadata != null && pageMetadata.title !== void 0;
	const metadataEntries = [
		...layoutMetadataResults.filter(isPresent).map((metadata) => ({ metadata })),
		...pageMetadata ? [{
			isPage: true,
			metadata: pageMetadata
		}] : [],
		...parallelMetadataResults.filter(isPresent).map((metadata) => ({
			contributesTitle: !primaryPageHasTitle,
			metadata
		}))
	];
	const viewportList = [
		...layoutViewportResults.filter(isPresent),
		...pageViewport ? [pageViewport] : [],
		...parallelViewportResults.filter(isPresent)
	];
	const resolvedMetadataBase = metadataEntries.length > 0 ? mergeMetadataEntries(metadataEntries) : null;
	const metadataSources = createMetadataSources(layoutMetadataResults, routeSegments, layoutSourcePositions, pageMetadata, Boolean(options.pageModule));
	metadataSources.push(...parallelMetadataSources);
	let metadata = resolvedMetadataBase;
	try {
		metadata = await applyFileBasedMetadata(resolvedMetadataBase, options.routePath, options.params, options.metadataRoutes, {
			routeSegments,
			metadataSources,
			basePath: options.basePath ?? ""
		});
	} catch (error) {
		if (!options.fallbackOnFileMetadataError) throw error;
		console.error(`[vinext] File-based metadata resolution failed while rendering error boundary for ${options.routePath}:`, error);
	}
	if (metadata) metadata = postProcessMetadata(metadata);
	return {
		hasSearchParams,
		metadata,
		pageSearchParams,
		viewport: mergeViewport(viewportList)
	};
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-boundary.js
function resolveAppPageHttpAccessBoundaryComponent(options) {
	let boundaryModule;
	if (options.statusCode === 403) boundaryModule = options.routeForbiddenModule ?? options.rootForbiddenModule;
	else if (options.statusCode === 401) boundaryModule = options.routeUnauthorizedModule ?? options.rootUnauthorizedModule;
	else boundaryModule = options.routeNotFoundModule ?? options.rootNotFoundModule;
	return options.getDefaultExport(boundaryModule) ?? null;
}
function resolveAppPageParentHttpAccessBoundaryModule(options) {
	let routeModules = options.routeNotFoundModules;
	let rootModule = options.rootNotFoundModule;
	if (options.statusCode === 403) {
		routeModules = options.routeForbiddenModules;
		rootModule = options.rootForbiddenModule;
	} else if (options.statusCode === 401) {
		routeModules = options.routeUnauthorizedModules;
		rootModule = options.rootUnauthorizedModule;
	}
	if (routeModules) for (let index = options.layoutIndex - 1; index >= 0; index--) {
		const module = routeModules[index];
		if (module) return module;
	}
	return rootModule ?? null;
}
function resolveAppPageErrorBoundary(options) {
	const pageErrorComponent = options.getDefaultExport(options.pageErrorModule);
	if (pageErrorComponent) return {
		component: pageErrorComponent,
		isGlobalError: false
	};
	const segmentErrorModules = options.errorModules ?? options.layoutErrorModules;
	if (segmentErrorModules) for (let index = segmentErrorModules.length - 1; index >= 0; index--) {
		const segmentErrorComponent = options.getDefaultExport(segmentErrorModules[index]);
		if (segmentErrorComponent) return {
			component: segmentErrorComponent,
			isGlobalError: false
		};
	}
	const globalErrorComponent = options.getDefaultExport(options.globalErrorModule);
	return {
		component: globalErrorComponent ?? null,
		isGlobalError: Boolean(globalErrorComponent)
	};
}
function wrapAppPageBoundaryElement(options) {
	let element = options.element;
	if (!options.skipLayoutWrapping) for (let index = options.layoutModules.length - 1; index >= 0; index--) {
		const layoutComponent = options.getDefaultExport(options.layoutModules[index]);
		if (!layoutComponent) continue;
		const treePosition = options.layoutTreePositions ? options.layoutTreePositions[index] : 0;
		const asyncParams = options.makeThenableParams(resolveAppPageSegmentParams(options.routeSegments, treePosition, options.matchedParams));
		element = options.renderLayout(layoutComponent, element, asyncParams);
		if (options.isRscRequest && options.renderLayoutSegmentProvider && options.resolveChildSegments) {
			const childSegments = options.resolveChildSegments(options.routeSegments ?? [], treePosition, options.matchedParams);
			element = options.renderLayoutSegmentProvider({ children: childSegments }, element);
		}
	}
	if (options.isRscRequest && options.includeGlobalErrorBoundary && options.globalErrorComponent) element = options.renderErrorBoundary(options.globalErrorComponent, element);
	return element;
}
async function renderAppPageBoundaryResponse(options) {
	const rscStream = runWithFetchDedupe(() => options.renderToReadableStream(options.element, { onError: options.createRscOnErrorHandler() }));
	if (options.isRscRequest) {
		const headers = new Headers({
			"Content-Type": VINEXT_RSC_CONTENT_TYPE,
			Vary: VINEXT_RSC_VARY_HEADER
		});
		mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
		applyRscCompatibilityIdHeader(headers);
		return new Response(rscStream, {
			status: options.status,
			headers
		});
	}
	return options.createHtmlResponse(rscStream, options.status);
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-stream.js
function createAppPageFontData(options) {
	return {
		links: options.getLinks(),
		preloads: options.getPreloads(),
		styles: options.getStyles()
	};
}
async function renderAppPageHtmlStream(options) {
	const ssrOptions = {
		formState: options.formState ?? null,
		scriptNonce: options.scriptNonce,
		basePath: options.basePath,
		rootParams: options.rootParams,
		sideStream: options.sideStream,
		capturedRscDataRef: options.capturedRscDataRef,
		waitForAllReady: options.waitForAllReady
	};
	return options.ssrHandler.handleSsr(options.rscStream, options.navigationContext, options.fontData, ssrOptions);
}
/**
* Wraps a stream so that `onFlush` is called when the last byte has been read
* by the downstream consumer (i.e. when the HTTP layer finishes draining the
* response body). This is the correct place to clear per-request context,
* because the RSC/SSR pipeline is lazy — components execute while the stream
* is being consumed, not when the stream handle is first obtained.
*/
function deferUntilStreamConsumed(stream, onFlush) {
	let called = false;
	const once = () => {
		if (!called) {
			called = true;
			onFlush();
		}
	};
	const cleanup = new TransformStream({ flush() {
		once();
	} });
	const reader = stream.pipeThrough(cleanup).getReader();
	return new ReadableStream({
		pull(controller) {
			return reader.read().then(({ done, value }) => {
				if (done) controller.close();
				else controller.enqueue(value);
			}, (error) => {
				once();
				controller.error(error);
			});
		},
		cancel(reason) {
			once();
			return reader.cancel(reason);
		}
	});
}
async function renderAppPageHtmlResponse(options) {
	const safeStream = deferUntilStreamConsumed(await renderAppPageHtmlStream(options), () => {
		options.clearRequestContext();
	});
	const headers = new Headers({
		"Content-Type": "text/html; charset=utf-8",
		Vary: VINEXT_RSC_VARY_HEADER
	});
	if (options.fontLinkHeader) headers.set("Link", options.fontLinkHeader);
	mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
	return new Response(safeStream, {
		status: options.status,
		headers
	});
}
async function renderAppPageHtmlStreamWithRecovery(options) {
	try {
		const htmlStream = await options.renderHtmlStream();
		options.onShellRendered?.();
		return {
			htmlStream,
			response: null
		};
	} catch (error) {
		const specialError = options.resolveSpecialError(error);
		if (specialError) return {
			htmlStream: null,
			response: await options.renderSpecialErrorResponse(specialError)
		};
		const boundaryResponse = await options.renderErrorBoundaryResponse(error);
		if (boundaryResponse) return {
			htmlStream: null,
			response: boundaryResponse
		};
		throw error;
	}
}
function createAppPageRscErrorTracker(baseOnError) {
	let capturedError = null;
	let capturedSpecialError = null;
	return {
		getCapturedError() {
			return capturedError;
		},
		getCapturedSpecialError() {
			return capturedSpecialError;
		},
		onRenderError(error, requestInfo, errorContext) {
			if (error && typeof error === "object" && "digest" in error) {
				if (capturedSpecialError === null) capturedSpecialError = error;
			} else capturedError = error;
			return baseOnError(error, requestInfo, errorContext);
		}
	};
}
function shouldRerenderAppPageWithGlobalError(options) {
	return Boolean(options.capturedError) && !options.hasLocalBoundary;
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-boundary-render.js
function getDefaultExport(module) {
	return module?.default ?? null;
}
function wrapRenderedBoundaryElement(options) {
	return wrapAppPageBoundaryElement({
		element: options.element,
		getDefaultExport,
		globalErrorComponent: getDefaultExport(options.globalErrorModule),
		includeGlobalErrorBoundary: options.includeGlobalErrorBoundary,
		isRscRequest: options.isRscRequest,
		layoutModules: options.layoutModules,
		layoutTreePositions: options.layoutTreePositions,
		makeThenableParams: options.makeThenableParams,
		matchedParams: options.matchedParams,
		renderErrorBoundary(GlobalErrorComponent, children) {
			return (0, import_react_react_server.createElement)(ErrorBoundary, {
				fallback: GlobalErrorComponent,
				children
			});
		},
		renderLayout(LayoutComponent, children, asyncParams) {
			return (0, import_react_react_server.createElement)(LayoutComponent, {
				children,
				params: asyncParams
			});
		},
		renderLayoutSegmentProvider(segmentMap, children) {
			return (0, import_react_react_server.createElement)(LayoutSegmentProvider, { segmentMap }, children);
		},
		resolveChildSegments: options.resolveChildSegments,
		routeSegments: options.routeSegments ?? [],
		skipLayoutWrapping: options.skipLayoutWrapping
	});
}
function createAppPageBoundaryLayoutEntries(route, layoutModules) {
	if (!route || layoutModules.length === 0) return [];
	return createAppPageLayoutEntries({
		errors: route.errors,
		layoutTreePositions: route.layoutTreePositions,
		layouts: layoutModules,
		notFounds: null,
		routeSegments: route.routeSegments
	});
}
function resolveHttpAccessFallbackHeadRouteSegments(route, layoutModules) {
	if (!route?.routeSegments) return;
	if (!route.layouts || layoutModules.length >= route.layouts.length) return route.routeSegments;
	const lastIncludedLayoutIndex = layoutModules.length - 1;
	if (lastIncludedLayoutIndex < 0) return [];
	const segmentCount = route.layoutTreePositions?.[lastIncludedLayoutIndex] ?? 0;
	return route.routeSegments.slice(0, segmentCount);
}
function resolveHttpAccessFallbackHeadLayoutTreePositions(route, layoutModules) {
	if (!route?.layouts || layoutModules.length >= route.layouts.length) return route?.layoutTreePositions;
	return route.layoutTreePositions?.slice(0, layoutModules.length);
}
function createAppPageBoundaryRscPayload(options) {
	const routeId = AppElementsWire.encodeRouteId(options.pathname, null);
	const layoutEntries = createAppPageBoundaryLayoutEntries(options.route, options.layoutModules);
	return {
		...AppElementsWire.createMetadataEntries({
			interceptionContext: null,
			layoutIds: layoutEntries.map((entry) => entry.id),
			rootLayoutTreePath: layoutEntries[0]?.treePath ?? null,
			routeId
		}),
		[routeId]: options.element
	};
}
async function renderAppPageBoundaryElementResponse(options) {
	const pathname = new URL(options.requestUrl).pathname;
	return renderAppPageBoundaryResponse({
		async createHtmlResponse(rscStream, responseStatus) {
			const fontData = createAppPageFontData({
				getLinks: options.getFontLinks,
				getPreloads: options.getFontPreloads,
				getStyles: options.getFontStyles
			});
			const ssrHandler = await options.loadSsrHandler();
			return renderAppPageHtmlResponse({
				clearRequestContext: options.clearRequestContext,
				fontData,
				fontLinkHeader: options.buildFontLinkHeader(fontData.preloads),
				middlewareHeaders: options.middlewareContext.headers,
				navigationContext: options.getNavigationContext(),
				rscStream,
				scriptNonce: options.scriptNonce,
				ssrHandler,
				status: responseStatus
			});
		},
		createRscOnErrorHandler() {
			return options.createRscOnErrorHandler(pathname, options.routePattern ?? pathname);
		},
		element: createAppPageBoundaryRscPayload({
			element: options.element,
			layoutModules: options.layoutModules,
			pathname,
			route: options.route
		}),
		isRscRequest: options.isRscRequest,
		middlewareHeaders: options.middlewareContext.headers,
		renderToReadableStream: options.renderToReadableStream,
		status: options.status
	});
}
async function renderAppPageHttpAccessFallback(options) {
	const boundaryComponent = options.boundaryComponent ?? resolveAppPageHttpAccessBoundaryComponent({
		getDefaultExport,
		rootForbiddenModule: options.rootForbiddenModule,
		rootNotFoundModule: options.rootNotFoundModule,
		rootUnauthorizedModule: options.rootUnauthorizedModule,
		routeForbiddenModule: options.route?.forbidden,
		routeNotFoundModule: options.route?.notFound,
		routeUnauthorizedModule: options.route?.unauthorized,
		statusCode: options.statusCode
	});
	if (!boundaryComponent) return null;
	const layoutModules = options.layoutModules ?? options.route?.layouts ?? options.rootLayouts;
	const pathname = new URL(options.requestUrl).pathname;
	const routeSegments = resolveHttpAccessFallbackHeadRouteSegments(options.route, layoutModules);
	const { metadata, viewport } = await resolveAppPageHead({
		basePath: options.basePath ?? "",
		layoutModules,
		layoutTreePositions: resolveHttpAccessFallbackHeadLayoutTreePositions(options.route, layoutModules),
		metadataRoutes: options.metadataRoutes,
		params: options.matchedParams,
		routePath: options.route?.pattern ?? pathname,
		routeSegments
	});
	const headElements = [(0, import_react_react_server.createElement)("meta", {
		charSet: "utf-8",
		key: "charset"
	}), (0, import_react_react_server.createElement)("meta", {
		content: "noindex",
		key: "robots",
		name: "robots"
	})];
	if (metadata) headElements.push((0, import_react_react_server.createElement)(MetadataHead, {
		key: "metadata",
		metadata,
		pathname
	}));
	headElements.push((0, import_react_react_server.createElement)(ViewportHead, {
		key: "viewport",
		viewport
	}));
	const skipLayoutWrapping = options.skipLayoutWrapping ?? false;
	const element = wrapRenderedBoundaryElement({
		element: (0, import_react_react_server.createElement)(import_react_react_server.Fragment, null, ...headElements, (0, import_react_react_server.createElement)(boundaryComponent)),
		globalErrorModule: options.globalErrorModule,
		includeGlobalErrorBoundary: true,
		isRscRequest: options.isRscRequest,
		layoutModules,
		layoutTreePositions: options.route?.layoutTreePositions,
		makeThenableParams: options.makeThenableParams,
		matchedParams: options.matchedParams,
		resolveChildSegments: options.resolveChildSegments,
		routeSegments: options.route?.routeSegments,
		skipLayoutWrapping
	});
	return renderAppPageBoundaryElementResponse({
		...options,
		element,
		layoutModules: skipLayoutWrapping ? [] : layoutModules,
		route: skipLayoutWrapping ? null : options.route,
		routePattern: options.route?.pattern,
		status: options.statusCode
	});
}
async function renderAppPageErrorBoundary(options) {
	const errorBoundary = resolveAppPageErrorBoundary({
		getDefaultExport,
		errorModules: options.route?.errorPaths,
		globalErrorModule: options.globalErrorModule,
		layoutErrorModules: options.route?.errors,
		pageErrorModule: options.route?.error
	});
	if (!errorBoundary.component) return null;
	const rawError = options.error instanceof Error ? options.error : new Error(String(options.error));
	rewriteClientHookError(rawError);
	const errorObject = options.sanitizeErrorForClient(rawError);
	const matchedParams = options.matchedParams ?? options.route?.params ?? {};
	const layoutModules = options.route?.layouts ?? options.rootLayouts;
	const pathname = new URL(options.requestUrl).pathname;
	const headElements = [(0, import_react_react_server.createElement)("meta", {
		charSet: "utf-8",
		key: "charset"
	})];
	if (!errorBoundary.isGlobalError) try {
		const { metadata, viewport } = await resolveAppPageHead({
			basePath: options.basePath ?? "",
			fallbackOnFileMetadataError: true,
			layoutModules,
			layoutTreePositions: options.route?.layoutTreePositions,
			metadataRoutes: options.metadataRoutes,
			params: matchedParams,
			routePath: options.route?.pattern ?? pathname,
			routeSegments: options.route?.routeSegments
		});
		if (metadata) headElements.push((0, import_react_react_server.createElement)(MetadataHead, {
			key: "metadata",
			metadata,
			pathname
		}));
		headElements.push((0, import_react_react_server.createElement)(ViewportHead, {
			key: "viewport",
			viewport
		}));
	} catch (error) {
		console.error(`[vinext] App page error boundary head resolution failed for ${options.route?.pattern ?? pathname}:`, error);
	}
	const element = wrapRenderedBoundaryElement({
		element: (0, import_react_react_server.createElement)(import_react_react_server.Fragment, null, ...headElements, (0, import_react_react_server.createElement)(errorBoundary.component, { error: errorObject })),
		globalErrorModule: options.globalErrorModule,
		includeGlobalErrorBoundary: !errorBoundary.isGlobalError,
		isRscRequest: options.isRscRequest,
		layoutModules,
		layoutTreePositions: options.route?.layoutTreePositions,
		makeThenableParams: options.makeThenableParams,
		matchedParams,
		resolveChildSegments: options.resolveChildSegments,
		routeSegments: options.route?.routeSegments,
		skipLayoutWrapping: errorBoundary.isGlobalError
	});
	return renderAppPageBoundaryElementResponse({
		...options,
		element,
		layoutModules,
		route: options.route,
		routePattern: options.route?.pattern,
		status: 200
	});
}
var _clientHookPattern = /\b(useState|useEffect|useReducer|useRef|useContext|useLayoutEffect|useInsertionEffect|useSyncExternalStore|useTransition|useImperativeHandle|useDeferredValue|useActionState|useOptimistic|useEffectEvent)\b.*is not a function/;
function rewriteClientHookError(error) {
	const match = error.message.match(_clientHookPattern);
	if (match) error.message = buildClientHookErrorMessage(`${match[1]}()`);
}
//#endregion
//#region node_modules/vinext/dist/server/default-global-error-module.js
/**
* Module-shaped wrapper around vinext's built-in default global error
* component. Used as the fallback when an app does not define its own
* `app/global-error.tsx`. The runtime treats any `{ default: Component }`
* record as a "global error module", so wrapping the component this way lets
* us thread the default through the existing `globalErrorModule` plumbing
* without introducing a parallel code path.
*
* Mirrors Next.js's `defaultGlobalErrorPath`
* (`next/dist/client/components/builtin/global-error.js`), which is selected
* automatically when the user has not supplied a custom global error file:
* https://github.com/vercel/next.js/blob/canary/packages/next/src/build/webpack/loaders/next-app-loader/index.ts
*/
var DEFAULT_GLOBAL_ERROR_MODULE = { default: /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "0b874ad30386", "default") };
//#endregion
//#region node_modules/vinext/dist/server/app-fallback-renderer.js
var EMPTY_MW_CTX = {
	headers: null,
	status: null
};
function createAppFallbackRenderer(options) {
	const { basePath = "", clearRequestContext, createRscOnErrorHandler: buildRscOnErrorHandler, fontProviders, getNavigationContext, globalErrorModule, globalNotFoundModule, makeThenableParams, metadataRoutes, resolveChildSegments, rootBoundaries, rscRenderer, sanitizer, ssrLoader } = options;
	const { rootForbiddenModule, rootLayouts, rootNotFoundModule, rootUnauthorizedModule } = rootBoundaries;
	const effectiveGlobalErrorModule = globalErrorModule ?? DEFAULT_GLOBAL_ERROR_MODULE;
	return {
		renderHttpAccessFallback(route, statusCode, isRscRequest, request, opts, scriptNonce, middlewareContext) {
			if (statusCode === 404 && !!globalNotFoundModule && !route && !opts?.boundaryComponent) {
				const globalNotFoundComponent = globalNotFoundModule?.default ?? null;
				if (globalNotFoundComponent) return renderAppPageHttpAccessFallback({
					boundaryComponent: globalNotFoundComponent,
					buildFontLinkHeader: fontProviders.buildFontLinkHeader,
					clearRequestContext,
					createRscOnErrorHandler(pathname, routePath) {
						return buildRscOnErrorHandler(request, pathname, routePath);
					},
					getFontLinks: fontProviders.getFontLinks,
					getFontPreloads: fontProviders.getFontPreloads,
					getFontStyles: fontProviders.getFontStyles,
					getNavigationContext,
					globalErrorModule: effectiveGlobalErrorModule,
					isRscRequest,
					layoutModules: [],
					loadSsrHandler: ssrLoader,
					makeThenableParams,
					matchedParams: opts?.matchedParams ?? {},
					middlewareContext: middlewareContext ?? EMPTY_MW_CTX,
					metadataRoutes,
					requestUrl: request.url,
					resolveChildSegments,
					rootForbiddenModule: null,
					rootLayouts: [],
					rootNotFoundModule: null,
					rootUnauthorizedModule: null,
					route: null,
					renderToReadableStream: rscRenderer,
					scriptNonce,
					skipLayoutWrapping: true,
					statusCode
				});
			}
			return renderAppPageHttpAccessFallback({
				basePath,
				boundaryComponent: opts?.boundaryComponent ?? null,
				buildFontLinkHeader: fontProviders.buildFontLinkHeader,
				clearRequestContext,
				createRscOnErrorHandler(pathname, routePath) {
					return buildRscOnErrorHandler(request, pathname, routePath);
				},
				getFontLinks: fontProviders.getFontLinks,
				getFontPreloads: fontProviders.getFontPreloads,
				getFontStyles: fontProviders.getFontStyles,
				getNavigationContext,
				globalErrorModule: effectiveGlobalErrorModule,
				isRscRequest,
				layoutModules: opts?.layouts ?? null,
				loadSsrHandler: ssrLoader,
				makeThenableParams,
				matchedParams: opts?.matchedParams ?? route?.params ?? {},
				middlewareContext: middlewareContext ?? EMPTY_MW_CTX,
				metadataRoutes,
				requestUrl: request.url,
				resolveChildSegments,
				rootForbiddenModule,
				rootLayouts,
				rootNotFoundModule,
				rootUnauthorizedModule,
				route,
				renderToReadableStream: rscRenderer,
				scriptNonce,
				statusCode
			});
		},
		renderNotFound(route, isRscRequest, request, matchedParams, scriptNonce, middlewareContext) {
			return this.renderHttpAccessFallback(route, 404, isRscRequest, request, { matchedParams }, scriptNonce, middlewareContext);
		},
		renderErrorBoundary(route, error, isRscRequest, request, matchedParams, scriptNonce, middlewareContext) {
			return renderAppPageErrorBoundary({
				basePath,
				buildFontLinkHeader: fontProviders.buildFontLinkHeader,
				clearRequestContext,
				createRscOnErrorHandler(pathname, routePath) {
					return buildRscOnErrorHandler(request, pathname, routePath);
				},
				error,
				getFontLinks: fontProviders.getFontLinks,
				getFontPreloads: fontProviders.getFontPreloads,
				getFontStyles: fontProviders.getFontStyles,
				getNavigationContext,
				globalErrorModule: effectiveGlobalErrorModule,
				isRscRequest,
				loadSsrHandler: ssrLoader,
				makeThenableParams,
				matchedParams: matchedParams ?? route?.params ?? {},
				middlewareContext: middlewareContext ?? EMPTY_MW_CTX,
				metadataRoutes,
				requestUrl: request.url,
				resolveChildSegments,
				rootLayouts,
				route,
				renderToReadableStream: rscRenderer,
				sanitizeErrorForClient: sanitizer,
				scriptNonce
			});
		}
	};
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-element-builder.js
/**
* Build the App Router element tree for a matched route.
*
* This is the central element-construction path for the App Router RSC
* handler. It resolves page head metadata (including parallel route metadata),
* creates the page React element, and wires it into the nested layout +
* boundary tree via {@link buildAppPageElements}.
*
* The function is extracted from the generated RSC entry template so it can
* be unit-tested independently of the code-generation machinery.
*
* Next.js equivalent: the component tree construction in
* {@link https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/create-component-tree.tsx|create-component-tree.tsx}
* and the page head resolution in
* {@link https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/create-metadata.tsx|create-metadata.tsx}.
*/
async function buildPageElements$1(options) {
	const { route, params, routePath, pageRequest, globalErrorModule, rootNotFoundModule, rootForbiddenModule, rootUnauthorizedModule, metadataRoutes } = options;
	const { opts, searchParams, isRscRequest, mountedSlotsHeader, renderMode = APP_RSC_RENDER_MODE_NAVIGATION } = pageRequest;
	const pageModule = route.page;
	const PageComponent = pageModule?.default;
	const hasPageModule = !!pageModule;
	const interception = createAppPageInterceptionProof(routePath, opts);
	if (hasPageModule && !PageComponent) {
		const interceptionContext = opts?.interceptionContext ?? null;
		const noExportRouteId = AppElementsWire.encodeRouteId(routePath, interceptionContext);
		let noExportRootLayout = null;
		const noExportLayoutIds = route.ids?.layouts ?? route.layouts.map((_, index) => AppElementsWire.encodeLayoutId(createAppPageTreePath(route.routeSegments, route.layoutTreePositions?.[index] ?? 0)));
		if (route.layouts?.length > 0) {
			const treePosition = route.layoutTreePositions?.[0] ?? 0;
			noExportRootLayout = createAppPageTreePath(route.routeSegments, treePosition);
		}
		return {
			...AppElementsWire.createMetadataEntries({
				interception,
				interceptionContext,
				layoutIds: noExportLayoutIds,
				rootLayoutTreePath: noExportRootLayout,
				routeId: noExportRouteId
			}),
			[noExportRouteId]: (0, import_react_react_server.createElement)("div", null, "Page has no default export")
		};
	}
	const { hasSearchParams, metadata: resolvedMetadata, pageSearchParams, viewport: resolvedViewport } = await resolveAppPageHead({
		basePath: options.basePath ?? "",
		layoutModules: route.layouts,
		layoutTreePositions: route.layoutTreePositions,
		metadataRoutes,
		pageModule: route.page ?? null,
		parallelRoutes: resolveActiveParallelRouteHeadInputs({
			interceptLayouts: opts?.interceptLayouts ?? null,
			interceptPage: opts?.interceptPage ?? null,
			interceptParams: opts?.interceptParams ?? null,
			interceptSlotKey: opts?.interceptSlotKey ?? null,
			params,
			routeSegments: route.routeSegments ?? [],
			slots: route.slots ?? null
		}),
		params,
		routePath: route.pattern,
		routeSegments: route.routeSegments ?? null,
		searchParams
	});
	const pageProps = { params: makeThenableParams(params) };
	if (searchParams) {
		pageProps.searchParams = makeThenableParams(pageSearchParams);
		if (hasSearchParams) {
			markDynamicUsage();
			markRenderRequestApiUsage("searchParams");
		}
	}
	const mountedSlotIds = mountedSlotsHeader ? new Set(mountedSlotsHeader.split(" ")) : null;
	const slotOverrides = buildSlotOverrides(route, params, routePath, opts);
	return buildAppPageElements({
		element: PageComponent ? (0, import_react_react_server.createElement)(PageComponent, pageProps) : null,
		globalErrorModule: globalErrorModule ?? DEFAULT_GLOBAL_ERROR_MODULE,
		isRscRequest,
		mountedSlotIds,
		makeThenableParams,
		matchedParams: params,
		resolvedMetadata,
		resolvedMetadataPathname: routePath,
		resolvedViewport,
		interceptionContext: opts?.interceptionContext ?? null,
		interception,
		routePath,
		rootNotFoundModule: rootNotFoundModule ?? null,
		rootForbiddenModule: rootForbiddenModule ?? null,
		rootUnauthorizedModule: rootUnauthorizedModule ?? null,
		route,
		slotOverrides,
		renderMode
	});
}
function createAppPageInterceptionProof(routePath, opts) {
	const sourceMatchedUrl = normalizeInterceptionProofMatchedUrl(opts?.interceptSourceMatchedUrl ?? null);
	const targetMatchedUrl = normalizeInterceptionProofMatchedUrl(routePath);
	const slotId = opts?.interceptSlotId ?? null;
	if (sourceMatchedUrl === null || targetMatchedUrl === null || slotId === null) return null;
	return {
		sourceMatchedUrl,
		sourceRouteId: AppElementsWire.encodeRouteId(sourceMatchedUrl, null),
		slotId,
		targetMatchedUrl,
		targetRouteId: AppElementsWire.encodeRouteId(targetMatchedUrl, null)
	};
}
function normalizeInterceptionProofMatchedUrl(value) {
	if (value === null || !isInterceptionMatchedUrlPath(value)) return null;
	return normalizePath(normalizePathnameForRouteMatch(value));
}
/**
* Build the per-request `slotOverrides` map. Combines:
*  - Interception overrides (existing behavior — swap in the intercepting page
*    and its layouts when the request is intercepted into this slot).
*  - Slot-specific param extraction for inherited slots whose URL pattern
*    has different param names than the route's. The runtime matches the
*    cleaned request path against `slot.slotPatternParts` to produce
*    slot-scoped params, which `app-page-route-wiring` then hands to the
*    slot page instead of the route's matched params.
*
* `routePath` is the already-normalized request pathname (basePath stripped,
* RSC suffix removed). Re-parsing `request.url` here would re-introduce the
* basePath and silently break the match for any app that configures one.
*/
function buildSlotOverrides(route, routeParams, routePath, opts) {
	const overrides = {};
	if (opts && opts.interceptSlotKey && opts.interceptPage) overrides[opts.interceptSlotKey] = {
		layoutModules: opts.interceptLayouts || null,
		pageModule: opts.interceptPage,
		params: opts.interceptParams || routeParams
	};
	const slots = route.slots;
	if (slots) {
		let urlParts = null;
		const routeParamSet = collectParamNameSet(route.params);
		for (const [slotKey, slot] of Object.entries(slots)) {
			const patternParts = slot.slotPatternParts;
			const paramNames = slot.slotParamNames;
			if (!patternParts || patternParts.length === 0) continue;
			if (paramNames && paramNames.every((name) => routeParamSet.has(name))) continue;
			if (urlParts === null) urlParts = routePath.split("/").filter(Boolean);
			const matched = matchRoutePattern(urlParts, patternParts);
			if (!matched) continue;
			const existing = overrides[slotKey];
			overrides[slotKey] = existing ? {
				...existing,
				params: matched
			} : { params: matched };
		}
	}
	return Object.keys(overrides).length > 0 ? overrides : null;
}
function collectParamNameSet(params) {
	const set = /* @__PURE__ */ new Set();
	if (params) for (const name of params) set.add(name);
	return set;
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-probe.js
/**
* Build a probePage() invocation for the App Router request lifecycle.
*
* The generated RSC entry calls this once per request after route matching to
* eagerly invoke the page component. Surfacing redirect()/notFound() throws
* here lets the probe lifecycle turn them into proper HTTP responses before
* RSC streaming begins (see `probeAppPageBeforeRender`).
*
* The helper exists to keep the generated entry thin (a single delegation
* call) and to make the search-params wiring directly unit-testable. A bug
* here previously slipped through because the entry hand-rolled the call and
* read a non-existent key off `collectAppPageSearchParams`'s return value
* (see https://github.com/cloudflare/vinext/issues/1235).
*
* Returns `null` when the route has no page component (eg. interception-only
* routes), matching the caller contract on `probePage`.
*/
function probeAppPage(options) {
	const { pageComponent, asyncRouteParams, searchParams } = options;
	if (typeof pageComponent !== "function") return null;
	const { pageSearchParams } = collectAppPageSearchParams(searchParams);
	return pageComponent({
		params: asyncRouteParams,
		searchParams: makeThenableParams(pageSearchParams)
	});
}
async function probeAppPageBeforeRender(options) {
	let layoutFlags = {};
	if (options.layoutCount > 0) {
		const layoutProbeResult = await probeAppPageLayouts({
			layoutCount: options.layoutCount,
			async onLayoutError(layoutError, layoutIndex) {
				const specialError = options.resolveSpecialError(layoutError);
				if (!specialError) return null;
				return options.renderLayoutSpecialError(specialError, layoutIndex);
			},
			probeLayoutAt: options.probeLayoutAt,
			runWithSuppressedHookWarning(probe) {
				return options.runWithSuppressedHookWarning(probe);
			},
			classification: options.classification
		});
		layoutFlags = layoutProbeResult.layoutFlags;
		if (layoutProbeResult.response) return {
			response: layoutProbeResult.response,
			layoutFlags
		};
	}
	if (options.hasLoadingBoundary) return {
		response: null,
		layoutFlags
	};
	return {
		response: await probeAppPageComponent({
			awaitAsyncResult: true,
			async onError(pageError) {
				const specialError = options.resolveSpecialError(pageError);
				if (specialError) return options.renderPageSpecialError(specialError);
				return null;
			},
			probePage: options.probePage,
			runWithSuppressedHookWarning(probe) {
				return options.runWithSuppressedHookWarning(probe);
			}
		}),
		layoutFlags
	};
}
//#endregion
//#region node_modules/vinext/dist/server/cache-proof.js
var ALL_RENDER_REQUEST_API_KINDS = [
	"connection",
	"cookies",
	"draftMode",
	"headers",
	"params",
	"searchParams"
];
function buildBreakerFallback(code, fields = {}, mode = "renderFresh", scope = "affectedOutput") {
	return {
		kind: "breakerFallback",
		code,
		mode,
		scope,
		fields
	};
}
function sortedUnique(values) {
	return [...new Set(values)].sort();
}
function redactValue(value) {
	return `h:${fnv1a64(value)}`;
}
function sortedUniqueRedacted(values) {
	return sortedUnique(sortedUnique(values).map(redactValue));
}
function assertNever(value) {
	throw new Error(`Unhandled cache proof variant: ${String(value)}`);
}
function requestApiStatusRank(status) {
	switch (status) {
		case "notObserved": return 0;
		case "unknown": return 1;
		case "observed": return 2;
		default: return assertNever(status);
	}
}
function normalizeRequestApiObservations(observations) {
	const byKind = /* @__PURE__ */ new Map();
	for (const observation of observations) {
		const current = byKind.get(observation.kind);
		if (current === void 0 || requestApiStatusRank(observation.status) > requestApiStatusRank(current)) byKind.set(observation.kind, observation.status);
	}
	return [...byKind.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([kind, status]) => ({
		kind,
		status
	}));
}
function cacheProofDowngradeTargetRank(target) {
	switch (target) {
		case "public": return 0;
		case "publicVariant": return 1;
		case "private": return 2;
		case "privateUncacheable": return 3;
		case "freshRender": return 4;
		default: return assertNever(target);
	}
}
function maxCacheProofDowngradeTarget(current, candidate) {
	return cacheProofDowngradeTargetRank(candidate) > cacheProofDowngradeTargetRank(current) ? candidate : current;
}
function createDowngradeFallback(target, reasons) {
	switch (target) {
		case "public":
		case "publicVariant":
		case "private": return null;
		case "privateUncacheable": return buildBreakerFallback("CP_PRIVATE_DYNAMIC_DOWNGRADE", {
			reasonCodes: reasons.map((reason) => reason.code),
			target
		}, "privateUncacheable");
		case "freshRender": return buildBreakerFallback("CP_PRIVATE_DYNAMIC_DOWNGRADE", {
			reasonCodes: reasons.map((reason) => reason.code),
			target
		});
		default: return assertNever(target);
	}
}
function classifyObservedRequestApiDowngrade(kind) {
	switch (kind) {
		case "connection": return {
			code: "CP_DOWNGRADE_DYNAMIC_REQUEST_API",
			requestApi: "connection",
			target: "freshRender"
		};
		case "cookies": return {
			code: "CP_DOWNGRADE_PRIVATE_REQUEST_API",
			requestApi: "cookies",
			target: "private"
		};
		case "draftMode": return {
			code: "CP_DOWNGRADE_DRAFT_MODE",
			requestApi: "draftMode",
			target: "privateUncacheable"
		};
		case "headers": return {
			code: "CP_DOWNGRADE_PRIVATE_REQUEST_API",
			requestApi: "headers",
			target: "private"
		};
		case "params": return {
			code: "CP_DOWNGRADE_PUBLIC_REQUEST_API",
			requestApi: "params",
			target: "publicVariant"
		};
		case "searchParams": return {
			code: "CP_DOWNGRADE_PUBLIC_REQUEST_API",
			requestApi: "searchParams",
			target: "publicVariant"
		};
		default: return assertNever(kind);
	}
}
function classifyRenderObservationDowngrade(input) {
	const reasons = [];
	let target = "public";
	switch (input.cacheability) {
		case "public": break;
		case "private": {
			const reason = {
				code: "CP_DOWNGRADE_CACHEABILITY_PRIVATE",
				target: "private"
			};
			reasons.push(reason);
			target = maxCacheProofDowngradeTarget(target, reason.target);
			break;
		}
		case "uncacheable": {
			const reason = {
				code: "CP_DOWNGRADE_CACHEABILITY_UNCACHEABLE",
				target: "privateUncacheable"
			};
			reasons.push(reason);
			target = maxCacheProofDowngradeTarget(target, reason.target);
			break;
		}
		case "unknown": {
			const reason = {
				code: "CP_DOWNGRADE_CACHEABILITY_UNKNOWN",
				target: "freshRender"
			};
			reasons.push(reason);
			target = maxCacheProofDowngradeTarget(target, reason.target);
			break;
		}
		default: assertNever(input.cacheability);
	}
	if (input.completeness !== "complete") {
		const reason = {
			code: "CP_DOWNGRADE_INCOMPLETE_OBSERVATION",
			completeness: input.completeness,
			target: "freshRender"
		};
		reasons.push(reason);
		target = maxCacheProofDowngradeTarget(target, reason.target);
	}
	if (input.dynamicFetches.length > 0) {
		const reason = {
			code: "CP_DOWNGRADE_DYNAMIC_FETCH",
			dynamicFetchCount: input.dynamicFetches.length,
			target: "freshRender"
		};
		reasons.push(reason);
		target = maxCacheProofDowngradeTarget(target, reason.target);
	}
	const requestApis = normalizeRequestApiObservations(input.requestApis);
	for (const requestApi of requestApis) {
		if (requestApi.status === "notObserved") continue;
		const reason = requestApi.status === "unknown" ? {
			code: "CP_DOWNGRADE_UNKNOWN_REQUEST_API",
			requestApi: requestApi.kind,
			target: "freshRender"
		} : classifyObservedRequestApiDowngrade(requestApi.kind);
		reasons.push(reason);
		target = maxCacheProofDowngradeTarget(target, reason.target);
	}
	return {
		target,
		reasons,
		fallback: createDowngradeFallback(target, reasons),
		isPublicCacheCandidate: target === "public" || target === "publicVariant"
	};
}
function buildRenderRequestApiObservations(input) {
	const observedKinds = new Set(input.observed);
	const absentStatus = input.completeness === "complete" ? "notObserved" : "unknown";
	return ALL_RENDER_REQUEST_API_KINDS.map((kind) => ({
		kind,
		status: observedKinds.has(kind) ? "observed" : absentStatus
	}));
}
function buildRenderObservation(input) {
	const requestApis = normalizeRequestApiObservations(input.requestApis);
	const dynamicFetches = sortedUniqueRedacted(input.dynamicFetches);
	return {
		schemaVersion: 1,
		output: input.output,
		completeness: input.completeness,
		boundaryOutcome: input.boundaryOutcome,
		requestApis,
		dynamicFetches,
		cacheTags: sortedUnique(input.cacheTags),
		pathTags: sortedUnique(input.pathTags),
		cacheability: input.cacheability,
		downgrade: classifyRenderObservationDowngrade({
			cacheability: input.cacheability,
			completeness: input.completeness,
			dynamicFetches,
			requestApis
		})
	};
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-render-observation.js
function readRootBoundaryId$1(element) {
	const rootLayoutTreePath = element[AppElementsWire.keys.rootLayout];
	return typeof rootLayoutTreePath === "string" ? rootLayoutTreePath : null;
}
function readRouteId(element, routePattern) {
	if (isAppElementsRecord(element)) {
		const routeId = element[AppElementsWire.keys.route];
		if (typeof routeId === "string") return routeId;
	}
	return AppElementsWire.encodeRouteId(routePattern, null);
}
function createMountedSlotsFingerprint(mountedSlotsHeader) {
	const normalized = normalizeMountedSlotsHeader(mountedSlotsHeader);
	return normalized ? `slots:${fnv1a64(normalized)}` : null;
}
function mergeObservedRequestApis(observed, params) {
	const merged = new Set(observed);
	if (Object.keys(params).length > 0) merged.add("params");
	return [...merged].sort();
}
function createEmptyAppPageRenderObservationState() {
	return {
		dynamicFetches: [],
		requestApis: []
	};
}
function createAppPageRenderObservation(options) {
	return buildRenderObservation({
		boundaryOutcome: options.boundaryOutcome,
		cacheability: options.cacheability,
		cacheTags: options.cacheTags,
		completeness: options.completeness,
		dynamicFetches: options.state.dynamicFetches,
		output: options.output,
		pathTags: [options.cleanPathname],
		requestApis: buildRenderRequestApiObservations({
			completeness: options.completeness,
			observed: mergeObservedRequestApis(options.state.requestApis, options.params)
		})
	});
}
function createAppPageRscOutputScope(options) {
	return {
		kind: "app-rsc",
		mountedSlotsFingerprint: createMountedSlotsFingerprint(options.mountedSlotsHeader),
		renderEpoch: options.renderEpoch,
		rootBoundaryId: options.rootBoundaryId ?? (isAppElementsRecord(options.element) ? readRootBoundaryId$1(options.element) : null),
		routeId: readRouteId(options.element, options.routePattern)
	};
}
function createAppPageHtmlOutputScope(options) {
	return {
		kind: "app-html",
		renderEpoch: options.renderEpoch,
		rootBoundaryId: options.rootBoundaryId ?? (isAppElementsRecord(options.element) ? readRootBoundaryId$1(options.element) : null),
		routeId: readRouteId(options.element, options.routePattern)
	};
}
//#endregion
//#region node_modules/vinext/dist/server/isr-cache.js
/**
* ISR (Incremental Static Regeneration) cache layer.
*
* Wraps the pluggable CacheHandler with stale-while-revalidate semantics:
* - Fresh hit: serve immediately
* - Stale hit: serve immediately + trigger background regeneration
* - Miss: render synchronously, cache, serve
*
* Background regeneration is deduped — only one regeneration per cache key
* runs at a time, preventing thundering herd on popular pages.
*
* This layer works with any CacheHandler backend (memory, Redis, KV, etc.)
* because it only uses the standard get/set interface.
*/
/**
* Get a cache entry with staleness information.
*
* Returns { value, isStale: false } for fresh entries,
* { value, isStale: true } for expired-but-usable entries,
* or null for cache misses.
*/
async function isrGet(key) {
	const result = await getCacheHandler().get(key);
	if (!result || !result.value) return null;
	if (result.cacheState === "expired") return null;
	return {
		value: result,
		isStale: result.cacheState === "stale"
	};
}
/**
* Store a value in the ISR cache with a revalidation period.
*/
async function isrSet(key, data, revalidateSeconds, tags, expireSeconds) {
	await getCacheHandler().set(key, data, {
		cacheControl: expireSeconds === void 0 ? { revalidate: revalidateSeconds } : {
			revalidate: revalidateSeconds,
			expire: expireSeconds
		},
		revalidate: revalidateSeconds,
		tags: tags ?? []
	});
}
async function isrSetPrerenderedAppPage(key, data, metadata) {
	const handler = getCacheHandler();
	const revalidateSeconds = metadata.revalidateSeconds;
	if (process.env.NEXT_PRIVATE_DEBUG_CACHE) console.debug("[vinext] ISR: seed", key);
	await handler.set(key, data, revalidateSeconds === void 0 ? {} : metadata.expireSeconds === void 0 ? {
		cacheControl: { revalidate: revalidateSeconds },
		revalidate: revalidateSeconds
	} : {
		cacheControl: {
			revalidate: revalidateSeconds,
			expire: metadata.expireSeconds
		},
		revalidate: revalidateSeconds
	});
	if (revalidateSeconds !== void 0) setRevalidateDuration(key, revalidateSeconds);
}
var _PENDING_REGEN_KEY = Symbol.for("vinext.isrCache.pendingRegenerations");
var _g$1 = globalThis;
var pendingRegenerations = _g$1[_PENDING_REGEN_KEY] ??= /* @__PURE__ */ new Map();
/**
* Trigger a background regeneration for a cache key.
*
* If a regeneration for this key is already in progress, this is a no-op.
* The renderFn should produce the new cache value and call isrSet internally.
*
* On Cloudflare Workers the regeneration promise is registered with
* `ctx.waitUntil()` via the ALS-backed ExecutionContext, keeping the isolate
* alive until the regeneration completes even after the Response is returned.
*
* When `errorContext` is provided and the render function fails, the error
* is reported via `reportRequestError` (instrumentation hook) with
* `revalidateReason: "stale"`.
*/
function triggerBackgroundRegeneration(key, renderFn, errorContext) {
	if (pendingRegenerations.has(key)) return;
	const promise = renderFn().catch((err) => {
		console.error(`[vinext] ISR background regeneration failed for ${key}:`, err);
		if (errorContext) reportRequestError(err instanceof Error ? err : new Error(String(err)), {
			path: key,
			method: "GET",
			headers: {}
		}, {
			routerKind: errorContext.routerKind,
			routePath: errorContext.routePath,
			routeType: errorContext.routeType,
			revalidateReason: "stale"
		});
	}).finally(() => {
		pendingRegenerations.delete(key);
	});
	pendingRegenerations.set(key, promise);
	getRequestExecutionContext()?.waitUntil(promise);
}
/**
* Build a CachedAppPageValue for the App Router ISR cache.
*/
function buildAppPageCacheValue(html, rscData, status, renderObservation) {
	const value = {
		kind: "APP_PAGE",
		html,
		rscData,
		headers: void 0,
		postponed: void 0,
		status
	};
	if (renderObservation) value.renderObservation = renderObservation;
	return value;
}
function normalizeCachePathname(pathname) {
	return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}
function buildCacheKey(prefix, pathname, suffix) {
	const normalized = normalizeCachePathname(pathname);
	const suffixPart = suffix ? `:${suffix}` : "";
	const key = `${prefix}:${normalized}${suffixPart}`;
	if (key.length <= 200) return key;
	return `${prefix}:__hash:${fnv1a64(normalized)}${suffixPart}`;
}
/**
* Compute an ISR cache key for a given router type and pathname.
* Long pathnames are hashed to stay within KV key-length limits (512 bytes).
*/
function isrCacheKey(router, pathname, buildId) {
	return buildCacheKey(buildId ? `${router}:${buildId}` : router, pathname);
}
/**
* Compute an App Router ISR key for one cache artifact.
*
* App pages store HTML, RSC payloads, and route-handler responses separately.
* The suffix mirrors Next.js's separate on-disk app artifacts while keeping the
* Cloudflare KV key under its 512-byte limit for long pathnames.
*/
function appIsrCacheKey(pathname, suffix, buildId = "270619c0-7a6a-443e-8299-4c81ed348c94") {
	return buildCacheKey(buildId ? `app:${buildId}` : "app", pathname, suffix);
}
function appIsrHtmlKey(pathname) {
	return appIsrCacheKey(pathname, "html");
}
/**
* Build the ISR cache key for an RSC payload.
*
* Note: the key format changed from `rsc:<hash>` to `rsc:slots:<hash>` (and
* optionally `rsc:slots:<hash>:<render-mode-variant>`). Existing cached entries under
* the old format will become unreachable after deployment. This is acceptable
* because ISR entries have TTLs and will be regenerated on the next request.
*/
function appIsrRscKey(pathname, mountedSlotsHeader, renderMode = APP_RSC_RENDER_MODE_NAVIGATION) {
	const normalizedMountedSlotsHeader = normalizeMountedSlotsHeader(mountedSlotsHeader);
	const variant = [normalizedMountedSlotsHeader ? `slots:${fnv1a64(normalizedMountedSlotsHeader)}` : null, getRscRenderModeCacheVariant(renderMode)].filter((part) => part !== null).join(":");
	return appIsrCacheKey(pathname, variant ? `rsc:${variant}` : "rsc");
}
function appIsrRouteKey(pathname) {
	return appIsrCacheKey(pathname, "route");
}
var MAX_REVALIDATE_ENTRIES = 1e4;
var _REVALIDATE_KEY = Symbol.for("vinext.isrCache.revalidateDurations");
var revalidateDurations = _g$1[_REVALIDATE_KEY] ??= /* @__PURE__ */ new Map();
/**
* Store the revalidate duration for a cache key.
* Uses insertion-order LRU eviction to prevent unbounded growth.
*/
function setRevalidateDuration(key, seconds) {
	revalidateDurations.delete(key);
	revalidateDurations.set(key, seconds);
	while (revalidateDurations.size > MAX_REVALIDATE_ENTRIES) {
		const first = revalidateDurations.keys().next().value;
		if (first !== void 0) revalidateDurations.delete(first);
		else break;
	}
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-cache.js
var NO_STORE_CACHE_CONTROL = "no-store, must-revalidate";
function recordAppPageCacheOutcome(recordCacheOutcome, input) {
	try {
		recordCacheOutcome?.(input);
	} catch {}
}
function buildAppPageCacheControl(cacheState, revalidateSeconds, expireSeconds) {
	return buildCachedRevalidateCacheControl(cacheState, revalidateSeconds, expireSeconds);
}
function buildAppPageCachedHeaders(options) {
	const headers = new Headers({
		"Cache-Control": options.cacheControl,
		"Content-Type": options.contentType,
		Vary: VINEXT_RSC_VARY_HEADER
	});
	setCacheStateHeaders(headers, options.cacheState);
	if (options.mountedSlotsHeader) headers.set(VINEXT_MOUNTED_SLOTS_HEADER, options.mountedSlotsHeader);
	mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
	return headers;
}
function getCachedAppPageValue(entry) {
	return entry?.value.value && entry.value.value.kind === "APP_PAGE" ? entry.value.value : null;
}
function resolveAppPageCacheWritePolicy(options) {
	let revalidateSeconds = options.revalidateSeconds;
	let expireSeconds = options.expireSeconds;
	const requestCacheLife = options.requestCacheLife;
	if (requestCacheLife?.revalidate !== void 0) revalidateSeconds = revalidateSeconds === null ? requestCacheLife.revalidate : Math.min(revalidateSeconds, requestCacheLife.revalidate);
	if (requestCacheLife?.expire !== void 0) expireSeconds = requestCacheLife.expire;
	if (revalidateSeconds === null || revalidateSeconds <= 0 || !Number.isFinite(revalidateSeconds)) return null;
	return {
		expireSeconds,
		revalidateSeconds
	};
}
function buildAppPageCachedResponse(cachedValue, options) {
	const status = options.middlewareStatus ?? (cachedValue.status || 200);
	const revalidateSeconds = options.cacheControl?.revalidate ?? options.revalidateSeconds;
	const expireSeconds = options.cacheControl === void 0 ? void 0 : options.cacheControl.expire ?? options.expireSeconds;
	const cacheControl = buildAppPageCacheControl(options.cacheState, revalidateSeconds, expireSeconds);
	if (options.isRscRequest) {
		if (!cachedValue.rscData) return null;
		const rscHeaders = buildAppPageCachedHeaders({
			cacheControl,
			cacheState: options.cacheState,
			contentType: VINEXT_RSC_CONTENT_TYPE,
			middlewareHeaders: options.middlewareHeaders,
			mountedSlotsHeader: options.mountedSlotsHeader
		});
		applyRscCompatibilityIdHeader(rscHeaders);
		return new Response(cachedValue.rscData, {
			status,
			headers: rscHeaders
		});
	}
	if (typeof cachedValue.html !== "string" || cachedValue.html.length === 0) return null;
	const htmlHeaders = buildAppPageCachedHeaders({
		cacheControl,
		cacheState: options.cacheState,
		contentType: "text/html; charset=utf-8",
		middlewareHeaders: options.middlewareHeaders
	});
	return new Response(cachedValue.html, {
		status,
		headers: htmlHeaders
	});
}
async function readAppPageCacheResponse(options) {
	const isrKey = options.isRscRequest ? options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode) : options.isrHtmlKey(options.cleanPathname);
	const artifact = options.isRscRequest ? "rsc" : "html";
	try {
		const cached = await options.isrGet(isrKey);
		const cachedValue = getCachedAppPageValue(cached);
		if (cached && !cachedValue) {
			recordAppPageCacheOutcome(options.recordCacheOutcome, {
				artifact,
				cacheKey: isrKey,
				outcome: "miss",
				reason: "non-app-page-entry"
			});
			options.isrDebug?.("MISS (non app-page cache entry)", options.cleanPathname);
			return null;
		}
		if (cachedValue && !cached?.isStale) {
			const hitResponse = buildAppPageCachedResponse(cachedValue, {
				cacheState: "HIT",
				cacheControl: cached?.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isRscRequest: options.isRscRequest,
				middlewareHeaders: options.middlewareHeaders,
				middlewareStatus: options.middlewareStatus,
				mountedSlotsHeader: options.mountedSlotsHeader,
				revalidateSeconds: options.revalidateSeconds
			});
			if (hitResponse) {
				recordAppPageCacheOutcome(options.recordCacheOutcome, {
					artifact,
					cacheKey: isrKey,
					outcome: "hit",
					reason: "served"
				});
				options.isrDebug?.(options.isRscRequest ? "HIT (RSC)" : "HIT (HTML)", options.cleanPathname);
				options.clearRequestContext();
				return hitResponse;
			}
			recordAppPageCacheOutcome(options.recordCacheOutcome, {
				artifact,
				cacheKey: isrKey,
				outcome: "miss",
				reason: "empty-entry"
			});
			options.isrDebug?.("MISS (empty cached entry)", options.cleanPathname);
		}
		if (cached?.isStale && cachedValue) {
			const regenerationKey = options.isRscRequest ? options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode) : options.isrHtmlKey(options.cleanPathname);
			options.scheduleBackgroundRegeneration(regenerationKey, async () => {
				const revalidatedPage = await options.renderFreshPageForCache();
				const revalidateSeconds = revalidatedPage.cacheControl?.revalidate ?? options.revalidateSeconds;
				const expireSeconds = revalidatedPage.cacheControl?.expire ?? options.expireSeconds;
				const writes = [options.isrSet(options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode), buildAppPageCacheValue("", revalidatedPage.rscData, 200, revalidatedPage.rscRenderObservation), revalidateSeconds, revalidatedPage.tags, expireSeconds)];
				if (!options.isRscRequest) writes.push(options.isrSet(options.isrHtmlKey(options.cleanPathname), buildAppPageCacheValue(revalidatedPage.html, void 0, 200, revalidatedPage.htmlRenderObservation), revalidateSeconds, revalidatedPage.tags, expireSeconds));
				await Promise.all(writes);
				options.isrDebug?.("regen complete", options.cleanPathname);
			});
			const staleResponse = buildAppPageCachedResponse(cachedValue, {
				cacheState: "STALE",
				cacheControl: cached.value.cacheControl,
				expireSeconds: options.expireSeconds,
				isRscRequest: options.isRscRequest,
				middlewareHeaders: options.middlewareHeaders,
				middlewareStatus: options.middlewareStatus,
				mountedSlotsHeader: options.mountedSlotsHeader,
				revalidateSeconds: options.revalidateSeconds
			});
			if (staleResponse) {
				recordAppPageCacheOutcome(options.recordCacheOutcome, {
					artifact,
					cacheKey: isrKey,
					outcome: "stale",
					reason: "served"
				});
				options.isrDebug?.(options.isRscRequest ? "STALE (RSC)" : "STALE (HTML)", options.cleanPathname);
				options.clearRequestContext();
				return staleResponse;
			}
			recordAppPageCacheOutcome(options.recordCacheOutcome, {
				artifact,
				cacheKey: isrKey,
				outcome: "miss",
				reason: "stale-empty-entry"
			});
			options.isrDebug?.("STALE MISS (empty stale entry)", options.cleanPathname);
		}
		if (!cached) {
			recordAppPageCacheOutcome(options.recordCacheOutcome, {
				artifact,
				cacheKey: isrKey,
				outcome: "miss",
				reason: "no-entry"
			});
			options.isrDebug?.("MISS (no cache entry)", options.cleanPathname);
		}
	} catch (isrReadError) {
		recordAppPageCacheOutcome(options.recordCacheOutcome, {
			artifact,
			cacheKey: isrKey,
			outcome: "miss",
			reason: "read-error"
		});
		console.error("[vinext] ISR cache read error:", isrReadError);
	}
	return null;
}
function finalizeAppPageHtmlCacheResponse(response, options) {
	if (!response.body) return response;
	const [streamForClient, streamForCache] = response.body.tee();
	const htmlKey = options.isrHtmlKey(options.cleanPathname);
	const rscKey = options.isrRscKey(options.cleanPathname, null);
	const clientHeaders = new Headers(response.headers);
	if (options.preserveClientResponseHeaders !== true) {
		clientHeaders.set("Cache-Control", NO_STORE_CACHE_CONTROL);
		setCacheStateHeaders(clientHeaders, "MISS");
	}
	const cachePromise = (async () => {
		try {
			const cachedHtml = await readStreamAsText(streamForCache);
			if (options.capturedDynamicUsageBeforeContextCleanup?.() === true || options.consumeDynamicUsage()) {
				options.isrDebug?.("HTML cache write skipped (dynamic usage during render)", htmlKey);
				return;
			}
			const cachePolicy = resolveAppPageCacheWritePolicy({
				expireSeconds: options.expireSeconds,
				requestCacheLife: options.getRequestCacheLife?.(),
				revalidateSeconds: options.revalidateSeconds
			});
			if (!cachePolicy) {
				options.isrDebug?.("HTML cache write skipped (no cache policy)", htmlKey);
				return;
			}
			const pageTags = options.getPageTags();
			const observationState = options.consumeRenderObservationState?.() ?? createEmptyAppPageRenderObservationState();
			const htmlRenderObservation = options.createHtmlRenderObservation?.({
				cacheTags: pageTags,
				state: observationState
			});
			const rscRenderObservation = options.createRscRenderObservation?.({
				cacheTags: pageTags,
				state: observationState
			});
			const writes = [options.isrSet(htmlKey, buildAppPageCacheValue(cachedHtml, void 0, 200, htmlRenderObservation), cachePolicy.revalidateSeconds, pageTags, cachePolicy.expireSeconds)];
			if (options.capturedRscDataPromise) writes.push(options.capturedRscDataPromise.then((rscData) => options.isrSet(rscKey, buildAppPageCacheValue("", rscData, 200, rscRenderObservation), cachePolicy.revalidateSeconds, pageTags, cachePolicy.expireSeconds)));
			await Promise.all(writes);
			options.isrDebug?.("HTML cache written", htmlKey);
		} catch (cacheError) {
			console.error("[vinext] ISR cache write error:", cacheError);
		}
	})();
	options.waitUntil?.(cachePromise);
	return new Response(streamForClient, {
		status: response.status,
		statusText: response.statusText,
		headers: clientHeaders
	});
}
function finalizeAppPageRscCacheResponse(response, options) {
	if (!scheduleAppPageRscCacheWrite(options)) return response;
	if (options.preserveClientResponseHeaders === true) return response;
	const clientHeaders = new Headers(response.headers);
	clientHeaders.set("Cache-Control", NO_STORE_CACHE_CONTROL);
	setCacheStateHeaders(clientHeaders, "MISS");
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: clientHeaders
	});
}
function scheduleAppPageRscCacheWrite(options) {
	const capturedRscDataPromise = options.capturedRscDataPromise;
	if (!capturedRscDataPromise || options.dynamicUsedDuringBuild) return false;
	const rscKey = options.isrRscKey(options.cleanPathname, options.mountedSlotsHeader, options.renderMode);
	const cachePromise = (async () => {
		try {
			const rscData = await capturedRscDataPromise;
			if (options.consumeDynamicUsage()) {
				options.isrDebug?.("RSC cache write skipped (dynamic usage during render)", rscKey);
				return;
			}
			const cachePolicy = resolveAppPageCacheWritePolicy({
				expireSeconds: options.expireSeconds,
				requestCacheLife: options.getRequestCacheLife?.(),
				revalidateSeconds: options.revalidateSeconds
			});
			if (!cachePolicy) {
				options.isrDebug?.("RSC cache write skipped (no cache policy)", rscKey);
				return;
			}
			const pageTags = options.getPageTags();
			const observationState = options.consumeRenderObservationState?.() ?? createEmptyAppPageRenderObservationState();
			const rscRenderObservation = options.createRscRenderObservation?.({
				cacheTags: pageTags,
				state: observationState
			});
			await options.isrSet(rscKey, buildAppPageCacheValue("", rscData, 200, rscRenderObservation), cachePolicy.revalidateSeconds, pageTags, cachePolicy.expireSeconds);
			options.isrDebug?.("RSC cache written", rscKey);
		} catch (cacheError) {
			console.error("[vinext] ISR RSC cache write error:", cacheError);
		}
	})();
	options.waitUntil?.(cachePromise);
	return true;
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-method.js
function isNonGetOrHead(method) {
	const normalizedMethod = method.toUpperCase();
	return normalizedMethod !== "GET" && normalizedMethod !== "HEAD";
}
function isStaticOrSsgAppPageCandidate(options) {
	if (options.dynamicConfig === "force-dynamic" || options.revalidateSeconds === 0) return false;
	if (options.dynamicConfig === "force-static" || options.dynamicConfig === "error") return true;
	if (options.revalidateSeconds !== null && options.revalidateSeconds > 0) return true;
	if (options.hasGenerateStaticParams) return true;
	return !options.isDynamicRoute;
}
function resolveAppPageMethodResponse(options) {
	if (!isNonGetOrHead(options.request.method)) return null;
	if (isPossibleAppRouteActionRequest(options.request)) return null;
	if (!isStaticOrSsgAppPageCandidate(options)) return null;
	const headers = new Headers();
	mergeMiddlewareResponseHeaders(headers, options.middlewareHeaders ?? null);
	return methodNotAllowedResponse("GET, HEAD", { headers });
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-render.js
function buildResponseTiming(options) {
	if (options.isProduction) return;
	return {
		compileEnd: options.compileEnd,
		handlerStart: options.handlerStart,
		renderEnd: options.renderEnd,
		responseKind: options.responseKind
	};
}
function readRequestCacheLifeForPrerender(options) {
	return options.peekRequestCacheLife?.() ?? options.getRequestCacheLife();
}
function applyRequestCacheLife(options) {
	let revalidateSeconds = options.revalidateSeconds;
	let expireSeconds = options.expireSeconds;
	const requestCacheLife = options.requestCacheLife;
	if (requestCacheLife?.revalidate !== void 0) revalidateSeconds = revalidateSeconds === null ? requestCacheLife.revalidate : Math.min(revalidateSeconds, requestCacheLife.revalidate);
	if (requestCacheLife?.expire !== void 0) expireSeconds = requestCacheLife.expire;
	return {
		expireSeconds,
		revalidateSeconds
	};
}
function readRootBoundaryId(element) {
	const rootLayoutTreePath = element[AppElementsWire.keys.rootLayout];
	return typeof rootLayoutTreePath === "string" ? rootLayoutTreePath : null;
}
function createAppPageArtifactCompatibility(element, routePattern) {
	if (!isAppElementsRecord(element)) return;
	const rootBoundaryId = readRootBoundaryId(element);
	return createArtifactCompatibilityEnvelope({
		graphVersion: createArtifactCompatibilityGraphVersion({
			routePattern,
			rootBoundaryId
		}),
		deploymentVersion: "270619c0-7a6a-443e-8299-4c81ed348c94",
		rootBoundaryId
	});
}
/**
* Wraps an RSC response body to report invalid dynamic usage errors after the
* stream is fully consumed. In dev mode, errors from cookies()/headers() inside
* "use cache" may be caught by user try/catch and silently swallowed — this
* wrapper waits for the stream to drain and surfaces any recorded error to the
* terminal (and, via HMR, the browser dev overlay).
*
* Dedups against React's Flight error chunk: if the recorded error already
* carries a `digest`, React's serverComponentsErrorHandler has already stamped
* it and emitted it into the RSC stream. Skipping `console.error` prevents
* double-logging. Caught cases (no digest) still surface here.
*
* Ported from Next.js:
*   https://github.com/vercel/next.js/commit/f5e54c06726b571a042fce67417e40a29f6b8689
*   https://github.com/vercel/next.js/pull/93706
*/
function wrapRscResponseForDevErrorReporting(response, consumeInvalidDynamicUsageError) {
	const originalBody = response.body;
	if (!originalBody) return response;
	let consumed = false;
	const onConsumed = () => {
		if (consumed) return;
		consumed = true;
		const error = consumeInvalidDynamicUsageError();
		if (!error) return;
		if (!hasDigest(error)) console.error("[vinext] Invalid dynamic usage:", error);
	};
	const cleanup = new TransformStream({ flush() {
		onConsumed();
	} });
	const reader = originalBody.pipeThrough(cleanup).getReader();
	const wrappedStream = new ReadableStream({
		pull(controller) {
			return reader.read().then(({ done, value }) => {
				if (done) controller.close();
				else controller.enqueue(value);
			}, (streamError) => {
				onConsumed();
				controller.error(streamError);
			});
		},
		cancel(reason) {
			onConsumed();
			return reader.cancel(reason);
		}
	});
	return new Response(wrappedStream, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});
}
async function renderAppPageLifecycle(options) {
	const preRenderResult = await probeAppPageBeforeRender({
		hasLoadingBoundary: options.hasLoadingBoundary,
		layoutCount: options.layoutCount,
		probeLayoutAt(layoutIndex) {
			return options.probeLayoutAt(layoutIndex);
		},
		probePage() {
			return options.probePage();
		},
		renderLayoutSpecialError(specialError, layoutIndex) {
			return options.renderLayoutSpecialError(specialError, layoutIndex);
		},
		renderPageSpecialError(specialError) {
			return options.renderPageSpecialError(specialError);
		},
		resolveSpecialError: resolveAppPageSpecialError,
		runWithSuppressedHookWarning(probe) {
			return options.runWithSuppressedHookWarning(probe);
		},
		classification: options.classification
	});
	if (preRenderResult.response) return preRenderResult.response;
	const layoutFlags = preRenderResult.layoutFlags;
	const artifactCompatibility = createAppPageArtifactCompatibility(options.element, options.routePattern);
	const rootBoundaryId = artifactCompatibility?.rootBoundaryId ?? null;
	const renderEpoch = artifactCompatibility?.renderEpoch ?? null;
	const rscOutputScope = createAppPageRscOutputScope({
		element: options.element,
		mountedSlotsHeader: options.mountedSlotsHeader,
		renderEpoch,
		rootBoundaryId,
		routePattern: options.routePattern
	});
	const htmlOutputScope = createAppPageHtmlOutputScope({
		element: options.element,
		renderEpoch,
		rootBoundaryId,
		routePattern: options.routePattern
	});
	const payloadRenderObservation = createAppPageRenderObservation({
		boundaryOutcome: { kind: "unknown" },
		cacheability: "unknown",
		cacheTags: options.getPageTags(),
		cleanPathname: options.cleanPathname,
		completeness: "partial",
		output: rscOutputScope,
		params: options.params,
		state: options.peekRenderObservationState?.() ?? createEmptyAppPageRenderObservationState()
	});
	const outgoingElement = AppElementsWire.encodeOutgoingPayload({
		element: options.element,
		layoutFlags,
		...artifactCompatibility ? { artifactCompatibility } : {},
		renderObservation: payloadRenderObservation
	});
	const compileEnd = options.isProduction ? void 0 : performance.now();
	const rscErrorTracker = createAppPageRscErrorTracker(options.createRscOnErrorHandler(options.cleanPathname, options.routePattern));
	const rscStream = runWithFetchDedupe(() => options.renderToReadableStream(outgoingElement, { onError: rscErrorTracker.onRenderError }));
	let revalidateSeconds = options.revalidateSeconds;
	let expireSeconds = options.expireSeconds;
	const shouldCaptureRscForCacheMetadata = options.isProgressiveActionRender !== true && (options.isProduction || options.isPrerender === true) && (revalidateSeconds === null || revalidateSeconds > 0 && revalidateSeconds !== Infinity) && !options.isDraftMode && !options.isForceDynamic;
	const rscCapture = teeAppPageRscStreamForCapture(rscStream, shouldCaptureRscForCacheMetadata);
	const rscForResponse = rscCapture.ssrStream;
	const capturedRscDataRef = { value: null };
	if (rscCapture.sideStream && options.isRscRequest) capturedRscDataRef.value = readAppPageBinaryStream(rscCapture.sideStream);
	if (options.isRscRequest) {
		if (options.isPrerender === true) {
			await settleCapturedRscRenderForCacheMetadata(capturedRscDataRef.value);
			({expireSeconds, revalidateSeconds} = applyRequestCacheLife({
				expireSeconds,
				requestCacheLife: readRequestCacheLifeForPrerender(options),
				revalidateSeconds
			}));
		}
		const dynamicUsedDuringBuild = options.consumeDynamicUsage();
		const rscResponsePolicy = resolveAppPageRscResponsePolicy({
			dynamicUsedDuringBuild,
			isDraftMode: options.isDraftMode,
			isDynamicError: options.isDynamicError,
			isForceDynamic: options.isForceDynamic,
			isForceStatic: options.isForceStatic,
			isProduction: options.isProduction,
			expireSeconds,
			revalidateSeconds
		});
		const rscResponse = buildAppPageRscResponse(rscForResponse, {
			middlewareContext: options.middlewareContext,
			mountedSlotsHeader: options.mountedSlotsHeader,
			params: options.params,
			policy: rscResponsePolicy,
			timing: buildResponseTiming({
				compileEnd,
				handlerStart: options.handlerStart,
				isProduction: options.isProduction,
				responseKind: "rsc"
			})
		});
		return finalizeAppPageRscCacheResponse(!options.isProduction && rscResponse.body && options.consumeInvalidDynamicUsageError ? wrapRscResponseForDevErrorReporting(rscResponse, options.consumeInvalidDynamicUsageError) : rscResponse, {
			capturedRscDataPromise: options.isProduction && shouldCaptureRscForCacheMetadata ? capturedRscDataRef.value : null,
			cleanPathname: options.cleanPathname,
			consumeDynamicUsage: options.consumeDynamicUsage,
			consumeRenderObservationState: options.consumeRenderObservationState,
			createRscRenderObservation(input) {
				return createAppPageRenderObservation({
					boundaryOutcome: { kind: "success" },
					cacheability: "public",
					cacheTags: input.cacheTags,
					cleanPathname: options.cleanPathname,
					completeness: "complete",
					output: rscOutputScope,
					params: options.params,
					state: input.state
				});
			},
			dynamicUsedDuringBuild,
			getPageTags() {
				return options.getPageTags();
			},
			getRequestCacheLife() {
				return options.getRequestCacheLife();
			},
			isrDebug: options.isrDebug,
			isrRscKey: options.isrRscKey,
			isrSet: options.isrSet,
			mountedSlotsHeader: options.mountedSlotsHeader,
			renderMode: options.renderMode,
			preserveClientResponseHeaders: rscResponsePolicy.cacheState !== "MISS",
			expireSeconds,
			revalidateSeconds,
			waitUntil(promise) {
				options.waitUntil?.(promise);
			}
		});
	}
	const fontData = createAppPageFontData({
		getLinks: options.getFontLinks,
		getPreloads: options.getFontPreloads,
		getStyles: options.getFontStyles
	});
	const fontLinkHeader = buildAppPageFontLinkHeader(fontData.preloads);
	let renderEnd;
	const htmlRender = await renderAppPageHtmlStreamWithRecovery({
		onShellRendered() {
			if (!options.isProduction) renderEnd = performance.now();
		},
		renderErrorBoundaryResponse(error) {
			return options.renderErrorBoundaryResponse(error);
		},
		async renderHtmlStream() {
			const ssrHandler = await options.loadSsrHandler();
			return renderAppPageHtmlStream({
				capturedRscDataRef,
				fontData,
				navigationContext: options.getNavigationContext(),
				basePath: options.basePath,
				rootParams: options.rootParams,
				formState: options.formState ?? null,
				rscStream: rscForResponse,
				scriptNonce: options.scriptNonce,
				sideStream: rscCapture.sideStream,
				ssrHandler,
				waitForAllReady: options.isPrerender
			});
		},
		renderSpecialErrorResponse(specialError) {
			return options.renderPageSpecialError(specialError);
		},
		resolveSpecialError: resolveAppPageSpecialError
	});
	if (htmlRender.response) return htmlRender.response;
	const htmlStream = htmlRender.htmlStream;
	if (!htmlStream) throw new Error("[vinext] Expected an HTML stream when no fallback response was returned");
	if (options.hasLoadingBoundary) {
		const captured = rscErrorTracker.getCapturedSpecialError();
		if (captured) {
			const specialError = resolveAppPageSpecialError(captured);
			if (specialError) {
				htmlStream.cancel().catch(() => {});
				return options.renderPageSpecialError(specialError);
			}
		}
	}
	if (shouldRerenderAppPageWithGlobalError({
		capturedError: rscErrorTracker.getCapturedError(),
		hasLocalBoundary: options.routeHasLocalBoundary
	})) {
		const cleanResponse = await options.renderErrorBoundaryResponse(rscErrorTracker.getCapturedError());
		if (cleanResponse) return cleanResponse;
	}
	if (options.isPrerender === true) {
		await settleCapturedRscRenderForCacheMetadata(capturedRscDataRef.value);
		({expireSeconds, revalidateSeconds} = applyRequestCacheLife({
			expireSeconds,
			requestCacheLife: readRequestCacheLifeForPrerender(options),
			revalidateSeconds
		}));
	}
	const draftCookie = options.getDraftModeCookieHeader();
	const dynamicUsedDuringRender = options.consumeDynamicUsage();
	let dynamicUsedBeforeContextCleanup = dynamicUsedDuringRender;
	const safeHtmlStream = deferUntilStreamConsumed(htmlStream, () => {
		dynamicUsedBeforeContextCleanup = dynamicUsedBeforeContextCleanup || options.consumeDynamicUsage();
		options.clearRequestContext();
	});
	const htmlResponsePolicy = resolveAppPageHtmlResponsePolicy({
		dynamicUsedDuringRender,
		isProgressiveActionRender: options.isProgressiveActionRender === true,
		hasScriptNonce: Boolean(options.scriptNonce),
		isDraftMode: options.isDraftMode,
		isDynamicError: options.isDynamicError,
		isForceDynamic: options.isForceDynamic,
		isForceStatic: options.isForceStatic,
		isProduction: options.isProduction,
		expireSeconds,
		revalidateSeconds
	});
	const htmlResponseTiming = buildResponseTiming({
		compileEnd,
		handlerStart: options.handlerStart,
		isProduction: options.isProduction,
		renderEnd,
		responseKind: "html"
	});
	const shouldSpeculativelyWriteCache = options.isProduction && shouldCaptureRscForCacheMetadata && revalidateSeconds === null && !options.isDynamicError && !options.isForceStatic && !options.scriptNonce && options.isProgressiveActionRender !== true && !dynamicUsedDuringRender;
	if (htmlResponsePolicy.shouldWriteToCache || shouldSpeculativelyWriteCache) {
		const isrResponse = buildAppPageHtmlResponse(safeHtmlStream, {
			draftCookie,
			fontLinkHeader,
			middlewareContext: options.middlewareContext,
			policy: htmlResponsePolicy,
			timing: htmlResponseTiming
		});
		if (options.isPrerender === true) return isrResponse;
		return finalizeAppPageHtmlCacheResponse(isrResponse, {
			capturedDynamicUsageBeforeContextCleanup() {
				return dynamicUsedBeforeContextCleanup;
			},
			capturedRscDataPromise: capturedRscDataRef.value,
			cleanPathname: options.cleanPathname,
			consumeDynamicUsage: options.consumeDynamicUsage,
			consumeRenderObservationState: options.consumeRenderObservationState,
			createHtmlRenderObservation(input) {
				return createAppPageRenderObservation({
					boundaryOutcome: { kind: "success" },
					cacheability: "public",
					cacheTags: input.cacheTags,
					cleanPathname: options.cleanPathname,
					completeness: "complete",
					output: htmlOutputScope,
					params: options.params,
					state: input.state
				});
			},
			createRscRenderObservation(input) {
				return createAppPageRenderObservation({
					boundaryOutcome: { kind: "success" },
					cacheability: "public",
					cacheTags: input.cacheTags,
					cleanPathname: options.cleanPathname,
					completeness: "complete",
					output: rscOutputScope,
					params: options.params,
					state: input.state
				});
			},
			getPageTags() {
				return options.getPageTags();
			},
			getRequestCacheLife() {
				return options.getRequestCacheLife();
			},
			isrDebug: options.isrDebug,
			isrHtmlKey: options.isrHtmlKey,
			isrRscKey: options.isrRscKey,
			isrSet: options.isrSet,
			preserveClientResponseHeaders: !htmlResponsePolicy.shouldWriteToCache,
			expireSeconds,
			revalidateSeconds,
			waitUntil(cachePromise) {
				options.waitUntil?.(cachePromise);
			}
		});
	}
	return buildAppPageHtmlResponse(safeHtmlStream, {
		draftCookie,
		fontLinkHeader,
		middlewareContext: options.middlewareContext,
		policy: htmlResponsePolicy,
		timing: htmlResponseTiming
	});
}
async function settleCapturedRscRenderForCacheMetadata(capturedRscDataPromise) {
	if (!capturedRscDataPromise) return;
	try {
		await capturedRscDataPromise;
	} catch {}
}
//#endregion
//#region node_modules/vinext/dist/server/app-page-dispatch.js
function shouldReadAppPageCache(options) {
	return options.isProduction && !options.isProgressiveActionRender && !options.isDraftMode && !options.isForceDynamic && (options.isRscRequest || !options.scriptNonce) && (options.revalidateSeconds === null || options.revalidateSeconds > 0);
}
function buildAppPageTags(cleanPathname, extraTags, routeSegments) {
	return buildPageCacheTags(cleanPathname, extraTags, [...routeSegments], "page");
}
async function runAppPageRevalidationContext(options, renderFn) {
	return runWithRequestContext(createRequestContext({
		headersContext: createStaticGenerationHeadersContext({
			dynamicConfig: options.dynamicConfig,
			routeKind: "page",
			routePattern: options.routePattern
		}),
		currentFetchCacheMode: options.currentFetchCacheMode ?? null,
		executionContext: getRequestExecutionContext(),
		unstableCacheRevalidation: "foreground"
	}), async () => {
		ensureFetchPatch();
		setCurrentFetchSoftTags(buildAppPageTags(options.cleanPathname, [], options.routeSegments));
		options.setNavigationContext({
			pathname: options.cleanPathname,
			searchParams: new URLSearchParams(),
			params: options.params
		});
		return await runWithFetchDedupe(renderFn);
	});
}
function getCapturedRscDataPromise(capturedRscDataPromise) {
	if (!capturedRscDataPromise) throw new Error("[vinext] Expected captured RSC data while regenerating an app page cache entry");
	return capturedRscDataPromise;
}
function toInterceptOptions(interceptionContext, intercept) {
	return {
		interceptionContext,
		interceptLayouts: intercept.interceptLayouts,
		interceptPage: intercept.page,
		interceptParams: intercept.matchedParams,
		interceptSlotId: intercept.slotId ?? null,
		interceptSlotKey: intercept.slotKey,
		interceptSourceMatchedUrl: interceptionContext
	};
}
async function dispatchAppPage(options) {
	return await runWithFetchDedupe(() => dispatchAppPageInner(options));
}
async function dispatchAppPageInner(options) {
	const route = options.route;
	const dynamicConfig = options.dynamicConfig;
	const currentRevalidateSeconds = options.revalidateSeconds;
	const isForceStatic = dynamicConfig === "force-static";
	const isDynamicError = dynamicConfig === "error";
	const isForceDynamic = dynamicConfig === "force-dynamic";
	const isDraftMode = isDraftModeRequest(options.request);
	setCurrentFetchSoftTags(buildAppPageTags(options.cleanPathname, [], route.routeSegments));
	setCurrentFetchCacheMode(options.fetchCache ?? null);
	if (options.hasPageModule && !options.hasPageDefaultExport) {
		options.clearRequestContext();
		return new Response("Page has no default export", { status: 500 });
	}
	const methodResponse = resolveAppPageMethodResponse({
		dynamicConfig,
		hasGenerateStaticParams: options.hasGenerateStaticParams,
		isDynamicRoute: route.isDynamic,
		middlewareHeaders: options.middlewareContext.headers,
		request: options.request,
		revalidateSeconds: currentRevalidateSeconds
	});
	if (methodResponse) {
		options.clearRequestContext();
		return methodResponse;
	}
	if ((isForceStatic || isDynamicError) && !isDraftMode) {
		setHeadersContext(createStaticGenerationHeadersContext({
			dynamicConfig,
			routeKind: "page",
			routePattern: route.pattern
		}));
		options.setNavigationContext({
			pathname: options.cleanPathname,
			searchParams: new URLSearchParams(),
			params: options.params
		});
	}
	if (shouldReadAppPageCache({
		isDraftMode,
		isForceDynamic,
		isProgressiveActionRender: options.isProgressiveActionRender === true,
		isProduction: options.isProduction,
		isRscRequest: options.isRscRequest,
		revalidateSeconds: currentRevalidateSeconds,
		scriptNonce: options.scriptNonce
	})) {
		const cachedPageResponse = await readAppPageCacheResponse({
			cleanPathname: options.cleanPathname,
			clearRequestContext: options.clearRequestContext,
			isRscRequest: options.isRscRequest,
			isrDebug: options.isrDebug,
			isrGet: options.isrGet,
			isrHtmlKey: options.isrHtmlKey,
			isrRscKey: options.isrRscKey,
			isrSet: options.isrSet,
			middlewareHeaders: options.middlewareContext.headers,
			middlewareStatus: options.middlewareContext.status,
			mountedSlotsHeader: options.mountedSlotsHeader,
			renderMode: options.renderMode,
			expireSeconds: options.expireSeconds,
			revalidateSeconds: currentRevalidateSeconds ?? 0,
			renderFreshPageForCache: async () => runAppPageRevalidationContext({
				cleanPathname: options.cleanPathname,
				currentFetchCacheMode: options.fetchCache ?? null,
				dynamicConfig,
				params: options.params,
				routePattern: route.pattern,
				routeSegments: route.routeSegments,
				setNavigationContext: options.setNavigationContext
			}, async () => {
				const revalidatedElement = await options.buildPageElement(route, options.params, void 0, new URLSearchParams());
				const revalidatedOnError = options.createRscOnErrorHandler(options.cleanPathname, route.pattern);
				const revalidatedRscCapture = teeAppPageRscStreamForCapture(options.renderToReadableStream(revalidatedElement, { onError: revalidatedOnError }), true);
				const revalidatedSsrEntry = await options.loadSsrHandler();
				const revalidatedCapturedRscRef = { value: null };
				const html = await readStreamAsText(await revalidatedSsrEntry.handleSsr(revalidatedRscCapture.ssrStream, options.getNavigationContext(), {
					links: options.getFontLinks(),
					styles: options.getFontStyles(),
					preloads: options.getFontPreloads()
				}, {
					basePath: options.basePath,
					rootParams: options.rootParams,
					...revalidatedRscCapture.sideStream ? {
						sideStream: revalidatedRscCapture.sideStream,
						capturedRscDataRef: revalidatedCapturedRscRef
					} : {}
				}));
				const rscData = await getCapturedRscDataPromise(revalidatedCapturedRscRef.value);
				const cacheLife = _consumeRequestScopedCacheLife();
				options.clearRequestContext();
				const tags = buildAppPageTags(options.cleanPathname, getCollectedFetchTags(), route.routeSegments);
				const observationState = {
					dynamicFetches: consumeDynamicFetchObservations(),
					requestApis: consumeRenderRequestApiUsage()
				};
				return {
					html,
					htmlRenderObservation: createAppPageRenderObservation({
						boundaryOutcome: { kind: "success" },
						cacheability: "public",
						cacheTags: tags,
						cleanPathname: options.cleanPathname,
						completeness: "complete",
						output: createAppPageHtmlOutputScope({
							element: revalidatedElement,
							renderEpoch: null,
							rootBoundaryId: null,
							routePattern: route.pattern
						}),
						params: options.params,
						state: observationState
					}),
					rscData,
					rscRenderObservation: createAppPageRenderObservation({
						boundaryOutcome: { kind: "success" },
						cacheability: "public",
						cacheTags: tags,
						cleanPathname: options.cleanPathname,
						completeness: "complete",
						output: createAppPageRscOutputScope({
							element: revalidatedElement,
							mountedSlotsHeader: options.mountedSlotsHeader,
							renderEpoch: null,
							rootBoundaryId: null,
							routePattern: route.pattern
						}),
						params: options.params,
						state: observationState
					}),
					tags,
					cacheControl: typeof cacheLife?.revalidate === "number" ? {
						revalidate: cacheLife.revalidate,
						expire: cacheLife.expire
					} : void 0
				};
			}),
			scheduleBackgroundRegeneration(key, renderFn) {
				options.scheduleBackgroundRegeneration(key, renderFn, {
					routerKind: "App Router",
					routePath: route.pattern,
					routeType: "render"
				});
			}
		});
		if (cachedPageResponse) return cachedPageResponse;
	}
	const dynamicParamsResponse = await validateAppPageDynamicParams({
		clearRequestContext: options.clearRequestContext,
		enforceStaticParamsOnly: options.dynamicParamsConfig === false,
		generateStaticParams: options.generateStaticParams,
		isDynamicRoute: route.isDynamic,
		params: options.params
	});
	if (dynamicParamsResponse) return dynamicParamsResponse;
	const interceptResult = await resolveAppPageIntercept({
		buildPageElement(interceptRoute, interceptParams, interceptOpts, interceptSearchParams) {
			setCurrentFetchCacheMode(options.resolveRouteFetchCacheMode?.(interceptRoute) ?? null);
			return options.buildPageElement(interceptRoute, interceptParams, interceptOpts, interceptSearchParams);
		},
		cleanPathname: options.cleanPathname,
		currentRoute: route,
		findIntercept(pathname) {
			return options.findIntercept(pathname);
		},
		getRouteParamNames(sourceRoute) {
			return sourceRoute.params;
		},
		getSourceRoute(sourceRouteIndex) {
			return options.getSourceRoute(sourceRouteIndex);
		},
		isRscRequest: options.isRscRequest,
		renderInterceptResponse(sourceRoute, interceptElement) {
			const interceptOnError = options.createRscOnErrorHandler(options.cleanPathname, sourceRoute.pattern);
			const interceptStream = options.renderToReadableStream(interceptElement, { onError: interceptOnError });
			const interceptHeaders = new Headers({
				"Content-Type": VINEXT_RSC_CONTENT_TYPE,
				Vary: VINEXT_RSC_VARY_HEADER
			});
			mergeMiddlewareResponseHeaders(interceptHeaders, options.middlewareContext.headers);
			applyRscCompatibilityIdHeader(interceptHeaders);
			return new Response(interceptStream, {
				status: options.middlewareContext.status ?? 200,
				headers: interceptHeaders
			});
		},
		searchParams: options.searchParams,
		setNavigationContext: options.setNavigationContext,
		toInterceptOpts(intercept) {
			return toInterceptOptions(options.interceptionContext, intercept);
		}
	});
	if (interceptResult.response) return interceptResult.response;
	const pageBuildResult = await buildAppPageElement({
		buildPageElement() {
			if (options.actionFailed) throw options.actionError;
			return options.buildPageElement(route, options.params, interceptResult.interceptOpts, options.searchParams);
		},
		renderErrorBoundaryPage(buildError) {
			return options.renderErrorBoundaryPage(buildError);
		},
		renderSpecialError(specialError) {
			return renderPageSpecialError(options, specialError);
		},
		resolveSpecialError: resolveAppPageSpecialError
	});
	if (pageBuildResult.response) return pageBuildResult.response;
	return renderAppPageLifecycle({
		basePath: options.basePath,
		cleanPathname: options.cleanPathname,
		clearRequestContext: options.clearRequestContext,
		consumeDynamicUsage,
		consumeInvalidDynamicUsageError,
		consumeRenderObservationState() {
			return {
				dynamicFetches: consumeDynamicFetchObservations(),
				requestApis: consumeRenderRequestApiUsage()
			};
		},
		createRscOnErrorHandler(pathname, routePath) {
			return options.createRscOnErrorHandler(pathname, routePath);
		},
		element: pageBuildResult.element,
		getDraftModeCookieHeader,
		getFontLinks: options.getFontLinks,
		getFontPreloads: options.getFontPreloads,
		getFontStyles: options.getFontStyles,
		getNavigationContext: options.getNavigationContext,
		getPageTags() {
			return buildAppPageTags(options.cleanPathname, getCollectedFetchTags(), route.routeSegments);
		},
		getRequestCacheLife() {
			return _consumeRequestScopedCacheLife();
		},
		peekRequestCacheLife() {
			return _peekRequestScopedCacheLife();
		},
		handlerStart: options.handlerStart,
		hasLoadingBoundary: shouldSuppressLoadingBoundaries(options.renderMode ?? "navigation") ? false : Boolean(route.loading?.default),
		formState: options.formState ?? null,
		isProgressiveActionRender: options.isProgressiveActionRender === true,
		isDynamicError,
		isDraftMode,
		isForceDynamic,
		isForceStatic,
		isPrerender: process.env.VINEXT_PRERENDER === "1",
		isProduction: options.isProduction,
		isRscRequest: options.isRscRequest,
		isrDebug: options.isrDebug,
		isrHtmlKey: options.isrHtmlKey,
		isrRscKey: options.isrRscKey,
		isrSet: options.isrSet,
		expireSeconds: options.expireSeconds,
		layoutCount: route.layouts.length,
		loadSsrHandler: options.loadSsrHandler,
		middlewareContext: options.middlewareContext,
		params: options.params,
		rootParams: options.rootParams,
		peekRenderObservationState() {
			return {
				dynamicFetches: peekDynamicFetchObservations(),
				requestApis: peekRenderRequestApiUsage()
			};
		},
		probeLayoutAt(layoutIndex) {
			return options.probeLayoutAt(layoutIndex);
		},
		probePage() {
			return options.probePage();
		},
		classification: {
			getLayoutId(index) {
				const treePosition = route.layoutTreePositions?.[index] ?? 0;
				return AppElementsWire.encodeLayoutId(createAppPageTreePath([...route.routeSegments], treePosition));
			},
			buildTimeClassifications: route.__buildTimeClassifications,
			buildTimeReasons: route.__buildTimeReasons,
			debugClassification: options.debugClassification,
			async runWithIsolatedDynamicScope(fn) {
				const priorDynamic = consumeDynamicUsage();
				try {
					return {
						result: await fn(),
						dynamicDetected: consumeDynamicUsage()
					};
				} finally {
					consumeDynamicUsage();
					if (priorDynamic) markDynamicUsage();
				}
			}
		},
		revalidateSeconds: currentRevalidateSeconds,
		mountedSlotsHeader: options.mountedSlotsHeader,
		renderMode: options.renderMode ?? "navigation",
		renderErrorBoundaryResponse(renderError) {
			return options.renderErrorBoundaryPage(renderError);
		},
		renderLayoutSpecialError(specialError, layoutIndex) {
			return renderLayoutSpecialError(options, specialError, layoutIndex);
		},
		renderPageSpecialError(specialError) {
			return renderPageSpecialError(options, specialError);
		},
		renderToReadableStream: options.renderToReadableStream,
		routeHasLocalBoundary: Boolean(route.error?.default || route.errors?.some((errorModule) => errorModule?.default)),
		routePattern: route.pattern,
		runWithSuppressedHookWarning(probe) {
			return options.runWithSuppressedHookWarning(probe);
		},
		scriptNonce: options.scriptNonce,
		waitUntil(cachePromise) {
			getRequestExecutionContext()?.waitUntil(cachePromise);
		}
	});
}
/**
* Builds an RSC flight payload that encodes a redirect as a React error chunk.
* We render a tiny element that immediately throws an `Error` whose `digest`
* is the canonical `NEXT_REDIRECT;...` string. `renderToReadableStream`'s
* `onError` returns that digest, react-server-dom-webpack serializes the
* error into the stream, and the client's `RedirectErrorBoundary` decodes it
* via `getURLFromRedirectError` / `getRedirectTypeFromError`.
*
* The thrown error's digest matches Next.js's well-known router error format,
* so neither vinext's RSC error handler nor Next.js's reporter logs it as a
* "real" server error. Mirrors `app-render.tsx generateDynamicFlightRenderResult`
* where a redirect thrown during RSC rendering propagates through
* `renderToFlightStream`'s `onError` callback into the flight payload.
*/
function buildRscRedirectFlightStream(options, digest) {
	const throwingElement = import_react_react_server.createElement(function NextRedirectFlightThrower() {
		const err = /* @__PURE__ */ new Error("NEXT_REDIRECT");
		err.digest = digest;
		throw err;
	});
	return options.renderToReadableStream(throwingElement, { onError: () => digest });
}
async function renderLayoutSpecialError(options, specialError, layoutIndex) {
	return buildAppPageSpecialErrorResponse({
		basePath: options.basePath,
		buildRscRedirectFlightStream: (rscOptions) => buildRscRedirectFlightStream(options, rscOptions.digest),
		clearRequestContext: options.clearRequestContext,
		getAndClearPendingCookies,
		isRscRequest: options.isRscRequest,
		middlewareContext: options.middlewareContext,
		renderFallbackPage(statusCode) {
			const parentBoundary = resolveAppPageParentHttpAccessBoundaryModule({
				layoutIndex,
				rootForbiddenModule: options.rootForbiddenModule,
				rootNotFoundModule: options.rootNotFoundModule,
				rootUnauthorizedModule: options.rootUnauthorizedModule,
				routeForbiddenModules: options.route.forbiddens,
				routeNotFoundModules: options.route.notFounds,
				routeUnauthorizedModules: options.route.unauthorizeds,
				statusCode
			})?.default;
			return options.renderHttpAccessFallbackPage(statusCode, {
				boundaryComponent: parentBoundary,
				layouts: options.route.layouts.slice(0, layoutIndex),
				matchedParams: options.params
			}, null);
		},
		request: options.request,
		specialError
	});
}
async function renderPageSpecialError(options, specialError) {
	return buildAppPageSpecialErrorResponse({
		basePath: options.basePath,
		buildRscRedirectFlightStream: (rscOptions) => buildRscRedirectFlightStream(options, rscOptions.digest),
		clearRequestContext: options.clearRequestContext,
		getAndClearPendingCookies,
		isRscRequest: options.isRscRequest,
		middlewareContext: options.middlewareContext,
		renderFallbackPage(statusCode) {
			return options.renderHttpAccessFallbackPage(statusCode, { matchedParams: options.params }, null);
		},
		request: options.request,
		specialError
	});
}
//#endregion
//#region node_modules/vinext/dist/server/app-segment-config.js
var DYNAMIC_VALUES = /* @__PURE__ */ new Set([
	"auto",
	"error",
	"force-dynamic",
	"force-static"
]);
var FETCH_CACHE_VALUES = /* @__PURE__ */ new Set([
	"auto",
	"default-cache",
	"default-no-store",
	"force-cache",
	"force-no-store",
	"only-cache",
	"only-no-store"
]);
function isRouteSegmentDynamic(value) {
	return DYNAMIC_VALUES.has(value);
}
function isRouteSegmentFetchCache(value) {
	return FETCH_CACHE_VALUES.has(value);
}
function resolveRevalidateSeconds(current, value) {
	if (value === false) {
		if (current === null) return Infinity;
		return current === Infinity ? Infinity : current;
	}
	if (typeof value !== "number") return current;
	if (current === null) return value;
	return value < current ? value : current;
}
function isCacheFetchCacheMode(value) {
	return value === "default-cache" || value === "force-cache" || value === "only-cache";
}
function describeFetchCacheConflict(value) {
	return `Route segment config has incompatible fetchCache values including "${value}".`;
}
/**
* Resolve the route segment config that applies to an App page route.
*
* Next.js collects config from every segment in the loader tree and reduces it
* into the effective route config. The generated vinext entry already knows
* the concrete layout/page modules for a route, so it should only describe
* those modules and delegate the behavior to this helper.
*/
function resolveAppPageSegmentConfig(options) {
	const segments = [...options.layouts ?? [], options.page];
	const config = { revalidateSeconds: null };
	let hasForceCache = false;
	let hasForceNoStore = false;
	let hasOnlyCache = false;
	let hasOnlyNoStore = false;
	let hasParentDefaultNoStore = false;
	for (const segment of segments) {
		if (!segment) continue;
		if (isRouteSegmentDynamic(segment.dynamic)) config.dynamicConfig = segment.dynamic;
		if (segment.dynamicParams === false) config.dynamicParamsConfig = false;
		else if (segment.dynamicParams === true && config.dynamicParamsConfig !== false) config.dynamicParamsConfig = true;
		if (isRouteSegmentFetchCache(segment.fetchCache)) {
			const fetchCache = segment.fetchCache;
			if (hasParentDefaultNoStore && (fetchCache === "auto" || isCacheFetchCacheMode(fetchCache))) throw new Error(describeFetchCacheConflict(fetchCache));
			if (fetchCache === "force-cache") hasForceCache = true;
			if (fetchCache === "force-no-store") hasForceNoStore = true;
			if (fetchCache === "only-cache") hasOnlyCache = true;
			if (fetchCache === "only-no-store") hasOnlyNoStore = true;
			if ((hasForceCache || hasOnlyCache) && (hasForceNoStore || hasOnlyNoStore)) throw new Error(describeFetchCacheConflict(fetchCache));
			if (fetchCache === "default-no-store") hasParentDefaultNoStore = true;
			if (hasForceCache) config.fetchCache = "force-cache";
			else if (hasForceNoStore) config.fetchCache = "force-no-store";
			else if (hasOnlyCache) config.fetchCache = "only-cache";
			else if (hasOnlyNoStore) config.fetchCache = "only-no-store";
			else config.fetchCache = fetchCache;
		}
		config.revalidateSeconds = resolveRevalidateSeconds(config.revalidateSeconds, segment.revalidate);
	}
	if (config.dynamicConfig === "force-dynamic") config.revalidateSeconds = 0;
	if (config.fetchCache === void 0) {
		if (config.dynamicConfig === "force-dynamic") config.fetchCache = "force-no-store";
		else if (config.dynamicConfig === "error") config.fetchCache = "only-cache";
	}
	if (config.dynamicParamsConfig === void 0 && (config.dynamicConfig === "error" || config.dynamicConfig === "force-static")) config.dynamicParamsConfig = false;
	return config;
}
function resolveAppPageFetchCacheMode(options) {
	return resolveAppPageSegmentConfig(options).fetchCache ?? null;
}
//#endregion
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
//#region node_modules/vinext/dist/server/app-rsc-route-matching.js
function createRouteParams() {
	return Object.create(null);
}
function appRscPathnameParts(pathname) {
	const pathOnly = pathname.split("?")[0];
	return splitPathnameForRouteMatch(pathOnly === "/" ? "/" : pathOnly.replace(/\/$/, ""));
}
function createAppRscRouteMatcher(routes) {
	const routeTrie = buildRouteTrie(routes);
	const interceptLookup = createInterceptLookup(routes);
	return {
		matchRoute(url) {
			return trieMatch(routeTrie, appRscPathnameParts(url));
		},
		findIntercept(pathname, sourcePathname = null) {
			if (sourcePathname === null) return null;
			const urlParts = appRscPathnameParts(pathname);
			const sourceParts = appRscPathnameParts(sourcePathname);
			for (const entry of interceptLookup) {
				if (!matchInterceptSource(sourceParts, entry)) continue;
				const params = matchAppRscRoutePattern(urlParts, entry.targetPatternParts);
				if (params === null) continue;
				const sourceRoute = routes[entry.sourceRouteIndex];
				const matchedSourceParams = sourceRoute ? matchAppRscRoutePattern(sourceParts, sourceRoute.patternParts) : null;
				if (matchedSourceParams === null && entry.sourceMatchPatternParts === null) continue;
				const sourceParams = matchedSourceParams ?? createRouteParams();
				return {
					...entry,
					matchedParams: mergeMatchedParams(sourceParams, params)
				};
			}
			return null;
		}
	};
}
/**
* Check whether the request's source pathname (Next-URL / interception
* context) satisfies the intercept entry's intercepting-route pattern, with
* descendants allowed. Mirrors the header regex shape Next.js emits for the
* generated interception rewrite: `^<pattern>(?:/.*)?$`.
*
* When the entry has no declared `sourceMatchPatternParts`, fall back to the
* legacy behavior of accepting any source (we still require the source to be
* non-null at the caller — see `findIntercept`).
*/
function matchInterceptSource(sourceParts, entry) {
	const patternParts = entry.sourceMatchPatternParts;
	if (!patternParts) return true;
	if (patternParts.length === 0) return true;
	return matchRoutePatternPrefix(sourceParts, patternParts);
}
function createInterceptLookup(routes) {
	const interceptLookup = [];
	for (let routeIndex = 0; routeIndex < routes.length; routeIndex++) {
		const route = routes[routeIndex];
		if (!route.slots) continue;
		for (const [slotKey, slotModule] of Object.entries(route.slots)) {
			if (!slotModule.intercepts) continue;
			for (const intercept of slotModule.intercepts) {
				const sourceMatchPattern = intercept.sourceMatchPattern ?? null;
				const sourceMatchPatternParts = sourceMatchPattern ? sourceMatchPattern.split("/").filter(Boolean) : null;
				interceptLookup.push({
					sourceRouteIndex: routeIndex,
					slotKey,
					slotId: typeof slotModule.id === "string" ? slotModule.id : null,
					targetPattern: intercept.targetPattern,
					targetPatternParts: intercept.targetPattern.split("/").filter(Boolean),
					sourceMatchPattern,
					sourceMatchPatternParts,
					interceptLayouts: intercept.interceptLayouts,
					page: intercept.page,
					params: intercept.params
				});
			}
		}
	}
	return interceptLookup;
}
function matchAppRscRoutePattern(urlParts, patternParts) {
	return matchRoutePattern(urlParts, patternParts);
}
function mergeMatchedParams(sourceParams, targetParams) {
	return Object.assign(createRouteParams(), sourceParams, targetParams);
}
//#endregion
//#region node_modules/vinext/dist/shims/navigation-state.js
/**
* Server-only navigation state backed by AsyncLocalStorage.
*
* This module provides request-scoped isolation for navigation context
* and useServerInsertedHTML callbacks. Without ALS, concurrent requests
* on Cloudflare Workers would share module-level state and leak data
* (pathnames, params, CSS-in-JS styles) between requests.
*
* This module is server-only — it imports node:async_hooks and must NOT
* be bundled for the browser. The dual-environment navigation.ts shim
* uses a registration pattern so it works in both environments.
*/
var _FALLBACK_KEY = Symbol.for("vinext.navigation.fallback");
var _g = globalThis;
var _als = getOrCreateAls("vinext.navigation.als");
var _fallbackState = _g[_FALLBACK_KEY] ??= {
	serverContext: null,
	serverInsertedHTMLCallbacks: []
};
function _getState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als.getStore() ?? _fallbackState;
}
var _accessors = {
	getServerContext() {
		return _getState().serverContext;
	},
	setServerContext(ctx) {
		_getState().serverContext = ctx;
	},
	getInsertedHTMLCallbacks() {
		return _getState().serverInsertedHTMLCallbacks;
	},
	clearInsertedHTMLCallbacks() {
		_getState().serverInsertedHTMLCallbacks = [];
	}
};
_registerStateAccessors(_accessors);
globalThis[GLOBAL_ACCESSORS_KEY] = _accessors;
//#endregion
//#region node_modules/vinext/dist/shims/font-utils.js
/**
* Escape a string for safe interpolation inside a CSS single-quoted string.
*
* Prevents CSS injection by escaping characters that could break out of
* a `'...'` CSS string context: backslashes, single quotes, and newlines.
*
* Used by font-google-base.ts, font-local.ts, and fallback-metrics.ts.
*/
function escapeCSSString(value) {
	return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ");
}
/**
* Validate a CSS custom property name (e.g. `--font-inter`).
*
* Custom properties must start with `--` and only contain alphanumeric
* characters, hyphens, and underscores. Anything else could be used to
* break out of the CSS declaration and inject arbitrary rules.
*
* Returns the name if valid, undefined otherwise.
*/
function sanitizeCSSVarName(name) {
	if (/^--[a-zA-Z0-9_-]+$/.test(name)) return name;
}
/**
* Sanitize a CSS font-family fallback name.
*
* Generic family names (sans-serif, serif, monospace, etc.) are used as-is.
* Named families are wrapped in escaped quotes. This prevents injection via
* crafted fallback values like `); } body { color: red; } .x {`.
*/
function sanitizeFallback(name) {
	const generics = /* @__PURE__ */ new Set([
		"serif",
		"sans-serif",
		"monospace",
		"cursive",
		"fantasy",
		"system-ui",
		"ui-serif",
		"ui-sans-serif",
		"ui-monospace",
		"ui-rounded",
		"emoji",
		"math",
		"fangsong"
	]);
	const trimmed = name.trim();
	if (generics.has(trimmed)) return trimmed;
	return `'${escapeCSSString(trimmed)}'`;
}
function singleFontOptionValue(value) {
	if (Array.isArray(value)) return new Set(value).size === 1 ? value[0] : void 0;
	return value;
}
function sanitizeFontDescriptorValue(value) {
	if (/[{};]|\/\*|\*\/|<\//i.test(value)) return void 0;
	return value;
}
function resolveFontWeight(weight) {
	const value = singleFontOptionValue(weight);
	if (!value || value.includes(" ")) return void 0;
	const numericWeight = Number(value);
	return Number.isFinite(numericWeight) ? numericWeight : void 0;
}
function resolveFontStyle(style) {
	const value = singleFontOptionValue(style);
	if (!value || value.includes(" ")) return void 0;
	return sanitizeFontDescriptorValue(value);
}
function resolveGoogleFontStyle(style) {
	if (style === void 0) return "normal";
	const value = singleFontOptionValue(style);
	if (!value) return void 0;
	if (value === "normal" || value === "italic") return value;
}
function resolveSingleFaceStyle(input) {
	const fontWeight = input.internalWeight ?? resolveFontWeight(input.weight);
	const fontStyle = (input.internalStyle ? sanitizeFontDescriptorValue(input.internalStyle) : void 0) ?? (input.google ? resolveGoogleFontStyle(input.style) : resolveFontStyle(input.style));
	return {
		fontFamily: input.fontFamily,
		...fontWeight !== void 0 ? { fontWeight } : {},
		...fontStyle ? { fontStyle } : {}
	};
}
function formatFontClassRule(className, style) {
	const fontStyle = style.fontStyle ? sanitizeFontDescriptorValue(style.fontStyle) : void 0;
	return `.${className} { ${[
		`font-family: ${style.fontFamily}`,
		...style.fontWeight !== void 0 ? [`font-weight: ${style.fontWeight}`] : [],
		...fontStyle ? [`font-style: ${fontStyle}`] : []
	].join("; ")}; }\n`;
}
//#endregion
//#region node_modules/vinext/dist/build/google-fonts/sort-variants.js
function sortFontsVariantValues(valA, valB) {
	if (valA.includes(",") && valB.includes(",")) {
		const [aPrefix, aSuffix] = valA.split(",", 2);
		const [bPrefix, bSuffix] = valB.split(",", 2);
		if (aPrefix === bPrefix) return parseInt(aSuffix) - parseInt(bSuffix);
		return parseInt(aPrefix) - parseInt(bPrefix);
	}
	return parseInt(valA) - parseInt(valB);
}
//#endregion
//#region node_modules/vinext/dist/build/google-fonts/build-url.js
function buildGoogleFontsUrl$1(fontFamily, axes, display) {
	const variants = [];
	if (axes.wght) for (const wght of axes.wght) if (!axes.ital) variants.push([["wght", wght], ...axes.variableAxes ?? []]);
	else for (const ital of axes.ital) variants.push([
		["ital", ital],
		["wght", wght],
		...axes.variableAxes ?? []
	]);
	else if (axes.variableAxes) variants.push([...axes.variableAxes]);
	if (axes.variableAxes) for (const variant of variants) variant.sort(([a], [b]) => {
		const aIsLowercase = a.charCodeAt(0) > 96;
		const bIsLowercase = b.charCodeAt(0) > 96;
		if (aIsLowercase && !bIsLowercase) return -1;
		if (bIsLowercase && !aIsLowercase) return 1;
		return a > b ? 1 : -1;
	});
	let url = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, "+")}`;
	if (variants.length > 0) {
		const keyList = variants[0].map(([key]) => key).join(",");
		const valueLists = variants.map((variant) => variant.map(([, val]) => val).join(",")).sort(sortFontsVariantValues).join(";");
		url = `${url}:${keyList}@${valueLists}`;
	}
	return `${url}&display=${display}`;
}
//#endregion
//#region node_modules/vinext/dist/shims/font-google-base.js
/**
* next/font/google shim
*
* Provides a compatible shim for Next.js Google Fonts.
*
* Two modes:
* 1. **Dev / CDN mode** (default): Loads fonts from Google Fonts CDN via <link> tags.
* 2. **Self-hosted mode** (production build): The vinext:google-fonts Vite plugin
*    fetches font CSS + .woff2 files at build time, caches them locally, and injects
*    @font-face CSS pointing at local assets. No requests to Google at runtime.
*
* Usage:
*   import { Inter } from 'next/font/google';
*   const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
*   // inter.className -> stable CSS class for this font/options pair
*   // inter.style -> { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" }
*   // inter.variable -> CSS class that sets the font CSS variable when requested
*/
var injectedFonts = /* @__PURE__ */ new Set();
/**
* Convert a font family name to a CSS variable name.
* e.g., "Inter" -> "--font-inter", "Roboto Mono" -> "--font-roboto-mono"
*/
function toVarName(family) {
	return "--font-" + family.toLowerCase().replace(/\s+/g, "-");
}
function fontClassSegment(family) {
	return family.toLowerCase().replace(/[^a-z0-9_-]+/g, "_").replace(/^_+|_+$/g, "") || "font";
}
function normalizeStringSetOption(value) {
	if (!value) return "";
	return [...new Set((Array.isArray(value) ? value : [value]).map((item) => item.trim()).filter(Boolean))].sort().join(",");
}
function normalizeWeightOption(value) {
	const normalized = normalizeStringSetOption(value);
	return normalized === "variable" ? "" : normalized;
}
function normalizeStyleOption(value) {
	const values = new Set((Array.isArray(value) ? value : value ? [value] : []).map((item) => item.trim()).filter(Boolean));
	const hasItalic = values.has("italic");
	const hasNormal = values.has("normal");
	if (!hasItalic) return "";
	return hasNormal ? "italic,normal" : "italic";
}
function normalizeFallbackOption(value) {
	if (!value) return "";
	return value.map((item) => item.trim()).join(",");
}
function normalizeBooleanOption(value) {
	if (value === void 0) return "";
	return value ? "1" : "0";
}
function normalizeStringOrBooleanOption(value) {
	if (value === void 0) return "";
	return typeof value === "boolean" ? normalizeBooleanOption(value) : value;
}
function hashString(value) {
	let hash = 2166136261;
	for (let i = 0; i < value.length; i++) {
		hash ^= value.charCodeAt(i);
		hash = Math.imul(hash, 16777619) >>> 0;
	}
	return hash.toString(36).padStart(7, "0");
}
function createFontIdentity(family, options, cssVarName, fallback) {
	return hashString([
		family,
		cssVarName,
		normalizeWeightOption(options.weight),
		normalizeStyleOption(options.style),
		normalizeStringSetOption(options.subsets),
		options.display ?? "swap",
		normalizeBooleanOption(options.preload),
		normalizeFallbackOption(fallback),
		normalizeStringOrBooleanOption(options.adjustFontFallback),
		normalizeStringSetOption(options.axes),
		options._vinext?.font?.selfHostedCSS ?? "",
		options._vinext?.font?.fontWeight?.toString() ?? "",
		options._vinext?.font?.fontStyle ?? ""
	].join("\0"));
}
/**
* Build a Google Fonts CSS URL.
*
* In production this code path is dead. The build plugin
* (`vinext:google-fonts` in `src/plugins/fonts.ts`) statically resolves
* each font call's axis values against the bundled metadata, fetches the
* Google Fonts CSS, and injects the resulting CSS as
* `_vinext.font.selfHostedCSS` so the runtime never queries Google. The shim
* only reaches this builder when the plugin's static parser bails (dynamic
* options, eval-only shapes), which is dev-only.
*
* The dev fallback intentionally has no metadata: shipping the 388 KB
* `font-data.json` to the Worker bundle would dwarf the rest of the shim,
* and the production path already has the metadata-aware variant. The
* tradeoff is that the dev fallback cannot resolve a variable font's
* actual `wght` axis range. It emits no axis segment when no `weight` is
* given, which makes Google return the default static face (200) instead
* of the broken `:wght@100..900` URL that issue #885 reports.
*/
function buildGoogleFontsUrl(family, options) {
	const weights = options.weight ? Array.isArray(options.weight) ? options.weight : [options.weight] : [];
	const styles = options.style ? Array.isArray(options.style) ? options.style : [options.style] : [];
	const hasItalic = styles.includes("italic");
	const hasNormal = styles.includes("normal");
	const ital = hasItalic ? [...hasNormal ? ["0"] : [], "1"] : void 0;
	const normalizedWeights = weights.length === 1 && weights[0] === "variable" ? [] : weights;
	return buildGoogleFontsUrl$1(family, {
		wght: normalizedWeights.length > 0 ? normalizedWeights : ital ? ["400"] : void 0,
		ital
	}, options.display ?? "swap");
}
/**
* Inject a <link> tag for the font (client-side only).
* On the server, we track font URLs for SSR head injection.
*/
function injectFontStylesheet(url) {
	if (injectedFonts.has(url)) return;
	injectedFonts.add(url);
	if (typeof document !== "undefined") {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = url;
		document.head.appendChild(link);
	}
}
/** Track which className CSS rules have been injected. */
var injectedClassRules = /* @__PURE__ */ new Set();
/**
* Inject a CSS rule that maps a className to the exported font style.
*
* This is what makes `<div className={inter.className}>` apply the font.
* Next.js generates equivalent rules at build time.
*
* In Next.js, the .className class sets font-family and any single
* font-weight/font-style. CSS variables are handled separately by .variable.
*/
function injectClassNameRule(className, fontStyle) {
	if (injectedClassRules.has(className)) return;
	injectedClassRules.add(className);
	const css = formatFontClassRule(className, fontStyle);
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const styleElement = document.createElement("style");
	styleElement.textContent = css;
	styleElement.setAttribute("data-vinext-font-class", className);
	document.head.appendChild(styleElement);
}
/** Track which variable class CSS rules have been injected. */
var injectedVariableRules = /* @__PURE__ */ new Set();
/**
* Inject a CSS rule that sets a CSS variable on an element.
* This is what makes `<html className={inter.variable}>` set the CSS variable
* that can be referenced by other styles (e.g., Tailwind's font-sans).
*
* In Next.js, the .variable class ONLY sets the CSS variable — it does NOT
* set font-family. This is critical because apps commonly apply multiple
* .variable classes to <body> (e.g., geistSans.variable + geistMono.variable).
* If we also set font-family here, the last class wins due to CSS cascade,
* causing all text to use that font (e.g., everything becomes monospace).
*/
function injectVariableClassRule(variableClassName, cssVarName, fontFamily) {
	if (injectedVariableRules.has(variableClassName)) return;
	injectedVariableRules.add(variableClassName);
	const css = `.${variableClassName} { ${cssVarName}: ${fontFamily}; }\n`;
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-variable", variableClassName);
	document.head.appendChild(style);
}
var ssrFontStyles$1 = [];
/**
* Get collected SSR font class styles (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontStyles$1() {
	return [...ssrFontStyles$1];
}
var ssrFontUrls = [];
/**
* Get collected SSR font URLs (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontLinks() {
	return [...ssrFontUrls];
}
var ssrFontPreloads$1 = [];
var ssrFontPreloadHrefs = /* @__PURE__ */ new Set();
/**
* Get collected SSR font preload data (used by the renderer).
* Returns an array of { href, type } objects for emitting
* <link rel="preload" as="font" ...> tags.
*/
function getSSRFontPreloads$1() {
	return [...ssrFontPreloads$1];
}
/**
* Determine the MIME type for a font file based on its extension.
*/
function getFontMimeType(pathOrUrl) {
	if (pathOrUrl.endsWith(".woff2")) return "font/woff2";
	if (pathOrUrl.endsWith(".woff")) return "font/woff";
	if (pathOrUrl.endsWith(".ttf")) return "font/ttf";
	if (pathOrUrl.endsWith(".otf")) return "font/opentype";
	return "font/woff2";
}
/**
* Extract font file URLs from @font-face CSS rules.
* Parses url('...') references from the CSS text.
*/
function extractFontUrlsFromCSS(css) {
	const urls = [];
	const urlRegex = /url\(['"]?([^'")]+)['"]?\)/g;
	let match;
	while ((match = urlRegex.exec(css)) !== null) {
		const url = match[1];
		if (url && url.startsWith("/")) urls.push(url);
	}
	return urls;
}
/**
* Collect font file URLs from self-hosted CSS for preload link generation.
* Only collects on the server (SSR). Deduplicates by href using a Set for O(1) lookups.
*/
function collectFontPreloadsFromCSS(css) {
	if (typeof document !== "undefined") return;
	const urls = extractFontUrlsFromCSS(css);
	for (const href of urls) if (!ssrFontPreloadHrefs.has(href)) {
		ssrFontPreloadHrefs.add(href);
		ssrFontPreloads$1.push({
			href,
			type: getFontMimeType(href)
		});
	}
}
/** Track injected self-hosted @font-face blocks (deduplicate) */
var injectedSelfHosted = /* @__PURE__ */ new Set();
/**
* Inject self-hosted @font-face CSS (from the build plugin).
* This replaces the CDN <link> tag with inline CSS.
*/
function injectSelfHostedCSS(css) {
	if (injectedSelfHosted.has(css)) return;
	injectedSelfHosted.add(css);
	collectFontPreloadsFromCSS(css);
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-selfhosted", "true");
	document.head.appendChild(style);
}
function createFontLoader(family) {
	return function fontLoader(options = {}) {
		const internal = options._vinext?.font;
		const fallback = options.fallback ?? [];
		const adjustedFallback = options.adjustFontFallback === false || !internal?.adjustedFallbackCSS ? [] : [`'${escapeCSSString(family)} Fallback'`];
		const fontFamily = [
			`'${escapeCSSString(family)}'`,
			...adjustedFallback,
			...fallback.map(sanitizeFallback)
		].join(", ");
		const defaultVarName = toVarName(family);
		const cssVarName = options.variable ? sanitizeCSSVarName(options.variable) ?? defaultVarName : defaultVarName;
		const id = createFontIdentity(family, options, cssVarName, fallback);
		const classSegment = fontClassSegment(family);
		const className = `__font_${classSegment}_${id}`;
		const variableClassName = `__variable_${classSegment}_${id}`;
		const style = resolveSingleFaceStyle({
			fontFamily,
			weight: options.weight,
			style: options.style,
			internalWeight: internal?.fontWeight,
			internalStyle: internal?.fontStyle,
			google: true
		});
		if (internal?.selfHostedCSS) injectSelfHostedCSS(internal.selfHostedCSS);
		else {
			const url = buildGoogleFontsUrl(family, options);
			injectFontStylesheet(url);
			if (typeof document === "undefined") {
				if (!ssrFontUrls.includes(url)) ssrFontUrls.push(url);
			}
		}
		if (options.adjustFontFallback !== false && internal?.adjustedFallbackCSS) injectSelfHostedCSS(internal.adjustedFallbackCSS);
		injectClassNameRule(className, style);
		if (options.variable) injectVariableClassRule(variableClassName, cssVarName, fontFamily);
		return {
			className,
			style,
			...options.variable ? { variable: variableClassName } : {}
		};
	};
}
var googleFonts = new Proxy({}, { get(_target, prop) {
	if (typeof prop !== "string") return void 0;
	if (prop === "__esModule") return true;
	if (prop === "default") return googleFonts;
	return createFontLoader(prop.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2"));
} });
//#endregion
//#region node_modules/vinext/dist/shims/font-local.js
var ssrFontStyles = [];
var ssrFontPreloads = [];
/**
* Get collected SSR font styles (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontStyles() {
	return [...ssrFontStyles];
}
/**
* Get collected SSR font preload data (used by the renderer).
* Returns an array of { href, type } objects for emitting
* <link rel="preload" as="font" ...> tags.
*/
function getSSRFontPreloads() {
	return [...ssrFontPreloads];
}
//#endregion
//#region node_modules/vinext/dist/server/app-hook-warning-suppression.js
var suppressHookWarningAls = new AsyncLocalStorage$1();
var _origConsoleError = console.error;
console.error = (...args) => {
	if (suppressHookWarningAls.getStore() === true && typeof args[0] === "string" && args[0].includes("Invalid hook call")) return;
	_origConsoleError.apply(console, args);
};
//#endregion
//#region node_modules/vinext/dist/server/app-request-context.js
/**
* Set navigation context in the ALS-backed store. "use client" components
* rendered during SSR need the pathname/searchParams/params but the SSR
* environment has a separate module instance of next/navigation.
*
* Clearing nav context (ctx === null) also clears root params.
*/
function setAppNavigationContext(ctx) {
	setNavigationContext(ctx);
	if (ctx === null) setRootParams(null);
}
/**
* Clear all per-request ALS state owned by the App Router handler.
* Must be called before returning a non-page response (redirect, public
* file proxy, etc.) to prevent state leaking between requests on Workers.
*
* Clears: headers, navigation context, root params.
*/
function clearAppRequestContext() {
	setHeadersContext(null);
	setAppNavigationContext(null);
}
//#endregion
//#region node_modules/vinext/dist/utils/prerender-output-paths.js
/**
* Determine the HTML output file path for a prerendered URL.
* Respects trailingSlash config.
*/
function getOutputPath(urlPath, trailingSlash) {
	if (urlPath === "/") return "index.html";
	const clean = urlPath.replace(/^\//, "");
	if (trailingSlash) return `${clean}/index.html`;
	return `${clean}.html`;
}
/**
* Determine the RSC output file path for a prerendered URL.
* "/blog/hello-world" -> "blog/hello-world.rsc"
* "/"                 -> "index.rsc"
*/
function getRscOutputPath(urlPath) {
	if (urlPath === "/") return "index.rsc";
	return urlPath.replace(/^\//, "") + ".rsc";
}
//#endregion
//#region node_modules/vinext/dist/server/seed-cache.js
/**
* Seed the memory cache from pre-rendered build output.
*
* Reads `vinext-prerender.json` and the corresponding HTML/RSC files from
* `dist/server/prerendered-routes/`, then populates the active CacheHandler
* so pre-rendered pages are served as cache HITs on the very first request
* instead of triggering a full re-render.
*
* This is only useful for the MemoryCacheHandler (the default for Node.js
* production). Persistent backends like KV already retain entries across
* deploys and can be pre-populated via TPR or similar mechanisms.
*
* Consistency model:
* - The manifest is authoritative for which routes were pre-rendered and their
*   revalidation config. The HTML/RSC files on disk are the source of truth
*   for content. Both are produced by the same build and are immutable after
*   the build completes.
* - Cache keys include the buildId, so entries from a previous build are never
*   matched by a new server process (new build = new buildId = new keys).
* - Seeded entries are indistinguishable from entries created by the ISR
*   render path: same cache value shape, same revalidate duration tracking,
*   same cache key construction. The serving path does not know or care
*   whether an entry was seeded or rendered.
*
* Concurrency model:
* - This function runs at startup before the HTTP server begins accepting
*   requests, so there are no concurrent readers during seeding. All I/O is
*   synchronous (readFileSync) which is appropriate for a startup-only path
*   that runs once before the event loop serves traffic.
*/
/**
* Read pre-rendered routes from disk and seed the active CacheHandler.
*
* Call this during production server startup, before any requests are served.
* If the manifest doesn't exist (no prerender phase was run), this is a no-op.
*
* @param serverDir - Path to `dist/server/` (where vinext-prerender.json lives)
* @returns The number of routes seeded (0 if no manifest or no renderable routes).
*/
async function seedMemoryCacheFromPrerender$1(serverDir, options) {
	const manifestPath = path.join(serverDir, "vinext-prerender.json");
	if (!fs.existsSync(manifestPath)) return 0;
	let manifest;
	try {
		manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
	} catch (err) {
		console.warn("[vinext] Failed to parse vinext-prerender.json, skipping cache seeding:", err);
		return 0;
	}
	const { buildId, routes } = manifest;
	if (!buildId || !Array.isArray(routes)) return 0;
	const trailingSlash = manifest.trailingSlash ?? false;
	const prerenderDir = path.join(serverDir, "prerendered-routes");
	const writeAppPageEntry = options?.writeAppPageEntry ?? createDefaultAppPageEntryWriter();
	let seeded = 0;
	for (const route of routes) {
		if (route.status !== "rendered") continue;
		if (route.router !== "app") continue;
		const pathname = route.path ?? route.route;
		const baseKey = isrCacheKey("app", pathname, buildId);
		const htmlKey = options?.buildAppPageHtmlKey?.(pathname) ?? baseKey + ":html";
		const rscKey = options?.buildAppPageRscKey?.(pathname) ?? baseKey + ":rsc";
		const revalidateSeconds = typeof route.revalidate === "number" ? route.revalidate : void 0;
		const expireSeconds = typeof route.expire === "number" ? route.expire : void 0;
		if (await seedHtml(writeAppPageEntry, prerenderDir, htmlKey, pathname, trailingSlash, revalidateSeconds, expireSeconds)) {
			await seedRsc(writeAppPageEntry, prerenderDir, rscKey, pathname, revalidateSeconds, expireSeconds);
			seeded++;
		}
	}
	return seeded;
}
function createDefaultAppPageEntryWriter() {
	return (key, data, metadata) => isrSetPrerenderedAppPage(key, data, metadata);
}
/**
* Seed the HTML cache entry for a single route.
* Returns true if the file existed and was seeded.
*/
async function seedHtml(writeAppPageEntry, prerenderDir, key, pathname, trailingSlash, revalidateSeconds, expireSeconds) {
	const relPath = getOutputPath(pathname, trailingSlash);
	const fullPath = path.join(prerenderDir, relPath);
	if (!fs.existsSync(fullPath)) return false;
	await writeAppPageEntry(key, {
		kind: "APP_PAGE",
		html: fs.readFileSync(fullPath, "utf-8"),
		rscData: void 0,
		headers: void 0,
		postponed: void 0,
		status: void 0
	}, {
		expireSeconds,
		revalidateSeconds
	});
	return true;
}
/**
* Seed the RSC cache entry for a single route.
* No-op if the .rsc file doesn't exist on disk.
*/
async function seedRsc(writeAppPageEntry, prerenderDir, key, pathname, revalidateSeconds, expireSeconds) {
	const relPath = getRscOutputPath(pathname);
	const fullPath = path.join(prerenderDir, relPath);
	if (!fs.existsSync(fullPath)) return;
	const rscBuffer = fs.readFileSync(fullPath);
	await writeAppPageEntry(key, {
		kind: "APP_PAGE",
		html: "",
		rscData: rscBuffer.buffer.slice(rscBuffer.byteOffset, rscBuffer.byteOffset + rscBuffer.byteLength),
		headers: void 0,
		postponed: void 0,
		status: void 0
	}, {
		expireSeconds,
		revalidateSeconds
	});
}
//#endregion
//#region app/page.tsx
var page_exports$23 = /* @__PURE__ */ __exportAll({ default: () => page_default$23 });
var page_default$23 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "6efdf509a785", "default");
var Resources = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, assetsManifest.serverResources["app/layout.tsx"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region components/elements/ScrollProgress.tsx
var ScrollProgress_default = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "dc59ba9cc4aa", "default");
//#endregion
//#region \0virtual:vinext-google-fonts?fonts=Noto_Sans_JP
var Noto_Sans_JP = /*#__PURE__*/ createFontLoader("Noto Sans JP");
//#endregion
//#region app/layout.tsx
var layout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$wrap_RootLayout,
	metadata: () => metadata
});
var notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	_vinext: { font: {
		selfHostedCSS: "@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-6f2cdfb7.woff2) format('woff2');\n  unicode-range: U+25ee8, U+25f23, U+25f5c, U+25fd4, U+25fe0, U+25ffb, U+2600c, U+26017, U+26060, U+260ed, U+26222, U+2626a, U+26270, U+26286, U+2634c, U+26402, U+2667e, U+266b0, U+2671d, U+268dd, U+268ea, U+26951, U+2696f, U+26999, U+269dd, U+26a1e, U+26a58, U+26a8c, U+26ab7, U+26aff, U+26c29, U+26c73, U+26c9e, U+26cdd, U+26e40, U+26e65, U+26f94, U+26ff6-26ff8, U+270f4, U+2710d, U+27139, U+273da-273db, U+273fe, U+27410, U+27449, U+27614-27615, U+27631, U+27684, U+27693, U+2770e, U+27723, U+27752, U+278b2, U+27985, U+279b4, U+27a84, U+27bb3, U+27bbe, U+27bc7, U+27c3c, U+27cb8, U+27d73, U+27da0, U+27e10, U+27eaf, U+27fb7, U+2808a, U+280bb, U+28277, U+28282, U+282f3, U+283cd, U+2840c, U+28455, U+284dc, U+2856b, U+285c8-285c9, U+286d7, U+286fa, U+28946, U+28949, U+2896b, U+28987-28988, U+289ba-289bb, U+28a1e, U+28a29, U+28a43, U+28a71, U+28a99, U+28acd, U+28add, U+28ae4, U+28bc1, U+28bef, U+28cdd, U+28d10, U+28d71, U+28dfb, U+28e0f, U+28e17, U+28e1f, U+28e36, U+28e89, U+28eeb, U+28ef6, U+28f32, U+28ff8, U+292a0, U+292b1, U+29490, U+295cf, U+2967f, U+296f0, U+29719, U+29750, U+29810, U+298c6, U+29a72, U+29d4b, U+29ddb, U+29e15, U+29e3d, U+29e49, U+29e8a, U+29ec4, U+29edb, U+29ee9, U+29fce, U+29fd7, U+2a01a, U+2a02f, U+2a082, U+2a0f9, U+2a190, U+2a2b2, U+2a38c, U+2a437, U+2a5f1, U+2a602, U+2a61a, U+2a6b2, U+2a9e6, U+2b746, U+2b751, U+2b753, U+2b75a, U+2b75c, U+2b765, U+2b776-2b777, U+2b77c, U+2b782, U+2b789, U+2b78b, U+2b78e, U+2b794, U+2b7ac, U+2b7af, U+2b7bd, U+2b7c9, U+2b7cf, U+2b7d2, U+2b7d8, U+2b7f0, U+2b80d, U+2b817, U+2b81a, U+2d544, U+2e278, U+2e569, U+2e6ea, U+2f804, U+2f80f, U+2f815, U+2f818, U+2f81a, U+2f822, U+2f828, U+2f82c, U+2f833, U+2f83f, U+2f846, U+2f852, U+2f862, U+2f86d, U+2f873, U+2f877, U+2f884, U+2f899-2f89a, U+2f8a6, U+2f8ac, U+2f8b2, U+2f8b6, U+2f8d3, U+2f8db-2f8dc, U+2f8e1, U+2f8e5, U+2f8ea, U+2f8ed, U+2f8fc, U+2f903, U+2f90b, U+2f90f, U+2f91a, U+2f920-2f921, U+2f945, U+2f947, U+2f96c, U+2f995, U+2f9d0, U+2f9de-2f9df, U+2f9f4;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-fee7d21c.woff2) format('woff2');\n  unicode-range: U+1f235-1f23b, U+1f240-1f248, U+1f250-1f251, U+2000b, U+20089-2008a, U+200a2, U+200a4, U+200b0, U+200f5, U+20158, U+201a2, U+20213, U+2032b, U+20371, U+20381, U+203f9, U+2044a, U+20509, U+2053f, U+205b1, U+205d6, U+20611, U+20628, U+206ec, U+2074f, U+207c8, U+20807, U+2083a, U+208b9, U+2090e, U+2097c, U+20984, U+2099d, U+20a64, U+20ad3, U+20b1d, U+20b9f, U+20bb7, U+20d45, U+20d58, U+20de1, U+20e64, U+20e6d, U+20e95, U+20f5f, U+21201, U+2123d, U+21255, U+21274, U+2127b, U+212d7, U+212e4, U+212fd, U+2131b, U+21336, U+21344, U+213c4, U+2146d-2146e, U+215d7, U+21647, U+216b4, U+21706, U+21742, U+218bd, U+219c3, U+21a1a, U+21c56, U+21d2d, U+21d45, U+21d62, U+21d78, U+21d92, U+21d9c, U+21da1, U+21db7, U+21de0, U+21e33-21e34, U+21f1e, U+21f76, U+21ffa, U+2217b, U+22218, U+2231e, U+223ad, U+22609, U+226f3, U+2285b, U+228ab, U+2298f, U+22ab8, U+22b46, U+22b4f-22b50, U+22ba6, U+22c1d, U+22c24, U+22de1, U+22e42, U+22feb, U+231b6, U+231c3-231c4, U+231f5, U+23372, U+233cc, U+233d0, U+233d2-233d3, U+233d5, U+233da, U+233df, U+233e4, U+233fe, U+2344a-2344b, U+23451, U+23465, U+234e4, U+2355a, U+23594, U+235c4, U+23638-2363a, U+23647, U+2370c, U+2371c, U+2373f, U+23763-23764, U+237e7, U+237f1, U+237ff, U+23824, U+2383d, U+23a98, U+23c7f, U+23cbe, U+23cfe, U+23d00, U+23d0e, U+23d40, U+23dd3, U+23df9-23dfa, U+23f7e, U+2404b, U+24096, U+24103, U+241c6, U+241fe, U+242ee, U+243bc, U+243d0, U+24629, U+246a5, U+247f1, U+24896, U+248e9, U+24a4d, U+24b56, U+24b6f, U+24c16, U+24d14, U+24e04, U+24e0e, U+24e37, U+24e6a, U+24e8b, U+24ff2, U+2504a, U+25055, U+25122, U+251a9, U+251cd, U+251e5, U+2521e, U+2524c, U+2542e, U+2548e, U+254d9, U+2550e, U+255a7, U+2567f, U+25771, U+257a9, U+257b4, U+25874, U+259c4, U+259cc, U+259d4, U+25ad7, U+25ae3-25ae4, U+25af1, U+25bb2, U+25c4b, U+25c64, U+25da1, U+25e2e, U+25e56, U+25e62, U+25e65, U+25ec2, U+25ed8;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-04213794.woff2) format('woff2');\n  unicode-range: U+ffd7, U+ffda-ffdc, U+ffe0-ffe2, U+ffe4, U+ffe6, U+ffe8-ffee, U+1f100-1f10c, U+1f110-1f16c, U+1f170-1f1ac, U+1f200-1f202, U+1f210-1f234;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-0caea10d.woff2) format('woff2');\n  unicode-range: U+fa10, U+fa12-fa6d, U+fb00-fb04, U+fe10-fe19, U+fe30-fe42, U+fe44-fe52, U+fe54-fe66, U+fe68-fe6b, U+ff02, U+ff04, U+ff07, U+ff51, U+ff5b, U+ff5d, U+ff5f-ff60, U+ff66, U+ff69, U+ff87, U+ffa1-ffbe, U+ffc2-ffc7, U+ffca-ffcf, U+ffd2-ffd6;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-7f07fcdc.woff2) format('woff2');\n  unicode-range: U+f92d-f959, U+f95b-f9f2, U+f9f4-fa0b, U+fa0e-fa0f;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-c956451c.woff2) format('woff2');\n  unicode-range: U+9e8b-9e8c, U+9e8e-9e8f, U+9e91-9e92, U+9e95-9e96, U+9e98, U+9e9b, U+9e9d-9e9e, U+9ea4-9ea5, U+9ea8-9eaa, U+9eac-9eb0, U+9eb3-9eb5, U+9eb8, U+9ebc-9ebf, U+9ec3, U+9ec6, U+9ec8, U+9ecb-9ecd, U+9ecf-9ed1, U+9ed4-9ed5, U+9ed8, U+9edb-9ee0, U+9ee4-9ee5, U+9ee7-9ee8, U+9eec-9ef2, U+9ef4-9ef9, U+9efb-9eff, U+9f02-9f03, U+9f07-9f09, U+9f0e-9f12, U+9f14-9f17, U+9f19-9f1b, U+9f1f-9f22, U+9f26, U+9f2a-9f2c, U+9f2f, U+9f31-9f32, U+9f34, U+9f37, U+9f39-9f3a, U+9f3c-9f3f, U+9f41, U+9f43-9f47, U+9f4a, U+9f4e-9f50, U+9f52-9f58, U+9f5a, U+9f5d-9f61, U+9f63, U+9f66-9f6a, U+9f6c-9f73, U+9f75-9f77, U+9f7a, U+9f7d, U+9f7f, U+9f8f-9f92, U+9f94-9f97, U+9f99, U+9f9c-9fa3, U+9fa5, U+9fb4, U+9fbc-9fc2, U+9fc4, U+9fc6, U+9fcc, U+f900-f92c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-21d1775d.woff2) format('woff2');\n  unicode-range: U+9c3e, U+9c41, U+9c43-9c4a, U+9c4e-9c50, U+9c52-9c54, U+9c56, U+9c58, U+9c5a-9c61, U+9c63, U+9c65, U+9c67-9c6b, U+9c6d-9c6e, U+9c70, U+9c72, U+9c75-9c78, U+9c7a-9c7c, U+9ce6-9ce7, U+9ceb-9cec, U+9cf0, U+9cf2, U+9cf6-9cf7, U+9cf9, U+9d02-9d03, U+9d06-9d09, U+9d0b, U+9d0e, U+9d11-9d12, U+9d15, U+9d17-9d18, U+9d1b-9d1f, U+9d23, U+9d26, U+9d2a-9d2c, U+9d2f-9d30, U+9d32-9d34, U+9d3a, U+9d3c-9d3f, U+9d41-9d48, U+9d4a, U+9d50-9d54, U+9d59, U+9d5d-9d65, U+9d69-9d6c, U+9d6f-9d70, U+9d72-9d73, U+9d76-9d77, U+9d7a-9d7c, U+9d7e, U+9d83-9d84, U+9d86-9d87, U+9d89-9d8a, U+9d8d-9d8e, U+9d92-9d93, U+9d95-9d9a, U+9da1, U+9da4, U+9da9-9dac, U+9dae, U+9db1-9db2, U+9db5, U+9db8-9dbd, U+9dbf-9dc4, U+9dc6-9dc7, U+9dc9-9dca, U+9dcf, U+9dd3-9dd7, U+9dd9-9dda, U+9dde-9de0, U+9de3, U+9de5-9de7, U+9de9, U+9deb, U+9ded-9df0, U+9df3-9df4, U+9df8, U+9dfd-9dfe, U+9e02, U+9e07, U+9e0a, U+9e0d-9e0e, U+9e10-9e12, U+9e15-9e16, U+9e19-9e1f, U+9e75, U+9e79-9e7d, U+9e80-9e85, U+9e87-9e88;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-84aececd.woff2) format('woff2');\n  unicode-range: U+9ae5-9ae7, U+9ae9, U+9aeb-9aec, U+9aee-9aef, U+9af1-9af5, U+9af7, U+9af9-9afb, U+9afd, U+9aff-9b06, U+9b08-9b09, U+9b0b-9b0e, U+9b10, U+9b12, U+9b16, U+9b18-9b1d, U+9b1f-9b20, U+9b22-9b23, U+9b25-9b2f, U+9b32-9b35, U+9b37, U+9b39-9b3b, U+9b3d, U+9b43-9b44, U+9b48, U+9b4b-9b4f, U+9b51, U+9b55-9b58, U+9b5b, U+9b5e, U+9b61, U+9b63, U+9b65-9b66, U+9b68, U+9b6a-9b6f, U+9b72-9b79, U+9b7f-9b80, U+9b83-9b87, U+9b89-9b8b, U+9b8d, U+9b8f-9b94, U+9b96-9b97, U+9b9a, U+9b9d-9ba0, U+9ba6-9ba7, U+9ba9-9baa, U+9bac, U+9bb0-9bb2, U+9bb4, U+9bb7-9bb9, U+9bbb-9bbc, U+9bbe-9bc1, U+9bc6-9bc8, U+9bca, U+9bce-9bd2, U+9bd4, U+9bd7-9bd8, U+9bdd, U+9bdf, U+9be1-9be5, U+9be7, U+9bea-9beb, U+9bee-9bf3, U+9bf5, U+9bf7-9bfa, U+9bfd, U+9bff-9c00, U+9c02, U+9c04, U+9c06, U+9c08-9c0d, U+9c0f-9c16, U+9c18-9c1e, U+9c21-9c2a, U+9c2d-9c32, U+9c35-9c37, U+9c39-9c3a, U+9c3d;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-94a0dad9.woff2) format('woff2');\n  unicode-range: U+98eb, U+98ed-98ee, U+98f0-98f1, U+98f3, U+98f6, U+9902, U+9907-9909, U+9911-9912, U+9914-9918, U+991a-9922, U+9924, U+9926-9927, U+992b-992c, U+992e, U+9931-9935, U+9939-993e, U+9940-9942, U+9945-9949, U+994b-994e, U+9950-9952, U+9954-9955, U+9958-9959, U+995b-995c, U+995e-9960, U+9963, U+9997-9998, U+999b, U+999d-999f, U+99a3, U+99a5-99a6, U+99a8, U+99ad-99ae, U+99b0-99b2, U+99b5, U+99b9-99ba, U+99bc-99bd, U+99bf, U+99c1, U+99c3, U+99c8-99c9, U+99d1, U+99d3-99d5, U+99d8-99df, U+99e1-99e2, U+99e7, U+99ea-99ee, U+99f0-99f2, U+99f4-99f5, U+99f8-99f9, U+99fb-99fe, U+9a01-9a05, U+9a08, U+9a0a-9a0c, U+9a0f-9a11, U+9a16, U+9a1a, U+9a1e, U+9a20, U+9a22-9a24, U+9a27, U+9a2b, U+9a2d-9a2e, U+9a31, U+9a33, U+9a35-9a38, U+9a3e, U+9a40-9a45, U+9a47, U+9a4a-9a4e, U+9a51-9a52, U+9a54-9a58, U+9a5b, U+9a5d, U+9a5f, U+9a62, U+9a64-9a65, U+9a69-9a6c, U+9aaa, U+9aac-9ab0, U+9ab2, U+9ab4-9ab7, U+9ab9, U+9abb-9ac1, U+9ac3, U+9ac6, U+9ac8, U+9ace-9ad3, U+9ad5-9ad7, U+9adb-9adc, U+9ade-9ae0, U+9ae2-9ae4;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-4c71878a.woff2) format('woff2');\n  unicode-range: U+971d, U+9721-9724, U+9728, U+972a, U+9730-9731, U+9733, U+9736, U+9738-9739, U+973b, U+973d-973e, U+9741-9744, U+9746-974a, U+974d-974f, U+9751, U+9755, U+9757-9758, U+975a-975c, U+9760-9761, U+9763-9764, U+9766-9768, U+976a-976b, U+976e, U+9771, U+9773, U+9776-977d, U+977f-9781, U+9785-9786, U+9789, U+978b, U+978f-9790, U+9795-9797, U+9799-979a, U+979c, U+979e-97a0, U+97a2-97a3, U+97a6, U+97a8, U+97ab-97ac, U+97ae, U+97b1-97b6, U+97b8-97ba, U+97bc, U+97be-97bf, U+97c1, U+97c3-97ce, U+97d0-97d1, U+97d4, U+97d7-97d9, U+97db-97de, U+97e0-97e1, U+97e4, U+97e6, U+97ed-97ef, U+97f1-97f2, U+97f4-97f8, U+97fa, U+9804, U+9807, U+980a, U+980c-980f, U+9814, U+9816-9817, U+9819-981a, U+981c, U+981e, U+9820-9821, U+9823-9826, U+982b, U+982e-9830, U+9832-9835, U+9837, U+9839, U+983d-983e, U+9844, U+9846-9847, U+984a-984b, U+984f, U+9851-9853, U+9856-9857, U+9859-985b, U+9862-9863, U+9865-9866, U+986a-986c, U+986f-9871, U+9873-9875, U+98aa-98ab, U+98ad-98ae, U+98b0-98b1, U+98b4, U+98b6-98b8, U+98ba-98bc, U+98bf, U+98c2-98c8, U+98cb-98cc, U+98ce, U+98dc, U+98de, U+98e0-98e1, U+98e3, U+98e5-98e7, U+98e9-98ea;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-2ba603da.woff2) format('woff2');\n  unicode-range: U+944a, U+944c, U+9452-9453, U+9455, U+9459-945c, U+945e-9463, U+9468, U+946a-946b, U+946d-9472, U+9475, U+9477, U+947c-947f, U+9481, U+9483-9485, U+9578-9579, U+957e-957f, U+9582, U+9584, U+9586-9588, U+958a, U+958c-958f, U+9592, U+9594, U+9596, U+9598-9599, U+959d-95a1, U+95a4, U+95a6-95a9, U+95ab-95ad, U+95b1, U+95b4, U+95b6, U+95b9-95bf, U+95c3, U+95c6, U+95c8-95cd, U+95d0-95d6, U+95d9-95da, U+95dc-95e2, U+95e4-95e6, U+95e8, U+961d-961e, U+9621-9622, U+9624-9626, U+9628, U+962c, U+962e-962f, U+9631, U+9633-9634, U+9637-963a, U+963c-963d, U+9641-9642, U+964b-964c, U+964f, U+9652, U+9654, U+9656-9658, U+965c-965f, U+9661, U+9666, U+966a, U+966c, U+966e, U+9672, U+9674, U+9677, U+967b-967c, U+967e-967f, U+9681-9684, U+9689, U+968b, U+968d, U+9691, U+9695-9698, U+969a, U+969d, U+969f, U+96a4-96aa, U+96ae-96b4, U+96b6, U+96b8-96bb, U+96bd, U+96c1, U+96c9-96cb, U+96cd-96ce, U+96d2, U+96d5-96d6, U+96d8-96da, U+96dc-96df, U+96e9, U+96ef, U+96f1, U+96f9-96fa, U+9702-9706, U+9708-9709, U+970d-970f, U+9711, U+9713-9714, U+9716, U+9719-971b;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-1159b2c0.woff2) format('woff2');\n  unicode-range: U+92bc-92bd, U+92bf-92c3, U+92c5-92c8, U+92cb-92d0, U+92d2-92d3, U+92d5, U+92d7-92d9, U+92dc-92dd, U+92df-92e1, U+92e3-92e5, U+92e7-92ea, U+92ec, U+92ee, U+92f0, U+92f2, U+92f7-92fb, U+92ff-9300, U+9302, U+9304, U+9308, U+930d, U+930f-9311, U+9314-9315, U+9318-931a, U+931c-931f, U+9321-9325, U+9327-932b, U+932e, U+9333-9337, U+933a-933b, U+9344, U+9347-934a, U+934d, U+9350-9352, U+9354-9358, U+935a, U+935c, U+935e, U+9360, U+9364-9365, U+9367, U+9369-936d, U+936f-9371, U+9373-9374, U+9376, U+937a, U+937d-9382, U+9388, U+938a-938b, U+938d, U+938f, U+9392, U+9394-9395, U+9397-9398, U+939a-939b, U+939e, U+93a1, U+93a3-93a4, U+93a6, U+93a8-93a9, U+93ab-93ad, U+93b0, U+93b4-93b6, U+93b9-93bb, U+93c1, U+93c3-93cd, U+93d0-93d1, U+93d3, U+93d6-93d9, U+93dc-93df, U+93e2, U+93e4-93e8, U+93f1, U+93f5, U+93f7-93fb, U+93fd, U+9401-9404, U+9407-9409, U+940d-9410, U+9413-9417, U+9419-941a, U+941f, U+9421, U+942b, U+942e-942f, U+9431-9434, U+9436, U+9438, U+943a-943b, U+943d, U+943f, U+9441, U+9443-9445, U+9448;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-841c1b2a.woff2) format('woff2');\n  unicode-range: U+9143, U+9146-914c, U+914f, U+9153, U+9156-915b, U+9161, U+9163-9165, U+9167, U+9169, U+916d, U+9172-9174, U+9179-917b, U+9181-9183, U+9185-9187, U+9189-918b, U+918e, U+9191, U+9193-9195, U+9197-9198, U+919e, U+91a1-91a2, U+91a6, U+91a8, U+91aa-91b6, U+91ba-91bd, U+91bf-91c6, U+91c9, U+91cb, U+91d0, U+91d3-91d4, U+91d6-91d7, U+91d9-91db, U+91de-91df, U+91e1, U+91e4-91e6, U+91e9-91ea, U+91ec-91f1, U+91f5-91f7, U+91f9, U+91fb-91fd, U+91ff-9201, U+9204-9207, U+9209-920a, U+920c, U+920e, U+9210-9218, U+921c-921e, U+9223-9226, U+9228-9229, U+922c, U+922e-9230, U+9233, U+9235-923a, U+923c, U+923e-9240, U+9242-9243, U+9245-924b, U+924d-9251, U+9256-925a, U+925c-925e, U+9260-9261, U+9264-9269, U+926e-9270, U+9275-9279, U+927b-927f, U+9288-928a, U+928d-928e, U+9291-9293, U+9295-9297, U+9299, U+929b-929c, U+929f-92a0, U+92a4-92a5, U+92a7-92a8, U+92ab, U+92af, U+92b2-92b3, U+92b6-92bb;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-a3995713.woff2) format('woff2');\n  unicode-range: U+8f52-8f55, U+8f57-8f58, U+8f5c-8f5e, U+8f61-8f66, U+8f9c-8f9d, U+8f9f-8fa2, U+8fa4-8fa8, U+8fad-8faf, U+8fb4-8fb8, U+8fbe, U+8fc0-8fc2, U+8fc6, U+8fc8, U+8fca-8fcb, U+8fcd, U+8fd0, U+8fd2-8fd3, U+8fd5, U+8fda, U+8fe0, U+8fe2-8fe5, U+8fe8-8fea, U+8fed-8fef, U+8ff1, U+8ff4-8ff6, U+8ff8-8ffb, U+8ffe, U+9002, U+9004-9005, U+9008, U+900b-900e, U+9011, U+9013, U+9015-9016, U+9018, U+901b, U+901e, U+9021, U+9027-902a, U+902c-902d, U+902f, U+9033-9037, U+9039, U+903c, U+903e-903f, U+9041, U+9043-9044, U+9049, U+904c, U+904f-9052, U+9056, U+9058, U+905b-905e, U+9062, U+9066-9068, U+906c, U+906f-9070, U+9072, U+9074, U+9076, U+9079, U+9080-9083, U+9085, U+9087-9088, U+908b-908c, U+908e-9090, U+9095, U+9097-9099, U+909b, U+90a0-90a2, U+90a5, U+90a8, U+90af-90b6, U+90bd-90be, U+90c3-90c5, U+90c7-90c9, U+90cc, U+90d2, U+90d5, U+90d7-90d9, U+90db-90df, U+90e2, U+90e4-90e5, U+90eb, U+90ef-90f0, U+90f2, U+90f4, U+90f6, U+90fe-9100, U+9102, U+9104-9106, U+9108, U+910d, U+9110, U+9112, U+9114-911a, U+911c, U+911e, U+9120, U+9122-9123, U+9125, U+9127, U+9129, U+912d-9132, U+9134, U+9136-9137, U+9139-913a, U+913c-913d;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-73be784a.woff2) format('woff2');\n  unicode-range: U+8dc0, U+8dc2, U+8dc5-8dc8, U+8dca-8dcc, U+8dce-8dcf, U+8dd1, U+8dd4-8dd7, U+8dd9-8ddb, U+8ddf, U+8de3-8de5, U+8de7, U+8dea-8dec, U+8df0-8df2, U+8df4, U+8dfc-8dfd, U+8dff, U+8e01, U+8e04-8e06, U+8e08-8e09, U+8e0b-8e0c, U+8e10-8e11, U+8e14, U+8e16, U+8e1d-8e23, U+8e26-8e27, U+8e30-8e31, U+8e33-8e39, U+8e3d, U+8e40-8e42, U+8e44, U+8e47-8e50, U+8e54-8e55, U+8e59, U+8e5b-8e64, U+8e69, U+8e6c-8e6d, U+8e6f-8e72, U+8e75-8e77, U+8e79-8e7c, U+8e81-8e85, U+8e89, U+8e8b, U+8e90-8e95, U+8e98-8e9b, U+8e9d-8e9e, U+8ea1-8ea2, U+8ea7, U+8ea9-8eaa, U+8eac-8eb1, U+8eb3, U+8eb5-8eb6, U+8eba-8ebb, U+8ebe, U+8ec0-8ec1, U+8ec3-8ec8, U+8ecb, U+8ecf, U+8ed1, U+8ed4, U+8edb-8edc, U+8ee3, U+8ee8, U+8eeb, U+8eed-8eee, U+8ef0-8ef1, U+8ef7, U+8ef9-8efc, U+8efe, U+8f00, U+8f02, U+8f05, U+8f07-8f08, U+8f0a, U+8f0f-8f10, U+8f12-8f13, U+8f15-8f19, U+8f1b-8f1c, U+8f1e-8f21, U+8f23, U+8f25-8f28, U+8f2b-8f2f, U+8f33-8f37, U+8f39-8f3b, U+8f3e, U+8f40-8f43, U+8f45-8f47, U+8f49-8f4a, U+8f4c-8f4f, U+8f51;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-af2d2fa2.woff2) format('woff2');\n  unicode-range: U+8b2d, U+8b30, U+8b37, U+8b3c, U+8b3e, U+8b41-8b46, U+8b48-8b49, U+8b4c-8b4f, U+8b51-8b54, U+8b56, U+8b59, U+8b5b, U+8b5e-8b5f, U+8b63, U+8b69, U+8b6b-8b6d, U+8b6f, U+8b71, U+8b74, U+8b76, U+8b78-8b79, U+8b7c-8b81, U+8b84-8b85, U+8b8a-8b8f, U+8b92-8b96, U+8b99-8b9a, U+8b9c-8ba0, U+8c38-8c3a, U+8c3d-8c3f, U+8c41, U+8c45, U+8c47-8c49, U+8c4b-8c4c, U+8c4e-8c51, U+8c53-8c55, U+8c57-8c59, U+8c5b, U+8c5d, U+8c62-8c64, U+8c66, U+8c68-8c69, U+8c6b-8c6d, U+8c73, U+8c75-8c76, U+8c78, U+8c7a-8c7c, U+8c7e, U+8c82, U+8c85-8c87, U+8c89-8c8b, U+8c8d-8c8e, U+8c90, U+8c92-8c94, U+8c98-8c99, U+8c9b-8c9c, U+8c9f, U+8ca4, U+8cad-8cae, U+8cb2-8cb3, U+8cb6, U+8cb9-8cba, U+8cbd, U+8cc1-8cc2, U+8cc4-8cc6, U+8cc8-8cc9, U+8ccb, U+8ccd-8ccf, U+8cd2, U+8cd5-8cd6, U+8cd9-8cda, U+8cdd, U+8ce1, U+8ce3-8ce4, U+8ce6, U+8ce8, U+8cec, U+8cef-8cf2, U+8cf4-8cf5, U+8cf7-8cf8, U+8cfa-8cfb, U+8cfd-8cff, U+8d01, U+8d03-8d04, U+8d07, U+8d09-8d0b, U+8d0d-8d10, U+8d12-8d14, U+8d16-8d17, U+8d1b-8d1d, U+8d65, U+8d67, U+8d69, U+8d6b-8d6e, U+8d71, U+8d73, U+8d76, U+8d7f, U+8d81-8d82, U+8d84, U+8d88, U+8d8d, U+8d90-8d91, U+8d95, U+8d99, U+8d9e-8da0, U+8da6, U+8da8, U+8dab-8dac, U+8daf, U+8db2, U+8db5, U+8db7, U+8db9-8dbc, U+8dbe;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-2f0b3bc0.woff2) format('woff2');\n  unicode-range: U+8973-8975, U+8977, U+897a-897e, U+8980, U+8983, U+8988-898a, U+898d, U+8990, U+8993-8995, U+8998, U+899b-899c, U+899f-89a1, U+89a5-89a6, U+89a9, U+89ac, U+89af-89b0, U+89b2, U+89b4-89b7, U+89ba, U+89bc-89bd, U+89bf-89c1, U+89d4-89d8, U+89da, U+89dc-89dd, U+89e5, U+89e7, U+89e9, U+89eb, U+89ed, U+89f1, U+89f3-89f4, U+89f6, U+89f8-89f9, U+89fd, U+89ff, U+8a01, U+8a04-8a05, U+8a07, U+8a0c, U+8a0f-8a12, U+8a14-8a16, U+8a1b, U+8a1d-8a1e, U+8a20-8a22, U+8a24-8a26, U+8a2b-8a2c, U+8a2f, U+8a35-8a37, U+8a3b, U+8a3d-8a3e, U+8a40-8a41, U+8a43, U+8a45-8a49, U+8a4d-8a4e, U+8a51-8a54, U+8a56-8a58, U+8a5b-8a5d, U+8a61-8a62, U+8a65, U+8a67, U+8a6c-8a6d, U+8a75-8a77, U+8a79-8a7c, U+8a7e-8a80, U+8a82-8a86, U+8a8b, U+8a8f-8a92, U+8a96-8a97, U+8a99-8a9a, U+8a9f, U+8aa1, U+8aa3, U+8aa5-8aaa, U+8aae-8aaf, U+8ab3, U+8ab6-8ab7, U+8abb-8abc, U+8abe, U+8ac2-8ac4, U+8ac6, U+8ac8-8aca, U+8acc-8acd, U+8ad0-8ad1, U+8ad3-8ad5, U+8ad7, U+8ada-8ae2, U+8ae4, U+8ae7, U+8aeb-8aec, U+8aee, U+8af0-8af1, U+8af3-8af7, U+8afa, U+8afc, U+8aff, U+8b01-8b02, U+8b04-8b07, U+8b0a-8b0d, U+8b0f-8b11, U+8b14, U+8b16, U+8b1a, U+8b1c, U+8b1e-8b20, U+8b26, U+8b28, U+8b2b-8b2c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-7d84d4e6.woff2) format('woff2');\n  unicode-range: U+87e2-87e6, U+87ea-87ed, U+87ef, U+87f1, U+87f3, U+87f5-87f8, U+87fa-87fb, U+87fe-87ff, U+8801, U+8803, U+8805-8807, U+8809-880b, U+880d-8816, U+8818-881c, U+881e-881f, U+8821-8822, U+8827-8828, U+882d-882e, U+8830-8832, U+8835-8836, U+8839-883c, U+8841-8845, U+8848-884b, U+884d-884e, U+8851-8852, U+8855-8856, U+8858-885a, U+885c, U+885e-8860, U+8862, U+8864, U+8869, U+886b, U+886e-886f, U+8871-8872, U+8875, U+8877, U+8879, U+887b, U+887d-887e, U+8880-8882, U+8888, U+888d, U+8892, U+8897-889c, U+889e-88a0, U+88a2, U+88a4, U+88a8, U+88aa, U+88ae, U+88b0-88b1, U+88b5, U+88b7, U+88ba, U+88bc-88c0, U+88c3-88c4, U+88c6, U+88ca-88ce, U+88d1-88d4, U+88d8-88d9, U+88db, U+88dd-88e1, U+88e7-88e8, U+88ef-88f2, U+88f4-88f5, U+88f7, U+88f9, U+88fc, U+8901-8902, U+8904, U+8906, U+890a, U+890c-890f, U+8913, U+8915-8916, U+8918-891a, U+891c-891e, U+8920, U+8925-8928, U+892a-892b, U+8930-8932, U+8935-893b, U+893e, U+8940-8946, U+8949, U+894c-894d, U+894f, U+8952, U+8956-8957, U+895a-895c, U+895e, U+8960-8964, U+8966, U+896a-896b, U+896d-8970;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-03cd5e0e.woff2) format('woff2');\n  unicode-range: U+8655-8659, U+865b, U+865d-8664, U+8667, U+8669, U+866c, U+866f, U+8671, U+8675-8677, U+867a-867b, U+867d, U+8687-8689, U+868b-868d, U+8691, U+8693, U+8695-8696, U+8698, U+869a, U+869c-869d, U+86a1, U+86a3-86a4, U+86a6-86ab, U+86ad, U+86af-86b1, U+86b3-86b9, U+86bf-86c1, U+86c3-86c6, U+86c9, U+86cb, U+86ce, U+86d1-86d2, U+86d4-86d5, U+86d7, U+86da, U+86dc, U+86de-86e0, U+86e3-86e7, U+86e9, U+86ec-86ed, U+86ef, U+86f8-86fe, U+8700, U+8703-870b, U+870d-8714, U+8719-871a, U+871e-871f, U+8721-8723, U+8725, U+8728-8729, U+872e-872f, U+8731-8732, U+8734, U+8737, U+8739-8740, U+8743, U+8745, U+8749, U+874b-874e, U+8751, U+8753, U+8755, U+8757-8759, U+875d, U+875f-8761, U+8763-8766, U+8768, U+876a, U+876e-876f, U+8771-8772, U+8774, U+8778, U+877b-877c, U+877f, U+8782-8789, U+878b-878c, U+878e, U+8790, U+8793, U+8795, U+8797-8799, U+879e-87a0, U+87a2-87a3, U+87a7, U+87ab-87af, U+87b1, U+87b3, U+87b5, U+87bb, U+87bd-87c1, U+87c4, U+87c6-87cb, U+87ce, U+87d0, U+87d2, U+87d5-87d6, U+87d9-87da, U+87dc, U+87df-87e0;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-5877985c.woff2) format('woff2');\n  unicode-range: U+84b4, U+84b9-84bb, U+84bd-84c2, U+84c6-84ca, U+84cc-84d1, U+84d3, U+84d6, U+84d9-84da, U+84dc, U+84e7, U+84ea, U+84ec, U+84ef-84f2, U+84f4, U+84f7, U+84fa-84fd, U+84ff-8500, U+8502-8503, U+8506-8507, U+850c, U+850e, U+8510, U+8514-8515, U+8517-8518, U+851a-851c, U+851e-851f, U+8521-8525, U+8527, U+852a-852c, U+852f, U+8532-8534, U+8536, U+853e-8541, U+8543, U+8546, U+8548, U+854a-854b, U+854f-8553, U+8555-855a, U+855c-8564, U+8569-856b, U+856d, U+856f, U+8577, U+8579-857b, U+857d-8581, U+8585-8586, U+8588-858c, U+858f-8591, U+8593, U+8597-8598, U+859b-859d, U+859f-85a0, U+85a2, U+85a4-85a5, U+85a7-85a8, U+85ad-85b0, U+85b4, U+85b6-85ba, U+85bc-85bf, U+85c1-85c2, U+85c7, U+85c9-85cb, U+85ce-85d0, U+85d5, U+85d8-85da, U+85dc, U+85df-85e1, U+85e5-85e6, U+85e8, U+85ed, U+85f3-85f4, U+85f6-85f7, U+85f9-85fa, U+85fc, U+85fe-8600, U+8602, U+8604-8606, U+860a-860b, U+860d-860e, U+8610-8613, U+8616-861b, U+861e, U+8621-8622, U+8624, U+8627, U+8629, U+862f-8630, U+8636, U+8638-863a, U+863c-863d, U+863f-8642, U+8646, U+864d, U+8652-8654;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-d0dfeaa0.woff2) format('woff2');\n  unicode-range: U+82e8, U+82ea, U+82ed, U+82ef, U+82f3-82f4, U+82f6-82f7, U+82f9, U+82fb, U+82fd-82fe, U+8300-8301, U+8303, U+8306-8308, U+830a-830c, U+8316-8318, U+831b, U+831d-831f, U+8321-8323, U+832b-8335, U+8337, U+833a, U+833c-833d, U+8340, U+8342-8347, U+834a, U+834d-8351, U+8353-8357, U+835a, U+8362-8363, U+8370, U+8373, U+8375, U+8378, U+837c-837d, U+837f-8380, U+8382, U+8384-8387, U+838a, U+838d-838e, U+8392-8396, U+8398-83a0, U+83a2, U+83a6-83ad, U+83b1, U+83b5, U+83bd-83c1, U+83c7, U+83c9, U+83ce-83d1, U+83d4, U+83d6, U+83d8, U+83dd, U+83df-83e1, U+83e5, U+83e8, U+83ea-83eb, U+83f0, U+83f2, U+83f4, U+83f6-83f9, U+83fb-83fd, U+8401, U+8403-8404, U+8406-8407, U+840a-840b, U+840d, U+840f, U+8411, U+8413, U+8415, U+8417, U+8419, U+8420, U+8422, U+842a, U+842f, U+8431, U+8435, U+8438-8439, U+843c, U+8445-8448, U+844a, U+844d-844f, U+8451-8452, U+8456, U+8458-845a, U+845c, U+845f-8462, U+8464-8467, U+8469-846b, U+846d-8470, U+8473-8474, U+8476-847a, U+847c-847d, U+8481-8482, U+8484-8485, U+848b, U+8490, U+8492-8493, U+8495, U+8497, U+849c, U+849e-849f, U+84a1, U+84a6, U+84a8-84aa, U+84ad, U+84af, U+84b1;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-2ec072ee.woff2) format('woff2');\n  unicode-range: U+814a, U+814c, U+8151-8153, U+8157, U+815f-8161, U+8165-8169, U+816d-816f, U+8171, U+8173-8174, U+8177, U+8180-8186, U+8188, U+818a-818b, U+818e, U+8190, U+8193, U+8195-8196, U+8198, U+819b, U+819e, U+81a0, U+81a2, U+81a4, U+81a9, U+81ae, U+81b0, U+81b2, U+81b4-81b5, U+81b8, U+81ba-81bb, U+81bd-81be, U+81c0-81c3, U+81c5-81c6, U+81c8-81cb, U+81cd-81cf, U+81d1, U+81d5-81db, U+81dd-81e1, U+81e4-81e5, U+81e7, U+81eb-81ec, U+81ef-81f2, U+81f5-81f6, U+81f8-81fb, U+81fd-8205, U+8209-820b, U+820d, U+820f, U+8212-8214, U+8216, U+8219-821d, U+8221-8222, U+8228-8229, U+822b, U+822e, U+8232-8235, U+8237-8238, U+823a, U+823c, U+8240, U+8243-8246, U+8249, U+824b, U+824e-824f, U+8251, U+8256-825a, U+825c-825d, U+825f-8260, U+8262-8264, U+8267-8268, U+826a-826b, U+826d-826e, U+8271, U+8274, U+8277, U+8279, U+827b, U+827d-8281, U+8283-8284, U+8287, U+8289-828a, U+828d-828e, U+8291-8294, U+8296, U+8298-829b, U+829f-82a1, U+82a3-82a4, U+82a7-82ac, U+82ae, U+82b0, U+82b2, U+82b4, U+82b7, U+82ba-82bc, U+82be-82bf, U+82c5-82c6, U+82d0, U+82d2-82d3, U+82d5, U+82d9-82da, U+82dc, U+82de-82e4, U+82e7;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-bf18cf1e.woff2) format('woff2');\n  unicode-range: U+7f77-7f79, U+7f7d-7f80, U+7f82-7f83, U+7f86-7f88, U+7f8b-7f8d, U+7f8f-7f91, U+7f94, U+7f96-7f97, U+7f9a, U+7f9c-7f9d, U+7fa1-7fa3, U+7fa6, U+7faa, U+7fad-7faf, U+7fb2, U+7fb4, U+7fb6, U+7fb8-7fb9, U+7fbc, U+7fbf-7fc0, U+7fc3, U+7fc5-7fc6, U+7fc8, U+7fca, U+7fce-7fcf, U+7fd5, U+7fdb, U+7fdf, U+7fe1, U+7fe3, U+7fe5-7fe6, U+7fe8-7fe9, U+7feb-7fec, U+7fee-7ff0, U+7ff2-7ff3, U+7ff9-7ffa, U+7ffd-7fff, U+8002, U+8004, U+8006-8008, U+800a-800f, U+8011-8014, U+8016, U+8018-8019, U+801c-8021, U+8024, U+8026, U+8028, U+802c, U+802e, U+8030, U+8034-8035, U+8037, U+8039-8040, U+8043-8044, U+8046, U+804a, U+8052, U+8058, U+805a, U+805f-8060, U+8062, U+8064, U+8066, U+8068, U+806d, U+806f-8073, U+8075-8076, U+8079, U+807b, U+807d-8081, U+8084-8088, U+808b, U+808e, U+8093, U+8099-809a, U+809c, U+809e, U+80a4, U+80a6-80a7, U+80ab-80ad, U+80b1, U+80b8-80b9, U+80c4-80c5, U+80c8, U+80ca, U+80cd, U+80cf, U+80d2, U+80d4-80db, U+80dd, U+80e0, U+80e4-80e6, U+80ed-80f3, U+80f5-80f7, U+80f9-80fc, U+80fe, U+8101, U+8103, U+8109, U+810b, U+810d, U+8116-8118, U+811b-811c, U+811e, U+8120, U+8123-8124, U+8127, U+8129, U+812b-812c, U+812f-8130, U+8135, U+8139-813a, U+813c-813e, U+8141, U+8145-8147;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-12f26646.woff2) format('woff2');\n  unicode-range: U+7d57, U+7d59-7d5d, U+7d63, U+7d65, U+7d67, U+7d6a, U+7d6e, U+7d70, U+7d72-7d73, U+7d78, U+7d7a-7d7b, U+7d7d, U+7d7f, U+7d81-7d83, U+7d85-7d86, U+7d88-7d89, U+7d8b-7d8d, U+7d8f, U+7d91, U+7d93, U+7d96-7d97, U+7d9b-7da0, U+7da2-7da3, U+7da6-7da7, U+7daa-7dac, U+7dae-7db0, U+7db3, U+7db5-7db9, U+7dbd, U+7dc0, U+7dc2-7dc7, U+7dcc-7dce, U+7dd0, U+7dd5-7dd9, U+7ddc-7dde, U+7de1-7de6, U+7dea-7ded, U+7df1-7df2, U+7df5-7df6, U+7df9-7dfa, U+7e00, U+7e05, U+7e08-7e0b, U+7e10-7e12, U+7e15, U+7e17, U+7e1c-7e1d, U+7e1f-7e23, U+7e27-7e28, U+7e2c-7e2d, U+7e2f, U+7e31-7e33, U+7e35-7e37, U+7e39-7e3b, U+7e3d, U+7e3f, U+7e43-7e48, U+7e4e, U+7e50, U+7e52, U+7e56, U+7e58-7e5a, U+7e5d-7e5f, U+7e61-7e62, U+7e65-7e67, U+7e69-7e6b, U+7e6d-7e6f, U+7e73, U+7e75, U+7e78-7e79, U+7e7b-7e7f, U+7e81-7e83, U+7e86-7e8a, U+7e8c-7e8e, U+7e90-7e96, U+7e98, U+7e9a-7e9f, U+7f38, U+7f3a-7f3f, U+7f43-7f45, U+7f47, U+7f4c-7f50, U+7f52-7f55, U+7f58, U+7f5b-7f5d, U+7f5f, U+7f61, U+7f63-7f69, U+7f6b, U+7f6d, U+7f71;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-196ab1ef.woff2) format('woff2');\n  unicode-range: U+7bc8, U+7bca-7bcc, U+7bcf, U+7bd4, U+7bd6-7bd7, U+7bd9-7bdb, U+7bdd, U+7be5-7be6, U+7be8-7bea, U+7bf0, U+7bf2-7bfa, U+7bfc, U+7bfe, U+7c00-7c04, U+7c06-7c07, U+7c09, U+7c0b-7c0f, U+7c11-7c14, U+7c17, U+7c19, U+7c1b, U+7c1e-7c20, U+7c23, U+7c25-7c28, U+7c2a-7c2c, U+7c2f, U+7c31, U+7c33-7c34, U+7c36-7c3a, U+7c3d-7c3e, U+7c40, U+7c42-7c43, U+7c45-7c46, U+7c4a, U+7c4c, U+7c4f-7c5f, U+7c61, U+7c63-7c65, U+7c67, U+7c69, U+7c6c-7c70, U+7c72, U+7c75, U+7c79, U+7c7b-7c7e, U+7c81-7c83, U+7c86-7c87, U+7c8d, U+7c8f-7c90, U+7c94, U+7c9e, U+7ca0-7ca2, U+7ca4-7ca6, U+7ca8, U+7cab, U+7cad-7cae, U+7cb0-7cb3, U+7cb6-7cb7, U+7cb9-7cbd, U+7cbf-7cc0, U+7cc2, U+7cc4-7cc5, U+7cc7-7cca, U+7ccd-7ccf, U+7cd2-7cd5, U+7cd7-7cda, U+7cdc-7cdd, U+7cdf-7ce0, U+7ce2, U+7ce6, U+7ce9, U+7ceb, U+7cef, U+7cf2, U+7cf4-7cf6, U+7cf9-7cfa, U+7cfe, U+7d02-7d03, U+7d06-7d0a, U+7d0f, U+7d11-7d13, U+7d15-7d16, U+7d1c-7d1e, U+7d23, U+7d26, U+7d2a, U+7d2c-7d2e, U+7d31-7d32, U+7d35, U+7d3c-7d41, U+7d43, U+7d45, U+7d47-7d48, U+7d4b, U+7d4d-7d4f, U+7d51, U+7d53, U+7d55-7d56;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-7f4da5c2.woff2) format('woff2');\n  unicode-range: U+7a17-7a19, U+7a1b, U+7a1e-7a21, U+7a27, U+7a2b, U+7a2d, U+7a2f-7a31, U+7a34-7a35, U+7a37-7a3b, U+7a3e, U+7a43-7a49, U+7a4c, U+7a4e, U+7a50, U+7a55-7a57, U+7a59, U+7a5c-7a5d, U+7a5f-7a63, U+7a65, U+7a67, U+7a69-7a6a, U+7a6d, U+7a70, U+7a75, U+7a78-7a79, U+7a7d-7a7e, U+7a80, U+7a82, U+7a84-7a86, U+7a88, U+7a8a-7a8b, U+7a90-7a91, U+7a94-7a98, U+7a9e, U+7aa0, U+7aa3, U+7aa9, U+7aac, U+7ab0, U+7ab3, U+7ab5-7ab6, U+7ab9-7abf, U+7ac3, U+7ac5-7aca, U+7acc-7acf, U+7ad1-7ad3, U+7ad5, U+7ada-7adb, U+7add, U+7adf, U+7ae1-7ae2, U+7ae6-7aed, U+7af0-7af1, U+7af4, U+7af8, U+7afa-7afb, U+7afd-7afe, U+7b02, U+7b04, U+7b06-7b08, U+7b0a-7b0b, U+7b0f, U+7b12, U+7b14, U+7b18-7b19, U+7b1e-7b1f, U+7b23, U+7b25, U+7b27-7b2b, U+7b2d-7b31, U+7b33-7b36, U+7b3b, U+7b3d, U+7b3f-7b41, U+7b45, U+7b47, U+7b4c-7b50, U+7b53, U+7b55, U+7b5d, U+7b60, U+7b64-7b66, U+7b69-7b6a, U+7b6c-7b75, U+7b77, U+7b79-7b7a, U+7b7f, U+7b84, U+7b86, U+7b89, U+7b8d-7b92, U+7b96, U+7b98-7ba0, U+7ba5, U+7bac-7bad, U+7baf-7bb0, U+7bb2, U+7bb4-7bb6, U+7bba-7bbd, U+7bc1-7bc2, U+7bc5-7bc6;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-eb4fefcd.woff2) format('woff2');\n  unicode-range: U+7851-7852, U+785c, U+785e, U+7860-7861, U+7863-7864, U+7868, U+786a, U+786e-786f, U+7872, U+7874, U+787a, U+787c, U+787e, U+7886-7887, U+788a, U+788c-788f, U+7893-7895, U+7898, U+789a, U+789d-789f, U+78a1, U+78a3-78a4, U+78a8-78aa, U+78ac-78ad, U+78af-78b3, U+78b5, U+78bb-78bf, U+78c5-78cc, U+78ce, U+78d1-78d6, U+78da-78db, U+78df-78e1, U+78e4, U+78e6-78e7, U+78ea, U+78ec, U+78f2-78f4, U+78f6-78f7, U+78f9-78fb, U+78fd-7901, U+7906-7907, U+790c, U+7910-7912, U+7919-791c, U+791e-7920, U+7925-792e, U+7930-7931, U+7934-7935, U+793b, U+793d, U+793f, U+7941-7942, U+7944-7946, U+794a-794b, U+794f, U+7951, U+7954-7955, U+7957-7958, U+795a-795c, U+795f-7960, U+7962, U+7967, U+7969, U+796b, U+7972, U+7977, U+7979-797c, U+797e-7980, U+798a-798e, U+7991, U+7993-7996, U+7998, U+799b-799d, U+79a1, U+79a6-79ab, U+79ae-79b1, U+79b3-79b4, U+79b8-79bb, U+79bd-79be, U+79c2, U+79c4, U+79c7-79ca, U+79cc-79cd, U+79cf, U+79d4-79d6, U+79da, U+79dd-79e3, U+79e5, U+79e7, U+79ea-79ed, U+79f1, U+79f8, U+79fc, U+7a02-7a03, U+7a05, U+7a07-7a0a, U+7a0c-7a0d, U+7a11, U+7a15;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-71be2615.woff2) format('woff2');\n  unicode-range: U+768c-768e, U+7690, U+7693, U+7695-7696, U+7699-76a8, U+76aa, U+76ad, U+76af-76b0, U+76b4, U+76b6-76ba, U+76bd, U+76c1-76c3, U+76c5, U+76c8-76c9, U+76cb-76ce, U+76d2, U+76d4, U+76d6, U+76d9, U+76dc, U+76de, U+76e0-76e1, U+76e5-76e8, U+76ea-76ec, U+76f0-76f1, U+76f6, U+76f9, U+76fb-76fc, U+7700, U+7704, U+7706-7708, U+770a, U+770e, U+7712, U+7714-7715, U+7717, U+7719-771c, U+7722, U+7724-7726, U+7728, U+772d-772f, U+7734-7739, U+773d-773e, U+7742, U+7745-7747, U+774a, U+774d-774f, U+7752, U+7756-7758, U+775a-775c, U+775e-7760, U+7762, U+7764-7765, U+7767, U+776a-776c, U+7770, U+7772-7774, U+7779-777a, U+777c-7780, U+7784, U+778b-778e, U+7794-7796, U+779a, U+779e-77a0, U+77a2, U+77a4-77a5, U+77a7, U+77a9-77aa, U+77ae-77b1, U+77b5-77b7, U+77b9, U+77bb-77bf, U+77c3, U+77c7, U+77c9, U+77cd, U+77d1-77d2, U+77d5, U+77d7, U+77d9-77da, U+77dc, U+77de-77e0, U+77e3-77e4, U+77e6-77e7, U+77e9-77ea, U+77ec, U+77ee, U+77f0-77f1, U+77f4, U+77f8, U+77fb-77fc, U+7805-7806, U+7809, U+780c-780e, U+7811-7812, U+7819, U+781d, U+7820-7823, U+7826-7827, U+782c-782e, U+7830, U+7835, U+7837, U+783a, U+783f, U+7843-7845, U+7847-7848, U+784c, U+784e-784f;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-9bb751e5.woff2) format('woff2');\n  unicode-range: U+7511-7513, U+7515-7517, U+751c, U+751e, U+7520-7522, U+7524, U+7526-7527, U+7529-752c, U+752f, U+7536, U+7538-7539, U+753c-7540, U+7543-7544, U+7546-754b, U+754d-7550, U+7552, U+7557, U+755a-755b, U+755d-755f, U+7561-7562, U+7564, U+7566-7567, U+7569, U+756b-756d, U+756f, U+7571-7572, U+7574-757e, U+7581-7582, U+7585-7587, U+7589-758c, U+758f-7590, U+7592-7595, U+7599-759a, U+759c-759d, U+75a2-75a5, U+75b0-75b1, U+75b3-75b5, U+75b7-75b8, U+75ba, U+75bd, U+75bf-75c4, U+75c6, U+75ca, U+75cc-75cf, U+75d3-75d4, U+75d7-75d8, U+75dc-75e1, U+75e3-75e4, U+75e7, U+75ec, U+75ee-75f3, U+75f9, U+75fc, U+75fe-7604, U+7607-760c, U+760f, U+7612-7613, U+7615-7616, U+7618-7619, U+761b-7629, U+762d, U+7630, U+7632-7635, U+7638-763c, U+7640-7641, U+7643-764b, U+764e, U+7655, U+7658-7659, U+765c, U+765f, U+7661-7662, U+7664-7665, U+7667-766a, U+766c-7672, U+7674, U+7676, U+7678, U+7680-7683, U+7685, U+7688, U+768b;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-28ceec77.woff2) format('woff2');\n  unicode-range: U+736c, U+736e-7371, U+7375, U+7377-737c, U+7380-7381, U+7383, U+7385-7386, U+738a, U+738e, U+7390, U+7393-7398, U+739c, U+739e-73a0, U+73a2, U+73a5-73a6, U+73a8, U+73aa-73ab, U+73ad, U+73b3, U+73b5, U+73b7, U+73b9-73bd, U+73bf, U+73c5-73c6, U+73c9-73cc, U+73ce-73cf, U+73d2-73d3, U+73d6, U+73d9, U+73dd-73de, U+73e1, U+73e3-73e7, U+73e9-73ea, U+73ee, U+73f1, U+73f4-73f5, U+73f7-73fb, U+73fd, U+73ff-7401, U+7404-7405, U+7407, U+740a, U+7411, U+7413, U+741a-741b, U+7421, U+7424, U+7426, U+7428-7431, U+7433, U+7439-743a, U+743f-7441, U+7443-7444, U+7446-7447, U+744b, U+744d, U+7451-7453, U+7455, U+7457, U+7459-745a, U+745c-745d, U+745f, U+7462-7464, U+7466-746b, U+746d-7473, U+7476, U+747e, U+7480-7481, U+7485-7489, U+748b, U+748f-7492, U+7497-749a, U+749c, U+749e-74a3, U+74a5-74a6, U+74a8-74ab, U+74ae-74af, U+74b1-74b2, U+74b5, U+74b9-74bb, U+74bd, U+74bf, U+74c8-74ca, U+74cc, U+74cf-74d0, U+74d3-74d4, U+74d6, U+74d8, U+74da-74db, U+74de-74e0, U+74e3-74e4, U+74e7-74eb, U+74ee-74f2, U+74f4, U+74f7-74f8, U+74fa-74fc, U+74ff, U+7501, U+7503-7506, U+750c-750e;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-f7ab6dd7.woff2) format('woff2');\n  unicode-range: U+7166, U+7168, U+716c, U+7179, U+7180, U+7184-7185, U+7187-7188, U+718c, U+718f, U+7192, U+7194-7196, U+7199-719b, U+71a0, U+71a2, U+71a8, U+71ac, U+71ae-71b0, U+71b2-71b3, U+71b9-71ba, U+71be-71c1, U+71c4, U+71c9, U+71cb-71cc, U+71ce, U+71d0, U+71d2-71d4, U+71d6-71d7, U+71d9-71da, U+71dc, U+71df-71e0, U+71e6-71e7, U+71ec-71ee, U+71f4-71f5, U+71f8-71f9, U+71fc, U+71fe-7200, U+7207-7209, U+720d, U+7210, U+7213, U+7215, U+7217, U+721a, U+721d, U+721f, U+7224, U+7228, U+722b, U+722d, U+722f-7230, U+7232, U+7234, U+7238-7239, U+723b-723c, U+723e-7243, U+7245-7246, U+724b, U+724e-7250, U+7252-7253, U+7255-7258, U+725a, U+725c, U+725e, U+7260, U+7263, U+7268, U+726b, U+726e-726f, U+7271, U+7274, U+7277-7278, U+727b-727c, U+727e-7282, U+7284, U+7287, U+7289, U+728d-728e, U+7292-7293, U+7296, U+729b, U+72a2, U+72a7-72a8, U+72ad-72ae, U+72b0-72b2, U+72b4, U+72b9, U+72be, U+72c0-72c1, U+72c3-72c4, U+72c6-72c7, U+72c9, U+72cc, U+72ce, U+72d2, U+72d5-72d6, U+72d8, U+72df-72e2, U+72e5, U+72f3-72f4, U+72f7, U+72f9-72fb, U+72fd-72fe, U+7302, U+7304-7305, U+7307, U+730a-730b, U+730d, U+7312-7313, U+7316-7319, U+731c-731e, U+7322, U+7324, U+7327-7329, U+732c, U+732f, U+7331-7337, U+7339-733b, U+733d-733e, U+7343, U+734d-7350, U+7352, U+7356-7358, U+735d-7360, U+7366-736b;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-7d85bccd.woff2) format('woff2');\n  unicode-range: U+6f58-6f5b, U+6f5d-6f5e, U+6f60-6f62, U+6f66, U+6f68, U+6f6c-6f6d, U+6f6f, U+6f74, U+6f78, U+6f7a, U+6f7c-6f7e, U+6f80, U+6f82-6f83, U+6f86-6f88, U+6f8b-6f8e, U+6f90-6f94, U+6f96-6f98, U+6f9a, U+6f9d, U+6f9f-6fa1, U+6fa3, U+6fa5-6fa8, U+6fae-6fb1, U+6fb3, U+6fb5-6fb7, U+6fb9, U+6fbc, U+6fbe, U+6fc2, U+6fc5-6fca, U+6fd4-6fd5, U+6fd8, U+6fda-6fdb, U+6fde-6fe0, U+6fe4, U+6fe8-6fe9, U+6feb-6fec, U+6fee, U+6ff0, U+6ff3, U+6ff5-6ff6, U+6ff9-6ffa, U+6ffc-6ffe, U+7000-7001, U+7005-7007, U+7009-700b, U+700d, U+700f, U+7011, U+7015, U+7017-7018, U+701a-701b, U+701d-7020, U+7023, U+7026, U+7028, U+702f-7030, U+7032, U+7034, U+7037, U+7039-703a, U+703c, U+703e, U+7043-7044, U+7047-704c, U+704e, U+7051, U+7054-7055, U+705d-705e, U+7064-7065, U+7069, U+706c, U+706e, U+7075-7076, U+707e, U+7081, U+7085-7086, U+7094-7098, U+709b, U+709f, U+70a4, U+70ab-70ac, U+70ae-70b1, U+70b3-70b4, U+70b7, U+70bb, U+70ca-70cb, U+70d1, U+70d3-70d6, U+70d8-70d9, U+70dc-70dd, U+70df, U+70e4, U+70ec, U+70f1, U+70fa, U+70fd, U+7103-7108, U+710b-710c, U+710f, U+7114, U+7119, U+711c, U+711e, U+7120, U+712b, U+712d-7131, U+7138, U+7141, U+7145-7147, U+7149-714b, U+7150-7153, U+7155-7157, U+715a, U+715c, U+715e, U+7160, U+7162, U+7164-7165;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-d83f874c.woff2) format('woff2');\n  unicode-range: U+6d7c, U+6d80-6d82, U+6d85, U+6d87, U+6d89-6d8a, U+6d8c-6d8e, U+6d91-6d98, U+6d9c, U+6daa-6dac, U+6dae, U+6db4-6db5, U+6db7-6db9, U+6dbd, U+6dbf, U+6dc2, U+6dc4-6dc8, U+6dca, U+6dcc, U+6dce-6dd0, U+6dd2, U+6dd5-6dd6, U+6dd8-6ddb, U+6ddd-6de0, U+6de2, U+6de4-6de6, U+6de8-6dea, U+6dec, U+6dee-6df0, U+6df2, U+6df4, U+6df6, U+6df8-6dfa, U+6dfc, U+6e00, U+6e04, U+6e0a, U+6e17, U+6e19, U+6e1d-6e20, U+6e22-6e25, U+6e27, U+6e2b, U+6e2d-6e2e, U+6e32, U+6e34, U+6e36, U+6e38-6e3c, U+6e42-6e45, U+6e48-6e49, U+6e4b-6e4f, U+6e51-6e54, U+6e57, U+6e5b-6e5f, U+6e62-6e63, U+6e68, U+6e6b, U+6e6e, U+6e72-6e73, U+6e76, U+6e7b, U+6e7d, U+6e82, U+6e89, U+6e8c-6e8d, U+6e8f, U+6e93, U+6e98-6e99, U+6e9f-6ea0, U+6ea5, U+6ea7, U+6eaa-6eab, U+6ead-6eaf, U+6eb1-6eb4, U+6eb7, U+6ebb-6ebd, U+6ebf-6ec4, U+6ec7-6eca, U+6ecc-6ecf, U+6ed3-6ed5, U+6ed9-6edb, U+6ee6, U+6eeb-6eef, U+6ef7-6ef9, U+6efb, U+6efd-6eff, U+6f04, U+6f08-6f0a, U+6f0c-6f0d, U+6f10-6f11, U+6f13, U+6f15-6f16, U+6f18, U+6f1a-6f1b, U+6f25-6f26, U+6f29-6f2a, U+6f2d, U+6f2f-6f33, U+6f35-6f36, U+6f38, U+6f3b-6f3c, U+6f3e-6f3f, U+6f41, U+6f45, U+6f4f, U+6f51-6f53, U+6f57;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-9e86e158.woff2) format('woff2');\n  unicode-range: U+6b85, U+6b89, U+6b8d, U+6b95, U+6b97-6b98, U+6b9b, U+6b9e-6ba0, U+6ba2-6ba4, U+6ba8-6bb3, U+6bb7-6bb9, U+6bbc-6bbe, U+6bc0, U+6bc3-6bc4, U+6bc6-6bc9, U+6bcb-6bcc, U+6bcf, U+6bd3, U+6bd6-6bd8, U+6bda, U+6bdf, U+6be1, U+6be3, U+6be6-6be7, U+6beb-6bec, U+6bee, U+6bf1, U+6bf3, U+6bf7, U+6bf9, U+6bff, U+6c02, U+6c04-6c05, U+6c08-6c0a, U+6c0d-6c0e, U+6c10, U+6c12-6c14, U+6c19, U+6c1b, U+6c1f, U+6c24, U+6c26-6c28, U+6c2c, U+6c2e, U+6c33, U+6c35-6c36, U+6c3a-6c3b, U+6c3e-6c40, U+6c4a-6c4b, U+6c4d, U+6c4f, U+6c52, U+6c54-6c55, U+6c59, U+6c5b-6c5e, U+6c62, U+6c67-6c68, U+6c6a-6c6b, U+6c6d, U+6c6f, U+6c73-6c74, U+6c76, U+6c78-6c79, U+6c7b, U+6c7e, U+6c81-6c87, U+6c89, U+6c8c-6c8d, U+6c90, U+6c92-6c95, U+6c97-6c98, U+6c9a-6c9c, U+6c9f, U+6caa-6cae, U+6cb0-6cb2, U+6cb4, U+6cba, U+6cbd-6cbe, U+6cc2, U+6cc5-6cc6, U+6ccd, U+6ccf-6cd4, U+6cd6-6cd7, U+6cd9-6cdd, U+6ce0, U+6ce7, U+6ce9-6cef, U+6cf1-6cf2, U+6cf4, U+6cfb, U+6d00-6d01, U+6d04, U+6d07, U+6d0a, U+6d0c, U+6d0e-6d0f, U+6d11, U+6d13, U+6d19-6d1a, U+6d1f, U+6d24, U+6d26-6d28, U+6d2b, U+6d2e-6d2f, U+6d31, U+6d33-6d36, U+6d38-6d39, U+6d3c-6d3d, U+6d3f, U+6d57-6d5b, U+6d5e-6d61, U+6d64-6d65, U+6d67, U+6d6c, U+6d6f-6d70, U+6d79;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-c8300d61.woff2) format('woff2');\n  unicode-range: U+69dd-69de, U+69e2-69e3, U+69e5, U+69e7-69eb, U+69ed-69ef, U+69f1-69f6, U+69f9, U+69fe-6a01, U+6a03, U+6a05, U+6a0a, U+6a0c, U+6a0f, U+6a11-6a15, U+6a17, U+6a1a-6a1b, U+6a1d-6a20, U+6a22-6a24, U+6a28, U+6a2e, U+6a30, U+6a32-6a38, U+6a3b, U+6a3e-6a3f, U+6a44-6a4a, U+6a4e, U+6a50-6a52, U+6a54-6a56, U+6a5b, U+6a61-6a62, U+6a64, U+6a66-6a67, U+6a6a-6a6b, U+6a71-6a73, U+6a78, U+6a7a, U+6a7e-6a7f, U+6a81, U+6a83-6a84, U+6a86-6a87, U+6a89, U+6a8b, U+6a8d, U+6a90-6a91, U+6a94, U+6a97, U+6a9b, U+6a9d-6aa3, U+6aa5, U+6aaa-6aac, U+6aae-6ab1, U+6ab3-6ab4, U+6ab8, U+6abb, U+6abd-6abf, U+6ac1-6ac3, U+6ac6, U+6ac8-6ac9, U+6acc, U+6ad0-6ad1, U+6ad3-6ad6, U+6ada-6adf, U+6ae2, U+6ae4, U+6ae7-6ae8, U+6aea, U+6aec, U+6af0-6af3, U+6af8, U+6afa, U+6afc-6afd, U+6b02-6b03, U+6b06-6b07, U+6b09-6b0b, U+6b0f-6b12, U+6b16-6b17, U+6b1b, U+6b1d-6b1f, U+6b23-6b24, U+6b28, U+6b2b-6b2c, U+6b2f, U+6b35-6b39, U+6b3b, U+6b3d, U+6b3f, U+6b43, U+6b46-6b47, U+6b49-6b4a, U+6b4d-6b4e, U+6b50, U+6b52, U+6b54, U+6b56, U+6b58-6b59, U+6b5b, U+6b5d, U+6b5f-6b61, U+6b65, U+6b67, U+6b6b-6b6c, U+6b6e, U+6b70, U+6b72, U+6b75, U+6b77-6b7a, U+6b7d-6b84;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-4beb8009.woff2) format('woff2');\n  unicode-range: U+6855, U+6857-6859, U+685b, U+685d, U+685f, U+6863, U+6867, U+686b, U+686e-6872, U+6874-6875, U+6877, U+6879-687c, U+687e-687f, U+6882-6884, U+6886, U+6888, U+688d-6890, U+6894, U+6896, U+6898-689c, U+689f-68a3, U+68a5-68a7, U+68a9-68ab, U+68ad-68af, U+68b2-68b5, U+68b9-68bc, U+68c3, U+68c5-68c6, U+68c8-68ca, U+68cc-68cd, U+68cf-68d1, U+68d3-68d9, U+68dc-68dd, U+68e0-68e1, U+68e3-68e5, U+68e7-68e8, U+68ea-68ed, U+68ef-68f1, U+68f5-68f7, U+68f9, U+68fb-68fd, U+6900-6901, U+6903-6904, U+6906-690c, U+690f-6911, U+6913, U+6916-6917, U+6919-691b, U+6921-6923, U+6925-6926, U+6928, U+692a, U+6930-6931, U+6933-6936, U+6938-6939, U+693b, U+693d, U+6942, U+6945-6946, U+6949, U+694e, U+6954, U+6957, U+6959, U+695b-695e, U+6961-6966, U+6968-696c, U+696e-6974, U+6977-697b, U+697e-6981, U+6986, U+698d, U+6991-6992, U+6994-6996, U+6998, U+699c, U+69a0-69a1, U+69a5-69a8, U+69ab, U+69ad, U+69af-69b2, U+69b4, U+69b7-69b8, U+69ba-69bc, U+69be-69c1, U+69c3, U+69c5, U+69c7-69c8, U+69ca, U+69ce-69d1, U+69d3, U+69d6-69d7, U+69d9;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-846637bb.woff2) format('woff2');\n  unicode-range: U+667e-6680, U+6683-6684, U+6688, U+668b-668e, U+6690, U+6692, U+6698-669d, U+669f-66a0, U+66a2, U+66a4, U+66ad, U+66b1-66b3, U+66b5, U+66b8-66b9, U+66bb-66bc, U+66be-66c4, U+66c6, U+66c8-66c9, U+66cc, U+66ce-66cf, U+66d4, U+66da-66db, U+66dd, U+66df-66e0, U+66e6, U+66e8-66e9, U+66eb-66ec, U+66ee, U+66f5, U+66f7, U+66fa-66fc, U+6701, U+6705, U+6707, U+670c, U+670e-6710, U+6712-6716, U+6719, U+671c, U+671e, U+6720, U+6722, U+6725-6726, U+672e, U+6733, U+6735-6738, U+673e-673f, U+6741, U+6743, U+6745-6748, U+674c-674d, U+6753-6755, U+6759, U+675d-675e, U+6760, U+6762-6764, U+6766, U+676a, U+676c, U+676e, U+6770, U+6772-6774, U+6776-6777, U+677b-677c, U+6780-6781, U+6784-6785, U+6787, U+6789, U+678b-678c, U+678e-678f, U+6791-6793, U+6796, U+6798-6799, U+679b, U+67a1, U+67a4, U+67a6, U+67a9, U+67b0-67b5, U+67b7-67b9, U+67bb-67be, U+67c0-67c3, U+67c5-67c6, U+67c8-67c9, U+67ce, U+67d2, U+67d7-67d9, U+67db-67de, U+67e1-67e2, U+67e4, U+67e6-67e7, U+67e9, U+67ec, U+67ee-67f0, U+67f2, U+67f6-67f7, U+67f9-67fa, U+67fc, U+67fe, U+6801-6802, U+6805, U+6810, U+6814, U+6818-6819, U+681d, U+681f, U+6822, U+6827-6829, U+682b-682d, U+682f-6834, U+683b, U+683e-6840, U+6844-6846, U+6849-684a, U+684c-684e, U+6852-6854;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-dbe2b05f.woff2) format('woff2');\n  unicode-range: U+64d2, U+64d4-64d5, U+64d7-64d8, U+64da, U+64e0-64e1, U+64e3-64e5, U+64e7, U+64e9-64ea, U+64ed, U+64ef-64f2, U+64f4-64f7, U+64fa-64fb, U+64fd-6501, U+6504-6505, U+6508-650a, U+650f, U+6513-6514, U+6516, U+6518-6519, U+651b-651f, U+6522, U+6524, U+6526, U+6529-652c, U+652e, U+6531-6532, U+6534-6538, U+653a, U+653c-653d, U+6543-6544, U+6547-6549, U+654d-654e, U+6550, U+6552, U+6554-6556, U+6558, U+655d-6560, U+6567, U+656b, U+6572, U+6578, U+657a, U+657d, U+6581-6585, U+6588, U+658a, U+658c, U+6592, U+6595, U+6598, U+659b, U+659d, U+659f-65a1, U+65a3-65a6, U+65ab, U+65ae, U+65b2-65b5, U+65b7-65b8, U+65be-65bf, U+65c1-65c4, U+65c6, U+65c8-65c9, U+65cc, U+65ce, U+65d0, U+65d2, U+65d4, U+65d6, U+65d8-65d9, U+65db, U+65df-65e1, U+65e3, U+65f0-65f2, U+65f4-65f5, U+65f9, U+65fb-65fc, U+65fe-6600, U+6603-6604, U+6608-660a, U+660d, U+6611-6612, U+6615-6616, U+661c-661e, U+6621-6624, U+6626, U+6629-662c, U+662e, U+6630-6631, U+6633-6637, U+6639-663b, U+663f-6641, U+6644-6646, U+6648-664a, U+664c, U+664e-664f, U+6651, U+6657-6665, U+6667-6668, U+666a-666d, U+6670, U+6673, U+6675, U+6677-6679, U+667b-667c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-8b49bc58.woff2) format('woff2');\n  unicode-range: U+62cf, U+62d1, U+62d4-62d6, U+62da, U+62dc, U+62ea, U+62ee-62ef, U+62f1-62f2, U+62f4-62f5, U+62fc-62fd, U+62ff, U+6302-6304, U+6308-630d, U+6310, U+6313, U+6316, U+6318, U+631b, U+6327, U+6329-632a, U+632d, U+6332, U+6335-6336, U+6339-633c, U+633e, U+6341-6344, U+6346, U+634a-634e, U+6350, U+6352-6354, U+6358-6359, U+635b, U+6365-6366, U+6369, U+636b-636d, U+6371-6372, U+6374-6378, U+637a, U+637c-637d, U+637f-6380, U+6382, U+6384, U+6387, U+6389-638a, U+638e-6390, U+6394-6396, U+6399-639a, U+639e, U+63a0, U+63a3-63a4, U+63a6, U+63a9, U+63ab-63af, U+63b5, U+63bd-63be, U+63c0-63c1, U+63c4-63c6, U+63c8, U+63ce, U+63d1-63d6, U+63dc, U+63e0, U+63e3, U+63e5, U+63e9-63ed, U+63f2-63f3, U+63f5-63f9, U+6406, U+6409-640a, U+640f-6410, U+6412-6414, U+6416-6418, U+641e, U+6420, U+6422, U+6424-6426, U+6428-642a, U+642f-6430, U+6434-6436, U+643d, U+643f, U+644b, U+644e-644f, U+6451-6454, U+645a-645d, U+645f-6461, U+6463, U+6467, U+646d, U+6473-6474, U+6476, U+6478-6479, U+647b, U+647d, U+6485, U+6487-6488, U+648f-6491, U+6493, U+6495, U+6498-649b, U+649d-649f, U+64a1, U+64a3, U+64a6, U+64a8-64a9, U+64ac, U+64b3, U+64bb-64bf, U+64c2, U+64c4-64c5, U+64c7, U+64c9-64cc, U+64ce, U+64d0-64d1;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-6d3a1245.woff2) format('woff2');\n  unicode-range: U+6117, U+6119, U+611c, U+611e, U+6120-6122, U+6127-6128, U+612a-612c, U+6130-6131, U+6134-6137, U+6139-613a, U+613c-613f, U+6141-6142, U+6144-6147, U+6149-614a, U+614d, U+6153, U+6158-615a, U+615d-6160, U+6164-6165, U+616b-616c, U+616f, U+6171-6175, U+6177-6178, U+617b-6181, U+6183-6184, U+6187, U+618a-618b, U+618d, U+6192-6194, U+6196-619a, U+619c-619d, U+619f-61a0, U+61a5, U+61a8, U+61aa-61ae, U+61b8-61ba, U+61bc, U+61be, U+61c0-61c3, U+61c6, U+61c8, U+61ca-61cf, U+61d5, U+61dc-61df, U+61e1-61e3, U+61e5-61e9, U+61ec-61ed, U+61ef, U+61f4-61f7, U+61fa, U+61fc-6201, U+6203-6204, U+6207-620a, U+620d-620e, U+6213-6215, U+621b-621e, U+6220-6223, U+6227, U+6229-622b, U+622e, U+6230-6233, U+6236, U+6239, U+623d-623e, U+6241-6244, U+6246, U+6248, U+624c, U+624e, U+6250-6252, U+6254, U+6256, U+6258, U+625a-625c, U+625e, U+6260-6261, U+6263-6264, U+6268, U+626d, U+626f, U+6273, U+627a-627e, U+6282-6283, U+6285, U+6289, U+628d-6290, U+6292-6294, U+6296, U+6299, U+629b, U+62a6, U+62a8, U+62ac, U+62b3, U+62b6-62b7, U+62ba-62bb, U+62be-62bf, U+62c2, U+62c4, U+62c6-62c8, U+62ca, U+62ce;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-1e442b80.woff2) format('woff2');\n  unicode-range: U+5f6c-5f6d, U+5f6f, U+5f72-5f75, U+5f78, U+5f7a, U+5f7d-5f7f, U+5f82-5f83, U+5f87-5f89, U+5f8d, U+5f8f, U+5f91, U+5f96, U+5f99, U+5f9c-5f9d, U+5fa0, U+5fa2, U+5fa4, U+5fa7-5fa8, U+5fab-5fad, U+5faf-5fb1, U+5fb5, U+5fb7-5fb8, U+5fbc-5fbd, U+5fc4, U+5fc7-5fc9, U+5fcb, U+5fd0-5fd4, U+5fdd-5fde, U+5fe1-5fe2, U+5fe4, U+5fe8-5fea, U+5fec-5ff3, U+5ff6, U+5ff8, U+5ffa-5ffd, U+5fff, U+6007, U+600a, U+600d-6010, U+6013-6015, U+6017-601b, U+601f, U+6021-6022, U+6024, U+6026, U+6029, U+602b, U+602d, U+6031, U+6033, U+6035, U+603a, U+6040-6043, U+6046-604a, U+604c-604d, U+6051, U+6054-6057, U+6059-605a, U+605d, U+605f-6064, U+6067, U+606a-606c, U+6070-6071, U+6077, U+607e-607f, U+6081-6086, U+6088-608e, U+6091-6093, U+6095-6098, U+609a-609b, U+609d-609e, U+60a2, U+60a4-60a5, U+60a7-60a8, U+60b0-60b1, U+60b3-60b5, U+60b7-60b8, U+60bb, U+60bd-60be, U+60c2, U+60c4, U+60c6-60cb, U+60ce-60cf, U+60d3-60d5, U+60d8-60d9, U+60db, U+60dd-60df, U+60e1-60e2, U+60e5, U+60ee, U+60f0-60f2, U+60f4-60f8, U+60fa-60fd, U+6100, U+6102-6103, U+6106-6108, U+610a, U+610c-610e, U+6110-6114, U+6116;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-5820c21d.woff2) format('woff2');\n  unicode-range: U+5d9b, U+5d9d, U+5d9f-5da0, U+5da2, U+5da4, U+5da7, U+5dab-5dac, U+5dae, U+5db0, U+5db2, U+5db4, U+5db7-5db9, U+5dbc-5dbd, U+5dc3, U+5dc7, U+5dc9, U+5dcb-5dce, U+5dd0-5dd3, U+5dd6-5dd9, U+5ddb, U+5de0, U+5de2, U+5de4, U+5de9, U+5df2, U+5df5, U+5df8-5df9, U+5dfd, U+5dff-5e00, U+5e07, U+5e0b, U+5e0d, U+5e11-5e12, U+5e14-5e15, U+5e18-5e1b, U+5e1f-5e20, U+5e25, U+5e28, U+5e2e, U+5e32, U+5e35-5e37, U+5e3e, U+5e40, U+5e43-5e44, U+5e47, U+5e49, U+5e4b, U+5e4e, U+5e50-5e51, U+5e54, U+5e56-5e58, U+5e5b-5e5c, U+5e5e-5e5f, U+5e62, U+5e64, U+5e68, U+5e6a-5e6e, U+5e70, U+5e75-5e77, U+5e7a, U+5e7f-5e80, U+5e87, U+5e8b, U+5e8e, U+5e96, U+5e99-5e9a, U+5ea0, U+5ea2, U+5ea4-5ea5, U+5ea8, U+5eaa, U+5eac, U+5eb1, U+5eb3, U+5eb8-5eb9, U+5ebd-5ebf, U+5ec1-5ec2, U+5ec6, U+5ec8, U+5ecb-5ecc, U+5ece-5ed6, U+5ed9-5ee2, U+5ee5, U+5ee8-5ee9, U+5eeb-5eec, U+5ef0-5ef1, U+5ef3-5ef4, U+5ef8-5ef9, U+5efc-5f00, U+5f02-5f03, U+5f06-5f09, U+5f0b-5f0e, U+5f11, U+5f16-5f17, U+5f19, U+5f1b-5f1e, U+5f21-5f24, U+5f27-5f29, U+5f2b-5f30, U+5f34, U+5f36, U+5f38, U+5f3a-5f3d, U+5f3f-5f41, U+5f44-5f45, U+5f47-5f48, U+5f4a, U+5f4c-5f4e, U+5f50-5f51, U+5f54, U+5f56-5f58, U+5f5b-5f5d, U+5f60, U+5f63-5f65, U+5f67, U+5f6a;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-10e413f3.woff2) format('woff2');\n  unicode-range: U+5bbc, U+5bc0-5bc1, U+5bc3, U+5bc7, U+5bc9, U+5bcd-5bd0, U+5bd3-5bd4, U+5bd6-5bda, U+5bde, U+5be0-5be2, U+5be4-5be6, U+5be8, U+5beb-5bec, U+5bef-5bf1, U+5bf3-5bf6, U+5bfd, U+5c03, U+5c05, U+5c07-5c09, U+5c0c-5c0d, U+5c12-5c14, U+5c17, U+5c19, U+5c1e-5c20, U+5c22-5c24, U+5c26, U+5c28-5c2e, U+5c30, U+5c32, U+5c35-5c36, U+5c38-5c39, U+5c46, U+5c4d-5c50, U+5c53, U+5c59-5c5c, U+5c5f-5c63, U+5c67-5c69, U+5c6c-5c70, U+5c74-5c76, U+5c79-5c7d, U+5c87-5c88, U+5c8a, U+5c8c, U+5c8f, U+5c91-5c92, U+5c94, U+5c9d, U+5c9f-5ca0, U+5ca2-5ca3, U+5ca6-5ca8, U+5caa-5cab, U+5cad, U+5cb1-5cb2, U+5cb4-5cb7, U+5cba-5cbc, U+5cbe, U+5cc5, U+5cc7, U+5cc9, U+5ccb, U+5cd0, U+5cd2, U+5cd7, U+5cd9, U+5cdd, U+5ce6, U+5ce8-5cea, U+5ced-5cee, U+5cf1-5cf2, U+5cf4-5cf5, U+5cfa-5cfb, U+5cfd, U+5d01, U+5d06, U+5d0b, U+5d0d, U+5d10-5d12, U+5d14-5d15, U+5d17-5d1b, U+5d1d, U+5d1f-5d20, U+5d22-5d24, U+5d26-5d27, U+5d2b, U+5d31, U+5d34, U+5d39, U+5d3d, U+5d3f, U+5d42-5d43, U+5d46-5d48, U+5d4a-5d4b, U+5d4e, U+5d51-5d53, U+5d55, U+5d59, U+5d5c, U+5d5f-5d62, U+5d64, U+5d69-5d6a, U+5d6c-5d6d, U+5d6f-5d70, U+5d73, U+5d76, U+5d79-5d7a, U+5d7e-5d7f, U+5d81-5d84, U+5d87-5d88, U+5d8a, U+5d8c, U+5d90, U+5d92-5d95, U+5d97, U+5d99;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-8e3adf1b.woff2) format('woff2');\n  unicode-range: U+598b-598e, U+5992, U+5995, U+5997, U+599b, U+599d, U+599f, U+59a3-59a4, U+59a7, U+59ad-59b0, U+59b2-59b3, U+59b7, U+59ba, U+59bc, U+59be, U+59c1, U+59c3-59c4, U+59c6, U+59c8, U+59ca, U+59cd, U+59d2, U+59d9-59da, U+59dd-59df, U+59e3-59e5, U+59e7-59e8, U+59ec, U+59ee-59ef, U+59f1-59f2, U+59f4, U+59f6-59f8, U+5a00, U+5a03-5a04, U+5a09, U+5a0c-5a0e, U+5a11-5a13, U+5a17, U+5a1a-5a1c, U+5a1e-5a1f, U+5a23-5a25, U+5a27-5a28, U+5a2a, U+5a2d, U+5a30, U+5a35-5a36, U+5a40-5a41, U+5a44-5a45, U+5a47-5a49, U+5a4c, U+5a50, U+5a55, U+5a5e, U+5a62-5a63, U+5a65, U+5a67, U+5a6a, U+5a6c-5a6d, U+5a77, U+5a7a-5a7b, U+5a7e, U+5a84, U+5a8b, U+5a90, U+5a93, U+5a96, U+5a99, U+5a9c, U+5a9e-5aa0, U+5aa2, U+5aa7, U+5aac, U+5ab1-5ab3, U+5ab5, U+5ab8, U+5aba-5abf, U+5ac2, U+5ac4, U+5ac6, U+5ac8, U+5acb, U+5acf-5ad0, U+5ad6-5ad7, U+5ada, U+5adc, U+5ae0-5ae1, U+5ae3, U+5ae5-5ae6, U+5ae9-5aea, U+5aee, U+5af0, U+5af5-5af6, U+5afa-5afb, U+5afd, U+5b00-5b01, U+5b08, U+5b0b, U+5b16-5b17, U+5b19, U+5b1b, U+5b1d, U+5b21, U+5b25, U+5b2a, U+5b2c-5b2d, U+5b30, U+5b32, U+5b34, U+5b36, U+5b38, U+5b3e, U+5b40-5b41, U+5b43, U+5b45, U+5b4b-5b4c, U+5b51-5b52, U+5b56, U+5b5a-5b5c, U+5b5e-5b5f, U+5b65, U+5b68-5b69, U+5b6e-5b71, U+5b73, U+5b75-5b76, U+5b7a, U+5b7c-5b84, U+5b86, U+5b8a-5b8b, U+5b8d-5b8e, U+5b90-5b91, U+5b93-5b94, U+5b96, U+5ba5-5ba6, U+5ba8-5ba9, U+5bac-5bad, U+5baf, U+5bb1-5bb2, U+5bb7-5bb8, U+5bba;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-fefb9389.woff2) format('woff2');\n  unicode-range: U+57b3, U+57b8, U+57bd, U+57c0, U+57c3, U+57c6-57c8, U+57cc, U+57cf, U+57d2-57d7, U+57dc-57de, U+57e0-57e1, U+57e3-57e4, U+57e6-57e7, U+57e9, U+57ed, U+57f0, U+57f4-57f6, U+57f8, U+57fb, U+57fd-57ff, U+5803-5804, U+5808-580d, U+5819, U+581b, U+581d-5821, U+5826-5827, U+582d, U+582f-5830, U+5832, U+5835, U+5839, U+583d, U+583f-5840, U+5849, U+584b-584d, U+584f-5852, U+5855, U+5858-5859, U+585f, U+5861-5862, U+5864, U+5867-5868, U+586d, U+5870, U+5872, U+5878-5879, U+587c, U+587f-5881, U+5885, U+5887-588d, U+588f-5890, U+5894, U+5896, U+5898, U+589d-589e, U+58a0-58a2, U+58a6, U+58a9-58ab, U+58ae, U+58b1-58b3, U+58b8-58bc, U+58be, U+58c2-58c5, U+58c8, U+58cd-58ce, U+58d0-58da, U+58dc-58e2, U+58e4-58e5, U+58e9, U+58ec, U+58ef, U+58f3-58f4, U+58f7, U+58f9, U+58fb-58fd, U+5902, U+5905-5906, U+590a-590d, U+5910, U+5912-5914, U+5918-5919, U+591b, U+591d, U+591f, U+5921, U+5923-5925, U+5928, U+592c-592d, U+592f-5930, U+5932-5933, U+5935-5936, U+5938-5939, U+593d-593f, U+5943, U+5946, U+594e, U+5950, U+5952-5953, U+5955, U+5957-595b, U+595d-5961, U+5963, U+5967, U+5969, U+596b-596d, U+596f, U+5972, U+5975-5976, U+5978-5979, U+597b-597c, U+5981;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-b75205f1.woff2) format('woff2');\n  unicode-range: U+5616-5617, U+5619, U+561b, U+5620, U+5628, U+562c, U+562f-5639, U+563b-563d, U+563f-5641, U+5643-5644, U+5646-5647, U+5649, U+564b, U+564d-5650, U+5653-5654, U+565e, U+5660-5664, U+5666, U+5669-566d, U+566f, U+5671-5672, U+5675-5676, U+5678, U+567a, U+5680, U+5684-5688, U+568a-568c, U+568f, U+5694-5695, U+5699-569a, U+569d-56a0, U+56a5-56a9, U+56ab-56ae, U+56b1-56b4, U+56b6-56b7, U+56bc, U+56be, U+56c0, U+56c2-56c3, U+56c5, U+56c8-56d1, U+56d3, U+56d7-56d9, U+56dc-56dd, U+56df, U+56e1, U+56e4-56e8, U+56eb, U+56ed-56ee, U+56f1, U+56f6-56f7, U+56f9, U+56ff-5704, U+5707-570a, U+570c-570d, U+5711, U+5713, U+5715-5716, U+5718, U+571a-571d, U+5720-5726, U+5729-572a, U+572c, U+572e-572f, U+5733-5734, U+5737-5738, U+573b, U+573d-573f, U+5745-5746, U+574c-574f, U+5751-5752, U+5759, U+575f, U+5761-5762, U+5764-5765, U+5767-5769, U+576b, U+576d-5771, U+5773-5775, U+5777, U+5779-577c, U+577e-577f, U+5781, U+5783, U+5788-5789, U+578c, U+5793-5795, U+5797, U+5799-579a, U+579c-57a1, U+57a4, U+57a7-57aa, U+57ac, U+57ae, U+57b0;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-7552a5f4.woff2) format('woff2');\n  unicode-range: U+543f-5440, U+5443-5444, U+5447, U+544c-544f, U+5455, U+545e, U+5462, U+5464, U+5466-5467, U+5469, U+546b-546e, U+5470-5471, U+5474-5477, U+547b, U+547f-5481, U+5483-5486, U+5488-548b, U+548d-5492, U+5495-5496, U+549c, U+549f-54a2, U+54a4, U+54a6-54af, U+54b1, U+54b7-54bc, U+54be-54bf, U+54c2-54c4, U+54c6-54c8, U+54ca, U+54cd-54ce, U+54d8, U+54e0, U+54e2, U+54e5-54e6, U+54e8-54ea, U+54ec-54ef, U+54f1, U+54f3, U+54f6, U+54fc-5501, U+5505, U+5508-5509, U+550c-550f, U+5514-5516, U+5527, U+552a-552b, U+552e, U+5532-5533, U+5535-5536, U+5538-5539, U+553b-553d, U+5540-5541, U+5544-5545, U+5547, U+5549-554a, U+554c-554d, U+5550-5551, U+5556-5558, U+555a-555e, U+5560-5561, U+5563-5564, U+5566, U+557b-5583, U+5586-5588, U+558a, U+558e-558f, U+5591-5594, U+5597, U+5599, U+559e-559f, U+55a3-55a4, U+55a8-55a9, U+55ac-55ae, U+55b2, U+55bf, U+55c1, U+55c3-55c4, U+55c6-55c7, U+55c9, U+55cb-55cc, U+55ce, U+55d1-55d4, U+55d7-55d8, U+55da-55db, U+55dd-55df, U+55e2, U+55e4, U+55e9, U+55ec, U+55ee, U+55f1, U+55f6-55f9, U+55fd-55ff, U+5605, U+5607-5608, U+560a, U+560d-5612;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-8284641a.woff2) format('woff2');\n  unicode-range: U+528d, U+5291-5298, U+529a, U+529c, U+52a4-52a7, U+52ab-52ad, U+52af-52b0, U+52b5-52b8, U+52ba-52be, U+52c0-52c1, U+52c4-52c6, U+52c8, U+52ca, U+52cc-52cd, U+52cf-52d2, U+52d4, U+52d6-52d7, U+52db-52dc, U+52de, U+52e0-52e1, U+52e3, U+52e5-52e6, U+52e8-52ea, U+52ec, U+52f0-52f1, U+52f3-52fb, U+5300-5301, U+5303, U+5306-5308, U+530a-530d, U+530f-5311, U+5313, U+5315, U+5318-531f, U+5321, U+5323-5325, U+5327-532d, U+532f-5333, U+5335, U+5338, U+533c-533e, U+5340, U+5342, U+5345-5346, U+5349, U+534b-534c, U+5359, U+535b, U+535e, U+5361, U+5363-5367, U+5369, U+536c-536e, U+5372, U+5377, U+5379-537b, U+537d-537f, U+5382-5383, U+5387-5389, U+538e, U+5393-5394, U+5396, U+5398-5399, U+539d, U+53a0-53a1, U+53a4-53a6, U+53a9-53ab, U+53ad-53b0, U+53b2, U+53b4-53b8, U+53ba, U+53bd, U+53c0-53c1, U+53c3-53c5, U+53cf, U+53d2-53d3, U+53d5, U+53da-53db, U+53dd-53e0, U+53e2, U+53e6-53e8, U+53ed-53ee, U+53f4-53f5, U+53fa, U+5401-5403, U+540b, U+540f, U+5412-5413, U+541a, U+541d-541e, U+5421, U+5424, U+5427-542a, U+542c-542f, U+5431, U+5433-5436, U+543c-543d;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-12dce55c.woff2) format('woff2');\n  unicode-range: U+50dd-50df, U+50e1-50e6, U+50e8-50e9, U+50ed-50f6, U+50f9-50fb, U+50fe, U+5101-5103, U+5106-5109, U+510b-510e, U+5110, U+5112, U+5114-511e, U+5121, U+5123, U+5127-5128, U+512c-512d, U+512f, U+5131, U+5133-5135, U+5137-513c, U+513f-5142, U+5147, U+514a, U+514c, U+514f, U+5152-5155, U+5157-5158, U+515f-5160, U+5162, U+5164, U+5166-5167, U+5169-516a, U+516e, U+5173-5174, U+5179, U+517b, U+517e, U+5180, U+5182-5184, U+5189, U+518b-518c, U+518e-5191, U+5193, U+5195-5196, U+5198, U+519d, U+51a1-51a4, U+51a6, U+51a9-51ab, U+51ad, U+51b0-51b3, U+51b5, U+51b8, U+51ba, U+51bc-51bf, U+51c2-51c3, U+51c5, U+51c8-51cb, U+51cf, U+51d1-51d6, U+51d8, U+51de-51e0, U+51e2, U+51e5, U+51e7, U+51e9, U+51ec-51ee, U+51f2-51f5, U+51f7, U+51fe, U+5201-5202, U+5204-5205, U+520b, U+520e, U+5212-5216, U+5218, U+5222, U+5226-5228, U+522a-522b, U+522e, U+5231-5233, U+5235, U+523c, U+5244-5245, U+5249, U+524b-524c, U+524f, U+5254-5255, U+5257-5258, U+525a, U+525c-5261, U+5266, U+5269, U+526c, U+526e, U+5271, U+5273-5274, U+5277-5279, U+527d, U+527f-5280, U+5282-5285, U+5288-528a, U+528c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-f8757d02.woff2) format('woff2');\n  unicode-range: U+4f57-4f58, U+4f5a-4f5b, U+4f5d-4f5f, U+4f63-4f64, U+4f69-4f6a, U+4f6c, U+4f6e-4f71, U+4f76-4f7e, U+4f81-4f85, U+4f88-4f8a, U+4f8c, U+4f8e-4f90, U+4f92-4f94, U+4f96-4f9a, U+4f9e-4fa0, U+4fab, U+4fad, U+4faf, U+4fb2, U+4fb7, U+4fb9, U+4fbb-4fbe, U+4fc0-4fc1, U+4fc4-4fc6, U+4fc8-4fc9, U+4fcb-4fd4, U+4fd8, U+4fda-4fdc, U+4fdf-4fe0, U+4fe2, U+4fe4-4fe6, U+4fef-4ff2, U+4ff6, U+4ffc-5002, U+5004-5007, U+500a, U+500c, U+500e-5011, U+5013-5014, U+5016-5018, U+501a-501e, U+5021-5023, U+5025-502a, U+502c-502e, U+5030, U+5032-5033, U+5035, U+5039, U+503b, U+5040-5043, U+5045-5048, U+504a, U+504c, U+504e, U+5050-5053, U+5055-5057, U+5059-505a, U+505f-5060, U+5062-5063, U+5066-5067, U+506a, U+506c-506d, U+5070-5072, U+5077-5078, U+5080-5081, U+5083-5086, U+5088, U+508a, U+508e-5090, U+5092-5096, U+509a-509c, U+509e-50a3, U+50aa, U+50ad, U+50af-50b4, U+50b9-50bb, U+50bd, U+50c0, U+50c2-50c4, U+50c7, U+50c9-50ca, U+50cc, U+50ce, U+50d0-50d1, U+50d3-50d4, U+50d6, U+50d8-50d9, U+50dc;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-5fd28a5f.woff2) format('woff2');\n  unicode-range: U+4093, U+4103, U+4105, U+4148, U+414f, U+4163, U+41b4, U+41bf, U+41e6, U+41ee, U+41f3, U+4207, U+420e, U+4264, U+4293, U+42c6, U+42d6, U+42dd, U+4302, U+432b, U+4343, U+43ee, U+43f0, U+4408, U+440c, U+4417, U+441c, U+4422, U+4453, U+445b, U+4476, U+447a, U+4491, U+44b3, U+44be, U+44d4, U+4508, U+450d, U+4525, U+4543, U+457a, U+459d, U+45b8, U+45be, U+45e5, U+45ea, U+460f-4610, U+4641, U+4665, U+46a1, U+46ae-46af, U+470c, U+471f, U+4764, U+47e6, U+47fd, U+4816, U+481e, U+4844, U+484e, U+48b5, U+49b0, U+49e7, U+49fa, U+4a04, U+4a29, U+4abc, U+4b38, U+4b3b, U+4b7e, U+4bc2, U+4bca, U+4bd2, U+4be8, U+4c17, U+4c20, U+4c38, U+4cc4, U+4cd1, U+4ce1, U+4d07, U+4d77, U+4e02, U+4e04-4e05, U+4e0c, U+4e0f-4e12, U+4e15, U+4e17, U+4e19, U+4e1e-4e1f, U+4e23-4e24, U+4e28-4e2c, U+4e2e-4e31, U+4e35-4e37, U+4e3f-4e42, U+4e44, U+4e47-4e48, U+4e4d-4e4e, U+4e51, U+4e55-4e56, U+4e58, U+4e5a-4e5c, U+4e62-4e63, U+4e68-4e69, U+4e74-4e75, U+4e79, U+4e7f, U+4e82, U+4e85, U+4e8a, U+4e8d-4e8e, U+4e96-4e99, U+4e9d-4ea0, U+4ea2, U+4ea5-4ea6, U+4ea8, U+4eaf-4eb0, U+4eb3, U+4eb6, U+4eb9, U+4ebb-4ebc, U+4ec2-4ec4, U+4ec6-4ec8, U+4ecd, U+4ed0, U+4ed7, U+4eda-4edb, U+4edd-4ee2, U+4ee8, U+4eeb, U+4eed, U+4eef, U+4ef1, U+4ef3, U+4ef5, U+4ef7, U+4efc-4f00, U+4f02-4f03, U+4f08-4f09, U+4f0b-4f0d, U+4f12, U+4f15-4f17, U+4f19, U+4f1c, U+4f2b, U+4f2e, U+4f30-4f31, U+4f33, U+4f35-4f37, U+4f39, U+4f3b, U+4f3e, U+4f40, U+4f42-4f43, U+4f48-4f49, U+4f4b-4f4c, U+4f52, U+4f54, U+4f56;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-6cd90c73.woff2) format('woff2');\n  unicode-range: U+3395-339b, U+339e-33a0, U+33a2-33ff, U+3402, U+3405-3406, U+3427, U+342c, U+342e, U+3468, U+346a, U+3488, U+3492, U+34b5, U+34bc, U+34c1, U+34c7, U+34db, U+351f, U+353e, U+355d-355e, U+3563, U+356e, U+35a6, U+35a8, U+35c5, U+35da, U+35de, U+35f4, U+3605, U+3614, U+364a, U+3691, U+3696, U+3699, U+36cf, U+3761-3762, U+376b-376c, U+3775, U+378d, U+37c1, U+37e2, U+37e8, U+37f4, U+37fd, U+3800, U+382f, U+3836, U+3840, U+385c, U+3861, U+38a1, U+38ad, U+38fa, U+3917, U+391a, U+396f, U+39a4, U+39b8, U+3a5c, U+3a6e, U+3a73, U+3a85, U+3ac4, U+3acb, U+3ad6-3ad7, U+3aea, U+3af3, U+3b0e, U+3b1a, U+3b1c, U+3b22, U+3b35, U+3b6d, U+3b77, U+3b87-3b88, U+3b8d, U+3ba4, U+3bb6, U+3bc3, U+3bcd, U+3bf0, U+3bf3, U+3c0f, U+3c26, U+3cc3, U+3cd2, U+3d11, U+3d1e, U+3d31, U+3d4e, U+3d64, U+3d9a, U+3dc0, U+3dcc, U+3dd4, U+3e05, U+3e3f-3e40, U+3e60, U+3e66, U+3e68, U+3e83, U+3e8a, U+3e94, U+3eda, U+3f57, U+3f72, U+3f75, U+3f77, U+3fae, U+3fb1, U+3fc9, U+3fd7, U+3fdc, U+4039, U+4058;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-0060ee7c.woff2) format('woff2');\n  unicode-range: U+32b5-332b, U+332d-3394;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-aa4ca917.woff2) format('woff2');\n  unicode-range: U+31c8-31e3, U+31f0-321e, U+3220-3230, U+3232-32b4;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-91cd34eb.woff2) format('woff2');\n  unicode-range: U+3028-303f, U+3094-3096, U+309f-30a0, U+30ee, U+30f7-30fa, U+30ff, U+3105-312f, U+3131-3163, U+3165-318e, U+3190-31bb, U+31c0-31c7;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-7a7fa4ea.woff2) format('woff2');\n  unicode-range: U+2f14-2fd5, U+2ff0-2ffb, U+3004, U+3013, U+3016-301b, U+301e, U+3020-3027;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-c3cee96a.woff2) format('woff2');\n  unicode-range: U+25e4-25e6, U+2601-2603, U+2609, U+260e-260f, U+2616-2617, U+261c-261f, U+262f, U+2641, U+2660, U+2662-2664, U+2666-2668, U+266d-266e, U+2672-267d, U+26bd-26be, U+2702, U+271a, U+273d, U+2740, U+2756, U+2776-2793, U+27a1, U+2934-2935, U+29bf, U+29fa-29fb, U+2b05-2b07, U+2b1a, U+2b95, U+2e3a-2e3b, U+2e80-2e99, U+2e9b-2ef3, U+2f00-2f13;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-c31b0185.woff2) format('woff2');\n  unicode-range: U+24d1-24ff, U+2503-2513, U+2515-2516, U+2518-251b, U+251d-2522, U+2524-259f, U+25a2-25ab, U+25b1, U+25b7, U+25c0-25c1, U+25c9-25ca, U+25cc, U+25d0-25d3, U+25e2-25e3;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-d13badf7.woff2) format('woff2');\n  unicode-range: U+2105, U+2109-210a, U+210f, U+2116, U+2121, U+2126-2127, U+212b, U+212e, U+2135, U+213b, U+2194-2199, U+21b8-21b9, U+21c4-21c6, U+21cb-21cc, U+21d0, U+21e6-21e9, U+21f5, U+2202-2203, U+2205-2206, U+2208-220b, U+220f, U+2211, U+2213, U+2215, U+221a, U+221d, U+2220, U+2223, U+2225-2226, U+2228, U+222a-222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+224c, U+2260, U+2262, U+2264-2265, U+226e-226f, U+2272-2273, U+2276-2277, U+2283-2287, U+228a-228b, U+2295-2299, U+22a0, U+22a5, U+22bf, U+22da-22db, U+22ef, U+2305-2307, U+2318, U+2329-232a, U+23b0-23b1, U+23be-23cc, U+23ce, U+23da-23db, U+2423, U+2469-24d0;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-7483ef7e.woff2) format('woff2');\n  unicode-range: U+a1-a4, U+a6-a7, U+aa, U+ac-ad, U+b5-b6, U+b8-ba, U+bc-c8, U+ca-cc, U+ce-d5, U+d9-db, U+dd-df, U+e6, U+ee, U+f0, U+f5, U+f7, U+f9, U+fb, U+fe-102, U+110-113, U+11a-11b, U+128-12b, U+143-144, U+147-148, U+14c, U+14e-14f, U+152-153, U+168-16d, U+192, U+1a0-1a1, U+1af, U+1cd-1dc, U+1f8-1f9, U+251, U+261, U+2bb, U+2c7, U+2c9, U+2ea-2eb, U+304, U+307, U+30c, U+1e3e-1e3f, U+1ea0-1ebe, U+1ec0-1ec6, U+1ec8-1ef9, U+2011-2012, U+2016, U+2018-201a, U+201e, U+2021, U+2030, U+2033, U+2035, U+2042, U+2047, U+2051, U+2074, U+20a9, U+20ab-20ac, U+20dd-20de, U+2100;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-b17ad419.woff2) format('woff2');\n  unicode-range: U+2227, U+26a0, U+2713, U+301f, U+4ff8, U+5239, U+526a, U+54fa, U+5740, U+5937, U+5993, U+59fb, U+5a3c, U+5c41, U+6028, U+626e, U+646f, U+647a, U+64b0, U+64e2, U+65a7, U+66fe, U+6727, U+6955, U+6bef, U+6f23, U+724c, U+767c, U+7a83, U+7ac4, U+7b67, U+8000, U+8471, U+8513, U+8599, U+86db, U+8718, U+87f2, U+88f3, U+8ad2, U+8e2a, U+8fa3, U+95a5, U+9798, U+9910, U+9957, U+9bab, U+9c3b, U+9daf, U+ff95;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-4e22e57d.woff2) format('woff2');\n  unicode-range: U+a8, U+2032, U+2261, U+2282, U+3090, U+30f1, U+339c, U+535c, U+53d9, U+56a2, U+56c1, U+5806, U+589f, U+59d0, U+5a7f, U+60e0, U+639f, U+65af, U+68fa, U+69ae, U+6d1b, U+6ef2, U+71fb, U+725d, U+7262, U+75bc, U+7768, U+7940, U+79bf, U+7bed, U+7d68, U+7dfb, U+814b, U+8207, U+83e9, U+8494, U+8526, U+8568, U+85ea, U+86d9, U+87ba, U+8861, U+887f, U+8fe6, U+9059, U+9061, U+916a, U+976d, U+97ad, U+9ece;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-46cc40ee.woff2) format('woff2');\n  unicode-range: U+2d9, U+21d4, U+301d, U+515c, U+52fe, U+5420, U+5750, U+5766, U+5954, U+5b95, U+5f8a, U+5f98, U+620c, U+621f, U+641c, U+66d9, U+676d, U+6775, U+67f5, U+694a, U+6a02, U+6a3a, U+6a80, U+6c23, U+6c72, U+6dcb, U+6faa, U+707c, U+71c8, U+7422, U+74e2, U+7791, U+7825, U+7a14, U+7a1c, U+7c95, U+7fc1, U+82a5, U+82db, U+8304, U+853d, U+8cd3, U+8de8, U+8f0c, U+8f3f, U+9091, U+91c7, U+929a, U+98af, U+9913;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-898ca73c.woff2) format('woff2');\n  unicode-range: U+2ca-2cb, U+2229, U+2468, U+2669, U+266f, U+273f, U+4ec0, U+4f60, U+4fb6, U+5347, U+540e, U+543b, U+5b0c, U+5d4c, U+5f14, U+5f9e, U+6155, U+62d0, U+6602, U+6666, U+66f3, U+67a2, U+67ca, U+69cc, U+6d29, U+6d9b, U+6e3e, U+6f81, U+7109, U+73c0, U+73c2, U+7425, U+7435-7436, U+7525, U+7554, U+785d, U+786b, U+7ae3, U+7b94, U+7d18, U+81bf, U+8511, U+8549, U+9075, U+9640, U+98e2, U+9e9f, U+ff96;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-b1d18a99.woff2) format('woff2');\n  unicode-range: U+2467, U+4ece, U+4ed4, U+4f91, U+4fae, U+534d, U+53c9, U+54b3, U+586b, U+5944, U+5b78, U+5df7, U+5f77, U+6101, U+6167-6168, U+61a4, U+62d9, U+698a, U+699b, U+6a59, U+6cc4, U+6e07, U+7099, U+75d2, U+77ad, U+7953, U+7984, U+7a92, U+7baa, U+7dbb, U+817f, U+82ad, U+85e9, U+868a, U+8caa, U+8f44, U+9017, U+907c, U+908a, U+92f3, U+936e, U+9435, U+978d, U+9838, U+9a28, U+9b41, U+9ba8, U+9c57, U+9eb9;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-ca3a544a.woff2) format('woff2');\n  unicode-range: U+b1, U+309b, U+4e5e, U+51f1, U+5506, U+55c5, U+58cc, U+59d1, U+5c51, U+5ef7, U+6284, U+62d7, U+6689, U+673d, U+6a2b, U+6a8e, U+6a9c, U+6d63, U+6dd1, U+70b8, U+7235, U+72db, U+72f8, U+7560, U+7c9b, U+7ce7, U+7e1e, U+80af, U+82eb, U+8463, U+8499, U+85dd, U+86ee, U+8a60, U+8a6e, U+8c79, U+8e87, U+8e8a, U+8f5f, U+9010, U+918d, U+9190, U+965b, U+97fb, U+9ab8, U+9bad, U+9d3b, U+9d5c, U+9dfa, U+9e93;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-5b572d86.woff2) format('woff2');\n  unicode-range: U+2020, U+3003, U+3231, U+4e9b, U+4f3d, U+4f47, U+51b6, U+51dc, U+53e1, U+5bc5, U+602f, U+60bc, U+61c9, U+633d, U+637b, U+6492, U+65fa, U+660f, U+66f0, U+6703, U+681e, U+6876, U+6893, U+6912, U+698e, U+6c7d, U+714c, U+7169, U+71d5, U+725f, U+72d7, U+745b, U+74dc, U+75e2, U+7891, U+7897, U+7dcb, U+810a, U+8218, U+8339, U+840e, U+852d, U+8823, U+8a0a, U+9089, U+919c, U+971c, U+9ad9, U+ff4a, U+ff5a;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-e55b5d10.woff2) format('woff2');\n  unicode-range: U+2466, U+2600, U+4eab, U+4fe3, U+4ff5, U+51a5, U+51f0, U+536f, U+53d4, U+53f1, U+54a5, U+559d, U+55e3, U+58fa, U+5962, U+59ea, U+5c16, U+5cef, U+5d16, U+5f10, U+5fd6, U+6190, U+6216, U+634f, U+63bb, U+66d6, U+6756, U+6bc5, U+6e26, U+727d, U+731f, U+76f2, U+7729, U+7a7f, U+7aff, U+7c9f, U+818f, U+8236, U+82b9, U+8338, U+85aa, U+88b4, U+8b33, U+904d, U+93a7, U+96cc, U+96eb, U+9aed, U+9b8e, U+fa11;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-f199c3e0.woff2) format('woff2');\n  unicode-range: U+251c, U+2523, U+4e14, U+545f, U+54bd, U+553e, U+55dc, U+56da, U+589c, U+5b55, U+5bb5, U+5ce1, U+5df4, U+5eb6, U+5ec9, U+6191, U+62f7, U+6357, U+64a5, U+6591, U+65bc, U+6897, U+6e1a, U+7063, U+711a, U+721b, U+722c, U+75b9, U+75d5, U+75fa, U+7766, U+7aae, U+7b48, U+7b8b, U+7d21, U+7e55, U+7f75, U+842c, U+8910, U+8a63, U+8b39, U+8b5a, U+8cdc, U+8d74, U+907d, U+91e7, U+9306, U+96bc, U+98f4, U+9ac4;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-70286e4f.woff2) format('woff2');\n  unicode-range: U+2003, U+2312, U+266c, U+4f86, U+51ea, U+5243, U+5256, U+541f, U+5841, U+59dc, U+5df3, U+601c, U+60e7, U+632b, U+638c, U+64ad, U+6881, U+697c, U+69cd, U+6c50, U+6d2a, U+6fc1, U+7027, U+7058, U+70f9, U+714e, U+7345, U+751a, U+760d, U+764c, U+77db, U+7d79, U+7e8f, U+80ce, U+814e, U+81fc, U+8247, U+8278, U+85a9, U+8a03, U+90ed, U+9784, U+9801, U+984e, U+99b3, U+9bc9, U+9bdb, U+9be8, U+9e78, U+ff6b;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-a56fdd58.woff2) format('woff2');\n  unicode-range: U+266b, U+3006, U+5176, U+5197, U+51a8, U+51c6, U+52f2, U+5614, U+5875, U+5a2f, U+5b54, U+5ce0, U+5dba, U+5deb, U+5e63, U+5f59, U+5fcc, U+6068, U+6367, U+68b6, U+6a0b, U+6b64, U+6e15, U+6eba, U+7272, U+72a0, U+7947, U+7985, U+79e6, U+79e9, U+7a3d, U+7a9f, U+7aaf, U+7b95, U+7f60, U+7f9e, U+7fe0, U+8098, U+80ba, U+8106, U+82d4, U+831c, U+87f9, U+8a1f, U+8acf, U+90c1, U+920d, U+9756, U+fe43, U+ff94;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-e3313351.woff2) format('woff2');\n  unicode-range: U+af, U+2465, U+2517, U+33a1, U+4f10, U+50c5, U+51b4, U+5384, U+5606, U+5bb0, U+5cac, U+5ee3, U+618e, U+61f2, U+62c9, U+66ab, U+66f9, U+6816, U+6960, U+6b3e, U+6f20, U+7078, U+72d0, U+73ed, U+7ad9, U+7b1b, U+7be4, U+7d62, U+7f51, U+80b4, U+80f4, U+8154, U+85fb, U+865c, U+8702, U+895f, U+8aed, U+8b90, U+8ced, U+8fbf, U+91d8, U+9418, U+9583, U+9591, U+9813, U+982c, U+9bd6, U+ff46, U+ff7f, U+ff88;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-5eb364c8.woff2) format('woff2');\n  unicode-range: U+4e91, U+508d, U+50e7, U+514e, U+51f6, U+5446, U+5504, U+584a, U+59a8, U+59d3, U+5a46, U+5ac9, U+6020, U+60a6, U+6148, U+621a, U+6234, U+64c1, U+6523, U+675c, U+67d1, U+6953, U+6ccc, U+6df5, U+6e13, U+6f06, U+723a, U+7325, U+74e6, U+758e, U+75ab, U+75d9, U+7a40, U+8096, U+82fa, U+8587, U+8594, U+8a6b, U+8ab9, U+8b17, U+8b83, U+937c, U+963b, U+9673, U+96db, U+9ce9, U+9f4b, U+ff67, U+ff82, U+ff93;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-a0e6d610.woff2) format('woff2');\n  unicode-range: U+221e, U+2514, U+51f9, U+5270, U+5449, U+5824, U+59a5, U+5a29, U+5d07, U+5e16, U+60e3, U+614c, U+6276, U+643e, U+64ab, U+6562, U+6681, U+670b, U+6734, U+67af, U+6a3d, U+6b05, U+6dc0, U+6e4a, U+7259, U+732a, U+7409, U+78a7, U+7a6b, U+8015, U+809b, U+817a, U+830e, U+837b, U+85ab, U+8a23, U+8a93, U+8b00, U+8b19, U+8b21, U+8cbf, U+8fb0, U+901d, U+91b8, U+9320, U+932c, U+9688, U+96f6, U+9df2, U+ff6a;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-d8aa4acd.woff2) format('woff2');\n  unicode-range: U+2002, U+2025, U+4f8d, U+51e1, U+51f8, U+5507, U+5598, U+58f1, U+5983, U+59ac, U+5c3c, U+5de7, U+5e7d, U+5eca, U+5f61, U+606d, U+60f9, U+636e, U+64ec, U+67da, U+67ff, U+6813, U+68f2, U+693f, U+6b6a, U+6bbb, U+6ef4, U+7092, U+717d, U+7261, U+73c8, U+7432, U+7483, U+76fe, U+7709, U+78d0, U+81a3, U+81b3, U+82af, U+8305, U+8309, U+8870, U+88fe, U+8cd1, U+8d66, U+906e, U+971e, U+9812, U+ff79, U+ff90;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-ee12363c.woff2) format('woff2');\n  unicode-range: U+2464, U+2501, U+2640, U+2642, U+339d, U+4f0e, U+5091, U+50b5, U+5132, U+51cc, U+558b, U+55aa, U+585e, U+5bee, U+5dfe, U+60b6, U+62b9, U+6349, U+6566, U+6590, U+6842, U+689d, U+6a58, U+6c70, U+6ff1, U+7815, U+7881, U+7aaa, U+7bc7, U+7def, U+7fa8, U+8017, U+8036, U+8061, U+821f, U+8429, U+8ce0, U+8e74, U+9019, U+90ca, U+9162, U+932f, U+93ae, U+9644, U+990c, U+9cf3, U+ff56, U+ff6e, U+ff7e, U+ff85;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-80542786.woff2) format('woff2');\n  unicode-range: U+2266-2267, U+4f2f, U+5208, U+5451, U+546a, U+5589, U+576a, U+5815, U+5a9a, U+5b9b, U+5c3a, U+5efb, U+5faa, U+6109, U+6643, U+6652, U+695a, U+69fd, U+6b86, U+6bb4, U+6daf, U+7089, U+70cf, U+7a00, U+7a4f, U+7b39, U+7d33, U+80e1, U+828b, U+82a6, U+86cd, U+8c8c, U+8cca, U+8df3, U+9077, U+9175, U+91dc, U+925b, U+9262, U+9271, U+92ed, U+9855, U+9905, U+9d28, U+ff3f, U+ff58, U+ff68, U+ff6d, U+ff9c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-dadfd829.woff2) format('woff2');\n  unicode-range: U+2207, U+25ef, U+309c, U+4e4f, U+5146, U+51dd, U+5351, U+540a, U+5629, U+5eb5, U+5f04, U+5f13, U+60dc, U+6212, U+63b4, U+642c, U+6627, U+66a6, U+66c7, U+66fd, U+674e, U+6b96, U+6c4e, U+6df3, U+6e67, U+6f84, U+72fc, U+733f, U+7c97, U+7db1, U+7e4d, U+816b, U+82d1, U+84cb, U+854e, U+8607, U+86c7, U+871c, U+8776, U+8a89, U+8fc4, U+91a4, U+9285, U+9685, U+9903, U+9b31, U+9f13, U+ff42, U+ff74, U+ff91;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-bfcb49e9.woff2) format('woff2');\n  unicode-range: U+4e32, U+51db, U+53a8, U+53ea, U+5609, U+5674, U+5a92, U+5e7e, U+6115, U+611a, U+62cc, U+62ed, U+63c9, U+64b9, U+64e6, U+65cb, U+6606, U+6731, U+683d, U+6afb, U+7460, U+771e, U+78ef, U+7b26, U+7b51, U+7cde, U+7d10, U+7d2f, U+7d46, U+80de, U+819c, U+84b2, U+85cd, U+865a, U+8ecc, U+9022, U+90b8, U+9192, U+9675, U+96b7, U+99ff, U+ff44, U+ff55, U+ff6c, U+ff73, U+ff75, U+ff86, U+ff8d, U+ff92, U+ffe3;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-eab750cb.woff2) format('woff2');\n  unicode-range: U+25b3, U+30f5, U+4eae, U+4f46, U+4f51, U+5203, U+52ff, U+55a7, U+564c, U+565b, U+57f9, U+5805, U+5b64, U+5e06, U+5f70, U+5f90, U+60e8, U+6182, U+62f3, U+62fe, U+63aa, U+64a4, U+65d7, U+673a, U+6851, U+68cb, U+68df, U+6d1e, U+6e58, U+6e9d, U+77b3, U+7832, U+7c3f, U+7db4, U+7f70, U+80aa, U+80c6, U+8105, U+819d, U+8276, U+8679, U+8986, U+8c9d, U+8fc5, U+916c, U+9665, U+9699, U+96c0, U+9a19, U+ff8b;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-d64af9c3.woff2) format('woff2');\n  unicode-range: U+2463, U+25a1, U+4ef0, U+5076, U+5098, U+51fd, U+5302, U+5448, U+54c9, U+570b, U+583a, U+5893, U+58a8, U+58ee, U+5949, U+5bdb, U+5f26, U+5f81, U+6052, U+6170, U+61c7, U+631f, U+635c, U+664b, U+69fb, U+6f01, U+7070, U+722a, U+745e, U+755c, U+76c6, U+78c1, U+79e4, U+7bb8, U+7d0b, U+81a8, U+82d7, U+8b5c, U+8f14, U+8fb1, U+8fbb, U+9283, U+9298, U+9a30, U+ff03, U+ff50, U+ff59, U+ff7b, U+ff8e-ff8f;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-e70a7fe8.woff2) format('woff2');\n  unicode-range: U+2010, U+2502, U+25b6, U+4f3a, U+514b, U+5265, U+52c3, U+5339, U+53ec, U+54c0, U+55b0, U+5854, U+5b8f, U+5cb3, U+5e84, U+60da, U+6247, U+6249, U+628a, U+62cd, U+65ac, U+6838, U+690e, U+6cf0, U+6f02, U+6f2c, U+6f70, U+708a, U+7434, U+75be, U+77ef, U+7c60, U+7c98, U+7d1b, U+7e2b, U+80a5, U+81e3, U+820c, U+8210, U+8475, U+862d, U+8650, U+8997, U+906d, U+91c8, U+9700, U+9727, U+9df9, U+ff3a, U+ff9a;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-a36b84f1.woff2) format('woff2');\n  unicode-range: U+2103, U+5049, U+52b1, U+5320, U+5553, U+572d, U+58c7, U+5b5d, U+5bc2, U+5de3, U+5e61, U+5f80, U+61a9, U+67d0, U+67f4, U+6c88, U+6ca1, U+6ce5, U+6d78, U+6e9c, U+6f54, U+731b, U+73b2, U+74a7, U+74f6, U+75e9, U+7b20, U+7c8b, U+7f72, U+809d, U+8108, U+82b3, U+82bd, U+84b8, U+84c4, U+88c2, U+8ae6, U+8ef8, U+902e, U+9065, U+9326, U+935b, U+938c, U+9676, U+9694, U+96f7, U+9ed9, U+ff48, U+ff4c, U+ff81;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-4fbb0686.woff2) format('woff2');\n  unicode-range: U+2500, U+3008-3009, U+4ead, U+4f0f, U+4fca, U+53eb, U+543e, U+57a2, U+5cf0, U+5e8f, U+5fe0, U+61b2, U+62d8, U+6442, U+64b2, U+6589, U+659c, U+67f1, U+68c4, U+6cb8, U+6d12, U+6de1, U+6fe1, U+70c8, U+723d, U+73e0, U+7656, U+773a, U+7948, U+7b87, U+7c92, U+7d3a, U+7e1b, U+7e4a, U+819a, U+8358, U+83c5, U+84bc, U+864e, U+8912, U+8c9e, U+8d05, U+92fc, U+9396, U+98fd, U+99d2, U+ff64, U+ff7a, U+ff83;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-89393fb5.woff2) format('woff2');\n  unicode-range: U+3014-3015, U+4e3c, U+5036, U+5075, U+533f, U+53e9, U+5531, U+5642, U+5984, U+59e6, U+5a01, U+5b6b, U+5c0b, U+5f25, U+6069, U+60a0, U+614e, U+62b5, U+62d2-62d3, U+6597, U+660c, U+674f, U+67cf, U+6841, U+6905, U+6cf3, U+6d32, U+6d69, U+6f64, U+716e, U+7761, U+7b52, U+7be0, U+7dbf, U+7de9, U+7f36, U+81d3, U+8302, U+8389, U+846c, U+84ee, U+8a69, U+9038, U+9d8f, U+ff47, U+ff4b, U+ff76, U+ff9b;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-af36d3b7.woff2) format('woff2');\n  unicode-range: U+25c7, U+3007, U+504f, U+507d, U+51a0, U+52a3, U+5410, U+5510, U+559a, U+5782, U+582a, U+5c0a, U+5c3f, U+5c48, U+5f6b, U+6176, U+622f, U+6279, U+62bd, U+62dd, U+65ed, U+67b6, U+6817, U+6850, U+6d6a, U+6deb, U+6ea2, U+6edd, U+6f5c, U+72e9, U+73a9, U+7573, U+76bf, U+7950, U+7956, U+7f8a, U+7ffc, U+80a2, U+80c3, U+83ca, U+8a02, U+8a13, U+8df5, U+9375, U+983b, U+99b4, U+ff4e, U+ff71, U+ff89, U+ff97;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-ed9a44a5.woff2) format('woff2');\n  unicode-range: U+24, U+2022, U+2212, U+221f, U+2665, U+4ecf, U+5100, U+51cd, U+52d8, U+5378, U+53f6, U+574a, U+5982, U+5996, U+5c1a, U+5e1d, U+5f84, U+609f, U+61a7, U+61f8, U+6398, U+63ee, U+6676, U+6691, U+6eb6, U+7126, U+71e5, U+7687, U+7965, U+7d17, U+80a1, U+8107, U+8266, U+85a6, U+8987, U+8ca2, U+8cab, U+8e0a, U+9042, U+95c7, U+9810, U+9867, U+98fc, U+ff52-ff54, U+ff61, U+ff77, U+ff98-ff99;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-8893ca2e.woff2) format('woff2');\n  unicode-range: U+b0, U+226a, U+2462, U+4e39, U+4fc3, U+4fd7, U+50be, U+50da, U+5200, U+5211, U+54f2, U+5618, U+596a, U+5b22, U+5bb4, U+5d50, U+60a3, U+63fa, U+658e, U+65e8, U+6669, U+6795, U+679d, U+67a0, U+6b3a, U+6e09, U+757f, U+7cd6, U+7dbe, U+7ffb, U+83cc, U+83f1, U+840c, U+845b, U+8846, U+8972, U+8a34, U+8a50, U+8a87, U+8edf, U+8ff0, U+90a6, U+9154, U+95a3, U+9663, U+9686, U+96c7, U+ff3c, U+ff7c, U+ff8a;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-99d7404a.woff2) format('woff2');\n  unicode-range: U+25bd, U+4e59, U+4ec1, U+4ff3, U+515a, U+518a, U+525b, U+5375, U+552f, U+57a3, U+5b9c, U+5c3d, U+5e3d, U+5e7b, U+5f0a, U+6094, U+6458, U+654f, U+67f3, U+6b8a, U+6bd2, U+6c37, U+6ce1, U+6e56, U+6e7f, U+6ed1, U+6ede, U+6f0f, U+70ad, U+7267, U+7363, U+786c, U+7a42, U+7db2, U+7f85, U+8178, U+829d, U+8896, U+8c5a, U+8cb0, U+8ce2, U+8ed2, U+9047, U+9177, U+970a, U+9ea6, U+ff1b, U+ff31, U+ff39, U+ff80;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-bb88fd2a.woff2) format('woff2');\n  unicode-range: U+a5, U+4e80, U+4f34, U+4f73, U+4f75, U+511f, U+5192, U+52aa, U+53c8, U+570f, U+57cb, U+596e, U+5d8b, U+5f66, U+5fd9, U+62db, U+62f6, U+6328, U+633f, U+63a7, U+6469, U+6bbf, U+6c41, U+6c57, U+6d44, U+6dbc, U+706f, U+72c2, U+72ed, U+7551, U+75f4, U+7949, U+7e26, U+7fd4, U+8150, U+8af8, U+8b0e, U+8b72, U+8ca7, U+934b, U+9a0e, U+9a12, U+9b42, U+ff41, U+ff43, U+ff45, U+ff49, U+ff4f, U+ff62-ff63;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-1ff1eafb.woff2) format('woff2');\n  unicode-range: U+4e18, U+4fb5, U+5104, U+52c7, U+5353, U+5374, U+53e5, U+587e, U+594f, U+5a20, U+5de1, U+5f18, U+5fcd, U+6291, U+62ab, U+6355, U+6392, U+63da, U+63e1, U+656c, U+6687, U+68b0-68b1, U+68d2, U+68da, U+6b27, U+6cbc, U+7159, U+7344, U+73cd, U+76df, U+790e, U+7cf8, U+8102, U+88c1, U+8aa0, U+8e0f, U+9178, U+92ad, U+9670, U+96c5, U+9cf4, U+9db4, U+ff3e, U+ff6f, U+ff72, U+ff78, U+ff7d, U+ff84, U+ff8c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-999a465d.woff2) format('woff2');\n  unicode-range: U+60, U+2200, U+226b, U+2461, U+517c, U+526f, U+5800, U+5b97, U+5bf8, U+5c01, U+5d29, U+5e4c, U+5e81, U+6065, U+61d0, U+667a, U+6696, U+6843, U+6c99, U+6d99, U+6ec5, U+6f22, U+6f6e, U+6fa4, U+6fef, U+71c3, U+72d9, U+7384, U+78e8, U+7a1a, U+7a32, U+7a3c, U+7adc, U+7ca7, U+7d2b, U+7dad, U+7e4b, U+80a9, U+8170, U+81ed, U+820e, U+8a17, U+8afe, U+90aa, U+914e, U+963f, U+99c4, U+9eba, U+9f3b, U+ff38;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-ea5abb16.woff2) format('woff2');\n  unicode-range: U+2460, U+4e5f, U+4e7e, U+4ed9, U+501f, U+502b, U+5968, U+5974, U+5ac1, U+5b99, U+5ba3, U+5be7, U+5be9, U+5c64, U+5cb8, U+5ec3, U+5f1f, U+616e, U+6297, U+62e0, U+62ec, U+6368, U+642d, U+65e6, U+6717, U+676f, U+6b04, U+732e, U+7652, U+76ca, U+76d7, U+7802, U+7e70, U+7f6a, U+8133, U+81e8, U+866b, U+878d, U+88f8, U+8a5e, U+8cdb, U+8d08, U+907a, U+90e1, U+96f2, U+9f8d, U+ff35, U+ff37, U+ff40, U+ff9d;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-81de744e.woff2) format('woff2');\n  unicode-range: U+21d2, U+25ce, U+300a-300b, U+4e89, U+4e9c, U+4ea1, U+5263, U+53cc, U+5426, U+5869, U+5947, U+598a, U+5999, U+5e55, U+5e72, U+5e79, U+5fae, U+5fb9, U+602a, U+6163, U+624d, U+6749, U+6c5a, U+6cbf, U+6d45, U+6dfb, U+6e7e, U+708e, U+725b, U+7763, U+79c0, U+7bc4, U+7c89, U+7e01, U+7e2e, U+8010, U+8033, U+8c6a, U+8cc3, U+8f1d, U+8f9b, U+8fb2, U+907f, U+90f7, U+9707, U+9818, U+9b3c, U+ff0a, U+ff4d;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-13c3e361.woff2) format('woff2');\n  unicode-range: U+2015, U+2190, U+4e43, U+5019, U+5247, U+52e7, U+5438, U+54b2, U+55ab, U+57f7, U+5bd2, U+5e8a, U+5ef6, U+6016, U+60b2, U+6162, U+6319, U+6551, U+6607, U+66b4, U+675f, U+67d4, U+6b20, U+6b53, U+6ce3, U+719f, U+75b2, U+770b, U+7720, U+77ac, U+79d2, U+7af9, U+7d05, U+7dca, U+8056, U+80f8, U+81f3, U+8352, U+885d, U+8a70, U+8aa4, U+8cbc, U+900f, U+9084, U+91e3, U+9451, U+96c4, U+99c6, U+9ad4, U+ff70;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-b27c742b.woff2) format('woff2');\n  unicode-range: U+2193, U+25b2, U+4e4b, U+516d, U+51c4, U+529f, U+52c9, U+5360, U+5442, U+5857, U+5915, U+59eb, U+5a9b, U+5c3b, U+6012, U+61b6, U+62b1, U+6311, U+6577, U+65e2, U+65ec, U+6613, U+6790, U+6cb9, U+7372, U+76ae, U+7d5e, U+7fcc, U+88ab, U+88d5, U+8caf, U+8ddd, U+8ecd, U+8f38, U+8f9e, U+8feb, U+9063, U+90f5, U+93e1, U+968a, U+968f, U+98fe, U+9ec4, U+ff1d, U+ff27, U+ff2a, U+ff36, U+ff3b, U+ff3d, U+ffe5;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-0fd251e6.woff2) format('woff2');\n  unicode-range: U+4e03, U+4f38, U+50b7, U+5264, U+5348, U+5371, U+585a, U+58ca, U+5951, U+59b9, U+59d4, U+5b98, U+5f8b, U+6388, U+64cd, U+65e7, U+6803, U+6b6f, U+6d66, U+6e0b, U+6ecb, U+6fc3, U+72ac, U+773c, U+77e2, U+7968, U+7a74, U+7dba, U+7dd1, U+7e3e, U+808c, U+811a, U+8179, U+8239, U+8584, U+8a0e, U+8a72, U+8b66, U+8c46, U+8f29, U+90a3, U+9234, U+96f0, U+9769, U+9774, U+9aa8, U+ff26, U+ff28, U+ff9e-ff9f;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-5efc06ee.woff2) format('woff2');\n  unicode-range: U+7e, U+b4, U+25c6, U+2661, U+4e92, U+4eee, U+4ffa, U+5144, U+5237, U+5287, U+52b4, U+58c1, U+5bff, U+5c04, U+5c06, U+5e95, U+5f31, U+5f93, U+63c3, U+640d, U+6557, U+6614, U+662f, U+67d3, U+690d, U+6bba, U+6e6f, U+72af, U+732b, U+7518, U+7ae0, U+7ae5, U+7af6, U+822a, U+89e6, U+8a3a, U+8a98, U+8cb8, U+8de1, U+8e8d, U+95d8, U+961c, U+96a3, U+96ea, U+9bae, U+ff20, U+ff22, U+ff29, U+ff2b-ff2c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-f468c31d.woff2) format('woff2');\n  unicode-range: U+25cb, U+4e71, U+4f59, U+50d5, U+520a, U+5217, U+5230, U+523a-523b, U+541b, U+5439, U+5747, U+59c9, U+5bdf, U+5c31, U+5de8, U+5e7c, U+5f69, U+6050, U+60d1, U+63cf, U+663c, U+67c4, U+6885, U+6c38, U+6d6e, U+6db2, U+6df7, U+6e2c, U+6f5f, U+7532, U+76e3-76e4, U+7701, U+793c, U+79f0, U+7a93, U+7d00, U+7de0, U+7e54, U+8328, U+8840, U+969c, U+96e8, U+9811, U+9aea, U+9b5a, U+ff24, U+ff2e, U+ff57;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-f4295fba.woff2) format('woff2');\n  unicode-range: U+2191, U+505c, U+52e4, U+5305, U+535a, U+56e0, U+59bb, U+5acc, U+5b09, U+5b87, U+5c90, U+5df1, U+5e2d, U+5e33, U+5f3e, U+6298, U+6383, U+653b, U+6697, U+6804, U+6a39, U+6cca, U+6e90, U+6f2b, U+702c, U+7206, U+7236, U+7559, U+7565, U+7591, U+75c7, U+75db, U+7b4b, U+7bb1, U+7d99, U+7fbd, U+8131, U+885b, U+8b1d, U+8ff7, U+9003, U+9045, U+96a0, U+9732, U+990a, U+99d0, U+9e97, U+9f62, U+ff25, U+ff2d;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-388f5779.woff2) format('woff2');\n  unicode-range: U+4e08, U+4f9d, U+5012, U+514d, U+51b7, U+5275, U+53ca, U+53f8, U+5584, U+57fc, U+5b9d, U+5bfa, U+5c3e, U+5f01, U+5fb4, U+5fd7, U+606f, U+62e1, U+6563, U+6674, U+6cb3, U+6d3e, U+6d74, U+6e1b, U+6e2f, U+718a, U+7247, U+79d8, U+7d14, U+7d66, U+7d71, U+7df4, U+7e41, U+80cc, U+8155, U+83d3, U+8a95, U+8ab2, U+8ad6, U+8ca1, U+9000, U+9006, U+9678, U+97d3, U+9808, U+98ef, U+9a5a, U+9b45, U+ff23, U+ff30;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-35a42894.woff2) format('woff2');\n  unicode-range: U+25bc, U+3012, U+4ef2, U+4f0a, U+516b, U+5373, U+539a, U+53b3, U+559c, U+56f0, U+5727, U+5742, U+5965, U+59ff, U+5bc6, U+5dfb, U+5e45, U+5ead, U+5fb3, U+6211, U+6253, U+639b, U+63a8, U+6545, U+6575, U+6628, U+672d, U+68a8, U+6bdb, U+6d25, U+707d, U+767e, U+7834, U+7b46, U+7bc9, U+8074, U+82e6, U+8349, U+8a2a, U+8d70, U+8da3, U+8fce, U+91cc, U+967d, U+97ff, U+9996, U+ff1c, U+ff2f, U+ff32, U+ff34;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-b249b8c3.woff2) format('woff2');\n  unicode-range: U+3d, U+5e, U+25cf, U+4e0e, U+4e5d, U+4e73, U+4e94, U+4f3c, U+5009, U+5145, U+51ac, U+5238, U+524a, U+53f3, U+547c, U+5802, U+5922, U+5a66, U+5c0e, U+5de6, U+5fd8, U+5feb, U+6797, U+685c, U+6b7b, U+6c5f-6c60, U+6cc9, U+6ce2, U+6d17, U+6e21, U+7167, U+7642, U+76db, U+8001, U+821e, U+8857, U+89d2, U+8b1b, U+8b70, U+8cb4, U+8cde, U+8f03, U+8f2a, U+968e, U+9b54, U+9e7f, U+9ebb, U+ff05, U+ff33;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-5f9b54cf.woff2) format('woff2');\n  unicode-range: U+500d, U+5074, U+50cd, U+5175, U+52e2, U+5352, U+5354, U+53f2, U+5409, U+56fa, U+5a18, U+5b88, U+5bdd, U+5ca9, U+5f92, U+5fa9, U+60a9, U+623f, U+6483, U+653f, U+666f, U+66ae, U+66f2, U+6a21, U+6b66, U+6bcd, U+6d5c, U+796d, U+7a4d, U+7aef, U+7b56, U+7b97, U+7c4d, U+7e04, U+7fa9, U+8377, U+83dc, U+83ef, U+8535, U+8863, U+88cf, U+88dc, U+8907, U+8acb, U+90ce, U+91dd, U+ff0b, U+ff0d, U+ff19, U+ff65;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-772375e6.woff2) format('woff2');\n  unicode-range: U+4e01, U+4e21, U+4e38, U+52a9, U+547d, U+592e, U+5931, U+5b63, U+5c40, U+5dde, U+5e78, U+5efa, U+5fa1, U+604b, U+6075, U+62c5, U+632f, U+6a19, U+6c0f, U+6c11, U+6c96, U+6e05, U+70ba, U+71b1, U+7387, U+7403, U+75c5, U+77ed, U+795d, U+7b54, U+7cbe, U+7d19, U+7fa4, U+8089, U+81f4, U+8208, U+8336, U+8457, U+8a33, U+8c4a, U+8ca0, U+8ca8, U+8cc0, U+9014, U+964d, U+9803, U+983c, U+98db, U+ff17, U+ff21;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-e940be51.woff2) format('woff2');\n  unicode-range: U+25, U+25a0, U+4e26, U+4f4e, U+5341, U+56f2, U+5bbf, U+5c45, U+5c55, U+5c5e, U+5dee, U+5e9c, U+5f7c, U+6255, U+627f, U+62bc, U+65cf, U+661f, U+666e, U+66dc, U+67fb, U+6975, U+6a4b, U+6b32, U+6df1, U+6e29, U+6fc0, U+738b, U+7686, U+7a76, U+7a81, U+7c73, U+7d75, U+7dd2, U+82e5, U+82f1, U+85ac, U+888b, U+899a, U+8a31, U+8a8c, U+8ab0, U+8b58, U+904a, U+9060, U+9280, U+95b2, U+984d, U+9ce5, U+ff18;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-74353249.woff2) format('woff2');\n  unicode-range: U+30f6, U+50ac, U+5178, U+51e6, U+5224, U+52dd, U+5883, U+5897, U+590f, U+5a5a, U+5bb3, U+5c65, U+5e03, U+5e2b, U+5e30, U+5eb7, U+6271, U+63f4, U+64ae, U+6574, U+672b, U+679a, U+6a29-6a2a, U+6ca2, U+6cc1, U+6d0b, U+713c, U+74b0, U+7981, U+7a0b, U+7bc0, U+7d1a, U+7d61, U+7fd2, U+822c, U+8996, U+89aa, U+8cac, U+8cbb, U+8d77, U+8def, U+9020, U+9152, U+9244, U+9662, U+967a, U+96e3, U+9759, U+ff16;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-90d8e03d.woff2) format('woff2');\n  unicode-range: U+23, U+3c, U+2192, U+4e45, U+4efb, U+4f50, U+4f8b, U+4fc2, U+5024, U+5150, U+5272, U+5370, U+53bb, U+542b, U+56db, U+56e3, U+57ce, U+5bc4, U+5bcc, U+5f71, U+60aa, U+6238, U+6280, U+629c, U+6539, U+66ff, U+670d, U+677e-677f, U+6839, U+69cb, U+6b4c, U+6bb5, U+6e96, U+6f14, U+72ec, U+7389, U+7814, U+79cb, U+79d1, U+79fb, U+7a0e, U+7d0d, U+85e4, U+8d64, U+9632, U+96e2, U+9805, U+99ac, U+ff1e;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-741b2c8b.woff2) format('woff2');\n  unicode-range: U+2605-2606, U+301c, U+4e57, U+4fee, U+5065, U+52df, U+533b, U+5357, U+57df, U+58eb, U+58f0, U+591c, U+592a-592b, U+5948, U+5b85, U+5d0e, U+5ea7, U+5ff5, U+6025, U+63a1, U+63a5, U+63db, U+643a, U+65bd, U+671d, U+68ee, U+6982, U+6b73, U+6bd4, U+6d88, U+7570, U+7b11, U+7d76, U+8077, U+8217, U+8c37, U+8c61, U+8cc7, U+8d85, U+901f, U+962a, U+9802, U+9806, U+9854, U+98f2, U+9928, U+99c5, U+9ed2;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-2795f08a.woff2) format('woff2');\n  unicode-range: U+266a, U+4f11, U+533a, U+5343, U+534a, U+53cd, U+5404, U+56f3, U+5b57-5b58, U+5bae, U+5c4a, U+5e0c, U+5e2f, U+5eab, U+5f35, U+5f79, U+614b, U+6226, U+629e, U+65c5, U+6625, U+6751, U+6821, U+6b69, U+6b8b, U+6bce, U+6c42, U+706b, U+7c21, U+7cfb, U+805e, U+80b2, U+82b8, U+843d, U+8853, U+88c5, U+8a3c, U+8a66, U+8d8a, U+8fba, U+9069, U+91cf, U+9752, U+975e, U+9999, U+ff0f-ff10, U+ff14-ff15;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-e20236c5.woff2) format('woff2');\n  unicode-range: U+40, U+4e86, U+4e95, U+4f01, U+4f1d, U+4fbf, U+5099, U+5171, U+5177, U+53cb, U+53ce, U+53f0, U+5668, U+5712, U+5ba4, U+5ca1, U+5f85, U+60f3, U+653e, U+65ad, U+65e9, U+6620, U+6750, U+6761, U+6b62, U+6b74, U+6e08, U+6e80, U+7248, U+7531, U+7533, U+753a, U+77f3, U+798f, U+7f6e, U+8449, U+88fd, U+89b3, U+8a55, U+8ac7, U+8b77, U+8db3, U+8efd, U+8fd4, U+9031-9032, U+9580, U+9589, U+96d1, U+985e;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-cc9bfb9f.woff2) format('woff2');\n  unicode-range: U+2b, U+d7, U+300e-300f, U+4e07, U+4e8c, U+512a, U+5149, U+518d, U+5236, U+52b9, U+52d9, U+5468, U+578b, U+57fa, U+5b8c, U+5ba2, U+5c02, U+5de5, U+5f37, U+5f62, U+623b, U+63d0, U+652f, U+672a, U+6848, U+6d41, U+7136, U+7537, U+754c, U+76f4, U+79c1, U+7ba1, U+7d44, U+7d4c, U+7dcf, U+7dda, U+7de8, U+82b1, U+897f, U+8ca9, U+8cfc, U+904e, U+9664, U+982d, U+9858, U+98a8, U+9a13, U+ff13, U+ff5c;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-a87e1c85.woff2) format('woff2');\n  unicode-range: U+4e16, U+4e3b, U+4ea4, U+4ee4, U+4f4d, U+4f4f, U+4f55, U+4f9b, U+5317, U+5358, U+53c2, U+53e4, U+548c, U+571f, U+59cb, U+5cf6, U+5e38, U+63a2, U+63b2, U+6559, U+662d, U+679c, U+6c7a, U+72b6, U+7523, U+767d, U+770c, U+7a2e, U+7a3f, U+7a7a, U+7b2c, U+7b49, U+7d20, U+7d42, U+8003, U+8272, U+8a08, U+8aac, U+8cb7, U+8eab, U+8ee2, U+9054-9055, U+90fd, U+914d, U+91cd, U+969b, U+97f3, U+984c, U+ff06;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-9dc5c97e.woff2) format('woff2');\n  unicode-range: U+26, U+5f, U+2026, U+203b, U+4e09, U+4eac, U+4ed5, U+4fa1, U+5143, U+5199, U+5207, U+539f, U+53e3, U+53f7, U+5411, U+5473, U+5546, U+55b6, U+5929, U+597d, U+5bb9, U+5c11, U+5c4b, U+5ddd, U+5f97, U+5fc5, U+6295, U+6301, U+6307, U+671b, U+76f8, U+78ba, U+795e, U+7d30, U+7d39, U+7d9a, U+89e3, U+8a00, U+8a73, U+8a8d, U+8a9e, U+8aad, U+8abf, U+8cea, U+8eca, U+8ffd, U+904b, U+9650, U+ff11-ff12;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-a8088434.woff2) format('woff2');\n  unicode-range: U+3e, U+3005, U+4e0d, U+4e88, U+4ecb, U+4ee3, U+4ef6, U+4fdd, U+4fe1, U+500b, U+50cf, U+5186, U+5316, U+53d7, U+540c, U+544a, U+54e1, U+5728, U+58f2, U+5973, U+5b89, U+5c71, U+5e02, U+5e97, U+5f15, U+5fc3, U+5fdc, U+601d, U+611b, U+611f, U+671f, U+6728, U+6765, U+683c, U+6b21, U+6ce8, U+6d3b, U+6d77, U+7530, U+7740, U+7acb, U+7d50, U+826f, U+8f09, U+8fbc, U+9001, U+9053, U+91ce, U+9762, U+98df;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-d3e42317.woff2) format('woff2');\n  unicode-range: U+7c, U+3080, U+4ee5, U+5148, U+516c, U+521d, U+5225, U+529b, U+52a0, U+53ef, U+56de, U+56fd, U+5909, U+591a, U+5b66, U+5b9f, U+5bb6, U+5bfe, U+5e73, U+5e83, U+5ea6, U+5f53, U+6027, U+610f, U+6210, U+6240, U+660e, U+66f4, U+66f8, U+6709, U+6771, U+697d, U+69d8, U+6a5f, U+6c34, U+6cbb, U+73fe, U+756a, U+7684, U+771f, U+793a, U+7f8e, U+898f, U+8a2d, U+8a71, U+8fd1, U+9078, U+9577, U+96fb, U+ff5e;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-f871983d.woff2) format('woff2');\n  unicode-range: U+a9, U+3010-3011, U+30e2, U+4e0b, U+4eca, U+4ed6, U+4ed8, U+4f53, U+4f5c, U+4f7f, U+53d6, U+540d, U+54c1, U+5730, U+5916, U+5b50, U+5c0f, U+5f8c, U+624b, U+6570, U+6587, U+6599, U+691c, U+696d, U+6cd5, U+7269, U+7279, U+7406, U+767a-767b, U+77e5, U+7d04, U+7d22, U+8005, U+80fd, U+81ea, U+8868, U+8981, U+89a7, U+901a, U+9023, U+90e8, U+91d1, U+9332, U+958b, U+96c6, U+9ad8, U+ff1a, U+ff1f;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-095ef7e5.woff2) format('woff2');\n  unicode-range: U+4e, U+a0, U+3000, U+300c-300d, U+4e00, U+4e0a, U+4e2d, U+4e8b, U+4eba, U+4f1a, U+5165, U+5168, U+5185, U+51fa, U+5206, U+5229, U+524d, U+52d5, U+5408, U+554f, U+5831, U+5834, U+5927, U+5b9a, U+5e74, U+5f0f, U+60c5, U+65b0, U+65b9, U+6642, U+6700, U+672c, U+682a, U+6b63, U+6c17, U+7121, U+751f, U+7528, U+753b, U+76ee, U+793e, U+884c, U+898b, U+8a18, U+9593, U+95a2, U+ff01, U+ff08-ff09;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-25831122.woff2) format('woff2');\n  unicode-range: U+21-22, U+27-2a, U+2c-3b, U+3f, U+41-4d, U+4f-5d, U+61-7b, U+7d, U+ab, U+ae, U+b2-b3, U+b7, U+bb, U+c9, U+cd, U+d6, U+d8, U+dc, U+e0-e5, U+e7-ed, U+ef, U+f1-f4, U+f6, U+f8, U+fa, U+fc-fd, U+103, U+14d, U+1b0, U+300-301, U+1ebf, U+1ec7, U+2013-2014, U+201c-201d, U+2039-203a, U+203c, U+2048-2049, U+2113, U+2122, U+65e5, U+6708, U+70b9;\n}\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-0976c223.woff2) format('woff2');\n  unicode-range: U+20, U+2027, U+3001-3002, U+3041-307f, U+3081-308f, U+3091-3093, U+3099-309a, U+309d-309e, U+30a1-30e1, U+30e3-30ed, U+30ef-30f0, U+30f2-30f4, U+30fb-30fe, U+ff0c, U+ff0e;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-e6015164.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-569a985d.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-425953a7.woff2) format('woff2');\n  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Noto Sans JP';\n  font-style: normal;\n  font-weight: 100 900;\n  font-display: swap;\n  src: url(C:/Users/bosan/NEXT/.vinext/fonts/noto-sans-jp-d22312ada54c/noto-sans-jp-e29b09ac.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
		adjustedFallbackCSS: "@font-face {\n  font-family: 'Noto Sans JP Fallback';\n  src: local(\"Arial\");\n  ascent-override: 110.73%;\n  descent-override: 27.49%;\n  line-gap-override: 0.00%;\n  size-adjust: 104.76%;\n}\n",
		fontStyle: "normal"
	} }
});
var metadata = {
	title: "Stories - Personal Blog HTML Template",
	description: "Generated by Stories - Personal Blog HTML Template"
};
function RootLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("html", {
		lang: "en",
		children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("body", {
			className: notoSansJP.className,
			children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ScrollProgress_default, {}), children]
		})
	});
}
var $$wrap_RootLayout = /* #__PURE__ */ __vite_rsc_wrap_css__(RootLayout, "default");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region app/loading.tsx
var loading_exports = /* @__PURE__ */ __exportAll({ default: () => loading_default });
var loading_default = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "c03847ade71a", "default");
//#endregion
//#region app/page-404/page.tsx
var page_exports$22 = /* @__PURE__ */ __exportAll({ default: () => page_default$22 });
var page_default$22 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "960e34d10146", "default");
//#endregion
//#region app/not-found.tsx
var not_found_exports = /* @__PURE__ */ __exportAll({ default: () => NotFound });
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(page_default$22, {});
}
//#endregion
//#region app/author/page.tsx
var page_exports$21 = /* @__PURE__ */ __exportAll({ default: () => page_default$21 });
var page_default$21 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "f7b08fcab122", "default");
//#endregion
//#region app/category/page.tsx
var page_exports$20 = /* @__PURE__ */ __exportAll({ default: () => page_default$20 });
var page_default$20 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "e4e7c58fcf80", "default");
//#endregion
//#region app/category-big/page.tsx
var page_exports$19 = /* @__PURE__ */ __exportAll({ default: () => page_default$19 });
var page_default$19 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "3c7986dbbbff", "default");
//#endregion
//#region app/category-grid/page.tsx
var page_exports$18 = /* @__PURE__ */ __exportAll({ default: () => page_default$18 });
var page_default$18 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "30dfa470f0f4", "default");
//#endregion
//#region app/category-list/page.tsx
var page_exports$17 = /* @__PURE__ */ __exportAll({ default: () => page_default$17 });
var page_default$17 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "3cfcfe148364", "default");
//#endregion
//#region app/category-masonry/page.tsx
var page_exports$16 = /* @__PURE__ */ __exportAll({ default: () => page_default$16 });
var page_default$16 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "d397b21a4133", "default");
//#endregion
//#region app/home-2/page.tsx
var page_exports$15 = /* @__PURE__ */ __exportAll({ default: () => page_default$15 });
var page_default$15 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "d37dce2abe21", "default");
//#endregion
//#region app/home-3/page.tsx
var page_exports$14 = /* @__PURE__ */ __exportAll({ default: () => page_default$14 });
var page_default$14 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "fae6fdeed8dd", "default");
//#endregion
//#region app/page-about/page.tsx
var page_exports$13 = /* @__PURE__ */ __exportAll({ default: () => page_default$13 });
var page_default$13 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "911de7aae36e", "default");
//#endregion
//#region app/page-author copy/page.tsx
var page_exports$12 = /* @__PURE__ */ __exportAll({ default: () => page_default$12 });
var page_default$12 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "666bc2d021c0", "default");
//#endregion
//#region app/page-contact/page.tsx
var page_exports$11 = /* @__PURE__ */ __exportAll({ default: () => page_default$11 });
var page_default$11 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "ae66bd113450", "default");
//#endregion
//#region app/page-login/page.tsx
var page_exports$10 = /* @__PURE__ */ __exportAll({ default: () => page_default$10 });
var page_default$10 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "1d1da7b80cdd", "default");
//#endregion
//#region app/page-register/page.tsx
var page_exports$9 = /* @__PURE__ */ __exportAll({ default: () => page_default$9 });
var page_default$9 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "e446c8de6a62", "default");
//#endregion
//#region app/page-search/page.tsx
var page_exports$8 = /* @__PURE__ */ __exportAll({ default: () => page_default$8 });
var page_default$8 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "bf52759d0291", "default");
//#endregion
//#region app/page-typography/page.tsx
var page_exports$7 = /* @__PURE__ */ __exportAll({ default: () => page_default$7 });
var page_default$7 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "5793cc191a46", "default");
//#endregion
//#region app/single/page.tsx
var page_exports$6 = /* @__PURE__ */ __exportAll({ default: () => page_default$6 });
var page_default$6 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "a7c04bec8711", "default");
//#endregion
//#region app/author/[id]/page.tsx
var page_exports$5 = /* @__PURE__ */ __exportAll({ default: () => page_default$5 });
var page_default$5 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "4d626348654e", "default");
//#endregion
//#region app/blog/[id]/page.tsx
var page_exports$4 = /* @__PURE__ */ __exportAll({ default: () => page_default$4 });
var page_default$4 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "42be576f4803", "default");
//#endregion
//#region app/category/[id]/page.tsx
var page_exports$3 = /* @__PURE__ */ __exportAll({ default: () => page_default$3 });
var page_default$3 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "8deae139277f", "default");
//#endregion
//#region app/single/[id]/page.tsx
var page_exports$2 = /* @__PURE__ */ __exportAll({ default: () => page_default$2 });
var page_default$2 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "c8bf7ea03887", "default");
//#endregion
//#region app/single3/[id]/page.tsx
var page_exports$1 = /* @__PURE__ */ __exportAll({ default: () => page_default$1 });
var page_default$1 = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "01678d3b938d", "default");
//#endregion
//#region app/single4/[id]/page.tsx
var page_exports = /* @__PURE__ */ __exportAll({ default: () => page_default });
var page_default = /* #__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "93eece74a0c0", "default");
//#endregion
//#region \0virtual:vinext-rsc-entry
var renderToReadableStream = createRscRenderer(renderToReadableStream$1);
function _getSSRFontStyles() {
	return [...getSSRFontStyles$1(), ...getSSRFontStyles()];
}
function _getSSRFontPreloads() {
	return [...getSSRFontPreloads$1(), ...getSSRFontPreloads()];
}
var __isrDebug = process.env.NEXT_PRIVATE_DEBUG_CACHE ? console.debug.bind(console, "[vinext] ISR:") : void 0;
var __classDebug = process.env.VINEXT_DEBUG_CLASSIFICATION ? function(layoutId, reason) {
	console.debug("[vinext] CLS:", layoutId, reason);
} : void 0;
function __resolveRouteFetchCacheMode(route) {
	return resolveAppPageFetchCacheMode({
		layouts: route.layouts,
		page: route.page
	});
}
function __VINEXT_CLASS(routeIdx) { return ((routeIdx) => {
    switch (routeIdx) {
      default: return null;
    }
  })(routeIdx); }
function __VINEXT_CLASS_REASONS(routeIdx) {
	return null;
}
var routes = [
	{
		__buildTimeClassifications: __VINEXT_CLASS(0),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(0) : null,
		ids: {
			"route": "route:/",
			"page": "page:/",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/",
		patternParts: [],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$23,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: [],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: loading_exports,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(1),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(1) : null,
		ids: {
			"route": "route:/author",
			"page": "page:/author",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/author",
		patternParts: ["author"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$21,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["author"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(2),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(2) : null,
		ids: {
			"route": "route:/category",
			"page": "page:/category",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/category",
		patternParts: ["category"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$20,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["category"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(3),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(3) : null,
		ids: {
			"route": "route:/category-big",
			"page": "page:/category-big",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/category-big",
		patternParts: ["category-big"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$19,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["category-big"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(4),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(4) : null,
		ids: {
			"route": "route:/category-grid",
			"page": "page:/category-grid",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/category-grid",
		patternParts: ["category-grid"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$18,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["category-grid"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(5),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(5) : null,
		ids: {
			"route": "route:/category-list",
			"page": "page:/category-list",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/category-list",
		patternParts: ["category-list"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$17,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["category-list"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(6),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(6) : null,
		ids: {
			"route": "route:/category-masonry",
			"page": "page:/category-masonry",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/category-masonry",
		patternParts: ["category-masonry"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$16,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["category-masonry"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(7),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(7) : null,
		ids: {
			"route": "route:/home-2",
			"page": "page:/home-2",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/home-2",
		patternParts: ["home-2"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$15,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["home-2"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(8),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(8) : null,
		ids: {
			"route": "route:/home-3",
			"page": "page:/home-3",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/home-3",
		patternParts: ["home-3"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$14,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["home-3"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(9),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(9) : null,
		ids: {
			"route": "route:/page-404",
			"page": "page:/page-404",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-404",
		patternParts: ["page-404"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$22,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-404"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(10),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(10) : null,
		ids: {
			"route": "route:/page-about",
			"page": "page:/page-about",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-about",
		patternParts: ["page-about"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$13,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-about"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(11),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(11) : null,
		ids: {
			"route": "route:/page-author copy",
			"page": "page:/page-author copy",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-author copy",
		patternParts: ["page-author copy"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$12,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-author copy"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(12),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(12) : null,
		ids: {
			"route": "route:/page-contact",
			"page": "page:/page-contact",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-contact",
		patternParts: ["page-contact"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$11,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-contact"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(13),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(13) : null,
		ids: {
			"route": "route:/page-login",
			"page": "page:/page-login",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-login",
		patternParts: ["page-login"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$10,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-login"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(14),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(14) : null,
		ids: {
			"route": "route:/page-register",
			"page": "page:/page-register",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-register",
		patternParts: ["page-register"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$9,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-register"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(15),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(15) : null,
		ids: {
			"route": "route:/page-search",
			"page": "page:/page-search",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-search",
		patternParts: ["page-search"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$8,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-search"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(16),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(16) : null,
		ids: {
			"route": "route:/page-typography",
			"page": "page:/page-typography",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/page-typography",
		patternParts: ["page-typography"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$7,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["page-typography"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(17),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(17) : null,
		ids: {
			"route": "route:/single",
			"page": "page:/single",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/single",
		patternParts: ["single"],
		isDynamic: false,
		params: [],
		rootParamNames: [],
		page: page_exports$6,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["single"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(18),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(18) : null,
		ids: {
			"route": "route:/author/:id",
			"page": "page:/author/:id",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/author/:id",
		patternParts: ["author", ":id"],
		isDynamic: true,
		params: ["id"],
		rootParamNames: [],
		page: page_exports$5,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["author", "[id]"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(19),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(19) : null,
		ids: {
			"route": "route:/blog/:id",
			"page": "page:/blog/:id",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/blog/:id",
		patternParts: ["blog", ":id"],
		isDynamic: true,
		params: ["id"],
		rootParamNames: [],
		page: page_exports$4,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["blog", "[id]"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(20),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(20) : null,
		ids: {
			"route": "route:/category/:id",
			"page": "page:/category/:id",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/category/:id",
		patternParts: ["category", ":id"],
		isDynamic: true,
		params: ["id"],
		rootParamNames: [],
		page: page_exports$3,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["category", "[id]"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(21),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(21) : null,
		ids: {
			"route": "route:/single/:id",
			"page": "page:/single/:id",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/single/:id",
		patternParts: ["single", ":id"],
		isDynamic: true,
		params: ["id"],
		rootParamNames: [],
		page: page_exports$2,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["single", "[id]"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(22),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(22) : null,
		ids: {
			"route": "route:/single3/:id",
			"page": "page:/single3/:id",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/single3/:id",
		patternParts: ["single3", ":id"],
		isDynamic: true,
		params: ["id"],
		rootParamNames: [],
		page: page_exports$1,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["single3", "[id]"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	},
	{
		__buildTimeClassifications: __VINEXT_CLASS(23),
		__buildTimeReasons: __classDebug ? __VINEXT_CLASS_REASONS(23) : null,
		ids: {
			"route": "route:/single4/:id",
			"page": "page:/single4/:id",
			"routeHandler": null,
			"rootBoundary": "root-boundary:/",
			"layouts": ["layout:/"],
			"templates": [],
			"slots": {}
		},
		pattern: "/single4/:id",
		patternParts: ["single4", ":id"],
		isDynamic: true,
		params: ["id"],
		rootParamNames: [],
		page: page_exports,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["single4", "[id]"],
		templateTreePositions: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [null],
		errorPaths: [],
		errorTreePositions: [],
		slots: {},
		loading: null,
		error: null,
		notFound: not_found_exports,
		notFounds: [not_found_exports],
		forbidden: null,
		forbiddens: [null],
		unauthorized: null,
		unauthorizeds: [null]
	}
];
var __routeMatcher = createAppRscRouteMatcher(routes);
var metadataRoutes = [{
	type: "favicon",
	isDynamic: false,
	routePrefix: "",
	routeSegments: [],
	servedUrl: "/favicon.ico",
	contentType: "image/x-icon",
	contentHash: "8499e08b0154cdd7",
	headData: {
		"kind": "favicon",
		"href": "/favicon.ico?8499e08b0154cdd7",
		"type": "image/x-icon",
		"sizes": "48x48"
	},
	fileDataBase64: "AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAKBEAAJ4EAAAwMAAAAQAgAGgmAADGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqqKgzgsDA62KouId+/IAiqqgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAB/4AABv9mAAXhqzFD3q0xytytMsfdrTG736wyndytMXzdrDFZ36wuN9ukJA4AAAAAAAAAAP9JAA7/SwBO/2ULYP96FLH/exOd8pAgquGnLuPgqC/f36ow2t+qMNberDHP3awyzN2tMsrcqzF9AAAAAAAAAAD/TABR/00C/f9YBv3/bxD9/3AQ+/aAGfnkoiz846Ms+eKmLvDipi7w4agu4t2sMszdrDLM3awxhwAAAAAAAAAA/0wAVP9NAv//WAb//28Q//9vEP/1fxj/5KEr/+ShK/7ipi7w4qYu8OGnLuPdrDLM3awyzN2sMYcAAAAAAAAAAP9MAFT/TQL//1gG//9vEP//bxD/9X8Y/+ShK//koSv+4qYu8OKmLvDhpy7j3awyzN2sMszdrDGHAAAAAAAAAAD/TABU/00C//9YBv//bxD//28Q//V/GP/koSv/5KEr/uKmLvDipi7w4acu492sMszdrDLM3awxhwAAAAAAAAAA/0wAVP9NAv//WAb//28Q//9vEP/1fxj/5KEr/+ShK/7ipi7w4qYu8OGnLuPdrDLM3awyzN2sMYcAAAAAAAAAAP9MAFT/TQL//1gG//9vEP//bxD/9X8Y/+ShK//koSv+4qYu8OKmLvDhpy7j3awyzN2sMszdrDGHAAAAAAAAAAD/TABU/00C//9YBv//bxD//28Q//V/GP/koSv/5KEr/uKmLvDipi7w4acu492sMszdrDLM3awxhwAAAAAAAAAA/0wAVP9NAv//WAb//28Q//9vEP/1fxj/5KEr/+ShK/7ipi7w4qYu8OGnLuPdrDLM3awyzN2sMYcAAAAAAAAAAP9MAFT/TQL//1gG//9vEP//bxD/9X8Y/+ShK//koSv+4qYu8OKmLvDhpy7j3awyzN2sMszdrDGHAAAAAAAAAAD/TABU/00C//9YBv//bxD//28Q/vWAGP7koSv+5KIs++KmLvDipi7w4acu492sMszdrDLM3awxhwAAAAAAAAAA/0gAJ/9MAp7/Xwik/3cS0P94E8j0ih3R4qUu8OKlLe/ipS3s4acu59+pMNndrDLM3awyzN6tMYIAAAAAAAAAAAAAAAAAAAAA/4ASHP99FW7/fRRa65kldd+rMNTeqzHP3awxyt2sMsLdrTKk3awxft6tMVTYsTEaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANqsLSLcrTF83awxWduoMzLfnzAQv4BABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCsLzHerTB63a0ycNytMlHbrS4y3K4uFuqqKgzfnyAIv4BABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3asygN6tMcnerDLI3a0xxN6uMb/erTK33a0wnt+sM37frDBf2asxQ96uMS/dqioe6qoqDP8AAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAE/3YUDf92FA3/dAAL/4AACP9mAAXdqzCJ3awyzN2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszerTLH3q0yt92sMabdrDCU3aoxftyuMV7Xqi0zzJkzBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AFkb/fxaZ/30Wmf99FYf/fBR1/34VY+WiKrDfqi/Y36kw1t+rMNTeqzHR3qwxz92tMs3drDLM3awyzN2sMszdrDLM3awyzN2sMszdrTLK3K0yxt6sMrPbrTMyAAAAAAAAAAAAAAAAAAAAAAAAAAD/SgA3/0wCm/9NApz/TQKF/2wOtP93E83/eRPG/3sUv/97Fbr/exW46pkm3eKmLvDipi7u4qYt7OKmLurhpy7o4agu5eGnLuPgqC/f36ow2N2tMs3drDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9MApv/TQL7/00C/f9MAvr/ZAr7/28Q+/9vEPr/cBD5/3ER9/9xEfHskiL246Ms+eOiLPjjpC3246Ut8+KmLvDipi7w4qYu8OKlLu/ipi7t3qkw1t2sMszdrDLM3awyzN2sMszdrDLM3asuQwAAAAAAAAAAAAAAAAAAAAAAAAAA/0sCqf9NAv//TQL//00C//9jCv//bxD//28Q//9vEP//bxD//28Q/+yPIf/koSv/5KEr/+ShK//koSz84qUt8eKmLvDipi7w4qYu8OKmLvDfqi/X3awyzN2sMszdrDLM3awyzN2sMszdqy5DAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwKp/00C//9NAv//TQL//2MK//9vEP//bxD//28Q//9vEP//bxD/7I8h/+ShK//koSv/5KEr/+ShK/3ipS3x4qYu8OKmLvDipi7w4qYu8N+qL9fdrDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9LAqn/TQL//00C//9NAv//Ywr//28Q//9vEP//bxD//28Q//9vEP/sjyH/5KEr/+ShK//koSv/5KEr/eKlLfHipi7w4qYu8OKmLvDipi7w36ov192sMszdrDLM3awyzN2sMszdrDLM3asuQwAAAAAAAAAAAAAAAAAAAAAAAAAA/0sCqf9NAv//TQL//00C//9jCv//bxD//28Q//9vEP//bxD//28Q/+yPIf/koSv/5KEr/+ShK//koSv94qUt8eKmLvDipi7w4qYu8OKmLvDfqi/X3awyzN2sMszdrDLM3awyzN2sMszdqy5DAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwKp/00C//9NAv//TQL//2MK//9vEP//bxD//28Q//9vEP//bxD/7I8h/+ShK//koSv/5KEr/+ShK/3ipS3x4qYu8OKmLvDipi7w4qYu8N+qL9fdrDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9LAqn/TQL//00C//9NAv//Ywr//28Q//9vEP//bxD//28Q//9vEP/sjyH/5KEr/+ShK//koSv/5KEr/eKlLfHipi7w4qYu8OKmLvDipi7w36ov192sMszdrDLM3awyzN2sMszdrDLM3asuQwAAAAAAAAAAAAAAAAAAAAAAAAAA/0sCqf9NAv//TQL//00C//9jCv//bxD//28Q//9vEP//bxD//28Q/+yPIf/koSv/5KEr/+ShK//koSv94qUt8eKmLvDipi7w4qYu8OKmLvDfqi/X3awyzN2sMszdrDLM3awyzN2sMszdqy5DAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwKp/00C//9NAv//TQL//2MK//9vEP//bxD//28Q//9vEP//bxD/7I8h/+ShK//koSv/5KEr/+ShK/3ipS3x4qYu8OKmLvDipi7w4qYu8N+qL9fdrDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9LAqn/TQL//00C//9NAv//Ywr//28Q//9vEP//bxD//28Q//9vEP/sjyH/5KEr/+ShK//koSv/5KEr/eKlLfHipi7w4qYu8OKmLvDipi7w36ov192sMszdrDLM3awyzN2sMszdrDLM3asuQwAAAAAAAAAAAAAAAAAAAAAAAAAA/0sCqf9NAv//TQL//00C//9jCv//bxD//28Q//9vEP//bxD//28Q/+yPIf/koSv/5KEr/+ShK//koSv94qUt8eKmLvDipi7w4qYu8OKmLvDfqi/X3awyzN2sMszdrDLM3awyzN2sMszdqy5DAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwKp/00C//9NAv//TQL//2MK//9vEP//bxD//28Q//9vEP//bxD/7I8h/+ShK//koSv/5KEr/+ShK/3ipS3x4qYu8OKmLvDipi7w4qYu8N+qL9fdrDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9LAqn/TQL//00C//9NAv//Ywr//28Q//9vEP//bxD//28Q//9vEP/sjyH/5KEr/+ShK//koSv/5KEr/eKlLfHipi7w4qYu8OKmLvDipi7w36ov192sMszdrDLM3awyzN2sMszdrDLM3asuQwAAAAAAAAAAAAAAAAAAAAAAAAAA/0sCqf9NAv//TQL//00C//9jCv//bxD//28Q//9vEP//bxD//28Q/+yPIf/koSv/5KEr/+ShK//koSv94qUt8eKmLvDipi7w4qYu8OKmLvDfqi/X3awyzN2sMszdrDLM3awyzN2sMszdqy5DAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwKp/00C//9NAv//TQL//2MK//9vEP//bxD//28Q//9vEP//bxD/7I8h/+ShK//koSv/5KEr/+ShK/3ipS3x4qYu8OKmLvDipi7w4qYu8N+qL9fdrDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9LAqn/TQL//00C//9NAv//Ywr//28Q//9vEP//bxD//28Q//9vEP/sjyH/5KEr/+ShK//koSv/5KEr/eKlLfHipi7w4qYu8OKmLvDipi7w36ov192sMszdrDLM3awyzN2sMszdrDLM3asuQwAAAAAAAAAAAAAAAAAAAAAAAAAA/0sCqf9NAv//TQL//00C//9jCv//bxD//28Q//9vEP//bxD//28Q/+yPIf/koSv/5KEr/+ShK//koSv94qUt8eKmLvDipi7w4qYu8OKmLvDfqi/X3awyzN2sMszdrDLM3awyzN2sMszdqy5DAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwKp/00C//9NAv//TQL//2MK//9vEP//bxD//28Q//9vEP//bxD/7I8h/+ShK//koSv/5KEr/+ShK/3ipS3x4qYu8OKmLvDipi7w4qYu8N+qL9fdrDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9LAqn/TQL//00C//9NAv//Ywr//28Q//9vEP//bxD//28Q//9vEP/sjyH/5KEr/+ShK//koSv/5KEr/eKlLfHipi7w4qYu8OKmLvDipi7w36ov192sMszdrDLM3awyzN2sMszdrDLM3asuQwAAAAAAAAAAAAAAAAAAAAAAAAAA/0sCqf9NAv//TQL//00C//9jCv//bxD//28Q//9vEP7/bxD9/28Q/OyQIf3koSv95KEr/eSiLPvjpC324qYu8OKmLvDipi7w4qYu8OKmLvDfqi/X3awyzN2sMszdrDLM3awyzN2sMszdqy5DAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwKE/0wC9P9NAvL/TQHi/2YL6f9xEez/cxLn/3QR4f91Etj/dhLQ65cl5uKlLfHipS3x4qYu8OKmLvDipi7w4qYu8OKmLvDipi7w4qYu7d+qMNXdrDLM3awyzN2sMszdrDLM3awyzN2rLkMAAAAAAAAAAAAAAAAAAAAAAAAAAP9KABj/TABK/0oASP9NADj/dRKO/3sVuv99FbX/fRWz/30Vs/99FbPqmybb4qUu7+KmLu7ipS3u4qYt7eKmLurhpy/l4Kgu4eCpMNzfqjDW3awyzd2sMszdrDLM3awyzN2tMsverTHA3KswOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP99FWD/fRWr/30Vqf9+FJz/fRSP/3wUguaeKcDgqS/e36gw2t+qMNXerDHQ3qwyzt6sMs7drDLN3awyzN2sMszdrDLM3qwyyNysMrjerDKj3awxjd2uMFvYsScNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AOEv+AFDT/ehQy/3wVJf96Fhf/dBcL3aswid2sMszdrDLM3awyzN2sMszdrTHJ3awxxNysMb/erDGw3awyjt2rMGrcqjJI36owMNmqLxvbtiQHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdrTBw3awxxN2uMbzdrTKn3K0xktysMnXdqzJS3aozLeOqKhLmszMKzJkzBQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN6xLBfdri883awxNN6tMR/ooi4LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAADAAAABgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACqqgAD368wENiqLiHarC0i3LA1HdyuLhbdqjMP46o5CaqqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhpS0R36oyV96sMprerDGg3q0xjNytMXPfrjFY3q0xPtiqLifisTEa2aYmFN2qIg/MszMK/5kzBf//AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhrDQi3qwxoNysMsfdqzHJ3awxxdytMcDdrTG73awxtt2sM6/drjKd3q0yhd6sMmzgrTJR26oxOeCyLiHUqioY46oqEtixJw3jqhwJ/4AABAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXqC8m3Kwyr92sMszdrDLM3awyzN2sMszdrDLM3awyzN6tMsverTLH3a0ywd6tMbrerDKz3awyrd2sMqPcrDKQ3q0yet6rMGTbqjFO260uON6qLifdqioe3rEsF92qMw//qgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAC/4AaCv95GBX/ehYX/3kYFf95DRP/dxEP/3YUDf+AAArjnygt3K0xsd2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMsvcrDHH3awywt2tMr3erDK43q0yst2rMafdrDKQ3Kwwdd2sLlPXpzAg/6oAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gBIO/4AVSv+AFYj/fxeT/34Wiv98F3v/fhVr/30TXP+BFE3xkCFe36kuwN6rMdLeqzHR3qwx0N6rMc/eqzHP3qwyzt2tMs3drDLN3awyzN2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrDLM3awyzN2tMsrdrDLF3awywd2tMrTcrDJ11ao5EgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/VQAD/0cAEv9LACn/SgAt/08AKv9MACX/Zwk5/3kTk/98FbX/exW2/30Vsv98Fa3/fRWn/30Uo/99FZ/4iBuq5KIr3+GmLungpy7o4agv5eGoLuLgqS/f4Kgv3eCpMNvfqi/Y36sw1d6sMNPeqzHS3qsx0d6qMdDdrDLN3awyzN2sMszdrDLM3awyzN2sMszdrDLM3awyzN2tMsrdrjKd4rExGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/RwAS/00DY/9NA8H/TALT/00Dxv9NA7P/VQSw/28Q0/91E9f/dhLR/3gUzP96Fcb/exTB/3sUvf96FLz5hRrF5qEq6eKlLfHipi7w4qUu7+KlLu/ipS7u4qYu7eKmLu3ipi7s4qcu6+KnLurhpy7o4acv5eCoMN/fqzDU3awyzd2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwAp/00DwP9NAvj/TQL9/0wC+v9MAvf/UwT1/2sN+f9wEPn/cBD4/28Q+P9wEfb/cBH1/3ER8/9yEe35exbs550o9uOiLPjjpC3246Mt9eOkLfTjpS3z4qUt8eKmLvDipi7w4qYu8OKmLvDipi7v4qYu7uKmLu3gpy/j3aox0N2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/00C2P9NAv7/TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q/v9vEP36eBT86Jon/eShK/3koSv95KEr/eSiLPzkoyz746Ms9+KmLvDipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpy7o3qwx0N2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/5KIs++OkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/46Er/eOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK//koSv/5KIs/OOkLfLipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2/9NAv//TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP//bxD//28Q//9vEP/5eBT/6Jkn/+ShK//koSv/5KEr/+ShK/7koSv946Ms+eKlLfHipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/TAAv/0wC2f9NAv7/TQL//00C//9NAv//UwT//2oN//9vEP//bxD//28Q//9vEP7/bxD9/28Q+/9vEPr6eBT66Jsn/OOhK/3joSv95KEs/OOiLPrjoyz346Ut8+KmLvDipi7w4qYu8OKmLvDipi7w4qYu8OKmLvDhpi7p3qsx0d2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/SwAp/00Dwf9NAvj/TAL8/00C+f9NAvT/UwTy/2sN+P9vEff/cBH2/3ER9P9yEfD/cxLp/3MS4v90E9v5fhfc554p8OKlLfPjpC3y46Qt8uKlLfHipS3x4qYu8OKmLvDipi7w4qYu8OKmLvDipi7w4qYu8OKmLu/hpi/m3qox0N2sMszdrDLM3awyzN2sMszdrDLM3awyzN2sMszdrTGl260uHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/QwAT/0wAZf9NAbb/TAHC/0wBs/9NAJ7/WAWc/3IQy/93EtD/eBPK/3kUxP96FMD/ehS+/3sUvP97FLv4hRrD5qAq6OKmLvDipi7w4qYu8OKmLvDipi7w4qYu8OKlLu/ipi7u4qYu7eKmLezipi7r4qcu6uGnLuffqjDa3qwyzt2sMszdrDLM3awyzN2sMszdrDLM3awyzN2tMsverTKi46ovGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAC/04ADf9PAB3/SAAg/0YAHf9KABj/bg8z/3sVoP99Fbb/fRW0/30Vs/99FbP/fRWz/30Vs/99FbP4hhu+5qIq5uKmLu7jpy7t4qYu7eKlLe3ipi7r4qcu6uGmLujhpy/l4Kcu4eCoL93fqTDZ36sx1d6rMdLerDLO3awyzN2sMszdrDLM3awyzN2sMszdrDLM3awyy92sMsLerDKL3K4uFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/fxEe/34WjP99Fq//fRaw/30Wrv9+FKr/fRSn/30Uo/99FZ/2iBur46Is3uGnL+XgqTDh4Kgw3d+pMNnfqzHV3qsx0t6sMdDerDHP3qsxz96sMs7drDLN3awyzd2sMszdrDLM3awyzN2sMsverTLH3awywt2sMrzdrDK23a0yrN6uMorbrjE//7YkBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gBIO/4AVSv9+FID/fxWH/34Ve/99E2r/fRRa/3wVSv99EjnulCJM36owut6rMdHerDHQ3qsxz96sMs7drDLN3awyzN2sMszdrDLM3awyzN2sMszdrDLL3qwyx96sMb/crDK43qwxsN2sM6berTGS3q0yetytMGDerjBF3qwyLuWwLB3Roi4L//8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAAC/4AaCv95DBX/gAwW/3MNFP+AEBD/gBUM/3EcCf+AAAbfpi0o3awyr92sMszdrDLM3awyzN2sMszdrDLM3a0yy96sMsjerTLD3KwyvtysMrjdrTKv36wxnd2tMoDdrDFi3awxRN+sMyjgrTMZ8aoqEtidJw3btiQH/4AAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADbqDMj260xot2sMsjerDLI3awxxN2sMr7erDK43q4zsNytMp/erTGC3KwwZd6vM0bhrDUr2LExGuO4KhLYsScN27YkB4CAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADVqioS264wW92tMpXcrDGX3K0xgt+tMmferC5N2a0wNeKvMyPisTEa1642E9GiLgu/gEAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAC2J07Dd+1KhjWrTMZ5rMzFO22Nw7jqhwJ/6oAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
}];
var __basePath = "";
var rootNotFoundModule = not_found_exports;
var rootForbiddenModule = null;
var rootUnauthorizedModule = null;
var rootLayouts = [layout_exports];
var globalNotFoundModule = null;
var createRscOnErrorHandler = (request, pathname, routePath) => createAppRscOnErrorHandler(reportRequestError, request, pathname, routePath);
var __fallbackRenderer = createAppFallbackRenderer({
	basePath: "",
	rootBoundaries: {
		rootForbiddenModule,
		rootLayouts,
		rootNotFoundModule,
		rootUnauthorizedModule
	},
	globalErrorModule: null,
	globalNotFoundModule,
	metadataRoutes,
	ssrLoader() {
		return import("./ssr/index.js");
	},
	fontProviders: {
		buildFontLinkHeader: buildAppPageFontLinkHeader,
		getFontLinks: getSSRFontLinks,
		getFontPreloads: _getSSRFontPreloads,
		getFontStyles: _getSSRFontStyles
	},
	makeThenableParams,
	sanitizer: sanitizeErrorForClient,
	rscRenderer: renderToReadableStream,
	getNavigationContext,
	resolveChildSegments: resolveAppPageChildSegments,
	clearRequestContext() {
		clearAppRequestContext();
	},
	createRscOnErrorHandler(request, pathname, routePath) {
		return createRscOnErrorHandler(request, pathname, routePath);
	}
});
function matchRoute(url) {
	return __routeMatcher.matchRoute(url);
}
/**
* Check if a pathname matches any intercepting route.
* Returns the match info or null.
*/
function findIntercept(pathname, sourcePathname = null) {
	return __routeMatcher.findIntercept(pathname, sourcePathname);
}
async function buildPageElements(route, params, routePath, pageRequest) {
	return buildPageElements$1({
		route,
		params,
		routePath,
		pageRequest,
		globalErrorModule: null,
		rootNotFoundModule: not_found_exports,
		rootForbiddenModule: null,
		rootUnauthorizedModule: null,
		metadataRoutes,
		basePath: ""
	});
}
var __trailingSlash = false;
var __i18nConfig = null;
var __configRedirects = [];
var __configRewrites = {
	"beforeFiles": [],
	"afterFiles": [],
	"fallback": []
};
var __configHeaders = [];
var __publicFiles = /* @__PURE__ */ new Set([
	"/assets/css/responsive.css",
	"/assets/css/style.css",
	"/assets/css/vendor/animate.min.css",
	"/assets/css/vendor/bootstrap.min.css",
	"/assets/css/vendor/bootstrap.min.css.map",
	"/assets/css/vendor/elegant-icons.css",
	"/assets/css/vendor/fonts/ElegantIcons.eot",
	"/assets/css/vendor/fonts/ElegantIcons.svg",
	"/assets/css/vendor/fonts/ElegantIcons.ttf",
	"/assets/css/vendor/fonts/ElegantIcons.woff",
	"/assets/css/vendor/index.html",
	"/assets/css/vendor/nice-select.css",
	"/assets/css/vendor/owl.carousel.min.css",
	"/assets/css/vendor/perfect-scrollbar.css",
	"/assets/css/vendor/regular.min.css",
	"/assets/css/vendor/slick.css",
	"/assets/css/vendor/slicknav.css",
	"/assets/css/vendor/ticker-style.css",
	"/assets/css/widgets.css",
	"/assets/imgs/ads/ads-1.jpg",
	"/assets/imgs/authors/author-2.jpg",
	"/assets/imgs/authors/author-3.jpg",
	"/assets/imgs/authors/author-4.jpg",
	"/assets/imgs/authors/author.jpg",
	"/assets/imgs/authors/featured.png",
	"/assets/imgs/authors/sign.png",
	"/assets/imgs/news/news-1.jpg",
	"/assets/imgs/news/news-10.jpg",
	"/assets/imgs/news/news-11.jpg",
	"/assets/imgs/news/news-12.jpg",
	"/assets/imgs/news/news-13.jpg",
	"/assets/imgs/news/news-14.jpg",
	"/assets/imgs/news/news-15.jpg",
	"/assets/imgs/news/news-16.jpg",
	"/assets/imgs/news/news-17.jpg",
	"/assets/imgs/news/news-18.jpg",
	"/assets/imgs/news/news-19.jpg",
	"/assets/imgs/news/news-2.jpg",
	"/assets/imgs/news/news-3.jpg",
	"/assets/imgs/news/news-4.jpg",
	"/assets/imgs/news/news-5.jpg",
	"/assets/imgs/news/news-6.jpg",
	"/assets/imgs/news/news-7.jpg",
	"/assets/imgs/news/news-8.jpg",
	"/assets/imgs/news/news-9.jpg",
	"/assets/imgs/news/thumb-1.jpg",
	"/assets/imgs/news/thumb-10.jpg",
	"/assets/imgs/news/thumb-11.jpg",
	"/assets/imgs/news/thumb-16.jpg",
	"/assets/imgs/news/thumb-17.jpg",
	"/assets/imgs/news/thumb-18.jpg",
	"/assets/imgs/news/thumb-19.jpg",
	"/assets/imgs/news/thumb-2.jpg",
	"/assets/imgs/news/thumb-3.jpg",
	"/assets/imgs/news/thumb-4.jpg",
	"/assets/imgs/news/thumb-5.jpg",
	"/assets/imgs/news/thumb-6.jpg",
	"/assets/imgs/news/thumb-7.jpg",
	"/assets/imgs/news/thumb-8.jpg",
	"/assets/imgs/news/thumb-9.jpg",
	"/assets/imgs/theme/favicon.png",
	"/assets/imgs/theme/logo.png",
	"/assets/imgs/theme/page-not-found.png",
	"/assets/js/main.js",
	"/assets/js/vendor/bootstrap.min.js",
	"/assets/js/vendor/imagesloaded.pkgd.min.js",
	"/assets/js/vendor/imagesloaded.pkgd.min.js.map",
	"/assets/js/vendor/jquery-1.12.4.min.js",
	"/assets/js/vendor/jquery.magnific-popup.js",
	"/assets/js/vendor/jquery.nice-select.min.js",
	"/assets/js/vendor/jquery.scrollUp.min.js",
	"/assets/js/vendor/jquery.slicknav.js",
	"/assets/js/vendor/jquery.sticky.js",
	"/assets/js/vendor/jquery.theia.sticky.js",
	"/assets/js/vendor/jquery.ticker.js",
	"/assets/js/vendor/jquery.vticker-min.js",
	"/assets/js/vendor/masonry.pkgd.min.js",
	"/assets/js/vendor/masonry.pkgd.min.js.map",
	"/assets/js/vendor/modernizr-3.5.0.min.js",
	"/assets/js/vendor/perfect-scrollbar.js",
	"/assets/js/vendor/popper.min.js",
	"/assets/js/vendor/slick.min.js",
	"/assets/js/vendor/waypoints.min.js",
	"/assets/js/vendor/wow.min.js",
	"/static/data.json",
	"/vercel.svg"
]);
var __allowedOrigins = [];
var __expireTime = 31536e3;
var __assetPrefix = "";
function seedMemoryCacheFromPrerender(serverDir) {
	return seedMemoryCacheFromPrerender$1(serverDir, {
		buildAppPageHtmlKey(pathname) {
			return appIsrHtmlKey(pathname);
		},
		buildAppPageRscKey(pathname) {
			return appIsrRscKey(pathname);
		},
		writeAppPageEntry(key, data, metadata) {
			return isrSetPrerenderedAppPage(key, data, metadata);
		}
	});
}
var __allowedDevOrigins = [];
var __safeDevHosts = [
	"localhost",
	"127.0.0.1",
	"[::1]"
];
function __forbidden() {
	return new Response("Forbidden", {
		status: 403,
		headers: { "Content-Type": "text/plain" }
	});
}
function __validateDevRequestOrigin(request) {
	if (request.headers.get("sec-fetch-mode") === "no-cors" && request.headers.get("sec-fetch-site") === "cross-site") {
		console.warn("[vinext] Blocked cross-site no-cors request to " + new URL(request.url).pathname);
		return __forbidden();
	}
	const origin = request.headers.get("origin");
	if (!origin) return null;
	if (origin === "null") {
		if (!__allowedDevOrigins.includes("null")) {
			console.warn("[vinext] Blocked request with Origin: null. Add \"null\" to allowedDevOrigins to allow sandboxed contexts.");
			return __forbidden();
		}
		return null;
	}
	let originHostname;
	try {
		originHostname = new URL(origin).hostname.toLowerCase();
	} catch {
		return __forbidden();
	}
	if (__safeDevHosts.includes(originHostname) || originHostname.endsWith(".localhost")) return null;
	const hostHeader = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (hostHeader && originHostname === hostHeader) return null;
	for (const pattern of __allowedDevOrigins) if (pattern.startsWith("*.")) {
		const suffix = pattern.slice(1);
		if (originHostname === pattern.slice(2) || originHostname.endsWith(suffix)) return null;
	} else if (originHostname === pattern) return null;
	console.warn(`[vinext] Blocked cross-origin request from "${origin}" to ${new URL(request.url).pathname}. To allow this origin, add it to allowedDevOrigins in next.config.js.`);
	return __forbidden();
}
/**
* Maximum server-action request body size.
* Configurable via experimental.serverActions.bodySizeLimit in next.config.
* Defaults to 1MB, matching the Next.js default.
* @see https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions#bodysizelimit
* Prevents unbounded request body buffering.
*/
var __MAX_ACTION_BODY_SIZE = 1048576;
var generateStaticParamsMap = {
	"/author/:id": createAppPrerenderStaticParamsResolver([void 0], []),
	"/blog/:id": createAppPrerenderStaticParamsResolver([void 0], []),
	"/category/:id": createAppPrerenderStaticParamsResolver([void 0], []),
	"/single/:id": createAppPrerenderStaticParamsResolver([void 0], []),
	"/single3/:id": createAppPrerenderStaticParamsResolver([void 0], []),
	"/single4/:id": createAppPrerenderStaticParamsResolver([void 0], [])
};
var _virtual_vinext_rsc_entry_default = createAppRscHandler({
	basePath: "",
	clearRequestContext() {
		clearAppRequestContext();
	},
	configHeaders: __configHeaders,
	configRedirects: __configRedirects,
	configRewrites: __configRewrites,
	dispatchMatchedPage({ cleanPathname, formState, actionError, actionFailed, handlerStart, interceptionContext, isProgressiveActionRender, isRscRequest, middlewareContext, mountedSlotsHeader, params, rootParams, request, route, scriptNonce, searchParams, renderMode }) {
		const PageComponent = route.page?.default;
		const __segmentConfig = resolveAppPageSegmentConfig({
			layouts: route.layouts,
			page: route.page
		});
		const __generateStaticParams = resolveAppPageGenerateStaticParamsSources({
			layouts: route.layouts,
			layoutTreePositions: route.layoutTreePositions,
			page: route.page,
			routeSegments: route.routeSegments
		});
		const _asyncRouteParams = makeThenableParams(params);
		return dispatchAppPage({
			basePath: "",
			buildPageElement(targetRoute, targetParams, targetOpts, targetSearchParams) {
				return buildPageElements(targetRoute, targetParams, cleanPathname, {
					opts: targetOpts,
					searchParams: targetSearchParams,
					isRscRequest,
					request,
					mountedSlotsHeader,
					renderMode
				});
			},
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			createRscOnErrorHandler(pathname, routePath) {
				return createRscOnErrorHandler(request, pathname, routePath);
			},
			debugClassification: __classDebug,
			dynamicConfig: __segmentConfig.dynamicConfig,
			dynamicParamsConfig: __segmentConfig.dynamicParamsConfig,
			fetchCache: __segmentConfig.fetchCache ?? null,
			findIntercept(pathname) {
				return findIntercept(pathname, interceptionContext);
			},
			generateStaticParams: __generateStaticParams,
			getFontLinks: getSSRFontLinks,
			getFontPreloads: _getSSRFontPreloads,
			getFontStyles: _getSSRFontStyles,
			getNavigationContext,
			getSourceRoute(sourceRouteIndex) {
				return routes[sourceRouteIndex];
			},
			hasGenerateStaticParams: __generateStaticParams.length > 0,
			hasPageDefaultExport: !!PageComponent,
			hasPageModule: !!route.page,
			handlerStart,
			interceptionContext,
			expireSeconds: __expireTime,
			formState,
			actionError,
			actionFailed,
			isProgressiveActionRender,
			isProduction: true,
			isRscRequest,
			isrDebug: __isrDebug,
			isrGet,
			isrHtmlKey: appIsrHtmlKey,
			isrRscKey: appIsrRscKey,
			isrSet,
			loadSsrHandler() {
				return import("./ssr/index.js");
			},
			middlewareContext,
			mountedSlotsHeader,
			params,
			rootParams,
			probeLayoutAt(li) {
				const LayoutComp = route.layouts[li]?.default;
				if (!LayoutComp) return null;
				return LayoutComp({
					params: makeThenableParams(resolveAppPageSegmentParams(route.routeSegments, route.layoutTreePositions?.[li] ?? 0, params)),
					children: null
				});
			},
			probePage() {
				return probeAppPage({
					pageComponent: PageComponent,
					asyncRouteParams: _asyncRouteParams,
					searchParams
				});
			},
			renderErrorBoundaryPage(renderErr) {
				return __fallbackRenderer.renderErrorBoundary(route, renderErr, isRscRequest, request, params, scriptNonce, middlewareContext);
			},
			renderHttpAccessFallbackPage(statusCode, opts, currentMiddlewareContext) {
				return __fallbackRenderer.renderHttpAccessFallback(route, statusCode, isRscRequest, request, opts, scriptNonce, currentMiddlewareContext);
			},
			renderToReadableStream,
			request,
			revalidateSeconds: __segmentConfig.revalidateSeconds,
			resolveRouteFetchCacheMode(targetRoute) {
				return __resolveRouteFetchCacheMode(targetRoute);
			},
			rootForbiddenModule,
			rootNotFoundModule,
			rootUnauthorizedModule,
			route,
			runWithSuppressedHookWarning(probe) {
				return suppressHookWarningAls.run(true, probe);
			},
			scheduleBackgroundRegeneration(key, renderFn, errorContext) {
				triggerBackgroundRegeneration(key, renderFn, errorContext);
			},
			scriptNonce,
			searchParams,
			setNavigationContext: setAppNavigationContext,
			renderMode
		});
	},
	dispatchMatchedRouteHandler({ cleanPathname, middlewareContext, params, request, route, searchParams }) {
		return dispatchAppRouteHandler({
			basePath: "",
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			i18n: __i18nConfig,
			isrDebug: __isrDebug,
			isrGet,
			isrRouteKey: appIsrRouteKey,
			isrSet,
			middlewareContext,
			middlewareRequestHeaders: middlewareContext.requestHeaders,
			params,
			request,
			route: {
				pattern: route.pattern,
				routeHandler: route.routeHandler,
				routeSegments: route.routeSegments
			},
			scheduleBackgroundRegeneration: triggerBackgroundRegeneration,
			searchParams
		});
	},
	handleProgressiveActionRequest({ actionId, cleanPathname, contentType, middlewareContext, request }) {
		return handleProgressiveServerActionRequest({
			actionId,
			allowedOrigins: __allowedOrigins,
			basePath: "",
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			contentType,
			decodeAction,
			decodeFormState,
			getAndClearPendingCookies,
			getDraftModeCookieHeader,
			maxActionBodySize: __MAX_ACTION_BODY_SIZE,
			middlewareHeaders: middlewareContext.headers,
			readFormDataWithLimit: readActionFormDataWithLimit,
			reportRequestError,
			request,
			setHeadersAccessPhase
		});
	},
	handleServerActionRequest({ actionId, cleanPathname, contentType, interceptionContext, isRscRequest, middlewareContext, mountedSlotsHeader, request, searchParams }) {
		return handleServerActionRscRequest({
			actionId,
			allowedOrigins: __allowedOrigins,
			basePath: "",
			buildPageElement({ route: actionRoute, params: actionParams, cleanPathname: actionCleanPathname, interceptOpts, searchParams: actionSearchParams, isRscRequest: actionIsRscRequest, request: actionRequest, mountedSlotsHeader: actionMountedSlotsHeader, renderMode: actionRenderMode }) {
				return buildPageElements(actionRoute, actionParams, actionCleanPathname, {
					opts: interceptOpts,
					searchParams: actionSearchParams,
					isRscRequest: actionIsRscRequest,
					request: actionRequest,
					mountedSlotsHeader: actionMountedSlotsHeader,
					renderMode: actionRenderMode
				});
			},
			cleanPathname,
			clearRequestContext() {
				clearAppRequestContext();
			},
			contentType,
			createNotFoundElement(actionRouteId) {
				return {
					...AppElementsWire.createMetadataEntries({
						interceptionContext: null,
						rootLayoutTreePath: null,
						routeId: actionRouteId
					}),
					[actionRouteId]: (0, import_react_react_server.createElement)("div", null, "Page not found")
				};
			},
			createPayloadRouteId(pathnameToRender, currentInterceptionContext) {
				return AppElementsWire.encodeRouteId(pathnameToRender, currentInterceptionContext);
			},
			createRscOnErrorHandler(actionRequest, actionPathname, routePattern) {
				return createRscOnErrorHandler(actionRequest, actionPathname, routePattern);
			},
			createTemporaryReferenceSet,
			decodeReply,
			findIntercept(pathnameToMatch) {
				return findIntercept(pathnameToMatch, interceptionContext);
			},
			getAndClearPendingCookies,
			getDraftModeCookieHeader,
			getRouteParamNames(sourceRoute) {
				return sourceRoute.params;
			},
			getSourceRoute(sourceRouteIndex) {
				return routes[sourceRouteIndex];
			},
			isRscRequest,
			loadServerAction,
			matchRoute(pathnameToMatch) {
				return matchRoute(pathnameToMatch);
			},
			maxActionBodySize: __MAX_ACTION_BODY_SIZE,
			middlewareHeaders: middlewareContext.headers,
			middlewareStatus: middlewareContext.status,
			mountedSlotsHeader,
			readBodyWithLimit: readActionBodyWithLimit,
			readFormDataWithLimit: readActionFormDataWithLimit,
			renderToReadableStream,
			reportRequestError,
			request,
			sanitizeErrorForClient(error) {
				return sanitizeErrorForClient(error);
			},
			searchParams,
			setHeadersAccessPhase,
			setNavigationContext: setAppNavigationContext,
			toInterceptOpts(intercept) {
				return {
					interceptionContext,
					interceptLayouts: intercept.interceptLayouts,
					interceptSlotId: intercept.slotId,
					interceptSlotKey: intercept.slotKey,
					interceptSourceMatchedUrl: interceptionContext,
					interceptPage: intercept.page,
					interceptParams: intercept.matchedParams
				};
			}
		});
	},
	i18nConfig: __i18nConfig,
	isMiddlewareProxy: false,
	makeThenableParams,
	matchRoute,
	metadataRoutes,
	middlewareModule: null,
	publicFiles: __publicFiles,
	renderNotFound({ isRscRequest, matchedParams, middlewareContext, request, route, scriptNonce }) {
		return __fallbackRenderer.renderNotFound(route, isRscRequest, request, matchedParams, scriptNonce, middlewareContext);
	},
	rootParamNamesByPattern: {},
	setNavigationContext: setAppNavigationContext,
	staticParamsMap: generateStaticParamsMap,
	trailingSlash: __trailingSlash,
	validateDevRequestOrigin: __validateDevRequestOrigin
});
//#endregion
export { __assetPrefix, __basePath, _virtual_vinext_rsc_entry_default as default, generateStaticParamsMap, seedMemoryCacheFromPrerender };
