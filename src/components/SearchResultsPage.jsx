import React, { useEffect, useState, useMemo } from 'react';
import { searchDataHardCoded, VideoLength, ClickedSearchBoxTextResults } from '../utils/constants';
import { viewsCount, timePublished } from '../utils/YouTubeViewsAndTimeStamp';

const SearchResultsPage = (searchQuery) => { 
    const searchQueryResults = searchQuery.items
    const [videoLengths, setVideoLengths] = useState({});
    const [loadingLengths, setLoadingLengths] = useState(true);
    const [lengthFetchError, setLengthFetchError] = useState(null);
    const [dataSearchText, setDataSearchText] = useState([]);

    const getSearchTextResults = async () => {
        const data = await fetch ("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&key=AIzaSyC3pBlgANl8hi-z8kHZqRhOpfkRH66aHFM&q=" + searchQueryResults );
        console.log(typeof(data))
        const json = await data.json();
        setDataSearchText(json);
    }

    useEffect(() => {
        getSearchTextResults();
    }, [searchQuery]);

    const itemsArray = useMemo(() => {
        return dataSearchText && Array.isArray(dataSearchText.items) ? Array.from(dataSearchText.items) : [];
    }, [dataSearchText]);


    const getDetails = async (videoID) => {
        if (videoID) {
            try {
                const data = await fetch(VideoLength + videoID);
                const json = await data.json();
                const duration = json?.items?.[0]?.contentDetails?.duration;
                if (duration) {
                    setVideoLengths(prevLengths => ({ ...prevLengths, [videoID]: duration }));
                }
            } catch (error) {
                console.error(`Error fetching details for ${videoID}:`, error);
                setVideoLengths(prevLengths => ({ ...prevLengths, [videoID]: 'N/A' }));
                setLengthFetchError(error);
            }
        }
    };

    const getVideoLengthDetails = () => {
        setLoadingLengths(true);
        Promise.all(
            itemsArray.map(async (item) => {
                const videoID = item?.id?.videoId;
                if (videoID) {
                    console.log('Fetching details for video ID:', videoID);
                    await getDetails(videoID);
                }
            })
        ).finally(() => {
            setLoadingLengths(false);
        });
    };

    useEffect(() => {
        if (itemsArray.length > 0) {
            getVideoLengthDetails();
        } else {
            setLoadingLengths(false);
            setVideoLengths({});
        }
    }, [itemsArray]);

    if (loadingLengths) {
        return <div>Loading video lengths...</div>;
    }

    return (
        searchDataHardCoded && (
            <div className="mt-4 pl-10  w-[712px] h-[195px]">
                {itemsArray.map((item) => {
                    const videoId = item?.id?.videoId;
                    return (
                        <div key={videoId} className="flex mb-3 border-0 rounded-lg cursor-pointer shadow-sm mt-4 hover:shadow-lg">
                            <div>
                                <img
                                    className="w-[348px] h-[195px] border-0 rounded-lg object-cover "
                                    src={item?.snippet?.thumbnails?.medium?.url}
                                    alt={item?.snippet?.title}
                                />
                            </div>
                            <div className="w-[300px] border-0 rounded-lg ml-4">
                                <h1 className="text-[18px] font-medium">
                                    {item?.snippet?.title?.length > 55 ? ((item?.snippet?.title).substring(0, 55) + '...') : (item?.snippet?.title)}
                                </h1>
                                <h2 className="text-[12px] text-gray-400 ">{item?.snippet?.title}</h2>
                                <div className="flex">
                                    <h3 className="text-[12px] text-gray-400 font-['Roboto','Arial',sans-serif]">
                                        {viewsCount(item?.statistics?.viewCount)}
                                    </h3>
                                    <h3 className="text-[12px] text-gray-400 font-['Roboto','Arial',sans-serif] ml-2">{' · '}
                                        {timePublished(item?.snippet?.publishedAt)}
                                    </h3>
                                    <h3 className="text-[12px] text-gray-400">
                                        {videoLengths[videoId]}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    );
};

export default SearchResultsPage;