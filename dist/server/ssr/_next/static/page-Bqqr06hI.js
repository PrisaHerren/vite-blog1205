import { t as require_jsx_runtime } from "../../index.js";
import { a as Link } from "./head-Bpj-_-sK.js";
import { t as Layout } from "./layout-D_njPgDu.js";
//#region app/page-login/page.tsx
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "bg-grey pt-80 pb-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "row justify-content-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-xl-6 col-md-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "login_wrap widget-taber-content p-30 bg-white border-radius-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "padding_eight_all bg-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "heading_s1 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mb-30 font-weight-900",
										children: "Login"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									method: "post",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "form-group",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												className: "form-control",
												name: "email",
												placeholder: "Your Email"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "form-group",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: "form-control",
												required: true,
												type: "password",
												name: "password",
												placeholder: "Password"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "login_footer form-group",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "chek-form",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "custome-checkbox",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														className: "form-check-input",
														type: "checkbox",
														name: "checkbox",
														id: "exampleCheckbox1",
														value: ""
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "form-check-label",
														htmlFor: "exampleCheckbox1",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remember me" })
													})]
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "text-muted",
												href: "#",
												children: "Forgot password?"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "form-group",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "button button-contactForm btn-block",
												children: "Log in"
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divider-text-center mt-15 mb-15",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " or" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "btn-login list_none text-center mb-15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "btn btn-facebook",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_facebook  mr-5" }), "Facebook"]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "btn btn-google",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "elegant-icon social_googleplus mr-5" }), "Google"]
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-muted text-center",
									children: ["Don't Have an Account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "/page-register",
										children: "Sign up now"
									})]
								})
							]
						})
					})
				})
			})
		})
	}) }) });
}
//#endregion
export { Login as default };
