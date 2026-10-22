export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://paymint.qoreformasolutionlimited.com.ng/api/v1";

export interface WheelSegmentSummary {
  label: string;
  rewardType: "airtime" | "balance";
  rewardValue: number;
  displayColor: string;
  oddsPercentage: number;
}

export interface QualificationRuleSummary {
  name: string;
  type: string;
  description?: string;
  params?: Record<string, any>;
}

export interface PublicCampaignData {
  isActive: boolean;
  message?: string;
  campaign: {
    tierId: string;
    tierName: string;
    description: string;
    referralThreshold: number;
    repeatMode: string;
    maxRepeatCount: number | null;
    perUserCap: number | null;
    campaignStart: string | null;
    campaignEnd: string | null;
    displayCountdown: boolean;
    displaySpinsLeft: boolean;
    poolSize: number;
    totalSpinsLeft: number;
    totalSpinsUsed: number;
    isPoolExhausted: boolean;
    isUpcoming: boolean;
    isExpired: boolean;
    qualificationRule: QualificationRuleSummary | null;
    prizeSegments: WheelSegmentSummary[];
  } | null;
}

export interface FaqItem {
  _id?: string;
  id?: string;
  question: string;
  answer: string;
  slug?: string;
  category?: string;
  faqCategoryId?: string | { name?: string; slug?: string };
}

// Fallback baseline prize segments matching the live MongoDB configuration (poolSize: 135)
export const FALLBACK_PRIZE_SEGMENTS: WheelSegmentSummary[] = [
  { label: "₦100 Cash", rewardType: "balance", rewardValue: 100, displayColor: "#6366f1", oddsPercentage: 18.52 },
  { label: "₦100 Airtime", rewardType: "airtime", rewardValue: 100, displayColor: "#ec4899", oddsPercentage: 29.63 },
  { label: "₦200 Cash", rewardType: "balance", rewardValue: 200, displayColor: "#06bcd4", oddsPercentage: 14.81 },
  { label: "₦200 Airtime", rewardType: "airtime", rewardValue: 200, displayColor: "#8B5CF6", oddsPercentage: 14.81 },
  { label: "₦300 Bonus", rewardType: "balance", rewardValue: 300, displayColor: "#10b981", oddsPercentage: 11.11 },
  { label: "₦500 Bonus", rewardType: "balance", rewardValue: 500, displayColor: "#3b82fc", oddsPercentage: 7.41 },
  { label: "₦1,000 Jackpot", rewardType: "balance", rewardValue: 1000, displayColor: "#EF4444", oddsPercentage: 3.7 },
];

export const FALLBACK_CAMPAIGN: PublicCampaignData = {
  isActive: true,
  campaign: {
    tierId: "6ad8c0c3d0429067579ef5c9",
    tierName: "Round 2 Spin & Win Sprint",
    description: "Invite 5 friends who perform at least ₦100 BILL PAYMENT transaction to earn 1 spin!",
    referralThreshold: 5,
    repeatMode: "one-time",
    maxRepeatCount: null,
    perUserCap: 1,
    campaignStart: "2026-10-21T15:00:00.000Z",
    campaignEnd: null,
    displayCountdown: false,
    displaySpinsLeft: true,
    poolSize: 135,
    totalSpinsLeft: 135,
    totalSpinsUsed: 0,
    isPoolExhausted: false,
    isUpcoming: false,
    isExpired: false,
    qualificationRule: {
      name: "High-End Transaction Rule",
      type: "referee-min-transaction-value",
      description: "Referee must sign up, verify email, and perform at least one transaction of ₦100 BILL PAYMENT or more.",
      params: { minTransactionValue: 100 },
    },
    prizeSegments: FALLBACK_PRIZE_SEGMENTS,
  },
};

export async function fetchPublicCampaign(): Promise<PublicCampaignData> {
  try {
    const res = await fetch(`${API_BASE_URL}/rewards/public-campaign`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`[CampaignAPI] Endpoint responded with status ${res.status}. Using fallback config.`);
      return FALLBACK_CAMPAIGN;
    }

    const json = await res.json();
    if (json && json.status === "success" && json.data) {
      return json.data as PublicCampaignData;
    }

    return FALLBACK_CAMPAIGN;
  } catch (error) {
    console.warn("[CampaignAPI] Network error fetching live campaign. Using fallback.", error);
    return FALLBACK_CAMPAIGN;
  }
}

export async function fetchFaqs(): Promise<FaqItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/faqs?limit=50`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`[FaqAPI] Endpoint responded with status ${res.status}.`);
      return [];
    }

    const json = await res.json();
    if (json && json.status === "success" && Array.isArray(json.data)) {
      return json.data as FaqItem[];
    }

    return [];
  } catch (error) {
    console.warn("[FaqAPI] Network error fetching FAQs.", error);
    return [];
  }
}
