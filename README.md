# Salon Management System (SMS)

A digital operational and financial management system designed for salons in Rwanda. SMS replaces paper-based tracking with real-time transaction logging, automated barber commission splits (50/50 split), Mobile Money (MoMo) payment tracking, fraud detection, and remote owner oversight.

---

## 🛠️ Technical Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Icons**: Lucide React
- **Analytics & Charts**: Recharts
- **State Engine**: React Context (`SalonContext`) simulating offline-first storage and instant cross-dashboard state synchronization

---

## 📁 Project Directory Structure

```text
Salon_Management_System/
├── app/
│   ├── layout.tsx                 # Root layout with SalonProvider & AppShell
│   ├── page.tsx                   # Landing page / Role selector hub
│   ├── globals.css                # Tailwind base & custom styles
│   ├── cashier/
│   │   ├── page.tsx               # Dev 1: Cashier Billing Counter (/cashier)
│   │   └── expenses/page.tsx      # Dev 1: Daily Expense Logger (/cashier/expenses)
│   ├── barber/
│   │   ├── page.tsx               # Dev 2: Barber Personal Wallet (/barber)
│   │   ├── leaderboard/page.tsx   # Dev 2: Staff Ranking Leaderboard (/barber/leaderboard)
│   │   └── history/page.tsx       # Dev 2: Barber Work History Timeline (/barber/history)
│   └── admin/
│       ├── page.tsx               # Dev 3: Executive Admin Overview (/admin)
│       ├── analytics/page.tsx     # Dev 3: Peak Hours & Traffic Charts (/admin/analytics)
│       ├── fraud/page.tsx         # Dev 3: Fraud & Discrepancy Logs (/admin/fraud)
│       └── settings/page.tsx      # Dev 3: Remote Owner Override Lock (/admin/settings)
├── src/
│   ├── components/
│   │   └── layout/AppShell.tsx    # Responsive Shell & Top Navigation bar
│   ├── context/
│   │   └── SalonContext.tsx       # Global mock state engine & real-time sync
│   └── types/
│       └── index.ts               # Master domain models (User, Service, Transaction, Expense, FraudAlert)
├── DEVELOPER_PROMPT.md            # Mandatory team rules & developer coding prompt
├── README.md                      # Project documentation & responsibility matrix
├── package.json                   # Project dependencies & scripts
├── tsconfig.json                  # TypeScript configuration with @/* path aliases
├── tailwind.config.ts             # Tailwind CSS theme configuration
└── postcss.config.mjs             # PostCSS configuration
```

---

## 👨‍💻 Developer Responsibility Matrix

### Developer 1: Cashier Desk Lead
- **Primary Role**: Front Desk Operations, Fast Billing Counter, Payment Toggles & Daily Expense Logging
- **Assigned Routes**: `/cashier` (Billing Counter), `/cashier/expenses` (Daily Expense Logger)
- **Deliverables**:
  - Service catalog grid & price cards in RWF.
  - Checkout drawer & barber selection dropdown.
  - Cash vs MTN MoMo Pay payment method toggles.
  - Auto 50/50 barber commission split calculation.
  - Live daily transaction feed.
  - Daily expense logging (supplies, blades, creams, utilities).

### Developer 2: Barber Wallet Lead
- **Primary Role**: Barber Mobile View, Realtime Commission Wallet, Staff Leaderboard & Work Timeline
- **Assigned Routes**: `/barber` (Personal Wallet), `/barber/leaderboard` (Staff Rankings), `/barber/history` (Work Log Timeline)
- **Deliverables**:
  - Hero Balance Card showing today's take-home earnings in RWF.
  - Real-time 50/50 split calculation breakdown.
  - Daily cut progress target bar.
  - Interactive Staff Leaderboard ranking barbers by cuts and net earnings.
  - Vertical work history timeline with timestamps and payout details.

### Developer 3: Owner Admin & System Architect
- **Primary Role**: Owner Control Panel, Multi-Tenant Architecture, PWA Offline Shell, Analytics & Remote Override
- **Assigned Routes**: `/admin` (Executive Overview), `/admin/analytics` (Peak Hours), `/admin/fraud` (Security Alerts), `/admin/settings` (Remote Override)
- **Deliverables**:
  - Repository architecture & App Shell layout.
  - Master domain TypeScript interfaces (`src/types/index.ts`).
  - Shared `SalonContext` provider (`src/context/SalonContext.tsx`).
  - 4 Executive KPI Cards (`Gross Revenue`, `Clients Served`, `Active Barbers`, `Fraud Alerts`).
  - Financial summary breakdown (House Share vs Expenses vs Net Owner Profit).
  - Peak Hours traffic & revenue visualizer using Recharts.
  - Sticky green/amber Offline Status Banner & Remote Owner Override lock.

---

## 📜 Team Rules & Guidelines

See [DEVELOPER_PROMPT.md](file:///Users/elvisbakunzi/Documents/Projects/Salon_Management_System/DEVELOPER_PROMPT.md) for full developer rules:
- **Clean Code**: Strict TypeScript safety. Touch targets $\ge 48\text{px}$ on mobile screens.
- **Minimal Comments**: Explain complex logic only; no decorative comments.
- **No Emojis**: Emojis are prohibited inside source code, comments, and PR descriptions.
- **PR Protocol**: Branch naming `feature/<domain>-<name>`. 1 reviewer required before merging to `dev`.

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```

3. **Access Routes in Browser**:
   - Role Selector Hub: `http://localhost:3000`
   - Admin Overview: `http://localhost:3000/admin`
   - Cashier Desk: `http://localhost:3000/cashier`
   - Barber Wallet: `http://localhost:3000/barber`
