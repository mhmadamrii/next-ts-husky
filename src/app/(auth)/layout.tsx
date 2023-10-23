import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

// export const metadata = {
//   title: 'Threads',
//   description: 'Fucking threads clone',
// };

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
        <body className={`${inter.className}`}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
