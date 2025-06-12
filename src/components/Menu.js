import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";




const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0)
  const [isProfileDropDownOpen , setIsProfileDropDownOpen]= useState(false)

 const handleMenuClick = (index) => {
  setSelectedMenu(index);
 } 

 const handleProfileClick = (index)=>{
  setIsProfileDropDownOpen(!isProfileDropDownOpen);
 }
  
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
            style={{textDecoration:"none"}}
            to={"/"} >
            <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to={"/Orders"}>
            <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to={"/Holdings"}>
            <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to={"/Positions"}>
            <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to={"/Funds"}>
            <p>Funds</p>
            </Link>
          </li>
          <li>
            <Link
             style={{textDecoration:"none"}}
             to={"/Apps"}>
            <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
       
      </div>
    </div>
  );
};

export default Menu;