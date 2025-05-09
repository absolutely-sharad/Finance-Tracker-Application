import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CreditCard, PieChart, TrendingUp, Settings, X } from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, isDarkMode }) => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Transactions', href: '/transactions', icon: CreditCard },
    { name: 'Budget', href: '/budget', icon: PieChart },
    { name: 'Forecast', href: '/forecast', icon: TrendingUp },
    { name: 'Settings', href: '/settings', icon: Settings }
  ];

  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? '' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
      >
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" 
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>

        <div className={`relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center px-4">
            <h1 className="text-2xl font-bold text-primary-500">FinanceTrack</h1>
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => 
                    `group flex items-center px-2 py-2 text-base font-medium rounded-md transition-all ${
                      isActive 
                        ? `bg-primary-500 text-white` 
                        : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon 
                    className={`mr-4 flex-shrink-0 h-6 w-6 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-400'
                    }`} 
                    aria-hidden="true" 
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className={`hidden md:flex md:flex-shrink-0 transition-all duration-300`}>
        <div className={`flex flex-col w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white border-r border-gray-200'}`}>
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 border-b">
              <h1 className="text-2xl font-bold text-primary-500">FinanceTrack</h1>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
              <nav className="mt-5 flex-1 px-4 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => 
                      `group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all ${
                        isActive 
                          ? `bg-primary-500 text-white` 
                          : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                      }`
                    }
                  >
                    <item.icon 
                      className={`mr-3 flex-shrink-0 h-5 w-5 transition-colors ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-400'
                      }`} 
                      aria-hidden="true" 
                    />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;