import React from 'react';
import type { User } from '../../types';

interface StoriesProps {
  users: User[];
}

export const Stories = ({ users }: StoriesProps) => {
  return (
    <div className="bg-white border rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {users.map((user) => (
          <div key={user.id} className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full ring-2 ring-pink-500 p-0.5">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <p className="text-xs text-center mt-1 truncate w-16">{user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};