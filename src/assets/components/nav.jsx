import React from 'react';
import '../css/nav.css';
import Hamburger from 'hamburger-react';

const Nav = () => {
  return (
    <div id="title">

      <div id="title-content">
        
        <nav>
          <Hamburger size={20} direction="right" color="white" id="menu"/> 
          <div id="title-logo">
            <div id="title-logo-image"></div>
            <div id="yellowBar"></div>
          </div>
          <div id="title-links">
          <a href="www.github.com"> About </a>
          <a href="www.github.com"> Furnitures </a>
          <a href="www.github.com"> Shop </a>
          <a href="www.github.com"> Contact </a>
          </div>
        </nav>

        <img id="title-text" alt="title-text" src="https://github.com/FrankZiWANG-dev/woodstock/blob/main/src/assets/pictures/WOOD%20STOCK.png?raw=true"/>
      
      </div>

      <div id="title-bg">
        <div id="title-left"></div>
        <div id="title-right"></div>
      </div>
      
    </div>
  );
}

export default Nav;
