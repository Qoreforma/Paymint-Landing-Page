import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invite._code-0eYXuLJx.js
var $$splitComponentImporter = () => import("./invite._code-CXiyhzLP.mjs");
var Route = createFileRoute("/invite/$code")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => ({ meta: [
		{ title: `Join PayMint — Referral Invite (${params.code})` },
		{
			name: "description",
			content: `You've been invited to PayMint with referral code ${params.code}. Trade crypto, sell gift cards, and pay utility bills in Nigeria with zero fees.`
		},
		{
			property: "og:title",
			content: `Join PayMint with referral code ${params.code}`
		},
		{
			property: "og:description",
			content: `Download the PayMint mobile app and claim your referral bonus with code ${params.code}.`
		}
	] })
});
//#endregion
export { Route as t };
