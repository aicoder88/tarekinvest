'use client';

import { useEffect, useState } from 'react';

export default function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full border-b py-5 sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-slate-200/60 bg-white/90 backdrop-blur-strong shadow-luxury-lg'
          : 'border-slate-200/40 bg-white/70 backdrop-blur-xl shadow-luxury'
      }`}
    >
      {children}
    </nav>
  );
}
