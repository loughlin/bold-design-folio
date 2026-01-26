import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load protected case study pages - only loaded after authentication
const DesignSystemCaseStudy = lazy(() => import("./pages/DesignSystemCaseStudy"));
const WarfighterResearchCaseStudy = lazy(() => import("./pages/WarfighterResearchCaseStudy"));
const KesselRunCaseStudy = lazy(() => import("./pages/KesselRunCaseStudy"));
const MissionReportingCaseStudy = lazy(() => import("./pages/MissionReportingCaseStudy"));

import { PasswordProvider } from "./contexts/PasswordContext";
import PasswordDialog from "./components/PasswordDialog";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PasswordProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PasswordDialog />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Public case study routes */}
            <Route path="/case-study/kessel-run" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
                <KesselRunCaseStudy />
              </Suspense>
            } />
            <Route path="/case-study/design-system" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
                <DesignSystemCaseStudy />
              </Suspense>
            } />
            
            {/* Public case study - warfighter research */}
            <Route path="/case-study/warfighter-research" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
                <WarfighterResearchCaseStudy />
              </Suspense>
            } />
            
            {/* Protected routes - password remembered in session */}
            <Route path="/case-study/marauder" element={
              <ProtectedRoute>
                <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>}>
                  <MissionReportingCaseStudy />
                </Suspense>
              </ProtectedRoute>
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
