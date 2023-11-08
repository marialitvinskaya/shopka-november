import React from "react";
import "../App.css";
// Adjust the path as needed

function LogoHeader() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/assets/Logo.png"}
        alt="Logo"
        className="logo-image"
      />
    </div>
  );
}

export default LogoHeader;
