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
    description: "I run workshops and research sessions to help teams get more specific about who they're building for. Better questions earlier mean fewer rounds of revision later.",
  },
  {
    icon: Palette,
    title: "Design Systems + DesignOps",
    description: "I've built component libraries and shared design languages across multi-product orgs. The goal is getting teams to a point where they're solving new problems, not repeating old ones.",
  },
  {
    icon: Users,
    title: "Team Leadership + Psychological Safety",
    description: "I manage designers and care a lot about the conditions that let people do good work. That mostly means building enough trust that half-finished ideas get shared before they're polished.",
  },
  {
    icon: Workflow,
    title: "Lean UX + Agile Methodologies",
    description: "I know how to fit design into a sprint cycle without it becoming an afterthought. Testing before committing, not after — that's the whole point.",
  },
  {
    icon: Code,
    title: "Technical Understanding",
    description: "I know enough about how software gets built to have real conversations with engineers. I can read a pull request, understand APIs at a basic level, and spec things developers don't have to interpret.",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Communication",
    description: "A lot of my time goes into keeping different people pointed at the same problem. Users, executives, product managers — they each need a different version of the same answer, and getting that wrong is expensive.",
  },
];
