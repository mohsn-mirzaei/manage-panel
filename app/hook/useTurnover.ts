import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Turnover {
  date_time: string;
  amount: string;
  reference_no: string;
  psp: string;
  description: string | null;
  grade_name: string;
  status: string;
  status_description: string;
}

const apiClient = new APIClient<Turnover>("/data");

const useTurnover = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["turnover"],
    queryFn: () => apiClient.getAll(),
  });

  return { data, error, isLoading };
};

export default useTurnover;
