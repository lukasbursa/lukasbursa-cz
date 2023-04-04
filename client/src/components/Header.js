import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-md bg-body-tertiary bg-white fixed-top" id="navbar">
        <div className="container">
          <NavLink className="navbar-brand fs-1 text-uppercase fw-bolder" to="/">
            Lukáš Burša
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-column" id="navbarMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Úvod
                </NavLink>
              </li>
              
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/nemovitosti">
                  Nemovitosti
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="https://www.sreality.cz/adresar/keller-williams-moravia-brno-veveri/32747/makleri/172158" target="_blank">
                  Nemovitosti
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/clanky">
                  Články
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/odhad-zdarma" className="nav-link">
                  <strong>Odhad zdarma</strong>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
