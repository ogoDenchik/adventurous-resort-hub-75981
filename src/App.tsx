
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import KiteSafari from "./pages/KiteSafari";
import Brazil from "./pages/Brazil";
import Cyprus from "./pages/Cyprus";
import ContactFAB from "./components/ContactFAB";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTopOnMount />
            <Routes>
              <Route path="/" element={<Cyprus />} />
              <Route path="/cyprus" element={<Navigate to="/" replace />} />
              <Route path="/kite-safari" element={<KiteSafari />} />
              <Route path="/brazil" element={<Brazil />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ContactFAB />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
