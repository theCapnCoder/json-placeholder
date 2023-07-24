import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

const initialState = [
  { id: 1, title: 'First post', content: 'First post content', },
  { id: 2, title: 'Second post', content: 'Second post content', }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const selectAllPosts = (state: RootState) => state.posts

export const { addPost } = postsSlice.actions

export default postsSlice.reducer;