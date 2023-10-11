'use client';

import React, { useState } from 'react';

type TUserData = {
  id: number;
  name: string;
};

type THOmeChildProps = {
  data: TUserData[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const HomeChild: React.FC<THOmeChildProps> = ({
  data,
  onChange,
}): JSX.Element => {
  console.log('data', data);
  return (
    <div>
      <span>Homepage child</span>
      <input
        className="border-2 border-y-teal-200 px-3"
        onChange={onChange}
      />
    </div>
  );
};

export default function Homepage() {
  const [input, setInput] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const data = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Kevin',
    },
  ];

  return (
    <div>
      <HomeChild data={data} onChange={handleChange} />
      <h1>Value: {input}</h1>
      <input className="border-2" onChange={handleChange} />
    </div>
  );
}
