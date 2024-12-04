import React from 'react';
import { User } from '../../types';

interface ChatListProps {
  users: User[];
  onSelectChat: (userId: string) => void;
}

export const ChatList = ({ users, onSelectChat }: ChatListProps) => {
  return (
    <div className="border-r h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Messages</h2>
      </div>
      <div className="overflow-y-auto">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onSelectChat(user.id)}
            className="w-full p-4 flex items-center hover:bg-gray-50"
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4 text-left">
              <p className="font-semibold">{user.username}</p>
              <p className="text-sm text-gray-500">{user.fullName}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};