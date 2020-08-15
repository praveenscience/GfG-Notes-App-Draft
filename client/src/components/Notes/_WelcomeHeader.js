import React from "react";

const WelcomeHeader = ({ LoggedIn, Logout }) => {
  return (
    <h5 className="card-header">
      <span className="align-middle d-inline-block mt-1">
        Welcome, {LoggedIn.fullname}!
      </span>
      <button className="btn btn-danger btn-sm float-right" onClick={Logout}>
        Logout
      </button>
    </h5>
  );
};

export default WelcomeHeader;
