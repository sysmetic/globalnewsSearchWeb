import { configureStore } from "@reduxjs/toolkit";
import newsformatReducer from "./news/newsformatSlice";

export const store = configureStore({
  reducer: {
    // posts: keywordReduer
    formats: newsformatReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
