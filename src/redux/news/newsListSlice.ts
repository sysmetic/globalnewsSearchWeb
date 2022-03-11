import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewList, NewsType } from "./newsListApi";

export const fetchNewList = createAsyncThunk(
  "newlist/fetchNewsList",
  async () => {
    let searchPayload = {
      identifier_type: "assets",
      identifiers: "McDonald's, General Electric, FTSE 100",
      time_filter: "mth1",
      categories: "mp,op",
      min_cityfalcon_score: 0,
      order_by: "top",
      access_token:
        "ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce775"
    };
    return getNewList(searchPayload);
  }
);

type NewsListState = {
  newListData: NewsType[];
  loading: boolean;
  error: string | null;
};

const initialState: NewsListState = {
  newListData: [],
  loading: false,
  error: ""
};

const NewsListSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNewList.pending, state => {
      state.loading = true;
      state.newListData = [];
      state.error = null;
    });

    builder.addCase(fetchNewList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.newListData = payload;
      state.error = "";
    });

    builder.addCase(fetchNewList.rejected, (state, { payload }) => {
      state.loading = false;
      state.newListData = [];
      state.error = "";
    });
  }
});

export default NewsListSlice.reducer;
