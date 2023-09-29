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
      {/* <div className="flex gap-8">
        {data.map((item: TData, idx: number) => (
          <div key={item.id} className="bg-slate-700 pr-2.5">
            <h1>{item.body}</h1>
          </div>
        ))}
      </div>
 */}
      <div className="text-2xl">
        <h1>Hello world</h1>
      </div>
    </main>
  );
}
