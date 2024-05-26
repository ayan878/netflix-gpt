import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieCast } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieCast = (movie_id) => {
 
  const dispatch = useDispatch();

  const getMovieCast = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log("moviesCast", json);
      dispatch(addMovieCast(json));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    if (movie_id) {
      getMovieCast();
    }
  }, [movie_id]);
};

export default useMovieCast;
