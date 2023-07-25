import { PayloadAction, createSlice, nanoid, createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { Post, Reactions } from "../posts/postSlice";
import { sub } from 'date-fns'
import axios, { AxiosError } from 'axios';
import { RootState } from "../../store";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

type InitialState = {
  posts: Post[],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: string | undefined,
}

const initialState: InitialState = {
  posts: [],
  status: 'idle',
  error: '',
}

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Post[]>(POSTS_URL)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const postsApiSlice = createSlice({
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
  },
  extraReducers(builder: ActionReducerMapBuilder<InitialState>) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
        state.error = '';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'

        let min = 1;
        const loadedPosts = action.payload.map(post => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString()
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          }
          return post;
        })

        state.posts = state.posts.concat(loadedPosts)
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.error = (payload as AxiosError).message;
      })
  }
})

export const selectAllPosts = (state: RootState) => state.postsApi.posts
export const getPostsStatus = (state: RootState) => state.postsApi.status
export const getPostsError = (state: RootState) => state.postsApi.error

export const { addPost } = postsApiSlice.actions;

export default postsApiSlice.reducer;
