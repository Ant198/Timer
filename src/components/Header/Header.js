import React from 'react'
import { FaAngleDown, FaPlus } from 'react-icons/fa'

const Header = (prop) => {
  const item = [
    {
      item: 1,
      text: 'Preset',
    },
    {
      item: 2,
      text: 'Tabata' + <FaAngleDown />
    }
  ]
  return (
    <ul className="header-menu">
      <li className="item1">
        <span>Preset:</span>
      </li>
      <li className="item2">
        <span>Tabata</span> <FaAngleDown />               
      </li>
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