import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const PLAY_STORE_BASE = "https://play.google.com/store/apps/details?id=com.paymint.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";

function buildPlayStoreUrl(searchParams: URLSearchParams): string {
  // If explicit referrer param is provided:
  const explicitReferrer = searchParams.get("referrer");
  if (explicitReferrer) {
    return `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(explicitReferrer)}`;
  }

  // If referral code is provided via ref or code:
  const refCode = searchParams.get("ref") || searchParams.get("code");

  // Collect UTM and source tracking parameters
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"];
  const utmParts: string[] = [];
  for (const key of utmKeys) {
    const val = searchParams.get(key);
    if (val) {
      utmParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
    }
  }
  if (refCode) {
    utmParts.push(`referrer_code=${encodeURIComponent(refCode.trim().toUpperCase())}`);
  }

  if (utmParts.length > 0) {
    const referrerValue = utmParts.join("&");
    return `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(referrerValue)}`;
  }

  return PLAY_STORE_BASE;
}

function handleSmartDownload(request: Request): Response | null {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/+$/, "") || "/";

  if (pathname !== "/download") {
    return null;
  }

  const storeParam = url.searchParams.get("store");
  const shouldRedirect =
    storeParam === "1" ||
    storeParam === "true" ||
    url.searchParams.get("auto") === "1" ||
    url.searchParams.get("redirect") === "1";

  // Allows /download to still work as a normal landing page
  if (!shouldRedirect) {
    return null;
  }

  const ua = (request.headers.get("user-agent") || "").toLowerCase();

  // Android device detection
  if (ua.includes("android")) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: buildPlayStoreUrl(url.searchParams),
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  }

  // iOS device detection (iPhone, iPad, iPod)
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: APP_STORE_URL,
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  }

  // Desktop / unknown device:
  // Strip store query parameter to avoid looping and redirect to the clean /download landing page
  const cleanUrl = new URL(request.url);
  cleanUrl.searchParams.delete("store");
  cleanUrl.searchParams.delete("auto");
  cleanUrl.searchParams.delete("redirect");

  return new Response(null, {
    status: 302,
    headers: {
      Location: cleanUrl.toString(),
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const redirectResponse = handleSmartDownload(request);
      if (redirectResponse) {
        return redirectResponse;
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
