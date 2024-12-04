import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, MessageCircle, PlusSquare, Heart, User, Film } from 'lucide-react';

interface SidebarProps {
  onCreatePost?: () => void;
}

export const Sidebar = ({ onCreatePost }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Search', path: '/search' },
    { id: 'reels', icon: Film, label: 'Reels', path: '/reels' },
    { id: 'messages', icon: MessageCircle, label: 'Messages', path: '/messages' },
    { id: 'create', icon: PlusSquare, label: 'Create', action: onCreatePost },
    { id: 'notifications', icon: Heart, label: 'Notifications', path: '/notifications' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="hidden md:flex flex-col fixed h-screen w-64 border-r border-gray-200 p-5">
      <Link to="/" className="text-xl font-bold mb-8">Instagram</Link>
      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          if (item.action) {
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 w-full"
              >
                <Icon className="w-6 h-6" />
                <span>{item.label}</span>
              </button>
            );
          }
          return (
            <Link
              key={item.id}
              to={item.path!}
              className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 ${
                location.pathname === item.path ? 'font-semibold' : ''
              }`}
            >
              <Icon className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};