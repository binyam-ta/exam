import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaBook, FaClock, FaFilter, FaGraduationCap, FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'New Practice Test - ExamPrep AI',
  description: 'Start a new practice test to improve your exam preparation.',
};

const testCategories = [
  { id: 'sat', name: 'SAT', icon: FaGraduationCap, color: 'blue' },
  { id: 'gre', name: 'GRE', icon: FaGraduationCap, color: 'green' },
  { id: 'gmat', name: 'GMAT', icon: FaGraduationCap, color: 'purple' },
];

const availableTests = [
  {
    id: 'sat-math-1',
    category: 'sat',
    title: 'SAT Math Practice Test',
    description: 'Comprehensive practice test covering algebra, problem-solving, and data analysis.',
    questions: 25,
    time: 60,
    difficulty: 'Medium',
    rating: 4.8,
    reviews: 124,
    popular: true,
  },
  {
    id: 'sat-reading-1',
    category: 'sat',
    title: 'SAT Reading Comprehension',
    description: 'Practice test focusing on reading comprehension and analysis skills.',
    questions: 20,
    time: 45,
    difficulty: 'Hard',
    rating: 4.6,
    reviews: 98,
    popular: false,
  },
  {
    id: 'sat-writing-1',
    category: 'sat',
    title: 'SAT Writing & Language',
    description: 'Test your grammar, punctuation, and sentence structure knowledge.',
    questions: 18,
    time: 40,
    difficulty: 'Medium',
    rating: 4.7,
    reviews: 112,
    popular: true,
  },
  {
    id: 'gre-verbal-1',
    category: 'gre',
    title: 'GRE Verbal Reasoning',
    description: 'Practice test for verbal reasoning skills including reading comprehension and critical reasoning.',
    questions: 20,
    time: 30,
    difficulty: 'Hard',
    rating: 4.5,
    reviews: 87,
    popular: false,
  },
  {
    id: 'gre-quant-1',
    category: 'gre',
    title: 'GRE Quantitative Reasoning',
    description: 'Comprehensive test covering arithmetic, algebra, geometry, and data analysis.',
    questions: 20,
    time: 35,
    difficulty: 'Medium',
    rating: 4.9,
    reviews: 156,
    popular: true,
  },
  {
    id: 'gmat-quant-1',
    category: 'gmat',
    title: 'GMAT Quantitative Section',
    description: 'Practice test for problem-solving and data sufficiency questions.',
    questions: 22,
    time: 50,
    difficulty: 'Hard',
    rating: 4.7,
    reviews: 134,
    popular: true,
  },
];

export default function NewPracticeTestPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Start a New Practice Test</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            Choose from our library of AI-generated practice tests
          </p>
        </div>
        <Link href="/dashboard" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-500 dark:border-blue-600 shadow-sm">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
            <FaBook className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">All Tests</span>
        </button>
        
        {testCategories.map((category) => (
          <button 
            key={category.id}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-600"
          >
            <div className={`p-3 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-600 dark:text-${category.color}-400 mb-3`}>
              <category.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{category.name}</span>
          </button>
        ))}
        
        <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-600">
          <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 mb-3">
            <FaFilter className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">Filters</span>
        </button>
      </div>

      {/* Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableTests.map((test) => (
          <div key={test.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-600 transition-colors">
            <div className="p-6">
              {test.popular && (
                <div className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-md mb-3">
                  Popular
                </div>
              )}
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{test.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{test.description}</p>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center mr-4">
                  <FaClock className="mr-1 h-4 w-4" />
                  <span>{test.time} min</span>
                </div>
                <div className="flex items-center mr-4">
                  <FaBook className="mr-1 h-4 w-4" />
                  <span>{test.questions} questions</span>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
                    {test.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-500 dark:text-yellow-400">
                  <FaStar className="h-4 w-4" />
                  <span className="ml-1 text-sm font-medium">{test.rating}</span>
                </div>
                <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{test.reviews} reviews</span>
              </div>
              
              <Button variant="gradient" size="lg" className="w-full" asChild>
                <Link href={`/dashboard/practice/${test.id}`}>Start Test</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom Test Generator */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-xl font-bold mb-2">Generate a Custom Test</h2>
            <p className="text-blue-100">
              Use our AI to create a personalized practice test tailored to your specific needs and learning goals.
            </p>
          </div>
          <Button 
            variant="default" 
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            asChild
          >
            <Link href="/dashboard/practice/custom">Create Custom Test</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
