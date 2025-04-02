import React, { useEffect, useState, useRef } from 'react';
import { YOUTUBE_SEARCH_API_KEY } from '../utils/constants';
import HeaderSearchBarResult from './HeaderSearchBarResult';

const HeaderSearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchTextResults, setSearchTextResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchBarRef = useRef(null);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const callSearchApi = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_KEY + searchText);
    const json = await data.json();
    setSearchTextResults(json[1]);
  };

  useEffect(() => {
    if (searchText) {
      const timer = setTimeout(() => callSearchApi(), 200);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchText]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarRef]);

  return (
    <div ref={searchBarRef}>
      <div className="flex">
        <input
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          className="w-120 bg-gray-200 p-2 rounded-l-[30px]"
          type="text"
          placeholder="Search"
        />
        <button>
          <img
            className=" w-10 bg-gray-300 p-3 rounded-r-[30px]"
            src="https://www.svgrepo.com/show/7109/search.svg"
            alt="Search"
          />
        </button>
        <button>
          <img
            className=" w-10 bg-gray-200 p-2 rounded-full ml-2 "
            src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
            alt="Microphone"
          />
        </button>
      </div>
      {showSuggestions && (
        <div className="flex flex-col s fixed bg-gray-100 rounded-lg">
          {searchTextResults &&
            searchTextResults.map((item, index) => (
              <HeaderSearchBarResult key={index} props={item} minimiseResults = {setShowSuggestions} />
            ))}
        </div>
      )}
    </div>
  );
};

export default HeaderSearchBar;