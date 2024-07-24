import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { fetchUsers } from './ActionCreators';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending.type, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchUsers.fulfilled.type, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
        state.error = '';
        state.isLoading = false;
      })

      .addCase(fetchUsers.rejected.type, (state: any, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
