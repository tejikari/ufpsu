import React from "react";
import { Link } from "react-router-dom";
import psuLogo from "../assets/psu_logo.png";
import "./NavBar.css";

export const NavBar = (): JSX.Element => {
  return (
    <nav className="topnav">
      <ul>
        <li className="linkitem">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="linkitem">
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/">
            <img id="logo" src={psuLogo} alt="PSU logo" />
          </Link>
        </li>
        <li className="linkitem">
          <Link to="/board">Board</Link>
        </li>
        <li className="linkitem">
          <Link to="/statements">Statements</Link>
        </li>
      </ul>
    </nav>
  );
};
