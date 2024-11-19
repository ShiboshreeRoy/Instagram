import { Search, Heart, MessageCircle, PlusSquare, Home, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold">Instagram</div>
        
        <div className="hidden md:block flex-1 max-w-xs mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-lg py-1.5 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Search className="absolute left-3 top-2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <nav className="flex items-center space-x-5">
          <Home className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <PlusSquare className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <Heart className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-7 h-7 rounded-full cursor-pointer border border-gray-200"
          />
        </nav>
      </div>
    </header>
  );
}