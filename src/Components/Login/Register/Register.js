import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import "./Register.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }
  const handleName = (e) => {
    setEmail(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Please Register</h2>

      <div className="w-50 mx-auto">
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              onChange={handleName}
              type="name"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={handleEmail}
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={handlePassword}
              type="password"
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p>
          Already have an account?
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
