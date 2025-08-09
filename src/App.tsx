import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import Leaderboard from "./pages/Leaderboard";
import Discuss from "./pages/Discuss";
import Friends from "./pages/Friends";
import Auth from "./pages/Auth";
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
import { TrackerProvider } from "./state/tracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrackerProvider>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AppFooter />
        </TrackerProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
