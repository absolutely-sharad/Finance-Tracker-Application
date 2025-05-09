import React, { useState } from 'react';
import { useBudget } from '../../context/BudgetContext';
import { Edit2 } from 'lucide-react';

interface SavingsGoalCardProps {
  isDarkMode?: boolean;
}

const SavingsGoalCard: React.FC<SavingsGoalCardProps> = ({ isDarkMode = false }) => {
  const { savingGoal, updateSavingGoal } = useBudget();
  const [isEditing, setIsEditing] = useState(false);
  const [amount, setAmount] = useState(savingGoal.amount.toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSavingGoal({ amount: parseFloat(amount) });
    setIsEditing(false);
  };

  const progressPercentage = savingGoal.amount > 0 
    ? Math.min(Math.round((savingGoal.current / savingGoal.amount) * 100), 100) 
    : 0;

  return (
    <div className={`rounded-lg shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Monthly Savings Goal
          </h3>
          <button 
            onClick={() => setIsEditing(true)} 
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            <Edit2 className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="savingsGoal" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Target Amount ($)
              </label>
              <input
                type="number"
                id="savingsGoal"
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
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 text-sm font-medium rounded-md bg-primary-500 text-white hover:bg-primary-600"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex justify-between mb-2">
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                ${savingGoal.current.toFixed(2)} of ${savingGoal.amount.toFixed(2)}
              </span>
              <span className={`font-semibold ${
                progressPercentage >= 100 
                  ? 'text-success-500' 
                  : progressPercentage >= 75 
                    ? 'text-primary-500' 
                    : progressPercentage >= 50 
                      ? 'text-warning-500' 
                      : 'text-error-500'
              }`}>
                {progressPercentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div 
                className={`h-2.5 rounded-full ${
                  progressPercentage >= 100 
                    ? 'bg-success-500' 
                    : progressPercentage >= 75 
                      ? 'bg-primary-500' 
                      : progressPercentage >= 50 
                        ? 'bg-warning-500' 
                        : 'bg-error-500'
                }`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="mt-4 text-sm">
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {progressPercentage >= 100 
                  ? 'Goal achieved! Consider increasing your savings goal.' 
                  : progressPercentage >= 75 
                    ? 'Almost there! Just a little more to reach your goal.' 
                    : progressPercentage >= 50 
                      ? 'Halfway to your goal. Keep saving!' 
                      : 'Keep working towards your savings goal.'}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SavingsGoalCard;