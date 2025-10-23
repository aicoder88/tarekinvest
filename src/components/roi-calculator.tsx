"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TrendingUp, DollarSign, Calendar, Percent, Sparkles } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

export default function ROICalculator() {
  const [investment, setInvestment] = useState(50000);
  const avgROI = 0.47; // 47% average return
  const timelineMonths = 6;

  const projectedReturn = investment * avgROI;
  const totalValue = investment + projectedReturn;
  const monthlyReturn = projectedReturn / timelineMonths;

  // Comparison data
  const stockMarketReturn = investment * 0.10; // 10% annual
  const savingsReturn = investment * 0.04; // 4% annual

  // Countup animations
  const animatedTotalValue = useCountUp({ end: Math.round(totalValue), duration: 800 });
  const animatedProjectedReturn = useCountUp({ end: Math.round(projectedReturn), duration: 800 });
  const animatedMonthlyReturn = useCountUp({ end: Math.round(monthlyReturn), duration: 800 });

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-gray-50 relative overflow-hidden gradient-mesh">
      {/* Background orbs with parallax */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl -z-10 animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up-fade">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/50 backdrop-blur-sm rounded-full mb-6 border border-emerald-200/50">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-glow" />
            <span className="text-sm font-jakarta font-semibold text-emerald-700">Interactive Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-navy mb-4 tracking-tight">
            Investment Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-dm">
            Explore potential returns across our <span className="font-semibold text-emerald-600">diverse opportunities</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <Card className="p-8 border-2 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 backdrop-blur-sm bg-white/95 perspective-1000 group animate-scale-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 pointer-events-none" />

              <div className="mb-6 relative">
                <Label htmlFor="investment" className="text-lg font-jakarta font-semibold text-navy mb-2 block">
                  Your Investment Amount
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="pl-10 text-2xl font-jakarta font-bold h-14 border-2 focus:border-emerald-400 focus:ring-emerald-400/20 transition-all"
                    min={10000}
                    step={5000}
                  />
                </div>
                <input
                  type="range"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full mt-4"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$10K</span>
                  <span>$500K</span>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Your Investment</span>
                    <span className="text-xl font-bold text-navy">
                      ${investment.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Projected Return</span>
                    <span className="text-xl font-bold text-emerald-600">
                      +${projectedReturn.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-xl border-2 border-emerald-200/50 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 relative overflow-hidden group">
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-300" />

                  <div className="flex items-center justify-between mb-2 relative">
                    <span className="text-sm font-jakarta font-semibold text-navy">Total Value</span>
                    <TrendingUp className="w-5 h-5 text-emerald-500 animate-float" />
                  </div>
                  <div className="text-4xl font-jakarta font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent mb-1 relative">
                    ${animatedTotalValue.toLocaleString()}
                  </div>
                  <div className="text-sm font-dm text-gray-600 relative">
                    in {timelineMonths} months • {(avgROI * 100).toFixed(0)}% ROI
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-gold mx-auto mb-1" />
                    <div className="text-lg font-bold text-navy">
                      ${monthlyReturn.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">Per Month</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Percent className="w-5 h-5 text-gold mx-auto mb-1" />
                    <div className="text-lg font-bold text-navy">
                      {(avgROI * 100).toFixed(0)}%
                    </div>
                    <div className="text-xs text-gray-600">Return Rate</div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-jakarta font-bold shadow-lg shadow-emerald-500/30 hover:shadow-luxury hover:shadow-emerald-500/50 magnetic-hover active:scale-95 transition-all duration-300">
                Start Investing Today
              </Button>
            </Card>

            {/* Comparison Chart */}
            <div className="space-y-6 animate-scale-up" style={{ animationDelay: '0.4s' }}>
              <Card className="p-6 border-2 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 backdrop-blur-sm bg-white/95 group perspective-1000">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 pointer-events-none" />

                <h3 className="text-xl font-jakarta font-bold text-navy mb-4 relative">
                  Compare to Traditional Investments
                </h3>
                
                <div className="space-y-4">
                  {/* TarekInvest */}
                  <div className="relative group">
                    <div className="flex justify-between mb-2 relative">
                      <span className="font-jakarta font-semibold text-navy">TarekInvest</span>
                      <span className="font-jakarta font-bold text-emerald-600">${totalValue.toLocaleString()}</span>
                    </div>
                    <div className="h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg relative overflow-hidden shadow-md shadow-emerald-500/30 group-hover:shadow-lg group-hover:shadow-emerald-500/40 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-jakarta font-semibold text-white">
                        +{(avgROI * 100).toFixed(0)}% in 6 months
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent group-hover:animate-shimmer" />
                    </div>
                  </div>

                  {/* Stock Market */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">Stock Market</span>
                      <span className="font-bold text-gray-700">
                        ${(investment + stockMarketReturn).toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full h-8 bg-gray-100 rounded-lg relative overflow-hidden">
                      <div
                        className="h-full bg-blue-300 rounded-lg transition-all duration-500"
                        style={{ width: `${Math.max(25, (stockMarketReturn / projectedReturn) * 100)}%` }}
                      />
                      <div className="absolute inset-0 flex items-center px-3 text-sm font-semibold text-gray-700">
                        +10% annually
                      </div>
                    </div>
                  </div>

                  {/* Savings Account */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">Savings Account</span>
                      <span className="font-bold text-gray-700">
                        ${(investment + savingsReturn).toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full h-8 bg-gray-100 rounded-lg relative overflow-hidden">
                      <div
                        className="h-full bg-gray-300 rounded-lg transition-all duration-500"
                        style={{ width: `${Math.max(20, (savingsReturn / projectedReturn) * 100)}%` }}
                      />
                      <div className="absolute inset-0 flex items-center px-3 text-sm font-semibold text-gray-700">
                        +4% annually
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-navy to-slate-800 text-white border-2 border-navy/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 pointer-events-none" />

                <h3 className="text-lg font-jakarta font-bold mb-3 flex items-center gap-2 relative">
                  <Sparkles className="w-5 h-5 text-emerald-400 animate-float" />
                  Why TarekInvest Outperforms
                </h3>
                <ul className="space-y-2 text-sm font-dm relative">
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-200">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Diverse portfolio: Real estate, media, high-growth ventures</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-200">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Asset-backed security with equity conversion options</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-200">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Fast turnaround (1.5-9 months typical timeline)</span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-200">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>Proven track record with 89 successful deals</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
