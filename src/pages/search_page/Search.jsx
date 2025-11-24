import React, { useEffect, useState } from "react";
import "./Search.css";
import Result from "../../components/result/Result.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../components/search_bar/SearchBar.jsx";
import Loading from "../../components/loading_state/Loading.jsx";
import NoResults from "../../components/no_results/NoResults.jsx";
import SelectSortBy from "../../components/select_sortby/SelectSortBy.jsx";
import { useSearch } from "../../custom_hooks/useSearch.js";
import { ArrowUpFromLine } from "lucide-react";

// OMDb API for data: http://www.omdbapi.com/?i=tt3896198&apikey=6777cd9d
// api key: 6777cd9d

const Search = () => {
  const { title } = useParams();

  const [results, setResults] = useState([]);
  const [select, setSelect] = useState("");
  const [isFetchingData, setIsFetchingData] = useState(false);

  const navigate = useNavigate();

  const { searchTitle, setSearchTitle, handleSearch } = useSearch(); // custom hook for search

  async function queryDbByTitle() {
    setIsFetchingData(true);
    setSelect("");
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=6777cd9d&s=${title}`
    );
    console.log(data);
    const { Search: search } = data;
    setIsFetchingData(false);
    setResults(search || []);
  }

  function renderResults() {
    return results.map((result) => (
      <Result
        key={result.imdbID}
        title={result.Title}
        year={result.Year}
        poster={result.Poster}
        onClick={() => navigate(`/title/${result.imdbID}?search=${title}`)}
      />
    ));
  }

  function sortResults() {
    let sortedResults = [...results];

    if (select === "A_TO_Z") {
      sortedResults.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (select === "Z_TO_A") {
      sortedResults.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (select === "OLD_TO_NEW") {
      sortedResults.sort((a, b) => {
        const yearA = parseInt(a.Year.split("-")[0]);
        const yearB = parseInt(b.Year.split("-")[0]);

        return yearA - yearB;
      });
    } else if (select === "NEW_TO_OLD") {
      sortedResults.sort((a, b) => {
        const yearA = parseInt(a.Year.split("-")[0]);
        const yearB = parseInt(b.Year.split("-")[0]);

        return yearB - yearA;
      });
    }
    setResults(sortedResults);
  }

  useEffect(() => {
    queryDbByTitle();
  }, [title]);

  useEffect(() => {
    if (results.length > 0) {
      sortResults();
    }
  }, [select]);

  return (
    <div className="container search__container">
      <div className="row search__row">
        <div className="search-bar--search-with-results">
          <SearchBar
            handleSearch={handleSearch}
            setSearchTitle={setSearchTitle}
            searchTitle={searchTitle}
          />
        </div>

        <div className="results__row">
          <div className="search__header">
            <div className="header__text">
              <h2 className="header__title gray-text">
                Results for "{title}":
              </h2>
            </div>

            <SelectSortBy onSortChange={setSelect} value={select} />
          </div>

          {isFetchingData ? (
            <Loading />
          ) : results.length > 0 ? (
            <div className="results__list">{renderResults()}</div>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
