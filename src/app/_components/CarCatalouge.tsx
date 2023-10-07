'use client';

import React from 'react';

const CarCatalouge = () => {
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
    </div>
  );
};

export default React.memo(CarCatalouge);
