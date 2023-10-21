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

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="w-full flex items-center justify-center md:justify-between container mx-auto">
        <LeftSidebar />
        <section className="border-2 border-blue-700">
          <div className="border-2 w-full">
            <SnackbarWrapper>{children}</SnackbarWrapper>
          </div>
        </section>
        <RightSidebar />
      </main>
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <AppLayout>{children}</AppLayout>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
