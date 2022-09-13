import React from "react";
import "./css/App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import CoinInfo from "./pages/CoinInfo";
import Chart from "./pages/Chart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TestCoinInfo from "./pages/TestCoinInfo";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinInfo />} />
          <Route path="/test/:id" element={<TestCoinInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
