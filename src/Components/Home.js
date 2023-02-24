import React, { useState } from "react";
import friedRice from "../Images/FriedRice.jpg";
import egusiSoup from "../Images/egusiSoup.jpg";
import nkwobi from "../Images/nkwobi.jpg";
import chickenDrum from "../Images/chickenDrum.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";

const Home = () => {
  return (
    <div>
      <header className="header">
        <Link to="/menu">
          <button>Menu</button>
        </Link>
      </header>

      <h3>Locations</h3>
      <h3>Contact Us</h3>
      <SearchBar />

      <div className="container-one">
        <img src={friedRice} alt="fried rice" />
        <img src={egusiSoup} alt="egusi soup" />
      </div>
      <div className="container-two">
        <img src={nkwobi} alt="nkwobi" />
        <img src={chickenDrum} alt="chicken drumstick" />
      </div>

      <p>Home To Delightful Nigerian Cuisine</p>
    </div>
  );
};

export default Home;
