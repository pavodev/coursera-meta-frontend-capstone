import React from "react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import "./ReservationsForm.scss";

const getCurrentDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};

const ReservationsForm = (props) => {
  const formik = useFormik({
    initialValues: {
      date: getCurrentDate(),
      time: props.availableTimes?.length ? props.availableTimes[0] : "",
      nrGuests: 1,
      occasion: "",
    },
    validateOnChange: (data) => {
      console.log("CHANGED", data);
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .required()
        .default(getCurrentDate())
        .min(getCurrentDate(), "Date must be in the future."),
      time: Yup.string()
        .required()
        .default(props.availableTimes.length ? props.availableTimes[0] : ""),
      nrGuests: Yup.number()
        .required()
        .min(1, "There must be at least 1 guest.")
        .max(10, "There must be maximum 10 guests"),
      occasion: Yup.string()
        .required()
        .default("")
        .oneOf(["Birthday", "Anniversary"]),
    }),
    onSubmit: props.onSubmit,
  });

  return (
    <>
      <h1 className="title__primary">Reserve a table</h1>
      <FormikProvider value={formik}>
        <Form className="reservation-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <Field
            id="res-date"
            type="date"
            name="date"
            {...formik.getFieldProps("date")}
            onChange={props.onDateChange}
            data-testid="date"
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="reservation-form__error" data-testid="date-error">
              {formik.errors.date}
            </div>
          ) : null}
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formik.values.time}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            data-testid="time"
          >
            {props.availableTimes?.map((availableTime) => (
              <option key={availableTime}>{availableTime}</option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time ? (
            <div className="reservation-form__error" data-testid="time-error">
              {formik.errors.time}
            </div>
          ) : null}
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            id="nrGuests"
            name="nrGuests"
            min="1"
            max="10"
            value={formik.values.nrGuests}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            data-testid="nrGuests"
          />
          {formik.touched.nrGuests && formik.errors.nrGuests ? (
            <div
              className="reservation-form__error"
              data-testid="nrGuests-error"
            >
              {formik.errors.nrGuests}
            </div>
          ) : null}
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formik.values.occasion}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            data-testid="occasion"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
            <div
              className="reservation-form__error"
              data-testid="occasion-error"
            >
              {formik.errors.occasion}
            </div>
          ) : null}
          <button className="button" type="submit">
            Make your reservation
          </button>
        </Form>
      </FormikProvider>
    </>
  );
};

export default ReservationsForm;
