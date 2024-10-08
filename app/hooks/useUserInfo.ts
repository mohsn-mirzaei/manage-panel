// import { useQuery } from "@tanstack/react-query";
// import APIClient from "../services/api-client";
import jsonData from "../../public/data.json";

// interface UserInfo {
//   name: string;
//   alias: string;
//   birthday: string;
//   gender: "male" | "female";
//   mobile_number: string;
//   plan_expire: "پرداخت شده" | "پرداخت نشده";
//   coin_remain: string;
//   diamond_remain: string;
//   grade_name: string;
//   current_level: string;
// }

// const apiClient = new APIClient<UserInfo>("/data");

const useInfo = () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["userInfo"],
  //   queryFn: () => apiClient.getAll(),
  // });

  const data = jsonData.data;
  const isLoading = false;
  const error = null;

  return { data, error, isLoading };
};

export default useInfo;
