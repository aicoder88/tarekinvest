"use client";

import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, Shield, Clock } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  stats: {
    label: string;
    value: string;
  }[];
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Portfolio Manager",
    company: "Mitchell Capital Group",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote:
      "TarekInvest transformed my investment approach. The invoice factoring opportunities delivered consistent 16% returns with minimal risk. Their due diligence is exceptional.",
    stats: [
      { label: "Total Returns", value: "127%" },
      { label: "Active Projects", value: "8" },
      { label: "Time Invested", value: "18 mo" },
    ],
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Tech Entrepreneur",
    company: "Chen Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote:
      "After selling my startup, I needed intelligent capital deployment. TarekInvest's media production financing gave me 22% annual returns with 4-month cycles. Incredible transparency.",
    stats: [
      { label: "Avg. Return", value: "22.3%" },
      { label: "Deals Completed", value: "12" },
      { label: "Member Since", value: "2022" },
    ],
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Real Estate Investor",
    company: "Rodriguez Holdings",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote:
      "I've been in real estate for 15 years. TarekInvest's fix-and-flip partnerships are the best I've encountered. Professional execution, clear timelines, and consistently above-target returns.",
    stats: [
      { label: "Properties Funded", value: "6" },
      { label: "Avg. Profit", value: "28.5%" },
      { label: "Total Invested", value: "$450K" },
    ],
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Financial Advisor",
    company: "Okonkwo Wealth Management",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    quote:
      "I recommend TarekInvest to high-net-worth clients seeking alternative investments. The asset-backed approach and short holding periods provide security and liquidity my clients value.",
    stats: [
      { label: "Client Referrals", value: "14" },
      { label: "Portfolio Size", value: "$1.2M" },
      { label: "Avg. Duration", value: "5 mo" },
    ],
    rating: 5,
  },
];

const trustMetrics = [
  {
    icon: TrendingUp,
    value: "$12.4M+",
    label: "Capital Deployed",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Capital Preservation Rate",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    value: "4.2 mo",
    label: "Avg. Investment Duration",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Star,
    value: "98%",
    label: "Investor Satisfaction",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-blue-50/50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Sophisticated Investors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a community of investors who have discovered consistent,
            high-yield returns through our carefully vetted opportunities.
          </p>
        </motion.div>

        {/* Trust metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`${metric.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-emerald-600" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-100">
                {testimonial.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-emerald-600 font-bold text-xl mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-emerald-500/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center shadow-2xl"
        >
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            "Working with TarekInvest has been transformational. Their
            deal-by-deal approach lets me choose investments that match my risk
            profile perfectly."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-4 ring-white/30">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                alt="James Patterson"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-white font-bold">James Patterson</div>
              <div className="text-white/70 text-sm">
                Private Investor, London
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
