import { createFileRoute } from "@tanstack/react-router";
import { InviteHandler } from "@/components/invite/InviteHandler";

export const Route = createFileRoute("/invite/$code")({
  component: InviteCodeRoute,
  head: ({ params }) => ({
    meta: [
      { title: `Join PayMint — Referral Invite (${params.code})` },
      {
        name: "description",
        content: `You've been invited to PayMint with referral code ${params.code}. Trade crypto, sell gift cards, and pay utility bills in Nigeria with zero fees.`,
      },
      { property: "og:title", content: `Join PayMint with referral code ${params.code}` },
      {
        property: "og:description",
        content: `Download the PayMint mobile app and claim your referral bonus with code ${params.code}.`,
      },
    ],
  }),
});

function InviteCodeRoute() {
  const { code } = Route.useParams();
  return <InviteHandler referralCode={code} />;
}
