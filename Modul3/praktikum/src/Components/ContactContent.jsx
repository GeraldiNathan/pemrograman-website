// import React from "react";
import heroLogo from "../Assests/img/hero.jpg";

function ContactContent() {
  return (
    <div className="card text-bg-dark">
      <img src={heroLogo} className="card-img" alt="" />
      <div className="card-img-overlay">
        <h1
          className="card-text pt-5"
          style={{ marginLeft: "12rem", marginTop: "18rem" }}
        >
          Butuh Keluhan?
        </h1>
        <h4 className="card-text pb-5" style={{ marginLeft: "12rem" }}>
          Silahkan Hubungin Nomor di bawah
        </h4>
      </div>
    </div>
  );
}

export default ContactContent;
