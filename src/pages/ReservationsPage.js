import React, { useEffect, useReducer, useState } from "react";
import ReservationsForm from "../components/ReservationsForm";

import "./ReservationsPage.scss";
import { fetchAPI, submitAPI } from "../mysc/api";
import { useNavigate } from "react-router-dom";

const initializeAvailableTimes = () => {
  const availableTimes = fetchAPI(new Date());
  return availableTimes;
};

const ReservationsPage = () => {
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const navigate = useNavigate();

  const updateTimes = (state, action) => {
    console.log("state", state);
    if (action.type === "date-changed") {
      state = fetchAPI(date);
    }

    return state;
  };

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeAvailableTimes
  );

  const onDateChange = (e) => {
    setDate(e.target.value);
    dispatchAvailableTimes({ type: "date-changed" });
  };

  const onFormSubmit = (data) => {
    console.log(data);

    if (submitAPI(data)) {
      navigate("/reservation-confirmation", {
        state: data,
      });
      console.log("Form Submitted");
    }

    return false;
  };

  return (
    <div className="reservations section">
      <ReservationsForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmit={onFormSubmit}
      />
    </div>
  );
};

export default ReservationsPage;
