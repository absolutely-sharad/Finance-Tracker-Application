import React from 'react';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  amount: number;
  percentage?: number;
  isIncrease?: boolean;
  icon?: 'income' | 'expense' | 'balance';
  isDarkMode?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  amount, 
  percentage, 
  isIncrease = true, 
  icon = 'balance',
  isDarkMode = false
}) => {
  const getIconColor = () => {
    switch (icon) {
      case 'income':
        return 'text-success-500 bg-success-500/10';
      case 'expense':
        return 'text-error-500 bg-error-500/10';
      default:
        return 'text-primary-500 bg-primary-500/10';
    }
  };

  const getIcon = () => {
    switch (icon) {
      case 'income':
        return <ArrowUpRight className="h-6 w-6" />;
      case 'expense':
        return <ArrowDownRight className="h-6 w-6" />;
      default:
        return <Wallet className="h-6 w-6" />;
    }
  };

  return (
    <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-card hover:shadow-card-hover transition-shadow duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
          <p className={`mt-2 text-3xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
        <div className={`p-3 rounded-full ${getIconColor()}`}>
          {getIcon()}
        </div>
      </div>
      
      {percentage !== undefined && (
        <div className="mt-4 flex items-center">
          <span className={`text-sm font-medium ${isIncrease ? 'text-success-500' : 'text-error-500'}`}>
            {isIncrease ? '+' : '-'}{percentage}%
          </span>
          <span className={`ml-2 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
        </div>
      )}
    </div>
  );
};

export default SummaryCard;