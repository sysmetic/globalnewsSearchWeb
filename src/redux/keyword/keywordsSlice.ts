import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Keywords = {
  id: number;
  data: string;
};

type KeywordsState = Keywords[]

//{ myKeywords: ["Twitter Inc", "WTI Crude Oil"] };
const initialState: KeywordsState = [
  {id: 1, data: "Twitter Inc"},
  {id: 2, data: "WTI Crude Oil"}
]

const keywordList = createSlice({
  name: "test",
  initialState,
  reducers: {
    addKeyword: (state, action: PayloadAction<string>) => {
      const nextId = Math.max(...state.map(keyword => keyword.id )) + 1;
      state.push({id:nextId, data: action.payload})
    },
    deleteKeyword: (state, action: PayloadAction<string>) => {
      return state.filter((keyword) => keyword.data !== action.payload)
    }
  }
});

export const { addKeyword, deleteKeyword } = keywordList.actions;
export default keywordList.reducer;
