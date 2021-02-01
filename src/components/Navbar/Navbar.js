import React from "react";
import logo from "../../images/logo2.png";
import "./Navbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to={'/'}>
          <img src={logo} alt="restaurant log" />
        </Link>
      </div>
      <div className="right-side">
        <div className="shopping-logo">
          <ShoppingCartIcon />
        </div>
        <p>Login</p>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
