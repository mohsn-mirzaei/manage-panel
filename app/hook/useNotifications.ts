import { useContext } from "react";
import APIClient from "../services/api-client";
import TokenContext from "../context/tokenContext";
import { useQuery } from "@tanstack/react-query";

interface Notifications {
  date_time: string;
  description: string;
  subject: string;
}

const apiClient = new APIClient<Notifications>("/data");

const useNotification = () => {
  // const { token } = useContext(TokenContext);

  const { data, error, isLoading } = useQuery({
    queryKey: [
      "notification",
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

export default useNotification;
