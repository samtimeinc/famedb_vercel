import React from "react";
import "./SearchBar.css";
import { Search } from "lucide-react";

const SearchBar = ({ handleSearch, setSearchTitle, searchTitle }) => {
  return (
    <form className="search-bar__container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        className="search-bar__input"
        id="search-bar__input"
        value={searchTitle}
        onChange={(event) => setSearchTitle(event.target.value)}
      />

      <button type="submit" className="search__btn">
        <Search size={30} className="search-bar__icon" />
      </button>
    </form>
  );
};

export default SearchBar;
