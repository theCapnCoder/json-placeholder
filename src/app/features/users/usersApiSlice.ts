import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../store';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

type User = {
  id: number;
  name: string;
}

const initialState: User[] = [] 

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
  try {
    const response = await axios.get(USERS_URL)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
})

const usersApiSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectAllApiUsers = (state: RootState) => state.usersApi

export default usersApiSlice.reducer;