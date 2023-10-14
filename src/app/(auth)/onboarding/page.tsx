import AccountProfile from '@/_components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';

export default async function OnBoarding() {
  const user = await currentUser();
  const userInfo = {};

  // const userData = {
  //   id: user.id,
  //   objectId: userInfo?._id,
  //   username: userInfo ? userInfo?.username : user.username,
  //   name: userInfo ? userInfo?.name : user.firstName ?? '',
  //   bio: userInfo ? userInfo?.bio : '',
  //   image: userInfo ? userInfo?.image : user.imageUrl,
  // };

  const dummyUserData = {
    id: '1',
    objectId: '',
    username: 'mhmadamrii',
    name: 'amri',
    bio: 'lorem ipsum',
    image: 'https://',
  };

  return (
    <div>
      <h1>Boarding page</h1>
      <p>Complete your profile first</p>
      <AccountProfile user={dummyUserData} btnTitle="whatever" />
    </div>
  );
}
