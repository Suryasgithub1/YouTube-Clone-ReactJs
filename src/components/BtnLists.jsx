import React, { useRef } from 'react';
import ButtonsBuild from './ButtonsBuild';
import { buttonsArrays } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const BtnLists = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const handleClick = (e) => {
    navigate(`/results?search_query=${e.target.textContent.replace(/ /g, '')}`);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 150; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 150; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="relative w-[1177px]">
      <div
        ref={scrollContainerRef}
        className="whitespace-nowrap ml-[28px] overflow-x-auto hide-scrollbar"
        style={{ scrollbarWidth: 'none' }} 
      >
        {buttonsArrays.map((items, index) => (
          <ButtonsBuild info={items} key={index} />
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="bg-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={scrollRight}
        className="bg-gray-500 absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default BtnLists;