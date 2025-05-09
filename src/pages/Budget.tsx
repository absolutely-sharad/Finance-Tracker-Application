import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import { Plus } from 'lucide-react';

// Components
import BudgetGoalCard from '../components/budget/BudgetGoalCard';
import BudgetGoalForm from '../components/budget/BudgetGoalForm';
import SavingsGoalCard from '../components/budget/SavingsGoalCard';
import BudgetSuggestion from '../components/ai/BudgetSuggestion';
import { BudgetGoal } from '../types';

const Budget: React.FC = () => {
  const { budgetGoals, addBudgetGoal, updateBudgetGoal, deleteBudgetGoal, loading } = useBudget();
  
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [editingGoal, setEditingGoal] = useState<BudgetGoal | null>(null);

  const handleEditGoal = (id: string) => {
    const goal = budgetGoals.find(g => g.id === id);
    if (goal) {
      setEditingGoal(goal);
    }
  };

  const handleDeleteGoal = (id: string) => {
    if (window.confirm('Are you sure you want to delete this budget goal?')) {
      deleteBudgetGoal(id);
    }
  };

  const handleFormSubmit = (goal: Omit<BudgetGoal, 'id'> | Partial<BudgetGoal>) => {
    if ('id' in goal) {
      updateBudgetGoal(goal.id!, goal);
      setEditingGoal(null);
    } else {
      addBudgetGoal(goal as Omit<BudgetGoal, 'id'>);
      setShowAddGoal(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse-slow">
          <p className="text-gray-500">Loading budget data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Budget</h1>
        <button 
          onClick={() => setShowAddGoal(true)}
          className="flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Plus className="mr-1.5 h-4 w-4" />
          Add Budget Goal
        </button>
      </div>

      {/* Savings Goal Card */}
      <div>
        <SavingsGoalCard />
      </div>

      {/* Budget Goals */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Budget Goals</h2>
        
        {showAddGoal && (
          <BudgetGoalForm 
            onSubmit={handleFormSubmit} 
            onCancel={() => setShowAddGoal(false)} 
          />
        )}
        
        {editingGoal && (
          <BudgetGoalForm 
            goal={editingGoal}
            onSubmit={handleFormSubmit} 
            onCancel={() => setEditingGoal(null)} 
          />
        )}
        
        {budgetGoals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetGoals.map((goal) => (
              <BudgetGoalCard 
                key={goal.id} 
                goal={goal} 
                onEdit={handleEditGoal} 
                onDelete={handleDeleteGoal} 
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6 text-center">
            <p className="text-gray-500 dark:text-gray-400">No budget goals yet. Add your first budget goal to start tracking!</p>
          </div>
        )}
      </div>

      {/* AI Budget Suggestions */}
      <div className="mt-10">
        <BudgetSuggestion />
      </div>
    </div>
  );
};

export default Budget;