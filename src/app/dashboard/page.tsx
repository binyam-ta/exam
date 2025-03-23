import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaBook, FaChartBar, FaCheckCircle, FaClock, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  // Mock data for dashboard
  const recentTests = [
    { id: 1, name: 'SAT Math Practice Test', score: 720, totalQuestions: 58, correctAnswers: 52, date: '2023-06-15' },
    { id: 2, name: 'SAT Reading Practice Test', score: 680, totalQuestions: 52, correctAnswers: 45, date: '2023-06-10' },
    { id: 3, name: 'SAT Writing Practice Test', score: 710, totalQuestions: 44, correctAnswers: 40, date: '2023-06-05' },
  ];

  const upcomingMilestones = [
    { id: 1, name: 'Complete 10 practice tests', progress: 7, total: 10 },
    { id: 2, name: 'Achieve 700+ in Math', progress: 1, total: 1, completed: true },
    { id: 3, name: 'Study streak for 7 days', progress: 5, total: 7 },
  ];

  const recommendedTests = [
    { id: 1, name: 'SAT Math - Algebra', description: 'Focus on algebraic expressions and equations', difficulty: 'Medium', estimatedTime: '45 min' },
    { id: 2, name: 'SAT Reading - Main Ideas', description: 'Practice identifying main ideas and themes', difficulty: 'Hard', estimatedTime: '35 min' },
    { id: 3, name: 'SAT Writing - Grammar', description: 'Improve your grammar and punctuation skills', difficulty: 'Easy', estimatedTime: '30 min' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, John!</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            You've completed 7 practice tests this month. Keep up the good work!
          </p>
        </div>
        <Button variant="gradient" size="lg" asChild>
          <Link href="/dashboard/practice/new">
            Start New Practice Test
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
              <FaBook className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tests Taken</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-4">
              <FaCheckCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Score</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">680</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mr-4">
              <FaClock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Study Time</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">42h 30m</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 mr-4">
              <FaTrophy className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Achievements</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12/30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tests */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Tests</h2>
            <Link href="/dashboard/practice/history" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
              View all <FaArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentTests.map((test) => (
              <div key={test.id} className="px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{test.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(test.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Score</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{test.score}</p>
                    </div>
                    <div className="mr-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Accuracy</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {Math.round((test.correctAnswers / test.totalQuestions) * 100)}%
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/practice/review/${test.id}`}>Review</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-8">
          {/* Progress & Milestones */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Progress</h2>
            </div>
            
            <div className="p-6 space-y-4">
              {upcomingMilestones.map((milestone) => (
                <div key={milestone.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className={`text-sm font-medium ${milestone.completed ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'}`}>
                      {milestone.name}
                      {milestone.completed && <FaCheckCircle className="inline ml-2 h-4 w-4" />}
                    </p>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {milestone.progress}/{milestone.total}
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-blue-500'}`}
                      style={{ width: `${(milestone.progress / milestone.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Practice */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recommended Practice</h2>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {recommendedTests.map((test) => (
                <div key={test.id} className="p-4">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                      <FaGraduationCap className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">{test.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{test.description}</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="mr-3">
                          Difficulty: <span className="font-medium">{test.difficulty}</span>
                        </span>
                        <span>
                          Time: <span className="font-medium">{test.estimatedTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/practice/start/${test.id}`}>Start</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
