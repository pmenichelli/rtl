import React from "react";
import SearchIcon from "./search-icon";

import "./search-bar.scss";

function SearchBar({ onSearch, placeholder }) {
  return (
    <form
      className="search-bar"
      onSubmit={(event) => onSubmit(onSearch, event)}
    >
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
      />
      <SearchIcon></SearchIcon>
    </form>
  );
}

function onSubmit(onSearch, event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.getElementsByClassName("search-bar__input").item(0).value;
  onSearch(query);
}

export { SearchBar };
