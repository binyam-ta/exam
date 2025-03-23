import React from 'react';
import Header from '@/components/dashboard/header';
import Sidebar from '@/components/dashboard/sidebar';
import ThemeToggle from '@/components/ui/theme-toggle';

export const metadata = {
  title: 'Dashboard - ExamPrep AI',
  description: 'Manage your exam preparation with ExamPrep AI dashboard.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="md:ml-64 flex flex-col flex-1">
        <Header />
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
