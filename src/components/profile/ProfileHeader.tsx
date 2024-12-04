import React from 'react';
import { Settings, Grid, Bookmark, UserCheck } from 'lucide-react';
import type { User } from '../../types';

interface ProfileHeaderProps {
  user: User;
  postsCount: number;
  followersCount: number;
  followingCount: number;
}

export const ProfileHeader = ({ user, postsCount, followersCount, followingCount }: ProfileHeaderProps) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-20 h-20 md:w-32 md:h-32 rounded-full"
          />
          <div className="md:hidden">
            <h1 className="text-xl font-semibold">{user.username}</h1>
            <p className="text-gray-600">{user.fullName}</p>
          </div>
        </div>
        <button className="md:hidden">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden md:block mb-8">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-semibold">{user.username}</h1>
          <button className="px-6 py-1.5 bg-gray-100 rounded-lg font-semibold">
            Edit Profile
          </button>
          <Settings className="w-6 h-6" />
        </div>
        <div className="mt-4">
          <p className="font-semibold">{user.fullName}</p>
          <p className="text-gray-600 mt-1">Digital creator</p>
        </div>
      </div>

      <div className="flex justify-around md:justify-start md:space-x-12 border-t border-b py-3 mb-4 text-sm">
        <div className="text-center md:text-left">
          <span className="font-semibold block">{postsCount}</span>
          <span className="text-gray-600">posts</span>
        </div>
        <div className="text-center md:text-left">
          <span className="font-semibold block">{followersCount}</span>
          <span className="text-gray-600">followers</span>
        </div>
        <div className="text-center md:text-left">
          <span className="font-semibold block">{followingCount}</span>
          <span className="text-gray-600">following</span>
        </div>
      </div>
    </div>
  );
};