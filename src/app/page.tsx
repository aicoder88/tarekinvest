import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import InvestmentHero from "@/components/investment-hero";
import BeforeAfterSlider from "@/components/before-after-slider";
import TrustIndicators from "@/components/trust-indicators";
import HowItWorks from "@/components/how-it-works";
import SuccessStory from "@/components/success-story";
import ROICalculator from "@/components/roi-calculator";
import InvestmentCategories from "@/components/investment-categories";
import ClientTestimonials from "@/components/client-testimonials";
import FAQSection from "@/components/faq-section";
import FinalCTA from "@/components/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white smooth-scroll">
      <Navbar />
      <InvestmentHero />
      <TrustIndicators />
      <BeforeAfterSlider />
      <HowItWorks />
      <InvestmentCategories />
      <ClientTestimonials />
      <SuccessStory />
      <ROICalculator />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}