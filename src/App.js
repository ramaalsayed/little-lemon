import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import Button from "./Button";
import React, { useState } from "react";
import Menu from "./Menu";
import greek from "./icons_assets/greek salad.jpg";
import lemon from "./icons_assets/lemon dessert.jpg";
import bruch from "./icons_assets/bruchetta.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navo">
        <Header />
        <Nav />
      </div>
      <Main />
      <section className="menuCard">
        <Menu dishimg={greek} dishName={"Greek Salad"} price={"$12.99"} />
        <Menu dishimg={bruch} dishName={"Bruchetta"} price={"$5.99"} />
        <Menu dishimg={lemon} dishName={"Lemon Dessert"} price={"$12.99"} />
      </section>
      {/* <img src={restfood} alt="rest" className="mainphoto" /> */}
      <Footer />
    </div>
  );
}

export default App;
