export const mockTransactions = [
  {
    id: '1',
    title: 'Salary',
    amount: 5000,
    type: 'income',
    category: 'Salary',
    date: '2024-05-01',
    notes: 'Monthly salary'
  },
  {
    id: '2',
    title: 'Rent',
    amount: 1200,
    type: 'expense',
    category: 'Housing',
    date: '2024-05-02'
  },
  {
    id: '3',
    title: 'Groceries',
    amount: 200,
    type: 'expense',
    category: 'Food',
    date: '2024-05-03'
  },
  {
    id: '4',
    title: 'Electricity Bill',
    amount: 100,
    type: 'expense',
    category: 'Utilities',
    date: '2024-05-04'
  },
  {
    id: '5',
    title: 'Dinner with friends',
    amount: 80,
    type: 'expense',
    category: 'Entertainment',
    date: '2024-05-05'
  },
  {
    id: '6',
    title: 'Freelance work',
    amount: 800,
    type: 'income',
    category: 'Freelance',
    date: '2024-05-06'
  },
  {
    id: '7',
    title: 'Gas',
    amount: 50,
    type: 'expense',
    category: 'Transportation',
    date: '2024-05-07'
  },
  {
    id: '8',
    title: 'Internet bill',
    amount: 60,
    type: 'expense',
    category: 'Utilities',
    date: '2024-05-08'
  },
  {
    id: '9',
    title: 'Movie tickets',
    amount: 30,
    type: 'expense',
    category: 'Entertainment',
    date: '2024-05-09'
  },
  {
    id: '10',
    title: 'Dividend income',
    amount: 200,
    type: 'income',
    category: 'Investments',
    date: '2024-05-10'
  }
];

export const mockBudgetGoals = [
  {
    id: '1',
    category: 'Housing',
    amount: 1500,
    spent: 1200,
    period: '2024-05'
  },
  {
    id: '2',
    category: 'Food',
    amount: 500,
    spent: 350,
    period: '2024-05'
  },
  {
    id: '3',
    category: 'Transportation',
    amount: 200,
    spent: 150,
    period: '2024-05'
  },
  {
    id: '4',
    category: 'Entertainment',
    amount: 300,
    spent: 110,
    period: '2024-05'
  },
  {
    id: '5',
    category: 'Utilities',
    amount: 300,
    spent: 160,
    period: '2024-05'
  }
];

export const mockSavingGoal = {
  id: '1',
  amount: 1000,
  current: 750,
  period: '2024-05'
};

export const mockCategorySummary = [
  { category: 'Housing', amount: 1200, percentage: 40, color: '#0D9488' },
  { category: 'Food', amount: 350, percentage: 11.7, color: '#8B5CF6' },
  { category: 'Transportation', amount: 150, percentage: 5, color: '#F97316' },
  { category: 'Entertainment', amount: 110, percentage: 3.7, color: '#10B981' },
  { category: 'Utilities', amount: 160, percentage: 5.3, color: '#F59E0B' },
  { category: 'Others', amount: 1030, percentage: 34.3, color: '#EF4444' }
];

export const mockMonthlyData = [
  { month: 'Jan', income: 4800, expense: 3900 },
  { month: 'Feb', income: 5200, expense: 4100 },
  { month: 'Mar', income: 5000, expense: 3800 },
  { month: 'Apr', income: 5500, expense: 4200 },
  { month: 'May', income: 6000, expense: 3000 }
];

export const mockForecastData = [
  { month: 'May', predicted: 3000, actual: 3000 },
  { month: 'Jun', predicted: 3200 },
  { month: 'Jul', predicted: 3500 },
  { month: 'Aug', predicted: 3800 },
  { month: 'Sep', predicted: 3400 }
];

export const mockAiSuggestions = {
  categories: [
    { name: 'Housing', suggested: 1300, reasoning: 'Based on your average spending of $1200 plus a 10% buffer.' },
    { name: 'Food', suggested: 400, reasoning: 'Your consistent food expenses average $350, adding a small buffer.' },
    { name: 'Transportation', suggested: 180, reasoning: 'Based on decreasing trends in transportation costs.' },
    { name: 'Entertainment', suggested: 200, reasoning: 'You typically spend less than your budget, can reduce from $300.' },
    { name: 'Utilities', suggested: 200, reasoning: 'Seasonal changes suggest lower utility bills next month.' }
  ],
  totalSuggested: 2280,
  savingsSuggested: 1200,
  note: 'Based on your income patterns, you should be able to save $1200 next month.'
};