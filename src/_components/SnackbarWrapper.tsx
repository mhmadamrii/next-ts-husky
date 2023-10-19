'use client';

import { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

export default function SnackbarWrapper({ children }: { children: ReactNode }) {
  const snackbarSettings = {
    vertical: 'top',
    horizontal: 'right',
  };
  return (
    // @ts-ignore: Unreachable code error
    <SnackbarProvider anchorOrigin={snackbarSettings}>
      {children}
    </SnackbarProvider>
  );
}
