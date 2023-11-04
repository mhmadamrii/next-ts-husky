import Image from 'next/image';
import { fetchCommunities } from '../../../lib/actions/community.actions';
import CompanyDialog from './CompanyDialog';

export default async function RightSidebar() {
  const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });
  return (
    <div>
      <h1>Suggested Communitity</h1>
      {suggestedCOmmunities.communities.map((community, idx) => (
        <>
          <div
            key={community.id}
            className="flex justify-between items-center border-2 p-3 mt-2 rounded-sm w-full"
          >
            <div className="flex space-x-2 items-center">
              <Image
                src={community.image}
                width={40}
                height={40}
                alt="community img"
                className="rounded-full"
              />
              <h1 className="truncate">{community.name}</h1>
            </div>

            <div>
              <button className="border-2 hidden lg:inline-block text-sm py-2 px-3 rounded-md bg-sky-500 hover:bg-sky-600 text-white">
                View
              </button>
            </div>
          </div>

          <CompanyDialog />
        </>
      ))}
    </div>
  );
}
