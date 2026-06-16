import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Cyprus from "./pages/Cyprus";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

// Code-split non-landing routes so the homepage ships less JS on first load.
const KiteSafari = lazy(() => import("./pages/KiteSafari"));
const CatamaranKiteSafari = lazy(() => import("./pages/CatamaranKiteSafari"));
const Brazil = lazy(() => import("./pages/Brazil"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactFAB = lazy(() => import("./components/ContactFAB"));

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
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Cyprus />} />
                <Route path="/cyprus" element={<Navigate to="/" replace />} />
                <Route path="/kite-safari" element={<KiteSafari />} />
                <Route path="/brazil" element={<Brazil />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ContactFAB />
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;

