import Image from 'next/image';
import { Share2, Video, Globe, PlayCircle, PlusSquare } from 'lucide-react';
import StatBadge from '@/components/StatBadge';
import StoryCircle from '@/components/StoryCircle';
import VideoCard from '@/components/VideoCard';
import statusImg from '@/assets/status.png';
import addStoryImg from '@/assets/addstory.png';

import shortimg from '@/assets/shortimg.png';

export default function ProfileScreen() {
  const dummyStories = [
    { name: 'John Deo', isNew: true, imageUrl: statusImg.src },
    { name: 'John Deo', isNew: true, imageUrl: statusImg.src },
    { name: 'John Deo', isNew: true, imageUrl: statusImg.src },
    { name: 'John Deo', isNew: true, imageUrl: statusImg.src },
    { name: 'John Deo', isNew: true, imageUrl: statusImg.src },
    { name: 'John Deo', isNew: true, imageUrl: statusImg.src },
    { name: 'John Deo', isNew: true, imageUrl: statusImg.src },
  ];

  const dummyVideos = Array(8).fill({
    title: 'The Handmaid...',
    description: 'This is why I fell in love with him, because he loves her as much as I do.',
    views: '3.1M',
    badge: 'S',
    thumbnailUrl: shortimg
  });

  const categories = ['Traveling', 'Corporate Life', 'Couples', 'Trending Topic', 'Festival', 'Music listening', 'Reading time', 'Onlyfans'];

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Left Column (Main Content) */}
      <div className="flex-1 border-r border-[#1A1A1A] overflow-y-auto">
        {/* Cover Photo Area */}
        <div className="relative h-48 sm:h-64 bg-gradient-to-r from-purple-900/50 to-black overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          {/* Action Buttons */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-2 sm:gap-3">
            <button className="bg-[#6B46C1] hover:bg-[#553C9A] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Follow
            </button>
            <button className="bg-black/50 backdrop-blur border border-white/10 hover:bg-black/70 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors hidden sm:block">
              Message
            </button>
            <button className="bg-black/50 backdrop-blur border border-white/10 hover:bg-black/70 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors hidden sm:block">
              Gift
            </button>
          </div>

          {/* Avatar and Name */}
          <div className="absolute bottom-0 left-4 sm:left-8 translate-y-1/2 flex items-end gap-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-black bg-black flex items-center justify-center overflow-hidden">
              <span className="text-white text-2xl sm:text-3xl font-bold">X</span>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-4 sm:px-8 mt-12 sm:mt-14">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Stas Neprokin <span className="text-yellow-500 text-lg">✓</span>
              </h1>
              <p className="text-green-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Available Now
              </p>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm bg-[#111] sm:bg-transparent p-3 sm:p-0 rounded-xl w-full sm:w-auto justify-around sm:justify-start">
              <div className="text-center"><span className="font-bold text-white">143</span> <span className="text-gray-400">Following</span></div>
              <div className="text-center"><span className="font-bold text-white">149</span> <span className="text-gray-400">View</span></div>
              <div className="text-center"><span className="font-bold text-white">149</span> <span className="text-gray-400">Likes</span></div>
              <button className="text-gray-400 hover:text-white hidden sm:block"><Share2 size={18} /></button>
            </div>
          </div>

          <p className="text-gray-300 mt-4 sm:mt-6 text-xs sm:text-sm">
            SpaceX designs, manufactures and launches the world's most advanced rockets and spacecraft.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 text-xs sm:text-sm">
            <span className="bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/50">2 Free Playlists</span>
            <span className="bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/50">4 Paid Playlists</span>
            <span className="text-gray-400 flex items-center gap-1"><Globe size={14} /> Earth</span>
            <span className="text-gray-400 hidden sm:block">Joined April 2009</span>
            <a href="#" className="text-blue-400 hover:underline">spacex.com</a>
          </div>

          {/* Stories row */}
          <div className="flex gap-4 mt-6 sm:mt-8 pb-4 overflow-x-auto no-scrollbar">
            {/* Create new */}
            <div className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer w-[64px] sm:w-[80px]">
              <Image src={addStoryImg} alt="Create new story" className="w-full h-auto object-contain" />
            </div>

            {/* User Stories (10 times) */}
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer w-[64px] sm:w-[80px]">
                <Image src={statusImg} alt={`User story ${i + 1}`} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#1A1A1A] mt-2 sm:mt-4 overflow-x-auto no-scrollbar">
            <button className="flex-1 min-w-[100px] py-4 text-gray-400 text-sm sm:text-base font-medium hover:text-white transition-colors">Long video</button>
            <button className="flex-1 min-w-[100px] py-4 text-white text-sm sm:text-base font-medium border-b-2 border-purple-500">Short video</button>
            <button className="flex-1 min-w-[100px] py-4 text-gray-400 text-sm sm:text-base font-medium hover:text-white transition-colors">Playlist</button>
            <button className="flex-1 min-w-[100px] py-4 text-gray-400 text-sm sm:text-base font-medium hover:text-white transition-colors">Guestbook</button>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6 pb-20">
            {dummyVideos.map((vid, i) => (
              <VideoCard 
                key={i}
                title={vid.title}
                description={vid.description}
                views={vid.views}
                badge={vid.badge}
                thumbnailUrl={vid.thumbnailUrl}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column (Sidebar Stats) - Hidden on Mobile */}
      <div className="w-96 bg-[#0A0A0A] border-l border-[#1F1F1F] p-6 overflow-y-auto hidden xl:block shrink-0">
        <h2 className="text-white font-bold text-lg mb-6">About Your Profile</h2>
        
        <div className="grid grid-cols-2 gap-3 mb-10">
          <StatBadge icon="📊" value="63.5M" label="Views" className="bg-[#1A1528] border-indigo-900/50 rounded-[15px]" />
          <StatBadge icon="❤️" value="1.2M" label="Likes" className="bg-[#1A1528] border-indigo-900/50 rounded-[15px]" />
          <StatBadge icon="👁️" value="1.6M" label="Visits" className="bg-[#1A1528] border-indigo-900/50 rounded-[15px]" />
          <StatBadge icon="🔗" value="1.4M" label="Shares" className="bg-[#1A1528] border-indigo-900/50 rounded-[15px]" />
          <StatBadge icon={<Video size={14} />} value="1,189" label="videos" className="col-span-2 bg-[#1A1528] border-indigo-900/50 rounded-[15px]" />
        </div>

        <h2 className="text-white font-bold text-lg mb-4">Your videos Categories</h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className="w-full bg-[#1A1528] text-indigo-300 border border-indigo-900/50 py-[3px] px-4 rounded-[15px] text-sm font-medium hover:bg-[#251D3A] transition-colors cursor-pointer whitespace-nowrap overflow-hidden truncate text-center"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
