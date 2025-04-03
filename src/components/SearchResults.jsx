import React from 'react'
import { useSearchParams } from 'react-router-dom'
import BtnLists from './BtnLists';


const SearchResults = () => {

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search_query');
  // console.log(searchQuery)

  return (
    <div>
      <BtnLists />
      <p className='text-2xl text-gray-400'>{searchQuery}</p>
    </div>
  )
}

export default SearchResults