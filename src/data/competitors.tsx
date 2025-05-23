import type { Rate } from "./types";

export interface Competitor {
  name: string;
  notes?: string;
}

export interface Force {
  name: string;
  description: string;
  confidence: Rate; // our assessment of how strongly this force impacts the market
}

export interface CustomerProfile {
  jobs: string[];
  pains: string[];
  gains: string[];
}

export type SWOTCategory =
  | "Strengths"
  | "Weaknesses"
  | "Opportunities"
  | "Threats";

export interface SWOTItem {
  title: string;
  description: string;
}

export interface SWOTData {
  category: SWOTCategory;
  items: SWOTItem[];
}

export interface ValueMap {
  painRelievers: string[];
  gainCreators: string[];
}

export interface ValuePropCanvasData {
  title: string; // Problem or solution name
  customerProfile: CustomerProfile;
  valueMap: ValueMap;
}

export interface MarketGap {
  description: string;
  impact: Rate;
  effort: Rate;
}

export const competitors: Competitor[] = [
  { name: "Coursera for Business", notes: "enterprise cohorts & peer forums" },
  { name: "Udemy Business", notes: "on-demand library + reminders" },
  { name: "LinkedIn Learning", notes: "personalized paths & tracking" },
  { name: "Pluralsight", notes: "skill assessments & mentor features" },
  { name: "Skillsoft", notes: "blended social learning & nudges" },
  { name: "Degreed", notes: "LXP with community discussions" },
  { name: "Docebo", notes: "AI recommendations & gamification" },
  { name: "360Learning", notes: "peer review & cohort accountability" },
];

export const porterForces: Force[] = [
  {
    name: "Supplier Power",
    description:
      "Content creators and platform vendors can demand higher fees or exclusivity. In self-paced learning, premium instructors or enterprise LMS integrations wield negotiation leverage over pricing and feature bundling.",
    confidence: "mid",
  },
  {
    name: "Buyer Power",
    description:
      "Corporate L&D teams and individual learners can switch platforms easily based on price or features. Large enterprises negotiate volume discounts, while savvy consumers compare free vs. paid options before committing.",
    confidence: "high",
  },
  {
    name: "Competitive Rivalry",
    description:
      "Major players (Coursera, Udemy, LinkedIn Learning) fiercely compete on catalog size, accreditation, community features, and price. Differentiation is subtle—often around social accountability and completion rates.",
    confidence: "high",
  },
  {
    name: "Threat of Substitutes",
    description:
      "Live workshops, cohort-based bootcamps, peer-led study groups, and DIY study routines offer non-platform alternatives. Free open-source content and YouTube tutorials also undercut paid self-paced courses.",
    confidence: "mid",
  },
  {
    name: "Threat of New Entrants",
    description:
      "Launching a basic course portal is easy, but building network effects (peer groups, mentorship) and securing high-quality content partnerships creates significant barriers for newcomers.",
    confidence: "low",
  },
];

export const swotData: SWOTData[] = [
  {
    category: "Strengths",
    items: [
      {
        title: "Brand & Scale",
        description:
          "Coursera, Udemy, LinkedIn Learning have massive catalogs and global reach.",
      },
      {
        title: "Feature Diversity",
        description:
          "Pluralsight & Docebo offer assessments, AI recommendations and gamification.",
      },
      {
        title: "Enterprise Focus",
        description:
          "Coursera for Business & Udemy Business provide robust cohort management and analytics.",
      },
      {
        title: "Community Elements",
        description:
          "Degreed & 360Learning embed social learning and peer review for engagement.",
      },
    ],
  },
  {
    category: "Weaknesses",
    items: [
      {
        title: "Superficial Accountability",
        description:
          "Reminders & forums often lack structured follow-through to boost completion.",
      },
      {
        title: "Fragmented UX",
        description:
          "Switching between content, peers, and progress dashboards can feel disjointed.",
      },
      {
        title: "Costly Licensing",
        description:
          "Enterprise plans can be expensive, limiting adoption in smaller organizations.",
      },
      {
        title: "Generic Content",
        description:
          "Broad catalogs sometimes sacrifice depth or customization for specific industries.",
      },
    ],
  },
  {
    category: "Opportunities",
    items: [
      {
        title: "Niche Accountability",
        description: "Deep mentorship, progress streaks or micro-cohorts.",
      },
      {
        title: "AI Personalization",
        description:
          "Smarter nudges and adaptive learning paths based on real-time engagement.",
      },
      {
        title: "Integrations",
        description:
          "Embed accountability into existing L&D stacks (HRIS, Slack, calendar tools).",
      },
      {
        title: "Micro-Certifications",
        description:
          "Offer badges or credentials tied to cohort participation and completion.",
      },
    ],
  },
  {
    category: "Threats",
    items: [
      {
        title: "Free Alternatives",
        description:
          "YouTube, open-source courses, and peer study groups undercut paid platforms.",
      },
      {
        title: "New Entrants",
        description:
          "Lightweight, niche apps can rapidly attract learners with hyper-focused features.",
      },
      {
        title: "Platform Fatigue",
        description:
          "Users overwhelmed by multiple subscriptions may drop rarely used services.",
      },
      {
        title: "Regulatory Shifts",
        description:
          "Data privacy or accreditation changes could restrict social learning or data sharing.",
      },
    ],
  },
];

export const valuePropCanvas: ValuePropCanvasData = {
  title: "Learning Accountability Vacuum",
  customerProfile: {
    jobs: [
      "Complete self-paced courses",
      "Stay motivated over time",
      "Maintain up-to-date skills",
    ],
    pains: [
      ">90% dropout rates in self-paced learning",
      "Feelings of isolation and lack of feedback",
      "No structured reminders or community support",
    ],
    gains: [
      "Visible progress tracking",
      "Social encouragement & peer support",
      "Timely feedback loops",
      "Sense of achievement",
    ],
  },
  valueMap: {
    painRelievers: [
      "Peer leaderboards & micro-mentorship pairings",
      "Scheduled checkpoint workshops",
      "AI-driven engagement nudges",
    ],
    gainCreators: [
      "Real-time progress dashboards",
      "Streak badges & personalized milestones",
      "Social proof notifications",
    ],
  },
};

export const marketGaps: MarketGap[] = [
  {
    description:
      "Lack of real-time peer accountability features (leaderboards, micro-mentorship)",
    impact: "high",
    effort: "mid",
  },
  {
    description:
      "No integrated scheduled checkpoint workshops for group motivation",
    impact: "mid",
    effort: "mid",
  },
  {
    description:
      "Absence of AI-driven engagement nudges when user activity drops",
    impact: "high",
    effort: "mid",
  },
  {
    description:
      "Missing personalized progress milestones with gamified badges",
    impact: "mid",
    effort: "low",
  },
  {
    description:
      "Insufficient social proof notifications for peer accomplishments",
    impact: "mid",
    effort: "low",
  },
];
