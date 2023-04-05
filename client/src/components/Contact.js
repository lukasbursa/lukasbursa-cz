import {
  BsFacebook,
  BsYoutube,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsGeoAltFill,
} from "react-icons/bs";
import FormContact from "./FormContact";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="container-fluid pt-5 pb-2 text-light bg-dark">
      <div className="container">
        <div className="row">
          <h2 className="fw-bolder display-4 text-uppercase text-center mb-4">
            Kontakt
          </h2>
          <div className="col-12 col-md mb-3 links">
            <h3>Lukáš Burša</h3>
            <p className="lead">Keller Williams Czech Republic</p>
            <p className="d-flex align-items-center">
              <BsGeoAltFill className="bi me-2" />
              Kancelář: Kotlářská 265/5, 60200 Brno
            </p>
            <p>
              <a
                href="tel:+420605155843"
                className="d-inline-flex align-items-center"
              >
                <BsTelephoneFill className="bi me-2" />
                +420 605 155 843
              </a>
            </p>
            <p>
              <a
                href="mailto:info@lukasbursa.cz"
                className="d-inline-flex align-items-center"
              >
                <BsEnvelopeFill className="bi me-2" />
                info@lukasbursa.cz
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/lukasbursa.cz/"
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center"
              >
                <BsFacebook className="bi me-2" />
                @lukasbursa.cz
              </a>
            </p>
            <p>
              <a
                href="https://www.youtube.com/channel/UCYZwccz9oenLwituc6CSwJg"
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center"
              >
                <BsYoutube className="bi me-2" />
                Reality s Lukášem
              </a>
            </p>
            <p>
              <a
                href="http://www.youtube.com/user/lbursa"
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex align-items-center"
              >
                <BsYoutube className="bi me-2" />
                Videoprohlídky
              </a>
            </p>
          </div>
          <div className="col-12 col-md">
            <h3>Chcete se na něco zeptat?</h3>
            <p className="lead">Ozvěte se mi. Rád vám poradím.</p>
            <FormContact />
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Contact;
