import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Notifications {
  date_time: string;
  description: string;
  subject: string;
}

const apiClient = new APIClient<Notifications>("/data");

const useNotification = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["notification"],
    queryFn: () => apiClient.getAll(),
  });

  return { data, error, isLoading };
};

export default useNotification;
