import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <Link to="/national-park-service-app" style={{ textDecoration: "none" }}>
        <h4 className="logo">
          <FontAwesomeIcon icon={faTree} /> NATIONAL PARKS
        </h4>
      </Link>
      <ul className="navLinks">
        <Link
          to="/national-park-service-app"
          style={{ textDecoration: "none" }}
        >
          <li>HOME</li>
        </Link>
        {/* <Link to="/national-park-service-app/search">
          <li>Search</li>
        </Link> */}
        <Link
          to="/national-park-service-app/contact"
          style={{ textDecoration: "none" }}
        >
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
