import React from 'react';
import { mockForecastData } from '../data/mockData';
import ForecastChart from '../components/forecast/ForecastChart';
import { TrendingUp, AlertCircle } from 'lucide-react';

const Forecast: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Expense Forecast</h1>
      </div>

      {/* Forecast Chart */}
      <div>
        <ForecastChart data={mockForecastData} />
      </div>

      {/* Forecast Details */}
      <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="mr-2 h-5 w-5 text-primary-500" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Forecast Details</h2>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Based on your historical spending patterns, we've generated a forecast of your future expenses. 
          This helps you anticipate future costs and plan your budget accordingly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">How It Works</h3>
            <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
              <li>We analyze your past 6 months of transaction data</li>
              <li>Our algorithm identifies recurring expenses and spending patterns</li>
              <li>We factor in seasonal variations and trends</li>
              <li>The forecast is updated daily with new transaction data</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Upcoming Expenses</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">June 2024 (Predicted)</span>
                <span className="font-medium text-gray-900 dark:text-white">$3,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">July 2024 (Predicted)</span>
                <span className="font-medium text-gray-900 dark:text-white">$3,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">August 2024 (Predicted)</span>
                <span className="font-medium text-gray-900 dark:text-white">$3,800</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trends and Insights */}
      <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Trends and Insights</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-primary-500 mb-2">Predicted Trend</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your expenses are predicted to increase by approximately 9% over the next 3 months.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary-500 mb-2">Category Insights</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-300">Housing</span>
                  <span className="text-gray-900 dark:text-white">Stable</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div className="bg-primary-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-300">Entertainment</span>
                  <span className="text-error-500">Increasing</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div className="bg-error-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-300">Transportation</span>
                  <span className="text-success-500">Decreasing</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div className="bg-success-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-warning-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Attention needed</h3>
                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                  <p>
                    Your Entertainment expenses are growing faster than your income. Consider adjusting your budget in this category.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;