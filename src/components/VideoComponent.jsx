import React, { useEffect, useState } from 'react'
import {YOUTUBE_API_KEY} from "../utils/constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerMainPage from "../utils/Shimmer"

const VideoComponent = () => {

  const [videosData, setVideosData] = useState()

  useEffect(() => { getVideosData()}, []);

  async function getVideosData() {
    const data = await fetch (YOUTUBE_API_KEY);
    const json = await data.json();
    setVideosData(json.items);
  }
  if (!videosData) {
    return(
      <ShimmerMainPage />
    ); 
  }

   
  return (
  <div className="flex" >
    <div className="w-[1130px] ml-10 mt-10 flex flex-wrap gap-5 ">
      {videosData.map((items) => (
      <Link to =  {"/watch?v=" + items.id} key= {items.id} >
          <VideoCard items = {items} /> 
        </Link>  
      ))}
    </div>  
  </div>
  );
}


export default VideoComponent;