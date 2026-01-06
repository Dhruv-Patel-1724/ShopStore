import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Products from "./Components/Pages/Products";
import CardItem from "./Components/Pages/CardItem";
import AddProducts from "./Components/Pages/AddProducts";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Products />} path="/products" />
          <Route element={<AddProducts />} path="/addproducts" />
          <Route element={<CardItem />} path="/cart" />
        </Routes>
      </div>
    </>
  );
};

export default App;
