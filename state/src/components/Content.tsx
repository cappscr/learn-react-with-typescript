'use client';
import { use } from 'react';
import { UserContext } from '@/state/UserContext';
import { useUserStore } from '@/state/useUserStore';

export function Content() {
  const permissions = useUserStore((state) => state.permissions);

  if (permissions === undefined) {
    return null;
  }
  return (
    <p>
      {permissions.includes('admin')
        ? 'Some important stuff that only admin can do'
        : 'Insufficient permissions'}
    </p>
  );
}
