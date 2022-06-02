import React from "react";

const SignUp = () => {
  const submitHandler = (e) => {
    e.preventDefault();
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
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
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
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
