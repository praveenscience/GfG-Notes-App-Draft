import React, { useState } from "react";
import FormGroup from "../Forms/FormGroup";
import { RegisterUser } from "../../services/AuthService";
import LoginForm from "./_Login";
import RegisterForm from "./_Register";

const Login = ({ handleAuthentication, Error, Success }) => {
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
          <LoginForm
            {...{
              Error,
              Success,
              LoginData,
              handleLogin,
              handleLoginData,
              FormGroup
            }}
          />
        </div>
        <div className="col-12 col-md-6">
          <RegisterForm
            {...{
              RegError,
              RegSuccess,
              RegisterData,
              handleRegister,
              handleRegisterData,
              FormGroup
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
