"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FAQItem[] = [
    {
      question: "What exams does your platform support?",
      answer: "Our platform currently supports preparation for standardized tests including SAT, ACT, GRE, GMAT, MCAT, LSAT, AP exams, and many more. We're constantly expanding our offerings based on user demand."
    },
    {
      question: "How does the AI generate questions?",
      answer: "Our AI analyzes thousands of past exam questions and patterns to generate new questions that match the style, difficulty, and content areas of real exams. Each question is designed to test specific knowledge areas and skills required for your target exam."
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer: "Yes! Our platform is fully responsive and works on desktops, laptops, tablets, and smartphones. You can study anytime, anywhere with an internet connection."
    },
    {
      question: "How accurate are the practice tests compared to real exams?",
      answer: "Our practice tests are designed to closely mimic real exam conditions, including timing, question types, and difficulty levels. Many of our users report that our practice tests provided an excellent simulation of their actual exam experience."
    },
    {
      question: "Do you offer any free resources?",
      answer: "Yes, we offer a free tier that includes limited access to practice questions, one full-length practice test, and basic performance analytics. This allows you to try our platform before committing to a subscription."
    },
    {
      question: "How often is new content added?",
      answer: "We regularly update our question bank and add new features based on user feedback and changes to exam formats. Premium subscribers get immediate access to all new content as it's released."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all new subscriptions. If you're not completely satisfied with our platform, you can request a full refund within the first 30 days of your subscription."
    },
    {
      question: "Do you offer group discounts for schools or study groups?",
      answer: "Absolutely! We offer special institutional pricing for schools, tutoring centers, and study groups. Please contact our sales team at sales@ammexamprep.com for more information."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 ml-4 text-blue-600 dark:text-blue-400">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              
              <div 
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
