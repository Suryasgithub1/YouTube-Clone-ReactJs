import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';


const SliderBar = () => {

  const storeData = useSelector((store) => store.app.isOpen)

  if (!storeData) return (
    <div>
      <ul className='  mt-5'>
        <li> 
        <Link to = "/"> <img className = " font-bold w-15 pl-4" src="https://www.svgrepo.com/show/13696/house.svg" alt="Home Silder" /> 
        </Link>
        </li>
      </ul>
      <ul className=' mt-5'>
      <li> <img className = " w-20 pl-1" src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg" alt="Home Silder" /> 
        <p className = " text-xs text-center" >Shorts</p>
        </li>
      </ul>
      <ul className=' mt-5'>
      <li> <img className = " w-15 pl-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9REHA4utQhT-d1POd94YProynn5WlJEVmWw&s" alt="Home Silder" /> 
        <p className = " text-xs text-center" >Subscription</p>
        </li>
      </ul>
      <ul className=' mt-5'>
      <li> <img className = " w-15 pl-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rTLeQraa9s-Rkj2_KMPOzh30CwK1G2D85A&s" alt="Home Silder" /> 
        <p className = " text-xs text-center" >You</p>
        </li>
      </ul>
    </div>
  );
  
  return (
    <div>
      <ul className=' font-bold mt-5'>
        
      <li> 
        <Link to = "/"> <p >Home</p> 
        </Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className=' mt-5'>
        <li className=' font-bold'>You &gt; </li>
          <ul>
            <li>History</li>
            <li>Playlist</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
          </ul>
      </ul>
      <ul >
        <li className=' font-bold mt-5' > Subscriptions </li> 
        <ul>
            <li>History</li>
            <li>Playlist</li>
            <li>Your Videos</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
          </ul>
      </ul>
    </div>
  )
}

export default SliderBar;