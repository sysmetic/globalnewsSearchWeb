import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface FormatState {
  value: boolean;
}

const initialState: FormatState = {
  value: true
};

const newsformatSlice = createSlice({
  name: "format",
  initialState,
  reducers: {
    album: state => {
      state.value = true;
    },
    text: state => {
      state.value = false;
    }
  }
});

export const { album, text } = newsformatSlice.actions;
export const selectFormat = (state: RootState) => state.formats.value;
export default newsformatSlice.reducer;
