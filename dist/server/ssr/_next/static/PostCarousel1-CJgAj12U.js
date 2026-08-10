import { a as __toESM, t as require_react } from "./react-BSUe0WV4.js";
import { t as require_jsx_runtime } from "../../index.js";
import { a as Link, n as post_default } from "./head-Bpj-_-sK.js";
import { t as require_lib } from "./page-B09xDTKl.js";
require_react();
var import_lib = /* @__PURE__ */ __toESM(require_lib(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PostCarousel1 = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lib.default, {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			className: "slide-fade",
			children: post_default.slice(4, 6).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "position-relative post-thumb",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "thumb-overlay img-hover-slide position-relative",
					style: { backgroundImage: `url(/assets/imgs/news/${item.img})` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "top-left-icon bg-warning",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_star_alt" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "post-content-overlay text-white ml-30 mr-30 pb-30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "entry-meta meta-0 font-small mb-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: `/category/${item.category}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "post-cat text-info",
										children: item.category
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "post-title font-weight-900 mb-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: `/blog/${item.id}`,
									children: item.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "post-on",
									children: item.date
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "hit-count has-dot",
									children: [item.views, " Views"]
								})]
							})
						]
					})]
				})
			}, i))
		})
	}) });
};
//#endregion
export { PostCarousel1 as default };
