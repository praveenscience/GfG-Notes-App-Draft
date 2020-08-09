import React from "react";

const LoginForm = ({
  Error,
  LoginData,
  handleLogin,
  handleLoginData,
  FormGroup
}) => {
  return (
    <div className="card">
      <h5 className="card-header">Sign In</h5>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          {Error && (
            <div className="alert alert-danger text-center">
              Username or password is wrong!
            </div>
          )}
          {[
            {
              Id: "username",
              Label: "Username",
              Type: "text",
              onChange: handleLoginData,
              Value: LoginData.username
            },
            {
              Id: "password",
              Label: "Password",
              Type: "password",
              onChange: handleLoginData,
              Value: LoginData.password
            }
          ].map((fg, key) => (
            <FormGroup {...fg} key={key} />
          ))}
          <input type="submit" value="Sign In" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
