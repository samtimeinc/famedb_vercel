import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footer__container">
      <div className="row footer__row">
        <figure>
          <Link to="/">
            <img src={logo} alt="" className="logo__img footer__img" />
          </Link>
        </figure>

        <div className="footer__links">
          <Link to={"/"} className="footer__link link__hover--effect">
            Home
          </Link>
          <Link className="footer__link link__hover--effect no-cursor">
            Careers
          </Link>
          <Link className="footer__link link__hover--effect no-cursor">
            Press
          </Link>
          <Link className="footer__link link__hover--effect no-cursor">
            Contact
          </Link>
        </div>

        <p className="copyright">&copy;2023 Sam Phin</p>
      </div>
    </div>
  );
};

export default Footer;
