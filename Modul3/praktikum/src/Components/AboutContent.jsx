// import React from "react";
import heroLogo from "../Assests/img/hero.jpg";

function AboutContent() {
  return (
    <div className="card text-bg-dark">
      <img src={heroLogo} className="card-img" alt="" />
      <div className="card-img-overlay">
        <h1
          className="card-text pt-5"
          style={{ marginLeft: "12rem", marginTop: "18rem" }}
        >
          Selamat Datang
        </h1>
        <h4 className="card-text pb-5" style={{ marginLeft: "12rem" }}>
          Di Page About
        </h4>
      </div>
    </div>
  );
}

export default AboutContent;
