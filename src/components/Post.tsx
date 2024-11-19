import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface PostProps {
  username: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
}

export default function Post({ username, userImage, image, caption, likes }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <img src={userImage} alt={username} className="w-8 h-8 rounded-full" />
          <span className="font-semibold">{username}</span>
        </div>
        <MoreHorizontal className="w-5 h-5 cursor-pointer" />
      </div>

      <img src={image} alt="Post" className="w-full object-cover max-h-[600px]" />

      <div className="p-3">
        <div className="flex justify-between items-center mb-3">
          <div className="flex space-x-4">
            <Heart
              className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform ${
                isLiked ? 'fill-red-500 stroke-red-500' : ''
              }`}
              onClick={() => setIsLiked(!isLiked)}
            />
            <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <Send className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
          <Bookmark
            className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform ${
              isSaved ? 'fill-black' : ''
            }`}
            onClick={() => setIsSaved(!isSaved)}
          />
        </div>

        <div className="font-semibold mb-2">{likes.toLocaleString()} likes</div>
        <div>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </div>
        
        <div className="mt-2 text-gray-500 text-sm">View all 123 comments</div>
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full mt-3 outline-none text-sm"
        />
      </div>
    </div>
  );
}