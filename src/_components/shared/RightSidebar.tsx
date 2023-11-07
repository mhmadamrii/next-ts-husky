import Image from 'next/image';

import { fetchCommunities } from '../../../lib/actions/community.actions';
import { Button } from '@nextui-org/react';
import CommunityCard from '../cards/CommunityCard';

export default async function RightSidebar() {
  const suggestedCommunities = await fetchCommunities({ pageSize: 4 });

  return (
    <div>
      <h1>Suggested Communitity</h1>
      {suggestedCommunities.communities.map((community, idx) => (
        <CommunityCard community={community} />
      ))}
    </div>
  );
}
