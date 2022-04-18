import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../Hooks/Hooks";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceData, setServiceData] = useService();
  console.log(serviceData, serviceId);

  return (
    <div>
      {/* {serviceData.find((service) => service.id === serviceId)}

      <h1>{service.name}</h1> */}

      <button className="btn btn-primary">CheckOut</button>
    </div>
  );
};

export default ServiceDetails;
