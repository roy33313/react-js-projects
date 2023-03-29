import React from "react";

export default function NewsItem(props) {
  return (
    <>
      <div className="card mx-5 my-4">
        <img
          src={
            props.obj.urlToImage
              ? props.obj.urlToImage
              : "https://t4.ftcdn.net/jpg/02/66/72/41/240_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
          }
          className="card-img-top"
          alt="NOT AVAILABLE"
        />
        <div className="card-body">
          <h5 className="card-title">
            {props.obj.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.obj.source.name}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{props.obj.description}</p>
          <a href={props.obj.url} className="btn btn-primary btn-dark">
            Read More
          </a>
          <p className="card-text">
            <small className="text-muted ">
              By {props.obj.author ? props.obj.author : "Unkown"} on &nbsp;
              {new Date(props.obj.publishedAt).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </>
  );
}
