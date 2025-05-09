import React from 'react';
import { BudgetGoal } from '../../types';

interface BudgetGoalCardProps {
  goal: BudgetGoal;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isDarkMode?: boolean;
}

const BudgetGoalCard: React.FC<BudgetGoalCardProps> = ({ 
  goal, 
  onEdit, 
  onDelete,
  isDarkMode = false
}) => {
  const { id, category, amount, spent } = goal;
  const progressPercentage = Math.min(Math.round((spent / amount) * 100), 100);
  const remaining = amount - spent;

  return (
    <div className={`rounded-lg shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden hover:shadow-card-hover transition-shadow duration-300`}>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{category}</h3>
          <span className={`text-sm font-medium ${
            progressPercentage >= 100 
              ? 'text-error-500' 
              : progressPercentage >= 80 
                ? 'text-warning-500' 
                : 'text-success-500'
          }`}>
            {progressPercentage}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mb-3">
          <div 
            className={`h-2 rounded-full ${
              progressPercentage >= 100 
                ? 'bg-error-500' 
                : progressPercentage >= 80 
                  ? 'bg-warning-500' 
                  : 'bg-success-500'
            }`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm mb-4">
          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            ${spent.toFixed(2)} spent
          </span>
          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            ${amount.toFixed(2)} budget
          </span>
        </div>
        
        <div className={`text-sm mb-4 ${
          remaining >= 0 
            ? isDarkMode ? 'text-gray-300' : 'text-gray-600' 
            : 'text-error-500'
        }`}>
          {remaining >= 0 
            ? `$${remaining.toFixed(2)} remaining` 
            : `$${Math.abs(remaining).toFixed(2)} over budget`}
        </div>
        
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-error-500/10 text-error-500 hover:bg-error-500/20"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetGoalCard;