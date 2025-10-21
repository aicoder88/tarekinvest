import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/opportunities" className="text-gray-300 hover:text-gold-soft">Investment Opportunities</Link></li>
              <li><Link href="/dashboard" className="text-gray-300 hover:text-gold-soft">Dashboard</Link></li>
              <li><Link href="#how-it-works" className="text-gray-300 hover:text-gold-soft">How It Works</Link></li>
              <li><Link href="#calculator" className="text-gray-300 hover:text-gold-soft">ROI Calculator</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-gold-soft">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-gold-soft">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-gold-soft">Investment Disclaimer</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-gold-soft">SEC Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p className="mb-2">
            © {currentYear} TarekInvest. All rights reserved.
          </p>
          <p className="text-xs">
            Investment involves risk. Past performance does not guarantee future results. Please read all investment disclaimers carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}
