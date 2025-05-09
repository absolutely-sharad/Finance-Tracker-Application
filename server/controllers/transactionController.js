// Mock data (will be replaced with MongoDB models later)
import { mockTransactions } from '../data/mockData.js';

let transactions = [...mockTransactions];

export const getTransactions = (req, res) => {
  try {
    // Apply filters if provided
    const { type, category, startDate, endDate } = req.query;
    let filteredTransactions = [...transactions];
    
    if (type) {
      filteredTransactions = filteredTransactions.filter(t => t.type === type);
    }
    
    if (category) {
      filteredTransactions = filteredTransactions.filter(t => t.category === category);
    }
    
    if (startDate) {
      filteredTransactions = filteredTransactions.filter(t => new Date(t.date) >= new Date(startDate));
    }
    
    if (endDate) {
      filteredTransactions = filteredTransactions.filter(t => new Date(t.date) <= new Date(endDate));
    }
    
    res.status(200).json(filteredTransactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionById = (req, res) => {
  try {
    const { id } = req.params;
    const transaction = transactions.find(t => t.id === id);
    
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTransaction = (req, res) => {
  try {
    const transaction = req.body;
    
    // Validate required fields
    if (!transaction.title || !transaction.amount || !transaction.type || !transaction.category || !transaction.date) {
      return res.status(400).json({ message: 'All fields are required: title, amount, type, category, date' });
    }
    
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      amount: parseFloat(transaction.amount)
    };
    
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTransaction = (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const index = transactions.findIndex(t => t.id === id);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    
    // Update the transaction
    transactions[index] = {
      ...transactions[index],
      ...updates,
      amount: updates.amount ? parseFloat(updates.amount) : transactions[index].amount
    };
    
    res.status(200).json(transactions[index]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTransaction = (req, res) => {
  try {
    const { id } = req.params;
    const initialLength = transactions.length;
    
    transactions = transactions.filter(t => t.id !== id);
    
    if (transactions.length === initialLength) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};