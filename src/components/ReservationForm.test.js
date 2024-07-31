import { render, screen } from "@testing-library/react";

import ReservationForm from "./ReservationForm";

const mockedAvailableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

test("Renders the ReservationForm heading", () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});

test("Initializes the available times array correctly", () => {
  render(<ReservationForm availableTimes={mockedAvailableTimes} />);
  const select = screen.getByTestId("time-select");
  expect(select).toBeInTheDocument();

  const firstOption = screen.getByText("17:00");
  expect(firstOption).toBeInTheDocument();
});
