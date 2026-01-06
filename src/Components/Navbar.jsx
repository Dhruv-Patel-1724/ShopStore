import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">StoreShop</div>

      <ul className="navbar__links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/addproducts">Add Products</NavLink>
        </li>

        <li>
          <NavLink to="/cart">Cart Items</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
