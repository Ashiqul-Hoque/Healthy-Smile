import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  // const handleEmailData = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordData = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email sent");
    } else {
      toast("Please enter your email address");
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center mt-4">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            ref={emailRef}
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
            ref={passwordRef}
            type="password"
            className="form-control"
            required
          />
        </div>
        {errorElement}
        <button type="submit" className="btn btn-primary d-block mx-auto">
          Log In
        </button>
      </form>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
      <p>
        New to Healthy Smile ?
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password ?
        <button
          className="text-decoration-none btn btn-link"
          onClick={resetPassword}
        >
          Enter email & click here
        </button>
      </p>
    </div>
  );
};

export default Login;
