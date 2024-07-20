import { RootState } from "src/app/providers/store-provider/model/store";

export const selectUserData = (state: RootState) => state.user.userData;
