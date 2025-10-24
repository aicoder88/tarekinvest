"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Video,
  Building2,
  Shield,
  DollarSign,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

interface InvestmentType {
  name: string;
  description: string;
  duration: string;
  yieldRange: string;
  securityType: string;
  example: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  subtitle: string;
  color: string;
  investments: InvestmentType[];
}

const categories: Category[] = [
  {
    id: "trade-finance",
    title: "Trade & Business Financing",
    icon: FileText,
    subtitle: "Real-world, short-term deals with fast turnarounds",
    color: "from-emerald-500 to-teal-600",
    investments: [
      {
        name: "Invoice Factoring (PO Financing)",
        description:
          "Funding invoices for vetted companies within your network — backed by signed purchase orders or contracts.",
        duration: "2-4 months",
        yieldRange: "12-18% annually",
        securityType: "Asset-backed",
        example:
          "Invoice financing for media agency with multinational client contract",
      },
      {
        name: "Media Production Campaign Financing",
        description:
          "Short-term advances for ad-film or content projects with multinational brands.",
        duration: "3-6 months",
        yieldRange: "15-22% annually",
        securityType: "Contract-backed",
        example:
          "Funding production house with confirmed brand advertising contract",
      },
      {
        name: "Supplier Financing",
        description:
          "Bridge financing for suppliers fulfilling large corporate orders.",
        duration: "2-3 months",
        yieldRange: "14-20% annually",
        securityType: "Purchase order backed",
        example:
          "Supply chain financing for manufacturer with Fortune 500 purchase order",
      },
      {
        name: "Import / Export Financing",
        description:
          "Funding trade transactions with clear margin spreads and documented shipment schedules.",
        duration: "3-5 months",
        yieldRange: "16-24% annually",
        securityType: "Trade document backed",
        example:
          "Export financing for electronics shipment with verified buyer contract",
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Investments",
    icon: Building2,
    subtitle: "Asset-based, medium-term positions for capital growth",
    color: "from-blue-500 to-indigo-600",
    investments: [
      {
        name: "Property Renovation & Resale (Fix-and-Flip)",
        description:
          "Buy undervalued properties, enhance them, sell at market value.",
        duration: "6-12 months",
        yieldRange: "20-35% per project",
        securityType: "Property asset backed",
        example:
          "Downtown apartment renovation project in emerging neighborhood",
      },
      {
        name: "Residential Development Participation",
        description:
          "Invest in small apartment or villa projects in growing urban areas.",
        duration: "1-2 years",
        yieldRange: "18-28% annually",
        securityType: "Equity participation",
        example: "10-unit residential complex in high-growth suburban area",
      },
      {
        name: "Short-Term Rental Conversions",
        description:
          "Fund conversions of existing units into Airbnb-grade assets.",
        duration: "4-8 months",
        yieldRange: "22-32% annually",
        securityType: "Property + revenue backed",
        example:
          "Converting traditional apartment to premium short-term rental",
      },
      {
        name: "Land Banking",
        description: "Acquire promising plots ahead of development cycles.",
        duration: "2-3 years",
        yieldRange: "25-50% per cycle",
        securityType: "Land asset backed",
        example: "Strategic land purchase near planned infrastructure project",
      },
    ],
  },
  {
    id: "media-production",
    title: "Media & Production Financing",
    icon: Video,
    subtitle: "Creative industry projects with defined deliverables",
    color: "from-purple-500 to-pink-600",
    investments: [
      {
        name: "TV Commercial Production Financing",
        description:
          "Fund production houses with confirmed brand contracts and deliverables.",
        duration: "2-4 months",
        yieldRange: "16-24% annually",
        securityType: "Contract-backed",
        example:
          "Commercial production for international automotive brand campaign",
      },
      {
        name: "Digital Content Campaigns",
        description:
          "Co-finance media projects for reputable advertising agencies.",
        duration: "3-6 months",
        yieldRange: "18-26% annually",
        securityType: "Contract + milestone backed",
        example:
          "Multi-platform digital campaign for consumer goods brand launch",
      },
      {
        name: "Post-Production Equipment Leasing",
        description:
          "Short-term loans secured by studio gear and rental agreements.",
        duration: "1-3 years",
        yieldRange: "14-22% annually",
        securityType: "Equipment asset backed",
        example: "High-end editing suite financing with guaranteed rental income",
      },
    ],
  },
  {
    id: "asset-backed",
    title: "Asset-Backed & Hybrid Instruments",
    icon: Shield,
    subtitle: "Balanced risk with collateral or clear asset coverage",
    color: "from-amber-500 to-orange-600",
    investments: [
      {
        name: "Secured Promissory Notes",
        description: "Fixed-term, collateralized debt instruments with priority claims.",
        duration: "6-24 months",
        yieldRange: "12-18% annually",
        securityType: "Multi-asset backed",
        example:
          "Secured note backed by business equipment and receivables portfolio",
      },
      {
        name: "Convertible Notes",
        description: "Short-term debt with equity conversion options at maturity.",
        duration: "12-18 months",
        yieldRange: "10-16% + equity upside",
        securityType: "Blended debt-equity",
        example:
          "Growth-stage company note with 20% discount on equity conversion",
      },
      {
        name: "Revenue-Share Agreements",
        description: "A percentage of top-line revenue from specific ventures.",
        duration: "12-36 months",
        yieldRange: "15-25% annually",
        securityType: "Revenue stream backed",
        example: "5% revenue share from established e-commerce platform expansion",
      },
      {
        name: "Equipment Leasing Pools",
        description:
          "Finance high-value items used by trusted operators with proven track records.",
        duration: "2-5 years",
        yieldRange: "14-20% annually",
        securityType: "Equipment asset backed",
        example:
          "Commercial vehicle fleet financing with buyback guarantee",
      },
    ],
  },
  {
    id: "private-credit",
    title: "Private Credit & Lending",
    icon: DollarSign,
    subtitle: "Consistent yield with structured protection",
    color: "from-green-500 to-emerald-600",
    investments: [
      {
        name: "Short-Term Business Loans",
        description:
          "2-6 month terms, collateralized by contracts or inventory with clear exit.",
        duration: "2-6 months",
        yieldRange: "14-22% annually",
        securityType: "Asset + contract backed",
        example:
          "Working capital loan secured by inventory and purchase orders",
      },
      {
        name: "Bridge Financing for Asset Purchases",
        description:
          "Quick-turn financing for companies between funding rounds or asset acquisitions.",
        duration: "3-9 months",
        yieldRange: "16-24% annually",
        securityType: "Asset acquisition backed",
        example: "Bridge loan for equipment purchase ahead of series A funding",
      },
      {
        name: "Invoice Discounting",
        description:
          "Purchase receivables at a discount for defined yield with credit insurance.",
        duration: "1-3 months",
        yieldRange: "12-18% annually",
        securityType: "Invoice backed",
        example:
          "Discounted invoice portfolio from B2B software company with corporate clients",
      },
    ],
  },
  {
    id: "alternative",
    title: "Alternative & Growth Opportunities",
    icon: TrendingUp,
    subtitle: "Diversified ventures for higher potential upside",
    color: "from-rose-500 to-red-600",
    investments: [
      {
        name: "Equity Stakes in Startups",
        description:
          "Early participation in vetted small businesses within trusted network.",
        duration: "3-5 years",
        yieldRange: "30-100%+ potential",
        securityType: "Equity ownership",
        example:
          "Minority stake in SaaS startup with proven traction and revenue",
      },
      {
        name: "Luxury Asset Partnerships",
        description:
          "Co-ownership of high-value items — property, vehicles, or media assets.",
        duration: "1-3 years",
        yieldRange: "15-30% annually",
        securityType: "Physical asset backed",
        example: "Fractional ownership in luxury vehicle with rental income stream",
      },
      {
        name: "Private Placement Funds",
        description:
          "Participation in pooled investments managed in-house with quarterly distributions.",
        duration: "1-3 years",
        yieldRange: "18-28% annually",
        securityType: "Diversified portfolio",
        example:
          "Mixed portfolio fund with trade finance, real estate, and media investments",
      },
      {
        name: "Technology & AI Ventures",
        description:
          "Seed-level positions in internal or partner-run tech products with clear monetization.",
        duration: "2-4 years",
        yieldRange: "40-150%+ potential",
        securityType: "Equity + IP backed",
        example:
          "Early investment in AI-powered business automation platform",
      },
    ],
  },
];

export default function InvestmentCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedInvestment, setSelectedInvestment] = useState<string | null>(
    null
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setSelectedInvestment(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

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
            Investment Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help investors grow and protect capital through high-yield,
            asset-backed opportunities — always tied to real, verifiable
            business activity.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="space-y-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Category header - clickable */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.subtitle}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                {/* Expanded investment types */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                        <div className="grid md:grid-cols-2 gap-4">
                          {category.investments.map((investment, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                            >
                              <h4 className="font-semibold text-lg text-gray-900 mb-3">
                                {investment.name}
                              </h4>
                              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {investment.description}
                              </p>

                              <div className="space-y-2 mb-4">
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-gray-500 font-medium">
                                    Duration:
                                  </span>
                                  <span className="text-gray-900 font-semibold">
                                    {investment.duration}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-gray-500 font-medium">
                                    Expected Yield:
                                  </span>
                                  <span className="text-emerald-600 font-bold">
                                    {investment.yieldRange}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-gray-500 font-medium">
                                    Security:
                                  </span>
                                  <span className="text-blue-600 font-semibold">
                                    {investment.securityType}
                                  </span>
                                </div>
                              </div>

                              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                <p className="text-xs text-gray-500 font-medium mb-1">
                                  Example Project:
                                </p>
                                <p className="text-sm text-gray-700 italic">
                                  {investment.example}
                                </p>
                              </div>

                              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2.5 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                                Request Access
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Investing?
            </h3>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
              Join our network of sophisticated investors accessing exclusive,
              high-yield opportunities backed by real assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all duration-300 border-2 border-white/20">
                View Investment Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
