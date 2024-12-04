import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { MobileNav } from '../components/layout/MobileNav';
import { Heart, MessageCircle, Send, MoreVertical } from 'lucide-react';

const MOCK_REELS = [
  {
    id: '1',
    user: {
      username: 'john_doe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    },
    video: 'https://example.com/video1.mp4',
    likes: 1234,
    comments: 89,
    caption: 'Amazing sunset view! 🌅 #nature #sunset',
  },
  // Add more mock reels
];

export const Reels = () => {
  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <div className="md:ml-64 h-screen">
        <div className="h-full snap-y snap-mandatory overflow-y-scroll">
          {MOCK_REELS.map((reel) => (
            <div key={reel.id} className="snap-start h-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white">Video Player Placeholder</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-start justify-between">
                  <div className="text-white">
                    <div className="flex items-center mb-4">
                      <img
                        src={reel.user.avatar}
                        alt={reel.user.username}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="ml-2 font-semibold">{reel.user.username}</span>
                    </div>
                    <p className="text-sm">{reel.caption}</p>
                  </div>
                  <div className="flex flex-col items-center gap-6">
                    <button className="text-white">
                      <Heart className="w-7 h-7" />
                      <span className="text-sm">{reel.likes}</span>
                    </button>
                    <button className="text-white">
                      <MessageCircle className="w-7 h-7" />
                      <span className="text-sm">{reel.comments}</span>
                    </button>
                    <button className="text-white">
                      <Send className="w-7 h-7" />
                    </button>
                    <button className="text-white">
                      <MoreVertical className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MobileNav />
    </div>
  );
};