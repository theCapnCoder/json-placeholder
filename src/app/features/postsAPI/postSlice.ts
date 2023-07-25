import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Post, Reactions } from "../posts/postSlice";

type InitialState = {
  posts: Post[],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null,
}

const initialState: InitialState = {
  posts: [],
  status: 'idle',
  error: null,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: parseInt(nanoid(), 36),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          },
        }
      }
    },
    reactionAdded: (state, action: PayloadAction<{ postId: number, reaction: keyof Reactions }>) => {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++  
      }
    }
  }
})

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;