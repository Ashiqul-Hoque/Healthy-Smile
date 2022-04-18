import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, img, text, price, id } = props.service;
  const navigate = useNavigate();
  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="custom-card">
      <div className="card-group h-100">
        <div className="card">
          <img src={img} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text mb-0">
              <strong>Price: $ {price}</strong>
            </p>
          </div>
          <div className="mx-auto pb-3 mt-3">
            <button
              onClick={() => navigateToServiceDetails(id)}
              className="button btn btn-primary"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
