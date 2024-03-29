import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchToggle: false,
    searchExpanded:false,
  },
  reducers: {
    toggleSearch: (state, action) => {
      return { ...state, searchToggle: !state.searchToggle };
    },
    searchExpanded:(state,action)=>{
        return {
            ...state,searchExpanded:!state.searchExpanded
        }
    }
  },
});

export const { toggleSearch,searchExpanded } = gptSlice.actions;
export default gptSlice.reducer;
