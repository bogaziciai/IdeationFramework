export interface Persona {
  name: string;
  role: string;
  goals: string[];
  frustrations: string[];
  channels: string[];
}

export interface Segment {
  segment: string;
  fit: number; // 1-5 scale
  intent: number; // 1-5 scale
}

export interface JourneyStep {
  stage: string;
  action: string;
  feeling: string;
}

export interface Journey {
  persona: string;
  steps: JourneyStep[];
}
export interface ICPDataBase {
  industry: string;
  region: string;
  topMetrics: string[];
  mainPain: string;
  focus: ("b2b" | "b2c")[];
}

export interface B2BAttributes {
  /** Only relevant when focus includes "b2b" */
  companySize: string;
  keyRoles: string[];
}

export interface B2CAttributes {
  /** Only relevant when focus includes "b2c" */
  demographic: string[];
  userContext: string; // e.g. “Students, Professionals, Hobbyists…”
}
export type ICPData = ICPDataBase & Partial<B2BAttributes & B2CAttributes>;

export const personas: Persona[] = [
  {
    name: "Laura (L&D Manager)",
    role: "Corporate Training Lead",
    goals: ["Increase completion", "Improve ROI"],
    frustrations: ["Low learner engagement", "Poor feedback loops"],
    channels: ["Email newsletters", "Webinars"],
  },
  {
    name: "Evan (Learner)",
    role: "Individual Course Taker",
    goals: ["Skill acquisition", "Certification"],
    frustrations: ["Isolation", "Lack of accountability"],
    channels: ["Mobile app notifications", "Peer forums"],
  },
];

export const segments: Segment[] = [
  { segment: "Enterprise L&D", fit: 5, intent: 4 },
  { segment: "SMB Training", fit: 3, intent: 3 },
  { segment: "Individual Learners", fit: 2, intent: 2 },
];

export const journeys: Journey[] = [
  {
    persona: "Laura (L&D Manager)",
    steps: [
      {
        stage: "Discover",
        action: "Research solutions",
        feeling: "Frustrated",
      },
      { stage: "Prototype", action: "Pilot dashboard", feeling: "Hopeful" },
      { stage: "Adopt", action: "Roll-out to teams", feeling: "Relieved" },
    ],
  },
  {
    persona: "Evan (Learner)",
    steps: [
      { stage: "Enroll", action: "Sign up course", feeling: "Excited" },
      {
        stage: "Engage",
        action: "Check progress leaderboard",
        feeling: "Motivated",
      },
      {
        stage: "Complete",
        action: "Earn certificate",
        feeling: "Accomplished",
      },
    ],
  },
];

export const icpData: ICPData = {
  industry: "EdTech, Corporate L&D",
  region: "Global, with emphasis on North America & EMEA",
  topMetrics: ["Course completion rate", "Engagement time", "Retention"],
  mainPain: ">90% dropout rates in self-paced learning without peer feedback",
  focus: ["b2b", "b2c"],

  // B2B-specific
  companySize: "Mid-market & Enterprise",
  keyRoles: ["L&D Managers", "Training Coordinators"],

  // B2C-specific
  demographic: ["Students", "Working Professionals", "Lifelong Learners"],
  userContext:
    "Individuals seeking structured accountability and community-driven learning",
};
