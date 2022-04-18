import { useEffect, useState } from "react";

const useService = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("serviceData.json")
      .then((response) => response.json())
      .then((data) => setServiceData(data));
  }, []);
  return [serviceData, setServiceData];
};
export default useService;
