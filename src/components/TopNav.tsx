import { Search, Bell, Plus } from 'lucide-react';
import Link from 'next/link';

export default function TopNav() {
  return (
    <header className="h-[70px] bg-black px-6 flex items-center justify-between border-b border-[#1A1A1A]">
      <div className="flex items-center">
        <button className="flex items-center gap-2 bg-[#1C1635] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#251D46] transition-colors">
          Upload video
          <Plus size={16} className="text-purple-400" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors text-gray-400">
          <Search size={18} />
        </div>

        {/* Notifications */}
        <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors text-gray-400 relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile */}
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
