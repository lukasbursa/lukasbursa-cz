import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const contactForm = useRef();
  const [sendError, setSendError] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const sendContactEmail = (e) => {
    e.preventDefault();
    setSendError(false);
    setSendSuccess(false);

    emailjs
      .sendForm(
        "service_ba87g5a",
        "template_v8lpc4d",
        contactForm.current,
        "kgKQpehXH_DObIX_Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendSuccess(true);
          contactForm.current.contactForm_name.value = "";
          contactForm.current.contactForm_email.value = "";
          contactForm.current.contactForm_phone.value = "";
          contactForm.current.contactForm_message.value = "";
        },
        (error) => {
          console.log(error.text);
          setSendError(true);
        }
      );
  };

  return (
    <>
      <form ref={contactForm} onSubmit={sendContactEmail}>
        <div className="mb-3">
          <label htmlFor="contactForm_name" className="form-label">
            Jméno a příjmení *
          </label>
          <input
            type="text"
            className="form-control"
            id="contactForm_name"
            name="contactForm_name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactForm_email" className="form-label">
            E-mail *
          </label>
          <input
            type="email"
            className="form-control"
            id="contactForm_email"
            name="contactForm_email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactForm_phone" className="form-label">
            Telefonní číslo *
          </label>
          <input
            type="text"
            className="form-control"
            id="contactForm_phone"
            name="contactForm_phone"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactForm_message" className="form-label">
            Zpráva *
          </label>
          <textarea
            className="form-control"
            id="contactForm_message"
            name="contactForm_message"
            required
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-light">
          Odeslat zprávu
        </button>
      </form>
      {sendSuccess && (
        <div className="alert alert-success mt-3" role="alert">
          Zpráva byla úspěšně odeslána. Potvrzení najdete v emailu.
        </div>
      )}
      {sendError && (
        <div className="alert alert-danger mt-3" role="alert">
          Bohužel došlo k chybě při odeslání. Zkuste to znovu.
        </div>
      )}
    </>
  );
};

export default FormContact;
