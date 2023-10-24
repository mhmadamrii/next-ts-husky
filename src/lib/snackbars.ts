'use client';

import { useSnackbar } from 'notistack';

export const showSuccessSnackbar = (message: string) => {
  const { enqueueSnackbar } = useSnackbar();
  enqueueSnackbar(message, { variant: 'success' });
};
