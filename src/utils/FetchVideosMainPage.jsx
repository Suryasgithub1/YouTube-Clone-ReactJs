import React, {useState, useEffect} from 'react'
import {YOUTUBE_API_KEY} from "../utils/constants"

const FetchVideosMainPage = () => {

    const [videosData, setVideosData] = useState()

    useEffect(() => { getVideosData()}, []);
  
    async function getVideosData() {
      const data = await fetch (YOUTUBE_API_KEY);
      const json = await data.json();
      setVideosData(json.items);
    }
    if (!videosData) {
      return <div>Loading...</div>; 
    }

  return (
    {videosData}
  )
}

export default FetchVideosMainPage;