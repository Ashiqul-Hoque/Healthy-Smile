import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmail, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailData = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordData = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(email, password);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={handleEmailData}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordData}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <SocialLogin></SocialLogin>
      <p>
        New to Healthy Smile ?
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
