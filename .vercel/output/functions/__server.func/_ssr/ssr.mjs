//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-Os7CnDDe.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var PLAY_STORE_BASE = "https://play.google.com/store/apps/details?id=com.paymint.app";
var APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";
function buildPlayStoreUrl(searchParams) {
	const explicitReferrer = searchParams.get("referrer");
	if (explicitReferrer) return `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(explicitReferrer)}`;
	const refCode = searchParams.get("ref") || searchParams.get("code");
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
		const val = searchParams.get(key);
		if (val) utmParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
	}
	if (refCode) utmParts.push(`referrer_code=${encodeURIComponent(refCode.trim().toUpperCase())}`);
	if (utmParts.length > 0) {
		const referrerValue = utmParts.join("&");
		return `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(referrerValue)}`;
	}
	return PLAY_STORE_BASE;
}
function handleSmartDownload(request) {
	const url = new URL(request.url);
	if ((url.pathname.replace(/\/+$/, "") || "/") !== "/download") return null;
	const storeParam = url.searchParams.get("store");
	if (!(storeParam === "1" || storeParam === "true" || url.searchParams.get("auto") === "1" || url.searchParams.get("redirect") === "1")) return null;
	const ua = (request.headers.get("user-agent") || "").toLowerCase();
	if (ua.includes("android")) return new Response(null, {
		status: 302,
		headers: {
			Location: buildPlayStoreUrl(url.searchParams),
			"Cache-Control": "no-store, no-cache, must-revalidate"
		}
	});
	if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) return new Response(null, {
		status: 302,
		headers: {
			Location: APP_STORE_URL,
			"Cache-Control": "no-store, no-cache, must-revalidate"
		}
	});
	const cleanUrl = new URL(request.url);
	cleanUrl.searchParams.delete("store");
	cleanUrl.searchParams.delete("auto");
	cleanUrl.searchParams.delete("redirect");
	return new Response(null, {
		status: 302,
		headers: {
			Location: cleanUrl.toString(),
			"Cache-Control": "no-store, no-cache, must-revalidate"
		}
	});
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const redirectResponse = handleSmartDownload(request);
		if (redirectResponse) return redirectResponse;
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
