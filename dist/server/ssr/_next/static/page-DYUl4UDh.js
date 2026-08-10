import { t as require_jsx_runtime } from "../../index.js";
import { a as Link, n as post_default } from "./head-Bpj-_-sK.js";
import { t as Layout } from "./layout-D_njPgDu.js";
//#region app/category-list/page.tsx
var import_jsx_runtime = require_jsx_runtime();
function CaregoryList() {
	console.log(post_default);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "archive-header pt-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-weight-900",
					children: "Healthy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "breadcrumb",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							href: "/",
							rel: "nofollow",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" Healthy"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bt-1 border-color-1 mt-30 mb-50" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pb-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-lg-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "post-module-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "loop-list loop-list-style-1",
							children: post_default.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
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
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-lg-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "widget-area",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "about-author-img mb-25",
										src: "/assets/imgs/authors/author.jpg",
										alt: ""
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
										className: "mb-20",
										children: "Hello, I'm Steven"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-muted",
										children: "Hi, I’m Stenven, a Florida native, who left my career in corporate wealth management six years ago to embark on a summer of soul searching that would change the course of my life forever."
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
								]
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
															src: `assets/imgs/news/${item.img}`,
															alt: ""
														})
													})
												})]
											})
										}, i))
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
	})] }) }) });
}
//#endregion
export { CaregoryList as default };
