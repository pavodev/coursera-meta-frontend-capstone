import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <img className="navigation__logo" src={"logo.svg"} alt="logo" />
        <ul className="navigation__links">
          <li>
            <a className="navigation__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navigation__link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="navigation__link" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="navigation__link" href="#">
              Reservations
            </a>
          </li>
          <li>
            <a className="navigation__link" href="#">
              Order Online
            </a>
          </li>
          <li>
            <a className="navigation__link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
