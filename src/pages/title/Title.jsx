import React, { useEffect, useState } from "react";
import "./Title.css";
import { ArrowLeft } from "lucide-react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading_state/Loading";
import SearchBar from "../../components/search_bar/SearchBar";
import { useSearch } from "../../custom_hooks/useSearch";
import DisplayTitle from "../../components/display_title/DisplayTitle";
import Result from "../../components/result/Result";
import { scrollToTop } from "../../utilities/scrollToTop";
import NoResults from "../../components/no_results/NoResults";

const Title = () => {
  const { imdbID } = useParams();

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  const [details, setDetails] = useState();
  const [results, setResutls] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  const navigate = useNavigate();

  const { searchTitle, setSearchTitle, handleSearch } = useSearch(); // custom hook for search

  async function queryDbByImdbId() {
    setIsFetchingData(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=6777cd9d&i=${imdbID}`
    );
    console.log(data);
    setDetails(data);
    setIsFetchingData(false);
  }

  async function queryDbByTitle() {
    setIsFetchingData(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=6777cd9d&s=${searchTerm}`
    );
    const { Search: search } = data;
    console.log(search);
    setResutls(search || []);
    setIsFetchingData(false);
  }

  function renderResults() {
    const newResults = [...results]
      .filter((element) => element.imdbID !== imdbID)
      .sort(() => Math.random() - 0.5);
    return newResults
      .slice(0, 4)
      .map((result) => (
        <Result
          key={result.imdbID}
          title={result.Title}
          year={result.Year}
          poster={result.Poster}
          onClick={() =>
            navigate(`/title/${result.imdbID}?search=${searchTerm}`)
          }
        />
      ));
  }

  useEffect(() => {
    scrollToTop();
    queryDbByImdbId();
  }, [imdbID]);

  useEffect(() => {
    queryDbByTitle();
  }, [searchTerm]);

  return (
    <div className="container movie__container">
      <div className="row movie__row">
        <div className="search-bar--title-page">
          <button
            onClick={() => navigate(-1)}
            className="back__btn gray-text cursor"
          >
            <ArrowLeft size={32} className="arrow-left" />
          </button>

          <SearchBar
            handleSearch={handleSearch}
            setSearchTitle={setSearchTitle}
            searchTitle={searchTitle}
          />
        </div>

        <div className="display__title--wrapper">
          {isFetchingData ? (
            <Loading />
          ) : details && details.Response !== "False" ? (
            <DisplayTitle details={details} />
          ) : (
            <NoResults />
          )}
        </div>

        <div className="also__interested">
          <p className="gray-text">You may also like:</p>

          <div className="results__list">{renderResults()}</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
