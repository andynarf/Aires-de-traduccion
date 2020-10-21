import React from "react";
import { Button } from "@material-ui/core";

import './NavBar.css'
import Logo from "./../../assets/images/logo_rgb.jpg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="aires logo" />
      </div>
      <div className='navbar__buttons'>
        <Button variant="contained" className='btn-active' color="primary">
          About us
        </Button>
        <Button variant="contained" color="primary">
          Services
        </Button>
        <Button variant="contained" color="primary">
          Blog
        </Button>
        <Button variant="contained" color="primary">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
