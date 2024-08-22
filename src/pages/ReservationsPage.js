import React, { useEffect, useReducer, useState } from "react";
import ReservationsForm from "../components/ReservationsForm";

import "./ReservationsPage.scss";
import { fetchAPI, submitAPI } from "../mysc/api";
import { useNavigate } from "react-router-dom";
import ReservationModal from "../components/ReservationModal";

const initializeAvailableTimes = () => {
  const availableTimes = fetchAPI(new Date());
  return availableTimes;
};

const ReservationsPage = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
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

  const onModalClose = () => {
    setShow(false);
  };

  const onModalSubmit = () => {
    setShow(false);

    if (submitAPI(formData)) {
      console.log("Form Submitted");

      navigate("/reservation-confirmation", {
        state: formData,
      });
    }

    return false;
  };

  const onFormSubmit = (data) => {
    if (submitAPI(data)) {
      console.log("Form Submitted");

      navigate("/reservation-confirmation", {
        state: data,
      });
    }

    return false;
  };

  return (
    <div className="reservations section">
      {/* <ReservationModal
        show={show}
        onClose={onModalClose}
        onSubmit={onModalSubmit}
      /> */}
      <ReservationsForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmit={onFormSubmit}
      />
    </div>
  );
};

export default ReservationsPage;
