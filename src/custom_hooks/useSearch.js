import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTitle.trim() === "") {
      alert("Please enter a movie or TV show title");
      return;
    }
    navigate(`/search/${searchTitle}`);
  };

  return {
    searchTitle,
    setSearchTitle,
    handleSearch,
  };
};
