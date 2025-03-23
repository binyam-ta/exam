import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaCheck } from 'react-icons/fa';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'gradient';
  popular?: boolean;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonVariant = 'default',
  popular = false 
}: PricingCardProps) => {
  return (
    <div className={`
      relative rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl
      ${popular ? 'border-2 border-blue-500 dark:border-blue-400 scale-105 bg-white dark:bg-gray-800' : 'bg-white dark:bg-gray-800'}
    `}>
      {popular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 py-1 text-center text-sm font-semibold text-white">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">${price}</span>
        {price > 0 && <span className="ml-1 text-gray-500 dark:text-gray-400">/month</span>}
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheck className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button 
          variant={buttonVariant} 
          size="lg" 
          className="w-full font-semibold"
          asChild
        >
          <Link href="/register">{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that works best for your exam preparation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <PricingCard
            title="Free"
            price="0"
            description="Perfect for trying out the platform"
            features={[
              "10 AI-generated questions daily",
              "Basic performance analytics",
              "Access to public question bank",
              "Ad-supported experience"
            ]}
            buttonText="Get Started"
            buttonVariant="outline"
          />
          
          <PricingCard
            title="Premium"
            price="19.99"
            description="Everything you need to ace your exams"
            features={[
              "Unlimited AI-generated questions",
              "Advanced analytics dashboard",
              "Personalized study plans",
              "Ad-free experience",
              "Timed mock exams",
              "Detailed explanations for all questions"
            ]}
            buttonText="Start Premium"
            buttonVariant="gradient"
            popular={true}
          />
          
          <PricingCard
            title="Institutional"
            price="99.99"
            description="For schools and coaching centers"
            features={[
              "Everything in Premium",
              "Up to 50 student accounts",
              "Teacher dashboard",
              "Class performance tracking",
              "Custom question creation",
              "Branded experience",
              "Priority support"
            ]}
            buttonText="Contact Sales"
            buttonVariant="secondary"
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Looking for specific exam packages?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We offer one-time purchases for specific exams like SAT, GRE, GMAT, and more.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="/exam-packages">View Exam Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
