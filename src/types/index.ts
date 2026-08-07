export type UserRole = 'owner' | 'cashier' | 'barber';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  phone: string;
  avatarUrl?: string;
  dailyTargetCuts?: number;
  commissionRate: number;
}

export interface Service {
  id: string;
  name: string;
  category: 'haircut' | 'beard' | 'styling' | 'vip' | 'combo';
  priceRwf: number;
  durationMinutes: number;
}

export type PaymentMethod = 'cash' | 'momo';
export type PaymentStatus = 'completed' | 'pending_momo' | 'flagged';

export interface Transaction {
  id: string;
  timestamp: string;
  serviceId: string;
  serviceName: string;
  barberId: string;
  barberName: string;
  cashierId: string;
  amountRwf: number;
  barberShareRwf: number;
  salonShareRwf: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  momoRef?: string;
}

export interface Expense {
  id: string;
  timestamp: string;
  category: string;
  description: string;
  amountRwf: number;
  loggedBy: string;
}

export interface FraudAlert {
  id: string;
  timestamp: string;
  type: 'unpaid_service' | 'orphan_payment' | 'manual_override';
  description: string;
  severity: 'low' | 'medium' | 'high';
  status: 'flagged' | 'resolved';
}

export interface SalonInfo {
  id: string;
  name: string;
  location: string;
  ownerName: string;
  isRemoteLocked: boolean;
  isOffline: boolean;
}
