import { useState } from 'react';

const STORIES = [
  {
    id: 1,
    username: 'johndoe',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    username: 'janedoe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    username: 'mike_smith',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    username: 'sarah_parker',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    username: 'chris_evans',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  }
];

export default function Stories() {
  return (
    <div className="flex space-x-4 p-4 bg-white border border-gray-200 rounded-lg overflow-x-auto">
      {STORIES.map((story) => (
        <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
            <div className="p-[2px] rounded-full bg-white">
              <img
                src={story.avatar}
                alt={story.username}
                className="w-14 h-14 rounded-full cursor-pointer"
              />
            </div>
          </div>
          <span className="text-xs">{story.username}</span>
        </div>
      ))}
    </div>
  );
}