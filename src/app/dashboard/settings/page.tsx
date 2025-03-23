import React from 'react';
import { FaUser, FaLock, FaBell, FaGlobe, FaMoon, FaSun, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Settings - ExamPrep AI',
  description: 'Manage your account settings and preferences.',
};

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <nav className="space-y-1 p-2">
              {[
                { name: 'Profile', icon: FaUser, active: true },
                { name: 'Security', icon: FaLock, active: false },
                { name: 'Notifications', icon: FaBell, active: false },
                { name: 'Appearance', icon: FaMoon, active: false },
                { name: 'Language', icon: FaGlobe, active: false },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    item.active
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200'
                      : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${item.active ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Information</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">John Doe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">john.doe@example.com</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="examType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Primary Exam
                  </label>
                  <select
                    id="examType"
                    defaultValue="sat"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="sat">SAT</option>
                    <option value="gre">GRE</option>
                    <option value="gmat">GMAT</option>
                    <option value="mcat">MCAT</option>
                    <option value="lsat">LSAT</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={3}
                    defaultValue="Student preparing for the SAT exam. Aiming for a score of 1500+."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex justify-end">
                  <Button variant="gradient">
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Preferences</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Enable dark mode for a better experience in low light
                    </p>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400">
                    <FaToggleOn className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Receive email notifications about your progress and new features
                    </p>
                  </div>
                  <button className="text-gray-400 dark:text-gray-500">
                    <FaToggleOff className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Study Reminders</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Get reminders to study and take practice tests
                    </p>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400">
                    <FaToggleOn className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Public Profile</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Allow other users to see your profile and achievements
                    </p>
                  </div>
                  <button className="text-gray-400 dark:text-gray-500">
                    <FaToggleOff className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Subscription</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Current Plan</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    You are currently on the Free plan
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium rounded-full">
                  Free
                </span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Free Plan Features</h4>
                <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    5 practice tests per month
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Community forum access
                  </li>
                </ul>
              </div>

              <Button variant="gradient" className="w-full">
                Upgrade to Premium
              </Button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Danger Zone</h2>
            </div>
            <div className="p-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-300 mb-2">Delete Account</h3>
                <p className="text-xs text-red-700 dark:text-red-400 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive" size="sm">
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
