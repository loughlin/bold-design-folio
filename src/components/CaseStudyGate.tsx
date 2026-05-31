import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "@/data/projects";
import ProtectedRoute from "./ProtectedRoute";

/**
 * Gates case study routes based on the matching project's `isPublic` flag.
 * Non-public case studies are wrapped in <ProtectedRoute>, which performs a
 * server-side session validation via the validate-session edge function.
 * This prevents bypassing the password gate by typing the URL directly.
 */
const CaseStudyGate = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const project = projects.find((p) => p.link === pathname);
  const isPublic = project ? project.isPublic : true;

  if (isPublic) return <>{children}</>;
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default CaseStudyGate;
