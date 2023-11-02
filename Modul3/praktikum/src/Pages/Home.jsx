import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* <div>
        <img src=".Assets/hero.jpg" alt="" />
        <p>Selamat Datang</p>
        <p>di Website Praktikum Pemrograman Website </p>
      </div> */}
      <Footer />
    </>
  );
}

export default HomePage;
