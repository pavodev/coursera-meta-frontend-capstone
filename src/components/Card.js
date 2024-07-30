import React from "react";

import "./Card.scss";
import ButtonCta from "./ButtonCta";

const Card = (props) => {
  return (
    <div className="card">
      {/* <div className="card__image"> */}
      <img src={props.imageSrc} alt={`${props.title}`} />
      {/* </div> */}
      <div className="card__content">
        <div className="card__title">
          <h3>{props.title}</h3>
          <span>{props.price}</span>
        </div>
        <div className="card__body">{props.body}</div>
      </div>
      <div className="card__cta">
        <ButtonCta variant="primary">Order a delivery</ButtonCta>
      </div>
    </div>
  );
};

export default Card;
