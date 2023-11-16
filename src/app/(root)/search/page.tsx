import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { User } from '@nextui-org/react';

import UserCard from '@/_components/cards/UserCard';
import Searchbar from '@/_components/shared/Searchbar';

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  const result = await fetchUsers({
    userId: user.id,
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 25,
  });
  console.log('result', result);

  return (
    <div>
      <Searchbar routeType="search" />
      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="no-result">No Result</p>
        ) : (
          <>
            {result.users.map((person) => (
              <>
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType="User"
                />
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
