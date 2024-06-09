import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button className='closemodal' onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;