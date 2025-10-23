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
    <section id="calculator" className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-gray-50 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Calculate Your Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what YOUR investment could become with TarekInvest
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <Card className="p-8 border-2 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200">
              <div className="mb-6">
                <Label htmlFor="investment" className="text-lg font-semibold text-navy mb-2 block">
                  Your Investment Amount
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="pl-10 text-2xl font-bold h-14"
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

                <div className="p-6 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-xl border-2 border-emerald-200/50 hover:border-emerald-400/50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-navy">Total Value</span>
                    <TrendingUp className="w-5 h-5 text-emerald-500 animate-float" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                    ${animatedTotalValue.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
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

              <Button size="lg" variant="gold" className="w-full mt-6">
                Start Investing Today
              </Button>
            </Card>

            {/* Comparison Chart */}
            <div className="space-y-6">
              <Card className="p-6 border-2 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200">
                <h3 className="text-xl font-bold text-navy mb-4">
                  Compare to Traditional Investments
                </h3>
                
                <div className="space-y-4">
                  {/* TarekInvest */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-navy">TarekInvest</span>
                      <span className="font-bold text-gold">${totalValue.toLocaleString()}</span>
                    </div>
                    <div className="h-8 bg-gradient-to-r from-gold to-gold-soft rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-navy">
                        +{(avgROI * 100).toFixed(0)}% in 6 months
                      </div>
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
                    <div 
                      className="h-8 bg-blue-200 rounded-lg relative overflow-hidden"
                      style={{ width: `${(stockMarketReturn / projectedReturn) * 100}%` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700 whitespace-nowrap">
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
                    <div 
                      className="h-8 bg-gray-200 rounded-lg relative overflow-hidden"
                      style={{ width: `${(savingsReturn / projectedReturn) * 100}%` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700 whitespace-nowrap">
                        +4% annually
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-navy to-slate-800 text-white border-2 border-navy/50 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400 animate-float" />
                  Why TarekInvest Outperforms
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold-soft mt-1">✓</span>
                    <span>Strategic property selection in high-growth markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-soft mt-1">✓</span>
                    <span>Expert renovation team maximizing property value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-soft mt-1">✓</span>
                    <span>Fast turnaround (6-9 months vs. years)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold-soft mt-1">✓</span>
                    <span>Proven track record with 89 successful projects</span>
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
