import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Keywords = {
  // id: number;
  data: string;
};

type KeywordsState = Keywords[]

//{ myKeywords: ["Twitter Inc", "WTI Crude Oil"] };
const initialState: KeywordsState = [
  {data: "Twitter Inc"},
  {data: "WTI Crude Oil"}
]

const keywordList = createSlice({
  name: "test",
  initialState,
  reducers: {
    addKeyword: (state, action: PayloadAction<string>) => {
      // const nextId = Math.max(...state.map(keyword => keyword.id )) + 1;
      state.push({data: action.payload})
    },
    deleteKeyword: (state, action: PayloadAction<string>) => {
      return state.filter((keyword) => keyword.data !== action.payload)
    }
    // deleteKeyword: (state, action: PayloadAction<string>): string[] => {
    //   state.myKeywords.filter(keyword => keyword !== action.payload);
    // }
  }
});

export const { addKeyword, deleteKeyword } = keywordList.actions;
export default keywordList.reducer;
