import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid py-4 text-light">
      <div className="container">
        <div className="row">
          <h2 className="fw-bolder text-uppercase text-center mb-3">Kontakt</h2>
          <div className="col">
            <h3>Lukáš Burša</h3>
            <p>Keller Williams Czech Republic</p>
            <p>Kancelář: Kotlářská 265/5, 60200 Brno</p>
            <p>
              <a href="tel:+420605155843">+420 605 155 843</a>
            </p>
            <p>
              <a href="mailto:info@lukasbursa.cz">info@lukasbursa.cz</a>
            </p>
            <p>
              <a href="#">FB - @lukasbursa.cz</a>
            </p>
            <p>
              <a href="#">Youtube - Reality s Lukášem</a>
            </p>
            <p>
              <a href="#">Youtube - Videoprohlídky</a>
            </p>
          </div>
          <div className="col">
            <h3>Chcete se na něco zeptat?</h3>
            <p>Ozvěte se mi. Rád vám poradím.</p>
            <form>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Jméno a příjmení
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Telefonní číslo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Zpráva
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <p>© 2020 LUKÁŠ BURŠA | REALITNÍ MAKLÉŘ BRNO</p>
            <p>
              Zásady ochrany osobních údajů:{" "}
              <Link to="/ochrana-osobnich-udaju">
                https://www.lukasbursa.cz/ochrana-osobnich-udaju/
              </Link>
            </p>
          </div>
          <div className="col">
            Provozovatel: Lukáš Burša, Hlavní 242, 76326 Pozlovice, IČ: 74978217
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
