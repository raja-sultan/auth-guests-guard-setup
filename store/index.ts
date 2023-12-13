import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./auth/reducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
