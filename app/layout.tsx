import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Learn Fast - Online IT Course Center',
  description: 'Student Course Registration System for Online IT Course Center',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
