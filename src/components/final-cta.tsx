"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    text: "12-35% annual returns",
  },
  {
    icon: Clock,
    text: "Short 2-6 month cycles",
  },
  {
    icon: Shield,
    text: "Asset-backed security",
  },
  {
    icon: Users,
    text: "Relationship-driven deals",
  },
];

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-300 font-semibold text-sm">
              Accepting New Investors
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Grow Your Wealth
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              The Smart Way?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join sophisticated investors accessing exclusive, high-yield
            opportunities backed by real assets. Start with a free consultation
            — no commitment required.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mb-3 mx-auto" />
                  <p className="text-white font-semibold text-sm">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-3"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
            >
              Download Investment Guide
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">No upfront fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">Deal-by-deal choice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm">100% capital preservation history</span>
            </div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
              $12.4M+
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Capital Deployed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
              156+
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Successful Deals
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
              4.2 mo
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Avg. Duration
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
              98%
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Investor Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
