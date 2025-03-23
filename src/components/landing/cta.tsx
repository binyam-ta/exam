import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaRocket, FaGraduationCap, FaChartLine } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Exam Preparation?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students who are achieving their academic goals with our AI-powered platform.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-300 mr-3">
                  <FaRocket />
                </div>
                <p className="text-blue-100">
                  Get started in minutes with personalized practice questions
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-300 mr-3">
                  <FaGraduationCap />
                </div>
                <p className="text-blue-100">
                  Improve your scores with adaptive learning technology
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-300 mr-3">
                  <FaChartLine />
                </div>
                <p className="text-blue-100">
                  Track your progress with detailed analytics and insights
                </p>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="xl" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                asChild
              >
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-white text-white hover:bg-blue-700 font-semibold"
                asChild
              >
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
              <p className="text-blue-100">
                Subscribe to our newsletter for exam tips, updates, and special offers.
              </p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-blue-300/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-blue-300/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="exam" className="sr-only">Exam Type</label>
                <select
                  id="exam"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-blue-300/30 text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="" className="bg-blue-700">Select Your Exam</option>
                  <option value="sat" className="bg-blue-700">SAT</option>
                  <option value="gre" className="bg-blue-700">GRE</option>
                  <option value="gmat" className="bg-blue-700">GMAT</option>
                  <option value="mcat" className="bg-blue-700">MCAT</option>
                  <option value="other" className="bg-blue-700">Other</option>
                </select>
              </div>
              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                Subscribe Now
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-center text-blue-200">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
