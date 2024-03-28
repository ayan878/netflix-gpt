import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies); 
  // console.log(movies?.results[0])
  if (!movies) return; 
  const mainMovie = movies;

  const { original_title, overview,id } = mainMovie.results[0];

  // console.log("movies", mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
