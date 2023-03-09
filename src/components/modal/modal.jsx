import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const modal=props=>{
    const[active, setActive]=useState(false);

    useEffect(()=>{
        setActive(props.active);
    }, [props.active]);


    return(
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>

    );
}

modal.propsTypes={
    active: PropTypes.bool,
    id: PropTypes.string
}

export const modalContent=props=>{
    const contentRef=useRef(null);

    const closeModal=()=>{
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose();
    }
    return(
        <div className="modal__content__close" onClick={closeModal}>
            <i className="bx bx-x"></i>
        </div>
        
    )
}

modalContent.propsTypes={
    onClose: PropTypes.func
}

export default modal;