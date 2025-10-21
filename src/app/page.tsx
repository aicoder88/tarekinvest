import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import InvestmentHero from "@/components/investment-hero";
import BeforeAfterSlider from "@/components/before-after-slider";
import TrustIndicators from "@/components/trust-indicators";
import HowItWorks from "@/components/how-it-works";
import SuccessStory from "@/components/success-story";
import ROICalculator from "@/components/roi-calculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <InvestmentHero />
      <TrustIndicators />
      <BeforeAfterSlider />
      <HowItWorks />
      <SuccessStory />
      <ROICalculator />
      <Footer />
    </div>
  );
}