import React from 'react'
import BtnLists from './BtnLists'
import VideoComponent from './VideoComponent'

const MainContainer = () => {
  return (
    <div>
        <div className=" px-15 mt-5">
                <BtnLists />
                <VideoComponent />
            </div>
    </div>
  )
}

export default MainContainer