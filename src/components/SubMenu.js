import React, { useState } from "react";
import Profile from "./Profile";

const SubMenu = () => {
  const[clicked,setClicked] = useState("")

  return (
    <div className="menu__container">
      <div className="menu__container-lg">
      <div className="menu__title">
        <h3>Submenu</h3>
      </div>
     
      <div className="menu__items-lg">
        <div className={`menu__item-link ${clicked==="HOME"?"pressed":""}`} onClick={e=>setClicked(e.target.textContent)}><p>HOME</p></div>
        <div className={`menu__item-link ${clicked==="EXAMPLE"?"pressed":""}`} onClick={e=>setClicked(e.target.textContent)} > <p>EXAMPLE</p></div>
        <div className={`menu__item-link ${clicked==="CONTACT"?"pressed":""}`} onClick={e=>setClicked(e.target.textContent)}><p>CONTACT</p></div>
        <div className={`menu__item-link ${clicked==="ABOUT"?"pressed":""}`} onClick={e=>setClicked(e.target.textContent)}><p>ABOUT</p></div>
      </div>
      </div>
          <Profile/>
    </div>
  );
};

export default SubMenu;
