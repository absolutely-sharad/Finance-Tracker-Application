import React, { useState } from 'react';
import { Moon, Sun, Bell, Database, Shield, User } from 'lucide-react';

const Settings: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [dataExportFormat, setDataExportFormat] = useState('csv');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Appearance */}
        <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-full bg-primary-100 dark:bg-primary-900`}>
              <Sun className="h-5 w-5 text-primary-500" />
            </div>
            <h2 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Appearance</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  isDarkMode ? 'bg-primary-500' : 'bg-gray-200'
                }`}
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <span className="sr-only">Use dark mode</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                    isDarkMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                >
                  {isDarkMode ? (
                    <Moon className="h-3 w-3 m-1 text-primary-500" />
                  ) : (
                    <Sun className="h-3 w-3 m-1 text-yellow-500" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-full bg-secondary-100 dark:bg-secondary-900`}>
              <Bell className="h-5 w-5 text-secondary-500" />
            </div>
            <h2 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Enable Notifications</span>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 ${
                  notificationsEnabled ? 'bg-secondary-500' : 'bg-gray-200'
                }`}
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                    notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                ></span>
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="budget-alerts"
                  name="budget-alerts"
                  type="checkbox"
                  className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded"
                  defaultChecked
                  disabled={!notificationsEnabled}
                />
                <label htmlFor="budget-alerts" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Budget alerts
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="payment-reminders"
                  name="payment-reminders"
                  type="checkbox"
                  className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded"
                  defaultChecked
                  disabled={!notificationsEnabled}
                />
                <label htmlFor="payment-reminders" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Payment reminders
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="unusual-activity"
                  name="unusual-activity"
                  type="checkbox"
                  className="h-4 w-4 text-secondary-500 focus:ring-secondary-500 border-gray-300 rounded"
                  defaultChecked
                  disabled={!notificationsEnabled}
                />
                <label htmlFor="unusual-activity" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Unusual activity
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-full bg-accent-100 dark:bg-accent-900`}>
              <Database className="h-5 w-5 text-accent-500" />
            </div>
            <h2 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Data & Privacy</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="data-export" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Export Data Format
              </label>
              <select
                id="data-export"
                name="data-export"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-accent-500 focus:border-accent-500 sm:text-sm rounded-md"
                value={dataExportFormat}
                onChange={(e) => setDataExportFormat(e.target.value)}
              >
                <option value="csv">CSV</option>
                <option value="json">JSON</option>
                <option value="pdf">PDF</option>
              </select>
            </div>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
            >
              Export All Data
            </button>
            
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                className="text-error-500 hover:text-error-600 text-sm font-medium"
              >
                Delete My Account
              </button>
            </div>
          </div>
        </div>
        
        {/* Security */}
        <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-full bg-success-100 dark:bg-success-900`}>
              <Shield className="h-5 w-5 text-success-500" />
            </div>
            <h2 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Security</h2>
          </div>
          
          <div className="space-y-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-success-500 hover:bg-success-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success-500"
            >
              Change Password
            </button>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Two-factor authentication</span>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success-500 bg-gray-200`}
              >
                <span className="sr-only">Enable two-factor authentication</span>
                <span
                  className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 translate-x-0"
                ></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Account */}
        <div className="bg-white dark:bg-gray-800 shadow-card rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className={`p-2 rounded-full bg-primary-100 dark:bg-primary-900`}>
              <User className="h-5 w-5 text-primary-500" />
            </div>
            <h2 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Account</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                defaultValue="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md"
                defaultValue="john.doe@example.com"
              />
            </div>
            
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;