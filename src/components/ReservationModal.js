import React from "react";

import "./ReservationModal.scss";
import Button from "./Button";

const ReservationModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="reservation-modal reservation-modal__overlay">
      <div className="reservation-modal__content section">
        <h1 className="title__secondary">Confirm reservation?</h1>
        <div className="reservation-modal__buttons">
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={props.onSubmit} variant="secondary">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
