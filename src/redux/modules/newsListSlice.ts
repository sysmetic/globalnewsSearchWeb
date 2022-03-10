import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewList = createAsyncThunk(
  "newlist/fetchNewsList",
  async () => {
    return axios
      .get(
        "https://api.cityfalcon.com/v0.2/stories?identifier_type=assets&identifiers=McDonald's%2C%20General%20Electric%2C%20FTSE%20100&time_filter=mth1&categories=mp%2Cop&min_cityfalcon_score=0&order_by=top&access_token=ea67d29c683a69e808a26cc6dc5a1445df84876e9e2d7aaf3d6f084210dce"
      )
      .then(res => res.data)
      .catch(error => error);
  }
);

type NewsListState = {
  newListData: [];
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
      state.error = null;
    });

    builder.addCase(fetchNewList.fulfilled, (state, { payload }) => {
      state.newListData = payload;
    });

    builder.addCase(fetchNewList.rejected, (state, { payload }) => {
      // if (payload) state.error = payload.message;
      // state.status = "idle";
    });
  }
});

export default NewsListSlice.reducer;
