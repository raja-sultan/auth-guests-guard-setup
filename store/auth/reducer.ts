import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: {},
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = initialState.isAuthenticated;
    },
  },
});

export const { logout } = AuthSlice.actions;
export const { reducer: AuthReducer } = AuthSlice;
