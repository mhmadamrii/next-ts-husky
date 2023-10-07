'use client';

import React from 'react';
import CardCars from './CardCars';

type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

const CarCatalouge = ({ cars }: { cars: any }) => {
  console.log('cars', cars);
  return (
    <div className="h-48">
      <div>
        <h1 className="text-2xl">Car Catalouge</h1>
        <p className="text-slate-700">
          Explore out cars you might like
        </p>
      </div>

      <div className="flex justify-between gap-3">
        <div className="relative">
          <img
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
            src="/model-icon.png" // Replace with the path to your image
            alt="Icon"
          />
          <input
            className="pl-8 border border-gray-400 rounded-md py-2 px-4 w-full placeholder-gray-500 placeholder-opacity-50"
            type="text"
            placeholder="Explore the cars.."
          />
        </div>

        <div className="relative">
          <img
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
            src="/model-icon.png" // Replace with the path to your image
            alt="Icon"
          />
          <input
            className="pl-8 border border-gray-400 rounded-md py-2 px-4 w-full placeholder-gray-500 placeholder-opacity-50"
            type="text"
            placeholder="Explore the cars.."
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-5">
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
