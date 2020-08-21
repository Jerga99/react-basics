
import React from 'react';

const Modal = ({isOpen, onClose}) => {

  if (isOpen) {
    return (
      <div className="app-modal">
        <div className="app-modal-content">
          <span
            onClick={onClose}
            className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    )
  }

  return <></>
}


export default Modal;
