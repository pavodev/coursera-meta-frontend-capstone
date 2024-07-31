import React, { useReducer, useState } from "react";
import ReservationsForm from "../components/ReservationsForm";

import "./ReservationsPage.scss";
import { fetchAPI } from "../mysc/api";

const initializeAvailableTimes = () => {
  const availableTimes = fetchAPI(new Date());
  return availableTimes;
};

const ReservationsPage = () => {
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [time, setTime] = useState("");
  const [nrGuests, setNrGuests] = useState(0);
  const [occasion, setOccasion] = useState("");

  const updateTimes = (state, action) => {
    console.log("state", state);
    if (action.type === "date-changed") {
      state.availableTimes = fetchAPI(date);
    }

    return state;
  };

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
      <ReservationsForm
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
