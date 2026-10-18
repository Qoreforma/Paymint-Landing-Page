import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/download-BgcV_wsH.js
var $$splitComponentImporter = () => import("./download-BKyuS-E3.mjs");
var Route = createFileRoute("/download")({
	validateSearch: (search) => ({
		store: search.store ? String(search.store) : void 0,
		auto: search.auto ? String(search.auto) : void 0,
		utm_source: search.utm_source ? String(search.utm_source) : void 0,
		utm_medium: search.utm_medium ? String(search.utm_medium) : void 0,
		utm_campaign: search.utm_campaign ? String(search.utm_campaign) : void 0,
		utm_content: search.utm_content ? String(search.utm_content) : void 0,
		utm_term: search.utm_term ? String(search.utm_term) : void 0,
		ref: search.ref ? String(search.ref) : void 0,
		code: search.code ? String(search.code) : void 0,
		src: search.src ? String(search.src) : void 0
	}),
	head: () => ({
		meta: [
			{ title: "Download PayMint App — Fast Payments, Cheap Data & Virtual Accounts" },
			{
				name: "description",
				content: "Download the official PayMint app for Android and iOS. Fund your wallet instantly, buy discounted data bundles, pay electricity bills, and trade crypto in Nigeria."
			},
			{
				property: "og:title",
				content: "Download PayMint — iOS & Android Mobile App"
			},
			{
				property: "og:description",
				content: "Get the PayMint app on Google Play or Apple App Store. Instant virtual account funding, cheap data bundles, and zero fee transfers."
			},
			{
				property: "og:url",
				content: "https://paymint.com.ng/download"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "https://paymint.com.ng/logo.png"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Download PayMint App"
			},
			{
				name: "twitter:description",
				content: "Smart wallet for instant airtime, cheap data, utility bills, and travel eSIMs in Nigeria."
			}
		],
		links: [{
			rel: "canonical",
			href: "https://paymint.com.ng/download"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
