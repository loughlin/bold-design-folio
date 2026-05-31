import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

// Lazy load protected case study pages - only loaded after authentication
const DesignSystemCaseStudy = lazy(() => import("./pages/DesignSystemCaseStudy"));
const WarfighterResearchCaseStudy = lazy(() => import("./pages/WarfighterResearchCaseStudy"));
const KesselRunCaseStudy = lazy(() => import("./pages/KesselRunCaseStudy"));
const MissionReportingCaseStudy = lazy(() => import("./pages/MissionReportingCaseStudy"));
const OperationalDashboardCaseStudy = lazy(() => import("./pages/OperationalDashboardCaseStudy"));

import { PasswordProvider } from "./contexts/PasswordContext";
import PasswordDialog from "./components/PasswordDialog";
import CaseStudyGate from "./components/CaseStudyGate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PasswordProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <a href="#main" className="skip-to-content">Skip to main content</a>
          <PasswordDialog />
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Case study routes — gated server-side via CaseStudyGate when the
                matching project has isPublic: false. */}
            <Route path="/case-study/kessel-run" element={
              <CaseStudyGate>
                <Suspense fallback={<LoadingScreen />}>
                  <KesselRunCaseStudy />
                </Suspense>
              </CaseStudyGate>
            } />
            <Route path="/case-study/design-system" element={
              <CaseStudyGate>
                <Suspense fallback={<LoadingScreen />}>
                  <DesignSystemCaseStudy />
                </Suspense>
              </CaseStudyGate>
            } />
            <Route path="/case-study/warfighter-research" element={
              <CaseStudyGate>
                <Suspense fallback={<LoadingScreen />}>
                  <WarfighterResearchCaseStudy />
                </Suspense>
              </CaseStudyGate>
            } />
            <Route path="/case-study/operational-dashboard" element={
              <CaseStudyGate>
                <Suspense fallback={<LoadingScreen />}>
                  <OperationalDashboardCaseStudy />
                </Suspense>
              </CaseStudyGate>
            } />
            <Route path="/case-study/mission-reporting" element={
              <CaseStudyGate>
                <Suspense fallback={<LoadingScreen />}>
                  <MissionReportingCaseStudy />
                </Suspense>
              </CaseStudyGate>
            } />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PasswordProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
