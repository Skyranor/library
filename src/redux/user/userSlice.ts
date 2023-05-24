import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../models/User';

interface UserState {
  token: string;
  user: User;
}

const initialState: UserState = {
  token: '',
  user: {} as User,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.jwt;
    },
    logout: () => initialState,
  },
});

export default userSlice.reducer;

export const { setUserData, logout } = userSlice.actions;
