import React, { useState } from "react";
import FormGroup from "../Forms/FormGroup";
import { RegisterUser } from "../../services/AuthService";

const Login = ({ handleAuthentication, Error }) => {
  const [RegError, setRegError] = useState(false);
  const [RegSuccess, setRegSuccess] = useState(false);
  const [LoginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [RegisterData, setRegisterData] = useState({
    username: "",
    password: "",
    fullname: ""
  });
  const handleLoginData = e => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    });
  };
  const handleRegisterData = e => {
    setRegisterData({
      ...RegisterData,
      [e.target.name]: e.target.value
    });
  };
  const handleLogin = e => {
    e.preventDefault();
    handleAuthentication({ ...LoginData });
  };
  const handleRegister = e => {
    e.preventDefault();
    RegisterUser(RegisterData)
      .then(res => {
        if (res.status === 201) {
          setRegSuccess(res.data);
          setRegError(false);
        }
      })
      .catch(err => {
        setRegSuccess(false);
        setRegError(err.response.data);
      });
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
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
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <h5 className="card-header">New User? Register</h5>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                {RegError && (
                  <div className="alert alert-danger text-center">
                    {RegError}
                  </div>
                )}
                {RegSuccess && (
                  <div className="alert alert-success text-center">
                    {RegSuccess}
                  </div>
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
                <input
                  type="submit"
                  value="Register"
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
