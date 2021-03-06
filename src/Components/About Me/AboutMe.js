import React from "react";
import "./AboutMe.css";
import developer from "../../Images/dev.png";

const AboutMe = () => {
  return (
    <div className="aboutMe container my-5 py-5">
      <div className="mx-3">
        <img src={developer} alt="" />
      </div>
      <div>
        <h3 className="text-center">
          <span className="text-primary">Hi.....</span> I am{" "}
          <span className="text-info">Md. Ashiqul Hoque</span>
        </h3>
        <p className="px-5 ms-2">
          My main goal is to be a potential "Web Developer" in near future.
          Where i can express my innovative & creative skills in web
          development. Before setting my career goals, I decided what I wanted
          for the next step in my career. Which will help me to achieve success
          in my career.
          <br />
          However, to get success as a web developer work hard is must. I give
          enough time to learn new technologies and practice them regularly.
          First I learn some basics about web development. Then using this basic
          knowledge I develop some static website. Then I move for advanced
          knowledge about development. Now I am doing some dynamic websites.
          Thus my skills are upgrading day by day. I can see myself for creating
          visually appealing and user-friendly dynamic websites, developing
          sites that are optimized for search engine in near future.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
