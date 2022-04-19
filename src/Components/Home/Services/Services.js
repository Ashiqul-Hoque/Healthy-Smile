import React from "react";
import useService from "../../../Hooks/Hooks";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [serviceData] = useService();

  return (
    <div className="my-5">
      <h2 className="text-center mt-4 text-primary">Services</h2>
      <div className="card-container mt-5">
        {serviceData.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
