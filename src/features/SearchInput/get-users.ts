import { axiosInstance } from "src/shared/api";

export type User = {
  id: number;
  email: string;
  username: string;
  fullname: string;
  profileImageUrl: string;
};

export const getUsers = async (username: string): Promise<User[]> => {
  try {
    const response = await axiosInstance.get<User[]>(`/users/get/${username}`);
    return response.data || [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
