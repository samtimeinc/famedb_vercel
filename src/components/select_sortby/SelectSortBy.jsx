import React from "react";
import "./SelectSortBy.css";

const SelectSortBy = ({ onSortChange, value }) => {
  return (
    <select
      name=""
      id="filter"
      value={value}
      onChange={(event) => onSortChange(event.target.value)}
    >
      <option value="" disabled>
        Sort
      </option>
      <option value="A_TO_Z">Ascending: A - Z</option>
      <option value="Z_TO_A">Descending: Z - A</option>
      <option value="OLD_TO_NEW">Year: Oldest - newest</option>
      <option value="NEW_TO_OLD">Year: Newest - oldest</option>
    </select>
  );
};

export default SelectSortBy;
