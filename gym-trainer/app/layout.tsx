import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gym Trainer - Your Personal Fitness Guide',
  description: 'Complete gym tracking and personal trainer app',
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
