import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invite.index-CvIeP2pn.js
var $$splitComponentImporter = () => import("./invite.index-De8bTeJ1.mjs");
var inviteSearchSchema = objectType({
	code: stringType().optional(),
	referrer: stringType().optional(),
	ref: stringType().optional()
});
var Route = createFileRoute("/invite/")({
	validateSearch: inviteSearchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [
		{ title: "Join PayMint — Referral Invitation" },
		{
			name: "description",
			content: "Join PayMint to trade crypto, sell gift cards, and pay utility bills in Nigeria with zero fees."
		},
		{
			property: "og:title",
			content: "Join PayMint — Referral Invitation"
		},
		{
			property: "og:description",
			content: "Download the PayMint mobile app and claim your referral bonus."
		}
	] })
});
//#endregion
export { Route as t };
