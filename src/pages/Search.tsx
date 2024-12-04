import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { MobileNav } from '../components/layout/MobileNav';
import { SearchBar } from '../components/search/SearchBar';
import type { User } from '../types';

const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'john_doe',
    fullName: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    isFollowing: false,
  },
  {
    id: '2',
    username: 'jane_smith',
    fullName: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    isFollowing: true,
  },
];

export const Search = () => {
  const [searchResults, setSearchResults] = useState<User[]>(MOCK_USERS);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-64 pb-16 md:pb-0">
        <div className="max-w-3xl mx-auto p-4">
          <SearchBar />
          <div className="mt-6">
            {searchResults.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-white rounded-lg mb-2">
                <div className="flex items-center">
                  <img src={user.avatar} alt={user.username} className="w-12 h-12 rounded-full" />
                  <div className="ml-4">
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-gray-500 text-sm">{user.fullName}</p>
                  </div>
                </div>
                <button className={`px-4 py-1.5 rounded ${
                  user.isFollowing 
                    ? 'bg-gray-100 text-black' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {user.isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};