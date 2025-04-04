import React from 'react'

const VideoCard = ({items}) => {
  return (
        <div key={items} className="w-90 border-0 rounded-lg cursor-pointer shadow-lg">
        <img
          className="w-full border-0 rounded-lg"
          src={items?.snippet?.thumbnails?.medium?.url}
          alt={items?.snippet?.title}
        />
        <h1 className="font-bold">{items?.snippet?.title}</h1>
        <h2 className="text-base">{items?.snippet?.channelTitle}</h2>
        <div className="flex">
          <h3 className="text-sm">{items?.statistics?.viewCount}</h3>
          <h3 className="text-sm"> {items?.snippet?.publishedAt}</h3>
        </div>
      </div>
  )
}

export default VideoCard;