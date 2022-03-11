import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewList, NewsType } from "./newsListApi";

export const fetchNewList = createAsyncThunk(
  "newlist/fetchNewsList",
  async (keywordName: string, thunkApi) => {
    let searchPayload = {
      identifier_type: "assets",
      identifiers: keywordName,
      time_filter: "mth1",
      categories: "mp,op",
      min_cityfalcon_score: 0,
      order_by: "top",
      access_token: process.env.REACT_APP_API_ACCESS_TOKEN!
    };
    const response = await getNewList(searchPayload);

    if (response.status !== 200) {
      return thunkApi.rejectWithValue(response);
    } else {
      return response.data;
    }
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
