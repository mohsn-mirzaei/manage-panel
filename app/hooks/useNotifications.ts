// import { useQuery } from "@tanstack/react-query";
// import APIClient from "../services/api-client";

import jsonData from "../../public/data.json";

// interface Notifications {
//   date_time: string;
//   description: string;
//   subject: string;
// }

// const apiClient = new APIClient<Notifications>("/data");

const useNotification = () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["notification"],
  //   queryFn: () => apiClient.getAll(),
  // });

  const data = jsonData.data;
  const isLoading = false;
  const error = null;

  return { data, error, isLoading };
};

export default useNotification;
