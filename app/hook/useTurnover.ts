import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import TokenContext from "../context/tokenContext";
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
  // const { token } = useContext(TokenContext);

  const { data, error, isLoading } = useQuery({
    queryKey: [
      "turnover",
      //  token
    ],
    queryFn: () =>
      apiClient
        .getAll
        // token
        (),
  });

  return { data, error, isLoading };
};

export default useTurnover;
