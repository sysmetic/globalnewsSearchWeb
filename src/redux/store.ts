import { configureStore } from "@reduxjs/toolkit";

import newsformatReducer from "./news/newsformatSlice";
import newsListReducer from "./modules/newsListSlice";

export const store = configureStore({
  reducer: {
     newsList: newsListReducer,
     formats: newsformatReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
