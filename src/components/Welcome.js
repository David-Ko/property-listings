import React from "react";
import picture from "../assets/images/home.jpg";

function Welcome(props) {
  return (
    <div className="container welcome">
      <div className="welcome-text">Welcome to REBCA</div>
      <img className="background-picture" src={picture} alt="" />
    </div>
  );
}
export default Welcome;
