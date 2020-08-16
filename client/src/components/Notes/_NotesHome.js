import React from "react";
import { Link } from "react-router-dom";

const NotesHome = ({ is404, Deleted }) => {
  return (
    <section className="NotesContainer-Content">
      {is404 ? (
        <header className="text-center">
          <h3 className="text-left mb-3">
            {Deleted ? "Deleted!" : "Not Found!"}
          </h3>
          <div className={"alert alert-" + (Deleted ? "success" : "danger")}>
            {Deleted
              ? "The note has been successfully deleted."
              : "Error! Note not found."}
          </div>
          <Link to="/" className="btn btn-sm btn-info">
            Back to Home
          </Link>
        </header>
      ) : (
        <p>Welcome to Notes! Click on any of the notes on the left to see!</p>
      )}
    </section>
  );
};

export default NotesHome;
