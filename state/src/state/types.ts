export type UserState = {
  userName: string | undefined;
  permissions: string[] | undefined;
  loading: boolean;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  togglePermissions: () => void;
};
