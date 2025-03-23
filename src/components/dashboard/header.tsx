"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaBell, FaSearch } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Sidebar from './sidebar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'New practice test available',
      message: 'A new SAT Math practice test is now available for you.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      title: 'Achievement unlocked',
      message: 'Congratulations! You\'ve completed 10 practice tests.',
      time: '1 day ago',
      read: false,
    },
    {
      id: 3,
      title: 'Weekly progress report',
      message: 'Your weekly progress report is now available. Check your analytics.',
      time: '3 days ago',
      read: true,
    },
  ];

  return (
    <>
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-4 text-gray-500 dark:text-gray-400 md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FaBars className="h-6 w-6" />
            </button>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="relative p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              >
                <FaBell className="h-5 w-5" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-10">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                      <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      <div className="divide-y divide-gray-200 dark:divide-gray-800">
                        {notifications.map((notification) => (
                          <div 
                            key={notification.id} 
                            className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 ${notification.read ? '' : 'bg-blue-50 dark:bg-blue-900/20'}`}
                          >
                            <div className="flex items-start">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                  {notification.title}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                  {notification.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                        No notifications
                      </div>
                    )}
                  </div>
                  
                  <div className="p-2 border-t border-gray-200 dark:border-gray-800">
                    <button className="w-full text-center text-xs text-blue-600 dark:text-blue-400 hover:underline p-2">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <Button variant="gradient" size="sm" asChild>
              <Link href="/dashboard/practice/new">Start Practice Test</Link>
            </Button>
            
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image 
                src="/images/avatar.jpg" 
                alt="User Avatar" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white dark:bg-gray-900 shadow-xl">
            <Sidebar isMobile={true} onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
