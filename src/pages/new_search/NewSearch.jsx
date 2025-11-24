import React from "react";
import "./NewSearch.css";
import searching from "../../assets/searching.svg";
import SearchBar from "../../components/search_bar/SearchBar";
import { useSearch } from "../../custom_hooks/useSearch.js";

const NewSearch = () => {
  const { searchTitle, setSearchTitle, handleSearch } = useSearch(); // custom hook for search

  return (
    <div className="container search__container">
      <div className="row blank-search__row">
        <h1 className="gray-text">Let's Get Started</h1>

        <p className="gray-text">Enter a Movie or Show Title</p>

        <SearchBar
          handleSearch={handleSearch}
          setSearchTitle={setSearchTitle}
          searchTitle={searchTitle}
        />

        <figure className="search__img--wrapper">
          <img src={searching} alt="" className="search__img" />
        </figure>
      </div>
    </div>
  );
};

export default NewSearch;
