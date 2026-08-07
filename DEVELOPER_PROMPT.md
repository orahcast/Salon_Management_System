# Salon Management System (SMS) - Master Developer Responsibilities & Rules

> **Team Agreement**: This document details the exact responsibilities, assigned routes, and technical rules for **Developer 1 (Cashier Lead)**, **Developer 2 (Barber Lead)**, and **Developer 3 (Admin & System Architect)**.

---

## 👨‍💻 Developer 1: Cashier Desk Lead

- **Primary Role**: Front Desk Operations, Fast Billing Counter, Payment Toggles & Daily Expense Logging
- **Assigned Routes**: `/cashier` (Billing Counter), `/cashier/expenses` (Daily Expense Logger)
- **Core Focus Areas**:
  - Service catalog grid with price cards in RWF.
  - Fast checkout drawer with barber selector dropdown.
  - Cash vs MTN MoMo Pay toggle buttons.
  - Optional MoMo transaction reference input.
  - Auto-calculation of 50/50 commission split.
  - Live daily transaction feed.
  - Daily expense logging (supplies, blades, creams, utilities).
  - Offline local storage persistence for checkout forms.
  - Mobile touch target optimization ($\ge 48\text{px}$).

---

## 👨‍💻 Developer 2: Barber Wallet Lead

- **Primary Role**: Barber Mobile View, Realtime Commission Wallet, Staff Leaderboard & Work Timeline
- **Assigned Routes**: `/barber` (Personal Wallet), `/barber/leaderboard` (Staff Rankings), `/barber/history` (Work Log Timeline)
- **Core Focus Areas**:
  - Hero Balance Card showing today's take-home earnings in RWF.
  - Real-time 50/50 split calculation breakdown.
  - Daily cut progress target bar (e.g. 8 / 10 cuts completed).
  - Interactive Staff Leaderboard ranking barbers by cuts and revenue.
  - Vertical work history timeline with timestamps and payout amounts.
  - Real-time balance updates when cashier records a service.
  - Rank change micro-animations and milestone achievement badges.

---

## 👨‍💻 Developer 3: Owner Admin & System Architect

- **Primary Role**: Owner Control Panel, Multi-Tenant Architecture, PWA Offline Shell, Analytics & Remote Override
- **Assigned Routes**: `/admin` (Executive Overview), `/admin/analytics` (Peak Hours), `/admin/fraud` (Security Alerts), `/admin/settings` (Remote Override)
- **Core Focus Areas**:
  - Next.js 14 App Router project setup and architecture.
  - Master domain TypeScript interfaces (`src/types/index.ts`).
  - Shared `SalonContext` provider (`src/context/SalonContext.tsx`).
  - Responsive App Shell layout (desktop sidebar + mobile bottom nav).
  - 4 Executive KPI Cards (`Gross Revenue`, `Clients Served`, `Active Barbers`, `Fraud Alerts`).
  - Financial summary breakdown (House Share vs Expenses vs Net Owner Profit).
  - Peak Hours traffic & revenue visualizer using Recharts.
  - Sticky green/amber Offline Status Banner.
  - Remote Owner Override lock controls.
  - Security & Fraud Discrepancy Log screen.
  - Production deployment setup on Vercel.

---

## 📜 Technical Rules & Coding Standards

1. **Production-Level Code**:
   - Write strict, type-safe TypeScript. Do not use `any` or loose types.
   - Touch targets on mobile layouts must be at least **48px x 48px** for fast tablet/phone tapping.
2. **Minimal & Meaningful Comments**:
   - Code should be self-documenting. Explain complex formulas (like 50/50 split or MoMo reference matching) only.
3. **Strict No-Emoji Rule in Code & Comments**:
   - **NO emojis are allowed inside source code, code comments, or pull request descriptions**.
   - Use `lucide-react` SVG icons for UI visual cues.
4. **Git & Code Review Rules**:
   - Feature branches: `feature/cashier-checkout`, `feature/barber-leaderboard`, `feature/admin-kpis`.
   - Every PR requires at least one 5-minute review before merging to `dev`.
