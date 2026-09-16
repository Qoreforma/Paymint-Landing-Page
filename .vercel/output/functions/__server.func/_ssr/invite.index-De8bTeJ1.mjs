import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as InviteHandler } from "./InviteHandler-CzsGYPZN.mjs";
import { t as Route } from "./invite.index-CvIeP2pn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invite.index-De8bTeJ1.js
var import_jsx_runtime = require_jsx_runtime();
function InviteIndexRoute() {
	const search = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InviteHandler, { referralCode: search.code || search.referrer || search.ref || "" });
}
//#endregion
export { InviteIndexRoute as component };
