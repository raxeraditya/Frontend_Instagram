import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import type { Post } from '../../types';

interface ProfileGridProps {
  posts: Post[];
}

export const ProfileGrid = ({ posts }: ProfileGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-6">
      {posts.map((post) => (
        <div key={post.id} className="relative aspect-square group">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-6 text-white">
              <div className="flex items-center space-x-1">
                <Heart className="w-6 h-6" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-6 h-6" />
                <span>{post.comments.length}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};