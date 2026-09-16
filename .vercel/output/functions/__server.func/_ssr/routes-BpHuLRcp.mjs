import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { D as BadgeCheck, E as Check, O as ArrowRight, a as Tv, g as Lock, i as Wallet, l as ShieldCheck, o as Sparkles, p as MessageCircle, r as Wifi, s as Smartphone, t as Zap, v as Globe, y as Gift } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BpHuLRcp.js
var import_jsx_runtime = require_jsx_runtime();
var phoneImage_default = "/assets/phoneImage-2gxWy4wg.png";
var PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.paymint.app";
var APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";
var WEB_APP_URL = "https://app.paymint.com.ng";
function PlayStoreButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: PLAY_STORE_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "group inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition hover:opacity-90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "h-7 w-7",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.6L3.6 2.3zm10.3 10.6l2.5 2.6-11.1 6.3c-.3.2-.6.2-.9.1l9.5-9zm3.6-1.9l3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.8-2.7 2.8-2.6zM4.4 1.8c.3-.1.6-.1.9.1l11.1 6.3-2.5 2.6L4.4 1.8z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-left leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-wider opacity-70",
				children: "Get it on"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-lg font-semibold",
				children: "Google Play"
			})]
		})]
	});
}
function AppStoreButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: APP_STORE_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "group inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition hover:opacity-90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "h-7 w-7",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.365 14.363c-.021-3.155 2.568-4.664 2.686-4.74-1.465-2.145-3.738-2.435-4.549-2.464-1.921-.194-3.754 1.134-4.733 1.134-.977 0-2.5-1.109-4.088-1.077-2.072.031-3.985 1.206-5.048 3.057-2.146 3.722-.549 9.215 1.545 12.247 1.026 1.485 2.235 3.155 3.842 3.093 1.543-.062 2.133-1.002 4.004-1.002 1.869 0 2.401 1.002 4.004.97 1.666-.03 2.697-1.485 3.723-2.969 1.183-1.733 1.671-3.411 1.692-3.497-.037-.014-3.057-1.173-3.078-4.753zm-3.094-8.835c.846-1.026 1.417-2.451 1.261-3.876-1.218.05-2.709.813-3.587 1.838-.787.896-1.468 2.348-1.291 3.752 1.365.105 2.771-.685 3.617-1.714z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-left leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-wider opacity-70",
				children: "Download on the"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-lg font-semibold",
				children: "App Store"
			})]
		})]
	});
}
function WebButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WEB_APP_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "group inline-flex items-center gap-3 rounded-2xl border-2 border-ink/10 bg-white px-5 py-3 text-ink transition hover:border-brand hover:shadow-[0_10px_30px_-10px_oklch(0.82_0.13_200_/_0.5)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-7 w-7 place-items-center rounded-lg bg-brand-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 text-brand-deep" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-left leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-wider text-muted-foreground",
				children: "No app? No problem"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-lg font-semibold",
				children: "Use on Web"
			})]
		})]
	});
}
function DownloadRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppStoreButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayStoreButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebButton, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 gradient-brand-radial" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-brand/30 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-brand-soft/60 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-12 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pt-20 lg:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-brand-deep backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-4 w-4 place-items-center rounded-full bg-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-3 w-3 text-white",
									strokeWidth: 3
								})
							}), "New — Pay bills straight from WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",
							children: [
								"Fund your wallet.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "Pay every bill."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Instantly."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg text-muted-foreground",
							children: "PayMint gives you a personal virtual account to load your wallet — then pays your airtime, data, eSIMs, electricity and cable TV in one tap. Right from the app, or from a WhatsApp chat."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadRow, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-brand-deep" }), "Bank-level security"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 text-brand-deep" }), "Licensed payment partner"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-brand-deep" }), "Instant settlement"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 mx-auto h-[520px] max-w-md rounded-[3rem] gradient-brand opacity-40 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: phoneImage_default,
							alt: "PayMint app on a smartphone showing wallet balance and bill payment options",
							width: 912,
							height: 1200,
							className: "relative w-full max-w-md drop-shadow-[0_40px_60px_oklch(0.55_0.12_210_/_0.25)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -left-2 top-16 hidden rounded-2xl border border-border bg-white p-3 shadow-xl sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-brand-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-brand-deep" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "via WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: "Airtime sent ✓"
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -right-2 bottom-24 hidden rounded-2xl border border-border bg-white p-3 shadow-xl sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-brand-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5 text-brand-deep" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Wallet funded"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold",
									children: "+ ₦50,000"
								})] })]
							})
						})
					]
				})]
			})
		]
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "how",
		className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold uppercase tracking-widest text-brand-deep",
					children: "How it works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-bold sm:text-5xl",
					children: "From transfer to paid, in seconds"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "A wallet you fund by bank transfer, spent on the bills you already pay every month."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					icon: Wallet,
					title: "Fund your wallet",
					body: "Get a static or dynamic virtual account number. Send a bank transfer — your balance lands instantly."
				},
				{
					icon: Sparkles,
					title: "Choose a bill",
					body: "Airtime, data, eSIM, electricity, cable TV — pick what you want to pay in seconds."
				},
				{
					icon: Zap,
					title: "Pay instantly",
					body: "One tap. Tokens, receipts and confirmations delivered right away."
				},
				{
					icon: MessageCircle,
					title: "Or do it from WhatsApp",
					body: "Chat with PayMint to top up your wallet and pay bills without opening the app."
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group relative rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-[0_20px_40px_-20px_oklch(0.82_0.13_200_/_0.4)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-2xl font-bold text-brand/70",
							children: ["0", i + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-lg font-semibold",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.body
					})
				]
			}, s.title))
		})]
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "bg-secondary/40 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold uppercase tracking-widest text-brand-deep",
					children: "Features"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-bold sm:text-5xl",
					children: "Everything money should already do"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 rounded-3xl border border-border bg-card p-8 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-xl bg-ink text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Instant wallet funding"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-3xl font-bold",
								children: "Your own virtual account, ready to receive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Every PayMint user gets a static account number for repeat funding and dynamic accounts for one-off transfers. Send from any bank — funds land in your wallet in real time."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 rounded-2xl border border-border bg-background p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Your static account"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl font-bold tracking-tight",
										children: "9042 1188 03"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: "PayMint / Wema Bank"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep",
										children: "● Live"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 rounded-3xl border border-border gradient-brand p-8 sm:p-10 text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-xl bg-white/70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-3xl font-bold",
								children: "All your bills, one app"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-ink/70",
								children: "Stop juggling apps and USSD codes. Pay everything from a single balance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-2 gap-3",
								children: [
									{
										icon: Smartphone,
										label: "Airtime"
									},
									{
										icon: Wifi,
										label: "Data"
									},
									{
										icon: Globe,
										label: "eSIM"
									},
									{
										icon: Zap,
										label: "Electricity"
									},
									{
										icon: Tv,
										label: "Cable TV"
									},
									{
										icon: Sparkles,
										label: "And more"
									}
								].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-4 w-4" }), b.label]
								}, b.label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 rounded-3xl border border-border bg-card p-8 sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold uppercase tracking-widest text-muted-foreground",
									children: "WhatsApp payments"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-3xl font-bold",
								children: "Pay bills without leaving your chats"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Message PayMint on WhatsApp to fund your wallet, buy airtime, top up data or pay for electricity — no app-switching, no menus."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand-soft px-4 py-2 text-sm",
									children: "Buy ₦2,000 MTN airtime"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-2 text-sm",
									children: "Sent ✓ New balance: ₦123,400"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 rounded-3xl border border-border bg-ink p-8 sm:p-10 text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-xl bg-brand text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold uppercase tracking-widest text-white/60",
									children: "Refer & Earn"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-3xl font-bold",
								children: "Get paid, cash, for every friend you bring in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-white/70",
								children: "Share your link. When your friends sign up and start paying bills, you get a cash bonus dropped straight into your PayMint wallet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/10 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-widest text-white/60",
										children: "Bonus / referral"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl font-bold text-brand",
										children: "₦1,500+"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#refer",
									className: "inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-ink transition hover:opacity-90",
									children: ["Become a partner ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
					})
				]
			})]
		})
	});
}
function ReferSpotlight() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "refer",
		className: "relative overflow-hidden py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 gradient-brand-radial" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-brand-deep backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4" }), " PayMint Partners"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-4xl font-bold sm:text-6xl",
					children: [
						"Creators earn cash ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "every time"
						}),
						" someone joins."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
					children: "Built for influencers, community builders and everyday users. Share your link, watch signups roll in, and get paid — in real Naira, not points."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3",
					children: [
						["Instant payout", "Bonuses hit your wallet the moment your referrals qualify."],
						["Live dashboard", "Track clicks, signups and earnings from inside the app."],
						["No cap", "Refer 5 or 5,000 — you keep earning on every one."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-semibold",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: d
						})]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WEB_APP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:opacity-90",
					children: ["Become a PayMint Partner ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		})]
	});
}
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [
				{
					icon: Lock,
					title: "256-bit encryption",
					body: "Every transfer is end-to-end encrypted."
				},
				{
					icon: ShieldCheck,
					title: "Bank-level security",
					body: "Biometric login and transaction PIN protection."
				},
				{
					icon: BadgeCheck,
					title: "Licensed partner",
					body: "Working with regulated payment institutions."
				},
				{
					icon: Zap,
					title: "99.9% uptime",
					body: "Built to settle when you need it — instantly."
				}
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold",
					children: i.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: i.body
				})] })]
			}, i.title))
		})
	});
}
function DownloadCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "download",
		className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[2.5rem] gradient-brand p-10 sm:p-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/40 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-ink/10 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl font-bold text-ink sm:text-5xl",
							children: [
								"One wallet. Every bill.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Ready when you are."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-ink/80",
							children: "Download PayMint on iOS or Android, or hop on the web app right now."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadRow, {})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden justify-end lg:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-white/60 p-6 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-ink/60",
									children: "This month"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-4xl font-bold text-ink",
									children: "₦2.4B+"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-ink/70",
									children: "in bills paid on PayMint"
								})
							]
						})
					})]
				})
			]
		})
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferSpotlight, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCTA, {})
	] });
}
//#endregion
export { Landing as component };
