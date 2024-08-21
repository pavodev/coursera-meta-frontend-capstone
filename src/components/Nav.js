import React, { useState } from "react";
import "./Nav.scss";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Links from "./Links";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuOpen = () => {
    setMenuOpen(true);
  };

  const onMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__container section">
        <Link className="navigation__logo" to="/">
          <img src={"logo.svg"} alt="logo" />
        </Link>
        <div className="navigation__trigger" onClick={onMenuOpen}>
          <Bars3Icon />
        </div>
        <Links />
        <NavMenu isOpen={menuOpen} onClose={onMenuClose} />
      </div>
    </nav>
  );
};

export default Nav;
