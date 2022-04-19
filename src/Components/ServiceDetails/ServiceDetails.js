import { Link, useNavigate, useParams } from "react-router-dom";
import useService from "../../Hooks/Hooks";
import "./ServiceDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceData] = useService();
  const navigate = useNavigate();

  const result = serviceData.find((e) => e.id == serviceId);

  const bookedService = () => {
    toast("Your selected service booked. Thank you");

    setTimeout(home, 4000);
    function home() {
      navigate("/home");
    }
  };

  return result ? (
    <div className="serviceDetail-container container my-5">
      <div className="d-flex justify-content-center">
        <img className="mt-2 w-75" src={result.img} alt="" />
      </div>
      <div className="details-section p-5">
        <h3 className="text-center">Service name: {result.name}</h3>
        <p>Description: {result.text}</p>
        <h5>Price: {result.price}</h5>
        <button
          onClick={bookedService}
          className="btn btn-primary d-block mx-auto w-50 my-4"
        >
          CheckOut
        </button>
        <ToastContainer
          autoClose={2800}
          position="bottom-right"
        ></ToastContainer>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
};

export default ServiceDetails;
