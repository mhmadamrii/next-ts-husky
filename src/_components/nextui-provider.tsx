'use client';

import { NextUIProvider } from '@nextui-org/react';

export function NextProviderUI({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
