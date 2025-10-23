import Link from 'next/link';
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-gold-soft" />
              <span className="text-2xl font-bold">TarekInvest</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Building wealth through strategic real estate investments. Join hundreds of investors earning consistent returns.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-soft" />
                <span>invest@tarekinvest.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-soft" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link href="/opportunities" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">Investment Opportunities</Link></li>
              <li><Link href="/dashboard" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">Dashboard</Link></li>
              <li><Link href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">How It Works</Link></li>
              <li><Link href="#calculator" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm md:text-base">Legal</h3>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">Investment Disclaimer</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm md:text-base">SEC Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 text-center text-xs md:text-sm text-gray-400">
          <p className="mb-3 font-semibold">
            © {currentYear} TarekInvest. All rights reserved.
          </p>
          <p className="text-xs leading-relaxed">
            Investment involves risk. Past performance does not guarantee future results. Please read all investment disclaimers carefully.
          </p>
          {/* Social links placeholder */}
          <div className="mt-4 flex justify-center gap-4">
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
