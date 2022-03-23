import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailSentIcon from "./icons/EmailSentIcon";
import "../css/components/Contact.css";
import {
  emailJS_User_ID,
  emailJS_service_id,
  emailJS_template_id,
} from "../config";

const Contact = () => {
  const [remaining, setRemaining] = useState(250);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState(null);
  const limitRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const displaySuccessMessage = () => {
    return (
      <div className="page-message success">
        <EmailSentIcon />
        Thanks for your message {success.toUpperCase()}!
        <br />I will personally get back to you soon as I can.
      </div>
    );
  };
  const displayErrorMessage = () => {
    const errorsList = errors.map((error, index) => (
      <li key={index}>{error}</li>
    ));
    return (
      <div className="page-message error">
        <ul>{errorsList}</ul>
      </div>
    );
  };
  const handleLimit = (e) => {
    const limit = 250;
    const left = limit - e.target.value.length;
    setRemaining(left);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    if (name && email && message) {
      emailjs
        .sendForm(
          emailJS_service_id,
          emailJS_template_id,
          e.target,
          emailJS_User_ID
        )
        .then(
          (result) => {
            if (result.status === 200) {
              e.target.reset();
              setSuccess(name);
            } else {
              setErrors([
                "There was an error sending your message.",
                "Please try again!",
              ]);
            }
          },
          (error) => {
            setErrors([
              "There was an error sending your message.",
              "Please try again!",
            ]);
          }
        );
    } else {
      let errorsMessages = [];
      if (!name) {
        nameRef.current.style.borderColor = "red";
        errorsMessages.push("A Name is required.");
      } else {
        nameRef.current.style.borderColor = "green";
      }
      if (!email) {
        emailRef.current.style.borderColor = "red";
        errorsMessages.push("A Email is required.");
      } else {
        emailRef.current.style.borderColor = "green";
      }
      if (!message) {
        messageRef.current.style.borderColor = "red";
        errorsMessages.push("A Message is required.");
      } else {
        messageRef.current.style.borderColor = "green";
      }
      if (!errorsMessages) {
        errorsMessages = [
          "There was an error sending your message.",
          "Please try again!",
        ];
      }
      setErrors(errorsMessages);
    }
  };

  return (
    <main className="contact">
      {errors
        ? displayErrorMessage()
        : success
        ? displaySuccessMessage()
        : null}
      {success ? null : (
        <form onSubmit={handleSubmit}>
          <h1>Contact Me</h1>
          <input ref={nameRef} name="name" type="text" placeholder="Name:" />
          <input
            ref={emailRef}
            name="email"
            type="email"
            placeholder="Email:"
          />
          <textarea
            ref={messageRef}
            onChange={handleLimit}
            name="message"
            type="text"
            placeholder="Message:"
            maxLength="250"
          ></textarea>
          <span ref={limitRef}>{remaining}/250</span>
          <button className="button featured" type="submit">
            submit
          </button>
        </form>
      )}
    </main>
  );
};
export default Contact;
