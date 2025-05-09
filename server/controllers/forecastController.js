// Mock data (will be replaced with MongoDB models later)
import { mockForecastData } from '../data/mockData.js';

export const getForecastData = (req, res) => {
  try {
    res.status(200).json(mockForecastData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getForecastInsights = (req, res) => {
  try {
    // In a real app, this would analyze forecast data and generate insights
    const insights = {
      trend: {
        description: 'Your expenses are predicted to increase by approximately 9% over the next 3 months.',
        percentageChange: 9
      },
      categories: [
        { 
          name: 'Housing', 
          trend: 'stable', 
          percentageChange: 0, 
          notes: 'Your housing expenses have remained consistent.'
        },
        { 
          name: 'Entertainment', 
          trend: 'increasing', 
          percentageChange: 15, 
          notes: 'Entertainment expenses are growing faster than your income.'
        },
        { 
          name: 'Transportation', 
          trend: 'decreasing', 
          percentageChange: -8, 
          notes: 'Transportation costs have been decreasing.'
        }
      ],
      warnings: [
        'Entertainment expenses are growing faster than your income. Consider adjusting your budget in this category.'
      ]
    };
    
    res.status(200).json(insights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};