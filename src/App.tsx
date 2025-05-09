import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Layout from './components/layout/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budget from './pages/Budget';
import Forecast from './pages/Forecast';
import Settings from './pages/Settings';
import Auth from './pages/Auth';

// Context
import { TransactionProvider } from './context/TransactionContext';
import { BudgetProvider } from './context/BudgetContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <AuthProvider>
        <Router>
          <TransactionProvider>
            <BudgetProvider>
              <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
                        <Dashboard />
                      </Layout>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/transactions"
                  element={
                    <PrivateRoute>
                      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
                        <Transactions />
                      </Layout>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/budget"
                  element={
                    <PrivateRoute>
                      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
                        <Budget />
                      </Layout>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/forecast"
                  element={
                    <PrivateRoute>
                      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
                        <Forecast />
                      </Layout>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <PrivateRoute>
                      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
                        <Settings />
                      </Layout>
                    </PrivateRoute>
                  }
                />
              </Routes>
            </BudgetProvider>
          </TransactionProvider>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;