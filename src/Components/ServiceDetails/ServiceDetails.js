import { Link, useParams } from "react-router-dom";
import useService from "../../Hooks/Hooks";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceData] = useService();

  const result = serviceData.find((e) => e.id == serviceId);
  console.log(result);

  return result ? (
    <div className="container my-4 w-50">
      <h3 className="text-center">Service name: {result.name}</h3>
      <p>Description: {result.text}</p>
      <h5>Price: {result.price}</h5>
      <Link
        to="/checkout"
        className="btn btn-primary d-block mx-auto w-25 my-4"
      >
        CheckOut
      </Link>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default ServiceDetails;
