import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Threads',
  description: 'Fucking threads clone',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <main>
            <h1>Hello world</h1>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}