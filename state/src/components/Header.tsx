import { use } from 'react';

export function Header({
  userName,
  onSignInClick,
  onSignOutClick,
  loading,
}: {
  userName: string | undefined;
  onSignInClick: () => void;
  onSignOutClick: () => void;
  loading: boolean;
}) {
  return (
    <header>
      {userName ? (
        <>
          <span>{userName} has signed in</span>
          <button onClick={onSignOutClick} disabled={loading} type="button">
            {loading ? '...' : 'Sign out'}
          </button>
        </>
      ) : (
        <button onClick={onSignInClick} disabled={loading} type="button">
          {loading ? '...' : 'Sign in'}
        </button>
      )}
    </header>
  );
}
