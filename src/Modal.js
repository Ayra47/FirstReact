import React from "react";


const Modal = ({active, setActive}) => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    );
};

export default Modal;