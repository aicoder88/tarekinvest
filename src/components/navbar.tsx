import Link from 'next/link'
import { createClient, isSupabaseConfigured } from '../../supabase/server'
import { Button } from './ui/button'
import { TrendingUp } from 'lucide-react'
import UserProfile from './user-profile'

export default async function Navbar() {
  const supabaseReady = isSupabaseConfigured()
  type SupabaseUser = Awaited<
    ReturnType<ReturnType<typeof createClient>['auth']['getUser']>
  >['data']['user']
  let user: SupabaseUser | null = null

  if (supabaseReady) {
    const supabase = createClient()
    const { data } = await supabase.auth.getUser()
    user = data.user
  }

  return (
    <nav className="w-full border-b border-slate-200/40 bg-white/70 backdrop-blur-xl py-5 sticky top-0 z-50 shadow-luxury transition-all duration-300 hover:shadow-luxury-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="flex items-center gap-3 group hover-glow rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all duration-300">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">TarekInvest</span>
        </Link>
        <div className="flex gap-8 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-200 relative group"
              >
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/opportunities"
                className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-200 relative group"
              >
                Opportunities
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </Link>
              <UserProfile  />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors duration-200 relative group"
              >
                Sign In
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/sign-up">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                  Become an Investor
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}