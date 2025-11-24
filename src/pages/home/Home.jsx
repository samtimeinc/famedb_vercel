import React from "react";
import led_theater from "../../assets/led_theater.jpg";
import "./Home.css";
import { Clapperboard, Search, Smile } from "lucide-react";
import SearchBar from "../../components/search_bar/SearchBar";
import { useSearch } from "../../custom_hooks/useSearch.js";

const Home = () => {
  const { searchTitle, setSearchTitle, handleSearch } = useSearch(); // custom hook for search

  return (
    <div className="container home__container">
      <div className="row home__row">
        <figure className="background__img--wrapper">
          <div className="search-bar--Home-Page">
            <SearchBar
              handleSearch={handleSearch}
              setSearchTitle={setSearchTitle}
              searchTitle={searchTitle}
            />
          </div>
          <img src={led_theater} alt="" className="background--img" />
        </figure>

        <div className="hero">
          <h1>Dive Deeper</h1>

          <div className="icon__container">
            <Clapperboard size={64} className="icon" />
            <Search size={64} className="icon" />
            <Smile size={64} className="icon" />
          </div>

          <p>
            Thousands of your favorite titles and growing. Get more out of the
            movies and shows you love. Start your search now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
