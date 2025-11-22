
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import KiteSafari from "./pages/KiteSafari";
import KiteSafari2 from "./pages/KiteSafari2";
import Brazil from "./pages/Brazil";
import Cyprus from "./pages/Cyprus";
import Vietnam from "./pages/Vietnam";
import TelegramButton from "./components/TelegramButton";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

// Create a new query client instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/kite-safari" element={<KiteSafari />} />
            <Route path="/kitesafari2" element={<KiteSafari2 />} />
            <Route path="/brazil" element={<Brazil />} />
            <Route path="/cyprus" element={<Cyprus />} />
            <Route path="/vietnam" element={<Vietnam />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <TelegramButton />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
