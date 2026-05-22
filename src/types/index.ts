// Project/Case Study types
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  timeline: string;
  image: string;
  link: string;
  isPublic: boolean;
  outcome?: string; // short metric shown on the card — e.g. "40% faster delivery · 85% retention"
}

// Experience types
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  icon: string;
}

// Skill category types
export interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Testimonial types
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

// Case study layout types
export interface CaseStudySection {
  title: string;
  content: string | string[];
}

export interface DesignProcessPhase {
  name: string;
  type: "divergent" | "convergent";
  description: string;
  activities?: string[];
}

export interface HeuristicItem {
  name: string;
  description: string;
  before: number;
  after: number;
}

export interface EngagementMetric {
  value: string;
  label: string;
  description: string;
  percentage?: number;
}
