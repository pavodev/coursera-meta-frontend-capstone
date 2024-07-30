import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <ul className="navigation__links">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reservations"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
        >
          Reservations
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order-online"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
        >
          Order Online
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `navigation__link ${isActive ? "active" : ""}`
          }
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
