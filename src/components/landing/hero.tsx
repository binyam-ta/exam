import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaGraduationCap, FaChartLine, FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24 md:pt-32 md:pb-32 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                AI-Powered
              </span>{' '}
              Exam Preparation
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Ace your exams with personalized AI-generated practice questions, 
              adaptive learning, and detailed analytics.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="xl" 
                className="font-semibold shadow-lg"
                asChild
              >
                <Link href="/register">Get Started Free</Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="font-semibold border-2"
                asChild
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-300">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <FaGraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Generated Questions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dynamically created based on exam patterns and your performance.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                  <FaChartLine className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your progress with comprehensive performance insights.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <FaRocket className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personalized practice that adapts to your strengths and weaknesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
