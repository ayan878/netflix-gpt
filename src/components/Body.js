import React from "react";
import NetflixBg from "../assets/netflix-bg.jpg";
import Login from "./Login";

function Body() {
  return (
    <div>
      <img src={NetflixBg} alt="Netflix Background" />
      <Login />
    </div>
  );
}

export default Body;
