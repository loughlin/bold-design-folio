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
    description: "Built a design culture inside one of the Air Force's most demanding software environments — shifting teams from waterfall delivery to a modern, research-driven approach.",
    role: "Portfolio Design Lead",
    timeline: "2021 - Present",
    image: kesselRunLeadershipVisit,
    link: "/case-study/kessel-run",
    isPublic: true,
  },
  {
    title: "Portfolio Design System",
    subtitle: "Design Systems + Component Libraries",
    description: "Created a shared design system across five operational missions, cutting redundant work and giving product teams a common foundation to build from.",
    role: "UX Manager + Product Designer",
    timeline: "2020 - 2023",
    image: designSystemPreview,
    link: "/case-study/design-system",
    isPublic: true,
  },
  {
    title: "USAF Mission Reporting",
    subtitle: "Product Design + Integration",
    description: "Replaced manual calculations and fragmented data entry with a single source of truth for Air Force mission reporting.",
    role: "UX Manager + Product Designer",
    timeline: "2018 - 2023",
    image: missionReportingPreview,
    link: "/case-study/mission-reporting",
    isPublic: true,
  },
  {
    title: "UX Research Initiatives",
    subtitle: "User Research + Synthesis",
    description: "Built a research practice from scratch across a portfolio of products, giving teams the evidence they needed to make better decisions before shipping.",
    role: "UX Manager",
    timeline: "2021 - 2024",
    image: uxResearchPreview,
    link: "/case-study/warfighter-research",
    isPublic: true,
  },
  {
    title: "Operational Data Dashboard",
    subtitle: "Web Dashboards + Data Visualization",
    description: "Redesigned a monitoring dashboard so operators could actually understand system health — not just see that systems were running.",
    role: "UX Manager + Product Designer",
    timeline: "2019 - 2021",
    image: dataDashboardPreview,
    link: "/case-study/operational-dashboard",
    isPublic: true,
  },
];
