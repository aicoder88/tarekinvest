import { Button } from "./ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function InvestmentHero() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-muted border border-gold-muted rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-gold-soft" />
            <span className="text-sm font-medium text-gold-soft">Proven Track Record Since 2018</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Turn <span className="text-gold-soft">$50K</span> Into{" "}
            <span className="text-gold-soft">$75K</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-soft to-gold">
              in 6 Months
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Join savvy investors earning 40-60% returns through Tarek's strategic real estate renovations. No experience needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                variant="gold"
                className="text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-gold-glow"
              >
                Become an Investor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#success-story">
              <Button
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm"
              >
                View Success Stories
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-gold-soft mb-1">$12.5M+</div>
              <div className="text-sm text-gray-400">Total Invested</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-soft mb-1">47%</div>
              <div className="text-sm text-gray-400">Avg. ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-soft mb-1">89</div>
              <div className="text-sm text-gray-400">Successful Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
