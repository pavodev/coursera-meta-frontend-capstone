import React from "react";
import "./ButtonCta.scss";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const ButtonCta = (props) => {
  return (
    <button
      className={`button button-cta button-${props.variant}`}
      href="#"
      onClick={props.onClick}
    >
      <span className="button-cta__label">{props.children}</span>
      <ShoppingCartIcon className="icon" />
    </button>
  );
};

export default ButtonCta;
