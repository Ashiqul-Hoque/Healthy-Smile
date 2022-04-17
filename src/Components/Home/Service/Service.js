import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, img, text, price } = props.service;
  return (
    <div className="custom-card">
      <div className="card-group h-100">
        <div className="card">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text mb-0">Price: $ {price}</p>
          </div>
          <div className="mx-auto pb-3">
            <button className="button">Book Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
