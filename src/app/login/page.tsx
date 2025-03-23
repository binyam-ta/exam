import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '@/components/auth/login-form';

export const metadata = {
  title: 'Log in - ExamPrep AI',
  description: 'Log in to your ExamPrep AI account to continue your exam preparation journey.',
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md">
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
          
          <LoginForm />
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6">Prepare Smarter, Score Higher</h2>
            <p className="text-lg mb-8">
              Join thousands of students who have transformed their exam preparation with our AI-powered platform.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-left">Personalized AI-generated questions</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-left">Detailed performance analytics</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-left">Adaptive learning technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
