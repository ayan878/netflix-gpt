import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IMG_CDN_URL } from "../utils/constants";
import useMovieDetails from "../hooks/useMovieDetails";
import Header from "./Header";

const MovieDetails = () => {
  const { id } = useParams();
  useMovieDetails(id); // Fetch movie details using the ID

  const movie = useSelector((store) => store.movies.movieDetails);

  if (!movie) return <div>Loading...</div>;

  const bgImage = `${IMG_CDN_URL + movie.backdrop_path}`; // Using backdrop_path for a better background image

  // Convert runtime to hours and minutes
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  // Extract year from release date
  const releaseYear = new Date(movie.release_date).getFullYear();

  // User score
  const userScore = Math.round(movie.vote_average * 10); // Convert to percentage

  return (
    <>
      <div className="relative text-white bg-black bg-opacity-70">
        <Header/>
        <div
          className="absolute top-20 left-0 w-full h-full bg-cover bg-center blur-xs"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
        <div className="relative flex flex-col md:flex-row bg-black bg-opacity-60 p-4 shadow-lg top-20">
          <img
            className="w-full md:w-1/3 rounded-2xl"
            alt="Movie Poster"
            src={IMG_CDN_URL + movie.poster_path}
          />
          <div className="md:ml-4 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">
              {movie.title} ({releaseYear})
            </h1>
            <div className="flex flex-wrap items-center mt-2 text-gray-400">
              <span className="mr-2">{movie.adult ? "🔞" : "👶"}</span>
              <span className="mr-2">{movie.release_date}</span>
              {movie.genres.map((genre) => (
                <span key={genre.id} className="mr-2">
                  {genre.name}
                </span>
              ))}
              <span className="mr-2">
                Duration: {hours}h {minutes}m
              </span>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 mr-4">
                <CircularProgressbar
                  value={userScore}
                  text={`${userScore}%`}
                  styles={buildStyles({
                    textSize: "24px",
                    pathColor:
                      userScore >= 70
                        ? "green"
                        : userScore >= 50
                        ? "yellow"
                        : "red",
                    textColor: "#fff",
                    trailColor: "#d6d6d6",
                  })}
                />
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded">
                Play Trailer
              </button>
            </div>
            <p className="mt-2 text-gray-400 italic">{movie.tagline}</p>
            <p className="mt-2">{movie.overview}</p>
            <h2 className="text-2xl font-bold mt-4">Production Companies:</h2>
            <ul className="mt-2">
              {movie.production_companies.map((company) => (
                <li key={company.id} className="mt-1">
                  {company.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
