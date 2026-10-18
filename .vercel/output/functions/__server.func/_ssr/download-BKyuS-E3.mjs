import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { O as CircleCheck, S as Globe, c as Smartphone, l as Shield, m as QrCode, o as Star, p as Radio, s as Sparkles, t as Zap, u as ShieldCheck, w as ExternalLink, x as Layers, y as Lock } from "../_libs/lucide-react.mjs";
import { t as Route } from "./download-BgcV_wsH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/download-BKyuS-E3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLAY_STORE_BASE = "https://play.google.com/store/apps/details?id=com.paymint.app";
var APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";
var WEB_APP_URL = "https://app.paymint.com.ng";
function DownloadPage() {
	const search = Route.useSearch();
	const [platform, setPlatform] = (0, import_react.useState)("desktop");
	const [isRedirecting, setIsRedirecting] = (0, import_react.useState)(false);
	const playStoreUrl = import_react.useMemo(() => {
		const utmKeys = [
			"utm_source",
			"utm_medium",
			"utm_campaign",
			"utm_content",
			"utm_term",
			"src"
		];
		const utmParts = [];
		for (const key of utmKeys) {
			const val = search[key];
			if (val) utmParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
		}
		const refCode = search.ref || search.code;
		if (refCode) utmParts.push(`referrer_code=${encodeURIComponent(refCode.trim().toUpperCase())}`);
		if (utmParts.length > 0) return `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(utmParts.join("&"))}`;
		return PLAY_STORE_BASE;
	}, [search]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const ua = navigator.userAgent || "";
		const isIOSDevice = /iPad|iPhone|iPod/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
		const isAndroidDevice = /android/i.test(ua);
		if (isAndroidDevice) setPlatform("android");
		else if (isIOSDevice) setPlatform("ios");
		else setPlatform("desktop");
		if (search.store === "1" || search.store === "true" || search.auto === "1") {
			if (isAndroidDevice) {
				setIsRedirecting(true);
				window.location.href = playStoreUrl;
			} else if (isIOSDevice) {
				setIsRedirecting(true);
				window.location.href = APP_STORE_URL;
			}
		}
	}, [search, playStoreUrl]);
	const qrCodeImgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&format=svg&data=${encodeURIComponent("https://paymint.com.ng/download?store=1")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-[85vh] overflow-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 gradient-brand-radial opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-brand-soft/50 blur-3xl" }),
			isRedirecting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-sm px-6 py-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-inner animate-pulse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-foreground",
							children: "Redirecting to App Store..."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Opening the official PayMint app page for your device."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-col gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: platform === "android" ? playStoreUrl : APP_STORE_URL,
								className: "inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-brand-deep transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Click here if not redirected" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Official Mobile Download • Instant Setup" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
								children: [
									"One Wallet. Every Bill. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:inline" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-brand",
										children: "In Your Pocket."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
								children: "Get the official PayMint mobile app for instant airtime, discounted data bundles, automated electricity tokens, cable TV, and crypto trading with zero hidden fees."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex text-amber-500",
											children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: "4.8/5 Rating"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bank-grade 256-bit Security" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instant Naira Settlement" })]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-8 lg:grid-cols-12 lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-5 lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all hover:shadow-md ${platform === "android" ? "border-brand ring-2 ring-brand/30 bg-gradient-to-r from-brand/5 to-transparent" : "border-border"}`,
									children: [platform === "android" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white shadow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Detected for your device" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-white shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													className: "h-8 w-8",
													fill: "currentColor",
													"aria-hidden": true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.6L3.6 2.3zm10.3 10.6l2.5 2.6-11.1 6.3c-.3.2-.6.2-.9.1l9.5-9zm3.6-1.9l3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.8-2.7 2.8-2.6zM4.4 1.8c.3-.1.6-.1.9.1l11.1 6.3-2.5 2.6L4.4 1.8z" })
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-bold text-foreground",
												children: "PayMint for Android"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mt-0.5",
												children: "Available on Google Play • Compatible with Android 8.0+"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: playStoreUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center justify-center gap-2.5 rounded-2xl bg-ink px-6 py-3.5 font-semibold text-white transition hover:opacity-90 active:scale-95 shadow-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												viewBox: "0 0 24 24",
												className: "h-5 w-5",
												fill: "currentColor",
												"aria-hidden": true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.6L3.6 2.3zm10.3 10.6l2.5 2.6-11.1 6.3c-.3.2-.6.2-.9.1l9.5-9zm3.6-1.9l3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.8-2.7 2.8-2.6zM4.4 1.8c.3-.1.6-.1.9.1l11.1 6.3-2.5 2.6L4.4 1.8z" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-left leading-tight",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider opacity-70",
													children: "Get it on"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-sm font-semibold",
													children: "Google Play"
												})]
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative overflow-hidden rounded-3xl border bg-card p-6 shadow-sm transition-all hover:shadow-md ${platform === "ios" ? "border-brand ring-2 ring-brand/30 bg-gradient-to-r from-brand/5 to-transparent" : "border-border"}`,
									children: [platform === "ios" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white shadow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Detected for your device" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-white shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													className: "h-8 w-8",
													fill: "currentColor",
													"aria-hidden": true,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.365 14.363c-.021-3.155 2.568-4.664 2.686-4.74-1.465-2.145-3.738-2.435-4.549-2.464-1.921-.194-3.754 1.134-4.733 1.134-.977 0-2.5-1.109-4.088-1.077-2.072.031-3.985 1.206-5.048 3.057-2.146 3.722-.549 9.215 1.545 12.247 1.026 1.485 2.235 3.155 3.842 3.093 1.543-.062 2.133-1.002 4.004-1.002 1.869 0 2.401 1.002 4.004.97 1.666-.03 2.697-1.485 3.723-2.969 1.183-1.733 1.671-3.411 1.692-3.497-.037-.014-3.057-1.173-3.078-4.753zm-3.094-8.835c.846-1.026 1.417-2.451 1.261-3.876-1.218.05-2.709.813-3.587 1.838-.787.896-1.468 2.348-1.291 3.752 1.365.105 2.771-.685 3.617-1.714z" })
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-bold text-foreground",
												children: "PayMint for iPhone & iPad"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mt-0.5",
												children: "Available on Apple App Store • Requires iOS 14.0+"
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: APP_STORE_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center justify-center gap-2.5 rounded-2xl bg-ink px-6 py-3.5 font-semibold text-white transition hover:opacity-90 active:scale-95 shadow-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												viewBox: "0 0 24 24",
												className: "h-5 w-5",
												fill: "currentColor",
												"aria-hidden": true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.365 14.363c-.021-3.155 2.568-4.664 2.686-4.74-1.465-2.145-3.738-2.435-4.549-2.464-1.921-.194-3.754 1.134-4.733 1.134-.977 0-2.5-1.109-4.088-1.077-2.072.031-3.985 1.206-5.048 3.057-2.146 3.722-.549 9.215 1.545 12.247 1.026 1.485 2.235 3.155 3.842 3.093 1.543-.062 2.133-1.002 4.004-1.002 1.869 0 2.401 1.002 4.004.97 1.666-.03 2.697-1.485 3.723-2.969 1.183-1.733 1.671-3.411 1.692-3.497-.037-.014-3.057-1.173-3.078-4.753zm-3.094-8.835c.846-1.026 1.417-2.451 1.261-3.876-1.218.05-2.709.813-3.587 1.838-.787.896-1.468 2.348-1.291 3.752 1.365.105 2.771-.685 3.617-1.714z" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-left leading-tight",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] uppercase tracking-wider opacity-70",
													children: "Download on the"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-sm font-semibold",
													children: "App Store"
												})]
											})]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all hover:bg-card",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-display text-base font-semibold text-foreground",
												children: "Prefer to use your browser?"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Access all PayMint features directly online without downloading."
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: WEB_APP_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-2.5 text-xs font-semibold text-foreground transition hover:border-brand hover:bg-secondary/40 shadow-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Web App" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 text-muted-foreground" })]
										})]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border-2 border-brand/20 bg-gradient-to-b from-card to-brand-soft/20 p-6 sm:p-8 text-center shadow-lg shadow-brand/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mx-auto mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instant Phone Scan" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold text-foreground",
										children: "Scan with Your Phone Camera"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs sm:text-sm text-muted-foreground",
										children: "Our smart download link automatically detects whether you're on iPhone or Android and opens the right store instantly."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto mt-6 flex h-60 w-60 items-center justify-center rounded-3xl border border-border/80 bg-white p-4 shadow-inner",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: qrCodeImgSrc,
											alt: "Scan to Download PayMint App",
											width: 210,
											height: 210,
											className: "h-full w-full object-contain",
											loading: "lazy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center justify-center gap-2 text-xs font-medium text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex h-2 w-2 rounded-full bg-brand animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Point your phone camera to download directly" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 border-t border-border/60 pt-4 text-[11px] text-muted-foreground",
										children: [
											"Direct link:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-foreground font-semibold",
												children: "paymint.com.ng/download?store=1"
											})
										]
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 border-t border-border pt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center max-w-xl mx-auto mb-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl sm:text-3xl font-bold text-foreground",
								children: "Everything You Need in One Wallet"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Built for speed, reliability, and zero-fee transactions across Nigeria."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-deep mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-foreground text-base",
											children: "Instant Funding"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
											children: "Dedicated virtual accounts for lightning-fast bank transfers with instant wallet credit."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-deep mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-foreground text-base",
											children: "Cheapest Data Rates"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
											children: "Enjoy wholesale prices on MTN, Airtel, Glo, and 9mobile SME & corporate gifting data."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-deep mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-foreground text-base",
											children: "Zero Hidden Charges"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
											children: "Transparent pricing on electricity tokens, DSTV, GOtv, Startimes, and airtime top-ups."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-deep mb-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-foreground text-base",
											children: "Bank-Grade Protection"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
											children: "Secured by biometric authentication, end-to-end encryption, and licensed payment partners."
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-border/80 bg-secondary/30 px-6 py-4 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Official PayMint Distribution" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "256-bit SSL Protected" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "paymint.com.ng • Verified Production Release" })]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { DownloadPage as component };
