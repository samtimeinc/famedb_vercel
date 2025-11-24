import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Search from "./pages/search_page/Search.jsx";
import Title from "./pages/title/Title.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useEffect, useState } from "react";
import NewSearch from "./pages/new_search/NewSearch.jsx";
import Arrow_To_Top from "./components/arrow_top/Arrow_To_Top.jsx";
import "../src/components/arrow_top/Arrow_To_Top.css";
import { scrollToTop } from "./utilities/scrollToTop.js";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<NewSearch />} />
          <Route path="/search/:title" element={<Search />} />
          <Route path="/title/:imdbID" element={<Title />} />
        </Routes>
        <Footer />
        {showBackToTop && <Arrow_To_Top scrollToTop={scrollToTop} />}
      </Router>
    </>
  );
}

export default App;
