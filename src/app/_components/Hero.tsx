'use client';

import Image from 'next/image';
import React from 'react';

const Hero = ({ cars }: { cars: any }) => {
  console.log('cars', cars);
  return (
    <>
      <div className="flex justify-between border-2 xl:flex-row md:flex-row sm:flex-col">
        <div className="w-2/5 border-2">
          <h1 className="text-6xl font-semibold">
            Find, Book, Rent a car-- quick and easy
          </h1>
          <p>
            Streamline your car rental experience with our
            effortless booking process.
          </p>
        </div>

        <div className="w-3/5 flex justify-end border-2">
          <Image
            src="/hero.png"
            width={300}
            height={30}
            alt="hero"
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(Hero);
