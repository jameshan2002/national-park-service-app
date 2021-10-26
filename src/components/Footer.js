//Footer, displays at the bottom of the website.

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <Link to="/national-park-service-app" style={{ textDecoration: "none" }}>
        <h4 className="logo">
          <FontAwesomeIcon icon={faTree} /> NATIONAL PARKS
        </h4>
      </Link>
      <div className="FooterInformation">
        <p>
          Implemented{" "}
          <a
            href="https://www.nps.gov/subjects/developer/api-documentation.htm"
            alt="National Park Service API"
            style={{ color: "white" }}
          >
            National Park Service API
          </a>{" "}
          for creativity of this website.
        </p>
        <p>Made by James Han © 2021</p>
      </div>
    </div>
  );
}

export default Footer;
