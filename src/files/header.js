import React from "react";
import "../files/css.css";

function Header() {
  return (
    <div className="nav">
      <div className="left" onClick="/">
        <img src="/logo.png" height="100px" width="260px"></img>
      </div>
      <div className="right">
        <div className="li">
          <a className="li2">ACCUEIL</a>
          <a className="li2">Comment ça marche?</a>
          <a className="li2">Nos Services</a>
          <a className="li2">Nos Packs</a>
          <a className="li2">Contact</a>
          <a className="li2">A Propos</a>
          
       
        </div>
      </div>
    </div>
  );
}
export default Header;
