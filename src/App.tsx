import React from "react";
import "./css/App.css";
import Header from "./Components/Header";
import Home from "./pages/Home";
import CoinInfo from "./pages/CoinInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestCoinInfo from "./pages/TestCoinInfo";
import Footer from "./Components/Footer";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <div className={theme.isDarkMode ? "app__dark" : "app__light"}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinInfo />} />
          <Route path="/test/:id" element={<TestCoinInfo />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
