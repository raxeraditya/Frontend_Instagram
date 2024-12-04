import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
      />
    </div>
  );
};