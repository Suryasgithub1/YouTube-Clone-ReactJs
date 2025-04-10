import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import BtnLists from './BtnLists';
import SearchResultsPage from "./SearchResultsPage"
import {ClickedSearchBoxTextResults} from "../utils/constants"


const SearchResults = () => {

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search_query');
  const [dataSearchText, setDataSearchText] = useState([]);

  const getSearchTextResults = async () => {   
    // const data = await fetch (ClickedSearchBoxTextResults + searchParams);
    // const json = await data.json();  
    // setDataSearchText(json);
    // //console.log(json)
  }

  useEffect(() => {
    getSearchTextResults();
  }, []);


  // console.log(searchQuery)

  return (
    <div className=" px-15 mt-5">
      <BtnLists />
      {/* <p className='text-2xl text-gray-400'>{searchQuery}</p> */}
      <SearchResultsPage items = {searchQuery} />
    </div>
  )
}

export default SearchResults