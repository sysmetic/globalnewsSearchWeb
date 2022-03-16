import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { myKeywords: ["Twitter Inc", "WTI Crude Oil"] };

const keywordList = createSlice({
  name: "test",
  initialState,
  reducers: {
    addKeyword: (state, action: PayloadAction<string>) => {
      state.myKeywords.push(action.payload);
    }
  }
});

export const { addKeyword } = keywordList.actions;
export default keywordList.reducer;
