import { Content } from './Content';

export function Main({
  userName,
  permissions,
}: {
  userName: string | undefined;
  permissions: string[] | undefined;
}) {
  return (
    <main>
      <h1>Welcome</h1>
      <p>{userName ? `Hello ${userName}!` : 'Please sign in'}</p>
      <Content permissions={permissions} />
    </main>
  );
}
