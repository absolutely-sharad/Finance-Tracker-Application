import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CategorySummary } from '../../types';

interface CategoryChartProps {
  data: CategorySummary[];
  isDarkMode?: boolean;
}

const CategoryChart: React.FC<CategoryChartProps> = ({ data, isDarkMode = false }) => {
  const textColor = isDarkMode ? '#CBD5E1' : '#475569';
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`p-3 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow rounded-md`}>
          <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {payload[0].name}: {payload[0].value.toFixed(2)}%
          </p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            ${payload[0].payload.amount}
          </p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-card`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Spending by Category
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="percentage"
              nameKey="category"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              formatter={(value) => <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryChart;