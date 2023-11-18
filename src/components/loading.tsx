import React from 'react';
import { CircularProgress } from '@nextui-org/react';

export default function RegularLoading() {
  return (
    <div className="flex justify-center items-center">
      <CircularProgress aria-label="Loading..." label="Loading the data😎" />
    </div>
  );
}
