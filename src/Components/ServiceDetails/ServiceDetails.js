import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>welcome to details:{serviceId}</h1>
      <button className="btn btn-primary">CheckOut</button>
    </div>
  );
};

export default ServiceDetails;
