import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { t as Route } from "./invite._code-BNpaZS-X.mjs";
import { t as InviteHandler } from "./InviteHandler-VPD0xoLo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invite._code-D3RR2gwP.js
var import_jsx_runtime = require_jsx_runtime();
function InviteCodeRoute() {
	const { code } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InviteHandler, { referralCode: code });
}
//#endregion
export { InviteCodeRoute as component };
