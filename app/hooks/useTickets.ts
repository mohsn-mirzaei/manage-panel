// import { useQuery } from "@tanstack/react-query";
// import APIClient from "../services/api-client";

import jsonData from "../../public/data.json";

// interface Detail {
//   date_time: string;
//   description: string;
//   user_name: string;
//   user_type: number;
// }

// interface Tickets {
//   ticket_no: string;
//   date_time: string;
//   subject: string;
//   category: string;
//   status: string;
//   status_description: string;
//   detail: Detail[];
// }

// const apiClient = new APIClient<Tickets>("/data");

const useConversations = () => {
  // const { data, error, isLoading, refetch } = useQuery({
  //   queryKey: ["tickets"],
  //   queryFn: () => apiClient.getAll(),
  // });

  const data = jsonData.data;
  const isLoading = false;
  const error = null;
  const refetch = () => {};

  return { data, error, isLoading, refetch };
};

export default useConversations;
