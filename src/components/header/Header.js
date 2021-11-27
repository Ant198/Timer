import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import Preset from './preset/Preset'

const Header = (prop) => {
    
  return (
    <ul className="header-menu">
      <li className="item1">
        <span>Preset:</span>
      </li>
      <Preset />
      <li className="item3">
        <FaPlus />
      </li>
      <li className="item4">
        Sound: <span>On</span>
      </li>
    </ul>
  )
}

export default Header