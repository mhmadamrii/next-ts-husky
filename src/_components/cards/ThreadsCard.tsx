import Image from 'next/image';
import Link from 'next/link';

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
}: {
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
  isComment?: string;
}) {
  console.log(author);
  return (
    <div className="flex w-full justify-between flex-wrap border-2w-64 p-4 border border-gray-300 rounded shadow-md transition-transform transform hover:scale-105 cursor-pointer">
      <div className="flex space-x-3">
        <Image
          src={author.image}
          alt="author profile image"
          width={30}
          height={30}
          className="cursor-pointer rounded-full"
        />
        <Link href={`/profile/${author.id}`} className="hover:text-blue-500">
          <h2>{author.name}</h2>
        </Link>
        <div className="thread-card_bar" />
      </div>

      <div className="flex w-full flex-col">
        <h2 className="text-small-regular">{content}</h2>
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
    </div>
  );
}
