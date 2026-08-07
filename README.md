# Salon Management System (SMS) - Developer Responsibility Matrix

> **Master Responsibility Matrix for all 3 developers across the 4-week build plan.**

---

## 👨‍💻 Developer 1: Cashier Desk Lead

- **Primary Role**: Front Desk Operations, Fast Billing Counter, Payment Toggles & Daily Expense Logging
- **Assigned Routes**: `/cashier` (Billing Counter), `/cashier/expenses` (Daily Expense Logger)
- **Key Deliverables & Responsibilities**:
  - **Week 1 (Setup & Shells)**:
    - Build `/cashier` route shell and service catalog array.
    - Create service selection card grid with price badges in RWF.
    - Design side drawer layout for quick checkout.
  - **Week 2 (Deep Feature Build)**:
    - Implement interactive checkout drawer with assigned barber selector dropdown.
    - Build payment method toggle (`[MTN MoMo Pay]` vs `[Cash Payment]`) with optional MoMo transaction reference input.
    - Display automatic 50/50 split calculation (e.g. 3,000 RWF total $\rightarrow$ 1,500 RWF Barber / 1,500 RWF House).
    - Build live daily transaction stream showing recent customer checkout history.
    - Build `/cashier/expenses` view to log supplies (blades, shaving creams) and utility costs.
  - **Week 3 (Offline Engine)**:
    - Connect checkout form to write directly to IndexedDB / local browser storage so cashiers can bill customers even when internet is down.
  - **Week 4 (Polish & QA)**:
    - Optimize all touch targets to be at least $48\text{px} \times 48\text{px}$ for fast mobile tablet tapping.
    - Add real-time search/filter bar for service catalog.

---

## 👨‍💻 Developer 2: Barber Wallet Lead

- **Primary Role**: Barber Mobile View, Realtime Commission Wallet, Staff Leaderboard & Work Timeline
- **Assigned Routes**: `/barber` (Personal Wallet), `/barber/leaderboard` (Staff Rankings), `/barber/history` (Work Log Timeline)
- **Key Deliverables & Responsibilities**:
  - **Week 1 (Setup & Shells)**:
    - Build `/barber` route shell and layout for Hero Balance Card.
    - Design static earnings display and barber profile switcher.
  - **Week 2 (Deep Feature Build)**:
    - Implement Hero Balance Card showing today's take-home earnings, gross volume, and daily cut target progress bar.
    - Build interactive Staff Leaderboard (`/barber/leaderboard`) ranking barbers by daily completed cuts and net earnings.
    - Build vertical work timeline component (`/barber/history`) listing completed jobs with timestamp and payout details.
  - **Week 3 (Offline Engine)**:
    - Subscribe Barber Wallet components to local storage / `SalonContext` state updates so earnings update instantly when cashier logs a cut.
  - **Week 4 (Polish & QA)**:
    - Add micro-animations for rank changes and daily cut target milestone achievements.
    - Test mobile phone screen responsiveness across low-cost Android devices.

---

## 👨‍💻 Developer 3: Owner Admin & System Architect

- **Primary Role**: Owner Control Panel, Multi-Tenant Architecture, PWA Offline Shell, Analytics & Remote Override
- **Assigned Routes**: `/admin` (Executive Overview), `/admin/analytics` (Peak Hours), `/admin/fraud` (Security Alerts), `/admin/settings` (Remote Override)
- **Key Deliverables & Responsibilities**:
  - **Week 1 (Setup & Shells)**:
    - Repository initialization (Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide Icons).
    - Draft master domain types (`src/types/index.ts`).
    - Build responsive App Shell (`src/components/layout/AppShell.tsx`) with desktop sidebar and mobile bottom navigation.
    - Implement `SalonContext` provider (`src/context/SalonContext.tsx`) for global state management.
  - **Week 2 (Deep Feature Build)**:
    - Build 4 Executive KPI Cards (`Gross Revenue`, `Clients Served`, `Active Barbers`, `Fraud Alerts`).
    - Implement financial summary breakdown (House Share vs Expenses vs Net Owner Profit).
    - Build Peak Hours Analytics chart component (`/admin/analytics`) using Recharts.
  - **Week 3 (Offline Engine)**:
    - Configure PWA web manifest (installable to phone home screens).
    - Create sticky green/amber Offline Status Banner indicating connection state.
    - Build Remote Owner Override toggle controls (`/admin/settings`) allowing owners to lock sensitive actions remotely.
  - **Week 4 (Polish & QA)**:
    - Build Fraud Discrepancy Log screen (`/admin/fraud`) for flagging unpaid services or orphan MoMo payments.
    - Format exportable daily summary views.
    - Deploy production build to Vercel/Netlify for Phase 4 Pilot Launch.
