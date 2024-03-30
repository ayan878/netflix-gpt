import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    moviesSearch:null,
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
    addMovies: (state, action) => {
      return { ...state, moviesSearch: action.payload };
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies,addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

// I'm Adding movies form tmdb API bcz openAI is paid after billing i will remove it and fetch movies form openAI