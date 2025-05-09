import React from 'react';
import { mockAiSuggestions } from '../../data/mockData';
import { Sparkles } from 'lucide-react';

interface BudgetSuggestionProps {
  isDarkMode?: boolean;
}

const BudgetSuggestion: React.FC<BudgetSuggestionProps> = ({ isDarkMode = false }) => {
  const { categories, totalSuggested, savingsSuggested, note } = mockAiSuggestions;

  return (
    <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-card`}>
      <div className="flex items-center mb-4">
        <Sparkles className="mr-2 h-5 w-5 text-secondary-500" />
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          AI Budget Suggestions
        </h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Based on your spending patterns, here are suggested budget allocations for next month:
          </p>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {category.name}
                  </span>
                  <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    ${category.suggested}
                  </span>
                </div>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {category.reasoning}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Total Suggested Expenses:
            </span>
            <span className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              ${totalSuggested}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Suggested Savings:
            </span>
            <span className="font-semibold text-success-500">
              ${savingsSuggested}
            </span>
          </div>
        </div>
        
        <div className={`p-3 bg-secondary-500/10 rounded-md border border-secondary-500/20`}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="font-semibold text-secondary-500">Note:</span> {note}
          </p>
        </div>
        
        <div className="flex justify-end">
          <button
            className="flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-secondary-500 hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
          >
            <Sparkles className="mr-1.5 h-4 w-4" />
            Apply Suggestions
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetSuggestion;