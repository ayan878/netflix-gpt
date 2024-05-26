import React from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ id, posterPath }) => {
  if (!posterPath) return null;

  return (
    <Link to={{ pathname: `/browse/movie/${id}` }}>
      <div className="w-36 md:w-48 m-2">
        <img
          className="w-full h-auto rounded-2xl"
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
