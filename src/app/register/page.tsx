import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RegisterForm from '@/components/auth/register-form';

export const metadata = {
  title: 'Sign Up - ExamPrep AI',
  description: 'Create your ExamPrep AI account and start your exam preparation journey today.',
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community of Achievers</h2>
            <p className="text-lg mb-8">
              Over 10,000 students have improved their exam scores with ExamPrep AI.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">94%</div>
                <div className="text-sm">of users improved their scores</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">150+</div>
                <div className="text-sm">points average SAT improvement</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">25%</div>
                <div className="text-sm">less study time needed</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">4.8/5</div>
                <div className="text-sm">average user rating</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image 
                      src={`/images/user-${num}.jpg`} 
                      alt={`User ${num}`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm">Join thousands of successful students</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Form */}
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
          
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
