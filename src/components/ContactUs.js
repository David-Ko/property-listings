import React from "react";
import picture from "../assets/images/home.jpg";

function ContactUs(props) {
  return (
    <div className="container welcome">
      <div className="welcome-text">Contact Us!</div>
      <p className="welcome-text">
        Email:{" "}
        <a href="mailto:info@rebca.ca" target="_blank">
          info@rebca.ca
        </a>
      </p>
      <p className="welcome-text">
        Phone:{" "}
        <a href="#" target="_blank">
          604-822-8993
        </a>
      </p>
      <img className="background-picture" src={picture} alt="" />
    </div>
  );
}
export default ContactUs;
