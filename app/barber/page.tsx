'use client';

import React from 'react';
import Link from 'next/link';

export default function BarberWalletPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
          Developer 2 Workspace
        </span>
        <h1 className="text-2xl font-bold text-slate-900">Barber Personal Wallet</h1>
        <p className="text-sm text-slate-500">
          Route: <code className="bg-slate-100 px-2 py-0.5 rounded">/barber</code>
        </p>
      </div>

      <div className="p-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl space-y-4">
        <h2 className="font-semibold text-slate-800 text-sm">Developer 2 Responsibilities:</h2>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
          <li>Build Hero Balance Card showing today's take-home earnings in RWF</li>
          <li>Display daily cut progress target bar</li>
          <li>Show real-time 50/50 split calculation breakdown</li>
          <li>Subscribe components to local storage / context for live balance jumps</li>
        </ul>

        <div className="flex items-center space-x-4 pt-2">
          <Link
            href="/barber/leaderboard"
            className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Leaderboard (/barber/leaderboard) &rarr;
          </Link>
          <Link
            href="/barber/history"
            className="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors"
          >
            Work History (/barber/history) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
