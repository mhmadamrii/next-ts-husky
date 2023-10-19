import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function CreateThread() {
  const user = await currentUser();

  if (!user) return null;

  // const userInfo = await fetchUser()
  return (
    <div>
      <h1>Create threads</h1>
    </div>
  );
}
