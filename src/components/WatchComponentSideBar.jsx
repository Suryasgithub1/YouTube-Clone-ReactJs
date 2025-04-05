import React from 'react';
import FetchVideosMainPage from '../utils/FetchVideosMainPage';
import {viewsCount, timePublished} from "../utils/YouTubeViewsAndTimeStamp"

const WatchComponentSideBar = () => {
  const data = FetchVideosMainPage();
  const items = data?.videosData; 

  if (!data?.videosData || !Array.isArray(data.videosData)) {
    return <div>No videos available.</div>; // No videos state
  }

  return (
    (items &&
    (<div className="mt-4 pl-10  w-[400px]">
      <h1 className='text-[2rem]'> Recommended </h1>
      {items.map((item) => (
        <div className="flex mb-3 border-0 rounded-lg cursor-pointer shadow-sm mt-4 hover:shadow-lg">
        <div key={item?.id?.videoId} >
          <img
            className="w-[168px] h-[96px] border-0 rounded-lg object-cover "
            src={item?.snippet?.thumbnails?.default?.url}
            alt={item?.snippet?.title}
          />
          </div>  
          <div className="w-[300px] border-0 rounded-lg ml-4">       
            <h1 className="text-[14px] font-medium">
            {item?.snippet?.title?.length > 55 ?( (item?.snippet?.title).substring(0, 55) + "..." ): (item?.snippet?.title) }
              </h1>
            <h2 className="text-[12px] text-gray-400 ">{item?.snippet?.channelTitle}</h2>
          <div className="flex">
            <h3 className="text-[12px] text-gray-400 font-['Roboto','Arial',sans-serif]">
              {viewsCount(item?.statistics?.viewCount)}</h3>
            <h3 className="text-[12px] text-gray-400 font-['Roboto','Arial',sans-serif] ml-2">{" · "}
              {timePublished(item?.snippet?.publishedAt)}  </h3>
          </div> 
          </div>    
        </div>
      ))}
    </div>))
  );
};

export default WatchComponentSideBar;