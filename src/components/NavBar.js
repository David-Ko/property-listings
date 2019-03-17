import React from "react";
import "../../src/index.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <ul id="nav-ul">
        <li class="nav-li">
          <NavLink className="nav-link" to="/">
            REBCA
          </NavLink>
        </li>
        <li class="nav-li">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li class="nav-li">
          <NavLink className="nav-link" to="/listings">
            Listings
          </NavLink>
        </li>
        <li class="nav-li">
          <NavLink className="nav-link" to="/">
            Contact Us
          </NavLink>
        </li>
        <li class="nav-li">
          <NavLink className="nav-link" to="/">
            About Us
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
