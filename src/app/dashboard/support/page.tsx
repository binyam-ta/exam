import React from 'react';
import { FaSearch, FaQuestionCircle, FaBook, FaHeadset, FaComments, FaVideo, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Help & Support - ExamPrep AI',
  description: 'Get help and support for using ExamPrep AI.',
};

export default function SupportPage() {
  // Mock data for FAQs
  const faqs = [
    {
      question: 'How does the AI generate practice questions?',
      answer: 'Our AI analyzes thousands of real exam questions to understand patterns and question styles. It then generates new questions that match the difficulty level and format of the actual exam, while ensuring they test the same concepts and skills.'
    },
    {
      question: 'Can I use ExamPrep AI on mobile devices?',
      answer: 'Yes! ExamPrep AI is fully responsive and works on all devices including smartphones, tablets, laptops, and desktop computers. You can study anywhere, anytime.'
    },
    {
      question: 'How accurate are the practice tests compared to real exams?',
      answer: 'Our practice tests are designed to closely mimic the format, difficulty, and content of real exams. We regularly update our question bank based on feedback from students who have taken the actual exams to ensure high accuracy.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For institutional subscriptions, we also offer invoice payment options.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. If you cancel, you\'ll still have access to premium features until the end of your current billing period.'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Help & Support</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Find answers to common questions and get help when you need it
        </p>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
            How can we help you today?
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="pl-10 pr-4 py-3 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
            <FaHeadset className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Support</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Get in touch with our support team for personalized assistance
          </p>
          <Button variant="outline" className="mt-auto">
            Contact Us
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
            <FaBook className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Knowledge Base</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Browse our comprehensive guides and documentation
          </p>
          <Button variant="outline" className="mt-auto">
            View Articles
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
            <FaComments className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Forum</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Connect with other users and share tips and strategies
          </p>
          <Button variant="outline" className="mt-auto">
            Join Discussion
          </Button>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0 text-gray-500 dark:text-gray-400 group-open:rotate-180 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-4 pt-2 text-sm text-gray-600 dark:text-gray-400">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center justify-center mx-auto">
            View all FAQs <FaArrowRight className="ml-2 h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Video Tutorials */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Video Tutorials</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Getting Started with ExamPrep AI', duration: '3:45', thumbnail: '/images/video-1.jpg' },
              { title: 'How to Create Custom Practice Tests', duration: '5:12', thumbnail: '/images/video-2.jpg' },
              { title: 'Understanding Your Analytics', duration: '4:30', thumbnail: '/images/video-3.jpg' },
            ].map((video, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative pb-[56.25%] bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaVideo className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">{video.title}</h3>
                  <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Still Need Help?</h2>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="flex justify-end">
              <Button variant="gradient">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
