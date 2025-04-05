import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonsBuild = (info) => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    navigate(`/results?search_query=${e.target.textContent.replace(/ /g, '')}`);
  };

  let buttonClass = "w-auto bg-gray-200 mx-3 p-2 rounded-[10px] cursor-pointer";

  if (info.info === "All") {
    buttonClass = "w-auto bg-gray-800 mx-3 p-2 rounded-[10px] cursor-pointer text-white";
  }

  return (
    <button className= {` ${buttonClass}`} 
    onClick={handleClick}
    >
      {info.info}
    </button>
  );
};

export default ButtonsBuild;