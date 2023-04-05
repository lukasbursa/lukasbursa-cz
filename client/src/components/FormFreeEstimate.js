import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const FormFreeEstimate = () => {
  const estimateForm = useRef();
  const [sendError, setSendError] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const sendEstimateEmail = (e) => {
    e.preventDefault();
    setSendError(false);
    setSendSuccess(false);

    emailjs
      .sendForm(
        "service_ba87g5a",
        "template_3qpwnhs",
        estimateForm.current,
        "kgKQpehXH_DObIX_Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendSuccess(true);
          estimateForm.current.estimateForm_address.value = "";
          estimateForm.current.estimateForm_area.value = "";
          estimateForm.current.estimateForm_rooms.value = "";
          estimateForm.current.estimateForm_floor.value = "";
          estimateForm.current.estimateForm_message.value = "";
          estimateForm.current.estimateForm_name.value = "";
          estimateForm.current.estimateForm_phone.value = "";
          estimateForm.current.estimateForm_email.value = "";
          for (const checkbox of estimateForm.current.estimateForm_estateType) {
            checkbox.checked = false;
          }
          for (const checkbox of estimateForm.current
            .estimateForm_estateCondition) {
            checkbox.checked = false;
          }
          for (const checkbox of estimateForm.current.estimateForm_more) {
            checkbox.checked = false;
          }
        },
        (error) => {
          console.log(error.text);
          setSendError(true);
        }
      );
  };

  return (
    <section className="container-fluid pt-5 pb-2 text-light bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="fw-bolder display-4 text-uppercase text-center mb-4">
            Chci odhad ceny zdarma
          </h2>
          <p className="lead text-center pb-3">
            Pro přesnější odhad mi napište do poznámky co nejvíce informací o
            vaší nemovitosti.
          </p>
          <form
            ref={estimateForm}
            onSubmit={sendEstimateEmail}
            className="col-12 col-lg-6"
          >
            <div className="mb-3">
              <label htmlFor="estimateForm_address" className="form-label">
                Adresa nemovitosti (ulice, č.p. a město) *
              </label>
              <input
                type="text"
                className="form-control"
                id="estimateForm_address"
                name="estimateForm_address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_estateType" className="form-label">
                Typ nemovitosti *
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateType"
                  id="estimateForm_estateType_dum"
                  value="Dům"
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateType_dum"
                >
                  Dům
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateType"
                  id="estimateForm_estateType_byt"
                  value="Byt"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateType_byt"
                >
                  Byt
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateType"
                  id="estimateForm_estateType_pozemek"
                  value="Pozemek"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateType_pozemek"
                >
                  Pozemek
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateType"
                  id="estimateForm_estateType_jine"
                  value="Jiné"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateType_jine"
                >
                  Jiné
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="estimateForm_estateCondition"
                className="form-label"
              >
                Stav nemovitosti
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateCondition"
                  id="estimateForm_estateCondition_novostavba"
                  value="Novostavba"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateCondition_novostavba"
                >
                  Novostavba
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateCondition"
                  id="estimateForm_estateCondition_kompletreko"
                  value="Kompletně po rekonstrukci"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateCondition_kompletreko"
                >
                  Kompletně po rekonstrukci
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateCondition"
                  id="estimateForm_estateCondition_castreko"
                  value="Částečně po rekonstrukci"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateCondition_castreko"
                >
                  Částečně po rekonstrukci
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateCondition"
                  id="estimateForm_estateCondition_nadstandard"
                  value="Nadstandardní"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateCondition_nadstandard"
                >
                  Nadstandardní
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateCondition"
                  id="estimateForm_estateCondition_dobry"
                  value="Dobrý"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateCondition_dobry"
                >
                  Dobrý
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="estimateForm_estateCondition"
                  id="estimateForm_estateCondition_spatny"
                  value="Špatný"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_estateCondition_spatny"
                >
                  Špatný
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_area" className="form-label">
                Plocha nemovitosti (m2)
              </label>
              <input
                type="text"
                className="form-control"
                id="estimateForm_area"
                name="estimateForm_area"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_rooms" className="form-label">
                Počet místností
              </label>
              <input
                type="text"
                className="form-control"
                id="estimateForm_rooms"
                name="estimateForm_rooms"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_floor" className="form-label">
                Patro (suterén, přízemí, 1. patro, 2.patro atd.)
              </label>
              <input
                type="text"
                className="form-control"
                id="estimateForm_floor"
                name="estimateForm_floor"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_more" className="form-label">
                Něco navíc
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="estimateForm_more_balkon"
                  value="Balkon / Lodžie"
                  name="estimateForm_more"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_more_balkon"
                >
                  Balkon / Lodžie
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="estimateForm_more_terasa"
                  value="Terasa"
                  name="estimateForm_more"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_more_terasa"
                >
                  Terasa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="estimateForm_more_zahrada"
                  value="Zahrada"
                  name="estimateForm_more"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_more_zahrada"
                >
                  Zahrada
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="estimateForm_more_sklep"
                  value="Sklep"
                  name="estimateForm_more"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_more_sklep"
                >
                  Sklep
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="estimateForm_more_garaz"
                  value="Garáž"
                  name="estimateForm_more"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_more_garaz"
                >
                  Garáž
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="estimateForm_more_stani"
                  value="Parkovací stání"
                  name="estimateForm_more"
                />
                <label
                  className="form-check-label"
                  htmlFor="estimateForm_more_stani"
                >
                  Parkovací stání
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_message" className="form-label">
                Poznámka
              </label>
              <textarea
                className="form-control"
                id="estimateForm_message"
                name="estimateForm_message"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_name" className="form-label">
                Jméno a příjmení *
              </label>
              <input
                type="text"
                className="form-control"
                id="estimateForm_name"
                name="estimateForm_name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_phone" className="form-label">
                Telefonní číslo *
              </label>
              <input
                type="text"
                className="form-control"
                id="estimateForm_phone"
                name="estimateForm_phone"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="estimateForm_email" className="form-label">
                E-mail *
              </label>
              <input
                type="email"
                className="form-control"
                id="estimateForm_email"
                name="estimateForm_email"
                required
              />
            </div>
            <p>
              Odesláním formuláře souhlasíte se zpracováním osobních údajů pro
              marketingové účely.{" "}
              <Link
                to="/ochrana-osobnich-udaju"
                target="_blank"
                rel="noreferrer"
              >
                Zásady ochrany osobních údajů
              </Link>
            </p>
            <button type="submit" className="btn btn-light">
              Odeslat a získat odhad
            </button>
            {sendSuccess && (
              <div className="alert alert-success mt-3" role="alert">
                Poptávka po odhadu byla úspěšně odeslána. Potvrzení najdete v
                emailu.
              </div>
            )}
            {sendError && (
              <div className="alert alert-danger mt-3" role="alert">
                Bohužel došlo k chybě při odeslání. Zkuste to znovu.
              </div>
            )}
          </form>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default FormFreeEstimate;
