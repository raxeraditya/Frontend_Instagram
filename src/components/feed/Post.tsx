import React from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import type { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
  onLike: (postId: string) => void;
}

export const Post = ({ post, onLike }: PostProps) => {
  return (
    <div className="border rounded-lg mb-6 bg-white">
      <div className="flex items-center p-4">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3 font-semibold">{post.user.username}</span>
      </div>

      <img src={post.image} alt="" className="w-full" />

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <button
              onClick={() => onLike(post.id)}
              className={`${post.hasLiked ? 'text-red-500' : 'text-black'}`}
            >
              <Heart className="w-6 h-6" />
            </button>
            <button>
              <MessageCircle className="w-6 h-6" />
            </button>
            <button>
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button>
            <Bookmark className="w-6 h-6" />
          </button>
        </div>

        <p className="font-semibold mb-1">{post.likes} likes</p>
        <p>
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </p>
        <p className="text-gray-500 text-sm mt-1">
          {formatDistanceToNow(new Date(post.createdAt))} ago
        </p>
      </div>
    </div>
  );
};