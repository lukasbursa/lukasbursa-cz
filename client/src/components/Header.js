import React from "react";
import { Link } from "react-router-dom"

import "./Header.css";

const Header = () => {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 text-uppercase fw-bolder" to="/">
            Lukáš Burša
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-column"
            id="navbarSupportedContent"
          >
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Domů
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nemovitosti">
                  Nemovitosti
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/clanky">Články</Link>
              </li>
              <li className="nav-item">
              <Link to="/odhad-zdarma" class="btn btn-primary">Odhad zdarma</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
