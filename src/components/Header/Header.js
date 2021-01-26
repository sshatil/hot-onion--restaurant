import React from "react";
import "./Header.css";
// import background from "../../images/bannerbackground.png";

const Header = () => {
  return (
    <div className="header">
      <p>Best food waiting for your belly</p>
      <div className='search'>
          <input type="text" placeholder="Search your food"/>
          <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Header;
