import React from "react";

const Notes = ({ LoggedIn }) => {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h5 className="card-header">Welcome, {LoggedIn.fullname}!</h5>
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
