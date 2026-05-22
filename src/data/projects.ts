import type { Project } from "@/types";
// outcome: a short impact metric shown on the card — specific, not invented
import missionReportingPreview from "@/assets/mission-reporting-preview.png";
import uxResearchPreview from "@/assets/ux-research-preview.avif";
import kesselRunLeadershipVisit from "@/assets/kessel-run-leadership-visit.jpg";
import designSystemPreview from "@/assets/design-system-preview.avif";
import dataDashboardPreview from "@/assets/dashboard-system-overview.png";

export const projects: Project[] = [
  {
    title: "Leading Design at Kessel Run",
    subtitle: "USAF software delivery",
    description: "Spent several years building design culture inside Kessel Run. Teams were shipping software to active Air Force missions without much design infrastructure. We changed that.",
    role: "Portfolio Design Lead",
    timeline: "2021 - Present",
    image: kesselRunLeadershipVisit,
    link: "/case-study/kessel-run",
    isPublic: true,
    outcome: "40% faster design delivery · 85% designer retention",
  },
  {
    title: "One Design System for Five Missions",
    subtitle: "Design system, five products",
    description: "Built a shared design system used across five Air Force products. Before that, each team was maintaining their own components and drifting apart — slow and expensive.",
    role: "UX Manager + Product Designer",
    timeline: "2020 - 2023",
    image: designSystemPreview,
    link: "/case-study/design-system",
    isPublic: true,
    outcome: "48% fewer design stories · adopted by all 5 product teams",
  },
  {
    title: "Getting the Mission Data Right",
    subtitle: "Mission reporting digitization",
    description: "Replaced a patchwork of spreadsheets and manual entry that operators were using for mission reporting. The data needed to be accurate and fast — neither was true before.",
    role: "UX Manager + Product Designer",
    timeline: "2018 - 2023",
    image: missionReportingPreview,
    link: "/case-study/mission-reporting",
    isPublic: true,
    outcome: "100% of manual calculations automated · 4-month integration",
  },
  {
    title: "Establishing Research from Zero",
    subtitle: "User research practice",
    description: "Stood up a user research practice across a portfolio of Air Force products. Before this, teams were guessing — and finding out they were wrong after they'd already shipped.",
    role: "UX Manager",
    timeline: "2021 - 2024",
    image: uxResearchPreview,
    link: "/case-study/warfighter-research",
    isPublic: true,
    outcome: "65% less rework · research embedded in 4 product teams",
  },
  {
    title: "Command Center: Real-Time Data Flows",
    subtitle: "Monitoring dashboard",
    description: "Redesigned a dashboard used by operators tracking mission-critical systems. The original showed that things were running. This one tells you when something's about to fail.",
    role: "UX Manager + Product Designer",
    timeline: "2019 - 2021",
    image: dataDashboardPreview,
    link: "/case-study/operational-dashboard",
    isPublic: true,
    outcome: "3× faster issue detection · 90% task success rate",
  },
];
