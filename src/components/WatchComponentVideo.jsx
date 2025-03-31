import React from 'react'
import {useSearchParams} from "react-router-dom"

const WatchComponentVideo = () => {
        const [setparams] = useSearchParams();

  return (
    <div className=' mt-5 ml-10'>
        <div >
            <iframe width="800" height="415" src={`https://www.youtube.com/embed/${setparams.get("v")}?&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>    
    </div>
  )
}

export default WatchComponentVideo;