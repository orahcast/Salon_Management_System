'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Lightweight Navigation Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-sm text-slate-700 hover:text-slate-900">
          &larr; Back to Role Selector
        </Link>

        <div className="flex items-center space-x-4 text-xs font-semibold">
          <Link
            href="/admin"
            className={`px-3 py-1.5 rounded-md ${
              pathname.startsWith('/admin') ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Admin (Dev 3)
          </Link>
          <Link
            href="/cashier"
            className={`px-3 py-1.5 rounded-md ${
              pathname.startsWith('/cashier') ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Cashier (Dev 1)
          </Link>
          <Link
            href="/barber"
            className={`px-3 py-1.5 rounded-md ${
              pathname.startsWith('/barber') ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Barber (Dev 2)
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-5xl mx-auto w-full">{children}</main>
    </div>
  );
};
