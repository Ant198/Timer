import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Modal from './Modal'

const Preset = (props) => {
  let [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  }
  const hideModal = () => {
    setModal(false);
  }
  console.log(modal);
  return (
  <>
    <li className="item2" onClick={showModal}>
      <span>Tabata</span>      
      <FaAngleDown />       
    </li>
    <Modal handleClose={hideModal} show={modal}>
      <h1>Hello world</h1>
    </Modal>
   </> 
  )
}

export default Preset