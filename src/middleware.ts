import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Geo-targeting logic (inspired by GetStake pattern)
  // Detect user's country/region from CloudFlare headers (available on Vercel)
  const country = req.headers.get('cf-ipcountry') || req.headers.get('x-vercel-ip-country')

  // Set geo-location for analytics and personalization
  if (country) {
    res.headers.set('X-User-Country', country)
  }

  // Optional: Redirect Middle East visitors to localized experience
  // const meCountries = ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'JO']
  // if (meCountries.includes(country) && !req.nextUrl.pathname.startsWith('/mena')) {
  //   return NextResponse.redirect(new URL('/mena', req.url))
  // }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll().map(({ name, value }) => ({
            name,
            value,
          }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            req.cookies.set(name, value)
            res.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // Refresh session if expired - required for Server Components
  const { data: { session }, error } = await supabase.auth.getSession()

  if (error) {
    console.error('Auth session error:', error)
  }

  // Store country in cookie for client-side access if needed
  if (country) {
    res.cookies.set('user-country', country, {
      maxAge: 31536000, // 1 year
      httpOnly: false,
      sameSite: 'lax',
    })
  }

  return res
}

// Ensure the middleware is only called for relevant paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
}
