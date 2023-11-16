import Image from 'next/image';
import Link from 'next/link';

import { fetchUser, getActivity } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import RegularLoading from '@/_components/loading';

export default async function Activity() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  const activity = await getActivity(userInfo._id);
  return (
    <>
      <div className="bg-white p-2 rounded-sm">
        <h1 className="text-2xl font-bold text-sky-500">Your activities</h1>
      </div>
      <Suspense fallback={<RegularLoading />}>
        <div>
          {activity.length > 0 ? (
            <>
              {activity.map((activity) => (
                <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                  <article className="activity-card flex py-5 border-b-1 space-x-2">
                    <Image
                      src={activity.author.image}
                      alt="user_logo"
                      width={25}
                      height={20}
                      className="rounded-full object-cover"
                    />
                    <p className="!text-small-regular text-light-1">
                      <span className="mr-1 text-primary-500">
                        {activity.author.name}
                      </span>{' '}
                      replied to your thread
                    </p>
                  </article>
                </Link>
              ))}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">No activity yet</p>
          )}
        </div>
      </Suspense>
    </>
  );
}
