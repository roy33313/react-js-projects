import React from "react";

export default function SearchBar() {
  return (
    <div style={{ background: "#4B0150" }}>
      <form className="d-flex w-75 mx-5  mx-2" role="search">
        <input
          className="form-control me-2 my-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-secondary my-2 " type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
