import React from "react";

import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={"logo-light.png"} alt="logo" />
      </div>
      <div className="footer__container section">
        <div className="footer__navigation footer__column">
          <h2 className="footer__title">Site navigation</h2>
          <ul className="footer__links">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `footer__link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `footer__link ${isActive ? "active" : ""}`
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservations"
                className={({ isActive }) =>
                  `footer__link ${isActive ? "active" : ""}`
                }
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-online"
                className={({ isActive }) =>
                  `footer__link ${isActive ? "active" : ""}`
                }
              >
                Order online
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__contact footer__column">
          <h2 className="footer__title">Contact</h2>
          <p>
            <span>Address</span>
            <br />
            Little Lemon Restaurant
            <br />
            2057 Willow Oaks Lane
            <br />
            Houston, Texas
          </p>
          <p>
            <span>Phone</span>
            <br />
            <a href="tel:337-401-7586">337-401-7586</a>
          </p>
          <p>
            <span>E-mail</span>
            <br />
            <a href="mailto:restaurant@littlelemon.us">
              restaurant@littlelemon.us
            </a>
          </p>
        </div>
        <div className="footer__social footer__column">
          <h2 className="footer__title">Social</h2>
          <div className="footer__social-container">
            <ul>
              <li>
                <SocialIcon network="facebook" bgColor="transparent" />
              </li>
              <li>
                <SocialIcon network="instagram" bgColor="transparent" />
              </li>
              <li>
                <SocialIcon network="linkedin" bgColor="transparent" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
