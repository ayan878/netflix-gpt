import React from 'react'
import Browse from "./Browse";
import NetflixBg from "../assets/netflix-bg.jpg";

function Body() {
  return (
    <div>
      <img src={NetflixBg} alt="netflicBg" />
      <Browse />
    </div>
  );
}

export default Body