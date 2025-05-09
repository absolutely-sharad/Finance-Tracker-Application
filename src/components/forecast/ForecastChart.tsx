import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ForecastData } from '../../types';

interface ForecastChartProps {
  data: ForecastData[];
  isDarkMode?: boolean;
}

const ForecastChart: React.FC<ForecastChartProps> = ({ data, isDarkMode = false }) => {
  const textColor = isDarkMode ? '#CBD5E1' : '#475569';
  const gridColor = isDarkMode ? '#334155' : '#E2E8F0';
  
  return (
    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-card`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Expense Forecast
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Line 
              type="monotone" 
              dataKey="predicted" 
              name="Predicted Expenses" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              name="Actual Expenses" 
              stroke="#EF4444" 
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForecastChart;