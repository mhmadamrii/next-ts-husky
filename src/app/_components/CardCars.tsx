'use client';

import React from 'react';

type TProps = {
  year: number;
  make: string;
  model: string;
};

const CardCars = (props: TProps): JSX.Element => {
  const { year, make, model } = props;
  return (
    <div className='border-2 w-32'>
      <h1 className="text-4xl">{year}</h1>
      <h1 className="text-2xl">{make}</h1>
      <h1>{model}</h1>
      <h1>Cards</h1>
    </div>
  );
};

export default React.memo(CardCars);
