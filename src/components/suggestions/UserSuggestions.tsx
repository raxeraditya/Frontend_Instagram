import React from 'react';
import type { User } from '../../types';

interface UserSuggestionsProps {
  users: User[];
  onFollow: (userId: string) => void;
}

export const UserSuggestions = ({ users, onFollow }: UserSuggestionsProps) => {
  return (
    <div className="hidden lg:block w-80 ml-8">
      <div className="fixed w-80">
        <h3 className="text-gray-500 font-semibold text-sm mb-4">
          Suggestions For You
        </h3>
        <div className="space-y-3">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold">{user.username}</p>
                  <p className="text-xs text-gray-500">{user.fullName}</p>
                </div>
              </div>
              <button
                onClick={() => onFollow(user.id)}
                className="text-xs font-semibold text-blue-500 hover:text-blue-700"
              >
                {user.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};