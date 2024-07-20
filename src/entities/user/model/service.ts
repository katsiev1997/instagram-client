import { axiosInstance } from "src/shared/api";
import axios from "axios";


interface ReturnData {
  token: string;
  userData: {
    id: number;
    email: string;
    username: string;
    fullname: string;
    profileImageUrl: string;
  };
}

export const fetchUser = async (): Promise<ReturnData> => {
  try {
    const res = await axiosInstance.get("/auth/refresh_token");
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Обработка ошибки axios
      console.error("An error occurred:", err.response);
    } else {
      // Обработка других ошибок
      console.error("An unexpected error occurred:", err);
    }
    throw err;
  }
};
