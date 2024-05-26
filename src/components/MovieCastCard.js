import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCastCard = ({ profilePath, name, character }) => {
  if (!profilePath) return null;

  return (
    <div className="w-36 md:w-48 m-2 flex flex-col items-center">
      <img
        className="w-full h-auto rounded-full"
        alt={`${name}'s Profile`}
        src={IMG_CDN_URL + profilePath}
      />
      <div className="text-center mt-2">
        <h2 className="text-sm md:text-base font-bold">{name}</h2>
        <p className="text-xs md:text-sm text-gray-400">{character}</p>
      </div>
    </div>
  );
};

export default MovieCastCard;
