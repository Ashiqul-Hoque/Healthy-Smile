import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark py-4">
      <footer className="text-white">
        <p className="text-center">
          All rights reserved by{" "}
          <span className="text-dark">
            <strong className="text-primary">Healthy Smile</strong>
          </span>
          &copy;2022.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
