import "./css/App.css";
import Header from "./Components/Header";
import HomePage from "./pages/HomePage/HomePage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:coinId" element={<CoinInfoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
