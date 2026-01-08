'use client';
import { use } from 'react';
import { UserContext } from '@/state/UserContext';

export function Header() {
  const { userName, loading, handleSignIn, handleSignOut, togglePermissions } = use(UserContext);

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
