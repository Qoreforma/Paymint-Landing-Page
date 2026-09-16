import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { b as ExternalLink, m as Menu, n as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$6 } from "./invite._code-0eYXuLJx.mjs";
import { t as Route$7 } from "./invite.index-CvIeP2pn.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ClZqFQNu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BK4LjT6n.css";
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center gap-2 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "PayMint Logo",
			className: "h-16 w-auto object-contain"
		})
	});
}
var PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.paymint.app";
var APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";
var WEB_APP_URL = "https://app.paymint.com.ng";
function Nav() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [[
						["Features", "/#features"],
						["How it works", "/#how"],
						["Refer & Earn", "/#refer"]
					].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "text-sm font-medium text-muted-foreground transition hover:text-ink",
						children: label
					}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "text-sm font-medium text-muted-foreground transition hover:text-ink",
						children: "Contact"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WEB_APP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary hover:border-brand/40 sm:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Use Web App" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 text-muted-foreground" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#download",
							className: "hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex",
							children: "Get the App"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsOpen(!isOpen),
							className: "grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition hover:bg-secondary md:hidden",
							"aria-label": isOpen ? "Close Menu" : "Open Menu",
							"aria-expanded": isOpen,
							children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border/60 bg-background/95 px-4 py-6 backdrop-blur-lg md:hidden sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col space-y-4",
				children: [
					[
						["Features", "/#features"],
						["How it works", "/#how"],
						["Refer & Earn", "/#refer"]
					].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						onClick: () => setIsOpen(false),
						className: "text-base font-medium text-muted-foreground transition hover:text-ink",
						children: label
					}, href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setIsOpen(false),
						className: "text-base font-medium text-muted-foreground transition hover:text-ink",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WEB_APP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => setIsOpen(false),
								className: "flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/80 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Use Web App" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 text-muted-foreground" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: APP_STORE_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => setIsOpen(false),
								className: "flex items-center justify-center rounded-xl bg-ink py-3 text-sm font-semibold text-white transition hover:opacity-90",
								children: "Get the App (iOS)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: PLAY_STORE_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => setIsOpen(false),
								className: "flex items-center justify-center rounded-xl bg-ink py-3 text-sm font-semibold text-white transition hover:opacity-90",
								children: "Get the App (Android)"
							})
						]
					})
				]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm text-muted-foreground",
					children: "The wallet for airtime, data, eSIMs, electricity, cable TV and every other bill."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#features",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Features"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#how",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "How it works"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://app.paymint.com.ng",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Web App"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://apps.apple.com/us/app/paymint/id6801909031",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "App Store"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://play.google.com/store/apps/details?id=com.paymint.app",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Google Play"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#refer",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Refer & Earn"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#refer",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Partners"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Contact Us"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Legal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Terms"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Privacy"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/security",
							className: "text-ink/80 transition hover:text-brand-deep",
							children: "Security"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-1 sm:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" PayMint. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[10px]",
						children: [
							"Website designed & developed by",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.upwork.com/freelancers/~01700c62beb4fd95f1?mp_source=share",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "font-medium transition-colors hover:text-ink",
								children: "Opafunso Oluwaferanmi Benjamin"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Twitter",
							className: "hover:text-ink",
							children: "Twitter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Instagram",
							className: "hover:text-ink",
							children: "Instagram"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "WhatsApp",
							className: "hover:text-ink",
							children: "WhatsApp"
						})
					]
				})]
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "PayMint — Fund your wallet. Pay every bill. Instantly." },
			{
				name: "description",
				content: "PayMint is the mobile-first wallet for airtime, data, eSIMs, electricity, cable TV and more. Fund via virtual account and pay bills in seconds — even from WhatsApp."
			},
			{
				name: "author",
				content: "Opafunso Oluwaferanmi Benjamin"
			},
			{
				name: "creator",
				content: "Opafunso Oluwaferanmi Benjamin"
			},
			{
				name: "designer",
				content: "Opafunso Oluwaferanmi Benjamin"
			},
			{
				name: "publisher",
				content: "PayMint"
			},
			{
				property: "og:title",
				content: "PayMint — Fund your wallet. Pay every bill."
			},
			{
				property: "og:description",
				content: "One wallet for airtime, data, eSIMs, electricity, cable TV and bills. Pay from the app or straight from WhatsApp."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "PayMint — Fund your wallet. Pay every bill."
			},
			{
				name: "twitter:description",
				content: "One wallet for every bill. Pay from the app or from WhatsApp."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.jpeg",
				type: "image/jpeg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				"name": "PayMint",
				"url": "https://paymint.co",
				"creator": {
					"@type": "Person",
					"name": "Opafunso Oluwaferanmi Benjamin",
					"url": "https://www.upwork.com/freelancers/~01700c62beb4fd95f1?mp_source=share"
				}
			}) }
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				dangerouslySetInnerHTML: { __html: "<!-- Website designed & developed by Opafunso Oluwaferanmi Benjamin - https://www.upwork.com/freelancers/~01700c62beb4fd95f1?mp_source=share -->" },
				style: { display: "none" }
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
					richColors: true,
					position: "top-right"
				})
			]
		})
	});
}
var $$splitComponentImporter$4 = () => import("./terms-BzI3vjJH.mjs");
var Route$4 = createFileRoute("/terms")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./security-DHdXy5BX.mjs");
var Route$3 = createFileRoute("/security")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./privacy-26G59L9m.mjs");
var Route$2 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./contact-C9fXJqbP.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — PayMint Support & Enquiries" },
		{
			name: "description",
			content: "Have questions or need assistance? Get in touch with the PayMint support and partnership team. We're here to help 24/7."
		},
		{
			property: "og:title",
			content: "Contact Us — PayMint"
		},
		{
			property: "og:description",
			content: "Reach out to the PayMint support team for any questions or transaction assistance."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BpHuLRcp.mjs");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var TermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$5
});
var SecurityRoute = Route$3.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$5
});
var PrivacyRoute = Route$2.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var InviteIndexRoute = Route$7.update({
	id: "/invite/",
	path: "/invite/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	ContactRoute,
	PrivacyRoute,
	SecurityRoute,
	TermsRoute,
	InviteCodeRoute: Route$6.update({
		id: "/invite/$code",
		path: "/invite/$code",
		getParentRoute: () => Route$5
	}),
	InviteIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
