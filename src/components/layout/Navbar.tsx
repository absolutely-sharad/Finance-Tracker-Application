import React from 'react';
import { Menu, Bell, Moon, Sun, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className={`sticky top-0 z-30 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className={`p-2 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 md:hidden text-xl font-semibold text-primary-500">FinanceTrack</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              className={`p-2 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button className={`relative p-2 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}>
              <span className="sr-only">View notifications</span>
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white"></span>
            </button>
            
            <div className="relative ml-3 flex items-center space-x-2">
              <button className={`flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'focus:ring-white' : 'focus:ring-primary-500'}`}>
                <span className="sr-only">Open user menu</span>
                <div className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-primary-100'}`}>
                  <User className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-primary-500'}`} />
                </div>
              </button>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {user?.email}
              </span>
              <button
                onClick={handleSignOut}
                className={`p-2 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;