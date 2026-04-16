import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

interface SearchBarProps {
  onLocationChange: (location: string) => void;
}

const SearchBar = ({ onLocationChange }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onLocationChange(query);
    }
  };

  const addFavorite = () => {
    if (query.trim() && !favorites.includes(query)) {
      setFavorites([...favorites, query]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar ciudad, pueblo o coordenadas..."
          className="w-full p-3 pl-10 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <button
          type="button"
          onClick={addFavorite}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-yellow-500"
        >
          <Star size={20} />
        </button>
      </form>
      {favorites.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg p-2 z-10">
          <p className="text-xs text-gray-500 px-2 mb-1">Favoritos:</p>
          {favorites.map((fav) => (
            <button
              key={fav}
              onClick={() => { setQuery(fav); onLocationChange(fav); }}
              className="block w-full text-left p-2 hover:bg-gray-100 rounded"
            >
              {fav}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
