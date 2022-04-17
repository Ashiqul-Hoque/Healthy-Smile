import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, img, text, price } = props.service;
  return (
    <div>
      <div className="card-group">
        <div className="card">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">Price: $ {price}</p>
          </div>
          <div className="card-footer">
            <button>Book Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
