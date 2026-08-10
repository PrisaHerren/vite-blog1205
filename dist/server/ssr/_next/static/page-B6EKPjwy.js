import { t as require_jsx_runtime } from "../../index.js";
import { a as Link, n as post_default } from "./head-Bpj-_-sK.js";
import { t as Layout } from "./layout-D_njPgDu.js";
//#region app/category-big/page.tsx
var import_jsx_runtime = require_jsx_runtime();
function CaregoryBig() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "archive-header pt-50 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-weight-900",
					children: "Hotels Review"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "breadcrumb",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							href: "/",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" Hotels Review"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bt-1 border-color-1 mt-30 mb-50" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "loop-list loop-list-style-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row",
				children: post_default.slice(1, 7).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
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
				}, i))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "row mt-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pagination-area mb-30 wow fadeInUp animated",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Page navigation example",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "pagination justify-content-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "page-item",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										passHref: true,
										className: "page-link",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon arrow_left" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "page-item active",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										passHref: true,
										className: "page-link",
										children: "01"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "page-item",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										passHref: true,
										className: "page-link",
										children: "02"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "page-item",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										passHref: true,
										className: "page-link",
										children: "03"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "page-item",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										passHref: true,
										className: "page-link",
										children: "04"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "page-item",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										passHref: true,
										className: "page-link",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon arrow_right" })
									})
								})
							]
						})
					})
				})
			})
		})]
	})] }) }) });
}
//#endregion
export { CaregoryBig as default };
