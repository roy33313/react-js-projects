import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

export default function News(props) {
  let [data, setData] = useState({});
  let [page, setPage] = useState(1);

  useEffect(() => {
    // let apiKey = "e1e0125786074db498aaba6946ea7b38";
    let q = props.category;
    // let sortBy = "popularity";
    let url = `http://localhost:2999/?q=${q}`;
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
    window.scrollTo(0, 0);
  };
  const handlePrevClick = async () => {
    setPage(page - 1);
  };

  return (
    <div style={{ background: "#4B0150" }}>
      <h1 style={{ color: "#FFFFFF" }}>NewsMonkey-Top HeadLines</h1>
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
