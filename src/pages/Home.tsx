import React, { useState } from 'react';
import { Post } from '../components/feed/Post';
import { Stories } from '../components/feed/Stories';
import { Sidebar } from '../components/layout/Sidebar';
import { MobileNav } from '../components/layout/MobileNav';
import { UserSuggestions } from '../components/suggestions/UserSuggestions';
import { CreatePostModal } from '../components/modals/CreatePostModal';

const MOCK_USERS = [
  {
    id: '1',
    username: 'john_doe',
    fullName: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    isFollowing: true,
  },
  {
    id: '2',
    username: 'jane_smith',
    fullName: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    isFollowing: false,
  },
];

const MOCK_POSTS = Array(10).fill(null).map((_, index) => ({
  id: String(index + 1),
  user: MOCK_USERS[index % 2],
  image: `https://images.unsplash.com/photo-${1612144431180 + index}?w=600&h=600&fit=crop`,
  caption: 'Beautiful moment ✨',
  likes: Math.floor(Math.random() * 1000),
  hasLiked: false,
  comments: [],
  createdAt: new Date().toISOString(),
}));

export const Home = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  
  const handleLike = (postId: string) => {
    console.log('Liked post:', postId);
  };

  const handleFollow = (userId: string) => {
    console.log('Following user:', userId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar onCreatePost={() => setIsCreateModalOpen(true)} />
      <div className="md:ml-64 pb-16 md:pb-0">
        <div className="max-w-[470px] lg:max-w-[821px] mx-auto py-8 px-4">
          <div className="flex gap-8">
            <div className="w-[470px] mx-auto">
              <Stories users={MOCK_USERS} />
              {MOCK_POSTS.map((post) => (
                <Post key={post.id} post={post} onLike={handleLike} />
              ))}
            </div>
            <UserSuggestions users={MOCK_USERS} onFollow={handleFollow} />
          </div>
        </div>
      </div>
      <MobileNav onCreatePost={() => setIsCreateModalOpen(true)} />
      <CreatePostModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
    </div>
  );
};