import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid text-light bg-dark">
      <div className="container">
        <div className="row small py-3">
          <div className="col-12 col-lg align-self-center">
            <p>© 2020 LUKÁŠ BURŠA | REALITNÍ MAKLÉŘ BRNO</p>
            <p>
              Zásady ochrany osobních údajů:{" "}
              <Link to="/ochrana-osobnich-udaju">
                https://www.lukasbursa.cz/ochrana-osobnich-udaju/
              </Link>
            </p>
          </div>
          <div className="col-12 col-lg text-start text-lg-end align-self-center">
            Provozovatel: Lukáš Burša, Hlavní 242, 76326 Pozlovice, IČ: 74978217
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
