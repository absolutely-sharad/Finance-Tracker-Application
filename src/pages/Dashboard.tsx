import React, { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { useBudget } from '../context/BudgetContext';
import { Plus, X } from 'lucide-react';

// Components
import SummaryCard from '../components/dashboard/SummaryCard';
import TransactionList from '../components/dashboard/TransactionList';
import TransactionForm from '../components/dashboard/TransactionForm';
import IncomeExpenseChart from '../components/charts/IncomeExpenseChart';
import CategoryChart from '../components/charts/CategoryChart';
import SavingsGoalCard from '../components/budget/SavingsGoalCard';

// Mock data
import { mockMonthlyData, mockCategorySummary } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const { transactions, loading: transactionsLoading } = useTransactions();
  const { loading: budgetLoading } = useBudget();
  
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const balance = totalIncome - totalExpenses;

  const loading = transactionsLoading || budgetLoading;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse-slow">
          <p className="text-gray-500">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <button 
          onClick={() => setShowAddTransaction(true)}
          className="flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="mr-1.5 h-4 w-4" />
          Add Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard 
          title="Total Balance" 
          amount={balance} 
          percentage={5.2} 
          isIncrease={true} 
          icon="balance" 
        />
        <SummaryCard 
          title="Total Income" 
          amount={totalIncome} 
          percentage={3.1} 
          isIncrease={true} 
          icon="income" 
        />
        <SummaryCard 
          title="Total Expenses" 
          amount={totalExpenses} 
          percentage={1.8} 
          isIncrease={false} 
          icon="expense" 
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <IncomeExpenseChart data={mockMonthlyData} />
        </div>
        <div>
          <SavingsGoalCard />
        </div>
      </div>

      {/* Charts and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <CategoryChart data={mockCategorySummary} />
        </div>
        <div className="lg:col-span-2">
          <TransactionList transactions={transactions} limit={5} />
        </div>
      </div>

      {/* Add Transaction Modal */}
      {showAddTransaction && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowAddTransaction(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="relative inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={() => setShowAddTransaction(false)}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <TransactionForm onClose={() => setShowAddTransaction(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;