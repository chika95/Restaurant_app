import React from "react";
import friedRice from "../Images/friedRice.jpg";
import egusiSoup from "../Images/egusiSoup.jpg";
import nkwobi from "../Images/nkwobi.jpg";
import chickenDrum from "../Images/chickenDrum.jpg";
import "../App.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Osuags Kitchen</h1>
      <div className="container-one">
        <img src={friedRice} alt="fried rice" />
        <img src={egusiSoup} alt="egusi soup" />
      </div>
      <div className="container-two">
        <img src={nkwobi} alt="nkwobi" />
        <img src={chickenDrum} alt="chicken drumstick" />
      </div>

      <p>Home To Delightful Cuisine</p>
    </div>
  );
};

export default Home;
