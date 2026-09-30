import React from 'react';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  views: string;
  badge?: string;
  thumbnailUrl: any; // Allow Next.js image object
}

export default function VideoCard({ title, description, views, badge, thumbnailUrl }: VideoCardProps) {
  return (
    <div className="aspect-[9/16] bg-gray-900 rounded-xl relative overflow-hidden group cursor-pointer">
      <Image 
        src={thumbnailUrl} 
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      
      {/* <div className="absolute top-2 left-2 text-xs font-bold text-white">{views} views</div> */}
      {/* {badge && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white">
          {badge}
        </div>
      )} */}
      
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
        <p className="text-[10px] sm:text-xs text-gray-300 line-clamp-2">{description}</p>
        <p className="text-xs sm:text-sm font-bold text-white mt-1 line-clamp-1">{title}</p>
      </div>
    </div>
  );
}
