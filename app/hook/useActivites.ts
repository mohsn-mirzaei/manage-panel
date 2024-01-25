import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Activities {
  coin: number;
  comment1: string;
  comment2: string;
  start_date_time: string;
}

const apiClient = new APIClient<Activities>("/data");

const useConversations = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["ativities"],
    queryFn: () => apiClient.getAll(),
  });

  return { data, error, isLoading };
};

export default useConversations;
