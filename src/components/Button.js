import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.to ? props.to : "#"}>
      <button
        className={`button button-${props.variant}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
