import type { Metadata } from 'next';
import StoreProvider from '@/app/_providers/StoreProvider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Typicode API to use as demo',
  description: 'get posts, add favorites, generate post, add comments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
