import React from "react";

import "./ReservationConfirmationPage.scss";
import { useLocation } from "react-router-dom";

const ReservationConfirmationPage = () => {
  const location = useLocation();

  return (
    <div className="confirmation">
      <div className="confirmation__container section">
        <h1 className="title__primary">Reservation confirmed!</h1>
        <div className="confirmation__recap">
          <p className="confirmation__label">Date:</p>
          <p className="confirmation__value">{location.state.date}</p>
          <p className="confirmation__label">Time:</p>
          <p className="confirmation__value">{location.state.time}</p>
          <p className="confirmation__label">Number of guests:</p>
          <p className="confirmation__value">{location.state.nrGuests}</p>
          <p className="confirmation__label">Occasion</p>
          <p className="confirmation__value">{location.state.occasion}</p>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmationPage;
