import React from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine, FaChartBar, FaClock, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: 'Analytics - ExamPrep AI',
  description: 'View your performance analytics and track your progress.',
};

export default function AnalyticsPage() {
  // Mock data for analytics
  const performanceData = {
    overallScore: 680,
    change: 15,
    testsTaken: 24,
    studyTime: '42h 30m',
    accuracy: 78,
    sections: [
      { name: 'Math', score: 720, change: 20, color: 'blue' },
      { name: 'Reading', score: 660, change: 10, color: 'green' },
      { name: 'Writing', score: 680, change: -5, color: 'purple' },
    ],
    recentTests: [
      { date: '2023-06-15', score: 680 },
      { date: '2023-06-10', score: 665 },
      { date: '2023-06-05', score: 650 },
      { date: '2023-05-30', score: 640 },
      { date: '2023-05-25', score: 635 },
    ],
    strengths: [
      'Algebra and Functions',
      'Data Analysis',
      'Sentence Completion',
    ],
    weaknesses: [
      'Geometry and Measurement',
      'Critical Reading',
      'Grammar and Punctuation',
    ],
    questionTypes: [
      { type: 'Multiple Choice', correct: 85, total: 100 },
      { type: 'Grid-In', correct: 32, total: 45 },
      { type: 'Reading Passage', correct: 42, total: 60 },
      { type: 'Writing & Language', correct: 38, total: 50 },
    ],
    timeDistribution: [
      { category: 'Math - Algebra', avgTime: 45, benchmark: 40 },
      { category: 'Math - Geometry', avgTime: 60, benchmark: 45 },
      { category: 'Reading - Main Idea', avgTime: 55, benchmark: 50 },
      { category: 'Reading - Detail', avgTime: 40, benchmark: 45 },
      { category: 'Writing - Grammar', avgTime: 35, benchmark: 30 },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Performance Analytics</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Track your progress and identify areas for improvement
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Score</p>
              <div className="flex items-baseline mt-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{performanceData.overallScore}</p>
                <p className={`ml-2 text-sm font-medium ${performanceData.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {performanceData.change >= 0 ? '+' : ''}{performanceData.change}
                  {performanceData.change >= 0 ? <FaArrowUp className="inline ml-1 h-3 w-3" /> : <FaArrowDown className="inline ml-1 h-3 w-3" />}
                </p>
              </div>
            </div>
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <FaChartLine className="h-5 w-5" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Tests Taken</p>
              <div className="flex items-baseline mt-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{performanceData.testsTaken}</p>
              </div>
            </div>
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
              <FaChartBar className="h-5 w-5" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Study Time</p>
              <div className="flex items-baseline mt-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{performanceData.studyTime}</p>
              </div>
            </div>
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <FaClock className="h-5 w-5" />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Accuracy</p>
              <div className="flex items-baseline mt-1">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{performanceData.accuracy}%</p>
              </div>
            </div>
            <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
              <FaCheckCircle className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Section Scores */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Section Scores</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {performanceData.sections.map((section) => (
              <div key={section.name} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{section.name}</h3>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    section.change >= 0 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                  }`}>
                    {section.change >= 0 ? '+' : ''}{section.change}
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{section.score}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ml-2 mb-1">/ 800</div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full bg-${section.color}-500`}
                      style={{ width: `${(section.score / 800) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Score Trend and Strengths/Weaknesses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Score Trend */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Score Trend</h2>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-end justify-between space-x-2">
              {performanceData.recentTests.map((test, index) => {
                const height = `${(test.score / 800) * 100}%`;
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-md relative" style={{ height }}>
                      <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium text-blue-700 dark:text-blue-400">
                        {test.score}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {new Date(test.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Strengths & Weaknesses</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Strengths</h3>
              <ul className="space-y-2">
                {performanceData.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mr-2">
                      <FaCheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Areas to Improve</h3>
              <ul className="space-y-2">
                {performanceData.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="p-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mr-2">
                      <FaArrowUp className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Question Type Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Question Type Performance</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {performanceData.questionTypes.map((type) => {
              const percentage = Math.round((type.correct / type.total) * 100);
              return (
                <div key={type.type}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{type.type}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {type.correct}/{type.total} ({percentage}%)
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        percentage >= 80 ? 'bg-green-500' : 
                        percentage >= 60 ? 'bg-blue-500' : 
                        percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Time Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Time Distribution (seconds per question)</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {performanceData.timeDistribution.map((item) => {
              const isOverTime = item.avgTime > item.benchmark;
              return (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.category}</div>
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${isOverTime ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                        {item.avgTime}s
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mx-1">vs</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.benchmark}s (benchmark)
                      </span>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${isOverTime ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${(item.avgTime / (item.benchmark * 1.5)) * 100}%` }}
                      ></div>
                      <div 
                        className="absolute h-4 w-0.5 bg-gray-400 dark:bg-gray-500 rounded-full top-0 transform -translate-y-1"
                        style={{ left: `${(item.benchmark / (item.benchmark * 1.5)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
