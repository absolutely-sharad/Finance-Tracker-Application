import React, { useState, useEffect } from 'react';
import { BudgetGoal } from '../../types';

interface BudgetGoalFormProps {
  goal?: BudgetGoal;
  onSubmit: (goal: Omit<BudgetGoal, 'id'> | Partial<BudgetGoal>) => void;
  onCancel: () => void;
  isDarkMode?: boolean;
}

const BudgetGoalForm: React.FC<BudgetGoalFormProps> = ({ 
  goal, 
  onSubmit, 
  onCancel,
  isDarkMode = false 
}) => {
  const [category, setCategory] = useState(goal?.category || '');
  const [amount, setAmount] = useState(goal?.amount.toString() || '');
  const [period, setPeriod] = useState(goal?.period || new Date().toISOString().slice(0, 7));
  
  const categories = [
    'Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 
    'Healthcare', 'Shopping', 'Education', 'Travel', 'Others'
  ];
  
  const isEditMode = !!goal;

  useEffect(() => {
    if (goal) {
      setCategory(goal.category);
      setAmount(goal.amount.toString());
      setPeriod(goal.period);
    }
  }, [goal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditMode) {
      onSubmit({
        id: goal.id,
        category,
        amount: parseFloat(amount),
        period
      });
    } else {
      onSubmit({
        category,
        amount: parseFloat(amount),
        spent: 0,
        period
      });
    }
  };

  return (
    <div className={`rounded-lg shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {isEditMode ? 'Edit Budget Goal' : 'Add Budget Goal'}
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="category" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Category
            </label>
            <select
              id="category"
              className={`mt-1 block w-full rounded-md ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="amount" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Budget Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              min="0"
              step="0.01"
              className={`mt-1 block w-full rounded-md ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="period" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Month
            </label>
            <input
              type="month"
              id="period"
              className={`mt-1 block w-full rounded-md ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              required
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {isEditMode ? 'Update Goal' : 'Add Goal'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BudgetGoalForm;