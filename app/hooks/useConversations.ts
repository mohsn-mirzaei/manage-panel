import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Conversation {
  date_time: string;
  question: string;
  answer: string;
  diamond: number;
}

const apiClient = new APIClient<Conversation[]>("/data");

const useConversations = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => apiClient.getAll(),
  });

  return { data, error, isLoading };
};

export default useConversations;
