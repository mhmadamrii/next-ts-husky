'use client';

const withRedColor = (WrappedComponent: any) => {
  return (props: any) => (
    <WrappedComponent {...props} isRed />
  );
};

const MyComponent = (props: any) => {
  console.log('props', props);
  return (
    <div
      className={
        props?.isRed ? 'bg-slate-500' : 'bg-zinc-700'
      }
    >
      <h1 className="text-4xl">Hello world</h1>
    </div>
  );
};

const RedTextComponent = withRedColor(MyComponent);

export default function Homepage() {
  return (
    <div className="container mx-auto mt-40">
      <h1 className="text-4xl">HOC</h1>
      <RedTextComponent />
    </div>
  );
}
