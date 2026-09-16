import { createFileRoute } from "@tanstack/react-router";
import { InviteHandler } from "@/components/invite/InviteHandler";
import { z } from "zod";

const inviteSearchSchema = z.object({
  code: z.string().optional(),
  referrer: z.string().optional(),
  ref: z.string().optional(),
});

export const Route = createFileRoute("/invite/")({
  validateSearch: inviteSearchSchema,
  component: InviteIndexRoute,
  head: () => ({
    meta: [
      { title: "Join PayMint — Referral Invitation" },
      {
        name: "description",
        content: "Join PayMint to trade crypto, sell gift cards, and pay utility bills in Nigeria with zero fees.",
      },
      { property: "og:title", content: "Join PayMint — Referral Invitation" },
      {
        property: "og:description",
        content: "Download the PayMint mobile app and claim your referral bonus.",
      },
    ],
  }),
});

function InviteIndexRoute() {
  const search = Route.useSearch();
  const code = search.code || search.referrer || search.ref || "";
  return <InviteHandler referralCode={code} />;
}
