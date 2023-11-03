import Image from 'next/image';
import { fetchCommunities } from '../../../lib/actions/community.actions';

export default async function RightSidebar() {
  const suggestedCOmmunities = await fetchCommunities({ pageSize: 4 });
  console.log('suggest', suggestedCOmmunities);
  return (
    <div>
      <h1>Suggested Communitity</h1>
      {suggestedCOmmunities.communities.map((community, idx) => (
        <div
          key={community.id}
          className="flex space-x-3 items-center border-2 p-3"
        >
          <Image
            src={community.image}
            width={30}
            height={30}
            alt="community img"
            className="rounded-full"
          />
          <h1>{community.name}</h1>
        </div>
      ))}
    </div>
  );
}
