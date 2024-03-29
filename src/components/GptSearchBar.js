import React from 'react'
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleSearch, searchExpanded } from "../utils/gptSlice";
import { FaSearch } from "react-icons/fa";
import language from "../utils/languageConstant";
import { changeLanguage } from "./configSlice";
import { useDispatch, useSelector } from 'react-redux';

function GptSearchBar() {
  const expanded = useSelector((store) => store.gpt.searchToggle);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch=useDispatch()

   const handleGptSearchClick = () => {
     // Toggle GPT Search Button
     dispatch(toggleSearch());
   };
   const handleLanguageChange = (e) => {
     dispatch(changeLanguage(e.target.value));
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

export default GptSearchBar