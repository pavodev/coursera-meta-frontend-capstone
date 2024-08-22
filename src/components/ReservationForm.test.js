import { fireEvent, render, screen } from "@testing-library/react";

import ReservationForm from "./ReservationsForm";
import userEvent from "@testing-library/user-event";

const mockedAvailableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

test("Renders the ReservationForm heading", () => {
  render(<ReservationForm availableTimes={mockedAvailableTimes} />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

test("Initializes the available times array correctly", () => {
  render(<ReservationForm availableTimes={mockedAvailableTimes} />);
  const select = screen.getByTestId("time");
  expect(select).toBeInTheDocument();

  const firstOption = screen.getByText("17:00");
  expect(firstOption).toBeInTheDocument();
});

test("Check if form fields are rendered correctly with correct attributes", () => {
  render(<ReservationForm availableTimes={mockedAvailableTimes} />);
  const dateInput = screen.getByTestId("date");
  const timeInput = screen.getByTestId("time");
  const nrGuestsInput = screen.getByTestId("nrGuests");
  const occasionSelect = screen.getByTestId("occasion");

  expect(dateInput).toBeInTheDocument();
  expect(timeInput).toBeInTheDocument();
  expect(nrGuestsInput).toBeInTheDocument();
  expect(occasionSelect).toBeInTheDocument();

  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toHaveAttribute("name", "date");
  expect(timeInput).toHaveAttribute("name", "time");
  expect(nrGuestsInput).toHaveAttribute("type", "number");
  expect(nrGuestsInput).toHaveAttribute("name", "nrGuests");
  expect(occasionSelect).toHaveAttribute("name", "occasion");
});

test("Form submission returns correct initial values", () => {
  render(<ReservationForm availableTimes={mockedAvailableTimes} />);
  fireEvent.click(screen.getByText(/Make your reservation/i));
});
