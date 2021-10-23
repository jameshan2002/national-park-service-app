import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/national-park-service-app" style={{ textDecoration: "none" }}>
        <h4 className="logo">Park Service</h4>
      </Link>
      <ul className="navLinks">
        <Link
          to="/national-park-service-app"
          style={{ textDecoration: "none" }}
        >
          <li>Home</li>
        </Link>
        {/* <Link to="/national-park-service-app/search">
          <li>Search</li>
        </Link> */}
        <Link
          to="/national-park-service-app/contact"
          style={{ textDecoration: "none" }}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
