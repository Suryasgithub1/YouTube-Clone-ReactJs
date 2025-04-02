import React from 'react'
import { useSearchParams } from 'react-router-dom'


const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search_query');
  // console.log(searchQuery)

  return (
    <div>
      <p className='text-2xl text-gray-400'>{searchQuery}</p>
    </div>
  )
}

export default SearchResults