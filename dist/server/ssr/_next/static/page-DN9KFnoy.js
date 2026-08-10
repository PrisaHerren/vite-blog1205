import { a as __toESM, t as require_react } from "./react-BSUe0WV4.js";
import { t as require_jsx_runtime } from "../../index.js";
import { a as Link, n as post_default, r as useParams } from "./head-Bpj-_-sK.js";
import { t as Layout } from "./layout-D_njPgDu.js";
import { t as comments_default } from "./comments-DaKwNJUz.js";
//#region app/single4/[id]/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var SingleVendor = () => {
	const params = useParams();
	const [singleData, setSingleData] = (0, import_react.useState)(null);
	const id = params?.id;
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setSingleData(post_default.find((data) => data.id == Number(id)) || null);
		setLoading(false);
	}, [id]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container",
		children: "Loading..."
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: singleData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "bg-grey pt-50 pb-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "single-content2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "entry-header entry-header-style-1 mb-50 pt-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "entry-title mb-50 font-weight-900",
										children: singleData.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "col-md-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "entry-meta align-items-center meta-2 font-small color-muted",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mb-5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/author",
																className: "author-avatar",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	className: "img-circle",
																	src: "/assets/imgs/authors/author-3.jpg",
																	alt: ""
																})
															}),
															"By",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/author",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "author-name font-weight-bold",
																	children: singleData.author
																})
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mr-10",
														children: [
															singleData.date,
															" ",
															(/* @__PURE__ */ new Date()).getFullYear()
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "has-dot",
														children: [singleData.readTime, " mins read"]
													})
												]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "col-md-6 text-right d-none d-md-inline",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "header-social-network d-inline-block list-inline mr-15",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "list-inline-item text-muted",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Share this: " })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "list-inline-item",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															className: "social-icon fb text-xs-center",
															target: "_blank",
															href: "#",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook" })
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "list-inline-item",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															className: "social-icon tw text-xs-center",
															target: "_blank",
															href: "#",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_twitter " })
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "list-inline-item",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															className: "social-icon pt text-xs-center",
															target: "_blank",
															href: "#",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_pinterest " })
														})
													})
												]
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
									className: "image mb-30 m-auto text-center border-radius-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "border-radius-10",
										src: `/assets/imgs/news/${singleData.img}`,
										alt: "post-title"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "entry-wraper mb-50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "excerpt mb-30",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee." })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "entry-main-content dropcap wow fadeIn animated",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fretful human far recklessly while caterpillar well a well blubbered added one a some far whispered rampantly whispered while irksome far clung irrespective wailed more rosily and where saluted while black dear so yikes as considering recast to some crass until." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "wp-block-separator is-style-dots" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													"Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "nightingale"
													}),
													"the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
													className: "wp-block-gallery columns-3 wp-block-image",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
														className: "blocks-gallery-grid",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
																className: "blocks-gallery-item",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/#",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																		className: "border-radius-5",
																		src: "/assets/imgs/news/thumb-2.jpg",
																		alt: ""
																	})
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
																className: "blocks-gallery-item",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/#",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																		className: "border-radius-5",
																		src: "/assets/imgs/news/thumb-3.jpg",
																		alt: ""
																	})
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
																className: "blocks-gallery-item",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/#",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																		className: "border-radius-5",
																		src: "/assets/imgs/news/thumb-4.jpg",
																		alt: ""
																	})
																})
															})
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "ti-credit-card mr-5" }), "Image credit: Pexel"] })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-divider" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													"Yet more some certainly yet alas abandonedly whispered",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "intriguingly"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "[2]"
													}) }),
													"well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "however"
													}),
													"hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The Guitar Legends" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													"Furrowed this in the upset",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "some across"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "[3]"
													}) }),
													"tiger oh loaded house gosh whispered",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "faltering alas"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "[4]"
													}) }),
													"ouch cuckoo coward in scratched undid together bit fumblingly so besides salamander heron during the jeepers hello fitting jauntily much smoothly globefish darn blessedly far so along bluebird leopard and."
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													"Integer eu faucibus",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "dolor"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/#",
														children: "[5]"
													}) }),
													". Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in."
												] }) }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fretful human far recklessly while caterpillar well a well blubbered added one a some far whispered rampantly whispered while irksome far clung irrespective wailed more rosily and where saluted while black dear so yikes as considering recast to some crass until cow much less and rakishly overdrew consistent for by responsible oh one hypocritical less bastard hey oversaw zebra browbeat a well." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Getting Crypto Rich" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "wp-block-separator is-style-wide" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "wp-block-image",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
														className: "alignleft is-resized",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															className: "border-radius-5",
															src: "/assets/imgs/news/thumb-11.jpg"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "And far contrary smoked some contrary among stealthy" })]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "And far contrary smoked some contrary among stealthy engagingly suspiciously a cockatoo far circa sank dully lewd slick cracked llama the much gecko yikes more squirrel sniffed this and the the much within uninhibited this abominable a blubbered overdid foresaw through alas the pessimistic." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "section-divider" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness nightingale the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the." }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "border-radius-10 border bg-white mb-30 p-30 wow fadeIn animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "row justify-content-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "col-md-5 mb-2 mb-md-0",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
																className: "font-weight-bold secondfont mb-30 mt-0",
																children: "Become a member"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-small",
																children: "Get the latest news right in your inbox. We never spam!"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "col-md-7",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "row",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "col-md-12",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		className: "form-control",
																		placeholder: "Enter your e-mail address"
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "col-md-12 mt-2",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																		type: "submit",
																		className: "btn btn-primary btn-block",
																		children: "Subscribe"
																	})
																})]
															})
														})]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Yet more some certainly yet alas abandonedly whispered intriguingly well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less however hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when." })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "entry-bottom mt-50 mb-30 wow fadeIn animated",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "tags",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tags: " }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/category",
														children: singleData.tags[0]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/category",
														children: singleData.tags[1]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														href: "/category",
														children: singleData.tags[2]
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "single-social-share clearfix wow fadeIn animated",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "entry-meta meta-1 font-small color-grey float-left mt-10",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "hit-count mr-15",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_comment_alt mr-5" }),
															singleData.comments,
															" comments"
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "hit-count mr-15",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_like mr-5" }),
															singleData.likes,
															" likes"
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "hit-count",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_star-half_alt mr-5" }),
															"Rate: ",
															singleData.rating,
															"/10"
														]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
												className: "header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "list-inline-item text-muted",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Share this:" })
													}),
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
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "author-image mb-30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													href: "/author",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: "/assets/imgs/authors/author-3.jpg",
														alt: "",
														className: "avatar"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "author-info",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-weight-bold mb-20",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "vcard author",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "fn",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/author",
																	children: singleData.author
																})
															})
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
														className: "text-muted",
														children: "About author"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "author-description text-muted",
														children: "You should write because you love the shape of stories and sentences and the creation of different words on a page."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
														href: "/author",
														className: "author-bio-link mb-md-0 mb-3",
														children: [
															"View all posts (",
															singleData.totalPost,
															")"
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "author-social",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
															className: "author-social-icons",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
																	className: "author-social-link-facebook",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		target: "_blank",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "ti-facebook" })
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
																	className: "author-social-link-twitter",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		target: "_blank",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "ti-twitter-alt" })
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
																	className: "author-social-link-pinterest",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		target: "_blank",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "ti-pinterest" })
																	})
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
																	className: "author-social-link-instagram",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		target: "_blank",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "ti-instagram" })
																	})
																})
															]
														})
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "related-posts",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "post-module-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "widget-header-2 position-relative mb-30",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
														className: "mt-5 mb-30",
														children: "Related posts"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "loop-list loop-list-style-1",
													children: post_default.slice(1, 3).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
														className: "hover-up-2 transition-normal wow fadeInUp animated",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "row mb-40 list-style-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "col-md-4",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "post-thumb position-relative border-radius-5",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "img-hover-slide border-radius-5 position-relative",
																		style: { backgroundImage: `url(/assets/imgs/news/${item.img})` },
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
																				href: `/blog/${item.id}`,
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
													}, item.id))
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "single-more-articles border-radius-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "widget-header-2 position-relative mb-30",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
													className: "mt-5 mb-30",
													children: "You might be interested in"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: "single-more-articles-close",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon icon_close" })
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "post-block-list post-module-1 post-module-5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
													className: "list-post",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "mb-30",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "d-flex hover-up-2 transition-normal",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
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
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
																	className: "post-title mb-15 text-limit-2-row font-medium",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/single",
																		children: "The Best Time to Travel to Cambodia"
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "entry-meta meta-1 float-left font-x-small text-uppercase",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "post-on",
																		children: "27 Jan"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "post-by has-dot",
																		children: "13k views"
																	})]
																})]
															})]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "mb-10",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "d-flex hover-up-2 transition-normal",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden",
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
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
																	className: "post-title mb-15 text-limit-2-row font-medium",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/single",
																		children: "20 Photos to Inspire You to Visit Cambodia"
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "entry-meta meta-1 float-left font-x-small text-uppercase",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "post-on",
																		children: "27 August"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "post-by has-dot",
																		children: "14k views"
																	})]
																})]
															})]
														})
													})]
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "comments-area",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "widget-header-2 position-relative mb-30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
													className: "mt-5 mb-30",
													children: "Comments"
												})
											}), comments_default.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "comment-list wow fadeIn animated",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "single-comment justify-content-between d-flex",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "user justify-content-between d-flex",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "thumb",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: `/assets/imgs/authors/${item.img}`,
																alt: ""
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "desc",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "comment",
																children: item.desc
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "d-flex justify-content-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "d-flex align-items-center",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		children: item.name
																	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																		className: "date",
																		children: [
																			item.date,
																			" ",
																			(/* @__PURE__ */ new Date()).getFullYear(),
																			" at ",
																			item.time
																		]
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "reply-btn",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		className: "btn-reply",
																		children: "Reply"
																	})
																})]
															})]
														})]
													})
												}), item.reply && item.reply.map((cmntr, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "single-comment depth-2 justify-content-between d-flex mt-50",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "user justify-content-between d-flex",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "thumb",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: `/assets/imgs/authors/${cmntr.img}`,
																alt: ""
															})
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "desc",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "comment",
																children: cmntr.desc
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "d-flex justify-content-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "d-flex align-items-center",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		children: cmntr.name
																	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																		className: "date",
																		children: [
																			cmntr.date,
																			" ",
																			(/* @__PURE__ */ new Date()).getFullYear(),
																			" at ",
																			cmntr.time
																		]
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "reply-btn",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																		href: "/#",
																		className: "btn-reply",
																		children: "Reply"
																	})
																})]
															})]
														})]
													})
												}) }, `${cmntr.name}-reply-${i}`))]
											}, `${item.name}-${i}`))]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "comment-form wow fadeIn animated",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "widget-header-2 position-relative mb-30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
													className: "mt-5 mb-30",
													children: "Leave a Reply"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
												className: "form-contact comment_form",
												action: "#",
												id: "commentForm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "row",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "col-12",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "form-group",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																	className: "form-control w-100",
																	name: "comment",
																	id: "comment",
																	cols: 30,
																	rows: 9,
																	placeholder: "Write Comment"
																})
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "col-sm-6",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "form-group",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	className: "form-control",
																	name: "name",
																	id: "name",
																	type: "text",
																	placeholder: "Name"
																})
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "col-sm-6",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "form-group",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	className: "form-control",
																	name: "email",
																	id: "email",
																	type: "email",
																	placeholder: "Email"
																})
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "col-12",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "form-group",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	className: "form-control",
																	name: "website",
																	id: "website",
																	type: "text",
																	placeholder: "Website"
																})
															})
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "form-group",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "submit",
														className: "btn button button-contactForm",
														children: "Post Comment"
													})
												})]
											})]
										})
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-lg-4 primary-sidebar sticky-sidebar",
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
											children: "Hi, I'm Stenven, a Florida native, who left my career in corporate wealth management six years ago to embark on a summer of soul searching that would change the course of my life forever."
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
										className: "widget-header-2 position-relative mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "mt-5 mb-30",
											children: "Most popular"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "post-block-list post-module-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "list-post",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "mb-30 wow fadeInUp animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "post-content media-body",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
																className: "post-title mb-15 text-limit-2-row font-medium",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/single",
																	children: "Spending Some Quality Time with Kids? It's Possible"
																})
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "entry-meta meta-1 float-left font-x-small text-uppercase",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-on",
																	children: "05 August"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-by has-dot",
																	children: "150 views"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/single",
																className: "color-white",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/imgs/news/thumb-6.jpg",
																	alt: ""
																})
															})
														})]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "mb-30 wow fadeInUp animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "post-content media-body",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
																className: "post-title mb-15 text-limit-2-row font-medium",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/single",
																	children: "Relationship Podcasts are Having \"That\" Talk"
																})
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "entry-meta meta-1 float-left font-x-small text-uppercase",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-on",
																	children: "12 August"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-by has-dot",
																	children: "6k views"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/single",
																className: "color-white",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/imgs/news/thumb-7.jpg",
																	alt: ""
																})
															})
														})]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "mb-30 wow fadeInUp animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "post-content media-body",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
																className: "post-title mb-15 text-limit-2-row font-medium",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/single",
																	children: "Here's How to Get the Best Sleep at Night"
																})
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "entry-meta meta-1 float-left font-x-small text-uppercase",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-on",
																	children: "15 August"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-by has-dot",
																	children: "16k views"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/single",
																className: "color-white",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/imgs/news/thumb-2.jpg",
																	alt: ""
																})
															})
														})]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: " wow fadeInUp animated",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "post-content media-body",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
																className: "post-title mb-15 text-limit-2-row font-medium",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																	href: "/single",
																	children: "America's Governors Get Tested for a Virus That Is Testing Them"
																})
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "entry-meta meta-1 float-left font-x-small text-uppercase",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-on",
																	children: "12 August"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "post-by has-dot",
																	children: "3k views"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
																href: "/single",
																className: "color-white",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: "/assets/imgs/news/thumb-3.jpg",
																	alt: ""
																})
															})
														})]
													})
												})
											]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "widget-header-2 position-relative mb-30",
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
										className: "widget-header-2 position-relative mb-30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
											className: "mt-5 mb-30",
											children: "Instagram"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "instagram-gellay",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "insta-feed",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "assets/imgs/thumbnail-3.jpg",
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
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "assets/imgs/thumbnail-4.jpg",
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
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "assets/imgs/thumbnail-5.jpg",
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
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "assets/imgs/thumbnail-3.jpg",
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
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "assets/imgs/thumbnail-4.jpg",
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
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "assets/imgs/thumbnail-5.jpg",
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
	}) }) }) });
};
//#endregion
export { SingleVendor as default };
