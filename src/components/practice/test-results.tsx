import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaClock, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { getColorClass, getPerformanceColor, calculatePercentage, formatDate } from '@/lib/utils';

interface TestResultsProps {
  testId: string;
  testTitle: string;
  score: number;
  maxScore: number;
  duration: string;
  completedDate: string;
  sections: {
    name: string;
    score: number;
    maxScore: number;
    questions: {
      id: string;
      question: string;
      userAnswer: string;
      correctAnswer: string;
      isCorrect: boolean;
      explanation: string;
    }[];
  }[];
  onReviewTest: () => void;
  onTakeNewTest: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({
  testId,
  testTitle,
  score,
  maxScore,
  duration,
  completedDate,
  sections,
  onReviewTest,
  onTakeNewTest,
}) => {
  // Calculate overall percentage
  const overallPercentage = calculatePercentage(score, maxScore);
  
  // Calculate total questions and correct answers
  const totalQuestions = sections.reduce((total, section) => total + section.questions.length, 0);
  const totalCorrect = sections.reduce((total, section) => 
    total + section.questions.filter(q => q.isCorrect).length, 0);

  // Get performance level based on percentage
  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { label: 'Excellent', color: 'green' };
    if (percentage >= 80) return { label: 'Very Good', color: 'blue' };
    if (percentage >= 70) return { label: 'Good', color: 'teal' };
    if (percentage >= 60) return { label: 'Satisfactory', color: 'yellow' };
    return { label: 'Needs Improvement', color: 'red' };
  };

  const performanceLevel = getPerformanceLevel(overallPercentage);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{testTitle} Results</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Completed on {formatDate(completedDate)} • Test ID: {testId}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={onReviewTest}>
              Review Test
            </Button>
            <Button variant="gradient" onClick={onTakeNewTest}>
              Take New Test
            </Button>
          </div>
        </div>
      </div>

      {/* Score Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Score Overview</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Overall Score */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-2xl font-bold mb-4">
                {overallPercentage}%
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Overall Score</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {score} out of {maxScore} points
              </p>
              <div className={`mt-2 text-sm font-medium ${getColorClass(performanceLevel.color, 'text')}`}>
                {performanceLevel.label}
              </div>
            </div>

            {/* Questions Summary */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Questions Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaCheckCircle className={`h-5 w-5 ${getColorClass('green', 'text')} mr-2`} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Correct</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {totalCorrect} ({calculatePercentage(totalCorrect, totalQuestions)}%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaTimesCircle className={`h-5 w-5 ${getColorClass('red', 'text')} mr-2`} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Incorrect</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {totalQuestions - totalCorrect} ({calculatePercentage(totalQuestions - totalCorrect, totalQuestions)}%)
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaClock className={`h-5 w-5 ${getColorClass('blue', 'text')} mr-2`} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Time Spent</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Comparison */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Your Score</span>
                    <span className="font-medium text-gray-900 dark:text-white">{overallPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${getColorClass('blue', 'bg')}`}
                      style={{ width: `${overallPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Average Score</span>
                    <span className="font-medium text-gray-900 dark:text-white">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full bg-gray-500" 
                      style={{ width: '72%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Top 10% Score</span>
                    <span className="font-medium text-gray-900 dark:text-white">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full bg-gray-500" 
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => {
              const sectionPercentage = calculatePercentage(section.score, section.maxScore);
              const sectionPerformance = getPerformanceLevel(sectionPercentage);
              
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{section.name}</h3>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white mr-2">
                        {section.score}/{section.maxScore}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getColorClass(sectionPerformance.color, 'bg', '100')} ${getColorClass(sectionPerformance.color, 'text')}`}>
                        {sectionPercentage}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                    <div 
                      className={`h-2.5 rounded-full ${getColorClass(sectionPerformance.color, 'bg')}`}
                      style={{ width: `${sectionPercentage}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs ${getColorClass(sectionPerformance.color, 'text')}`}>
                    {sectionPerformance.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Detailed Analysis</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {/* Strengths */}
            <div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className={`mr-2 p-1 rounded-full ${getColorClass('green', 'bg', '100')}`}>
                  <FaCheckCircle className={`h-4 w-4 ${getColorClass('green', 'text')}`} />
                </span>
                Strengths
              </h3>
              <ul className="space-y-2 pl-8 list-disc text-gray-700 dark:text-gray-300">
                <li>Strong performance in algebraic equations and problem-solving</li>
                <li>Excellent comprehension of reading passages</li>
                <li>Good time management across all sections</li>
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className={`mr-2 p-1 rounded-full ${getColorClass('red', 'bg', '100')}`}>
                  <FaTimesCircle className={`h-4 w-4 ${getColorClass('red', 'text')}`} />
                </span>
                Areas for Improvement
              </h3>
              <ul className="space-y-2 pl-8 list-disc text-gray-700 dark:text-gray-300">
                <li>Geometry and coordinate plane questions need more practice</li>
                <li>Grammar and punctuation rules could use review</li>
                <li>Data interpretation in science passages</li>
              </ul>
            </div>

            {/* Recommendations */}
            <div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className={`mr-2 p-1 rounded-full ${getColorClass('blue', 'bg', '100')}`}>
                  <FaInfoCircle className={`h-4 w-4 ${getColorClass('blue', 'text')}`} />
                </span>
                Recommendations
              </h3>
              <ul className="space-y-2 pl-8 list-disc text-gray-700 dark:text-gray-300">
                <li>Focus on geometry practice with our specialized module</li>
                <li>Review grammar rules with our quick reference guide</li>
                <li>Try our data interpretation practice exercises</li>
                <li>Schedule a focused practice test on your weak areas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Next Steps</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Review Mistakes',
                description: 'Go through each incorrect answer to understand where you went wrong',
                icon: FaTimesCircle,
                color: 'red',
                action: 'Review Now',
                onClick: onReviewTest,
              },
              {
                title: 'Practice Weak Areas',
                description: 'Focus on the topics where you scored the lowest',
                icon: FaChartLine,
                color: 'yellow',
                action: 'Start Practice',
                onClick: () => {},
              },
              {
                title: 'Take Another Test',
                description: 'Apply what you\'ve learned in another full practice test',
                icon: FaArrowRight,
                color: 'green',
                action: 'Start Test',
                onClick: onTakeNewTest,
              },
            ].map((step, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <div className={`p-3 rounded-lg ${getColorClass(step.color, 'bg', '100')} ${getColorClass(step.color, 'text')} inline-block mb-4`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <Button 
                  variant="outline" 
                  className={`w-full ${getColorClass(step.color, 'border')} ${getColorClass(step.color, 'text')} hover:${getColorClass(step.color, 'bg', '50')}`}
                  onClick={step.onClick}
                >
                  {step.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Share Results */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Share Your Results</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Share your progress with friends or save for your records
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm">
              Download PDF
            </Button>
            <Button variant="outline" size="sm">
              Email Results
            </Button>
            <Button variant="gradient" size="sm">
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
