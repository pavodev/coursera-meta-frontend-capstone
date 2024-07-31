import React, { useReducer, useState } from "react";
import ReservationForm from "../components/ReservationForm";

import "./ReservationsPage.scss";

const updateTimes = (state, action) => {
  console.log(action);
  return state;
};

const initializeAvailableTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const ReservationsPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [nrGuests, setNrGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeAvailableTimes
  );

  const onDateChange = (e) => {
    dispatchAvailableTimes({ type: "date-changed" });
    setDate(e.target.value);
  };

  const onTimeChange = (e) => {
    setTime(e.target.value);
  };

  const onNrGuestsChange = (e) => {
    setNrGuests(e.target.value);
  };

  const onOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="reservations section">
      <ReservationForm
        date={date}
        onDateChange={onDateChange}
        time={time}
        onTimeChange={onTimeChange}
        nrGuests={nrGuests}
        onNrGuestsChange={onNrGuestsChange}
        occasion={occasion}
        onOccasionChange={onOccasionChange}
        availableTimes={availableTimes}
        onSubmit={onFormSubmit}
      />
    </div>
  );
};

export default ReservationsPage;
