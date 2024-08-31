// import { useQuery } from "@tanstack/react-query";
// import APIClient from "../services/api-client";

import jsonData from "../../public/data.json";

// interface Conversation {
//   date_time: string;
//   question: string;
//   answer: string;
//   diamond: number;
// }

// const apiClient = new APIClient<Conversation[]>("/data");

const useConversations = () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["conversations"],
  //   queryFn: () => apiClient.getAll(),
  // });

  const data = jsonData.data;
  const isLoading = false;
  const error = null;

  return { data, error, isLoading };
};

export default useConversations;
