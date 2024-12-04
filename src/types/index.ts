export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  isFollowing: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  hasLiked: boolean;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: string;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  createdAt: string;
}