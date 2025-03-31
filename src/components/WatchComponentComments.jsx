import React, { useEffect, useState } from 'react'
import { YouTubeCommentsAPI } from '../utils/constants'
import { useSearchParams } from 'react-router-dom'
import WatchComponentsCommentsData from "./WatchComponentsCommentsData"

const WatchComponentComments = () => {

  const [commentsData, setCommentsData] = useState([])
  //const  [formattedText, setFormattedText ] = useState([])

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  
   async function getComments() {
    const data = await fetch(`${YouTubeCommentsAPI}&videoId=${videoId}`);
    const json = await data.json()
    setCommentsData(json);
  }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className='pl-10 pt-5'> 
      <h1 className='text-[2rem]'> Comments </h1>
      {(commentsData && commentsData.items && commentsData.items.length > 1 &&
      commentsData.items.map((item) => (
      <WatchComponentsCommentsData key={item.id} commentsData={item} /> 
    )))}
    </div>
  );
}

export default WatchComponentComments;