'use client';

import { Button } from '@nextui-org/react';
import { useSnackbar } from 'notistack';

export default function FloatingButton() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickNotif = () => {
    enqueueSnackbar('Under construction, please contact @mhmadamrii!', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      variant: 'warning',
      autoHideDuration: 1000,
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-10 rounded-full">
      <Button
        className="bg-sky-500  hover:bg-sky-600 text-white font-bold rounded-full px-0 w-5"
        size="lg"
        isIconOnly
        onClick={handleClickNotif}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Button>
    </div>
  );
}
