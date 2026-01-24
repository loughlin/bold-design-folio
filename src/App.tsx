import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import DesignSystemCaseStudy from "./pages/DesignSystemCaseStudy";
import WarfighterResearchCaseStudy from "./pages/WarfighterResearchCaseStudy";

import DesignOpsCaseStudy from "./pages/DesignOpsCaseStudy";
import KesselRunCaseStudy from "./pages/KesselRunCaseStudy";

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
            
            
            <Route path="/case-study/design-system" element={<ProtectedRoute><DesignSystemCaseStudy /></ProtectedRoute>} />
            <Route path="/case-study/warfighter-research" element={<ProtectedRoute><WarfighterResearchCaseStudy /></ProtectedRoute>} />
            
            <Route path="/case-study/designops" element={<ProtectedRoute><DesignOpsCaseStudy /></ProtectedRoute>} />
            <Route path="/case-study/kessel-run" element={<ProtectedRoute><KesselRunCaseStudy /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PasswordProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
