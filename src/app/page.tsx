import { Share2, Video, Globe, PlayCircle, PlusSquare } from 'lucide-react';
import StatBadge from '@/components/StatBadge';
import StoryCircle from '@/components/StoryCircle';
import VideoCard from '@/components/VideoCard';
import shortimg from '@/assets/shortimg.png';
import statusImg from '@/assets/status.png';
import xImg from '@/assets/x.png';
import Image from 'next/image';
import addStoryImg from '@/assets/addstory.png';
import Tick from  '@/assets/tick.png';
import Space from '@/assets/space.png';
import join from '@/assets/join.png';

export default function Home() {

  const dummyStories = [
    { name: 'John Deo', isNew: true },
    { name: 'John Deo', isNew: true },
    { name: 'John Deo', isNew: true },
    { name: 'John Deo', isNew: true },
    { name: 'John Deo', isNew: true },
    { name: 'John Deo', isNew: true },
    { name: 'John Deo', isNew: true },
  ];
const stats = [
  { icon: "📊", value: "63.5M", label: "Views" },
  { icon: "❤️", value: "1.2M", label: "Likes" },
  { icon: "👁️", value: "1.6M", label: "Visits" },
  { icon: "🔗", value: "1.4M", label: "Shares" },
  { icon: "🎥", value: "1,189", label: "videos" },
];
  const dummyVideos = Array(8).fill({
    // title: 'The Handmaid...',
    // views: '3.1M',
    badge: 'S',
  thumbnailUrl: shortimg
  });

  const categories = ['Traveling', 'Corporate Life', 'Couples', 'Trending Topic', 'Festival', 'Music listening', 'Reading time', 'Onlyfans'];

  return (
    <div className="flex flex-col lg:flex-row hfull">
      {/* Left Column (Main Content) */}
      <div className="flex-1 border-r border-[#1A1A1A] overflow-y-auto">
        {/* Cover Photo Area */}
        <div className="relative h-45 sm:h-60 bg-gradient-to-r from-purple-900/50 to-black overflow-hidden mb-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative z-10 h-full px-4 sm:px-8 flex items-start justify-between">
            <div className="h-full flex items-center pb-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-black bg-black flex items-center justify-center overflow-hidden shadow-lg">
                <Image src={xImg} alt="X logo" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3 pt-4 sm:pt-6">
              <button className="bg-gradient-to-r from-[#6D42FF] to-[#8B5CF6] hover:brightness-110 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-[0_0_20px_rgba(109,66,255,0.45)]">
                Follow
              </button>
              <button className="hidden sm:inline-flex bg-gradient-to-b from-[#333] to-[#111] border border-[#444] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.06)] hover:from-[#444] hover:to-[#151515]">
                Message
              </button>
              <button className="hidden sm:inline-flex bg-gradient-to-b from-[#333] to-[#111] border border-[#444] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-[inset_0_2px_4px_rgba(255,255,255,0.06)] hover:from-[#444] hover:to-[#151515]">
                Gift
              </button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-4 sm:px-8 mt-5" >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
            
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                Stas Neprokin
                <Image src={Tick} alt="Verified" width={16} height={16} className="w-5 h-5 object-contain" />
              </h1>
              <p className="text-green-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Available Now
              </p>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-around sm:justify-start">
              <div className="flex items-center gap-2 sm:gap-3 bg-[#111] border border-[#1F1F1F] rounded-full py-2 px-3 sm:px-4 w-full sm:w-auto">
                <div className="flex-1 min-w-0 flex items-center justify-center gap-1 text-center px-1">
                  <span className="font-bold text-white text-[11px] sm:text-xs">143</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 whitespace-nowrap">Following</span>
                </div>
                <div className="h-4 w-px bg-[#2A2A2A]" />
                <div className="flex-1 min-w-0 flex items-center justify-center gap-1 text-center px-1">
                  <span className="font-bold text-white text-[11px] sm:text-xs">149</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 whitespace-nowrap">View</span>
                </div>
                <div className="h-4 w-px bg-[#2A2A2A]" />
                <div className="flex-1 min-w-0 flex items-center justify-center gap-1 text-center px-1">
                  <span className="font-bold text-white text-[11px] sm:text-xs">149</span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 whitespace-nowrap">Likes</span>
                </div>
              </div>
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#2A2A2A] bg-[#111] text-gray-300 flex items-center justify-center hover:text-white transition-colors shrink-0">
                <Share2 size={15} />
              </button>
            </div>
          </div>

          <p className="text-gray-300 mt-4 sm:mt-6 text-xs sm:text-sm">
            SpaceX designs, manufactures and launches the world's most advanced rockets and spacecraft.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 text-xs sm:text-sm">
            <span className="bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/50">2 Free Playlists</span>
            <span className="bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800/50">4 Paid Playlists</span>
            <span className="text-gray-400 flex items-center gap-1"><Globe size={14} /> Earth</span>
            <span className="text-gray-400 hidden sm:flex items-center gap-1">
              <Image src={join} alt="Joined" width={13} height={13} className="w-3 h-3 object-contain" />
              Joined April 2009
            </span>
            <a href="#" className="text-blue-400 hover:underline flex items-center gap-1">
              <Image src={Space} alt="SpaceX" width={16} height={16} className="w-3 h-3 object-contain" />
              spacex.com
            </a>
          </div>


          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-3 text-xs sm:text-sm">

   <a href="#" className="text-blue-400 hover:underline flex items-center gap-1">
              <Image src={Space} alt="SpaceX" width={16} height={16} className="w-3 h-3 object-contain" />
              spacex.com
            </a>
             <a href="#" className="text-blue-400 hover:underline flex items-center gap-1">
              <Image src={Space} alt="SpaceX" width={16} height={16} className="w-3 h-3 object-contain" />
              spacex.com
            </a>
             <a href="#" className="text-blue-400 hover:underline flex items-center gap-1">
              <Image src={Space} alt="SpaceX" width={16} height={16} className="w-3 h-3 object-contain" />
              spacex.com
            </a>
          </div>
      {/* Stories row */}
<div className="flex gap-4 mt-2  pb-4 overflow-x-auto no-scrollbar">
  
  {/* Create new */}
  <div className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer w-[64px] sm:w-[80px]">
    <Image src={addStoryImg} alt="Create new story" className="w-full h-auto object-contain" />
    <span className="text-xs text-white mt-1">Create new</span>
  </div>

  {/* User Stories (10 times) */}
  {Array(10).fill(0).map((_, i) => (
    <div
      key={i}
      className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer w-[64px] sm:w-[80px]"
    >
      <div className="relative w-full">
        <Image
          src={statusImg}
          alt={`User story ${i + 1}`}
          className="w-full h-auto object-contain rounded-xl"
        />

        <button className="absolute bottom-2 right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center">
          <span className="text-white text-[14px]">🔥</span>
        </button>
      </div>

      <span className="text-xs text-white">
        John Deo
      </span>
    </div>
  ))}
</div>

          {/* Tabs */}
          <div className="flex border-b border-[#1A1A1A] mt-1 sm:mt-4 overflow-x-auto no-scrollbar">
            <button className="flex-1 min-w-[100px] py-4 text-gray-400 text-sm sm:text-base font-medium hover:text-white transition-colors">Long video</button>
            <button className="flex-1 min-w-[100px] py-4 text-white text-sm sm:text-base font-medium border-b-2 border-purple-500">Short video</button>
            <button className="flex-1 min-w-[100px] py-4 text-gray-400 text-sm sm:text-base font-medium hover:text-white transition-colors">Playlist</button>
            <button className="flex-1 min-w-[100px] py-4 text-gray-400 text-sm sm:text-base font-medium hover:text-white transition-colors">Guestbook</button>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6 pb-20">
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
      <div className="w-96 bg-[#0A0A0A] border-l border-[#1F1F1F] p-5 pt-6 overflow-y-auto hidden xl:block shrink-0">
        <h2 className="text-white font-bold  mb-4">About Your Profile</h2>
        
        <div className="grid grid-cols-2 gap-3 mb-10">
         {stats.map((stat) => (
  <button
    key={stat.label}
    className="w-full flex items-center justify-center text-left text-sm sm:text-[12px] gap-2 py-2 px-4 rounded-[15px] transition-all bg-gradient-to-b from-[#333] to-[#111] border border-[#444] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] hover:from-[#444] hover:to-[#151515]"
  >
    <span>{stat.icon}</span>
    <span className="font-semibold">{stat.value}</span>
    <span className="text-gray-300">{stat.label}</span>
  </button>
))}
        </div>

        <h2 className="text-white font-bold  mb-4">Your videos Categories</h2>

       <div className="flex flex-wrap gap-1">
  {categories.map((cat) => (
    <button
      key={cat}
      className="w-fit bg-[#1A1528] text-indigo-300 text-[12px] border border-indigo-900/50 py-[3px] px-4 rounded-[15px] text-sm font-medium hover:bg-[#251D3A] transition-colors cursor-pointer whitespace-nowrap"
    >
      {cat}
    </button>
  ))}
</div>
      </div>
    </div>
  );
}

