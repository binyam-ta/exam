import React from 'react';
import PracticeTest from '@/components/practice/practice-test';

export const metadata = {
  title: 'Practice Test - ExamPrep AI',
  description: 'Take a practice test to improve your exam preparation.',
};

interface PracticeTestPageProps {
  params: {
    id: string;
  };
}

export default function PracticeTestPage({ params }: PracticeTestPageProps) {
  return (
    <div>
      <PracticeTest />
    </div>
  );
}
