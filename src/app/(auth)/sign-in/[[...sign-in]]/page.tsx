import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="border-2 flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
}
