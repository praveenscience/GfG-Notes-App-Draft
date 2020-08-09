import React from "react";

const Notes = ({ LoggedIn, Logout }) => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h5 className="card-header">
              <span className="align-middle d-inline-block mt-1">
                Welcome, {LoggedIn.fullname}!
              </span>
              <button
                className="btn btn-danger btn-sm float-right"
                onClick={Logout}
              >
                Logout
              </button>
            </h5>
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  <p>List all Notes</p>
                </div>
                <div className="col-10">
                  <pre>{JSON.stringify(LoggedIn, null, 2)}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
