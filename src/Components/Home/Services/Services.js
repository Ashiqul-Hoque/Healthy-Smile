import React from "react";
import useService from "../../../Hooks/Hooks";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [serviceData] = useService();

  return (
    <div className="my-5">
      <h3 className="text-center mt-4 text-primary">Services</h3>
      <div className="card-container">
        {serviceData.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
