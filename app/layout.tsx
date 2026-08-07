import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { SalonProvider } from '@/context/SalonContext';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: 'Salon Management System (SMS) - Rwanda',
  description: 'Digital platform for Rwanda salon daily operations, financial control, barber split tracking, and MoMo integration.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SalonProvider>
          <AppShell>{children}</AppShell>
        </SalonProvider>
      </body>
    </html>
  );
}
