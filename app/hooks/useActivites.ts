// import { useQuery } from "@tanstack/react-query";
// import APIClient from "../services/api-client";

import jsonData from "../../public/data.json";

interface Activities {
  coin: number;
  comment1: string;
  comment2: string;
  start_date_time: string;
}

// const apiClient = new APIClient<Activities>("/data");

const useConversations = () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["ativities"],
  //   queryFn: () => apiClient.getAll(),
  // });

  const data = jsonData.data;
  const isLoading = false;
  const error = null;

  return { data, error, isLoading };
};

export default useConversations;
