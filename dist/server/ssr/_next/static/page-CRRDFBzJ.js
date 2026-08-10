import { a as __toESM, t as require_react } from "./react-BSUe0WV4.js";
import { t as require_jsx_runtime } from "../../index.js";
import { a as Link, n as post_default } from "./head-Bpj-_-sK.js";
import { n as require_lib, t as Layout } from "./layout-D_njPgDu.js";
import { t as PostCarousel1 } from "./PostCarousel1-BvE0Ly0H.js";
require_react();
var import_lib = /* @__PURE__ */ __toESM(require_lib(), 1);
var import_jsx_runtime = require_jsx_runtime();
var HomeSlider3 = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lib.default, {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlay: true,
		className: "featured-slider-3-items",
		children: post_default.slice(4, 6).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "slider-single overflow-hidden border-radius-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "post-thumb position-relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "thumb-overlay position-relative",
					style: { backgroundImage: `url(/assets/imgs/news/${item.img})` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "post-content-overlay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "container",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "post-title mb-20 font-weight-900 text-white",
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
						})
					})
				})
			})
		}, i))
	}) });
};
//#endregion
//#region app/home-3/page.tsx
function Home3() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-grey pb-30",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container pt-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "featured-slider-3 position-relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "slider-3-arrow-cover" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeSlider3, {})]
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
											}, i))
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
																	src: `/assets/imgs/news/${item.img}`,
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
		]
	}) }) });
}
//#endregion
export { Home3 as default };
