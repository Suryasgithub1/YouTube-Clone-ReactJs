import React from 'react'
import WatchComponentVideo from "./WatchComponentVideo"
import WatchComponentSideBar from "./WatchComponentSideBar"
import WatchComponentComments from './WatchComponentComments'
import BtnLists from './BtnLists'

const WatchComponent = () => {
  return (
    <div >   
         <BtnLists />
        <div className = "flex">
        <div className='w-[850px]' >
          <WatchComponentVideo />
          <WatchComponentComments />
        </div>
        <WatchComponentSideBar /> 
        </div> 
    </div>
  )
}

export default WatchComponent