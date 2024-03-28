import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    },
    addTrailerVideo: (state, action) => {
      return { ...state, trailerVideo: action.payload };
    },
    addPopularMovies: (state, action) => {
      return { ...state, popularMovies: action.payload };
    },
    addUpcomingMovies: (state, action) => {
      return { ...state, upcomingMovies: action.payload };
    },
    addTopRatedMovies: (state, action) => {
      return { ...state, topRatedMovies: action.payload };
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
