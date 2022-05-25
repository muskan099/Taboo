import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../http/axios/axios_main";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const formInputHandler = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/users/login", formData);
      console.log(res);
      if (res.data?.user?.user_role === "admin") {
        navigate("/admin-dashboard");
      }
    } catch (error) {}
  };
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ minWidth: "800px" }}
      >
        <form
          onSubmit={submitHandler}
          style={{ width: "500px", marginTop: "150px", marginBottom: "150px" }}
        >
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={formInputHandler}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={formInputHandler}
              value={password}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#871333", border: "none" }}
            >
              Submit
            </button>
          </div>
          <p>
            Not Registered <Link to="/signup">Signup</Link>
          </p>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
        </form>
      </div>
    </>
  );
};

export default Login;
