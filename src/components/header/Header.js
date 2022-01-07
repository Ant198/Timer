import React, { useState } from 'react'
import Preset from './preset/Preset'
import AddParameters from './addParametrs/AddParameters'

const Header = (props) => {
    
  return (
    <ul className="header-menu">
      <li className="item1">
        <span>Preset:</span>
      </li>
      <Preset />
      <AddParameters />
      <li className="item4">
        Sound: <span>On</span>
      </li>
    </ul>
  )
}

export default Header