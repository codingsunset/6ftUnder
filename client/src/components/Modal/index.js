import React from 'react';
import './styles.css'

const Modal = ({showModal, hideModal}) => {
    const showModalClass = showModal ? 'modal display-block': 'modal display-none';
    return(
        <div className = {showModalClass}>
            <span>Congratulations on your first compost!</span>
            <button onClick={hideModal}>Close</button>
        </div>
    )
}

export default Modal;
