"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaBug, FaHome, FaRedo } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-background rounded-lg shadow-xl p-8 border border-border">
        <div className="flex justify-center">
          <FaBug className="text-red-500 text-6xl" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground">Something went wrong!</h1>
        
        <p className="text-muted-foreground">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        {error.message && (
          <div className="bg-muted p-4 rounded-md text-left overflow-auto max-h-32">
            <p className="text-sm font-mono">{error.message}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            onClick={() => reset()} 
            variant="default" 
            className="flex items-center gap-2"
          >
            <FaRedo className="mr-2" />
            Try again
          </Button>
          
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link href="/">
              <FaHome className="mr-2" />
              Go to Homepage
            </Link>
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-6">
          If this problem persists, please contact our support team.
        </p>
      </div>
    </div>
  );
}
