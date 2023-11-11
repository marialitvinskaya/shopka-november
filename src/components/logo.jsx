import React from "react";
import "../App.css";
import {Link} from "react-router-dom";
// Adjust the path as needed

function LogoHeader() {
  return (
    <div>
        <Link to="/">
      <img
        src={process.env.PUBLIC_URL + "/assets/Logo.png"}
        alt="Logo"
        className="logo-image"
      />
        </Link>
    </div>
  );
}
export default LogoHeader;
