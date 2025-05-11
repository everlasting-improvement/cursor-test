import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Web Service',
  description: 'Your one-stop shop for all your needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 