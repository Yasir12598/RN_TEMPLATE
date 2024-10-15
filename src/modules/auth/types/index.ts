type UserDataType = {
  username: string;
  email: string;
  token: string;
};
interface LoginInitialValueType {
  email: string;
  password: string;
}

interface AuthSliceInitialStateType {
  isOnboarding: boolean;
  loginUserData: UserDataType | undefined;
}

export type { UserDataType, LoginInitialValueType, AuthSliceInitialStateType };
