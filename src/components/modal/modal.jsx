import React, { useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";

import "./modal.scss";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propsTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    // console.log(contentRef.current);
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };
  // console.log(props.children);
  return (
    <div className={props.class} ref={contentRef}>
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propsTypes = {
  onClose: PropTypes.func,
};

export default Modal;
