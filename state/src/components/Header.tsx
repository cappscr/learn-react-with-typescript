'use client';
import { useAuthStore } from '@/state/useAuthStore';
import { useGetUser } from '@/hooks/useGetUser';

export function Header() {
  const userId = useAuthStore((state) => state.userId);

  const { data: user } = useGetUser(userId);

  const authenticating = useAuthStore((state) => state.loading);

  const handleSignIn = useAuthStore((state) => state.handleSignIn);

  const handleSignOut = useAuthStore((state) => state.handleSignOut);

  const userName = user?.name;

  return (
    <header>
      {userName ? (
        <>
          <span>{userName} has signed in</span>
          <button onClick={handleSignOut} disabled={authenticating} type="button">
            {authenticating ? '...' : 'Sign out'}
          </button>
        </>
      ) : (
        <button onClick={handleSignIn} disabled={authenticating} type="button">
          {authenticating ? '...' : 'Sign in'}
        </button>
      )}
    </header>
  );
}
