import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import TokenContext from "../context/tokenContext";
import APIClient from "../services/api-client";

interface Detail {
  date_time: string;
  description: string;
  user_name: string;
  user_type: number;
}

interface Tickets {
  ticket_no: string;
  date_time: string;
  subject: string;
  category: string;
  status: string;
  status_description: string;
  detail: Detail[];
}

const apiClient = new APIClient<Tickets>("/data");

const useConversations = () => {
  // const { token } = useContext(TokenContext);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [
      "tickets",
      //  token
    ],
    queryFn: () =>
      apiClient
        .getAll
        // token
        (),
  });

  return { data, error, isLoading, refetch };
};

export default useConversations;
