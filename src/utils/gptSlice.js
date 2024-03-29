import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchToggle: false,
  },
  reducers: {
    toggleSearch: (state, action) => {
      return { ...state, searchToggle: !state.searchToggle };
    },
  },
});

export const { toggleSearch } = gptSlice.actions;
export default gptSlice.reducer;
