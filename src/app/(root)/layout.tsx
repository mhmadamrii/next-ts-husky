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
            <Topbar />
            <SnackbarWrapper>
              <section className="bg-slate-100 min-h-screen">
                <main className="container mx-auto justify-center flex mt-10 border-2">
                  {children}
                  {/* <RightSidebar /> */}
                </main>
              </section>
            </SnackbarWrapper>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
