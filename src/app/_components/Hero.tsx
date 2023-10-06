'use client';

import Image from 'next/image';
import React from 'react';

const Hero = ({ cars }: { cars: any }) => {
  console.log('cars', cars);
  return (
    <>
      {/* <div className="flex justify-between border-2 xl:flex-row md:flex-row sm:flex-col"> */}
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="text-6xl font-semibold">
            Find, Book, Rent a car-- quick and easy
          </h1>
          <p>
            Streamline your car rental experience with our
            effortless booking process.
          </p>
        </div>

        <div className="hero__image-container">
          <div className="hero__image">
            <Image
              src="/hero.png"
              alt="hero"
              fill
              className="object-contain"
            />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </>
  );
};

export default React.memo(Hero);
