import Link from 'next/link'
import { createClient, isSupabaseConfigured } from '../../supabase/server'
import { Button } from './ui/button'
import { Building2 } from 'lucide-react'
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
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-gold" />
          <span className="text-2xl font-bold text-navy">TarekInvest</span>
        </Link>
        <div className="flex gap-6 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-gray-700 hover:text-navy"
              >
                Dashboard
              </Link>
              <Link
                href="/opportunities"
                className="text-sm font-medium text-gray-700 hover:text-navy"
              >
                Opportunities
              </Link>
              <UserProfile  />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy"
              >
                Sign In
              </Link>
              <Link href="/sign-up">
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
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
