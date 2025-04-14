import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import BtnLists from './BtnLists';
import SearchResultsPage from "./SearchResultsPage"



const SearchResults = () => {

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search_query');
  console.log(searchQuery)

  return (
    <div className=" px-15 mt-5">
      <BtnLists />
      <SearchResultsPage items = {searchQuery} />
    </div>
  )
}

export default SearchResults