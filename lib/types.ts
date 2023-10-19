export type TSidebarLinks = {
  imgURL: string;
  route: string;
  label: string;
};

export type TProfileTabs = {
  value: string;
  label: string;
  icon: string;
};

export type TCommunityTabs = {
  value: string;
  label: string;
  icon: string;
};

export type TAccountProfileProps = {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
};

export type TParamsUpdateUser = {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
};
