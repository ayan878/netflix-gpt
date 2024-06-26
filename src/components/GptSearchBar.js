import React, { useRef } from "react";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearch } from "../utils/gptSlice";
import { FaSearch } from "react-icons/fa";
import language from "../utils/languageConstant";
import { changeLanguage } from "./configSlice";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import useMovieList from "../hooks/useMovieList";

function GptSearchBar() {
  const expanded = useSelector((store) => store.gpt.searchToggle);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  useMovieList();
  const handleGptSearchClick = () => {
    // Toggle GPT Search Button
    dispatch(toggleSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSearchText = async () => {
  
    console.log(searchText.current.value);
    // Make API call to get movies results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
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
            ref={searchText}
            type="search"
            className="py-2 px-2 w-full text-white bg-transparent focus:outline-none "
            placeholder={language[langKey].search}
            onChange={handleSearchText}
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

export default GptSearchBar;


