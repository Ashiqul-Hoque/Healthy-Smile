import React from "react";
import "./Bio.css";
import doctor from "../../../Images/doctor.jpg";

const Bio = () => {
  return (
    <div>
      <div>
        <h2>Meet Dr. Liza</h2>
        <div className="d-flex">
          <div>
            <img src={doctor} alt="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ratione enim, reprehenderit minima impedit saepe in iste hic nisi
              fugit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
