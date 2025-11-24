import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import { CircleUserRound, Search } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container nav__container">
      <div className="row nav__row">
        <figure className="logo__img--wrapper">
          <Link to="/">
            <img src={logo} alt="" className="logo__img" />
          </Link>
        </figure>

        <div className="nav__links">
          <Link to={"/"} className="nav__link link__hover--effect">
            Home
          </Link>
          <Link to={"/search"} className="nav__link link__hover--effect">
            Search
          </Link>

          <button className="nav__login--btn no-cursor">
            <CircleUserRound size={32} className="log-in-img" />
            <div className="log-in">Log In</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
