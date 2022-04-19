import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container px-5 my-4">
      <div>
        <h3 className="text-info">
          What are the difference between authorization and authentication ?
        </h3>
        <p>
          <strong>Authentication:</strong> Authentication is the act of
          validating that users are whom they claim to be. This is the first
          step in any security process.
          <br />
          <strong>Authorization:</strong> Authorization in system security is
          the process of giving the user permission to access a specific
          resource or function. This term is often used interchangeably with
          access control or client privilege.
          <br />
          The difference between authorization and authentication are:
          <br />
          1. <strong>Authentication:</strong> Authentication is the first step
          of authorization so always comes first. Vs{" "}
          <strong>Authorization:</strong> Authorization is done after successful
          authentication.
          <br />
          2. <strong>Authentication:</strong> Authentication confirms your
          identity to grant access to the system. Vs{" "}
          <strong>Authorization:</strong> Authorization determines whether you
          are authorized to access the resources.
          <br />
          3. <strong>Authentication:</strong> It is the process of validating
          user credentials to gain user access. Vs{" "}
          <strong>Authorization:</strong> It is the process of verifying whether
          access is allowed or not.
          <br />
          4. <strong>Authentication:</strong> It determines whether user is what
          he claims to be. Vs <strong>Authorization:</strong> It determines what
          user can and cannot access.
          <br />
          5. <strong>Authentication:</strong> Authentication usually requires a
          username and a password. Vs <strong>Authorization:</strong>{" "}
          Authentication factors required for authorization may vary, depending
          on the security level.
          <br />
        </p>
      </div>
      <div className="py-5">
        <h3 className="text-info">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase can be seen as a server-less backend for mobile apps, web
          apps etc. It is a service provided by Google. One of the best features
          of Firebase is the Analytics dashboard. Firebase Analytics gives
          undeniable insight into user behavior. We can use this knowledge to
          make informed decisions about how to market our app/product better and
          to reach out to the audiences that we want to target.
          <br />
          Since the operations and internal functions are taken care of by the
          Firebase interface, we can spend more time developing the high quality
          app.
          <br />
          Firebase manages all data real-time in the database. So, the exchange
          of data to and fro from the database is easy and quick.
          <br />
          <br />
          Others options for implement authentication are:
          <br />
          1. Auth0
          <br />
          2. SecureAuth
          <br />
          3. Authress
          <br />
          4. Okta
          <br />
          5. Amazon Cognito
        </p>
      </div>
      <div>
        <h3 className="text-info">
          What other services does firebase provide other than authentication ?
        </h3>
        <p>
          Services that firebase provide other than authentication are:
          <br />
          1. Hosting
          <br />
          2. Google Analytics
          <br />
          3. Cloud Firestore
          <br />
          4. Cloud Functions
          <br />
          5. Cloud Storage
          <br />
          6. Cloud Messaging
          <br />
          7. Remote Config
        </p>
      </div>
    </div>
  );
};

export default Blog;
