import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import TokenContext from "../context/tokenContext";
import APIClient from "../services/api-client";

interface UserInfo {
  name: string;
  alias: string;
  birthday: string;
  gender: "male" | "female";
  mobile_number: string;
  plan_expire: "پرداخت شده" | "پرداخت نشده";
  coin_remain: string;
  diamond_remain: string;
  grade_name: string;
  current_level: string;
}

const apiClient = new APIClient<UserInfo>("/data");

const useInfo = () => {
  // const { token } = useContext(TokenContext);

  const { data, error, isLoading } = useQuery({
    queryKey: [
      "userInfo",
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

export default useInfo;
