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
    description: "I run workshops and research sessions that get teams closer to the people they're building for. The goal is always better decisions, not more meetings.",
  },
  {
    icon: Palette,
    title: "Design Systems + DesignOps",
    description: "I build shared foundations — component libraries, tokens, documentation — so teams stop reinventing the wheel and start solving harder problems.",
  },
  {
    icon: Users,
    title: "Team Leadership + Psychological Safety",
    description: "I manage designers, grow careers, and create environments where people feel safe sharing unfinished work and honest feedback.",
  },
  {
    icon: Workflow,
    title: "Lean UX + Agile Methodologies",
    description: "I pair design thinking with agile delivery so teams can test ideas before committing to them.",
  },
  {
    icon: Code,
    title: "Technical Understanding",
    description: "I know enough about code, version control, and dev workflows to have real conversations with engineers and spec work they can actually build.",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Communication",
    description: "I translate between users, leadership, and product teams. Everyone needs to be solving the same problem — that doesn't happen by accident.",
  },
];
