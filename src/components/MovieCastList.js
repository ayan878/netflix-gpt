import React from "react";
import MovieCastCard from "./MovieCastCard";
import { useParams } from "react-router-dom";
import useMovieCast from "../hooks/useMovieCast";
import { useSelector } from "react-redux";

const MovieCastList = () => {
  const movieCast = useSelector((store) => store.movies.movieCast);
  const { id } = useParams();
  useMovieCast(id);
  console.log("cast",movieCast);
  return (
    <div className="px-6 py-4">
      <h1 className="text-lg md:text-3xl py-4 text-white">Cast</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movieCast?.cast.map((castMember) => (
            <MovieCastCard
              key={castMember.id}
              profilePath={castMember.profile_path}
              name={castMember.name}
              character={castMember.character}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCastList;
