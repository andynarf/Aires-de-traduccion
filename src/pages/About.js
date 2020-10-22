import React from "react";
import NavBar from "./../components/navbar/NavBar";

import feature_img from "../assets/images/nosotros.jpeg";
import "./About.css";
import Language from "../components/Languages/Language";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about__feature-img">
        <Language />
        <span>Welcome</span>
      </div>
      <div className="about__info">
        <p>
          Our company specializes in translation as well as other linguistic
          services <br />
          both for individuals and private companies.
          <br />
          Our team is composed by
          <br />
          professional translators and editors specialized in several languages
          <br />
          and subject matters.
        </p>
        <p>
          Learn more about our
          <Link to="/services">Sevices.</Link>
        </p>
      </div>
    </div>
  );
};

export default About;
