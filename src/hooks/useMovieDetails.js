import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieDetails = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log("moviesDetails",json)
      dispatch(addMovieDetails(json));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    if (movie_id) {
      getMovieDetails();
    }
  }, [movie_id]);
};

export default useMovieDetails;
