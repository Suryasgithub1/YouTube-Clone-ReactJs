import React, { useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HeaderSearchBarResult = ({props, minimiseResults}) => {

  const [searchText, setSearchText] = useState("")

  const navigate = useNavigate();

  const handleClick = (e) => {
      setSearchText(e.target.textContent)
      const modifiedSearchText = (e.target.textContent).replace(/ /g, "+")
      navigate(`/results?search_query=${modifiedSearchText}`) 
      minimiseResults(false)
  };

  return (
    <form className=' w-[480px] shadow px-4 py-1 rounded-md hover:bg-gray-200 '
    onClick={handleClick}  
    >       
         {(props)}
    </form>
  )
}

export default HeaderSearchBarResult