import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, MessageCircle, PlusSquare, User, Film } from 'lucide-react';

interface MobileNavProps {
  onCreatePost?: () => void;
}

export const MobileNav = ({ onCreatePost }: MobileNavProps) => {
  const location = useLocation();
  
  const menuItems = [
    { id: 'home', icon: Home, path: '/' },
    { id: 'search', icon: Search, path: '/search' },
    { id: 'reels', icon: Film, path: '/reels' },
    { id: 'create', icon: PlusSquare, action: onCreatePost },
    { id: 'profile', icon: User, path: '/profile' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <nav className="flex justify-around p-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          if (item.action) {
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="p-2 text-gray-500"
              >
                <Icon className="w-6 h-6" />
              </button>
            );
          }
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`p-2 ${location.pathname === item.path ? 'text-black' : 'text-gray-500'}`}
            >
              <Icon className="w-6 h-6" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};