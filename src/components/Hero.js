import React from "react";
import "./Hero.scss";
import RestaurantImage from "../assets/img/restauranfood.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container section">
        <div className="hero__content">
          <h1 className="hero__title">Little Lemon</h1>
          <h3 className="hero__subtitle">Chicago</h3>
          <p className="hero__body">
            We are a family owned mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button variant="secondary" to="/reservations">
            Reserve a table
          </Button>
        </div>
        <div className="hero__image">
          <img src={RestaurantImage} alt="restaurant" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
