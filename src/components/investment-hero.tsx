import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function InvestmentHero() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Prominent background image with sophisticated overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=90"
          alt="Luxury property"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Multi-stop gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-900/65 to-emerald-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      {/* Animated gradient orbs with enhanced animation */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Minimal copy with animations */}
          <div className="text-white space-y-8">
            {/* Trust badge with enhanced interactivity */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/50 backdrop-blur-md shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:from-emerald-500/30 hover:to-teal-500/30 transition-smooth cursor-pointer group">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-glow" />
                <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
              <span className="text-base font-semibold text-emerald-200 group-hover:text-emerald-100 transition-colors">Exclusive • Private • Family & Friends Only</span>
            </div>

            {/* Updated headline */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Premium
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Real Estate</span>
                <br />
                <span className="text-slate-300">Investments</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Access institutional-grade property opportunities with proven returns
              </p>
            </div>

            {/* CTA buttons with enhanced micro-interactions and mobile touch targets */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                href="/sign-up"
                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 active:from-emerald-700 active:to-teal-700 transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/60 hover:scale-105 active:scale-95 text-base md:text-lg font-bold relative overflow-hidden min-h-14 md:min-h-auto"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 md:gap-3">
                  Become an Investor
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-4 md:py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl hover:bg-white/20 active:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40 text-base md:text-lg font-semibold group min-h-14 md:min-h-auto"
              >
                <span className="group-hover:text-emerald-300 transition-colors">View Opportunities</span>
                <TrendingUp className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-emerald-400">$2.4M+</div>
                <div className="text-sm text-slate-400 mt-1">Invested</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">24.7%</div>
                <div className="text-sm text-slate-400 mt-1">Avg Return*</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">47</div>
                <div className="text-sm text-slate-400 mt-1">Projects</div>
              </div>
            </div>
          </div>

          {/* Right: Visual proof - Featured deal card */}
          <div className="relative group">
            {/* Floating success card with enhanced shadows and animations */}
            <div className="relative bg-white rounded-3xl shadow-luxury-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-emerald-100/20">
              {/* Before/After images */}
              <div className="grid grid-cols-2 gap-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80"
                    alt="Before renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    BEFORE
                  </div>
                </div>
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                    alt="After renovation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Deal details */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-emerald-600">RECENT PROJECT</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Palm Jumeirah Villa
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600">Purchase</span>
                    <span className="font-bold text-slate-900">AED 1,000,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600">Renovation</span>
                    <span className="font-bold text-slate-900">AED 250,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600">Sale Price</span>
                    <span className="font-bold text-emerald-600">AED 3,000,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-semibold text-slate-900">Profit</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-emerald-600">AED 1,750,000</div>
                      <div className="text-sm text-emerald-600 font-semibold">115% Return</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>4 month timeline</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-semibold whitespace-nowrap">
                    <TrendingUp className="w-4 h-4 flex-shrink-0" />
                    <span>+4% annually</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating ROI badge with enhanced animation */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50 animate-float group-hover:animate-none transition-all">
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-extrabold">30%</div>
                <div className="text-xs text-white/90 font-semibold">ROI</div>
              </div>
              {/* Pulsing border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-300 opacity-0 animate-ping" />
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-7xl mx-auto mt-12">
          <p className="text-xs text-slate-400 text-center">
            *Past performance does not guarantee future results. All investments carry risk.
          </p>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}