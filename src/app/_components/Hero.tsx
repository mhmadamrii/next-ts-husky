'use client';

import Image from 'next/image';
import React from 'react';

const Hero = ({ cars }: { cars: any }) => {
  console.log('cars', cars);
  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="text-6xl font-semibold">
            Find, Book, Rent a car-- quick and easy
          </h1>
          <p className="pt-4 text-2xl">
            Streamline your car rental experience with our
            effortless booking process.
          </p>
          <button className="rounded bg-blue-600 py-2 px-4 text-white hover:bg-sky-600 mt-4">
            Explore cars
          </button>
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
