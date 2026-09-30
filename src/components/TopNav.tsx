import { Search, Bell, Plus } from 'lucide-react';
import Link from 'next/link';

export default function TopNav() {
  return (
    <header className="h-[70px] bg-black px-6 flex items-center justify-between border-b border-[#1A1A1A]">
      <div className="flex items-center">
        <button className="bg-gradient-to-r from-[#6D42FF] to-[#8B5CF6] hover:brightness-110 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-[0_0_20px_rgba(109,66,255,0.45)] flex items-center justify-center gap-1">
          <span>Upload video</span>
          <Plus size={14} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors text-gray-400">
          <Search size={18} />
        </div>

        <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors text-gray-400 relative">
          <Bell size={18} />

          <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#0A0A0A]">
            2
          </span>
        </div>

        <Link href="/profile" className="w-10 h-10 rounded-full overflow-hidden ml-2">
          <img
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </header>
  );
}
