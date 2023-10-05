'use client';

import React from 'react';

const Hero = ({ cars }: { cars: any }) => {
  console.log('cars', cars);
  return (
    <>
      <h1>Hero Section</h1>
    </>
  );
};

export default React.memo(Hero);
