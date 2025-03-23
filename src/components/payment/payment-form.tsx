"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaSpinner } from 'react-icons/fa';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().min(10, { message: 'Valid phone number is required' }),
  paymentMethod: z.enum(['telebirr', 'cbe', 'amole'], { 
    required_error: 'Please select a payment method' 
  }),
});

type PaymentFormValues = z.infer<typeof formSchema>;

interface PaymentFormProps {
  amount: string;
  planId: string;
  onSuccess?: (txRef: string) => void;
  onError?: (error: string) => void;
}

export function PaymentForm({ amount, planId, onSuccess, onError }: PaymentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      paymentMethod: 'telebirr',
    },
  });

  const onSubmit = async (data: PaymentFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/payment/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency: 'ETB',
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          phone_number: data.phoneNumber,
          plan_id: planId,
          payment_method: data.paymentMethod
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        // In a real application, redirect to the Chapa checkout URL
        // window.location.href = result.checkout_url;
        
        // For demo purposes, we'll just call the onSuccess callback
        if (onSuccess) {
          onSuccess(result.tx_ref);
        }
      } else {
        if (onError) {
          onError(result.message || 'Payment initialization failed');
        }
      }
    } catch (error) {
      console.error('Error initializing payment:', error);
      if (onError) {
        onError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Complete Your Payment</h2>
        <p className="text-muted-foreground">
          Amount: {amount} ETB
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="0912345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Method</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a payment method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="telebirr">Telebirr</SelectItem>
                    <SelectItem value="cbe">Commercial Bank of Ethiopia</SelectItem>
                    <SelectItem value="amole">Amole</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Pay Now'
            )}
          </Button>
        </form>
      </Form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Your payment is secured by Chapa Payment Gateway</p>
        <p className="mt-2">
          By proceeding with the payment, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
