import { t as require_jsx_runtime } from "../../index.js";
import { a as Link } from "./head-Bpj-_-sK.js";
import { t as Layout } from "./layout-D_njPgDu.js";
//#region app/page-404/page.tsx
var import_jsx_runtime = require_jsx_runtime();
function Custom404() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "bg-grey pt-80 pb-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row pt-80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-lg-6 col-md-12 d-lg-block d-none pr-50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/imgs/theme/page-not-found.png",
						alt: ""
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-lg-6 col-md-12 pl-50 text-md-center text-lg-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mb-30 font-weight-900 page-404",
							children: "404"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							action: "#",
							method: "get",
							className: "search-form d-lg-flex open-search mb-30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "icon-search" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "form-control",
								name: "name",
								id: "name",
								type: "text",
								placeholder: "Search..."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "",
							children: [
								"The link you clicked may be broken or the page may have been removed.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" visit the",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/",
									children: "Homepage"
								}),
								"or",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/page-contact",
									children: "Contact us"
								}),
								"about the problem"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "form-group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "button button-contactForm mt-30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "/",
									className: "text-white",
									children: "Home page"
								})
							})
						})
					]
				})]
			})
		})
	}) }) });
}
//#endregion
export { Custom404 as default };
