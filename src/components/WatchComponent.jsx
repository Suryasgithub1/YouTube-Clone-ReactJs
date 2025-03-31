import React from 'react'
import WatchComponentVideo from "./WatchComponentVideo"
import WatchComponentSideBar from "./WatchComponentSideBar"
import WatchComponentComments from './WatchComponentComments'

const WatchComponent = () => {
  return (
    <div className = "flex">
      <div>
        <WatchComponentVideo />
        <WatchComponentComments />
      </div>
        <WatchComponentSideBar />  
    </div>
  )
}

export default WatchComponent