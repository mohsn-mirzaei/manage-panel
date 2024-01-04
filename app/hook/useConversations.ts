import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import TokenContext from "../context/tokenContext";
import APIClient from "../services/api-client";

interface Conversation {
  date_time: string;
  question: string;
  answer: string;
  diamond: number;
}

const apiClient = new APIClient<Conversation[]>("/data");

const useConversations = () => {
  // const { token } = useContext(TokenContext);

  const { data, error, isLoading } = useQuery({
    queryKey: [
      "conversations",
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
