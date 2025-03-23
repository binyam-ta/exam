/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook, FaApple, FaCheck } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { PaymentForm } from '@/components/payment/payment-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Free',
    features: [
      'Access to free practice tests',
      'Basic analytics',
      'Community forum access',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$14.99/mo',
    features: [
      'Access to all practice tests',
      'Comprehensive analytics',
      'Personalized study plan',
      'Priority email support',
    ],
    recommended: true,
  },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  plan: z.enum(['basic', 'premium'], {
    required_error: 'Please select a subscription plan.',
  }),
});

const RegisterForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [txRef, setTxRef] = useState('');
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      plan: 'basic',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (step === 1) {
      setSelectedPlan(values.plan);
      setStep(2);
      return;
    }
    
    if (step === 2 && values.plan !== 'basic') {
      // If a paid plan is selected, wait for payment completion
      if (!paymentSuccess) {
        setError('Please complete the payment process before proceeding.');
        return;
      }
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // In a real application, you would call your backend API to register the user
      // and associate them with the selected plan and payment information
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
          plan: values.plan,
          txRef: txRef || undefined,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Redirect to the dashboard or login page
        router.push('/dashboard');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = (transactionRef: string) => {
    setPaymentSuccess(true);
    setTxRef(transactionRef);
    setError(null);
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const getPlanAmount = (plan: string): string => {
    switch (plan) {
      case 'premium':
        return '14.99';
      default:
        return '0';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create your account</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Start your exam preparation journey today
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {step === 1 ? (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...form.register('name')}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="John Doe"
            />
            {form.formState.errors.name && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...form.register('email')}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="you@example.com"
            />
            {form.formState.errors.email && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...form.register('password')}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
            {form.formState.errors.password && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Choose your plan
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`
                    border rounded-lg p-4 cursor-pointer transition-all
                    ${selectedPlan === plan.id 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-700'}
                    ${plan.recommended ? 'relative' : ''}
                  `}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.recommended && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                      <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">{plan.price}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedPlan === plan.id 
                        ? 'bg-blue-500 border-blue-500' 
                        : 'border-gray-400 dark:border-gray-500'
                    }`}>
                      {selectedPlan === plan.id && <FaCheck className="text-white text-xs" />}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <input 
                    type="radio" 
                    id={plan.id} 
                    value={plan.id} 
                    {...form.register('plan')} 
                    className="hidden"
                  />
                </div>
              ))}
            </div>
            {form.formState.errors.plan && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{form.formState.errors.plan.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="gradient"
            size="lg"
            className="w-full mt-6"
            disabled={isSubmitting}
          >
            Continue
          </Button>
        </form>
      ) : step === 2 && selectedPlan !== 'basic' ? (
        <div className="space-y-6">
          <PaymentForm 
            amount={getPlanAmount(selectedPlan)}
            planId={selectedPlan}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
          
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setStep(1)}
              disabled={isSubmitting}
            >
              Back
            </Button>
            
            <Button 
              onClick={() => form.handleSubmit(onSubmit)()}
              disabled={!paymentSuccess || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Complete Registration'
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Registration Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span>{form.getValues('name')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span>{form.getValues('email')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plan:</span>
                <span className="capitalize">{form.getValues('plan')}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setStep(1)}
              disabled={isSubmitting}
            >
              Back
            </Button>
            
            <Button 
              onClick={() => form.handleSubmit(onSubmit)()}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                'Complete Registration'
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
