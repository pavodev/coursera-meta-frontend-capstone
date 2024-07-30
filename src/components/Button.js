import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={`button button-${props.variant}`}
      href="#"
      onClick={props.onClick}
    >
      Button
    </button>
  );
};

export default Button;
