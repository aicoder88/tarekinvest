import { Search, Hammer, TrendingUp, Banknote } from "lucide-react";
import { Card } from "./ui/card";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "We Find the Deal",
      description: "Our expert team identifies undervalued properties with high potential in prime locations.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Hammer className="w-10 h-10" />,
      title: "Strategic Renovation",
      description: "Professional contractors transform the property with proven upgrades that maximize value.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Market & Sell",
      description: "We list at optimal timing with professional staging to achieve premium sale prices.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Banknote className="w-10 h-10" />,
      title: "You Profit",
      description: "Receive your initial investment plus returns, typically 40-60% within 6-9 months.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, proven process that turns your capital into consistent returns
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className={`p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${step.borderColor}`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${step.bgColor} ${step.color} mb-6 mt-4`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Connector Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-gray-300 transform rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-emerald-50 border-2">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-gray-900 mb-1">Day 1</div>
                <div className="text-sm text-gray-600">Investment</div>
              </div>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-300 to-emerald-300 mx-4" />
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-gray-900 mb-1">Month 3-4</div>
                <div className="text-sm text-gray-600">Renovation</div>
              </div>
              <div className="flex-1 h-1 bg-gradient-to-r from-emerald-300 to-orange-300 mx-4" />
              <div className="text-center flex-1">
                <div className="text-2xl font-bold text-gray-900 mb-1">Month 6</div>
                <div className="text-sm text-gray-600">Profit Return</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
