import React, { useState } from "react";
import FormGroup from "../Forms/FormGroup";

const Login = () => {
  const [FormData, setFormData] = useState({
    username: "",
    password: ""
  });
  const handleChange = e => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    });
  };
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
                    Type: "text",
                    onChange: handleChange,
                    Value: FormData.username
                  },
                  {
                    Id: "password",
                    Label: "Password",
                    Type: "password",
                    onChange: handleChange,
                    Value: FormData.password
                  }
                ].map((fg, key) => (
                  <FormGroup {...fg} key={key} />
                ))}
                <pre className="border p-3 bg-light">
                  {JSON.stringify(FormData, null, 2)}
                </pre>
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
