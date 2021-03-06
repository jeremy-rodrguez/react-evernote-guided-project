import React from "react";

const Search = (props) => {
  return (
    <div className="filter">
      <input
        type="radio"
        value="A-Z"
        name="sort"
        className="radio-btn"
        onClick={(e) => props.handleSort(e)}
      />{" "}
      Sort A-Z
      <input
        type="radio"
        value="Z-A"
        name="sort"
        className="radio-btn"
        onClick={(e) => props.handleSort(e)}
      />{" "}
      Sort Z-A
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => props.handleFilter(e)}
      />
    </div>
  );
};

export default Search;
