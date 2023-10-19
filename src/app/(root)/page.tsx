'use client';

import { useSnackbar } from 'notistack';

export default async function RootPage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <>
      <h1>Hello world</h1>
      <button
        onClick={() => enqueueSnackbar('Hello world', { variant: 'success' })}
      >
        Show snackbar
      </button>
    </>
  );
}
