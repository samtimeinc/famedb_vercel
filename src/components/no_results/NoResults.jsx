import React from "react";
import "./NoResults.css";
import no_data from "../../assets/no_data.svg";

const NoResults = () => {
  return (
    <div className="no-results">
      <h2 className="gray-text">Sorry, no matches found.</h2>

      <img src={no_data} alt="" />

      <p className="gray-text">Check your search and try again.</p>
    </div>
  );
};

export default NoResults;
