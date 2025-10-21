"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Home, 
  Calendar,
  ArrowUpRight,
  Eye,
  Download
} from "lucide-react";
import Link from "next/link";
import DashboardNavbar from "@/components/dashboard-navbar";

export default function DashboardPage() {
  // Mock data - will be replaced with real data from Supabase
  const portfolioData = {
    totalBalance: 127500,
    currentInvestments: 100000,
    totalReturns: 27500,
    projectedAnnualReturn: 0.47,
    activeInvestments: 3
  };

  const investments = [
    {
      id: 1,
      address: "1234 Oakwood Drive",
      city: "Austin, TX",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
      investmentAmount: 50000,
      currentValue: 62500,
      status: "In Renovation",
      progress: 65,
      expectedReturn: 25000,
      returnPercentage: 50,
      completionDate: "2024-06-15"
    },
    {
      id: 2,
      address: "5678 Maple Street",
      city: "Dallas, TX",
      thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
      investmentAmount: 30000,
      currentValue: 33000,
      status: "Listed for Sale",
      progress: 90,
      expectedReturn: 13500,
      returnPercentage: 45,
      completionDate: "2024-05-01"
    },
    {
      id: 3,
      address: "9012 Pine Avenue",
      city: "Houston, TX",
      thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
      investmentAmount: 20000,
      currentValue: 22000,
      status: "Acquisition",
      progress: 25,
      expectedReturn: 9000,
      returnPercentage: 45,
      completionDate: "2024-08-30"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Renovation": return "bg-blue-100 text-blue-700";
      case "Listed for Sale": return "bg-emerald-100 text-emerald-700";
      case "Acquisition": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Welcome back, Investor!</h1>
          <p className="text-gray-600">Here's your portfolio overview</p>
        </div>

        {/* Portfolio Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gold-muted rounded-lg">
                <DollarSign className="w-6 h-6 text-gold" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-navy mb-1">
              ${portfolioData.totalBalance.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Account Balance</div>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-navy mb-1">
              ${portfolioData.currentInvestments.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Current Investments</div>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-1">
              +${portfolioData.totalReturns.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Returns Earned</div>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow bg-gradient-to-br from-gold-muted to-amber-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white rounded-lg">
                <TrendingUp className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div className="text-3xl font-bold text-navy mb-1">
              {(portfolioData.projectedAnnualReturn * 100).toFixed(0)}%
            </div>
            <div className="text-sm text-gray-600">Projected Annual Return</div>
          </Card>
        </div>

        {/* Active Investments Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-navy">Active Investments</h2>
            <Link href="/opportunities">
              <Button variant="gold">
                Browse New Opportunities
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {investments.map((investment) => (
              <Card key={investment.id} className="overflow-hidden border-2 hover:shadow-xl transition-all">
                {/* Property Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={investment.thumbnail}
                    alt={investment.address}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(investment.status)}`}>
                    {investment.status}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-navy mb-1">
                    {investment.address}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{investment.city}</p>

                  {/* Investment Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Your Investment</span>
                      <span className="font-semibold text-navy">
                        ${investment.investmentAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current Value</span>
                      <span className="font-semibold text-emerald-600">
                        ${investment.currentValue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Expected Return</span>
                      <span className="font-semibold text-gold">
                        +${investment.expectedReturn.toLocaleString()} ({investment.returnPercentage}%)
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-navy">{investment.progress}%</span>
                    </div>
                    <Progress value={investment.progress} className="h-2" />
                  </div>

                  {/* Completion Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Expected: {new Date(investment.completionDate).toLocaleDateString()}</span>
                  </div>

                  {/* Action Button */}
                  <Link href={`/investment/${investment.id}`}>
                    <Button variant="outline" className="w-full border-2">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <Download className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-bold text-navy mb-2">Download Statements</h3>
            <p className="text-sm text-gray-600">Access your monthly investment statements and tax documents</p>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <TrendingUp className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-bold text-navy mb-2">Transaction History</h3>
            <p className="text-sm text-gray-600">View all your deposits, withdrawals, and earnings</p>
          </Card>

          <Card className="p-6 border-2 hover:shadow-lg transition-shadow cursor-pointer">
            <Home className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-bold text-navy mb-2">Browse Opportunities</h3>
            <p className="text-sm text-gray-600">Discover new investment opportunities with high returns</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
