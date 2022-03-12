import { createSlice } from "@reduxjs/toolkit";

interface Props {
  newsSortList: string[];
  newsSortState: string;
}

const initialState: Props = {
  newsSortList: ["정렬 순", "최신 순", "인기 순"],
  newsSortState: "default"
};

const newssortSlice = createSlice({
  name: "NewsSort",
  initialState,
  reducers: {
    default: state => {
      state.newsSortState = "dafault";
    },
    popular: state => {
      state.newsSortState = "poplular";
    },
    latest: state => {
      state.newsSortState = "latest";
    }
  }
});

export const { popular, latest } = newssortSlice.actions;

export default newssortSlice.reducer;
