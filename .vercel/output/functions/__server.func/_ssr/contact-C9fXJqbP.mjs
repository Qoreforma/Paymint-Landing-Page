import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime, n as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { C as CircleQuestionMark, O as ArrowRight, S as Clock, T as CircleAlert, _ as LoaderCircle, c as Shield, d as Send, f as MessageSquare, h as Mail, o as Sparkles, w as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C9fXJqbP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var API_BASE_URL = "https://paymint.qoreformasolutionlimited.com.ng/api/v1";
var FAQ_ITEMS = [
	{
		q: "How fast do wallet deposits reflect?",
		a: "Bank transfers to your dedicated virtual account reflect instantly within 1 to 5 seconds."
	},
	{
		q: "What should I do if a bill payment is pending?",
		a: "Most bill payments process in real-time. If network delays occur with a provider, our automated reconciliation system verifies and updates your transaction within minutes."
	},
	{
		q: "How can I partner or integrate with PayMint?",
		a: "Send us a message using this form with the 'Partnership & Business' topic, and our integrations team will get back to you."
	}
];
function ContactPage() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: "General Inquiry",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage(null);
		const trimmedName = formData.name.trim();
		const trimmedEmail = formData.email.trim();
		const trimmedMessage = formData.message.trim();
		if (!trimmedName) {
			setErrorMessage("Please enter your full name.");
			toast.error("Please enter your full name");
			return;
		}
		if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
			setErrorMessage("Please provide a valid email address.");
			toast.error("Please provide a valid email address");
			return;
		}
		if (!trimmedMessage || trimmedMessage.length < 10) {
			setErrorMessage("Message must be at least 10 characters long.");
			toast.error("Please enter a detailed message (at least 10 characters)");
			return;
		}
		setIsSubmitting(true);
		try {
			const fullMessage = formData.subject && formData.subject !== "General Inquiry" ? `[Subject: ${formData.subject}]\n\n${trimmedMessage}` : trimmedMessage;
			const response = await fetch(`${API_BASE_URL}/reference/contact-form`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: trimmedName,
					email: trimmedEmail,
					message: fullMessage
				})
			});
			const data = await response.json().catch(() => ({}));
			if (!response.ok) throw new Error(data?.message || data?.error || "Failed to submit message. Please try again.");
			setIsSuccess(true);
			toast.success("Message sent successfully! Our team will get back to you soon.");
			setFormData({
				name: "",
				email: "",
				subject: "General Inquiry",
				message: ""
			});
		} catch (err) {
			const errorText = err?.message || "An unexpected error occurred. Please try again later.";
			setErrorMessage(errorText);
			toast.error(errorText);
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-brand/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 top-80 h-96 w-96 rounded-full bg-brand-soft/50 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-deep shadow-sm backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "We are here to help" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
							children: ["Get in touch with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "PayMint"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-muted-foreground sm:text-lg",
							children: "Have a question about your wallet, a transaction, or looking to partner with us? Send us a message and our team will get back to you right away."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8 lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-xl font-bold text-foreground",
										children: "Contact Channels"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Reach out directly through any of our official channels."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 space-y-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "mailto:paymint485@gmail.com",
												className: "group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition hover:border-brand/50 hover:bg-brand-soft/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition group-hover:scale-105",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
														children: "Send Message"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-medium text-foreground group-hover:text-brand-deep",
														children: "Email Support"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted-foreground",
														children: "Typically replies in under 1 hour"
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://wa.me/2349000000000?text=Hello%20PayMint%20Support",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition hover:border-brand/50 hover:bg-brand-soft/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition group-hover:scale-105",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
														children: "WhatsApp Chat"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-medium text-foreground group-hover:text-brand-deep",
														children: "Instant Live Assistant"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted-foreground",
														children: "Pay bills and get help 24/7"
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
														children: "Availability"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-medium text-foreground",
														children: "24/7 Automated & Human Support"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted-foreground",
														children: "Always active, 365 days a year"
													})
												] })]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border/80 bg-secondary/30 p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-display text-lg font-bold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-5 w-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Frequently Asked Questions" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 space-y-4 text-sm",
										children: FAQ_ITEMS.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/50 bg-background/80 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-foreground",
												children: faq.q
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
												children: faq.a
											})]
										}, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center justify-between pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: "Need more details?"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/security",
											className: "inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learn about our security" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-2xl border border-border/60 bg-white/60 px-4 py-3 text-xs text-muted-foreground backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your privacy and data are encrypted with banking-grade 256-bit SSL security." })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative rounded-3xl border border-border/80 bg-card p-6 shadow-xl shadow-brand/5 backdrop-blur-lg sm:p-10",
							children: isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-12 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-2xl font-bold text-foreground",
										children: "Message Sent Successfully!"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-3 max-w-md text-sm text-muted-foreground",
										children: "Thank you for reaching out. Our support administrators have received your message and will reply to your email address shortly."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											onClick: () => setIsSuccess(false),
											variant: "outline",
											className: "rounded-full px-6",
											children: "Send another message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												className: "rounded-full bg-brand px-6 text-white hover:bg-brand-deep",
												children: "Back to Home"
											})
										})]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl font-bold text-foreground",
										children: "Send a Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: "Fill out the form below and an administrator will respond promptly."
									})] }),
									errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-6 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "name",
												className: "text-sm font-semibold",
												children: ["Your Full Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "name",
												type: "text",
												placeholder: "e.g. John doe",
												value: formData.name,
												onChange: (e) => setFormData({
													...formData,
													name: e.target.value
												}),
												required: true,
												disabled: isSubmitting,
												className: "h-11 rounded-xl border-border bg-background/80 px-3.5 focus-visible:ring-brand"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "email",
												className: "text-sm font-semibold",
												children: ["Email Address ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												id: "email",
												type: "email",
												placeholder: "e.g. you@example.com",
												value: formData.email,
												onChange: (e) => setFormData({
													...formData,
													email: e.target.value
												}),
												required: true,
												disabled: isSubmitting,
												className: "h-11 rounded-xl border-border bg-background/80 px-3.5 focus-visible:ring-brand"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "subject",
											className: "text-sm font-semibold",
											children: "Topic / Category"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "subject",
											value: formData.subject,
											onChange: (e) => setFormData({
												...formData,
												subject: e.target.value
											}),
											disabled: isSubmitting,
											className: "flex h-11 w-full rounded-xl border border-border bg-background/80 px-3.5 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "General Inquiry",
													children: "General Inquiry"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Wallet & Virtual Account Support",
													children: "Wallet & Virtual Account Support"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Bill Payment / Transaction Issue",
													children: "Bill Payment / Transaction Issue"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Partnership & Business Integration",
													children: "Partnership & Business Integration"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Feedback & Suggestions",
													children: "Feedback & Suggestions"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
												htmlFor: "message",
												className: "text-sm font-semibold",
												children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-destructive",
													children: "*"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground",
												children: [formData.message.length, " characters"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											id: "message",
											rows: 5,
											placeholder: "Please describe how we can help you with as much detail as possible...",
											value: formData.message,
											onChange: (e) => setFormData({
												...formData,
												message: e.target.value
											}),
											required: true,
											disabled: isSubmitting,
											className: "min-h-[140px] rounded-xl border-border bg-background/80 p-3.5 text-sm focus-visible:ring-brand"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										disabled: isSubmitting,
										className: "h-12 w-full gap-2 rounded-xl bg-ink font-semibold text-white shadow-lg transition hover:bg-brand-deep disabled:opacity-60",
										children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sending Message..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submit Message" })] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-center text-xs text-muted-foreground",
										children: [
											"By submitting, you agree to our",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/terms",
												className: "underline hover:text-ink",
												children: "Terms of Service"
											}),
											" ",
											"and",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/privacy",
												className: "underline hover:text-ink",
												children: "Privacy Policy"
											}),
											"."
										]
									})
								]
							})
						})
					})]
				})]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
