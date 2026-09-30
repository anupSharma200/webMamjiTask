import React from 'react';

interface StoryCircleProps {
  name: string;
  imageUrl?: string;
  isNew?: boolean;
}

export default function StoryCircle({ name, imageUrl, isNew }: StoryCircleProps) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group">
      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] ${isNew ? 'border-2 border-orange-500' : 'border border-gray-600 group-hover:border-gray-400'}`}>
        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : null}
        </div>
      </div>
      <span className="text-xs text-gray-400">{name}</span>
    </div>
  );
}
