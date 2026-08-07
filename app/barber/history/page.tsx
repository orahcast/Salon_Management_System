'use client';

import React from 'react';
import Link from 'next/link';

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
          Developer 2 Workspace
        </span>
        <h1 className="text-2xl font-bold text-slate-900">Work History & Income Log</h1>
        <p className="text-sm text-slate-500">
          Route: <code className="bg-slate-100 px-2 py-0.5 rounded">/barber/history</code>
        </p>
      </div>

      <div className="p-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl space-y-4">
        <h2 className="font-semibold text-slate-800 text-sm">Developer 2 Responsibilities:</h2>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
          <li>Build vertical timeline listing completed jobs for the logged-in barber</li>
          <li>Display individual job timestamps and 50/50 payout breakdown</li>
        </ul>

        <div className="pt-2">
          <Link
            href="/barber"
            className="inline-block text-xs font-semibold text-emerald-600 hover:underline"
          >
            &larr; Back to Barber Wallet (/barber)
          </Link>
        </div>
      </div>
    </div>
  );
}
