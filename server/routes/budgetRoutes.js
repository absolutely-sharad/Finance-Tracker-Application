import express from 'express';
import { 
  getBudgetGoals,
  getBudgetGoalById,
  createBudgetGoal,
  updateBudgetGoal,
  deleteBudgetGoal,
  getSavingGoal,
  updateSavingGoal,
  getSuggestions
} from '../controllers/budgetController.js';

const router = express.Router();

router.get('/goals', getBudgetGoals);
router.get('/goals/:id', getBudgetGoalById);
router.post('/goals', createBudgetGoal);
router.put('/goals/:id', updateBudgetGoal);
router.delete('/goals/:id', deleteBudgetGoal);

router.get('/saving', getSavingGoal);
router.put('/saving', updateSavingGoal);

router.get('/suggestions', getSuggestions);

export default router;