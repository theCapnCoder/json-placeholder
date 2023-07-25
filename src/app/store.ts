import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import postsReducer from './features/posts/postSlice';
import postApiReducer from './features/postsAPI/postSlice';
import usersReducer from './features/users/usersSlice';
import usersApiReducer from './features/users/usersApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    postsApi: postApiReducer ,
    users: usersReducer,
    usersApi: usersApiReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>