import { a as __toESM, t as require_react } from "./react-BSUe0WV4.js";
import { t as require_jsx_runtime } from "../../index.js";
//#region components/elements/ScrollProgress.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var ScrollProgress = () => {
	const [scrollPercentage, setScrollPercentage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			const scrolled = window.scrollY / documentHeight * 100;
			setScrollPercentage(scrolled);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scroll-progress primary-bg",
		style: { width: `${scrollPercentage}%` }
	});
};
//#endregion
export { ScrollProgress as default };
