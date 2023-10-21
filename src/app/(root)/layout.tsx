import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/_components/theme-provider';

// components
import Topbar from '@/_components/shared/Topbar';
import LeftSidebar from '@/_components/shared/LeftSidebar';
import RightSidebar from '@/_components/shared/RightSidebar';
import Bottombar from '@/_components/shared/Bottombar';
import SnackbarWrapper from '@/_components/SnackbarWrapper';

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
          <main className="flex flex-col">
            <div className="fixed top-0 right-0 left-0 z-10">
              <Topbar />
            </div>
            <SnackbarWrapper>
              <section className="bg-slate-100 min-h-screen min-w-full">
                <main className="container mx-auto justify-center flex mt-16 border-2">
                  <div className="hidden md:inline w-1/4 p-4 fixed top-16 left-0 h-full overflow-y-auto bg-white shadow-lg">
                    <LeftSidebar />
                  </div>
                  <div className="md:w-1/2 md:p-4">{children}</div>
                  <div className="hidden md:inline w-1/4 p-4 fixed top-16 right-0 h-full overflow-y-auto bg-white shadow-lg">
                    <RightSidebar />
                  </div>
                </main>
              </section>
            </SnackbarWrapper>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
