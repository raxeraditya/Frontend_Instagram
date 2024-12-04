import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import type { User, Message } from '../../types';

interface MobileChatViewProps {
  user: User;
  messages: Message[];
  onBack: () => void;
}

export const MobileChatView = ({ user, messages, onBack }: MobileChatViewProps) => {
  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
          <span className="ml-3 font-semibold">{user.username}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatWindow user={user} messages={messages} />
        </div>
      </div>
    </div>
  );
};