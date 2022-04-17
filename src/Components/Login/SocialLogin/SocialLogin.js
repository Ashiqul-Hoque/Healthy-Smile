import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
    <div>
      <p>Social login</p>
      <button onClick={() => signInWithGoogle()}>Google Sign In</button>
    </div>
  );
};

export default SocialLogin;
