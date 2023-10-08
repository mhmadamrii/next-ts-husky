'use client';

import React from 'react';
import CardCars from './CardCars';
import { CarType } from '../../../utils/types';

const CarCatalouge = ({ cars }: { cars: CarType[] }) => {
  return (
    <div className="h-48">
      <div>
        <h1 className="text-2xl">Car Catalouge</h1>
        <p className="text-slate-700">
          Explore out cars you might like
        </p>
      </div>

      <div className="mb-5 flex justify-between gap-3">
        <div className="relative w-full">
          <img
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
            src="/model-icon.png" // Replace with the path to your image
            alt="Icon"
          />
          <input
            className="w-full rounded-md border border-gray-400 px-4 py-2 pl-8 placeholder-gray-500 placeholder-opacity-50"
            type="text"
            placeholder="Explore the cars.."
          />
        </div>

        <div className="relative w-full">
          <img
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
            src="/model-icon.png" // Replace with the path to your image
            alt="Icon"
          />
          <input
            className="w-full rounded-md border border-gray-400 px-4 py-2 pl-8 placeholder-gray-500 placeholder-opacity-50"
            type="text"
            placeholder="Explore the cars.."
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {cars.map((item: CarType, idx: number) => {
          return (
            <CardCars
              key={idx}
              year={item.year}
              make={item.make}
              model={item.model}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(CarCatalouge);
