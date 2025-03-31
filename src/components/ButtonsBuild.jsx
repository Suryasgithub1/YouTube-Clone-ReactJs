import React from 'react';

const ButtonsBuild = (info) => { 

  return (
    <button className = "bg-gray-200 mx-3 p-2 rounded-[10px] cursor-pointer" > {info.info} </button> 
  );
};

export default ButtonsBuild;