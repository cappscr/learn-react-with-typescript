'use client';
import { useUserStore } from '@/state/useUserStore';

export function Header() {
  const userName = useUserStore((state) => state.userName);

  const loading = useUserStore((state) => state.loading);

  const handleSignIn = useUserStore((state) => state.handleSignIn);

  const handleSignOut = useUserStore((state) => state.handleSignOut);

  const togglePermissions = useUserStore((state) => state.togglePermissions);

  return (
    <header>
      {userName ? (
        <>
          <span onClick={togglePermissions}>{userName} has signed in</span>
          <button onClick={handleSignOut} disabled={loading} type="button">
            {loading ? '...' : 'Sign out'}
          </button>
        </>
      ) : (
        <button onClick={handleSignIn} disabled={loading} type="button">
          {loading ? '...' : 'Sign in'}
        </button>
      )}
    </header>
  );
}
