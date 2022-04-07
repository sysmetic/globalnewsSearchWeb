import { configureStore } from "@reduxjs/toolkit";
import newsformatReducer from "./news/newsformatSlice";
import userReducer from "./user/auth";
import newsListReducer from "./news/newsListSlice";
import keywordListReducer from "./keyword/keywordsSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "../utils/history";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    formats: newsformatReducer,
    keywords: keywordListReducer,
    user: userReducer,
    router: connectRouter(history)
  },
  middleware: [sagaMiddleware, routerMiddleware(history)]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
