import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Home, Hammer, DollarSign } from "lucide-react";

export default function SuccessStory() {
  const financials = [
    {
      label: "Purchase Price",
      value: "$180,000",
      icon: <Home className="w-5 h-5" />,
      color: "text-blue-600"
    },
    {
      label: "Renovation Costs",
      value: "$45,000",
      icon: <Hammer className="w-5 h-5" />,
      color: "text-purple-600"
    },
    {
      label: "Sale Price",
      value: "$315,000",
      icon: <DollarSign className="w-5 h-5" />,
      color: "text-emerald-600"
    },
    {
      label: "Net Profit",
      value: "$90,000",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 text-sm bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            Featured Success Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results, Real Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we turned a distressed property into a 40% ROI in just 5 months
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Property Images */}
            <div className="space-y-4">
              <Card className="overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Renovated property"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
              <div className="grid grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
                    alt="Interior 1"
                    className="w-full h-24 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80"
                    alt="Interior 2"
                    className="w-full h-24 object-cover"
                  />
                </Card>
                <Card className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80"
                    alt="Interior 3"
                    className="w-full h-24 object-cover"
                  />
                </Card>
              </div>
            </div>

            {/* Financial Breakdown */}
            <div>
              <Card className="p-8 border-2 shadow-xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Oakwood Drive Renovation
                  </h3>
                  <p className="text-gray-600">
                    3 bed, 2 bath • 1,850 sq ft • Suburban Location
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {financials.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${item.color}`}>
                          {item.icon}
                        </div>
                        <span className="font-medium text-gray-700">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ROI Highlight */}
                <div className="p-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold">Return on Investment</span>
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="text-5xl font-bold mb-1">40%</div>
                  <div className="text-emerald-100">
                    Completed in 5 months • $50K investment turned into $70K
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Improvements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Complete kitchen remodel with modern appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Updated bathrooms with luxury fixtures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>New flooring, paint, and landscaping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Energy-efficient windows and HVAC system</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
