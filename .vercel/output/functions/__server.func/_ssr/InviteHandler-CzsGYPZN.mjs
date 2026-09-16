import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { E as Check, b as ExternalLink, l as ShieldCheck, o as Sparkles, s as Smartphone, x as Copy, y as Gift } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InviteHandler-CzsGYPZN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLAY_STORE_BASE = "https://play.google.com/store/apps/details?id=com.paymint.app";
var APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";
var WEB_APP_URL = "https://app.paymint.com.ng";
function InviteHandler({ referralCode = "" }) {
	const cleanCode = (referralCode || "").trim().toUpperCase();
	const playStoreReferrerUrl = cleanCode ? `${PLAY_STORE_BASE}&referrer=referrer_code%3D${encodeURIComponent(cleanCode)}` : PLAY_STORE_BASE;
	const iosClipboardPayload = cleanCode ? `https://paymint.com.ng?referrer=${encodeURIComponent(cleanCode)}&page=invite` : "https://paymint.com.ng?page=invite";
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [platform, setPlatform] = (0, import_react.useState)("desktop");
	const [redirectStatus, setRedirectStatus] = (0, import_react.useState)("idle");
	const copyTextToClipboard = (0, import_react.useCallback)(async (text) => {
		if (typeof window === "undefined") return false;
		if (navigator.clipboard && window.isSecureContext) try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {}
		try {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.style.position = "fixed";
			textarea.style.left = "-9999px";
			textarea.style.top = "-9999px";
			textarea.setAttribute("readonly", "");
			document.body.appendChild(textarea);
			textarea.select();
			textarea.setSelectionRange(0, 99999);
			const success = document.execCommand("copy");
			document.body.removeChild(textarea);
			return success;
		} catch {
			return false;
		}
	}, []);
	const handleCopyCode = async () => {
		if (!cleanCode) return;
		if (await copyTextToClipboard(cleanCode)) {
			setCopied(true);
			toast.success(`Referral code ${cleanCode} copied!`);
			setTimeout(() => setCopied(false), 2500);
		} else toast.error("Could not copy to clipboard. Please copy manually.");
	};
	const handleIosRedirect = async () => {
		await copyTextToClipboard(iosClipboardPayload);
		toast.success("Invite linked! Opening App Store...");
		window.location.href = APP_STORE_URL;
	};
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const ua = navigator.userAgent || navigator.vendor || window.opera || "";
		const isIOSDevice = /iPad|iPhone|iPod/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
		if (/android/i.test(ua)) {
			setPlatform("android");
			setRedirectStatus("redirecting");
			const timer = setTimeout(() => {
				window.location.href = playStoreReferrerUrl;
				setRedirectStatus("done");
			}, 700);
			return () => clearTimeout(timer);
		} else if (isIOSDevice) {
			setPlatform("ios");
			setRedirectStatus("redirecting");
			copyTextToClipboard(iosClipboardPayload);
			const timer = setTimeout(() => {
				window.location.href = APP_STORE_URL;
				setRedirectStatus("done");
			}, 1e3);
			return () => clearTimeout(timer);
		} else setPlatform("desktop");
	}, [
		playStoreReferrerUrl,
		iosClipboardPayload,
		copyTextToClipboard
	]);
	if (platform === "android" || platform === "ios") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-16 sm:py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand/10 text-brand shadow-inner",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-10 w-10 animate-bounce" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PayMint Mobile Invitation" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold text-foreground sm:text-4xl",
				children: platform === "android" ? "Opening Google Play Store..." : "Opening Apple App Store..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto",
				children: cleanCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Your invite code ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground font-mono bg-secondary/80 px-2 py-0.5 rounded",
						children: cleanCode
					}),
					" is attached and will be automatically applied when you open PayMint."
				] }) : "Connecting you to the official PayMint app on your device store."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col items-center gap-3",
				children: [platform === "android" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: playStoreReferrerUrl,
					className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-deep hover:scale-[1.02] active:scale-[0.98] w-full max-w-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download on Google Play" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleIosRedirect,
					className: "inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-deep hover:scale-[1.02] active:scale-[0.98] w-full max-w-xs cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download on App Store" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-2",
					children: "Tap the button above if you were not redirected automatically."
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Exclusive Referral Invite" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
						children: ["You've been invited to join ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "PayMint"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base sm:text-lg text-muted-foreground",
						children: "Fund your wallet, buy airtime, cheap data, utility bills, and trade crypto at industry-best rates with instant Naira settlements."
					})
				]
			}),
			cleanCode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 mx-auto max-w-md rounded-3xl border-2 border-brand/20 bg-gradient-to-b from-brand/5 to-transparent p-6 text-center shadow-lg shadow-brand/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Your Invitation Code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-3xl font-extrabold tracking-wider text-brand",
							children: cleanCode
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCopyCode,
							className: "inline-flex items-center gap-1.5 rounded-xl border border-input bg-white px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-secondary active:scale-95 shadow-sm",
							title: "Copy referral code",
							children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-green-600 font-semibold",
								children: "Copied"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })] })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "This code will be automatically detected when you install PayMint through the mobile download buttons below."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold text-foreground",
						children: "Get the PayMint Mobile App"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Open on your phone to claim your invite automatically:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: playStoreReferrerUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-white transition hover:opacity-90 shadow-md",
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleIosRedirect,
								className: "group inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-white transition hover:opacity-90 shadow-md cursor-pointer",
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
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: cleanCode ? `${WEB_APP_URL}?ref=${cleanCode}` : WEB_APP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group inline-flex items-center gap-3 rounded-2xl border-2 border-ink/10 bg-white px-6 py-3.5 text-ink transition hover:border-brand hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-7 w-7 place-items-center rounded-lg bg-brand-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 text-brand-deep" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-left leading-tight",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground",
										children: "Continue on"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-lg font-semibold",
										children: "Web App"
									})]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 border-t border-border pt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-center font-display text-xl font-bold text-foreground mb-8",
					children: "How to Claim Your Referral Reward"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-sm mb-3",
									children: "1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground text-sm",
									children: "Download App"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: "Install the official PayMint app for Android or iOS."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-sm mb-3",
									children: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground text-sm",
									children: "Auto-Applied Code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: "Open the app — your referral code is captured automatically."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-sm mb-3",
									children: "3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground text-sm",
									children: "Trade & Enjoy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: "Fund your wallet, buy bills, or complete trades with zero hidden fees."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex items-center justify-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified official PayMint referral link • paymint.com.ng" })]
			})
		]
	});
}
//#endregion
export { InviteHandler as t };
