import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

export default function News() {
  let [data, setData] = useState({});
  let [page, setPage] = useState(1);

  useEffect(() => {
    let apiKey = "e1e0125786074db498aaba6946ea7b38";
    let q = "cooking";
    let sortBy = "popularity";
    let url = `http://localhost:2999`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setData(value.articles);
      });
  }, [data, page]);

  const handleNextClick = async () => {
    setPage(page + 1);
  };
  const handlePrevClick = async () => {
    setPage(page - 1);
  };

  return (
    <div style={{ background: "#4B0150" }}>
      <form className="d-flex w-75 mx-5 " role="search mx-2">
        <input
          className="form-control me-2 my-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 btn-light"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="row">
        {Array.from(data).map((item) => {
          return (
            <div className="col-md-4">
              <NewsItem obj={item} />
            </div>
          );
        })}
      </div>

      <div className="container">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-dark mx-2 "
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark mx-2 "
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
