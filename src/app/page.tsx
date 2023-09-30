type TData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getData = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10',
  );
  return res.json();
};

export default async function Root() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <div className="text-2xl">
        <h1>Hello world</h1>
      </div>
    </main>
  );
}
