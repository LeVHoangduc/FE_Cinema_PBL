import React from "react";
import PropTypes from "prop-types";

import "./button.scss";
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onclick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <button
      className={`btn-outline ${props.className}`}
      onClick={props.onclick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

// button.PropTypes = {
//   onclick: PropTypes.func,
// };
export default Button;
