type UserDataType = {
    id: number;
    fullname: string;
    email: string;
    username: string;
    profileImageUrl: string | null;
  
}

export interface UserState {
  userData: UserDataType | null;
}

export type userActionPayload = {
  userData: UserDataType
};

export interface ReturnData {
  token: string;
  userData: UserDataType;
}