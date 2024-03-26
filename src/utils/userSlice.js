import { createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
  name: user,
  initialState: null,
  reducers: {
    addUsers: (state, action) => {
      return action.payload;
    },
    removeUsers: (state, action) => {
      return null;
    },
  },
});
