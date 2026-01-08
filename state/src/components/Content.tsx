export function Content({ permissions }: { permissions: string[] | undefined }) {
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
