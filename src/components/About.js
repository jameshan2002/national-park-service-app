//Simple page to the about of the national park service, got text from their website.

import React from "react";
import Fade from "react-reveal/Fade";
import nationalpark from "../images/nationalpark.jpg";

function About() {
  return (
    <div className="About">
      <div className="texts">
        <Fade bottom cascade>
          <h1>About</h1>
          <h3>Explore your imagination.</h3>
        </Fade>
        <p>
          Since 1916, the National Park Service has been entrusted with the care
          of our national parks. With the help of volunteers and partners, we
          safeguard these special places and share their stories with more than
          318 million visitors every year. But our work doesn't stop there. We
          are proud that tribes, local governments, nonprofit organizations,
          businesses, and individual citizens ask for our help in revitalizing
          their communities, preserving local history, celebrating local
          heritage, and creating close-to-home opportunities for kids and
          families to get outside, be active, and have fun. Taking care of the
          national parks and helping Americans take care of their communities is
          a job we love, and we need—and welcome—your help and support.
        </p>
      </div>
      <img
        className="aboutPicture"
        src={nationalpark}
        alt="National Park Service"
      />
    </div>
  );
}

export default About;
