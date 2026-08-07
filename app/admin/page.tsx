'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
        <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
          Developer 3 Workspace
        </span>
        <h1 className="text-2xl font-bold text-slate-900">Executive Owner Overview</h1>
        <p className="text-sm text-slate-500">
          Route: <code className="bg-slate-100 px-2 py-0.5 rounded">/admin</code>
        </p>
      </div>

      <div className="p-6 bg-slate-50 border border-dashed border-slate-300 rounded-xl space-y-4">
        <h2 className="font-semibold text-slate-800 text-sm">Developer 3 Responsibilities:</h2>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
          <li>Build 4 Executive KPI Cards (Gross Revenue, Total Clients, Active Barbers, Fraud Count)</li>
          <li>Build financial split summary (House Share vs Expenses vs Net Profit)</li>
          <li>Integrate multi-tenant architecture & global SalonContext state</li>
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          <Link
            href="/admin/analytics"
            className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Analytics & Peaks (/admin/analytics) &rarr;
          </Link>
          <Link
            href="/admin/fraud"
            className="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors"
          >
            Fraud Alerts (/admin/fraud) &rarr;
          </Link>
          <Link
            href="/admin/settings"
            className="px-4 py-2 bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors"
          >
            Remote Settings (/admin/settings) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
