import React, { useEffect, useState } from 'react'
import {searchDataHardCoded, VideoLength} from "../utils/constants"
import {viewsCount, timePublished } from "../utils/YouTubeViewsAndTimeStamp"

const SearchResultsPage = (searchQuery) => {
    const itemsArray = Array.from(searchDataHardCoded.items);
    const [videoLengths, setVideoLengths] = useState({});

    useEffect(() => {
        const fetchAllLengths = async () => {
            const lengths = {};
            for (const item of itemsArray) {
                const videoId = item?.id?.videoId;
                if (videoId) {
                    try {
                        const data = await fetch(VideoLength + videoId);
                        const json = await data.json();
                        lengths[videoId] = json?.items?.[0]?.contentDetails?.duration;
                    } catch (error) {
                        console.error("Error fetching video length:", error);
                        lengths[videoId] = "N/A"; // Or some default value
                    }
                }
            }
            setVideoLengths(lengths);
        };

        fetchAllLengths();
    }, [itemsArray]);

    return (
        (searchDataHardCoded && (
            <div className="mt-4 pl-10  w-[712px] h-[195px]">
                {itemsArray.map((item, index) => (
                    <div key={index} className="flex mb-3 border-0 rounded-lg cursor-pointer shadow-sm mt-4 hover:shadow-lg">
                        <div>
                            <img
                                className="w-[348px] h-[195px] border-0 rounded-lg object-cover "
                                src={item?.snippet?.thumbnails?.medium?.url}
                                alt={item?.snippet?.title}
                            />
                        </div>
                        <div className="w-[300px] border-0 rounded-lg ml-4">
                            <h1 className="text-[18px] font-medium">
                                {item?.snippet?.title?.length > 55 ? ((item?.snippet?.title).substring(0, 55) + "...") : (item?.snippet?.title)}
                            </h1>
                            <h2 className="text-[12px] text-gray-400 ">{item?.snippet?.title}</h2>
                            <div className="flex">
                                <h3 className="text-[12px] text-gray-400 font-['Roboto','Arial',sans-serif]">
                                    {viewsCount(item?.statistics?.viewCount)}</h3>
                                <h3 className="text-[12px] text-gray-400 font-['Roboto','Arial',sans-serif] ml-2">{" · "}
                                    {timePublished(item?.snippet?.publishedAt)}</h3>
                                <h3 className="text-[12px] text-gray-400">
                                    Length: {videoLengths[item?.id?.videoId]}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ))
    );
}

export default SearchResultsPage