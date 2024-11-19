import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Post from './components/Post';
import Suggestions from './components/Suggestions';

const POSTS = [
  {
    id: 1,
    username: 'traveler_jane',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1000&h=800&fit=crop',
    caption: '✈️ Another beautiful sunset in paradise! #travel #adventure',
    likes: 1234
  },
  {
    id: 2,
    username: 'foodie_mike',
    userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=1000&h=800&fit=crop',
    caption: '🍝 Homemade pasta is the best pasta! #foodie #cooking',
    likes: 2345
  },
  {
    id: 3,
    username: 'photo_sarah',
    userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=1000&h=800&fit=crop',
    caption: '📸 Capturing moments that last forever #photography',
    likes: 3456
  }
];

function App() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <Header />
      
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6">
        <div className="md:col-span-2 space-y-4">
          <Stories />
          
          {POSTS.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>

        <div className="hidden md:block">
          <div className="fixed w-[350px]">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Your profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">johndoe</div>
                <div className="text-gray-500 text-sm">John Doe</div>
              </div>
              <button className="ml-auto text-sm font-semibold text-blue-500">
                Switch
              </button>
            </div>
            
            <Suggestions />
            
            <div className="mt-8 text-xs text-gray-400">
              © 2024 Instagram Clone from Bolt
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;