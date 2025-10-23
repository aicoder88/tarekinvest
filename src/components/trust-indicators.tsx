"use client";

import { DollarSign, TrendingUp, CheckCircle, Users } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

export default function TrustIndicators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <Card
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="p-4 md:p-6 text-center shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100 hover:border-emerald-200 cursor-pointer group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl ${indicator.bgColor} ${indicator.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {indicator.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                {indicator.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-semibold group-hover:text-emerald-600 transition-colors duration-300">
                {indicator.label}
              </div>
              {/* Animated underline on hover */}
              <div className="mt-3 h-0.5 w-0 mx-auto bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
