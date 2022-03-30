import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "..//assets/shawarma.avif";
import "../styles/Home.css";

function Home() {
  return ( 
  <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
          <h1>Grub Kebab</h1>
          <p>Grilled Middle-Eastern Kebabs</p>
          <Link to="/menu">
          <button>Order Now!</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;