import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { formatDateString } from '@/lib/utils';

interface IProps {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: string | boolean;
}

export default function ThreadCard({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: IProps) {
  const formatDateForPostCard = (postDate: string) => {
    const currentDate = moment();
    const postDateObj = moment(postDate);
    const diffDays = currentDate.diff(postDateObj, 'days');

    if (diffDays === 0) {
      // Posted today, display time difference
      const hoursAgo = currentDate.diff(postDateObj, 'hours');
      if (hoursAgo === 0) {
        const minutesAgo = currentDate.diff(postDateObj, 'minutes');
        return `${minutesAgo} minutes ago`;
      } else {
        return `${hoursAgo} hours ago`;
      }
    } else if (diffDays === 1) {
      // Posted yesterday
      return 'Yesterday';
    } else {
      // Posted on a date before yesterday, display the date
      return postDateObj.format('MMMM D, YYYY');
    }
  };

  return (
    <div className="flex w-full justify-between flex-wrap border-2w-64 p-4 border bg-white border-gray-300 rounded shadow-md transition-transform transform hover:shadow-lg cursor-pointer">
      <div className="items-center flex justify-between w-full">
        <div className="flex items-center space-x-3">
          <Image
            src={author?.image}
            alt="author profile image"
            width={30}
            height={30}
            className="cursor-pointer rounded-full"
          />
          <div>
            <Link
              href={`/profile/${author?.id}`}
              className="hover:text-blue-500"
            >
              <h2>{author?.name}</h2>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-gray-500">{formatDateForPostCard(createdAt)}</h2>
        </div>
      </div>

      <div className="flex w-full flex-col border-l-2 pl-2 ml-3 mt-2 pb-5 pt-2">
        <h2 className="text-small-regular">{content}</h2>
      </div>

      <div className="flex space-x-2 items-center">
        <div>
          {comments && comments.length > 0 ? (
            <div className=" flex items-center ml-1">
              <Image
                src={comments[0].author.image}
                alt="heart"
                width={15}
                height={15}
                className="rounded-full"
              />
              <h3 className="pl-2">
                {`${comments.length} ${
                  comments.length === 1 ? 'reply' : 'replies'
                }`}
              </h3>
            </div>
          ) : (
            <h3 className="pl-2">0 replies</h3>
          )}
        </div>
        <div className="flex gap-3.5">
          <Image
            src="/assets/heart-gray.svg"
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
          <Link href={`/thread/${id}`}>
            <Image
              src="/assets/reply.svg"
              alt="heart"
              width={24}
              height={24}
              className="cursor-pointer object-contain"
            />
          </Link>
          <Image
            src="/assets/repost.svg"
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
          <Image
            src="/assets/share.svg"
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
        </div>
      </div>
      {!isComment && community && (
        <Link
          href={`/communities/${community.id}`}
          className="mt-5 flex items-center border-2 border-red-700"
        >
          <p className="text-subtle-medium text-gray-1">
            {formatDateString(createdAt)}
            {community && ` - ${community.name}`}
          </p>
        </Link>
      )}
    </div>
  );
}
