import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ScreensSection from "./components/ScreensSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OneEconomySection from "./components/OneEconomySection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ScreensSection />
      <HowItWorksSection />
      <OneEconomySection />
      <CtaSection />
      <Footer />
    </div>
  );
}
