export interface UserState {
  userData: {
    id: number;
    fullname: string;
    email: string;
    username: string;
    profileImageUrl: string | null;
  } | null;
}

export type userActionPayload = {
  userData: {
    id: number;
    fullname: string;
    email: string;
    username: string;
    profileImageUrl: string | null;
  };
};
