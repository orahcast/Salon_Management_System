'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  Service,
  Transaction,
  Expense,
  FraudAlert,
  SalonInfo,
  UserRole,
  PaymentMethod,
} from '@/types';

interface SalonContextType {
  salon: SalonInfo;
  users: User[];
  services: Service[];
  transactions: Transaction[];
  expenses: Expense[];
  fraudAlerts: FraudAlert[];
  activeRole: UserRole;
  currentBarberId: string;
  setActiveRole: (role: UserRole) => void;
  setCurrentBarberId: (id: string) => void;
  addTransaction: (data: {
    serviceId: string;
    barberId: string;
    paymentMethod: PaymentMethod;
    momoRef?: string;
  }) => void;
  addExpense: (data: { category: string; description: string; amountRwf: number }) => void;
  toggleOfflineMode: () => void;
  toggleRemoteLock: () => void;
}

const INITIAL_SERVICES: Service[] = [
  { id: 'srv-1', name: 'Classic Haircut', category: 'haircut', priceRwf: 3000, durationMinutes: 30 },
  { id: 'srv-2', name: 'Beard Trim & Shape', category: 'beard', priceRwf: 2000, durationMinutes: 20 },
  { id: 'srv-3', name: 'Hair Cut & Beard Combo', category: 'combo', priceRwf: 4500, durationMinutes: 45 },
  { id: 'srv-4', name: 'VIP Scalp & Hair Wash', category: 'vip', priceRwf: 6000, durationMinutes: 40 },
  { id: 'srv-5', name: 'Kids Haircut', category: 'haircut', priceRwf: 2500, durationMinutes: 25 },
];

const INITIAL_USERS: User[] = [
  { id: 'usr-admin', name: 'Jean-Luc (Owner)', role: 'owner', phone: '+250788000001', commissionRate: 0 },
  { id: 'usr-cashier', name: 'Aline (Cashier)', role: 'cashier', phone: '+250788000002', commissionRate: 0 },
  { id: 'usr-barber-1', name: 'John Doe', role: 'barber', phone: '+250788111222', dailyTargetCuts: 10, commissionRate: 0.5 },
  { id: 'usr-barber-2', name: 'Eric Bizimana', role: 'barber', phone: '+250788333444', dailyTargetCuts: 12, commissionRate: 0.5 },
  { id: 'usr-barber-3', name: 'Patrick Mugisha', role: 'barber', phone: '+250788555666', dailyTargetCuts: 8, commissionRate: 0.5 },
];

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-101',
    timestamp: new Date(Date.now() - 3600000 * 3).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    serviceId: 'srv-1',
    serviceName: 'Classic Haircut',
    barberId: 'usr-barber-1',
    barberName: 'John Doe',
    cashierId: 'usr-cashier',
    amountRwf: 3000,
    barberShareRwf: 1500,
    salonShareRwf: 1500,
    paymentMethod: 'momo',
    paymentStatus: 'completed',
    momoRef: 'MP240807-8891',
  },
  {
    id: 'tx-102',
    timestamp: new Date(Date.now() - 3600000 * 2).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    serviceId: 'srv-3',
    serviceName: 'Hair Cut & Beard Combo',
    barberId: 'usr-barber-2',
    barberName: 'Eric Bizimana',
    cashierId: 'usr-cashier',
    amountRwf: 4500,
    barberShareRwf: 2250,
    salonShareRwf: 2250,
    paymentMethod: 'cash',
    paymentStatus: 'completed',
  },
  {
    id: 'tx-103',
    timestamp: new Date(Date.now() - 3600000 * 1).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    serviceId: 'srv-4',
    serviceName: 'VIP Scalp & Hair Wash',
    barberId: 'usr-barber-1',
    barberName: 'John Doe',
    cashierId: 'usr-cashier',
    amountRwf: 6000,
    barberShareRwf: 3000,
    salonShareRwf: 3000,
    paymentMethod: 'momo',
    paymentStatus: 'completed',
    momoRef: 'MP240807-9012',
  },
];

const INITIAL_EXPENSES: Expense[] = [
  {
    id: 'exp-1',
    timestamp: '10:30 AM',
    category: 'Supplies',
    description: 'Shaving creams and fresh blade packs',
    amountRwf: 5000,
    loggedBy: 'Aline (Cashier)',
  },
];

const INITIAL_FRAUD: FraudAlert[] = [
  {
    id: 'frd-1',
    timestamp: '02:15 PM',
    type: 'unpaid_service',
    description: 'Service recorded without MoMo payment verification',
    severity: 'medium',
    status: 'flagged',
  },
];

const SalonContext = createContext<SalonContextType | undefined>(undefined);

export const SalonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [salon, setSalon] = useState<SalonInfo>({
    id: 'sln-kigali-1',
    name: 'Kigali Master Cut Salon',
    location: 'Remera, Giporoso',
    ownerName: 'Jean-Luc',
    isRemoteLocked: false,
    isOffline: false,
  });

  const [users] = useState<User[]>(INITIAL_USERS);
  const [services] = useState<Service[]>(INITIAL_SERVICES);
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [expenses, setExpenses] = useState<Expense[]>(INITIAL_EXPENSES);
  const [fraudAlerts, setFraudAlerts] = useState<FraudAlert[]>(INITIAL_FRAUD);
  const [activeRole, setActiveRole] = useState<UserRole>('cashier');
  const [currentBarberId, setCurrentBarberId] = useState<string>('usr-barber-1');

  const addTransaction = ({
    serviceId,
    barberId,
    paymentMethod,
    momoRef,
  }: {
    serviceId: string;
    barberId: string;
    paymentMethod: PaymentMethod;
    momoRef?: string;
  }) => {
    const service = services.find((s) => s.id === serviceId);
    const barber = users.find((u) => u.id === barberId);

    if (!service || !barber) return;

    const rate = barber.commissionRate || 0.5;
    const barberShare = Math.round(service.priceRwf * rate);
    const salonShare = service.priceRwf - barberShare;

    const newTx: Transaction = {
      id: `tx-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      serviceId: service.id,
      serviceName: service.name,
      barberId: barber.id,
      barberName: barber.name,
      cashierId: 'usr-cashier',
      amountRwf: service.priceRwf,
      barberShareRwf: barberShare,
      salonShareRwf: salonShare,
      paymentMethod,
      paymentStatus: 'completed',
      momoRef: paymentMethod === 'momo' ? momoRef || `MP${Math.floor(1000 + Math.random() * 9000)}` : undefined,
    };

    setTransactions((prev) => [newTx, ...prev]);
  };

  const addExpense = ({
    category,
    description,
    amountRwf,
  }: {
    category: string;
    description: string;
    amountRwf: number;
  }) => {
    const newExp: Expense = {
      id: `exp-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category,
      description,
      amountRwf,
      loggedBy: 'Aline (Cashier)',
    };
    setExpenses((prev) => [newExp, ...prev]);
  };

  const toggleOfflineMode = () => {
    setSalon((prev) => ({ ...prev, isOffline: !prev.isOffline }));
  };

  const toggleRemoteLock = () => {
    setSalon((prev) => ({ ...prev, isRemoteLocked: !prev.isRemoteLocked }));
  };

  return (
    <SalonContext.Provider
      value={{
        salon,
        users,
        services,
        transactions,
        expenses,
        fraudAlerts,
        activeRole,
        currentBarberId,
        setActiveRole,
        setCurrentBarberId,
        addTransaction,
        addExpense,
        toggleOfflineMode,
        toggleRemoteLock,
      }}
    >
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error('useSalon must be used within a SalonProvider');
  }
  return context;
};
