import React, { useState, } from 'react'
import {ClickedSearchBoxTextResults} from "../utils/constants"
import SearchResults from "./SearchResults"
import { Link, useNavigate } from 'react-router-dom'

const HeaderSearchBarResult = ({props}) => {

  const [searchText, setSearchText] = useState("")
  const [dataSearchText, setDataSearchText] = useState([]);
  const navigate = useNavigate();

  const getSearchTextResults = async (searchText) => {
          const data = await fetch (ClickedSearchBoxTextResults + searchText);
          const json = await data.json();
          
          setDataSearchText(json);  
      }

  const handleClick = (e) => {
    setSearchText(e.target.textContent)
      const modifiedSearchText = (e.target.textContent).replace(/ /g, "+")
      navigate(`/results?search_query=${modifiedSearchText}`)
      getSearchTextResults(modifiedSearchText); 
  };

  return (
    <div className=' w-[480px] shadow px-4 py-1 rounded-md hover:bg-gray-200 '
    onClick={handleClick} >       
         {(props)}
    </div>
  )
}

export default HeaderSearchBarResult