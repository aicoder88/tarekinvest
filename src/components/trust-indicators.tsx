import { DollarSign, TrendingUp, CheckCircle, Users } from "lucide-react";
import { Card } from "./ui/card";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$12.5M+",
      label: "Total Investments",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "47%",
      label: "Average Returns",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: "89",
      label: "Successful Projects",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "250+",
      label: "Active Investors",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {indicators.map((indicator, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${indicator.bgColor} ${indicator.color} mb-4`}>
                {indicator.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {indicator.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {indicator.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
