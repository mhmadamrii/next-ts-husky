'use client';

import Image from 'next/image';
import React from 'react';
import { CarType } from '../../../utils/types';

const Hero = ({ cars }: { cars: CarType }) => {
  console.log('cars', cars);
  return (
    <>
      <div className="hero p-3">
        <div className="padding-x flex-1 pt-36">
          <h1 className="text-6xl font-semibold">
            Find, Book, Rent a car-- quick and easy
          </h1>
          <p className="pt-4 text-2xl">
            Streamline your car rental experience with our
            effortless booking process.
          </p>
          <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-sky-600">
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
