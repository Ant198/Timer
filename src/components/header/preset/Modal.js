import React from 'react'

const Modal = ({ handleClose, show, children}) => {
  const showHideClassName = show ? 'modal-show' : 'modal-hide';
  const onClick = () => {
    handleClose();
  }
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={onClick}>
          Close
        </button>
      </section>
    </div>
  )
}

export default Modal