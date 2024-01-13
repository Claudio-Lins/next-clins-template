import { v4 as uuidV4 } from "uuid";
import { create } from "zustand";

interface Post {
  id: string;
  title: string;
}
interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
}

const myPosts = [
  {
    id: uuidV4(),
    title: "My first post",
  },
  {
    id: uuidV4(),
    title: "My second post",
  },
];

export const usePostStore = create<PostStore>((set) => ({
  posts: myPosts,
  addPost: (post) =>
    set((state) => ({
      posts: [...state.posts, post],
    })),
}));
