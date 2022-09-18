import "./css/App.css";
import Header from "./Components/Header";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import { useTheme } from "./Context/ThemeProvider";
import CoinInfoPage from "./pages/CoinInfoPage/CoinInfoPage";

const App = () => {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <div className={theme.isDarkMode ? "app__dark" : "app__light"}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<CoinInfoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
