import React from "react";

const RegisterForm = ({
  RegError,
  RegSuccess,
  RegisterData,
  handleRegister,
  handleRegisterData,
  FormGroup
}) => {
  return (
    <div className="card">
      <h5 className="card-header">New User? Register</h5>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          {RegError && (
            <div className="alert alert-danger text-center">{RegError}</div>
          )}
          {RegSuccess && (
            <div className="alert alert-success text-center">{RegSuccess}</div>
          )}
          {[
            {
              Id: "username",
              Label: "Username",
              Type: "text",
              onChange: handleRegisterData,
              Value: RegisterData.username
            },
            {
              Id: "password",
              Label: "Password",
              Type: "password",
              onChange: handleRegisterData,
              Value: RegisterData.password
            },
            {
              Id: "fullname",
              Label: "Full Name",
              Type: "text",
              onChange: handleRegisterData,
              Value: RegisterData.fullname
            }
          ].map((fg, key) => (
            <FormGroup {...fg} key={key} />
          ))}
          <input type="submit" value="Register" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
