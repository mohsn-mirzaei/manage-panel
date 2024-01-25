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

  getAll = () => {
    return axiosInstance
      .get<ApiResponse<T>>(this.endpoint, {})
      .then((res) => res.data);
  };

  post = (data: object) => {
    return axiosInstance.post(this.endpoint, data);
  };
}

export default APIClient;
