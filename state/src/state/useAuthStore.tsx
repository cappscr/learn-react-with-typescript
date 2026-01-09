import { create } from 'zustand';
import { AuthState } from './types';
import { signIn, signOut } from '@/data/auth';

export const useAuthStore = create<AuthState>((set) => ({
  userId: undefined,
  permissions: undefined,
  loading: false,
  handleSignIn: async () => {
    set({ loading: true });
    const user = await signIn();
    set({
      userId: user.name,
      permissions: user.permissions,
      loading: false,
    });
  },
  handleSignOut: async () => {
    await signOut();
    set({
      userId: undefined,
      permissions: undefined,
      loading: false,
    });
  },
}));
