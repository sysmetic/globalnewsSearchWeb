import { configureStore } from "@reduxjs/toolkit";

import newsformatReducer from "./news/newsformatSlice";
import newsListReducer from "./modules/newsListSlice";
import newsSortReducer from "./news/newsSortSlice";

export const store = configureStore({
  reducer: {
     newsList: newsListReducer,
     formats: newsformatReducer,
     newsSorts:newsSortReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
