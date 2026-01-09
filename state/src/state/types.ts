export type AuthState = {
  userId: string | undefined;
  permissions: string[] | undefined;
  loading: boolean;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
};

export type UserState = {
  userId: string;
  userName: string;
  email: string;
};
