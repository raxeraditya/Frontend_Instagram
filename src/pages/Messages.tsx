import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { MobileNav } from '../components/layout/MobileNav';
import { ChatList } from '../components/chat/ChatList';
import { ChatWindow } from '../components/chat/ChatWindow';
import { MobileChatView } from '../components/chat/MobileChatView';
import type { User, Message } from '../types';

const MOCK_USERS: User[] = [
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
    isFollowing: true,
  },
];

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    sender: MOCK_USERS[0],
    content: 'Hey, how are you?',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    sender: MOCK_USERS[1],
    content: 'I\'m good, thanks! How about you?',
    createdAt: new Date().toISOString(),
  },
];

export const Messages = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const selectedUser = selectedUserId 
    ? MOCK_USERS.find(u => u.id === selectedUserId)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="md:ml-64 pb-16 md:pb-0">
        <div className="max-w-6xl mx-auto bg-white h-[calc(100vh-2rem)] my-4 rounded-lg shadow-sm">
          <div className="flex h-full">
            <div className={`w-full md:w-96 ${selectedUserId ? 'hidden md:block' : ''}`}>
              <ChatList users={MOCK_USERS} onSelectChat={setSelectedUserId} />
            </div>
            <div className="hidden md:block flex-1">
              {selectedUser ? (
                <ChatWindow 
                  user={selectedUser}
                  messages={MOCK_MESSAGES}
                />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  Select a chat to start messaging
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedUser && (
        <MobileChatView
          user={selectedUser}
          messages={MOCK_MESSAGES}
          onBack={() => setSelectedUserId(null)}
        />
      )}
      <MobileNav />
    </div>
  );
};