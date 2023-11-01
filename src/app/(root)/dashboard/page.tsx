'use client';

import { useState } from 'react';

export const AnotherComp = ({
  title,
  age,
  occupancy,
}: {
  title: string;
  age: number;
  occupancy: string;
}) => {
  const data: { id: number; name: string }[] = [
    { id: 1, name: 'Henry' },
    { id: 2, name: 'Quill' },
  ];
  return (
    <div>
      <p>Example of another component</p>
      {data.map((person, idx) => (
        <div key={idx}>{person.name}</div>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    return setValue(!value);
  };
  return (
    <div>
      <h1>Dashboard page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        blanditiis voluptas dolore maxime ipsam reiciendis, et doloribus
        obcaecati minima ipsum excepturi dignissimos architecto laudantium
        placeat harum dolorum animi velit facilis.
      </p>
      <button onClick={handleToggle} className="m-5 bg-blue-400">
        Toggle Value
      </button>
      {value && <p>Value: true</p>}
      <AnotherComp title="Police" age={30} occupancy="anything" />
    </div>
  );
}
