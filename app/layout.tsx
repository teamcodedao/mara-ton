import type {Metadata} from 'next';
import {Single_Day} from 'next/font/google';
import './globals.css';

const font = Single_Day({
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Mara | Make American Rich Again',
  description: 'Make American Rich Again - Donald J Trump',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
