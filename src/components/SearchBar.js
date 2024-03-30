import React, { useEffect, useState } from "react";
import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearch } from "../utils/gptSlice";
import { FaSearch } from "react-icons/fa";
import language from "../utils/languageConstant";
import { changeLanguage } from "./configSlice";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/moviesSlice";


function SearchBar() {
  const expanded = useSelector((store) => store.gpt.searchToggle);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");


  const handleGptSearchClick = () => {
    dispatch(toggleSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  //   const KEY = "c87bce4d";

  useEffect(() => {
    const SearchMovie = async () => {
      if (query) {
        try {
          const response = await fetch(
            // `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            // fetch(

            "https://api.themoviedb.org/3/search/movie?query=" +
              query +
              "&include_adult=true&language=en-US&page=1",
            API_OPTIONS
            // )
          );
          if (!response.ok) {
            throw new Error("Failed to fetch movie data");
          }
          const data = await response.json();
          console.log("data", data);
          // Dispatch an action to update the movie list in Redux store
          dispatch(addMovies(data));
        } catch (error) {
          console.error("Error fetching movie data:", error);
        }
      }
    };

    SearchMovie();
  }, [query]);

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value.trim());
  };

  return (
    <div className="flex space-x-2">
      <div
        className={`flex items-center rounded-lg border ${
          expanded ? "flex w-72 px-4 " : "w-8 border-none"
        } transition-width duration-100 `}
      >
        <button className="text-white" onClick={handleGptSearchClick}>
          <FaSearch />
        </button>
        {expanded && (
          <input
            type="search"
            className="py-2 px-2 w-full text-white bg-transparent focus:outline-none "
            placeholder={language[langKey].search}
            value={query}
            onChange={handleSearchInputChange}
            disabled={!expanded}
          />
        )}
      </div>
      {expanded && (
        <select
          className="p-2 bg-red-500 text-white rounded-md"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option value={lang.identifier} key={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SearchBar;
