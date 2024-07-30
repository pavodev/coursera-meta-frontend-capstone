import React from "react";
import { NavLink } from "react-router-dom";

import "./NavMenu.scss";
import {
  ArrowLeftEndOnRectangleIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

const NavMenu = (props) => {
  return (
    <div
      className={`navigation-menu ${
        props.isOpen ? "navigation-menu__open" : ""
      }`}
    >
      <div className="navigation-menu__close" onClick={props.onClose}>
        <XMarkIcon />
      </div>
      <ul className="navigation-menu__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation-menu__link ${isActive ? "active" : ""}`
            }
            onClick={props.onClose}
          >
            <HomeIcon />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `navigation-menu__link ${isActive ? "active" : ""}`
            }
            onClick={props.onClose}
          >
            <InformationCircleIcon />
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `navigation-menu__link ${isActive ? "active" : ""}`
            }
            onClick={props.onClose}
          >
            <BookOpenIcon />
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservations"
            className={({ isActive }) =>
              `navigation-menu__link ${isActive ? "active" : ""}`
            }
            onClick={props.onClose}
          >
            <CalendarDaysIcon />
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order-online"
            className={({ isActive }) =>
              `navigation-menu__link ${isActive ? "active" : ""}`
            }
            onClick={props.onClose}
          >
            <ShoppingBagIcon />
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `navigation-menu__link ${isActive ? "active" : ""}`
            }
            onClick={props.onClose}
          >
            <ArrowLeftEndOnRectangleIcon />
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
