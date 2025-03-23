"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaExclamationTriangle, FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-background rounded-lg shadow-xl p-8 border border-border">
        <div className="flex justify-center">
          <FaExclamationTriangle className="text-yellow-500 text-6xl" />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        
        <p className="text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild variant="default" className="flex items-center gap-2">
            <Link href="/">
              <FaHome className="mr-2" />
              Go to Homepage
            </Link>
          </Button>
          
          <Button 
            onClick={() => window.history.back()} 
            variant="outline" 
            className="flex items-center gap-2"
          >
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
