'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function InvestmentHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden smooth-scroll">
      {/* Animated gradient background layer */}
      <div className="absolute inset-0 animated-gradient-subtle opacity-60" />

      {/* Prominent background image with sophisticated overlay + parallax */}
      <div
        className="absolute inset-0 parallax-slow"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=90"
          alt="Luxury property"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Multi-stop gradient overlay for depth with noise texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-900/65 to-emerald-950/50 noise-texture" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        <div className="absolute inset-0 gradient-mesh" />
      </div>

      {/* Animated gradient orbs with enhanced animation and mouse parallax */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-float pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed pointer-events-none"
        style={{
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{
          animationDuration: '4s',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

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

            {/* Updated headline with enhanced typography */}
            <div className="animate-blur-in">
              <h1 className="text-5xl md:text-7xl font-jakarta font-bold leading-tight mb-6 tracking-tight">
                <span className="inline-block animate-slide-down-fade" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                  Exclusive
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] animate-gradient inline-block animate-slide-down-fade" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                  Investment
                </span>
                <br />
                <span className="text-slate-300 inline-block animate-slide-down-fade" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                  Opportunities
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl font-dm animate-slide-up-fade" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                Access institutional-grade opportunities across real estate, media, and high-growth ventures
              </p>
            </div>

            {/* CTA buttons with magnetic hover and stagger animation */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-scale-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
              <Link
                href="/sign-up"
                className="group magnetic-hover inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 active:from-emerald-700 active:to-teal-700 transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/60 hover:shadow-luxury-lg active:scale-95 text-base md:text-lg font-jakarta font-bold relative overflow-hidden min-h-14 md:min-h-auto"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-shimmer transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 md:gap-3">
                  Become an Investor
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="#calculator"
                className="magnetic-hover inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-4 md:py-5 bg-white/10 backdrop-blur-strong text-white rounded-2xl hover:bg-white/20 active:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40 hover:shadow-luxury text-base md:text-lg font-jakarta font-semibold group min-h-14 md:min-h-auto"
              >
                <span className="group-hover:text-emerald-300 transition-colors">View Opportunities</span>
                <TrendingUp className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
              </Link>
            </div>

            {/* Quick stats with staggered animations */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="animate-slide-up-fade" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                <div className="text-3xl font-jakarta font-bold text-emerald-400 animate-count-up">AED 12M+</div>
                <div className="text-sm font-dm text-slate-400 mt-1">Funded</div>
              </div>
              <div className="animate-slide-up-fade" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
                <div className="text-3xl font-jakarta font-bold text-amber-400 animate-count-up">28%+</div>
                <div className="text-sm font-dm text-slate-400 mt-1">Avg Return*</div>
              </div>
              <div className="animate-slide-up-fade" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
                <div className="text-3xl font-jakarta font-bold text-blue-400 animate-count-up">89</div>
                <div className="text-sm font-dm text-slate-400 mt-1">Deals</div>
              </div>
            </div>
          </div>

          {/* Right: Visual proof - Featured deal card */}
          <div className="relative group perspective-1000 animate-scale-up float-gentle" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            {/* Floating success card with enhanced shadows, animations, and 3D tilt */}
            <div className="relative bg-white rounded-3xl shadow-luxury-lg overflow-hidden transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-emerald-100/20 hover:shadow-luxury preserve-3d tilt-hover z-depth-4">
              {/* Hero image */}
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
                  alt="Media production set"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-jakarta font-bold rounded-full">
                  MEDIA
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-dm font-semibold">Funding Now</span>
                  </div>
                </div>
              </div>

              {/* Deal details */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm font-jakarta font-semibold text-emerald-600">ACTIVE OPPORTUNITY</span>
                </div>

                <h3 className="text-2xl font-jakarta font-bold text-slate-900 mb-6">
                  Media Production Agency
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600 font-dm">Required Amount</span>
                    <span className="font-jakarta font-bold text-slate-900">AED 550,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600 font-dm">Investment Range</span>
                    <span className="font-jakarta font-bold text-slate-900">AED 155K+</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-slate-600 font-dm">Expected Profit</span>
                    <span className="font-jakarta font-bold text-emerald-600">2-2.4% Monthly</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-jakarta font-semibold text-slate-900">Timeline</span>
                    <div className="text-right">
                      <div className="text-3xl font-jakarta font-bold text-emerald-600">1.5-2</div>
                      <div className="text-sm text-emerald-600 font-dm font-semibold">Months</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-dm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                    <span>TV ads, videography, film production</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-dm font-semibold">
                    <TrendingUp className="w-4 h-4 flex-shrink-0" />
                    <span>Asset-backed with equity conversion option</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating ROI badge with enhanced animation */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50 animate-float group-hover:scale-110 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl font-jakarta font-bold text-white font-extrabold">2.4%</div>
                <div className="text-xs text-white/90 font-dm font-semibold">Monthly</div>
              </div>
              {/* Pulsing border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-amber-300 opacity-0 animate-ping" />
              <div className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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