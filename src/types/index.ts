export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
  notes?: string;
}

export interface BudgetGoal {
  id: string;
  category: string;
  amount: number;
  spent: number;
  period: string;
}

export interface MonthlySavingGoal {
  id: string;
  amount: number;
  current: number;
  period: string;
}

export interface CategorySummary {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface MonthlyData {
  month: string;
  income: number;
  expense: number;
}

export interface ForecastData {
  month: string;
  predicted: number;
  actual?: number;
}