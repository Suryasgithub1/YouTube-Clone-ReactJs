import React from 'react';

const ButtonsBuild = (info) => {
  let buttonClass = "w-auto bg-gray-200 mx-3 p-2 rounded-[10px] cursor-pointer";

  if (info.info === "All") {
    buttonClass = "w-auto bg-gray-800 mx-3 p-2 rounded-[10px] cursor-pointer text-white";
  }

  return (
    <button className= {` ${buttonClass}`} >
      {info.info}
    </button>
  );
};

export default ButtonsBuild;