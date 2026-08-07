'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-slate-900">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Salon Management System (SMS)</h1>
          <p className="text-sm text-slate-500">
            Select a user role to enter their respective route:
          </p>
        </div>

        <div className="space-y-4">
          {/* Admin Link */}
          <Link
            href="/admin"
            className="block w-full p-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base">Owner / Admin</p>
                <p className="text-xs text-slate-300 font-normal">Assigned to Developer 3 · Route: /admin</p>
              </div>
              <span className="text-sm">&rarr;</span>
            </div>
          </Link>

          {/* Cashier Link */}
          <Link
            href="/cashier"
            className="block w-full p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base">Cashier Desk</p>
                <p className="text-xs text-blue-100 font-normal">Assigned to Developer 1 · Route: /cashier</p>
              </div>
              <span className="text-sm">&rarr;</span>
            </div>
          </Link>

          {/* Barber Link */}
          <Link
            href="/barber"
            className="block w-full p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base">Barber Wallet</p>
                <p className="text-xs text-emerald-100 font-normal">Assigned to Developer 2 · Route: /barber</p>
              </div>
              <span className="text-sm">&rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
