import { fetchPosts } from '../../../lib/actions/thread.actions';

export default async function RootPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const result = await fetchPosts(
    searchParams.page ? +searchParams.page : 1,
    30,
  );

  console.log('result', result);
  return (
    <>
      <h1>Hello world</h1>
      {result.posts.length === 0 ? (
        <h1 className="text-4xl">NO posts found!</h1>
      ) : (
        <>
          {result.posts.map((post: any) => (
            <h1 className="text-red-700 text-4xl">{post.text}</h1>
          ))}
        </>
      )}
    </>
  );
}
