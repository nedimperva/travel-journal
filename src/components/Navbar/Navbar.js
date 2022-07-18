import React from "react";
import "./Navbar.css";
import earthIcon from "../../images/earth.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={earthIcon} alt="Earth Icon" width={30} height={30} />
      <p>my travel journal</p>
    </div>
  );
}

export default Navbar;
