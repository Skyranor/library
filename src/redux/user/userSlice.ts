import { createSlice } from '@reduxjs/toolkit';

import { UserAPI, UserDTO } from '../../types/DTO/User';

interface UserState extends UserAPI {}

const initialState: UserState = {
  user: {} as UserDTO,
  jwt: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;
    },
    logout: () => initialState,
  },
});

export default userSlice.reducer;

export const { setUserData, logout } = userSlice.actions;
