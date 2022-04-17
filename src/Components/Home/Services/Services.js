import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("serviceData.json")
      .then((response) => response.json())
      .then((data) => setServiceData(data));
  }, []);
  return (
    <div>
      <h3 className="text-center mt-4 text-primary">Services</h3>
      <div className="card-container d-flex">
        {serviceData.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
