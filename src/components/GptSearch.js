import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptSearch() {
const movies = useSelector((store) => store.movies);
console.log("movies",movies)

if (!movies) return null;
 


  return (
    movies.moviesSearch && (
      <div className="w-screen">
        <div className="pt-[30%] md:pt-0  pl-4  md:pl-12 relative z-20">
          <MovieList title={"Search Results"} movies={movies.moviesSearch} />
          {/* <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} /> */}
        </div>
      </div>
    )
  );
}

export default GptSearch;
