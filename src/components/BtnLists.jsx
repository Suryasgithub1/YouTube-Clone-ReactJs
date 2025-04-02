import React from 'react'
import ButtonsBuild from './ButtonsBuild';
import {buttonsArrays} from "../utils/constants"
import { useNavigate } from 'react-router-dom';


const BtnLists = () => {
  const navigate = useNavigate ();

  const handleClick = ( (e) =>{
    // console.log(e.target.textContent)
    navigate(`/results?search_query=${(e.target.textContent).replace(/ /g, "")}`)
  } )

  return (
    <div  onClick = {handleClick} className = 'whitespace-nowrap '>
      {buttonsArrays.map((items, index) => (
        <ButtonsBuild info={items} key={index} />
      ))}
    </div>
  )
}

export default BtnLists;