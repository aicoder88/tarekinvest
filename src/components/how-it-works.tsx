"use client";

import { useState, useEffect, useRef } from "react";
import { UserPlus, Search, Calculator, CheckCircle2, TrendingUp, Wallet, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10" />,
      title: "Step 1: Create Your Account",
      description: "Start unlocking your wealth-building potential. Upload standard verification documents to comply with international investment regulations. Once approved, you're ready to explore.",
      highlights: [
        "Quick 5-minute registration",
        "Secure document verification",
        "Instant approval notification"
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      accentColor: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Step 2: Browse & Choose",
      description: "Explore exclusive investment opportunities hand-selected by our experts across real estate, private ventures, and income-producing assets. Start from as little as 500 AED.",
      highlights: [
        "Expert-curated opportunities",
        "Minimum investment: 500 AED",
        "Real-time income calculator"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      accentColor: "from-blue-500 to-indigo-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Step 3: Invest & Earn",
      description: "Finalize your investment and receive your official ownership certificate. Monthly returns are automatically deposited into your Tarek Invest wallet. Reinvest or withdraw anytime.",
      highlights: [
        "Automatic monthly deposits",
        "Real-time portfolio tracking",
        "Flexible withdrawal options"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      accentColor: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-subtle opacity-10" />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl float-gentle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl float-moderate" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl float-gentle" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? 'revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 backdrop-blur-sm rounded-full mb-6 border border-emerald-200 shadow-sm">
            <span className="text-sm font-jakarta font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Join in 3 Simple Steps</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-jakarta font-bold text-slate-900 mb-6 tracking-tight">
            How Tarek Invest Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-dm leading-relaxed">
            Welcome to Tarek Invest — your gateway to building real wealth through carefully curated, high-performing investment opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className={`p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 ${step.borderColor} z-depth-2 reveal-scale ${isVisible ? 'revealed' : ''} overflow-hidden`} style={{ transitionDelay: `${index * 0.15}s` }}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${step.accentColor} text-white rounded-2xl flex items-center justify-center font-jakarta font-bold text-2xl shadow-xl z-10 group-hover:scale-110 transition-transform duration-300`}>
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${step.bgColor} ${step.color} mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-jakarta font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${step.accentColor} transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 font-dm">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {step.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${step.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-700 font-dm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Connector Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className={`p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-500 reveal-scale ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-3">
                <Wallet className="w-8 h-8 text-emerald-600" />
                <h4 className="text-lg font-jakarta font-bold text-slate-900">Your Tarek Invest Wallet</h4>
              </div>
              <p className="text-slate-700 text-sm font-dm leading-relaxed">
                Monthly returns are automatically deposited. Reinvest into new opportunities or withdraw to your bank account anytime.
              </p>
            </Card>

            <Card className={`p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-500 reveal-scale ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.6s' }}>
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="w-8 h-8 text-blue-600" />
                <h4 className="text-lg font-jakarta font-bold text-slate-900">Real-Time Portfolio Dashboard</h4>
              </div>
              <p className="text-slate-700 text-sm font-dm leading-relaxed">
                Monitor your progress in real time — track returns, performance, and asset growth effortlessly.
              </p>
            </Card>

            <Card className={`p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-500 reveal-scale ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.7s' }}>
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <h4 className="text-lg font-jakarta font-bold text-slate-900">Tarek Academy</h4>
              </div>
              <p className="text-slate-700 text-sm font-dm leading-relaxed">
                Learn about exit strategies, investment fundamentals, and wealth-building insights directly from your profile.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center reveal-scale ${isVisible ? 'revealed' : ''}`} style={{ transitionDelay: '0.8s' }}>
          <Link
            href="/sign-up"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 font-jakarta font-bold text-lg hover:scale-105"
          >
            Start Your Wealth Journey Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-sm text-slate-500 font-dm">
            Need assistance? Our support team is always within reach.
          </p>
        </div>
      </div>
    </section>
  );
}
