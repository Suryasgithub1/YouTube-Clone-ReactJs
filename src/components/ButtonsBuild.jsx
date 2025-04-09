import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ButtonsBuild = (info) => {
  let buttonClass = "w-auto bg-gray-100 mx-3 p-2 rounded-[10px] cursor-pointer";
  const location = useLocation();
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  const query = searchParams.get('search_query');
  const currentLocation = (location.pathname)


  const navigate = useNavigate();
  
  const handleClick = (e) => {
    navigate(`/results?search_query=${e.target.textContent.replace(/ /g, '')}`);
    if (currentLocation === '/'){
      buttonClass = "w-auto bg-gray-600 mx-3 p-2 rounded-[10px] cursor-pointer";
    } else if ((info.info)== query ){
      buttonClass = "w-auto bg-gray-200 mx-3 p-2 rounded-[10px] cursor-pointer";
  }
  };


  return (
    <button className= {` ${buttonClass}`} 
    onClick={handleClick}
    >
      {info.info}
    </button>
  );
};

export default ButtonsBuild;