"use client";

import { DollarSign, TrendingUp, CheckCircle, Users } from "lucide-react";
import { Card } from "./ui/card";
import { useState, useEffect, useRef } from "react";

export default function TrustIndicators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const indicators = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$12.5M+",
      label: "Total Investments",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      hoverColor: "hover:from-emerald-50 hover:to-emerald-100/50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "47%",
      label: "Average Returns",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:from-blue-50 hover:to-blue-100/50"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: "89",
      label: "Successful Projects",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:from-purple-50 hover:to-purple-100/50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "250+",
      label: "Active Investors",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:from-orange-50 hover:to-orange-100/50"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white gradient-mesh relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-4 md:p-6 text-center shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-3 border-2 border-slate-100 hover:border-emerald-200 cursor-pointer group backdrop-blur-sm bg-white/90 perspective-1000 ${
                isVisible ? 'animate-scale-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 pointer-events-none" />

              <div className={`relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl ${indicator.bgColor} ${indicator.color} mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                {indicator.icon}
              </div>
              <div className={`text-2xl md:text-3xl lg:text-4xl font-jakarta font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300 ${
                isVisible ? 'animate-count-up' : ''
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                {indicator.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-dm font-semibold group-hover:text-emerald-600 transition-colors duration-300">
                {indicator.label}
              </div>
              {/* Animated underline on hover */}
              <div className="mt-3 h-1 w-0 mx-auto bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-[length:200%_auto] group-hover:w-full group-hover:animate-gradient transition-all duration-500 rounded-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
