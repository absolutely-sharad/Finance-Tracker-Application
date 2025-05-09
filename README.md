# FinanceTrack - Personal Finance Management Application

A modern, full-stack personal finance tracker built with React, Node.js, and Supabase. Track expenses, set budgets, and get AI-powered insights to improve your financial health.

![FinanceTrack Dashboard](https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 📊 **Interactive Dashboard**
  - Real-time overview of your financial status
  - Monthly income vs. expense charts
  - Category-wise spending breakdown
  - Recent transactions list

- 💰 **Transaction Management**
  - Add income and expense transactions
  - Categorize transactions
  - Add notes and dates
  - Filter and search functionality

- 🎯 **Budget Planning**
  - Set monthly budget goals by category
  - Track spending progress
  - Set and monitor savings goals
  - AI-powered budget suggestions

- 📈 **Financial Forecasting**
  - Predict future expenses
  - Analyze spending trends
  - Get personalized insights
  - Monthly comparison analytics

- 🔒 **Secure Authentication**
  - Email/password authentication
  - Protected routes
  - Secure data storage
  - User profile management

## Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Recharts
  - Lucide Icons

- **Backend**
  - Node.js
  - Express
  - Supabase

- **Database**
  - PostgreSQL (via Supabase)

- **Authentication**
  - Supabase Auth

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/finance-track.git
   cd finance-track
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
finance-track/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/       # React Context providers
│   ├── pages/         # Page components
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── server/            # Backend server code
├── public/            # Static assets
└── supabase/         # Supabase configurations
```

## Key Features Explained

### Transaction Management
- Add, edit, and delete transactions
- Categorize as income or expense
- Filter by date, type, or category
- Search functionality
- Detailed transaction history

### Budget Planning
- Set monthly budgets by category
- Track spending against budgets
- Visual progress indicators
- AI-powered budget suggestions
- Savings goal tracking

### Financial Analytics
- Monthly income vs. expense charts
- Category-wise spending breakdown
- Trend analysis
- Future expense predictions
- Personalized insights

### User Authentication
- Secure email/password login
- Protected routes
- User profile management
- Session handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Recharts](https://recharts.org/) for beautiful charts
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for styling
