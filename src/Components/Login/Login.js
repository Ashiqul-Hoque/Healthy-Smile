import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailData = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordData = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
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
    navigate(from, { replace: true });
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
            required
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
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Log In
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
