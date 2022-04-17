import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-primary py-4">
      <footer className="text-white">
        <p className="text-center">
          All rights reserved by{" "}
          <span class="text-dark">
            <strong>Healthy Smile</strong>
          </span>
          &copy;2022.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
