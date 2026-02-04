import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import MvpIn5Tagen from "./pages/MvpIn5Tagen";
import Kunden from "./pages/Kunden";
import Partner from "./pages/Partner";
import UeberUns from "./pages/UeberUns";
import Karriere from "./pages/Karriere";
import Partneranfrage from "./pages/Partneranfrage";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/mvp-in-5-tagen" component={MvpIn5Tagen} />
      <Route path="/kunden" component={Kunden} />
      <Route path="/partner" component={Partner} />
      <Route path="/ueber-uns" component={UeberUns} />
      <Route path="/karriere" component={Karriere} />
      <Route path="/partneranfrage" component={Partneranfrage} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
