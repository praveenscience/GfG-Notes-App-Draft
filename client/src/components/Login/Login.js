import React from "react";
import FormGroup from "../Forms/FormGroup";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Sign In</h5>
            <div className="card-body">
              <form>
                {[
                  {
                    Id: "username",
                    Label: "Username",
                    Type: "text"
                  },
                  {
                    Id: "password",
                    Label: "Password",
                    Type: "password"
                  }
                ].map((fg, key) => (
                  <FormGroup {...fg} key={key} />
                ))}
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
