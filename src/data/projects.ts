import type { Project } from "@/types";
import missionReportingPreview from "@/assets/mission-reporting-preview.png";
import uxResearchPreview from "@/assets/ux-research-preview.avif";
import kesselRunLeadershipVisit from "@/assets/kessel-run-leadership-visit.jpg";
import designSystemPreview from "@/assets/design-system-preview.avif";
import dataDashboardPreview from "@/assets/dashboard-system-overview.png";

export const projects: Project[] = [
  {
    title: "UX Leadership",
    subtitle: "UX Manager + Leader",
    description: "Embedding design into mission-critical USAF software development, shifting from waterfall delivery to a modern, user-centered approach.",
    role: "Portfolio Design Lead",
    timeline: "2021 - Present",
    image: kesselRunLeadershipVisit,
    link: "/case-study/kessel-run",
    isPublic: true,
  },
  {
    title: "Portfolio Design System",
    subtitle: "Design Systems + Component Libraries",
    description: "Scaled a design system across five operational missions, reducing inconsistency and giving product teams a shared foundation to build from.",
    role: "UX Manager + Product Designer",
    timeline: "2020 - 2023",
    image: designSystemPreview,
    link: "/case-study/design-system",
    isPublic: true,
  },
  {
    title: "USAF Mission Reporting",
    subtitle: "Product Design + Integration",
    description: "Replacing manual calculations and fragmented data entry with a single, accessible source of truth for USAF mission reporting.",
    role: "UX Manager + Product Designer",
    timeline: "2018 - 2023",
    image: missionReportingPreview,
    link: "/case-study/mission-reporting",
    isPublic: true,
  },
  {
    title: "UX Research Initiatives",
    subtitle: "User Research + Synthesis",
    description: "Establishing research practices from the ground up across a suite of products, giving teams the tools to validate decisions before they ship.",
    role: "UX Manager",
    timeline: "2021 - 2024",
    image: uxResearchPreview,
    link: "/case-study/warfighter-research",
    isPublic: true,
  },
  {
    title: "Operational Data Dashboard",
    subtitle: "Web Dashboards + Data Visualization",
    description: "Giving operators a single place to monitor critical data flows and system health. Reducing cognitive load in high-stakes environments.",
    role: "UX Manager + Product Designer",
    timeline: "2019 - 2021",
    image: dataDashboardPreview,
    link: "/case-study/operational-dashboard",
    isPublic: true,
  },
];
