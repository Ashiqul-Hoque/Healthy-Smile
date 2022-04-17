import React from "react";
import "./Bio.css";
import doctor from "../../../Images/doctor.jpg";

const Bio = () => {
  return (
    <div>
      <div className="pb-5">
        <h2 className="text-center text-primary pt-5 pb-4">Doctor Info</h2>
        <div className="container bio-section">
          <div>
            <img className="w-100" src={doctor} alt="" />
          </div>
          <div className="mx-5">
            <h2>Dr. Liza O'Leary </h2>
            <p>
              Dr. Liza O'Leary completed her B.D.Sc with Honours at the
              University of Western Australia in 2001. Her aim as a dentist is
              to provide beautiful and precise work in a gentle and caring
              environment.
            </p>
            <p>
              Dr Liza O'Leary has extensive experience in cosmetic dentistry and
              regularly attends advanced courses to maintain her expertise in
              all facets of dentistry. She is passionate about using the most
              state-of-the-art equipment and materials to achieve the best
              results possible for every patient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
