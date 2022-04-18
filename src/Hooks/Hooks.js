import { useEffect, useState } from "react";

const useService = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Ashiqul-Hoque/Leader_Board/main/serviceData.json"
    )
      .then((response) => response.json())
      .then((data) => setServiceData(data));
  }, []);
  return [serviceData, setServiceData];
};
export default useService;
