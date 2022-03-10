import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface FilterState {
  value: string;
}

const initialState: FilterState = {
  value: "정렬 순"
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    popular: state => {
      state.value = "poplular";
    },
    latest: state => {
      state.value = "latest";
    }
  }
});

export const {popular, latest} = filterSlice.actions

export default filterSlice.reducer