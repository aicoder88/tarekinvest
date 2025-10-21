"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Users,
  Home,
  Bed,
  Bath,
  Maximize
} from "lucide-react";
import DashboardNavbar from "@/components/dashboard-navbar";

export default function OpportunitiesPage() {
  const opportunities = [
    {
      id: 1,
      address: "2345 Riverside Drive",
      city: "Austin, TX",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
      ],
      minInvestment: 25000,
      targetRaise: 200000,
      raised: 150000,
      projectedROI: 52,
      timeline: "7 months",
      beds: 4,
      baths: 3,
      sqft: 2400,
      purchasePrice: 220000,
      renovationBudget: 55000,
      targetSale: 380000,
      spotsRemaining: 2,
      riskLevel: "Medium",
      description: "Prime location near downtown with high appreciation potential. Full kitchen and bathroom remodels planned."
    },
    {
      id: 2,
      address: "7890 Sunset Boulevard",
      city: "Dallas, TX",
      images: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
      ],
      minInvestment: 50000,
      targetRaise: 300000,
      raised: 100000,
      projectedROI: 48,
      timeline: "6 months",
      beds: 5,
      baths: 4,
      sqft: 3200,
      purchasePrice: 350000,
      renovationBudget: 75000,
      targetSale: 550000,
      spotsRemaining: 4,
      riskLevel: "Low",
      description: "Luxury property in established neighborhood. Modern finishes and open floor plan renovation."
    },
    {
      id: 3,
      address: "4567 Oak Tree Lane",
      city: "Houston, TX",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
      ],
      minInvestment: 15000,
      targetRaise: 150000,
      raised: 75000,
      projectedROI: 55,
      timeline: "8 months",
      beds: 3,
      baths: 2,
      sqft: 1800,
      purchasePrice: 165000,
      renovationBudget: 40000,
      targetSale: 275000,
      spotsRemaining: 5,
      riskLevel: "Medium",
      description: "Up-and-coming neighborhood with strong rental demand. Cosmetic updates and landscaping."
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-emerald-100 text-emerald-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      case "High": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Investment Opportunities</h1>
          <p className="text-gray-600">Browse available investment slots in upcoming projects</p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {opportunities.map((opp) => (
            <Card key={opp.id} className="overflow-hidden border-2 hover:shadow-2xl transition-all">
              {/* Image Gallery */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={opp.images[0]}
                  alt={opp.address}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getRiskColor(opp.riskLevel)}>
                    {opp.riskLevel} Risk
                  </Badge>
                  <Badge className="bg-gold text-white">
                    {opp.spotsRemaining} Spots Left
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Address */}
                <div className="mb-4">
                  <h3 className="font-bold text-xl text-navy mb-1">
                    {opp.address}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{opp.city}</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">{opp.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">{opp.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">{opp.sqft} sqft</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {opp.description}
                </p>

                {/* Financial Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Purchase Price</div>
                    <div className="font-bold text-navy">${opp.purchasePrice.toLocaleString()}</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Renovation Budget</div>
                    <div className="font-bold text-navy">${opp.renovationBudget.toLocaleString()}</div>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Target Sale Price</div>
                    <div className="font-bold text-emerald-600">${opp.targetSale.toLocaleString()}</div>
                  </div>
                  <div className="p-3 bg-gold-muted rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Projected ROI</div>
                    <div className="font-bold text-gold">{opp.projectedROI}%</div>
                  </div>
                </div>

                {/* Investment Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Funding Progress</span>
                    <span className="font-semibold text-navy">
                      ${opp.raised.toLocaleString()} / ${opp.targetRaise.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                      className="bg-gold h-2 rounded-full transition-all"
                      style={{ width: `${(opp.raised / opp.targetRaise) * 100}%` }}
                  />
                  </div>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gold" />
                    <div>
                      <div className="text-xs text-gray-600">Min. Investment</div>
                      <div className="font-semibold text-navy">${opp.minInvestment.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <div>
                      <div className="text-xs text-gray-600">Timeline</div>
                      <div className="font-semibold text-navy">{opp.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold" />
                    <div>
                      <div className="text-xs text-gray-600">Spots Left</div>
                      <div className="font-semibold text-navy">{opp.spotsRemaining}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-6">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Invest Now - ${opp.minInvestment.toLocaleString()} Min
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
