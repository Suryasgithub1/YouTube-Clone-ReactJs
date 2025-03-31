import React from 'react'
import ButtonsBuild from './ButtonsBuild';
import {buttonsArrays} from "../utils/constants"

const BtnLists = () => {
  return (
    <div className = 'whitespace-nowrap '>
      {buttonsArrays.map((items, index) => (
        <ButtonsBuild info={items} key={index} />
      ))}
    </div>
  )
}

export default BtnLists;