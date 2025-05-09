import React from 'react';
import { format } from 'date-fns';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Transaction } from '../../types';

interface TransactionListProps {
  transactions: Transaction[];
  limit?: number;
  isDarkMode?: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({ 
  transactions, 
  limit,
  isDarkMode = false 
}) => {
  const displayTransactions = limit 
    ? transactions.slice(0, limit) 
    : transactions;

  return (
    <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-card`}>
      <div className="p-4 sm:p-6">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recent Transactions</h3>
        <div className="mt-6 flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            {displayTransactions.map((transaction) => (
              <li key={transaction.id} className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center min-w-0 gap-x-4">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'income' 
                        ? 'bg-success-500/10 text-success-500' 
                        : 'bg-error-500/10 text-error-500'
                    }`}>
                      {transaction.type === 'income' 
                        ? <ArrowUpRight className="h-5 w-5" /> 
                        : <ArrowDownRight className="h-5 w-5" />
                      }
                    </div>
                    <div className="min-w-0 flex-auto">
                      <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {transaction.title}
                      </p>
                      <p className={`text-xs truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {transaction.category} • {format(new Date(transaction.date), 'MMM dd, yyyy')}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className={`text-sm font-medium ${
                      transaction.type === 'income' 
                        ? 'text-success-500' 
                        : 'text-error-500'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {limit && transactions.length > limit && (
          <div className="mt-6">
            <a href="/transactions" className={`text-sm font-medium text-primary-500 hover:text-primary-600`}>
              View all transactions
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionList;