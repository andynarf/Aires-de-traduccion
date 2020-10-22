import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton } from "@material-ui/core";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__links">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer__right">
          <span>Find Us</span>

          <div className="footer__social-links">
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <span>
        {" "}
        Copyright - {new Date().getUTCFullYear()} www.airesdetraduccion.com ALL
        RIGHTS RESERVED{" "}
      </span>
    </div>
  );
};

export default Footer;
