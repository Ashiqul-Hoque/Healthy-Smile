import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start py-4">
      <div className="text-center p-3">
        <p className="text-center text-white">
          All rights reserved by
          <span className="text-dark">
            <strong className="text-primary mx-2">Healthy Smile</strong>
          </span>
          &copy;2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
