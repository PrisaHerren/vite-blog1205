import { a as __toESM, i as __require, n as __commonJSMin, t as require_react } from "./react-BSUe0WV4.js";
import { t as require_jsx_runtime } from "../../index.js";
import { a as Link, i as usePathname, n as post_default$1, t as Head } from "./head-Bpj-_-sK.js";
import * as __CJS__import__0__ from "masonry-layout";
import AOS from "aos";
import MetisMenu from "metismenujs";
//#region node_modules/vinext/dist/shims/dynamic.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* next/dynamic shim
*
* SSR-safe dynamic imports. On the server, uses React.lazy + Suspense so that
* renderToReadableStream suspends until the dynamically-imported component is
* available. On the client, also uses React.lazy for code splitting.
*
* Works in RSC, SSR, and client environments:
* - RSC: Uses React.lazy + Suspense (available in React 19.x react-server).
*   Falls back to async component pattern if a future React version
*   strips lazy from react-server.
* - SSR: React.lazy + Suspense (renderToReadableStream suspends)
* - Client: React.lazy + Suspense (standard code splitting)
*
* Supports:
* - dynamic(import('./Component'))
* - dynamic(() => import('./Component'))
* - dynamic({ loader })
* - dynamic(() => import('./Component'), { loading: () => <Spinner /> })
* - dynamic(() => import('./Component'), { ssr: false })
*/
var noopRetry = () => {};
function createDynamicLoadingProps(overrides = {}) {
	return {
		error: null,
		isLoading: true,
		pastDelay: true,
		retry: noopRetry,
		timedOut: false,
		...overrides
	};
}
function hasDefaultExport(mod) {
	return (typeof mod === "object" || typeof mod === "function") && mod !== null && "default" in mod;
}
function normalizeLoader(loader) {
	if (typeof loader === "function") return loader;
	return () => loader;
}
function normalizeDynamicOptions(dynamicInput, options) {
	let normalizedOptions;
	if (dynamicInput instanceof Promise || typeof dynamicInput === "function") normalizedOptions = { loader: normalizeLoader(dynamicInput) };
	else normalizedOptions = dynamicInput;
	return {
		...normalizedOptions,
		...options
	};
}
function createLazyComponent(loader) {
	return import_react.lazy(async () => {
		const mod = await loader();
		if (hasDefaultExport(mod)) return mod;
		return { default: mod };
	});
}
function useRetryableLazyComponent(loader, initialLazyComponent) {
	const [LazyComponent, setLazyComponent] = import_react.useState(() => initialLazyComponent);
	const [retryKey, setRetryKey] = import_react.useState(0);
	return {
		LazyComponent,
		retry: import_react.useCallback(() => {
			setLazyComponent(() => createLazyComponent(loader));
			setRetryKey((key) => key + 1);
		}, [loader]),
		retryKey
	};
}
/**
* Lightweight error boundary that renders the loading component with the error
* when a dynamic() loader rejects. Without this, loader failures would propagate
* uncaught through React's rendering — this preserves the Next.js behavior where
* the `loading` component can display errors.
*
* Lazily created because React.Component is not available in the RSC environment
* (server components use a slimmed-down React that doesn't include class components).
*/
var DynamicErrorBoundary;
function getDynamicErrorBoundary() {
	if (DynamicErrorBoundary) return DynamicErrorBoundary;
	if (!import_react.Component) return null;
	DynamicErrorBoundary = class extends import_react.Component {
		constructor(props) {
			super(props);
			this.state = {
				error: null,
				resetKey: props.resetKey
			};
		}
		static getDerivedStateFromProps(props, state) {
			if (props.resetKey !== state.resetKey) return {
				error: null,
				resetKey: props.resetKey
			};
			return null;
		}
		static getDerivedStateFromError(error) {
			return { error: error instanceof Error ? error : new Error(String(error)) };
		}
		render() {
			if (this.state.error) return import_react.createElement(this.props.fallback, createDynamicLoadingProps({
				isLoading: false,
				error: this.state.error,
				retry: this.props.retry
			}));
			return this.props.children;
		}
	};
	return DynamicErrorBoundary;
}
var isServer = typeof window === "undefined";
function dynamic(dynamicInput, options) {
	const { loader: dynamicLoader, loading: LoadingComponent, ssr = true } = normalizeDynamicOptions(dynamicInput, options);
	const loader = dynamicLoader ? normalizeLoader(dynamicLoader) : () => Promise.resolve(() => null);
	if (!ssr) {
		if (isServer) {
			const SSRFalse = (_props) => LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ pastDelay: false })) : null;
			SSRFalse.displayName = "DynamicSSRFalse";
			return SSRFalse;
		}
		const InitialLazyComponent = createLazyComponent(loader);
		const ClientSSRFalse = (props) => {
			const [mounted, setMounted] = import_react.useState(false);
			const { LazyComponent, retry, retryKey } = useRetryableLazyComponent(loader, InitialLazyComponent);
			import_react.useEffect(() => setMounted(true), []);
			if (!mounted) return LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ retry })) : null;
			const fallback = LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ retry })) : null;
			const lazyElement = import_react.createElement(LazyComponent, props);
			let content = lazyElement;
			if (LoadingComponent) {
				const ErrorBoundary = getDynamicErrorBoundary();
				if (ErrorBoundary) content = import_react.createElement(ErrorBoundary, {
					fallback: LoadingComponent,
					retry,
					resetKey: retryKey
				}, lazyElement);
			}
			return import_react.createElement(import_react.Suspense, { fallback }, content);
		};
		ClientSSRFalse.displayName = "DynamicClientSSRFalse";
		return ClientSSRFalse;
	}
	if (isServer) {
		if (typeof import_react.lazy !== "function") {
			const AsyncServerDynamic = async (props) => {
				const mod = await loader();
				const Component = "default" in mod ? mod.default : mod;
				return import_react.createElement(Component, props);
			};
			AsyncServerDynamic.displayName = "DynamicAsyncServer";
			return AsyncServerDynamic;
		}
		const LazyServer = createLazyComponent(loader);
		const ServerDynamic = (props) => {
			const fallback = LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps()) : null;
			const lazyElement = import_react.createElement(LazyServer, props);
			let content = lazyElement;
			if (LoadingComponent) {
				const ErrorBoundary = getDynamicErrorBoundary();
				if (ErrorBoundary) content = import_react.createElement(ErrorBoundary, {
					fallback: LoadingComponent,
					retry: noopRetry,
					resetKey: 0
				}, lazyElement);
			}
			return import_react.createElement(import_react.Suspense, { fallback }, content);
		};
		ServerDynamic.displayName = "DynamicServer";
		return ServerDynamic;
	}
	const InitialLazyComponent = createLazyComponent(loader);
	const ClientDynamic = (props) => {
		const { LazyComponent, retry, retryKey } = useRetryableLazyComponent(loader, InitialLazyComponent);
		const fallback = LoadingComponent ? import_react.createElement(LoadingComponent, createDynamicLoadingProps({ retry })) : null;
		const lazyElement = import_react.createElement(LazyComponent, props);
		let content = lazyElement;
		if (LoadingComponent) {
			const ErrorBoundary = getDynamicErrorBoundary();
			if (ErrorBoundary) content = import_react.createElement(ErrorBoundary, {
				fallback: LoadingComponent,
				retry,
				resetKey: retryKey
			}, lazyElement);
		}
		return import_react.createElement(import_react.Suspense, { fallback }, content);
	};
	ClientDynamic.displayName = "DynamicClient";
	return ClientDynamic;
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
//#region data/author.json
var author_default = [
	{
		"id": 1,
		"img": "author.jpg",
		"title": "Steven",
		"author": "Steven",
		"desc": "Hi, Im Stenven, a Florida native, who left my career in corporate wealth management six years ago to embark on a summer of soul searching that would change the course of my life forever."
	},
	{
		"id": 2,
		"img": "author.jpg",
		"title": "Steven",
		"author": "Steven",
		"desc": "Hi, Im Stenven, a Florida native, who left my career in corporate wealth management six years ago to embark on a summer of soul searching that would change the course of my life forever."
	},
	{
		"id": 3,
		"img": "author.jpg",
		"title": "Steven",
		"author": "Steven",
		"desc": "Hi, Im Stenven, a Florida native, who left my career in corporate wealth management six years ago to embark on a summer of soul searching that would change the course of my life forever."
	}
];
//#endregion
//#region node_modules/react-slick/lib/initial-state.js
var require_initial_state = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = void 0;
	exports["default"] = {
		animating: false,
		autoplaying: null,
		currentDirection: 0,
		currentLeft: null,
		currentSlide: 0,
		direction: 1,
		dragging: false,
		edgeDragged: false,
		initialized: false,
		lazyLoadedList: [],
		listHeight: null,
		listWidth: null,
		scrolling: false,
		slideCount: null,
		slideHeight: null,
		slideWidth: null,
		swipeLeft: null,
		swiped: false,
		swiping: false,
		touchObject: {
			startX: 0,
			startY: 0,
			curX: 0,
			curY: 0
		},
		trackStyle: {},
		trackWidth: 0,
		targetSlide: 0
	};
}));
//#endregion
//#region node_modules/react-slick/lib/default-props.js
var require_default_props = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = void 0;
	var _react = _interopRequireDefault(require_react());
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	exports["default"] = {
		accessibility: true,
		adaptiveHeight: false,
		afterChange: null,
		appendDots: function appendDots(dots) {
			return /*#__PURE__*/ _react["default"].createElement("ul", { style: { display: "block" } }, dots);
		},
		arrows: true,
		autoplay: false,
		autoplaySpeed: 3e3,
		beforeChange: null,
		centerMode: false,
		centerPadding: "50px",
		className: "",
		cssEase: "ease",
		customPaging: function customPaging(i) {
			return /*#__PURE__*/ _react["default"].createElement("button", null, i + 1);
		},
		dots: false,
		dotsClass: "slick-dots",
		draggable: true,
		easing: "linear",
		edgeFriction: .35,
		fade: false,
		focusOnSelect: false,
		infinite: true,
		initialSlide: 0,
		lazyLoad: null,
		nextArrow: null,
		onEdge: null,
		onInit: null,
		onLazyLoadError: null,
		onReInit: null,
		pauseOnDotsHover: false,
		pauseOnFocus: false,
		pauseOnHover: true,
		prevArrow: null,
		responsive: null,
		rows: 1,
		rtl: false,
		slide: "div",
		slidesPerRow: 1,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 500,
		swipe: true,
		swipeEvent: null,
		swipeToSlide: false,
		touchMove: true,
		touchThreshold: 5,
		useCSS: true,
		useTransform: true,
		variableWidth: false,
		vertical: false,
		verticalSwiping: false,
		waitForAnimate: true,
		asNavFor: null,
		unslick: false
	};
}));
//#endregion
//#region node_modules/react-slick/lib/utils/innerSliderUtils.js
var require_innerSliderUtils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.checkSpecKeys = exports.checkNavigable = exports.changeSlide = exports.canUseDOM = exports.canGoNext = void 0;
	exports.clamp = clamp;
	exports.extractObject = void 0;
	exports.filterSettings = filterSettings;
	exports.validSettings = exports.swipeStart = exports.swipeMove = exports.swipeEnd = exports.slidesOnRight = exports.slidesOnLeft = exports.slideHandler = exports.siblingDirection = exports.safePreventDefault = exports.lazyStartIndex = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.keyHandler = exports.initializedState = exports.getWidth = exports.getTrackLeft = exports.getTrackCSS = exports.getTrackAnimateCSS = exports.getTotalSlides = exports.getSwipeDirection = exports.getSlideCount = exports.getRequiredLazySlides = exports.getPreClones = exports.getPostClones = exports.getOnDemandLazySlides = exports.getNavigableIndexes = exports.getHeight = void 0;
	var _react = _interopRequireDefault(require_react());
	var _defaultProps = _interopRequireDefault(require_default_props());
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function clamp(number, lowerBound, upperBound) {
		return Math.max(lowerBound, Math.min(number, upperBound));
	}
	var safePreventDefault = exports.safePreventDefault = function safePreventDefault(event) {
		if (![
			"onTouchStart",
			"onTouchMove",
			"onWheel"
		].includes(event._reactName)) event.preventDefault();
	};
	var getOnDemandLazySlides = exports.getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
		var onDemandSlides = [];
		var startIndex = lazyStartIndex(spec);
		var endIndex = lazyEndIndex(spec);
		for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) if (spec.lazyLoadedList.indexOf(slideIndex) < 0) onDemandSlides.push(slideIndex);
		return onDemandSlides;
	};
	exports.getRequiredLazySlides = function getRequiredLazySlides(spec) {
		var requiredSlides = [];
		var startIndex = lazyStartIndex(spec);
		var endIndex = lazyEndIndex(spec);
		for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) requiredSlides.push(slideIndex);
		return requiredSlides;
	};
	var lazyStartIndex = exports.lazyStartIndex = function lazyStartIndex(spec) {
		return spec.currentSlide - lazySlidesOnLeft(spec);
	};
	var lazyEndIndex = exports.lazyEndIndex = function lazyEndIndex(spec) {
		return spec.currentSlide + lazySlidesOnRight(spec);
	};
	var lazySlidesOnLeft = exports.lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
		return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
	};
	var lazySlidesOnRight = exports.lazySlidesOnRight = function lazySlidesOnRight(spec) {
		return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
	};
	var getWidth = exports.getWidth = function getWidth(elem) {
		return elem && elem.offsetWidth || 0;
	};
	var getHeight = exports.getHeight = function getHeight(elem) {
		return elem && elem.offsetHeight || 0;
	};
	var getSwipeDirection = exports.getSwipeDirection = function getSwipeDirection(touchObject) {
		var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		var xDist = touchObject.startX - touchObject.curX, yDist = touchObject.startY - touchObject.curY, swipeAngle = Math.round(Math.atan2(yDist, xDist) * 180 / Math.PI);
		if (swipeAngle < 0) swipeAngle = 360 - Math.abs(swipeAngle);
		if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) return "left";
		if (swipeAngle >= 135 && swipeAngle <= 225) return "right";
		if (verticalSwiping === true) {
			if (swipeAngle >= 35 && swipeAngle <= 135) return "up";
			else return "down";
		}
		return "vertical";
	};
	var canGoNext = exports.canGoNext = function canGoNext(spec) {
		var canGo = true;
		if (!spec.infinite) {
			if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) canGo = false;
			else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) canGo = false;
		}
		return canGo;
	};
	exports.extractObject = function extractObject(spec, keys) {
		var newObject = {};
		keys.forEach(function(key) {
			return newObject[key] = spec[key];
		});
		return newObject;
	};
	exports.initializedState = function initializedState(spec) {
		var slideCount = _react["default"].Children.count(spec.children);
		var listNode = spec.listRef;
		var listWidth = Math.ceil(getWidth(listNode));
		var trackNode = spec.trackRef && spec.trackRef.node;
		var trackWidth = Math.ceil(getWidth(trackNode));
		var slideWidth;
		if (!spec.vertical) {
			var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
			if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") centerPaddingAdj *= listWidth / 100;
			slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
		} else slideWidth = listWidth;
		var slideHeight = listNode && getHeight(listNode.querySelector("[data-index=\"0\"]"));
		var listHeight = slideHeight * spec.slidesToShow;
		var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
		if (spec.rtl && spec.currentSlide === void 0) currentSlide = slideCount - 1 - spec.initialSlide;
		var lazyLoadedList = spec.lazyLoadedList || [];
		var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
			currentSlide,
			lazyLoadedList
		}));
		lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
		var state = {
			slideCount,
			slideWidth,
			listWidth,
			trackWidth,
			currentSlide,
			slideHeight,
			listHeight,
			lazyLoadedList
		};
		if (spec.autoplaying === null && spec.autoplay) state["autoplaying"] = "playing";
		return state;
	};
	exports.slideHandler = function slideHandler(spec) {
		var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
		var lazyLoadedList = spec.lazyLoadedList;
		if (waitForAnimate && animating) return {};
		var animationSlide = index, finalSlide, animationLeft, finalLeft;
		var state = {}, nextState = {};
		var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
		if (fade) {
			if (!infinite && (index < 0 || index >= slideCount)) return {};
			if (index < 0) animationSlide = index + slideCount;
			else if (index >= slideCount) animationSlide = index - slideCount;
			if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) lazyLoadedList = lazyLoadedList.concat(animationSlide);
			state = {
				animating: true,
				currentSlide: animationSlide,
				lazyLoadedList,
				targetSlide: animationSlide
			};
			nextState = {
				animating: false,
				targetSlide: animationSlide
			};
		} else {
			finalSlide = animationSlide;
			if (animationSlide < 0) {
				finalSlide = animationSlide + slideCount;
				if (!infinite) finalSlide = 0;
				else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
			} else if (!canGoNext(spec) && animationSlide > currentSlide) animationSlide = finalSlide = currentSlide;
			else if (centerMode && animationSlide >= slideCount) {
				animationSlide = infinite ? slideCount : slideCount - 1;
				finalSlide = infinite ? 0 : slideCount - 1;
			} else if (animationSlide >= slideCount) {
				finalSlide = animationSlide - slideCount;
				if (!infinite) finalSlide = slideCount - slidesToShow;
				else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
			}
			if (!infinite && animationSlide + slidesToShow >= slideCount) finalSlide = slideCount - slidesToShow;
			animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, { slideIndex: animationSlide }));
			finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, { slideIndex: finalSlide }));
			if (!infinite) {
				if (animationLeft === finalLeft) animationSlide = finalSlide;
				animationLeft = finalLeft;
			}
			if (lazyLoad) lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, { currentSlide: animationSlide })));
			if (!useCSS) state = {
				currentSlide: finalSlide,
				trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, { left: finalLeft })),
				lazyLoadedList,
				targetSlide
			};
			else {
				state = {
					animating: true,
					currentSlide: finalSlide,
					trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, { left: animationLeft })),
					lazyLoadedList,
					targetSlide
				};
				nextState = {
					animating: false,
					currentSlide: finalSlide,
					trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, { left: finalLeft })),
					swipeLeft: null,
					targetSlide
				};
			}
		}
		return {
			state,
			nextState
		};
	};
	exports.changeSlide = function changeSlide(spec, options) {
		var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
		var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
		unevenOffset = slideCount % slidesToScroll !== 0;
		indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
		if (options.message === "previous") {
			slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
			targetSlide = currentSlide - slideOffset;
			if (lazyLoad && !infinite) {
				previousInt = currentSlide - slideOffset;
				targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
			}
			if (!infinite) targetSlide = previousTargetSlide - slidesToScroll;
		} else if (options.message === "next") {
			slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
			targetSlide = currentSlide + slideOffset;
			if (lazyLoad && !infinite) targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
			if (!infinite) targetSlide = previousTargetSlide + slidesToScroll;
		} else if (options.message === "dots") targetSlide = options.index * options.slidesToScroll;
		else if (options.message === "children") {
			targetSlide = options.index;
			if (infinite) {
				var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, { targetSlide }));
				if (targetSlide > options.currentSlide && direction === "left") targetSlide = targetSlide - slideCount;
				else if (targetSlide < options.currentSlide && direction === "right") targetSlide = targetSlide + slideCount;
			}
		} else if (options.message === "index") targetSlide = Number(options.index);
		return targetSlide;
	};
	exports.keyHandler = function keyHandler(e, accessibility, rtl) {
		if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
		if (e.keyCode === 37) return rtl ? "next" : "previous";
		if (e.keyCode === 39) return rtl ? "previous" : "next";
		return "";
	};
	exports.swipeStart = function swipeStart(e, swipe, draggable) {
		e.target.tagName === "IMG" && safePreventDefault(e);
		if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
		return {
			dragging: true,
			touchObject: {
				startX: e.touches ? e.touches[0].pageX : e.clientX,
				startY: e.touches ? e.touches[0].pageY : e.clientY,
				curX: e.touches ? e.touches[0].pageX : e.clientX,
				curY: e.touches ? e.touches[0].pageY : e.clientY
			}
		};
	};
	exports.swipeMove = function swipeMove(e, spec) {
		var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
		if (scrolling) return;
		if (animating) return safePreventDefault(e);
		if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
		var swipeLeft, state = {};
		var curLeft = getTrackLeft(spec);
		touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
		touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
		touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
		var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
		if (!verticalSwiping && !swiping && verticalSwipeLength > 10) return { scrolling: true };
		if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
		var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
		if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
		var dotCount = Math.ceil(slideCount / slidesToScroll);
		var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
		var touchSwipeLength = touchObject.swipeLength;
		if (!infinite) {
			if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
				touchSwipeLength = touchObject.swipeLength * edgeFriction;
				if (edgeDragged === false && onEdge) {
					onEdge(swipeDirection);
					state["edgeDragged"] = true;
				}
			}
		}
		if (!swiped && swipeEvent) {
			swipeEvent(swipeDirection);
			state["swiped"] = true;
		}
		if (!vertical) {
			if (!rtl) swipeLeft = curLeft + touchSwipeLength * positionOffset;
			else swipeLeft = curLeft - touchSwipeLength * positionOffset;
		} else swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
		if (verticalSwiping) swipeLeft = curLeft + touchSwipeLength * positionOffset;
		state = _objectSpread(_objectSpread({}, state), {}, {
			touchObject,
			swipeLeft,
			trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, { left: swipeLeft }))
		});
		if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * .8) return state;
		if (touchObject.swipeLength > 10) {
			state["swiping"] = true;
			safePreventDefault(e);
		}
		return state;
	};
	exports.swipeEnd = function swipeEnd(e, spec) {
		var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
		if (!dragging) {
			if (swipe) safePreventDefault(e);
			return {};
		}
		var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
		var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
		var state = {
			dragging: false,
			edgeDragged: false,
			scrolling: false,
			swiping: false,
			swiped: false,
			swipeLeft: null,
			touchObject: {}
		};
		if (scrolling) return state;
		if (!touchObject.swipeLength) return state;
		if (touchObject.swipeLength > minSwipe) {
			safePreventDefault(e);
			if (onSwipe) onSwipe(swipeDirection);
			var slideCount, newSlide;
			var activeSlide = infinite ? currentSlide : targetSlide;
			switch (swipeDirection) {
				case "left":
				case "up":
					newSlide = activeSlide + getSlideCount(spec);
					slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
					state["currentDirection"] = 0;
					break;
				case "right":
				case "down":
					newSlide = activeSlide - getSlideCount(spec);
					slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
					state["currentDirection"] = 1;
					break;
				default: slideCount = activeSlide;
			}
			state["triggerSlideHandler"] = slideCount;
		} else {
			var currentLeft = getTrackLeft(spec);
			state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, { left: currentLeft }));
		}
		return state;
	};
	var getNavigableIndexes = exports.getNavigableIndexes = function getNavigableIndexes(spec) {
		var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
		var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
		var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
		var indexes = [];
		while (breakpoint < max) {
			indexes.push(breakpoint);
			breakpoint = counter + spec.slidesToScroll;
			counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
		}
		return indexes;
	};
	var checkNavigable = exports.checkNavigable = function checkNavigable(spec, index) {
		var navigables = getNavigableIndexes(spec);
		var prevNavigable = 0;
		if (index > navigables[navigables.length - 1]) index = navigables[navigables.length - 1];
		else for (var n in navigables) {
			if (index < navigables[n]) {
				index = prevNavigable;
				break;
			}
			prevNavigable = navigables[n];
		}
		return index;
	};
	var getSlideCount = exports.getSlideCount = function getSlideCount(spec) {
		var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
		if (spec.swipeToSlide) {
			var swipedSlide;
			var slickList = spec.listRef;
			var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
			Array.from(slides).every(function(slide) {
				if (!spec.vertical) {
					if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
						swipedSlide = slide;
						return false;
					}
				} else if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
					swipedSlide = slide;
					return false;
				}
				return true;
			});
			if (!swipedSlide) return 0;
			var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
			return Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
		} else return spec.slidesToScroll;
	};
	var checkSpecKeys = exports.checkSpecKeys = function checkSpecKeys(spec, keysArray) {
		return keysArray.reduce(function(value, key) {
			return value && spec.hasOwnProperty(key);
		}, true) ? null : console.error("Keys Missing:", spec);
	};
	var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
		checkSpecKeys(spec, [
			"left",
			"variableWidth",
			"slideCount",
			"slidesToShow",
			"slideWidth"
		]);
		var trackWidth, trackHeight;
		if (!spec.vertical) trackWidth = getTotalSlides(spec) * spec.slideWidth;
		else trackHeight = (spec.unslick ? spec.slideCount : spec.slideCount + 2 * spec.slidesToShow) * spec.slideHeight;
		var style = {
			opacity: 1,
			transition: "",
			WebkitTransition: ""
		};
		if (spec.useTransform) {
			var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
			var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
			var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
			style = _objectSpread(_objectSpread({}, style), {}, {
				WebkitTransform,
				transform,
				msTransform
			});
		} else if (spec.vertical) style["top"] = spec.left;
		else style["left"] = spec.left;
		if (spec.fade) style = { opacity: 1 };
		if (trackWidth) style.width = trackWidth;
		if (trackHeight) style.height = trackHeight;
		if (window && !window.addEventListener && window.attachEvent) {
			if (!spec.vertical) style.marginLeft = spec.left + "px";
			else style.marginTop = spec.left + "px";
		}
		return style;
	};
	var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
		checkSpecKeys(spec, [
			"left",
			"variableWidth",
			"slideCount",
			"slidesToShow",
			"slideWidth",
			"speed",
			"cssEase"
		]);
		var style = getTrackCSS(spec);
		if (spec.useTransform) {
			style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
			style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
		} else if (spec.vertical) style.transition = "top " + spec.speed + "ms " + spec.cssEase;
		else style.transition = "left " + spec.speed + "ms " + spec.cssEase;
		return style;
	};
	var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {
		if (spec.unslick) return 0;
		checkSpecKeys(spec, [
			"slideIndex",
			"trackRef",
			"infinite",
			"centerMode",
			"slideCount",
			"slidesToShow",
			"slidesToScroll",
			"slideWidth",
			"listWidth",
			"variableWidth",
			"slideHeight"
		]);
		var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
		var slideOffset = 0;
		var targetLeft;
		var targetSlide;
		var verticalOffset = 0;
		if (fade || spec.slideCount === 1) return 0;
		var slidesToOffset = 0;
		if (infinite) {
			slidesToOffset = -getPreClones(spec);
			if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
			if (centerMode) slidesToOffset += parseInt(slidesToShow / 2);
		} else {
			if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) slidesToOffset = slidesToShow - slideCount % slidesToScroll;
			if (centerMode) slidesToOffset = parseInt(slidesToShow / 2);
		}
		slideOffset = slidesToOffset * slideWidth;
		verticalOffset = slidesToOffset * slideHeight;
		if (!vertical) targetLeft = slideIndex * slideWidth * -1 + slideOffset;
		else targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
		if (variableWidth === true) {
			var targetSlideIndex;
			var trackElem = trackRef && trackRef.node;
			targetSlideIndex = slideIndex + getPreClones(spec);
			targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
			targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
			if (centerMode === true) {
				targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
				targetSlide = trackElem && trackElem.children[targetSlideIndex];
				targetLeft = 0;
				for (var slide = 0; slide < targetSlideIndex; slide++) targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
				targetLeft -= parseInt(spec.centerPadding);
				targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
			}
		}
		return targetLeft;
	};
	var getPreClones = exports.getPreClones = function getPreClones(spec) {
		if (spec.unslick || !spec.infinite) return 0;
		if (spec.variableWidth) return spec.slideCount;
		return spec.slidesToShow + (spec.centerMode ? 1 : 0);
	};
	var getPostClones = exports.getPostClones = function getPostClones(spec) {
		if (spec.unslick || !spec.infinite) return 0;
		if (spec.variableWidth) return spec.slideCount;
		return spec.slidesToShow + (spec.centerMode ? 1 : 0);
	};
	var getTotalSlides = exports.getTotalSlides = function getTotalSlides(spec) {
		return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
	};
	var siblingDirection = exports.siblingDirection = function siblingDirection(spec) {
		if (spec.targetSlide > spec.currentSlide) {
			if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) return "left";
			return "right";
		} else {
			if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) return "right";
			return "left";
		}
	};
	var slidesOnRight = exports.slidesOnRight = function slidesOnRight(_ref) {
		var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
		if (centerMode) {
			var right = (slidesToShow - 1) / 2 + 1;
			if (parseInt(centerPadding) > 0) right += 1;
			if (rtl && slidesToShow % 2 === 0) right += 1;
			return right;
		}
		if (rtl) return 0;
		return slidesToShow - 1;
	};
	var slidesOnLeft = exports.slidesOnLeft = function slidesOnLeft(_ref2) {
		var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
		if (centerMode) {
			var left = (slidesToShow - 1) / 2 + 1;
			if (parseInt(centerPadding) > 0) left += 1;
			if (!rtl && slidesToShow % 2 === 0) left += 1;
			return left;
		}
		if (rtl) return slidesToShow - 1;
		return 0;
	};
	exports.canUseDOM = function canUseDOM() {
		return !!(typeof window !== "undefined" && window.document && window.document.createElement);
	};
	var validSettings = exports.validSettings = Object.keys(_defaultProps["default"]);
	function filterSettings(settings) {
		return validSettings.reduce(function(acc, settingName) {
			if (settings.hasOwnProperty(settingName)) acc[settingName] = settings[settingName];
			return acc;
		}, {});
	}
}));
//#endregion
//#region node_modules/react-slick/lib/track.js
var require_track = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Track = void 0;
	var _react = _interopRequireDefault(require_react());
	var _classnames$3 = _interopRequireDefault(__require("classnames"));
	var _innerSliderUtils = require_innerSliderUtils();
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	function _createSuper(t) {
		var r = _isNativeReflectConstruct();
		return function() {
			var e, o = _getPrototypeOf(t);
			if (r) {
				var s = _getPrototypeOf(this).constructor;
				e = Reflect.construct(o, arguments, s);
			} else e = o.apply(this, arguments);
			return _possibleConstructorReturn(this, e);
		};
	}
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	var getSlideClasses = function getSlideClasses(spec) {
		var slickActive, slickCenter, slickCloned;
		var centerOffset, index;
		if (spec.rtl) index = spec.slideCount - 1 - spec.index;
		else index = spec.index;
		slickCloned = index < 0 || index >= spec.slideCount;
		if (spec.centerMode) {
			centerOffset = Math.floor(spec.slidesToShow / 2);
			slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
			if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) slickActive = true;
		} else slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
		var focusedSlide;
		if (spec.targetSlide < 0) focusedSlide = spec.targetSlide + spec.slideCount;
		else if (spec.targetSlide >= spec.slideCount) focusedSlide = spec.targetSlide - spec.slideCount;
		else focusedSlide = spec.targetSlide;
		return {
			"slick-slide": true,
			"slick-active": slickActive,
			"slick-center": slickCenter,
			"slick-cloned": slickCloned,
			"slick-current": index === focusedSlide
		};
	};
	var getSlideStyle = function getSlideStyle(spec) {
		var style = {};
		if (spec.variableWidth === void 0 || spec.variableWidth === false) style.width = spec.slideWidth;
		if (spec.fade) {
			style.position = "relative";
			if (spec.vertical) style.top = -spec.index * parseInt(spec.slideHeight);
			else style.left = -spec.index * parseInt(spec.slideWidth);
			style.opacity = spec.currentSlide === spec.index ? 1 : 0;
			style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
			if (spec.useCSS) style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", visibility " + spec.speed + "ms " + spec.cssEase;
		}
		return style;
	};
	var getKey = function getKey(child, fallbackKey) {
		return child.key || fallbackKey;
	};
	var renderSlides = function renderSlides(spec) {
		var key;
		var slides = [];
		var preCloneSlides = [];
		var postCloneSlides = [];
		var childrenCount = _react["default"].Children.count(spec.children);
		var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
		var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
		_react["default"].Children.forEach(spec.children, function(elem, index) {
			var child;
			var childOnClickOptions = {
				message: "children",
				index,
				slidesToScroll: spec.slidesToScroll,
				currentSlide: spec.currentSlide
			};
			if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) child = elem;
			else child = /*#__PURE__*/ _react["default"].createElement("div", null);
			var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, { index }));
			var slideClass = child.props.className || "";
			var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, { index }));
			slides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
				key: "original" + getKey(child, index),
				"data-index": index,
				className: (0, _classnames$3["default"])(slideClasses, slideClass),
				tabIndex: "-1",
				"aria-hidden": !slideClasses["slick-active"],
				style: _objectSpread(_objectSpread({ outline: "none" }, child.props.style || {}), childStyle),
				onClick: function onClick(e) {
					child.props && child.props.onClick && child.props.onClick(e);
					if (spec.focusOnSelect) spec.focusOnSelect(childOnClickOptions);
				}
			}));
			if (spec.infinite && childrenCount > 1 && spec.fade === false && !spec.unslick) {
				var preCloneNo = childrenCount - index;
				if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec)) {
					key = -preCloneNo;
					if (key >= startIndex) child = elem;
					slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, { index: key }));
					preCloneSlides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
						key: "precloned" + getKey(child, key),
						"data-index": key,
						tabIndex: "-1",
						className: (0, _classnames$3["default"])(slideClasses, slideClass),
						"aria-hidden": !slideClasses["slick-active"],
						style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
						onClick: function onClick(e) {
							child.props && child.props.onClick && child.props.onClick(e);
							if (spec.focusOnSelect) spec.focusOnSelect(childOnClickOptions);
						}
					}));
				}
				if (index < (0, _innerSliderUtils.getPostClones)(spec)) {
					key = childrenCount + index;
					if (key < endIndex) child = elem;
					slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, { index: key }));
					postCloneSlides.push(/*#__PURE__*/ _react["default"].cloneElement(child, {
						key: "postcloned" + getKey(child, key),
						"data-index": key,
						tabIndex: "-1",
						className: (0, _classnames$3["default"])(slideClasses, slideClass),
						"aria-hidden": !slideClasses["slick-active"],
						style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
						onClick: function onClick(e) {
							child.props && child.props.onClick && child.props.onClick(e);
							if (spec.focusOnSelect) spec.focusOnSelect(childOnClickOptions);
						}
					}));
				}
			}
		});
		if (spec.rtl) return preCloneSlides.concat(slides, postCloneSlides).reverse();
		else return preCloneSlides.concat(slides, postCloneSlides);
	};
	exports.Track = /*#__PURE__*/ function(_React$PureComponent) {
		_inherits(Track, _React$PureComponent);
		var _super = _createSuper(Track);
		function Track() {
			var _this;
			_classCallCheck(this, Track);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _super.call.apply(_super, [this].concat(args));
			_defineProperty(_assertThisInitialized(_this), "node", null);
			_defineProperty(_assertThisInitialized(_this), "handleRef", function(ref) {
				_this.node = ref;
			});
			return _this;
		}
		_createClass(Track, [{
			key: "render",
			value: function render() {
				var slides = renderSlides(this.props);
				var _this$props = this.props;
				var mouseEvents = {
					onMouseEnter: _this$props.onMouseEnter,
					onMouseOver: _this$props.onMouseOver,
					onMouseLeave: _this$props.onMouseLeave
				};
				return /*#__PURE__*/ _react["default"].createElement("div", _extends({
					ref: this.handleRef,
					className: "slick-track",
					style: this.props.trackStyle
				}, mouseEvents), slides);
			}
		}]);
		return Track;
	}(_react["default"].PureComponent);
}));
//#endregion
//#region node_modules/react-slick/lib/dots.js
var require_dots = /* @__PURE__ */ __commonJSMin(((exports) => {
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Dots = void 0;
	var _react = _interopRequireDefault(require_react());
	var _classnames$2 = _interopRequireDefault(__require("classnames"));
	var _innerSliderUtils = require_innerSliderUtils();
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	function _createSuper(t) {
		var r = _isNativeReflectConstruct();
		return function() {
			var e, o = _getPrototypeOf(t);
			if (r) {
				var s = _getPrototypeOf(this).constructor;
				e = Reflect.construct(o, arguments, s);
			} else e = o.apply(this, arguments);
			return _possibleConstructorReturn(this, e);
		};
	}
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}
	var getDotCount = function getDotCount(spec) {
		var dots;
		if (spec.infinite) dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
		else dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
		return dots;
	};
	exports.Dots = /*#__PURE__*/ function(_React$PureComponent) {
		_inherits(Dots, _React$PureComponent);
		var _super = _createSuper(Dots);
		function Dots() {
			_classCallCheck(this, Dots);
			return _super.apply(this, arguments);
		}
		_createClass(Dots, [{
			key: "clickHandler",
			value: function clickHandler(options, e) {
				e.preventDefault();
				this.props.clickHandler(options);
			}
		}, {
			key: "render",
			value: function render() {
				var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
				var dotCount = getDotCount({
					slideCount,
					slidesToScroll,
					slidesToShow,
					infinite
				});
				var mouseEvents = {
					onMouseEnter,
					onMouseOver,
					onMouseLeave
				};
				var dots = [];
				for (var i = 0; i < dotCount; i++) {
					var _rightBound = (i + 1) * slidesToScroll - 1;
					var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
					var _leftBound = rightBound - (slidesToScroll - 1);
					var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
					var className = (0, _classnames$2["default"])({ "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound });
					var dotOptions = {
						message: "dots",
						index: i,
						slidesToScroll,
						currentSlide
					};
					var onClick = this.clickHandler.bind(this, dotOptions);
					dots = dots.concat(/*#__PURE__*/ _react["default"].createElement("li", {
						key: i,
						className
					}, /*#__PURE__*/ _react["default"].cloneElement(this.props.customPaging(i), { onClick })));
				}
				return /*#__PURE__*/ _react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({ className: this.props.dotsClass }, mouseEvents));
			}
		}]);
		return Dots;
	}(_react["default"].PureComponent);
}));
//#endregion
//#region node_modules/react-slick/lib/arrows.js
var require_arrows = /* @__PURE__ */ __commonJSMin(((exports) => {
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PrevArrow = exports.NextArrow = void 0;
	var _react = _interopRequireDefault(require_react());
	var _classnames$1 = _interopRequireDefault(__require("classnames"));
	var _innerSliderUtils = require_innerSliderUtils();
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	function _createSuper(t) {
		var r = _isNativeReflectConstruct();
		return function() {
			var e, o = _getPrototypeOf(t);
			if (r) {
				var s = _getPrototypeOf(this).constructor;
				e = Reflect.construct(o, arguments, s);
			} else e = o.apply(this, arguments);
			return _possibleConstructorReturn(this, e);
		};
	}
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}
	exports.PrevArrow = /*#__PURE__*/ function(_React$PureComponent) {
		_inherits(PrevArrow, _React$PureComponent);
		var _super = _createSuper(PrevArrow);
		function PrevArrow() {
			_classCallCheck(this, PrevArrow);
			return _super.apply(this, arguments);
		}
		_createClass(PrevArrow, [{
			key: "clickHandler",
			value: function clickHandler(options, e) {
				if (e) e.preventDefault();
				this.props.clickHandler(options, e);
			}
		}, {
			key: "render",
			value: function render() {
				var prevClasses = {
					"slick-arrow": true,
					"slick-prev": true
				};
				var prevHandler = this.clickHandler.bind(this, { message: "previous" });
				if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
					prevClasses["slick-disabled"] = true;
					prevHandler = null;
				}
				var prevArrowProps = {
					key: "0",
					"data-role": "none",
					className: (0, _classnames$1["default"])(prevClasses),
					style: { display: "block" },
					onClick: prevHandler
				};
				var customProps = {
					currentSlide: this.props.currentSlide,
					slideCount: this.props.slideCount
				};
				var prevArrow;
				if (this.props.prevArrow) prevArrow = /*#__PURE__*/ _react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
				else prevArrow = /*#__PURE__*/ _react["default"].createElement("button", _extends({
					key: "0",
					type: "button"
				}, prevArrowProps), " ", "Previous");
				return prevArrow;
			}
		}]);
		return PrevArrow;
	}(_react["default"].PureComponent);
	exports.NextArrow = /*#__PURE__*/ function(_React$PureComponent2) {
		_inherits(NextArrow, _React$PureComponent2);
		var _super2 = _createSuper(NextArrow);
		function NextArrow() {
			_classCallCheck(this, NextArrow);
			return _super2.apply(this, arguments);
		}
		_createClass(NextArrow, [{
			key: "clickHandler",
			value: function clickHandler(options, e) {
				if (e) e.preventDefault();
				this.props.clickHandler(options, e);
			}
		}, {
			key: "render",
			value: function render() {
				var nextClasses = {
					"slick-arrow": true,
					"slick-next": true
				};
				var nextHandler = this.clickHandler.bind(this, { message: "next" });
				if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
					nextClasses["slick-disabled"] = true;
					nextHandler = null;
				}
				var nextArrowProps = {
					key: "1",
					"data-role": "none",
					className: (0, _classnames$1["default"])(nextClasses),
					style: { display: "block" },
					onClick: nextHandler
				};
				var customProps = {
					currentSlide: this.props.currentSlide,
					slideCount: this.props.slideCount
				};
				var nextArrow;
				if (this.props.nextArrow) nextArrow = /*#__PURE__*/ _react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
				else nextArrow = /*#__PURE__*/ _react["default"].createElement("button", _extends({
					key: "1",
					type: "button"
				}, nextArrowProps), " ", "Next");
				return nextArrow;
			}
		}]);
		return NextArrow;
	}(_react["default"].PureComponent);
}));
//#endregion
//#region node_modules/react-slick/lib/inner-slider.js
var require_inner_slider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InnerSlider = void 0;
	var _react = _interopRequireDefault(require_react());
	var _initialState = _interopRequireDefault(require_initial_state());
	var _lodash = _interopRequireDefault(__require("lodash.debounce"));
	var _classnames = _interopRequireDefault(__require("classnames"));
	var _innerSliderUtils = require_innerSliderUtils();
	var _track = require_track();
	var _dots = require_dots();
	var _arrows = require_arrows();
	var _resizeObserverPolyfill = _interopRequireDefault(__require("resize-observer-polyfill"));
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o, r, i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (e.includes(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	function _createSuper(t) {
		var r = _isNativeReflectConstruct();
		return function() {
			var e, o = _getPrototypeOf(t);
			if (r) {
				var s = _getPrototypeOf(this).constructor;
				e = Reflect.construct(o, arguments, s);
			} else e = o.apply(this, arguments);
			return _possibleConstructorReturn(this, e);
		};
	}
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	exports.InnerSlider = /*#__PURE__*/ function(_React$Component) {
		_inherits(InnerSlider, _React$Component);
		var _super = _createSuper(InnerSlider);
		function InnerSlider(props) {
			var _this;
			_classCallCheck(this, InnerSlider);
			_this = _super.call(this, props);
			_defineProperty(_assertThisInitialized(_this), "listRefHandler", function(ref) {
				return _this.list = ref;
			});
			_defineProperty(_assertThisInitialized(_this), "trackRefHandler", function(ref) {
				return _this.track = ref;
			});
			_defineProperty(_assertThisInitialized(_this), "adaptHeight", function() {
				if (_this.props.adaptiveHeight && _this.list) {
					var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));
					_this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
				}
			});
			_defineProperty(_assertThisInitialized(_this), "componentDidMount", function() {
				_this.props.onInit && _this.props.onInit();
				if (_this.props.lazyLoad) {
					var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
					if (slidesToLoad.length > 0) {
						_this.setState(function(prevState) {
							return { lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) };
						});
						if (_this.props.onLazyLoad) _this.props.onLazyLoad(slidesToLoad);
					}
				}
				var spec = _objectSpread({
					listRef: _this.list,
					trackRef: _this.track
				}, _this.props);
				_this.updateState(spec, true, function() {
					_this.adaptHeight();
					_this.props.autoplay && _this.autoPlay("update");
				});
				if (_this.props.lazyLoad === "progressive") _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1e3);
				_this.ro = new _resizeObserverPolyfill["default"](function() {
					if (_this.state.animating) {
						_this.onWindowResized(false);
						_this.callbackTimers.push(setTimeout(function() {
							return _this.onWindowResized();
						}, _this.props.speed));
					} else _this.onWindowResized();
				});
				_this.ro.observe(_this.list);
				document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
					slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
					slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
				});
				if (window.addEventListener) window.addEventListener("resize", _this.onWindowResized);
				else window.attachEvent("onresize", _this.onWindowResized);
			});
			_defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function() {
				if (_this.animationEndCallback) clearTimeout(_this.animationEndCallback);
				if (_this.lazyLoadTimer) clearInterval(_this.lazyLoadTimer);
				if (_this.callbackTimers.length) {
					_this.callbackTimers.forEach(function(timer) {
						return clearTimeout(timer);
					});
					_this.callbackTimers = [];
				}
				if (window.addEventListener) window.removeEventListener("resize", _this.onWindowResized);
				else window.detachEvent("onresize", _this.onWindowResized);
				if (_this.autoplayTimer) clearInterval(_this.autoplayTimer);
				_this.ro.disconnect();
			});
			_defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps) {
				_this.checkImagesLoad();
				_this.props.onReInit && _this.props.onReInit();
				if (_this.props.lazyLoad) {
					var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
					if (slidesToLoad.length > 0) {
						_this.setState(function(prevState) {
							return { lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad) };
						});
						if (_this.props.onLazyLoad) _this.props.onLazyLoad(slidesToLoad);
					}
				}
				_this.adaptHeight();
				var spec = _objectSpread(_objectSpread({
					listRef: _this.list,
					trackRef: _this.track
				}, _this.props), _this.state);
				var setTrackStyle = _this.didPropsChange(prevProps);
				setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
					if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) _this.changeSlide({
						message: "index",
						index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
						currentSlide: _this.state.currentSlide
					});
					if (_this.props.autoplay) _this.autoPlay("update");
					else _this.pause("paused");
				});
			});
			_defineProperty(_assertThisInitialized(_this), "onWindowResized", function(setTrackStyle) {
				if (_this.debouncedResize) _this.debouncedResize.cancel();
				_this.debouncedResize = (0, _lodash["default"])(function() {
					return _this.resizeWindow(setTrackStyle);
				}, 50);
				_this.debouncedResize();
			});
			_defineProperty(_assertThisInitialized(_this), "resizeWindow", function() {
				var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
				if (!Boolean(_this.track && _this.track.node)) return;
				var spec = _objectSpread(_objectSpread({
					listRef: _this.list,
					trackRef: _this.track
				}, _this.props), _this.state);
				_this.updateState(spec, setTrackStyle, function() {
					if (_this.props.autoplay) _this.autoPlay("update");
					else _this.pause("paused");
				});
				_this.setState({ animating: false });
				clearTimeout(_this.animationEndCallback);
				delete _this.animationEndCallback;
			});
			_defineProperty(_assertThisInitialized(_this), "updateState", function(spec, setTrackStyle, callback) {
				var updatedState = (0, _innerSliderUtils.initializedState)(spec);
				spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, { slideIndex: updatedState.currentSlide });
				var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
				spec = _objectSpread(_objectSpread({}, spec), {}, { left: targetLeft });
				var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
				if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) updatedState["trackStyle"] = trackStyle;
				_this.setState(updatedState, callback);
			});
			_defineProperty(_assertThisInitialized(_this), "ssrInit", function() {
				if (_this.props.variableWidth) {
					var _trackWidth = 0, _trackLeft = 0;
					var childrenWidths = [];
					var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, { slideCount: _this.props.children.length }));
					var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, { slideCount: _this.props.children.length }));
					_this.props.children.forEach(function(child) {
						childrenWidths.push(child.props.style.width);
						_trackWidth += child.props.style.width;
					});
					for (var i = 0; i < preClones; i++) {
						_trackLeft += childrenWidths[childrenWidths.length - 1 - i];
						_trackWidth += childrenWidths[childrenWidths.length - 1 - i];
					}
					for (var _i = 0; _i < postClones; _i++) _trackWidth += childrenWidths[_i];
					for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) _trackLeft += childrenWidths[_i2];
					var _trackStyle = {
						width: _trackWidth + "px",
						left: -_trackLeft + "px"
					};
					if (_this.props.centerMode) {
						var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
						_trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
					}
					return { trackStyle: _trackStyle };
				}
				var childrenCount = _react["default"].Children.count(_this.props.children);
				var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, { slideCount: childrenCount });
				var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
				var trackWidth = 100 / _this.props.slidesToShow * slideCount;
				var slideWidth = 100 / slideCount;
				var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
				if (_this.props.centerMode) trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
				var trackStyle = {
					width: trackWidth + "%",
					left: trackLeft + "%"
				};
				return {
					slideWidth: slideWidth + "%",
					trackStyle
				};
			});
			_defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function() {
				var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
				var imagesCount = images.length, loadedCount = 0;
				Array.prototype.forEach.call(images, function(image) {
					var handler = function handler() {
						return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
					};
					if (!image.onclick) image.onclick = function() {
						return image.parentNode.focus();
					};
					else {
						var prevClickHandler = image.onclick;
						image.onclick = function(e) {
							prevClickHandler(e);
							image.parentNode.focus();
						};
					}
					if (!image.onload) {
						if (_this.props.lazyLoad) image.onload = function() {
							_this.adaptHeight();
							_this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
						};
						else {
							image.onload = handler;
							image.onerror = function() {
								handler();
								_this.props.onLazyLoadError && _this.props.onLazyLoadError();
							};
						}
					}
				});
			});
			_defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function() {
				var slidesToLoad = [];
				var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
				for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) if (_this.state.lazyLoadedList.indexOf(index) < 0) {
					slidesToLoad.push(index);
					break;
				}
				for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
					slidesToLoad.push(_index);
					break;
				}
				if (slidesToLoad.length > 0) {
					_this.setState(function(state) {
						return { lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad) };
					});
					if (_this.props.onLazyLoad) _this.props.onLazyLoad(slidesToLoad);
				} else if (_this.lazyLoadTimer) {
					clearInterval(_this.lazyLoadTimer);
					delete _this.lazyLoadTimer;
				}
			});
			_defineProperty(_assertThisInitialized(_this), "slideHandler", function(index) {
				var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
				var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange;
				var currentSlide = _this.state.currentSlide;
				var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({ index }, _this.props), _this.state), {}, {
					trackRef: _this.track,
					useCSS: _this.props.useCSS && !dontAnimate
				})), state = _slideHandler.state, nextState = _slideHandler.nextState;
				if (!state) return;
				beforeChange && beforeChange(currentSlide, state.currentSlide);
				var slidesToLoad = state.lazyLoadedList.filter(function(value) {
					return _this.state.lazyLoadedList.indexOf(value) < 0;
				});
				onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
				if (!_this.props.waitForAnimate && _this.animationEndCallback) {
					clearTimeout(_this.animationEndCallback);
					afterChange && afterChange(currentSlide);
					delete _this.animationEndCallback;
				}
				_this.setState(state, function() {
					if (asNavFor && _this.asNavForIndex !== index) {
						_this.asNavForIndex = index;
						asNavFor.innerSlider.slideHandler(index);
					}
					if (!nextState) return;
					_this.animationEndCallback = setTimeout(function() {
						var animating = nextState.animating, firstBatch = _objectWithoutProperties(nextState, ["animating"]);
						_this.setState(firstBatch, function() {
							_this.callbackTimers.push(setTimeout(function() {
								return _this.setState({ animating });
							}, 10));
							afterChange && afterChange(state.currentSlide);
							delete _this.animationEndCallback;
						});
					}, speed);
				});
			});
			_defineProperty(_assertThisInitialized(_this), "changeSlide", function(options) {
				var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
				var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
				var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
				if (targetSlide !== 0 && !targetSlide) return;
				if (dontAnimate === true) _this.slideHandler(targetSlide, dontAnimate);
				else _this.slideHandler(targetSlide);
				_this.props.autoplay && _this.autoPlay("update");
				if (_this.props.focusOnSelect) {
					var nodes = _this.list.querySelectorAll(".slick-current");
					nodes[0] && nodes[0].focus();
				}
			});
			_defineProperty(_assertThisInitialized(_this), "clickHandler", function(e) {
				if (_this.clickable === false) {
					e.stopPropagation();
					e.preventDefault();
				}
				_this.clickable = true;
			});
			_defineProperty(_assertThisInitialized(_this), "keyHandler", function(e) {
				var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
				dir !== "" && _this.changeSlide({ message: dir });
			});
			_defineProperty(_assertThisInitialized(_this), "selectHandler", function(options) {
				_this.changeSlide(options);
			});
			_defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function() {
				window.ontouchmove = function preventDefault(e) {
					e = e || window.event;
					if (e.preventDefault) e.preventDefault();
					e.returnValue = false;
				};
			});
			_defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function() {
				window.ontouchmove = null;
			});
			_defineProperty(_assertThisInitialized(_this), "swipeStart", function(e) {
				if (_this.props.verticalSwiping) _this.disableBodyScroll();
				var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
				state !== "" && _this.setState(state);
			});
			_defineProperty(_assertThisInitialized(_this), "swipeMove", function(e) {
				var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
					trackRef: _this.track,
					listRef: _this.list,
					slideIndex: _this.state.currentSlide
				}));
				if (!state) return;
				if (state["swiping"]) _this.clickable = false;
				_this.setState(state);
			});
			_defineProperty(_assertThisInitialized(_this), "swipeEnd", function(e) {
				var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
					trackRef: _this.track,
					listRef: _this.list,
					slideIndex: _this.state.currentSlide
				}));
				if (!state) return;
				var triggerSlideHandler = state["triggerSlideHandler"];
				delete state["triggerSlideHandler"];
				_this.setState(state);
				if (triggerSlideHandler === void 0) return;
				_this.slideHandler(triggerSlideHandler);
				if (_this.props.verticalSwiping) _this.enableBodyScroll();
			});
			_defineProperty(_assertThisInitialized(_this), "touchEnd", function(e) {
				_this.swipeEnd(e);
				_this.clickable = true;
			});
			_defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
				_this.callbackTimers.push(setTimeout(function() {
					return _this.changeSlide({ message: "previous" });
				}, 0));
			});
			_defineProperty(_assertThisInitialized(_this), "slickNext", function() {
				_this.callbackTimers.push(setTimeout(function() {
					return _this.changeSlide({ message: "next" });
				}, 0));
			});
			_defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
				var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
				slide = Number(slide);
				if (isNaN(slide)) return "";
				_this.callbackTimers.push(setTimeout(function() {
					return _this.changeSlide({
						message: "index",
						index: slide,
						currentSlide: _this.state.currentSlide
					}, dontAnimate);
				}, 0));
			});
			_defineProperty(_assertThisInitialized(_this), "play", function() {
				var nextIndex;
				if (_this.props.rtl) nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
				else if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
				else return false;
				_this.slideHandler(nextIndex);
			});
			_defineProperty(_assertThisInitialized(_this), "autoPlay", function(playType) {
				if (_this.autoplayTimer) clearInterval(_this.autoplayTimer);
				var autoplaying = _this.state.autoplaying;
				if (playType === "update") {
					if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") return;
				} else if (playType === "leave") {
					if (autoplaying === "paused" || autoplaying === "focused") return;
				} else if (playType === "blur") {
					if (autoplaying === "paused" || autoplaying === "hovered") return;
				}
				_this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
				_this.setState({ autoplaying: "playing" });
			});
			_defineProperty(_assertThisInitialized(_this), "pause", function(pauseType) {
				if (_this.autoplayTimer) {
					clearInterval(_this.autoplayTimer);
					_this.autoplayTimer = null;
				}
				var autoplaying = _this.state.autoplaying;
				if (pauseType === "paused") _this.setState({ autoplaying: "paused" });
				else if (pauseType === "focused") {
					if (autoplaying === "hovered" || autoplaying === "playing") _this.setState({ autoplaying: "focused" });
				} else if (autoplaying === "playing") _this.setState({ autoplaying: "hovered" });
			});
			_defineProperty(_assertThisInitialized(_this), "onDotsOver", function() {
				return _this.props.autoplay && _this.pause("hovered");
			});
			_defineProperty(_assertThisInitialized(_this), "onDotsLeave", function() {
				return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
			});
			_defineProperty(_assertThisInitialized(_this), "onTrackOver", function() {
				return _this.props.autoplay && _this.pause("hovered");
			});
			_defineProperty(_assertThisInitialized(_this), "onTrackLeave", function() {
				return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
			});
			_defineProperty(_assertThisInitialized(_this), "onSlideFocus", function() {
				return _this.props.autoplay && _this.pause("focused");
			});
			_defineProperty(_assertThisInitialized(_this), "onSlideBlur", function() {
				return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
			});
			_defineProperty(_assertThisInitialized(_this), "render", function() {
				var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
					"slick-vertical": _this.props.vertical,
					"slick-initialized": true
				});
				var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
				var trackProps = (0, _innerSliderUtils.extractObject)(spec, [
					"fade",
					"cssEase",
					"speed",
					"infinite",
					"centerMode",
					"focusOnSelect",
					"currentSlide",
					"lazyLoad",
					"lazyLoadedList",
					"rtl",
					"slideWidth",
					"slideHeight",
					"listHeight",
					"vertical",
					"slidesToShow",
					"slidesToScroll",
					"slideCount",
					"trackStyle",
					"variableWidth",
					"unslick",
					"centerPadding",
					"targetSlide",
					"useCSS"
				]);
				var pauseOnHover = _this.props.pauseOnHover;
				trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
					onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
					onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
					onMouseOver: pauseOnHover ? _this.onTrackOver : null,
					focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
				});
				var dots;
				if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
					var dotProps = (0, _innerSliderUtils.extractObject)(spec, [
						"dotsClass",
						"slideCount",
						"slidesToShow",
						"currentSlide",
						"slidesToScroll",
						"clickHandler",
						"children",
						"customPaging",
						"infinite",
						"appendDots"
					]);
					var pauseOnDotsHover = _this.props.pauseOnDotsHover;
					dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
						clickHandler: _this.changeSlide,
						onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
						onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
						onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
					});
					dots = /*#__PURE__*/ _react["default"].createElement(_dots.Dots, dotProps);
				}
				var prevArrow, nextArrow;
				var arrowProps = (0, _innerSliderUtils.extractObject)(spec, [
					"infinite",
					"centerMode",
					"currentSlide",
					"slideCount",
					"slidesToShow",
					"prevArrow",
					"nextArrow"
				]);
				arrowProps.clickHandler = _this.changeSlide;
				if (_this.props.arrows) {
					prevArrow = /*#__PURE__*/ _react["default"].createElement(_arrows.PrevArrow, arrowProps);
					nextArrow = /*#__PURE__*/ _react["default"].createElement(_arrows.NextArrow, arrowProps);
				}
				var verticalHeightStyle = null;
				if (_this.props.vertical) verticalHeightStyle = { height: _this.state.listHeight };
				var centerPaddingStyle = null;
				if (_this.props.vertical === false) {
					if (_this.props.centerMode === true) centerPaddingStyle = { padding: "0px " + _this.props.centerPadding };
				} else if (_this.props.centerMode === true) centerPaddingStyle = { padding: _this.props.centerPadding + " 0px" };
				var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
				var touchMove = _this.props.touchMove;
				var listProps = {
					className: "slick-list",
					style: listStyle,
					onClick: _this.clickHandler,
					onMouseDown: touchMove ? _this.swipeStart : null,
					onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
					onMouseUp: touchMove ? _this.swipeEnd : null,
					onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
					onTouchStart: touchMove ? _this.swipeStart : null,
					onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
					onTouchEnd: touchMove ? _this.touchEnd : null,
					onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
					onKeyDown: _this.props.accessibility ? _this.keyHandler : null
				};
				var innerSliderProps = {
					className,
					dir: "ltr",
					style: _this.props.style
				};
				if (_this.props.unslick) {
					listProps = { className: "slick-list" };
					innerSliderProps = {
						className,
						style: _this.props.style
					};
				}
				return /*#__PURE__*/ _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/ _react["default"].createElement("div", _extends({ ref: _this.listRefHandler }, listProps), /*#__PURE__*/ _react["default"].createElement(_track.Track, _extends({ ref: _this.trackRefHandler }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
			});
			_this.list = null;
			_this.track = null;
			_this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
				currentSlide: _this.props.initialSlide,
				targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
				slideCount: _react["default"].Children.count(_this.props.children)
			});
			_this.callbackTimers = [];
			_this.clickable = true;
			_this.debouncedResize = null;
			var ssrState = _this.ssrInit();
			_this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
			return _this;
		}
		_createClass(InnerSlider, [{
			key: "didPropsChange",
			value: function didPropsChange(prevProps) {
				var setTrackStyle = false;
				for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
					var key = _Object$keys[_i3];
					if (!prevProps.hasOwnProperty(key)) {
						setTrackStyle = true;
						break;
					}
					if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) continue;
					if (prevProps[key] !== this.props[key]) {
						setTrackStyle = true;
						break;
					}
				}
				return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
			}
		}]);
		return InnerSlider;
	}(_react["default"].Component);
}));
//#endregion
//#region node_modules/react-slick/lib/slider.js
var require_slider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = void 0;
	var _react = _interopRequireDefault(require_react());
	var _innerSlider = require_inner_slider();
	var _json2mq = _interopRequireDefault(__require("json2mq"));
	var _defaultProps = _interopRequireDefault(require_default_props());
	var _innerSliderUtils = require_innerSliderUtils();
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	function _createSuper(t) {
		var r = _isNativeReflectConstruct();
		return function() {
			var e, o = _getPrototypeOf(t);
			if (r) {
				var s = _getPrototypeOf(this).constructor;
				e = Reflect.construct(o, arguments, s);
			} else e = o.apply(this, arguments);
			return _possibleConstructorReturn(this, e);
		};
	}
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}
	function _defineProperty(e, r, t) {
		return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	function _toPropertyKey(t) {
		var i = _toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	function _toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	exports["default"] = /*#__PURE__*/ function(_React$Component) {
		_inherits(Slider, _React$Component);
		var _super = _createSuper(Slider);
		function Slider(props) {
			var _this;
			_classCallCheck(this, Slider);
			_this = _super.call(this, props);
			_defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function(ref) {
				return _this.innerSlider = ref;
			});
			_defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
				return _this.innerSlider.slickPrev();
			});
			_defineProperty(_assertThisInitialized(_this), "slickNext", function() {
				return _this.innerSlider.slickNext();
			});
			_defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
				var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
				return _this.innerSlider.slickGoTo(slide, dontAnimate);
			});
			_defineProperty(_assertThisInitialized(_this), "slickPause", function() {
				return _this.innerSlider.pause("paused");
			});
			_defineProperty(_assertThisInitialized(_this), "slickPlay", function() {
				return _this.innerSlider.autoPlay("play");
			});
			_this.state = { breakpoint: null };
			_this._responsiveMediaHandlers = [];
			return _this;
		}
		_createClass(Slider, [
			{
				key: "media",
				value: function media(query, handler) {
					var mql = window.matchMedia(query);
					var listener = function listener(_ref) {
						if (_ref.matches) handler();
					};
					mql.addListener(listener);
					this._responsiveMediaHandlers.push({
						mql,
						query,
						listener
					});
				}
			},
			{
				key: "componentDidMount",
				value: function componentDidMount() {
					var _this2 = this;
					if (this.props.responsive) {
						var breakpoints = this.props.responsive.map(function(breakpt) {
							return breakpt.breakpoint;
						});
						breakpoints.sort(function(x, y) {
							return x - y;
						});
						breakpoints.forEach(function(breakpoint, index) {
							var bQuery;
							if (index === 0) bQuery = (0, _json2mq["default"])({
								minWidth: 0,
								maxWidth: breakpoint
							});
							else bQuery = (0, _json2mq["default"])({
								minWidth: breakpoints[index - 1] + 1,
								maxWidth: breakpoint
							});
							(0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function() {
								_this2.setState({ breakpoint });
							});
						});
						var query = (0, _json2mq["default"])({ minWidth: breakpoints.slice(-1)[0] });
						(0, _innerSliderUtils.canUseDOM)() && this.media(query, function() {
							_this2.setState({ breakpoint: null });
						});
					}
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					this._responsiveMediaHandlers.forEach(function(obj) {
						obj.mql.removeListener(obj.listener);
					});
				}
			},
			{
				key: "render",
				value: function render() {
					var _this3 = this;
					var settings;
					var newProps;
					if (this.state.breakpoint) {
						newProps = this.props.responsive.filter(function(resp) {
							return resp.breakpoint === _this3.state.breakpoint;
						});
						settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
					} else settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
					if (settings.centerMode) {
						if (settings.slidesToScroll > 1 && false);
						settings.slidesToScroll = 1;
					}
					if (settings.fade) {
						if (settings.slidesToShow > 1 && false);
						if (settings.slidesToScroll > 1 && false);
						settings.slidesToShow = 1;
						settings.slidesToScroll = 1;
					}
					var children = _react["default"].Children.toArray(this.props.children);
					children = children.filter(function(child) {
						if (typeof child === "string") return !!child.trim();
						return !!child;
					});
					if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
						console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
						settings.variableWidth = false;
					}
					var newChildren = [];
					var currentWidth = null;
					for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
						var newSlide = [];
						for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
							var row = [];
							for (var k = j; k < j + settings.slidesPerRow; k += 1) {
								if (settings.variableWidth && children[k].props.style) currentWidth = children[k].props.style.width;
								if (k >= children.length) break;
								row.push(/*#__PURE__*/ _react["default"].cloneElement(children[k], {
									key: 100 * i + 10 * j + k,
									tabIndex: -1,
									style: {
										width: "".concat(100 / settings.slidesPerRow, "%"),
										display: "inline-block"
									}
								}));
							}
							newSlide.push(/*#__PURE__*/ _react["default"].createElement("div", { key: 10 * i + j }, row));
						}
						if (settings.variableWidth) newChildren.push(/*#__PURE__*/ _react["default"].createElement("div", {
							key: i,
							style: { width: currentWidth }
						}, newSlide));
						else newChildren.push(/*#__PURE__*/ _react["default"].createElement("div", { key: i }, newSlide));
					}
					if (settings === "unslick") {
						var className = "regular slider " + (this.props.className || "");
						return /*#__PURE__*/ _react["default"].createElement("div", { className }, children);
					} else if (newChildren.length <= settings.slidesToShow) settings.unslick = true;
					return /*#__PURE__*/ _react["default"].createElement(_innerSlider.InnerSlider, _extends({
						style: this.props.style,
						ref: this.innerSliderRefHandler
					}, (0, _innerSliderUtils.filterSettings)(settings)), newChildren);
				}
			}
		]);
		return Slider;
	}(_react["default"].Component);
}));
//#endregion
//#region node_modules/react-slick/lib/index.js
var require_lib$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports["default"] = void 0;
	var _slider = _interopRequireDefault(require_slider());
	function _interopRequireDefault(e) {
		return e && e.__esModule ? e : { "default": e };
	}
	exports["default"] = _slider["default"];
}));
//#endregion
//#region components/slider/BottomCarousel.tsx
var import_lib$1 = /* @__PURE__ */ __toESM(require_lib$1(), 1);
var import_jsx_runtime = require_jsx_runtime();
var BottomCarousel = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_lib$1.default, {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoPlay: true,
		className: "carausel-3-columns",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single",
						className: "color-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/imgs/news/thumb-1.jpg",
							alt: ""
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "post-content media-body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category",
						children: "Travel Tips"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted font-small",
						children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single",
						className: "color-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/imgs/news/thumb-2.jpg",
							alt: ""
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "post-content media-body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category",
						children: "Lifestyle"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted font-small",
						children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single",
						className: "color-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/imgs/news/thumb-3.jpg",
							alt: ""
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "post-content media-body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category",
						children: "Foody"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted font-small",
						children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single",
						className: "color-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/imgs/news/thumb-4.jpg",
							alt: ""
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "post-content media-body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category",
						children: "Entertaiment"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted font-small",
						children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					})]
				})]
			})
		]
	}) });
};
//#endregion
//#region components/layout/bottom.tsx
var Bottom = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "site-bottom pt-50 pb-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-4 col-md-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "widget-header-2 position-relative mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-5 mb-30",
									children: "Destinations"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "post-block-list post-module-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-post",
									children: post_default$1.slice(1, 4).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex hover-up-2 transition-normal",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: `/blog/${item.id}`,
													className: "color-white",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: `/assets/imgs/news/${item.img}`,
														alt: ""
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "post-content media-body",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
													className: "post-title mb-15 text-limit-2-row font-medium",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: `/blog/${item.id}`,
														children: item.title
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "entry-meta meta-1 float-left font-x-small text-uppercase",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "post-on",
														children: item.date
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "post-by has-dot",
														children: [item.views, " views"]
													})]
												})]
											})]
										})
									}, i))
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-4 col-md-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated",
							"data-wow-delay": "0.2s",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "widget-header-2 position-relative mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-5 mb-30",
									children: "Lifestyle"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "post-block-list post-module-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-post",
									children: post_default$1.slice(5, 8).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex hover-up-2 transition-normal",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: `/blog/${item.id}`,
													className: "color-white",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: `/assets/imgs/news/${item.img}`,
														alt: ""
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "post-content media-body",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
													className: "post-title mb-15 text-limit-2-row font-medium",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: `/blog/${item.id}`,
														children: item.title
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "entry-meta meta-1 float-left font-x-small text-uppercase",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "post-on",
														children: item.date
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "post-by has-dot",
														children: [item.views, " views"]
													})]
												})]
											})]
										})
									}, i))
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated",
							"data-wow-delay": "0.4s",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "widget-header-2 position-relative mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-5 mb-30",
									children: "Photography"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "post-block-list post-module-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "list-post",
									children: post_default$1.slice(2, 5).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "d-flex hover-up-2 transition-normal",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: `/blog/${item.id}`,
													className: "color-white",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: `/assets/imgs/news/${item.img}`,
														alt: ""
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "post-content media-body",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
													className: "post-title mb-15 text-limit-2-row font-medium",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: `/blog/${item.id}`,
														children: item.title
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "entry-meta meta-1 float-left font-x-small text-uppercase",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "post-on",
														children: item.date
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "post-by has-dot",
														children: [item.views, " views"]
													})]
												})]
											})]
										})
									}, i))
								})
							})]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated d-none d-lg-block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "widget-header-2 position-relative mb-30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
						className: "mt-5 mb-30",
						children: "Categories"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomCarousel, {})]
			})]
		})
	}) });
};
//#endregion
//#region components/elements/search.tsx
var Search = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "main-search-form",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: " pt-50 pb-50 ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "row mb-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-12 align-self-center main-search-form-cover m-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "search-text-bg",
									children: "Search"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
								action: "#",
								className: "search-header",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "input-group w-100",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										className: "form-control",
										placeholder: "Search stories, places and people"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "input-group-append",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "btn btn-search bg-white",
											type: "submit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_search" })
										})
									})]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "row mt-80 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-12 font-small suggested-area",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
								className: "suggested font-heading mb-20 text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Suggested keywords:" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-inline d-inline-block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "World"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "American"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Opinion"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Tech"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Science"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Books"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Travel"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Business"
										})
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row mt-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-lg-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/single",
											className: "color-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/imgs/news/thumb-2.jpg",
												alt: ""
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "post-content media-body",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Travel Tips"
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted font-small",
											children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-lg-4 col-md-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/single",
											className: "color-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/imgs/news/thumb-4.jpg",
												alt: ""
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "post-content media-body",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Lifestyle"
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted font-small",
											children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-lg-4  col-md-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/single",
											className: "color-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/imgs/news/thumb-3.jpg",
												alt: ""
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "post-content media-body",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/category",
											children: "Hotel Review"
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted font-small",
											children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
										})]
									})]
								})
							})
						]
					})
				]
			})
		})
	}) });
};
//#endregion
//#region components/layout/footer.tsx
var Footer = ({ removeClass }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "pt-50 pb-20 bg-grey",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-3 col-md-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-widget wow fadeInUp animated mb-30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "widget-header-2 position-relative mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-5 mb-30",
									children: "About me"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "textwidget",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Start writing, no matter what. The water does not flow until the faucet is turned on." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "color-black",
											children: "Address"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"123 Main Street",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"New York, NY 10001"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "color-black",
										children: "Follow me"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "header-social-network d-inline-block list-inline color-white mb-20",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "list-inline-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "fb",
													target: "_blank",
													title: "Facebook",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook" })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "list-inline-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "tw",
													target: "_blank",
													title: "Tweet now",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_twitter" })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "list-inline-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "pt",
													target: "_blank",
													title: "Pin it",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_pinterest" })
												})
											})
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-2 col-md-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-widget widget_categories wow fadeInUp animated mb-30",
							"data-wow-delay": "0.1s",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "widget-header-2 position-relative mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-5 mb-30",
									children: "Quick link"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "font-small",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "cat-item cat-item-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/#",
											children: "About me"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "cat-item cat-item-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/#",
											children: "Help & Support"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "cat-item cat-item-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/#",
											children: "​​Licensing Policy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "cat-item cat-item-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/#",
											children: "Refund Policy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "cat-item cat-item-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/#",
											children: "Hire me"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "cat-item cat-item-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/#",
											children: "Contact"
										})
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-3 col-md-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-widget widget_tagcloud wow fadeInUp animated mb-30",
							"data-wow-delay": "0.2s",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "widget-header-2 position-relative mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-5 mb-30",
									children: "Tagcloud"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "tagcloud mt-50",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/category",
										className: "tag-cloud-link",
										children: "beautiful"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/category",
										className: "tag-cloud-link",
										children: "New York"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/category",
										className: "tag-cloud-link",
										children: "droll"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/category",
										className: "tag-cloud-link",
										children: "intimate"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/category",
										className: "tag-cloud-link",
										children: "loving"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/category",
										className: "tag-cloud-link",
										children: "travel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/category",
										className: "tag-cloud-link",
										children: "fighting"
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-4 col-md-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sidebar-widget widget_newsletter wow fadeInUp animated mb-30",
							"data-wow-delay": "0.3s",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "widget-header-2 position-relative mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
									className: "mt-5 mb-30",
									children: "Newsletter"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "newsletter",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: "Subscribe to our newsletter and get our newest updates right on your inbox."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "input-group form-subcriber mt-30 d-flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											className: "form-control bg-white font-small",
											placeholder: "Enter your email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "btn bg-primary text-white",
											type: "submit",
											children: "Subscribe"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "mt-20",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "mr-5",
													name: "name",
													type: "checkbox",
													value: "1",
													required: true
												}),
												" I agree to the",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													target: "_blank",
													children: "terms & conditions"
												})
											]
										})
									]
								})]
							})]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-copy-right pt-30 mt-20 wow fadeInUp animated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "float-md-left font-small text-muted",
					children: "© 2020, Stories - Personal Blog HTML Template "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "float-md-right font-small text-muted",
					children: [
						"Design by",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							href: "https://alithemes.com",
							target: "_blank",
							children: "AliThemes"
						}),
						"| All rights reserved"
					]
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dark-mark",
		onClick: removeClass
	})] });
};
//#endregion
//#region node_modules/react-perfect-scrollbar/lib/scrollbar.js
var require_scrollbar = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	var _createClass = function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();
	var _react = require_react();
	var _react2 = _interopRequireDefault(_react);
	var _propTypes = __require("prop-types");
	var _perfectScrollbar2 = _interopRequireDefault(__require("perfect-scrollbar"));
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function _objectWithoutProperties(obj, keys) {
		var target = {};
		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}
		return target;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		} });
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var handlerNameByEvent = {
		"ps-scroll-y": "onScrollY",
		"ps-scroll-x": "onScrollX",
		"ps-scroll-up": "onScrollUp",
		"ps-scroll-down": "onScrollDown",
		"ps-scroll-left": "onScrollLeft",
		"ps-scroll-right": "onScrollRight",
		"ps-y-reach-start": "onYReachStart",
		"ps-y-reach-end": "onYReachEnd",
		"ps-x-reach-start": "onXReachStart",
		"ps-x-reach-end": "onXReachEnd"
	};
	Object.freeze(handlerNameByEvent);
	var ScrollBar = function(_Component) {
		_inherits(ScrollBar, _Component);
		function ScrollBar(props) {
			_classCallCheck(this, ScrollBar);
			var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));
			_this.handleRef = _this.handleRef.bind(_this);
			_this._handlerByEvent = {};
			return _this;
		}
		_createClass(ScrollBar, [
			{
				key: "componentDidMount",
				value: function componentDidMount() {
					if (this.props.option) console.warn("react-perfect-scrollbar: the \"option\" prop has been deprecated in favor of \"options\"");
					this._ps = new _perfectScrollbar2.default(this._container, this.props.options || this.props.option);
					this._updateEventHook();
					this._updateClassName();
				}
			},
			{
				key: "componentDidUpdate",
				value: function componentDidUpdate(prevProps) {
					this._updateEventHook(prevProps);
					this.updateScroll();
					if (prevProps.className !== this.props.className) this._updateClassName();
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					var _this2 = this;
					Object.keys(this._handlerByEvent).forEach(function(key) {
						var value = _this2._handlerByEvent[key];
						if (value) _this2._container.removeEventListener(key, value, false);
					});
					this._handlerByEvent = {};
					this._ps.destroy();
					this._ps = null;
				}
			},
			{
				key: "_updateEventHook",
				value: function _updateEventHook() {
					var _this3 = this;
					var prevProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					Object.keys(handlerNameByEvent).forEach(function(key) {
						var callback = _this3.props[handlerNameByEvent[key]];
						var prevCallback = prevProps[handlerNameByEvent[key]];
						if (callback !== prevCallback) {
							if (prevCallback) {
								var prevHandler = _this3._handlerByEvent[key];
								_this3._container.removeEventListener(key, prevHandler, false);
								_this3._handlerByEvent[key] = null;
							}
							if (callback) {
								var handler = function handler() {
									return callback(_this3._container);
								};
								_this3._container.addEventListener(key, handler, false);
								_this3._handlerByEvent[key] = handler;
							}
						}
					});
				}
			},
			{
				key: "_updateClassName",
				value: function _updateClassName() {
					var className = this.props.className;
					var psClassNames = this._container.className.split(" ").filter(function(name) {
						return name.match(/^ps([-_].+|)$/);
					}).join(" ");
					if (this._container) this._container.className = "scrollbar-container" + (className ? " " + className : "") + (psClassNames ? " " + psClassNames : "");
				}
			},
			{
				key: "updateScroll",
				value: function updateScroll() {
					this.props.onSync(this._ps);
				}
			},
			{
				key: "handleRef",
				value: function handleRef(ref) {
					this._container = ref;
					this.props.containerRef(ref);
				}
			},
			{
				key: "render",
				value: function render() {
					var _props = this.props;
					_props.className;
					var style = _props.style;
					_props.option;
					_props.options;
					_props.containerRef;
					_props.onScrollY;
					_props.onScrollX;
					_props.onScrollUp;
					_props.onScrollDown;
					_props.onScrollLeft;
					_props.onScrollRight;
					_props.onYReachStart;
					_props.onYReachEnd;
					_props.onXReachStart;
					_props.onXReachEnd;
					var component = _props.component;
					_props.onSync;
					var children = _props.children, remainProps = _objectWithoutProperties(_props, [
						"className",
						"style",
						"option",
						"options",
						"containerRef",
						"onScrollY",
						"onScrollX",
						"onScrollUp",
						"onScrollDown",
						"onScrollLeft",
						"onScrollRight",
						"onYReachStart",
						"onYReachEnd",
						"onXReachStart",
						"onXReachEnd",
						"component",
						"onSync",
						"children"
					]);
					var Comp = component;
					return _react2.default.createElement(Comp, _extends({
						style,
						ref: this.handleRef
					}, remainProps), children);
				}
			}
		]);
		return ScrollBar;
	}(_react.Component);
	exports.default = ScrollBar;
	ScrollBar.defaultProps = {
		className: "",
		style: void 0,
		option: void 0,
		options: void 0,
		containerRef: function containerRef() {},
		onScrollY: void 0,
		onScrollX: void 0,
		onScrollUp: void 0,
		onScrollDown: void 0,
		onScrollLeft: void 0,
		onScrollRight: void 0,
		onYReachStart: void 0,
		onYReachEnd: void 0,
		onXReachStart: void 0,
		onXReachEnd: void 0,
		onSync: function onSync(ps) {
			return ps.update();
		},
		component: "div"
	};
	ScrollBar.propTypes = {
		children: _propTypes.PropTypes.node.isRequired,
		className: _propTypes.PropTypes.string,
		style: _propTypes.PropTypes.object,
		option: _propTypes.PropTypes.object,
		options: _propTypes.PropTypes.object,
		containerRef: _propTypes.PropTypes.func,
		onScrollY: _propTypes.PropTypes.func,
		onScrollX: _propTypes.PropTypes.func,
		onScrollUp: _propTypes.PropTypes.func,
		onScrollDown: _propTypes.PropTypes.func,
		onScrollLeft: _propTypes.PropTypes.func,
		onScrollRight: _propTypes.PropTypes.func,
		onYReachStart: _propTypes.PropTypes.func,
		onYReachEnd: _propTypes.PropTypes.func,
		onXReachStart: _propTypes.PropTypes.func,
		onXReachEnd: _propTypes.PropTypes.func,
		onSync: _propTypes.PropTypes.func,
		component: _propTypes.PropTypes.string
	};
	module.exports = exports["default"];
}));
//#endregion
//#region components/layout/nav.tsx
var import_lib = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var _scrollbar2 = _interopRequireDefault(require_scrollbar());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	exports.default = _scrollbar2.default;
	module.exports = exports["default"];
})))(), 1);
var NavMenu = ({ isToggled }) => {
	(0, import_react.useEffect)(() => {
		new MetisMenu("#metismenu");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: isToggled ? "mobilemenu active" : "mobilemenu hide",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lib.default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "metismenu text-muted",
			id: "metismenu",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "has-arrow",
					href: "#",
					"aria-expanded": "true",
					children: "Home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/",
						children: "Home default"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/home-2",
						children: "Homepage 2"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/home-3",
						children: "Homepage 3"
					}) })
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "has-arrow",
					href: "#",
					"aria-expanded": "false",
					children: "Pages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/page-about",
						children: "About"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/page-contact",
						children: "Contact"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/page-typography",
						children: "Typography"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/page-register",
						children: "Register"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/page-login",
						children: "Login"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/page-search",
						children: "Search"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/author",
						children: "Author"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/page-404",
						children: "404 page"
					}) })
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "has-arrow",
					href: "#",
					"aria-expanded": "false",
					children: "Category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category-list",
						children: "List layout"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category-grid",
						children: "Grid layout"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category-masonry",
						children: "Masonry layout"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/category-big",
						children: "Big layout"
					}) })
				] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "has-arrow",
					href: "#",
					"aria-expanded": "false",
					children: "Single post"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single",
						children: "Default"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single-2",
						children: "Big image"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single-3",
						children: "Left image"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "/single-4",
						children: "With sidebar"
					}) })
				] })] })
			]
		}) })
	}) });
};
//#endregion
//#region components/layout/menu.tsx
var Menu = ({ addClass }) => {
	const [scroll, setScroll] = (0, import_react.useState)(false);
	const [isToggled, setToggled] = (0, import_react.useState)(false);
	const [size, setSize] = (0, import_react.useState)(0);
	const toggleTrueFalse = () => setToggled(!isToggled);
	(0, import_react.useEffect)(() => {
		document.addEventListener("scroll", () => {
			const scrollCheck = window.scrollY > 100;
			if (scrollCheck !== scroll) setScroll(scrollCheck);
		});
	});
	(0, import_react.useLayoutEffect)(() => {
		function updateSize() {
			setSize(window.innerWidth);
		}
		window.addEventListener("resize", updateSize);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: scroll ? "header-sticky sticky-bar" : "header-sticky",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container align-self-center position-relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "main-nav float-left ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "main-menu d-none d-lg-inline font-small",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "menu-item-has-children",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									href: "/",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_house_alt mr-5" }), "Home"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "sub-menu text-muted font-small",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/",
											children: "Home default"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/home-2",
											children: "Homepage 2"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: "/home-3",
											children: "Homepage 3"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category/travel",
								children: "Travel"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "current-item has-mega-menu",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "#",
									children: "Mega Menu"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mega-menu",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "sub-mega-menu sub-mega-menu-width-22",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												children: "Travel Blog"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Destinations"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Tour Guides"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Travel Food"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Hotels Booking"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Transport Review"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Travel Healthy"
												}) })
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "sub-mega-menu sub-mega-menu-width-22",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												children: "Fruit & Vegetables"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Meat & Poultry"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Fresh Vegetables"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Herbs & Seasonings"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Cuts & Sprouts"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Exotic Fruits & Veggies"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Packaged Produce"
												}) })
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "sub-mega-menu sub-mega-menu-width-22",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												children: "Breakfast & Dairy"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Milk & Flavoured Milk"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Butter and Margarine"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Eggs Substitutes"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Marmalades"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Sour Cream"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Cheese"
												}) })
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "sub-mega-menu sub-mega-menu-width-22",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												children: "Meat & Seafood"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Breakfast Sausage"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Dinner Sausage"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Chicken"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Sliced Deli Meat"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Wild Caught Fillets"
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/category-grid",
													children: "Crab and Shellfish"
												}) })
											] })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category-grid",
								children: "Guides"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category-masonry",
								children: "Food"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category/hotels",
								children: "Hotels"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category",
								children: "Review"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category",
								children: "Healthy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category",
								children: "Lifestyle"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: "/category",
								children: "Blog"
							}) })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: size < 991 ? "d-block d-lg-none" : "d-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: toggleTrueFalse,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "menu-icon mr-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "menu-icon-inner" })
							}), "Main Menu"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { isToggled })]
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "float-right header-tools text-muted font-small",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "header-social-network d-inline-block list-inline mr-15",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "list-inline-item",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/#",
									className: "social-icon fb text-xs-center",
									target: "_blank",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "list-inline-item",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/#",
									className: "social-icon tw text-xs-center",
									target: "_blank",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_twitter " })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "list-inline-item",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/#",
									className: "social-icon pt text-xs-center",
									target: "_blank",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_pinterest " })
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "off-canvas-toggle-cover d-inline-block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "off-canvas-toggle hidden d-inline-block",
							id: "off-canvas-toggle",
							onClick: addClass,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "clearfix" })
			]
		})
	}) });
};
//#endregion
//#region components/layout/header.tsx
var Header = ({ addClass, openSearch }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "main-header header-style-1 font-heading",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "header-top",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row pt-20 pb-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-md-3 col-xs-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							href: "/",
							className: "logo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/imgs/theme/logo.png",
								alt: ""
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-md-9 col-xs-6 text-right header-top-right ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-inline nav-topbar d-none d-md-inline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "list-inline-item menu-item-has-children",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/#",
										children: "Layouts"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "sub-menu font-small",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "menu-item-has-children",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													children: "Pages"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "sub-menu font-small",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/page-about",
															children: "About"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/page-contact",
															children: "Contact"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/page-typography",
															children: "Typography"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/page-register",
															children: "Register"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/page-login",
															children: "Login"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/page-search",
															children: "Search"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/author/1",
															children: "Author"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/page-404",
															children: "404 page"
														}) })
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "menu-item-has-children",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													children: "Category"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "sub-menu font-small",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/category-list",
															children: "List layout"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/category-grid",
															children: "Grid layout"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/category-masonry",
															children: "Masonry layout"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/category-big",
															children: "Big layout"
														}) })
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "menu-item-has-children",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													children: "Single post"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "sub-menu font-small",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/blog/1",
															children: "Default"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/single/1",
															children: "Big image"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/single3/1",
															children: "Left image"
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: "/single4/1",
															children: "With sidebar"
														}) })
													]
												})]
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "list-inline-item",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										href: "http://demos.alithemes.com/html/stories/docs/",
										className: "flex items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_document_alt mr-5" }), "Document"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "vertical-divider mr-20 ml-20 d-none d-md-inline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "search-icon d-none d-md-inline",
								onClick: openSearch,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mr-15 text-muted font-small",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_search mr-5" }), "Search"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "btn btn-radius bg-primary text-white ml-15 font-small box-shadow",
								children: "Buy Now"
							})
						]
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { addClass })]
	}) });
};
//#endregion
//#region components/layout/sidebar.tsx
var Sidebar = ({ removeClass }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		id: "sidebar-wrapper",
		className: "custom-scrollbar offcanvas-sidebar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_lib.default, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "off-canvas-close",
			onClick: removeClass,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_close" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sidebar-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sidebar-widget widget_categories mb-50 mt-30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "widget-header-2 position-relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "mt-5 mb-15",
							children: "Hot topics"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "widget_nav_menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "cat-item cat-item-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/category",
									children: "Travel tips"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "post-count",
									children: "30"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "cat-item cat-item-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/category-grid",
									children: "Book review"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "post-count",
									children: "25"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "cat-item cat-item-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/category-list",
									children: "Hotel review"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "post-count",
									children: "16"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "cat-item cat-item-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/category-masonry",
									children: "Destinations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "post-count",
									children: "22"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "cat-item cat-item-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/category-big",
									children: "Lifestyle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "post-count",
									children: "25"
								})]
							})
						] })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sidebar-widget widget-latest-posts mb-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "widget-header-2 position-relative mb-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "mt-5 mb-30",
							children: "Don't miss"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "post-block-list post-module-1 post-module-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "list-post",
							children: post_default$1.slice(1, 4).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "mb-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex hover-up-2 transition-normal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: `/blog/${item.id}`,
											className: "color-white",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: `assets/imgs/news/${item.img}`,
												alt: ""
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "post-content media-body",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
											className: "post-title mb-15 text-limit-2-row font-medium",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: `/blog/${item.id}`,
												children: "The Life of a Travel Writer with David Farley"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "entry-meta meta-1 float-left font-x-small text-uppercase",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "post-on",
												children: item.date
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "post-by has-dot",
												children: [item.views, " views"]
											})]
										})]
									})]
								})
							}, i))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sidebar-widget widget-ads",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "widget-header-2 position-relative mb-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "mt-5 mb-30",
							children: "Advertise banner"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						href: "https://themeforest.net/user/alithemes/portfolio",
						target: "_blank",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "advertise-img border-radius-5",
							src: "/assets/imgs/ads/ads-1.jpg",
							alt: ""
						})
					})]
				})
			]
		})] })
	}) });
};
//#endregion
//#region components/elements/backToTop.tsx
function BackToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setVisible(window.scrollY > 160);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		id: "scrollUp",
		style: {
			display: "block",
			cursor: "pointer"
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon arrow_up" })
	});
}
//#endregion
//#region components/layout/layout.tsx
var Layout = ({ children }) => {
	const addClass = () => {
		document.body.classList.add("canvas-opened");
	};
	const removeClass = () => {
		document.body.classList.remove("canvas-opened");
	};
	const openSearch = () => {
		document.body.classList.toggle("open-search-form");
	};
	const pathname = usePathname();
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		AOS.init({
			duration: 800,
			easing: "ease-in-out",
			once: true
		});
		const loadWow = () => {
			if (typeof window.WOW === "function") {
				const wow = new window.WOW({
					boxClass: "wow",
					animateClass: "animated",
					offset: 0,
					mobile: true,
					live: true
				});
				wow.init();
				window.WOW = wow;
				return true;
			}
			return false;
		};
		if (!window.WOW) {
			const script = document.createElement("script");
			script.src = "/assets/js/vendor/wow.min.js";
			script.async = true;
			script.onload = () => setTimeout(loadWow, 100);
			document.body.appendChild(script);
		} else loadWow();
		const initializeMasonry = () => {
			if (document.querySelector(".grid-sizer")) new (__CJS__import__0__.default || __CJS__import__0__)(".grid", {
				itemSelector: ".grid-item",
				columnWidth: ".grid-sizer"
			});
		};
		initializeMasonry();
		return () => {};
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
			property: "og:title",
			content: "My page title"
		}, "title") }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, { removeClass }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			addClass,
			openSearch
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bottom, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { removeClass }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
	] });
};
//#endregion
//#region app/page.tsx
var PostCarousel1 = dynamic(() => import("./PostCarousel1-CJgAj12U.js"), {
	ssr: false,
	loading: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Loading..." })
});
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "featured-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-lg-6 align-self-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "typewrite d-inline",
									"data-period": "2000",
									"data-type": "[ \" Travel Blogger. \", \"Content Writter. \", \"Food Guides \" ]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Hello, I’m ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Steven" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-20",
								children: " Welcome to my blog"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
								className: "text-muted",
								children: "Don't miss out on the latest news about Travel tips, Hotels review, Food guide..."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "input-group form-subcriber mt-30 d-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									className: "form-control bg-white font-small",
									placeholder: "Enter your email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn bg-primary text-white",
									type: "submit",
									children: "Subscribe"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-6 text-right d-none d-lg-block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/imgs/authors/featured.png",
							alt: ""
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hot-tags pt-30 pb-30 font-small align-self-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "widget-header-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "row align-self-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-md-4 align-self-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
								className: "widget-title",
								children: "Featured posts"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-md-8 text-md-right font-small align-self-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "d-inline-block mr-5 mb-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon  icon_tag_alt mr-5 text-muted" }), "Hot tags:"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "list-inline d-inline-block tags",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											children: "# Covid-19"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											children: "# Inspiration"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											children: "# Work online"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "list-inline-item",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											children: "# Stay home"
										})
									})
								]
							})]
						})]
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "loop-grid mb-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-8 mb-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCarousel1, {})
					}), post_default.slice(1, 5).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "col-lg-4 col-md-6 mb-30 wow fadeInUp animated",
						"data-wow-delay": "0.2s",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "post-card-1 border-radius-10 hover-up",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "post-thumb thumb-overlay img-hover-slide position-relative",
								style: { backgroundImage: `url(assets/imgs/news/${item.img})` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: `/blog/${item.id}`,
										className: "img-link"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "top-right-icon bg-success",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_camera_alt" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "social-share",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_share" })
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												className: "fb",
												title: "Share on Facebook",
												target: "_blank",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook" })
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												className: "tw",
												target: "_blank",
												title: "Tweet now",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_twitter" })
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												href: "#",
												className: "pt",
												target: "_blank",
												title: "Pin it",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_pinterest" })
											}) })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "post-content p-30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "entry-meta meta-0 font-small mb-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: `/category/${item.category}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "post-cat text-info",
											children: item.category
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "d-flex post-card-content",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "post-title mb-20 font-weight-900",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											href: `/blog/${item.id}`,
											children: item.title
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "entry-meta meta-1 float-left font-x-small text-uppercase",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "post-on",
												children: item.date
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "time-reading has-dot",
												children: [item.readTime, " mins read"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "post-by has-dot",
												children: [item.views, " views"]
											})
										]
									})]
								})]
							})]
						})
					}, i))]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-grey pt-50 pb-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-lg-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "post-module-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "widget-header-1 position-relative mb-30  wow fadeInUp animated",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "mt-5 mb-30",
										children: "Travel tips"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "loop-list loop-list-style-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "row",
										children: post_default.slice(4, 8).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
											className: "col-md-6 mb-30 wow fadeInUp animated",
											"data-wow-delay": "0.2s",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "post-card-1 border-radius-10 hover-up",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "post-thumb thumb-overlay img-hover-slide position-relative",
													style: { backgroundImage: `url(assets/imgs/news/${item.img})` },
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: `/blog/${item.id}`,
															className: "img-link"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "top-right-icon bg-success",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_camera_alt" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
															className: "social-share",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "#",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_share" })
																}) }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "#",
																	className: "fb",
																	title: "Share on Facebook",
																	target: "_blank",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook" })
																}) }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "#",
																	className: "tw",
																	target: "_blank",
																	title: "Tweet now",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_twitter" })
																}) }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "#",
																	className: "pt",
																	target: "_blank",
																	title: "Pin it",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_pinterest" })
																}) })
															]
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "post-content p-30",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "entry-meta meta-0 font-small mb-10",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: `/category/${item.category}`,
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "post-cat text-info",
																children: item.category
															})
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex post-card-content",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
																className: "post-title mb-20 font-weight-900",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: `/blog/${item.id}`,
																	children: item.title
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "post-excerpt mb-25 font-small text-muted",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.desc })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "entry-meta meta-1 float-left font-x-small text-uppercase",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "post-on",
																		children: item.date
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "time-reading has-dot",
																		children: [item.readTime, " mins read"]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																		className: "post-by has-dot",
																		children: [item.views, " views"]
																	})
																]
															})
														]
													})]
												})]
											})
										}, item.id))
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "post-module-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "widget-header-1 position-relative mb-30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "mt-5 mb-30",
										children: "Latest posts"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "loop-list loop-list-style-1",
									children: post_default.slice(4, 8).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
										className: "hover-up-2 transition-normal wow fadeInUp animated",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "row mb-40 list-style-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-md-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "post-thumb position-relative border-radius-5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "img-hover-slide border-radius-5 position-relative",
														style: { backgroundImage: `url(assets/imgs/news/${item.img})` },
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: `/blog/${item.id}`,
															className: "img-link"
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
														className: "social-share",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/#",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_share" })
															}) }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/#",
																className: "fb",
																title: "Share on Facebook",
																target: "_blank",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook" })
															}) }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/#",
																className: "tw",
																target: "_blank",
																title: "Tweet now",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_twitter" })
															}) }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/#",
																className: "pt",
																target: "_blank",
																title: "Pin it",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_pinterest" })
															}) })
														]
													})]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "col-md-8 align-self-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "post-content",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "entry-meta meta-0 font-small mb-10",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: `/category/${item.category}`,
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-cat text-primary",
																	children: item.category
																})
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
															className: "post-title font-weight-900 mb-20",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: `/blog/${item.id}`,
																children: item.title
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "post-format-icon",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_star_alt" })
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "entry-meta meta-1 float-left font-x-small text-uppercase",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-on",
																	children: item.date
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "time-reading has-dot",
																	children: [item.readTime, " mins read"]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "post-by has-dot",
																	children: [item.views, " views"]
																})
															]
														})
													]
												})
											})]
										})
									}, i))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pagination-area mb-30 wow fadeInUp animated",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									"aria-label": "Page navigation example",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "pagination justify-content-start",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "page-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "page-link",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon arrow_left" })
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "page-item active",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "page-link",
													children: "01"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "page-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "page-link",
													children: "02"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "page-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "page-link",
													children: "03"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "page-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "page-link",
													children: "04"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "page-item",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/#",
													className: "page-link",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon arrow_right" })
												})
											})
										]
									})
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "widget-area",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated",
									children: author_default.slice(0, 1).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											className: "about-author-img mb-25",
											src: `/assets/imgs/authors/${item.img}`,
											alt: ""
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h5", {
											className: "mb-20",
											children: ["Hello, I'm ", item.title]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-muted",
											children: item.desc
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Follow me: " }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "header-social-network d-inline-block list-inline color-white mb-20",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "list-inline-item",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														className: "fb",
														target: "_blank",
														title: "Facebook",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "list-inline-item",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														className: "tw",
														target: "_blank",
														title: "Tweet now",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_twitter" })
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "list-inline-item",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														className: "pt",
														target: "_blank",
														title: "Pin it",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_pinterest" })
													})
												})
											]
										})
									] }, item.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "widget-header-1 position-relative mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "mt-5 mb-30",
											children: "Most popular"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "post-block-list post-module-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "list-post",
											children: post_default.slice(1, 5).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "mb-30 wow fadeInUp animated",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "post-content media-body",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
															className: "post-title mb-15 text-limit-2-row font-medium",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: `/blog/${item.id}`,
																children: item.title
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "entry-meta meta-1 float-left font-x-small text-uppercase",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "post-on",
																children: item.date
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "post-by has-dot",
																children: [item.views, " views"]
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															href: `/blog/${item.id}`,
															className: "color-white",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: `/assets/imgs/news/${item.img}`,
																alt: ""
															})
														})
													})]
												})
											}, item.id))
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "widget-header-1 position-relative mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "mt-5 mb-30",
											children: "Last comments"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "post-block-list post-module-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "list-post",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "mb-30 wow fadeInUp animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/single",
																className: "color-white",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/imgs/authors/author-2.jpg",
																	alt: ""
																})
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "post-content media-body",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "mb-10",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/author",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "David" })
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "ml-15 font-small text-muted has-dot",
																	children: "16 Jan 2020"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-muted font-small",
																children: "A writer is someone for whom writing is more difficult than..."
															})]
														})]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "mb-30 wow fadeInUp animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/single",
																className: "color-white",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/imgs/authors/author-3.jpg",
																	alt: ""
																})
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "post-content media-body",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "mb-10",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/author",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Kokawa" })
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "ml-15 font-small text-muted has-dot",
																	children: "12 Feb 2020"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-muted font-small",
																children: "Striking pewter studded epaulettes silver zips"
															})]
														})]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "wow fadeInUp animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/single",
																className: "color-white",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/imgs/news/thumb-1.jpg",
																	alt: ""
																})
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "post-content media-body",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "mb-10",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/author",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Tsukasi" })
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "ml-15 font-small text-muted has-dot",
																	children: "18 May 2020"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-muted font-small",
																children: "Workwear bow detailing a slingback buckle strap"
															})]
														})]
													})
												})
											]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sidebar-widget widget_instagram wow fadeInUp animated",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "widget-header-1 position-relative mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "mt-5 mb-30",
											children: "Instagram"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "instagram-gellay",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "insta-feed",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/assets/imgs/thumbnail-3.jpg",
													className: "play-video",
													"data-animate": "zoomIn",
													"data-duration": "1.5s",
													"data-delay": "0.1s",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														className: "border-radius-5",
														src: "/assets/imgs/news/thumb-1.jpg",
														alt: ""
													})
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/assets/imgs/thumbnail-4.jpg",
													className: "play-video",
													"data-animate": "zoomIn",
													"data-duration": "1.5s",
													"data-delay": "0.1s",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														className: "border-radius-5",
														src: "/assets/imgs/news/thumb-2.jpg",
														alt: ""
													})
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/assets/imgs/thumbnail-5.jpg",
													className: "play-video",
													"data-animate": "zoomIn",
													"data-duration": "1.5s",
													"data-delay": "0.1s",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														className: "border-radius-5",
														src: "/assets/imgs/news/thumb-3.jpg",
														alt: ""
													})
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/assets/imgs/thumbnail-3.jpg",
													className: "play-video",
													"data-animate": "zoomIn",
													"data-duration": "1.5s",
													"data-delay": "0.1s",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														className: "border-radius-5",
														src: "/assets/imgs/news/thumb-4.jpg",
														alt: ""
													})
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/assets/imgs/thumbnail-4.jpg",
													className: "play-video",
													"data-animate": "zoomIn",
													"data-duration": "1.5s",
													"data-delay": "0.1s",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														className: "border-radius-5",
														src: "/assets/imgs/news/thumb-5.jpg",
														alt: ""
													})
												}) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/assets/imgs/thumbnail-5.jpg",
													className: "play-video",
													"data-animate": "zoomIn",
													"data-duration": "1.5s",
													"data-delay": "0.1s",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														className: "border-radius-5",
														src: "/assets/imgs/news/thumb-6.jpg",
														alt: ""
													})
												}) })
											]
										})
									})]
								})
							]
						})
					})]
				})
			})
		})
	] }) }) });
}
//#endregion
export { Home as default, require_lib$1 as t };
