import React, { useState } from "react";

import "./ReservationForm.scss";

const ReservationForm = (props) => {
  return (
    <form className="reservation-form" onSubmit={props.onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        required
        type="date"
        id="res-date"
        value={props.date}
        onChange={props.onDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        required
        id="res-time"
        value={props.time}
        onChange={props.onTimeChange}
      >
        {props.availableTimes.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        required
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={props.nrGuests}
        onChange={props.onNrGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        required
        id="occasion"
        value={props.occasion}
        onChange={props.onOccasionChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input className="button" type="submit" value="Make Your reservation" />
    </form>
  );
};

export default ReservationForm;
