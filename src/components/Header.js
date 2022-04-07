import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Context from "../Context/Context";
import { useContext } from "react";
function Header() {
  const {cart} = useContext(Context);
  return (
    <div className="header">
      <div className="logo">
        <h1>React Context Api Tutorial</h1>
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/cart">Cart 
           {cart.length>0 && <span>({cart.length})</span>}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
