import '../globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { NextProviderUI } from '@/_components/nextui-provider';

// components
import Topbar from '@/_components/shared/Topbar';
import LeftSidebar from '@/_components/shared/LeftSidebar';
import RightSidebar from '@/_components/shared/RightSidebar';
import SnackbarWrapper from '@/_components/SnackbarWrapper';
import FloatingButton from '@/_components/FloatingButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Minimalist threads clone app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextProviderUI>
            <main className="flex flex-col">
              <SnackbarWrapper>
                <div className="sticky top-0 z-10 backdrop-blur bg-slate-100/5  border-gray-300">
                  <Topbar />
                </div>
                <section className="bg-slate-100 min-h-screen min-w-full">
                  <main className="container mx-auto justify-center flex mt-5">
                    <div className="hidden md:inline w-1/4 ml-5 mt-5 rounded-md p-4 fixed top-16 left-0 h-full overflow-y-auto bg-white shadow-lg">
                      <LeftSidebar />
                    </div>
                    <div className="mt-0 md:mt-0 w-full md:w-1/2 md:p-4">
                      {children}
                      <div className="lg:hidden md:hidden">
                        <FloatingButton />
                      </div>
                    </div>
                    <div className="hidden md:inline w-1/4 mr-5 mt-5 rounded-md p-4 fixed top-16 right-0 h-full overflow-y-auto bg-white shadow-lg">
                      <RightSidebar />
                    </div>
                  </main>
                </section>
              </SnackbarWrapper>
            </main>
          </NextProviderUI>
        </body>
      </html>
    </ClerkProvider>
  );
}
