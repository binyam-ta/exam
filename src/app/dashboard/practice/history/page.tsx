import React from 'react';
import { FaCalendarAlt, FaClock, FaChartLine, FaEye, FaDownload, FaShare } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { getColorClass, formatDate } from '@/lib/utils';

export const metadata = {
  title: 'Practice Test History - ExamPrep AI',
  description: 'View your practice test history and performance over time.',
};

export default function PracticeTestHistoryPage() {
  // Mock data for practice tests
  const practiceTests = [
    {
      id: 'pt-001',
      title: 'SAT Practice Test 1',
      date: '2023-06-15',
      score: 1420,
      maxScore: 1600,
      duration: '2h 45m',
      sections: [
        { name: 'Reading', score: 38, maxScore: 40 },
        { name: 'Writing', score: 35, maxScore: 40 },
        { name: 'Math (No Calculator)', score: 18, maxScore: 20 },
        { name: 'Math (Calculator)', score: 36, maxScore: 40 }
      ],
      status: 'completed'
    },
    {
      id: 'pt-002',
      title: 'SAT Math Section',
      date: '2023-06-20',
      score: 710,
      maxScore: 800,
      duration: '1h 20m',
      sections: [
        { name: 'Math (No Calculator)', score: 17, maxScore: 20 },
        { name: 'Math (Calculator)', score: 34, maxScore: 40 }
      ],
      status: 'completed'
    },
    {
      id: 'pt-003',
      title: 'SAT Reading & Writing',
      date: '2023-06-25',
      score: 680,
      maxScore: 800,
      duration: '1h 35m',
      sections: [
        { name: 'Reading', score: 36, maxScore: 40 },
        { name: 'Writing', score: 32, maxScore: 40 }
      ],
      status: 'completed'
    },
    {
      id: 'pt-004',
      title: 'SAT Practice Test 2',
      date: '2023-07-02',
      score: 1450,
      maxScore: 1600,
      duration: '2h 50m',
      sections: [
        { name: 'Reading', score: 39, maxScore: 40 },
        { name: 'Writing', score: 36, maxScore: 40 },
        { name: 'Math (No Calculator)', score: 18, maxScore: 20 },
        { name: 'Math (Calculator)', score: 37, maxScore: 40 }
      ],
      status: 'completed'
    },
    {
      id: 'pt-005',
      title: 'SAT Practice Test 3',
      date: '2023-07-10',
      duration: '1h 15m',
      status: 'in-progress'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Practice Test History</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            View your past practice tests and track your progress over time
          </p>
        </div>
        <Button variant="gradient" className="shrink-0">
          Start New Test
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Tests Completed', value: '12', icon: FaCalendarAlt, color: 'blue' },
          { label: 'Average Score', value: '1435', icon: FaChartLine, color: 'green' },
          { label: 'Total Study Time', value: '32h 45m', icon: FaClock, color: 'purple' },
          { label: 'Score Improvement', value: '+120', icon: FaChartLine, color: 'orange' },
        ].map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${getColorClass(stat.color, 'bg', '100')} ${getColorClass(stat.color, 'text', '600', true)}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</h3>
                <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search tests..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
              <option value="">All Test Types</option>
              <option value="full">Full Tests</option>
              <option value="section">Section Tests</option>
              <option value="custom">Custom Tests</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
              <option value="">All Time</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="year">Last Year</option>
            </select>
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Tests Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Test Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {practiceTests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{test.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">ID: {test.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{formatDate(test.date)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {test.status === 'completed' ? (
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {test.score} / {test.maxScore}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {Math.round((test.score / test.maxScore) * 100)}%
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500 dark:text-gray-400">-</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{test.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      test.status === 'completed' 
                        ? getColorClass('green', 'bg', '100') + ' ' + getColorClass('green', 'text', '800', true) 
                        : getColorClass('yellow', 'bg', '100') + ' ' + getColorClass('yellow', 'text', '800', true)
                    }`}>
                      {test.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <FaEye className="h-4 w-4" />
                      </button>
                      {test.status === 'completed' && (
                        <>
                          <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300">
                            <FaDownload className="h-4 w-4" />
                          </button>
                          <button className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300">
                            <FaShare className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">12</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Score Trend Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Score Trend</h2>
        </div>
        <div className="p-6">
          <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-500 dark:text-gray-400 mb-2">Score Trend Chart</div>
              <div className="text-sm text-gray-400 dark:text-gray-500">
                (Chart visualization would be implemented here)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Section Performance</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Reading', score: 92, color: 'blue' },
              { name: 'Writing', score: 88, color: 'green' },
              { name: 'Math (No Calculator)', score: 90, color: 'purple' },
              { name: 'Math (Calculator)', score: 94, color: 'orange' },
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{section.name}</h3>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{section.score}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${getColorClass(section.color, 'bg')}`}
                    style={{ width: `${section.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
