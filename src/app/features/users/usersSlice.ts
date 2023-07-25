import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type User = {
  id: number;
  name: string;
}

const initialState: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const selectAllUsers = (state: RootState) => state.users

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;