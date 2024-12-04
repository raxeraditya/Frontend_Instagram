import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { MobileNav } from '../components/layout/MobileNav';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { ProfileGrid } from '../components/profile/ProfileGrid';
import type { Post } from '../types';

const MOCK_USER = {
  id: '1',
  username: 'john_doe',
  fullName: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
  isFollowing: false,
};

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    user: MOCK_USER,
    image: 'https://images.unsplash.com/photo-1612144431180-2d672779556c?w=600&h=600&fit=crop',
    caption: 'Beautiful sunset 🌅',
    likes: 123,
    hasLiked: false,
    comments: [],
    createdAt: new Date().toISOString(),
  },
  // Add more mock posts here
];

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-64 pb-16 md:pb-0">
        <div className="max-w-4xl mx-auto bg-white">
          <ProfileHeader
            user={MOCK_USER}
            postsCount={MOCK_POSTS.length}
            followersCount={1234}
            followingCount={567}
          />
          <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="p-4">
            <ProfileGrid posts={MOCK_POSTS} />
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};