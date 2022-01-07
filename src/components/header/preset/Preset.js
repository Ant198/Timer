import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Modal from './Modal'

const Preset = (props) => {
  let [modal, setModal] = useState(false);
  let [nameMode, setNameMode] = useState('Tabata');
  const showHideModal = () => {
    !modal ? setModal(true) : setModal(false);
  } 
  const choiceMode = (name) => {
    setNameMode(name)
  }

  return (
  <>
    <li className="item2" onClick={ showHideModal }>
      <span>{nameMode}</span>
      <FaAngleDown /> 
    </li>
    <Modal
      show={ modal }
      onChange={ choiceMode }
    />
  </> 
  )
}

export default Preset