import React, { useState } from 'react';
import { useTransactions } from '../../context/TransactionContext';

interface TransactionFormProps {
  onClose?: () => void;
  isDarkMode?: boolean;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ 
  onClose,
  isDarkMode = false 
}) => {
  const { addTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<string>('');
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState('');

  const expenseCategories = ['Housing', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Healthcare', 'Shopping', 'Education', 'Travel', 'Others'];
  const incomeCategories = ['Salary', 'Freelance', 'Investments', 'Gifts', 'Rental', 'Business', 'Others'];

  const categories = type === 'income' ? incomeCategories : expenseCategories;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) return;

    addTransaction({
      title,
      amount: parseFloat(amount),
      type,
      category,
      date,
      notes: notes.trim() || undefined
    });

    // Reset form
    setTitle('');
    setAmount('');
    setCategory('');
    setNotes('');

    if (onClose) onClose();
  };

  return (
    <div className={`p-6 rounded-lg shadow-card ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Add Transaction</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Transaction Type
            </label>
            <div className="mt-1 flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-primary-500"
                  checked={type === 'expense'}
                  onChange={() => setType('expense')}
                />
                <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Expense</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-primary-500"
                  checked={type === 'income'}
                  onChange={() => setType('income')}
                />
                <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Income</span>
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="title" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Title
            </label>
            <input
              type="text"
              id="title"
              className={`mt-1 block w-full rounded-md ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="amount" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Amount ($)
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
            <label htmlFor="date" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Date
            </label>
            <input
              type="date"
              id="date"
              className={`mt-1 block w-full rounded-md ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="notes" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              className={`mt-1 block w-full rounded-md ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              } shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {type === 'income' ? 'Add Income' : 'Add Expense'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;