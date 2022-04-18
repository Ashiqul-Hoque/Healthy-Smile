import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  let errorElement;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName: name });
    navigate("/home");
  };

  return (
    <div>
      <h2 className="text-center mt-4">Please Register</h2>

      <div className="w-50 mx-auto">
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label for="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="name"
              onChange={handleName}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              onChange={handleEmail}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              placeholder="Use password more than 6 character"
              type="password"
              onChange={handlePassword}
              className="form-control"
              required
            />
          </div>
          {errorElement}
          <button type="submit" className="btn btn-primary d-block mx-auto">
            Register
          </button>
        </form>

        <SocialLogin></SocialLogin>
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
