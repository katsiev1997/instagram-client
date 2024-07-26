import { axiosInstance } from "../api";

export const getUserData = async (username: string) => {
  const { data } = await axiosInstance.get(`/users/${username}`);
  return data
};
