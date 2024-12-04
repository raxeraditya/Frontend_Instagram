import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { User, Message } from '../../types';
import { formatDistanceToNow } from 'date-fns';

interface ChatWindowProps {
  user: User;
  messages: Message[];
}

export const ChatWindow = ({ user, messages }: ChatWindowProps) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
          <span className="ml-3 font-semibold">{user.username}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender.id === user.id ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender.id === user.id
                  ? 'bg-gray-100'
                  : 'bg-blue-500 text-white'
              }`}
            >
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {formatDistanceToNow(new Date(message.createdAt))} ago
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-full focus:outline-none focus:border-gray-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 text-blue-500 hover:text-blue-600"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};