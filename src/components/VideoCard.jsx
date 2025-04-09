import React from 'react'
import {viewsCount, timePublished} from "../utils/YouTubeViewsAndTimeStamp"

const VideoCard = ({items}) => {
  
  // console.log(items);
  return (
        <div key={items} className="w-90 border-0 rounded-lg cursor-pointer hover:shadow-lg">
        <img
          className="w-full border-0 rounded-lg"
          src={items?.snippet?.thumbnails?.medium?.url}
          alt={items?.snippet?.title}
        />
        <h1 className="font-['Roboto','Arial',sans-serif] text-[16px] font-[900] w-[296.320px] mb-[5px] h-[46px] overflow-x: hidden;
">
            {items?.snippet?.title?.length > 65 ?( (items?.snippet?.title).substring(0, 61) + "..." ): (items?.snippet?.title) }
              </h1>
        <h2 className="text-[14px] text-gray-400  font-['Roboto','Arial',sans-serif]" >{items?.snippet?.channelTitle}</h2>
        <div className="flex">
          <h3 className="text-[14px] text-gray-400 font-['Roboto','Arial',sans-serif]">{viewsCount(items?.statistics?.viewCount)}</h3>
          <h3 className="text-[14px] text-gray-400 font-['Roboto','Arial',sans-serif] ml-2"> · {timePublished(items?.snippet?.publishedAt)}  </h3>
          
        </div>
        
      </div>
      
  )
}

export default VideoCard;