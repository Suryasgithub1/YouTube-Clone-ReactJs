import React from 'react'
import WatchComponentVideo from "./WatchComponentVideo"
import WatchComponentSideBar from "./WatchComponentSideBar"
import WatchComponentComments from './WatchComponentComments'
import BtnLists from './BtnLists'

const WatchComponent = () => {
  return (
    <div className = "flex">
      <div>
        <BtnLists />
        <WatchComponentVideo />
        <WatchComponentComments />
      </div>
        <WatchComponentSideBar />  
    </div>
  )
}

export default WatchComponent