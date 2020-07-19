import React from "react";

const Card = ({ Data }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label={Data.Title}
      >
        <title>{Data.Title}</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="40%" y="50%" fill="#eceeef" dy=".3em">
          {Data.Title}
        </text>
      </svg>
      <div className="card-body">
        <p className="card-text">{Data.Body}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
