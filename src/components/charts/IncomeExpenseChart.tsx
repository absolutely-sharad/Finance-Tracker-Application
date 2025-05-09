import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MonthlyData } from '../../types';

interface IncomeExpenseChartProps {
  data: MonthlyData[];
  isDarkMode?: boolean;
}

const IncomeExpenseChart: React.FC<IncomeExpenseChartProps> = ({ data, isDarkMode = false }) => {
  const textColor = isDarkMode ? '#CBD5E1' : '#475569';
  const gridColor = isDarkMode ? '#334155' : '#E2E8F0';
  
  return (
    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-card`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Monthly Income vs Expenses
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="month" tick={{ fill: textColor }} />
            <YAxis tick={{ fill: textColor }} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
                borderColor: isDarkMode ? '#334155' : '#E2E8F0',
                color: textColor
              }}
              formatter={(value: number) => [`$${value}`, '']}
            />
            <Legend wrapperStyle={{ color: textColor }} />
            <Bar dataKey="income" name="Income" fill="#10B981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expense" name="Expenses" fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;