"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Grid, Lock, Hash, Clock, PlusSquare } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[70px] bg-[#0A0A0A] border-r border-[#1F1F1F] flex flex-col items-center py-6 h-full border-l-[3px] border-l-[#3B82F6]">
      {/* Logo */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
        <span className="text-white font-bold text-xl">S</span>
      </div>

      {/* Nav Icons */}
      <nav className="flex flex-col gap-6 flex-1 text-gray-500">
        <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'hover:text-white'}`}>
          <Home size={22} />
        </Link>
        <Link href="/profile" className={`transition-colors ${pathname === '/profile' ? 'text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]' : 'hover:text-white'}`}>
          <Compass size={22} />
        </Link>
        <button className="hover:text-white transition-colors">
          <Grid size={22} />
        </button>
        <button className="hover:text-white transition-colors">
          <Lock size={22} />
        </button>
        <button className="hover:text-white transition-colors">
          <Hash size={22} />
        </button>
        <button className="hover:text-white transition-colors">
          <Clock size={22} />
        </button>
      </nav>

      {/* Bottom Icons */}
      <div className="mt-auto">
        <button className="hover:text-white transition-colors text-gray-500">
          <PlusSquare size={22} />
        </button>
      </div>
    </div>
  );
}
