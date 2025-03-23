"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight, FaClock, FaFlag, FaCheck } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

// Mock data for a practice test
const mockTest = {
  id: 'sat-math-1',
  title: 'SAT Math Practice Test',
  description: 'This practice test focuses on algebra, problem-solving, and data analysis.',
  timeLimit: 60, // in minutes
  questions: [
    {
      id: 1,
      text: 'If 3x + 7 = 22, what is the value of x?',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '5' },
        { id: 'c', text: '7' },
        { id: 'd', text: '15' },
      ],
      correctAnswer: 'b',
      explanation: 'To solve for x, subtract 7 from both sides: 3x = 15. Then divide both sides by 3: x = 5.'
    },
    {
      id: 2,
      text: 'A rectangle has a length of 12 cm and a width of 8 cm. What is its area?',
      options: [
        { id: 'a', text: '20 cm²' },
        { id: 'b', text: '40 cm²' },
        { id: 'c', text: '96 cm²' },
        { id: 'd', text: '120 cm²' },
      ],
      correctAnswer: 'c',
      explanation: 'The area of a rectangle is length × width. So, 12 cm × 8 cm = 96 cm².'
    },
    {
      id: 3,
      text: 'If y = 3x - 4 and x = 2, what is the value of y?',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '2' },
        { id: 'c', text: '6' },
        { id: 'd', text: '10' },
      ],
      correctAnswer: 'b',
      explanation: 'Substitute x = 2 into the equation y = 3x - 4: y = 3(2) - 4 = 6 - 4 = 2.'
    },
    {
      id: 4,
      text: 'Which of the following is equivalent to 2(x + 3) - 5?',
      options: [
        { id: 'a', text: '2x + 1' },
        { id: 'b', text: '2x + 6 - 5' },
        { id: 'c', text: '2x - 2' },
        { id: 'd', text: '2x + 6' },
      ],
      correctAnswer: 'a',
      explanation: '2(x + 3) - 5 = 2x + 6 - 5 = 2x + 1'
    },
    {
      id: 5,
      text: 'The average of five numbers is 12. If four of the numbers are 10, 11, 13, and 15, what is the fifth number?',
      options: [
        { id: 'a', text: '9' },
        { id: 'b', text: '11' },
        { id: 'c', text: '12' },
        { id: 'd', text: '13' },
      ],
      correctAnswer: 'b',
      explanation: 'If the average of five numbers is 12, then their sum is 5 × 12 = 60. The sum of the four given numbers is 10 + 11 + 13 + 15 = 49. So, the fifth number is 60 - 49 = 11.'
    },
  ]
};

const PracticeTest = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(mockTest.timeLimit * 60); // in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = mockTest.questions[currentQuestionIndex];
  const totalQuestions = mockTest.questions.length;
  
  // Format time remaining as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Handle selecting an answer
  const handleSelectAnswer = (optionId: string) => {
    if (isSubmitted) return;
    
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };
  
  // Handle flagging a question
  const handleFlagQuestion = () => {
    if (flaggedQuestions.includes(currentQuestion.id)) {
      setFlaggedQuestions(flaggedQuestions.filter(id => id !== currentQuestion.id));
    } else {
      setFlaggedQuestions([...flaggedQuestions, currentQuestion.id]);
    }
  };
  
  // Navigate to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    }
  };
  
  // Navigate to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };
  
  // Submit the test
  const handleSubmitTest = () => {
    setIsSubmitted(true);
  };
  
  // Calculate the score after submission
  const calculateScore = () => {
    let correctCount = 0;
    
    mockTest.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    return {
      score: correctCount,
      total: totalQuestions,
      percentage: Math.round((correctCount / totalQuestions) * 100)
    };
  };
  
  // Render the test results
  const renderResults = () => {
    const result = calculateScore();
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
            <span className="text-3xl font-bold">{result.percentage}%</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Test Complete!</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            You scored {result.score} out of {result.total} questions correctly.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setIsSubmitted(false)}
            >
              Review Answers
            </Button>
            <Button 
              variant="gradient" 
              onClick={() => router.push('/dashboard')}
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  // If the test is submitted and we're not reviewing, show results
  if (isSubmitted && !showExplanation) {
    return renderResults();
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Test Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{mockTest.title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{mockTest.description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <FaClock className="mr-2 h-4 w-4" />
              <span className="font-medium">{formatTime(timeRemaining)}</span>
            </div>
            {!isSubmitted && (
              <Button 
                variant="gradient" 
                onClick={handleSubmitTest}
              >
                Submit Test
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Question Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        {/* Question Progress */}
        <div className="bg-gray-50 dark:bg-gray-900 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <button 
              onClick={handleFlagQuestion}
              className={`flex items-center text-sm ${
                flaggedQuestions.includes(currentQuestion.id)
                  ? 'text-yellow-500 dark:text-yellow-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400'
              }`}
            >
              <FaFlag className="mr-1 h-4 w-4" />
              {flaggedQuestions.includes(currentQuestion.id) ? 'Flagged' : 'Flag for review'}
            </button>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
            <div 
              className="bg-blue-600 h-1.5 rounded-full" 
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Question Content */}
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {currentQuestion.text}
            </h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div 
                  key={option.id}
                  onClick={() => handleSelectAnswer(option.id)}
                  className={`
                    flex items-center p-4 border rounded-lg cursor-pointer transition-colors
                    ${
                      isSubmitted 
                        ? option.id === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-700'
                          : answers[currentQuestion.id] === option.id
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-700'
                            : 'border-gray-200 dark:border-gray-700'
                        : answers[currentQuestion.id] === option.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }
                  `}
                >
                  <div className={`
                    flex items-center justify-center h-6 w-6 rounded-full mr-3 text-sm font-medium
                    ${
                      isSubmitted 
                        ? option.id === currentQuestion.correctAnswer
                          ? 'bg-green-500 text-white'
                          : answers[currentQuestion.id] === option.id
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        : answers[currentQuestion.id] === option.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }
                  `}>
                    {option.id.toUpperCase()}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">{option.text}</span>
                  
                  {isSubmitted && option.id === currentQuestion.correctAnswer && (
                    <FaCheck className="ml-auto h-5 w-5 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Explanation (only shown after submission) */}
          {isSubmitted && showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Explanation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{currentQuestion.explanation}</p>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <FaArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex space-x-3">
              {isSubmitted && !showExplanation && (
                <Button 
                  variant="secondary"
                  onClick={() => setShowExplanation(true)}
                >
                  Show Explanation
                </Button>
              )}
              
              {isSubmitted && showExplanation && (
                <Button 
                  variant="secondary"
                  onClick={() => setShowExplanation(false)}
                >
                  Hide Explanation
                </Button>
              )}
              
              {currentQuestionIndex < totalQuestions - 1 ? (
                <Button 
                  variant="gradient" 
                  onClick={handleNextQuestion}
                >
                  Next
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : !isSubmitted ? (
                <Button 
                  variant="gradient" 
                  onClick={handleSubmitTest}
                >
                  Submit Test
                </Button>
              ) : (
                <Button 
                  variant="gradient" 
                  onClick={() => router.push('/dashboard')}
                >
                  Finish Review
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeTest;
