import { 
  Lightbulb, 
  Users, 
  Palette, 
  Workflow, 
  Code, 
  MessageSquare 
} from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    icon: Lightbulb,
    title: "Facilitation + Human-Centered Design",
    description: "Leading design studios, workshops, and user research to solve complex problems with empathy.",
  },
  {
    icon: Palette,
    title: "Design Systems + DesignOps",
    description: "Building scalable design systems and operational frameworks for consistency and efficiency.",
  },
  {
    icon: Users,
    title: "Team Leadership + Psychological Safety",
    description: "Supervising designers and fostering collaborative environments where teams thrive.",
  },
  {
    icon: Workflow,
    title: "Lean UX + Agile Methodologies",
    description: "Integrating design thinking with agile practices for rapid, iterative delivery.",
  },
  {
    icon: Code,
    title: "Technical Understanding",
    description: "Working knowledge of design tools, version control, and development workflows.",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Communication",
    description: "Collaborating with leadership and users to align design with mission needs.",
  },
];
