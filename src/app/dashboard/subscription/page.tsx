"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaCheck, FaTimes, FaCrown, FaRocket, FaGraduationCap, FaSpinner } from 'react-icons/fa';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Free',
    description: 'Get started with basic exam preparation',
    icon: <FaGraduationCap className="text-4xl text-blue-500" />,
    features: [
      { name: 'Access to free practice tests', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Limited study materials', included: true },
      { name: 'Email support', included: false },
      { name: 'Personalized study plan', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'Mock exams with AI feedback', included: false },
    ],
    popular: false,
    buttonText: 'Current Plan',
    buttonVariant: 'outline',
    disabled: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '825 ETB',
    period: 'per month',
    description: 'Everything you need for serious exam prep',
    icon: <FaCrown className="text-4xl text-yellow-500" />,
    features: [
      { name: 'Access to all practice tests', included: true },
      { name: 'Comprehensive analytics', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Full study materials', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Personalized study plan', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Mock exams with AI feedback', included: false },
    ],
    popular: true,
    buttonText: 'Upgrade Now',
    buttonVariant: 'default',
    disabled: false,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '1650 ETB',
    period: 'per month',
    description: 'The ultimate exam preparation experience',
    icon: <FaRocket className="text-4xl text-purple-500" />,
    features: [
      { name: 'Access to all practice tests', included: true },
      { name: 'Comprehensive analytics', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Full study materials', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Personalized study plan', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Mock exams with AI feedback', included: true },
    ],
    popular: false,
    buttonText: 'Upgrade Now',
    buttonVariant: 'default',
    disabled: false,
  },
];

export default function SubscriptionPage() {
  const [currentPlan, setCurrentPlan] = useState('basic');
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpgrade = async (planId: string) => {
    setIsProcessing(true);
    setError(null);
    
    try {
      // In a real application, you would call your backend API to initiate the payment
      const response = await fetch('/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          userId: 'user-123', // In a real app, this would be the actual user ID
          email: 'user@example.com', // In a real app, this would be the user's email
          firstName: 'Test',
          lastName: 'User',
          phoneNumber: '0912345678'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // In a real application, redirect to the Chapa checkout URL
        // window.location.href = data.checkoutUrl;
        
        // For demo purposes, we'll just show a success message
        alert(`Redirecting to Chapa payment for ${planId} plan. Transaction reference: ${data.txRef}`);
        setCurrentPlan(planId);
      } else {
        setError(data.message || 'Failed to initiate payment');
      }
    } catch (error) {
      console.error('Error upgrading plan:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDowngrade = () => {
    setCurrentPlan('basic');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Subscription Plans</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to boost your exam preparation and achieve your academic goals.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`
                relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden
                transition-all duration-300 hover:shadow-md
                ${plan.popular ? 'ring-2 ring-primary' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                
                <div className="text-center my-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm"> {plan.period}</span>
                  )}
                </div>
                
                <p className="text-center text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                <Button 
                  variant={plan.buttonVariant as any}
                  className="w-full mb-6"
                  disabled={plan.disabled || isProcessing}
                  onClick={() => handleUpgrade(plan.id)}
                >
                  {isProcessing && selectedPlan === plan.id ? (
                    <>
                      <FaSpinner className="mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : plan.buttonText}
                </Button>
                
                {currentPlan === plan.id && plan.id !== 'basic' && (
                  <Button variant="outline" onClick={handleDowngrade}>Downgrade</Button>
                )}
                
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-red-500 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? '' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-muted rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Need a custom plan for your school or organization?</h3>
          <p className="text-muted-foreground mb-4">
            Contact our sales team for custom pricing and features tailored to your specific needs.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
}
