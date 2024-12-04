import React from 'react';
import { Grid, Bookmark, UserCheck } from 'lucide-react';

interface Tab {
  icon: React.ElementType;
  label: string;
  id: string;
}

const tabs: Tab[] = [
  { icon: Grid, label: 'Posts', id: 'posts' },
  { icon: Bookmark, label: 'Saved', id: 'saved' },
  { icon: UserCheck, label: 'Tagged', id: 'tagged' },
];

export const ProfileTabs = ({ activeTab, onTabChange }: { activeTab: string; onTabChange: (id: string) => void }) => {
  return (
    <div className="border-t">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 ${
                activeTab === tab.id
                  ? 'border-t-2 border-black -mt-[1px]'
                  : 'text-gray-500'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};