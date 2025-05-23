import type { Rate } from "./types";

const ideaSpace: {
  title: string;
  strategicAlignment: Rate;
  genuinePain: Rate;
  marketViability: Rate;
  impactScale: Rate;
  emergent: Rate;
}[] = [
  {
    title: "Learning Accountability Vacuum",
    strategicAlignment: "high",
    genuinePain: "high",
    marketViability: "mid",
    impactScale: "high",
    emergent: "mid",
  },
  {
    title: "Onboarding Disorientation",
    strategicAlignment: "high",
    genuinePain: "high",
    marketViability: "mid",
    impactScale: "mid",
    emergent: "low",
  },
  {
    title: "24/7 Burnout Loop",
    strategicAlignment: "mid",
    genuinePain: "high",
    marketViability: "mid",
    impactScale: "high",
    emergent: "high",
  },
  {
    title: "Neighborhood Loneliness",
    strategicAlignment: "mid",
    genuinePain: "high",
    marketViability: "low",
    impactScale: "high",
    emergent: "mid",
  },
  {
    title: "Social Disconnection",
    strategicAlignment: "mid",
    genuinePain: "high",
    marketViability: "mid",
    impactScale: "high",
    emergent: "mid",
  },
];

export default ideaSpace;
