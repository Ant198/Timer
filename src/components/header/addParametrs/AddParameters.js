import React, { useState } from "react";
import { FaPlus } from 'react-icons/fa'
import SettingWindow from "./SettingWindow";

function AddParameters() {
  const [ modal, setModal ] = useState(false);
  const showHideModal = () => {
    !modal ? setModal(true) : setModal(false);
    console.log(modal);
  }

  return(
    <>
      <li className="item3" onClick={showHideModal}>
        <FaPlus />
       </li>
      <SettingWindow show={modal} />
    </>
    
  )
}

export default AddParameters;
