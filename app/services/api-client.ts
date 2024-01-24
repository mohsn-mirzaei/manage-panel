import axios from "axios";

interface ApiResponse<T> {
  profile: T[];
  message: string;
  notifications: T[];
  turnover: T[];
  conversations: T[];
  activities: T[];
  tickets: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://db-manage-panel.mohsenmirzaei.dev/api/",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () =>
    // token: string
    {
      return axiosInstance
        .get<ApiResponse<T>>(this.endpoint, {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        })
        .then((res) => res.data);
    };

  post = (
    data: object
    //  token: string
  ) => {
    return axiosInstance.post(
      this.endpoint,
      data
      // null
      //  {
      // params: data,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      // }
    );
  };
}

export default APIClient;
