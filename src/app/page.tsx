const DataDisplay = <T,>({ data }: { data: T }) => {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default function Root() {
  return (
    <div className="container mx-auto">
      <h1>Root page</h1>
      <DataDisplay data="Hello world" />
      <DataDisplay data={() => 'Hello buddy!'} />
    </div>
  );
}
