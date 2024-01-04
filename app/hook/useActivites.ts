import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import TokenContext from "../context/tokenContext";
import APIClient from "../services/api-client";

interface Activities {
  coin: number;
  comment1: string;
  comment2: string;
  start_date_time: string;
}

const apiClient = new APIClient<Activities>("/data");

const useConversations = () => {
  // const { token } = useContext(TokenContext);

  const { data, error, isLoading } = useQuery({
    queryKey: [
      "ativities",
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

export default useConversations;
