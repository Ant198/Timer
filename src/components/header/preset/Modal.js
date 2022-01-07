import React from 'react'

const Modal = ({ show, onChange }) => {
  const showHideClassName = show ? 'modal-show' : 'modal-hide';
  const onClick = (event) => {
    console.log(event.target);
  }
    
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <ul className="modal-list">
          <li className="item2" >
            <a href="#" onClick={onClick}>Tabata</a>
            <div>
            <button className="modal-btn">Edit</button>
            <button className="modal-btn">Delete</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Modal