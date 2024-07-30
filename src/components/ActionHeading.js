import React from "react";
import Button from "./Button";

import "./ActionHeading.scss";

const ActionHeading = (props) => {
  return (
    <div className="action-heading">
      <h2 className="action-heading__title">{props.title}</h2>
      <Button className="action-heading__button" variant="secondary">
        {props.actionLabel}
      </Button>
    </div>
  );
};

export default ActionHeading;
