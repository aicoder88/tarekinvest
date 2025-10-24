"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "getting-started" | "investment" | "security" | "returns";
}

const faqs: FAQItem[] = [
  {
    category: "getting-started",
    question: "Who can invest with TarekInvest?",
    answer:
      "We work with accredited investors, family offices, and sophisticated individuals seeking alternative investment opportunities. Typical minimum investment starts at $25,000, though this varies by opportunity type. We prioritize relationship-based investing and vet all partners carefully.",
  },
  {
    category: "getting-started",
    question: "How do I get started?",
    answer:
      "Start with a free consultation where we assess your investment goals, risk tolerance, and capital availability. We'll explain our current opportunities, answer all questions, and provide detailed prospectuses. Once you're comfortable, we'll guide you through documentation and onboarding.",
  },
  {
    category: "investment",
    question: "What makes these opportunities different from public markets?",
    answer:
      "Our investments are asset-backed, short-duration, and relationship-driven. Unlike volatile public markets, each deal is secured by real assets (invoices, property, equipment, contracts). You see exactly where your capital goes and how returns are generated. Most investments mature in 2-6 months, not years.",
  },
  {
    category: "investment",
    question: "Can I choose which projects to invest in?",
    answer:
      "Absolutely. We operate on a deal-by-deal basis. You'll receive detailed information on each opportunity including business partner backgrounds, asset details, security structure, and expected returns. You decide which investments match your criteria. No forced pooling.",
  },
  {
    category: "investment",
    question: "What's the typical investment duration?",
    answer:
      "Most opportunities are short-term (2-6 months), though some real estate and equipment leasing deals run 1-3 years. We specialize in quick-turn investments that generate returns faster than traditional alternatives, allowing you to reinvest or withdraw capital regularly.",
  },
  {
    category: "security",
    question: "How is my investment secured?",
    answer:
      "Every investment is backed by tangible collateral: signed contracts, physical assets, purchase orders, or revenue streams. We conduct thorough due diligence on all partners and assets. Legal documentation includes security agreements, promissory notes, and collateral registrations where applicable.",
  },
  {
    category: "security",
    question: "What happens if a deal underperforms?",
    answer:
      "We structure deals conservatively with multiple exit strategies. If a project faces delays, we have collateral claims, personal guarantees, or asset liquidation rights. Historically, our capital preservation rate is 100% — we've never lost principal. That said, past performance doesn't guarantee future results.",
  },
  {
    category: "security",
    question: "Are investments insured?",
    answer:
      "While we don't carry blanket insurance, many deals include credit insurance on receivables, title insurance on property, or equipment insurance on financed assets. Each opportunity disclosure specifies insurance coverage. Our primary security is thorough vetting and collateralization.",
  },
  {
    category: "returns",
    question: "What returns can I expect?",
    answer:
      "Historical returns range from 12-35% annually depending on asset class and duration. Invoice factoring typically yields 12-18%, real estate fix-and-flips 20-35%, and media production financing 16-24%. Returns are clearly stated upfront with no hidden fees or surprises.",
  },
  {
    category: "returns",
    question: "How and when do I receive returns?",
    answer:
      "Returns are paid upon deal completion — typically via wire transfer to your designated account. For longer-term investments, some deals offer quarterly distributions. You'll receive detailed statements showing principal, interest/profit, and any fees deducted.",
  },
  {
    category: "returns",
    question: "Can I reinvest returns automatically?",
    answer:
      "Yes! Many investors opt for automatic reinvestment into new opportunities matching their profile. We can set up a reinvestment plan where maturing capital is immediately deployed into the next available deal, compounding your returns over time.",
  },
  {
    category: "investment",
    question: "What fees does TarekInvest charge?",
    answer:
      "We charge a success fee (typically 10-20% of profits) only when deals succeed. No upfront fees, no management fees, no hidden costs. Our interests are fully aligned with yours — we only make money when you make money. All fees are disclosed in opportunity documents.",
  },
  {
    category: "getting-started",
    question: "Is there a lock-up period?",
    answer:
      "Each deal has a defined maturity date (e.g., 4 months for an invoice factoring deal). You're committed until that date. However, because our investments are short-duration, you're never locked in for years. Some longer-term deals may have early exit options at a slight discount.",
  },
  {
    category: "security",
    question: "How do you vet investment opportunities?",
    answer:
      "Our due diligence is exhaustive: financial audits, background checks, asset inspections, contract reviews, and reference calls. We only present deals from our trusted network built over years. We typically reject 90% of opportunities we review. Your capital sees only the top 10%.",
  },
];

const categories = [
  { id: "getting-started", label: "Getting Started", color: "emerald" },
  { id: "investment", label: "Investment Process", color: "blue" },
  { id: "security", label: "Security & Risk", color: "purple" },
  { id: "returns", label: "Returns & Payments", color: "amber" },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFAQs = activeCategory
    ? faqs.filter((faq) => faq.category === activeCategory)
    : faqs;

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about investing with TarekInvest. Can't
            find what you're looking for? Reach out to our team.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === null
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 text-white shadow-lg scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {faq.question}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                      {
                        categories.find((cat) => cat.id === faq.category)
                          ?.label
                      }
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {isExpanded ? (
                      <Minus className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 pt-4 bg-gradient-to-br from-gray-50 to-white">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our investment team is here to help. Schedule a free consultation
            to discuss your specific situation and explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Schedule Consultation
            </button>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-emerald-200">
              Download Investment Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
