'use client';

import React from 'react';
import Link from 'next/link';

export default function CashierPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          Developer 1 Workspace
        </span>
        <h1 className="text-2xl font-bold text-slate-900">Cashier Billing Counter</h1>
        <p className="text-sm text-slate-500">
          Route: <code className="bg-slate-100 px-2 py-0.5 rounded">/cashier</code>
        </p>
      </div>

      <div className="p-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl space-y-4">
        <h2 className="font-semibold text-slate-800 text-sm">Developer 1 Responsibilities:</h2>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
          <li>Build service catalog grid & price cards</li>
          <li>Implement checkout side drawer & barber selector dropdown</li>
          <li>Build MTN MoMo Pay vs Cash payment toggle</li>
          <li>Auto-calculate 50/50 barber commission split</li>
          <li>Display live daily transaction feed</li>
        </ul>

        <div className="pt-2">
          <Link
            href="/cashier/expenses"
            className="inline-block px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Expenses Sub-Route (/cashier/expenses) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
