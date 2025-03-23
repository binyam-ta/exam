"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaBook, 
  FaChartBar, 
  FaTrophy, 
  FaUserCog, 
  FaQuestionCircle, 
  FaSignOutAlt,
  FaCrown
} from 'react-icons/fa';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: FaHome },
  { name: 'Practice Tests', href: '/dashboard/practice', icon: FaBook },
  { name: 'Analytics', href: '/dashboard/analytics', icon: FaChartBar },
  { name: 'Achievements', href: '/dashboard/achievements', icon: FaTrophy },
  { name: 'Subscription', href: '/dashboard/subscription', icon: FaCrown },
  { name: 'Settings', href: '/dashboard/settings', icon: FaUserCog },
  { name: 'Help & Support', href: '/dashboard/support', icon: FaQuestionCircle },
];

const Sidebar = ({ isMobile = false, onClose = () => {} }) => {
  const pathname = usePathname();

  return (
    <div className={`flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 ${isMobile ? 'p-4' : 'p-6'}`}>
      {isMobile && (
        <button 
          onClick={onClose}
          className="self-end text-gray-500 dark:text-gray-400 mb-4"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      
      <div className="mb-8">
        <Link href="/" className="inline-block">
          <Image 
            src="/images/logo.png" 
            alt="ExamPrep AI Logo" 
            width={150} 
            height={40} 
          />
        </Link>
      </div>
      
      <div className="flex-1">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200' 
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'}
                `}
                onClick={isMobile ? onClose : undefined}
              >
                <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center mb-4">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
            <Image 
              src="/images/avatar.jpg" 
              alt="User Avatar" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">john.doe@example.com</p>
          </div>
        </div>
        
        <button 
          className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => {}}
        >
          <FaSignOutAlt className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
