// Mock data (will be replaced with MongoDB models later)
import { mockBudgetGoals, mockSavingGoal, mockAiSuggestions } from '../data/mockData.js';

let budgetGoals = [...mockBudgetGoals];
let savingGoal = { ...mockSavingGoal };

export const getBudgetGoals = (req, res) => {
  try {
    // Filter by period if provided
    const { period } = req.query;
    let filteredGoals = [...budgetGoals];
    
    if (period) {
      filteredGoals = filteredGoals.filter(g => g.period === period);
    }
    
    res.status(200).json(filteredGoals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBudgetGoalById = (req, res) => {
  try {
    const { id } = req.params;
    const goal = budgetGoals.find(g => g.id === id);
    
    if (!goal) {
      return res.status(404).json({ message: 'Budget goal not found' });
    }
    
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBudgetGoal = (req, res) => {
  try {
    const goal = req.body;
    
    // Validate required fields
    if (!goal.category || !goal.amount || !goal.period) {
      return res.status(400).json({ message: 'All fields are required: category, amount, period' });
    }
    
    const newGoal = {
      ...goal,
      id: Date.now().toString(),
      amount: parseFloat(goal.amount),
      spent: goal.spent || 0
    };
    
    budgetGoals.push(newGoal);
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBudgetGoal = (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const index = budgetGoals.findIndex(g => g.id === id);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Budget goal not found' });
    }
    
    // Update the budget goal
    budgetGoals[index] = {
      ...budgetGoals[index],
      ...updates,
      amount: updates.amount ? parseFloat(updates.amount) : budgetGoals[index].amount,
      spent: updates.spent ? parseFloat(updates.spent) : budgetGoals[index].spent
    };
    
    res.status(200).json(budgetGoals[index]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBudgetGoal = (req, res) => {
  try {
    const { id } = req.params;
    const initialLength = budgetGoals.length;
    
    budgetGoals = budgetGoals.filter(g => g.id !== id);
    
    if (budgetGoals.length === initialLength) {
      return res.status(404).json({ message: 'Budget goal not found' });
    }
    
    res.status(200).json({ message: 'Budget goal deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSavingGoal = (req, res) => {
  try {
    res.status(200).json(savingGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSavingGoal = (req, res) => {
  try {
    const updates = req.body;
    
    // Update the saving goal
    savingGoal = {
      ...savingGoal,
      ...updates,
      amount: updates.amount ? parseFloat(updates.amount) : savingGoal.amount,
      current: updates.current ? parseFloat(updates.current) : savingGoal.current
    };
    
    res.status(200).json(savingGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSuggestions = (req, res) => {
  try {
    // In a real app, this would analyze past transactions and generate suggestions
    res.status(200).json(mockAiSuggestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};