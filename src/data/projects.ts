import type { Project } from "@/types";
import missionReportingPreview from "@/assets/mission-reporting-preview.png";
import uxResearchPreview from "@/assets/ux-research-preview.avif";
import kesselRunLeadershipVisit from "@/assets/kessel-run-leadership-visit.jpg";
import designSystemPreview from "@/assets/design-system-preview.avif";
import dataDashboardPreview from "@/assets/data-dashboard-preview.jpg";

export const projects: Project[] = [
  {
    title: "UX Leadership",
    subtitle: "UX Manager + Leader",
    description: "Advocating for design in mission critical USAF applications, transitioning how the USAF delivers software.",
    role: "Portfolio Design Lead",
    timeline: "2021 - Present",
    image: kesselRunLeadershipVisit,
    link: "/case-study/kessel-run",
    isPublic: true,
  },
  {
    title: "Portfolio Design System",
    subtitle: "Design Systems + Component Libraries",
    description: "Led design system roll out across five operational missions, establishing consistency standards for USAF software applications.",
    role: "UX Manager + Product Designer",
    timeline: "2019 - 2023",
    image: designSystemPreview,
    link: "/case-study/design-system",
    isPublic: true,
  },
  {
    title: "UX Research Initiatives",
    subtitle: "User Research + Synthesis",
    description: "Defined research practices and standards for a software suite of products, enabling teams to validate designs and de-risk decisions.",
    role: "UX Manager",
    timeline: "2021 - 2023",
    image: uxResearchPreview,
    link: "/case-study/warfighter-research",
    isPublic: true,
  },
  {
    title: "Operational Data Dashboard",
    subtitle: "Web Dashboards + Data Visualization",
    description: "Designing a centralized dashboard for operators to monitor mission-critical data flows and system performance across distributed environments.",
    role: "UX Manager + Product Designer",
    timeline: "2019 - 2021",
    image: dataDashboardPreview,
    link: "/case-study/operational-dashboard",
    isPublic: true,
  },
  {
    title: "USAF Mission Reporting",
    subtitle: "Product Design + Integration",
    description: "Eliminating manual calculation and data entry for a uniform and accessible source of truth for USAF mission data.",
    role: "UX Manager + Product Designer",
    timeline: "2019 - 2021",
    image: missionReportingPreview,
    link: "/case-study/marauder",
    isPublic: false,
  },
];
