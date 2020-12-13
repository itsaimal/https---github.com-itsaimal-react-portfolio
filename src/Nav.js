import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://angular.io/assets/images/logos/angular/angular.png"
        alt="AK Logo"
      />
      <img
        className="nav__avatar"
       
      />
    </div>
  )
}

export default Nav