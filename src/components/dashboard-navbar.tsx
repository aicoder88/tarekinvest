'use client';

import Link from 'next/link'
import { Building2, Bell } from 'lucide-react'
import { Button } from './ui/button'
import UserProfile from './user-profile'
import { Badge } from './ui/badge'

export default function DashboardNavbar() {
  const supabaseReady = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-gold" />
          <span className="text-2xl font-bold text-navy">TarekInvest</span>
        </Link>
        
        <div className="flex gap-6 items-center">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-navy hover:text-gold"
          >
            Dashboard
          </Link>
          <Link
            href="/opportunities"
            className="text-sm font-medium text-gray-700 hover:text-navy"
          >
            Opportunities
          </Link>
          <Link
            href="/feed"
            className="text-sm font-medium text-gray-700 hover:text-navy"
          >
            Project Feed
          </Link>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-gold text-white text-xs">
              3
            </Badge>
          </Button>
          
          {supabaseReady ? <UserProfile /> : null}
        </div>
      </div>
    </nav>
  )
}
