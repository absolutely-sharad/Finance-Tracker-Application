import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BudgetGoal, MonthlySavingGoal } from '../types';
import { mockBudgetGoals, mockSavingGoal } from '../data/mockData';

interface BudgetContextType {
  budgetGoals: BudgetGoal[];
  savingGoal: MonthlySavingGoal;
  updateBudgetGoal: (id: string, goal: Partial<BudgetGoal>) => void;
  addBudgetGoal: (goal: Omit<BudgetGoal, 'id'>) => void;
  deleteBudgetGoal: (id: string) => void;
  updateSavingGoal: (goal: Partial<MonthlySavingGoal>) => void;
  loading: boolean;
  error: string | null;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

interface BudgetProviderProps {
  children: ReactNode;
}

export const BudgetProvider: React.FC<BudgetProviderProps> = ({ children }) => {
  const [budgetGoals, setBudgetGoals] = useState<BudgetGoal[]>([]);
  const [savingGoal, setSavingGoal] = useState<MonthlySavingGoal>({
    id: '1',
    amount: 0,
    current: 0,
    period: new Date().toISOString().slice(0, 7)
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchBudgetData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setBudgetGoals(mockBudgetGoals);
          setSavingGoal(mockSavingGoal);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch budget data');
        setLoading(false);
      }
    };

    fetchBudgetData();
  }, []);

  const updateBudgetGoal = (id: string, updatedGoal: Partial<BudgetGoal>) => {
    setBudgetGoals(
      budgetGoals.map((goal) =>
        goal.id === id ? { ...goal, ...updatedGoal } : goal
      )
    );
  };

  const addBudgetGoal = (goal: Omit<BudgetGoal, 'id'>) => {
    const newGoal = {
      ...goal,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setBudgetGoals([...budgetGoals, newGoal]);
  };

  const deleteBudgetGoal = (id: string) => {
    setBudgetGoals(budgetGoals.filter((goal) => goal.id !== id));
  };

  const updateSavingGoal = (updatedGoal: Partial<MonthlySavingGoal>) => {
    setSavingGoal({ ...savingGoal, ...updatedGoal });
  };

  return (
    <BudgetContext.Provider
      value={{
        budgetGoals,
        savingGoal,
        updateBudgetGoal,
        addBudgetGoal,
        deleteBudgetGoal,
        updateSavingGoal,
        loading,
        error
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};