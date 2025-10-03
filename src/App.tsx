import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsCondiitions from "./pages/TermsConditions";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import CareersPage from "./pages/Careers_Page";

// Import the new form components
import InternshipForm from "./components/InternshipForm";
import SoftwareDeveloperForm from "./components/SoftwareDeveloperForm";
import ServiceDetailPage from "./pages/ServiceDetailPage";


const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Your existing routes */}
          <Route path="/" element={<Index />} />
          <Route path="/terms" element={<TermsCondiitions />} />
          <Route path="/policies" element={<PrivacyPolicies />} />
          <Route path="/careers" element={<CareersPage />} />
         
          <Route path="/apply/internship" element={<InternshipForm />} />
          <Route
            path="/apply/software-developer"
            element={<SoftwareDeveloperForm />}
          />
          <Route path="/service/:serviceId" element={<ServiceDetailPage />} />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
