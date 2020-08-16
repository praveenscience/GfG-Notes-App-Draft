import React from "react";
import { Link } from "react-router-dom";

const NotesHome = ({ is404 }) => {
  return (
    <div>
      {is404 ? (
        <div className="text-center">
          <div className="alert alert-danger">Error! Note not found.</div>
          <Link to="/" className="btn btn-sm btn-info">
            Back to Home
          </Link>
        </div>
      ) : (
        <p>Welcome to Notes! Click on any of the notes on the left to see!</p>
      )}
    </div>
  );
};

export default NotesHome;
