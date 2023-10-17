import { currentUser } from '@clerk/nextjs';

export default async function RootPage() {
  const user = await currentUser();

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}
