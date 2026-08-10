import { a as __toESM, t as require_react } from "./react-BSUe0WV4.js";
import { t as require_jsx_runtime } from "../../index.js";
//#region app/loading.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Loading() {
	(0, import_react.useEffect)(() => {
		const preloader = document.querySelector(".preloader");
		if (preloader) {
			const timer = setTimeout(() => {
				preloader.classList.add("fade-out");
			}, 450);
			return () => clearTimeout(timer);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "preloader text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "circle" })
	});
}
//#endregion
export { Loading as default };
