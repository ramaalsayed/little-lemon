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
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [number, setNumber] = React.useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
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
      <h1 data-test-id="currentNumber">{number}</h1>
      <button data-testid="add-one" onClick={increment}>
        Add one
      </button>
    </div>
  );
}

export default App;
