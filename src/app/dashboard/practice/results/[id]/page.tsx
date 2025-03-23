import React from 'react';
import TestResults from '@/components/practice/test-results';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: {
    id: string;
  };
}

export default function TestResultsPage({ params }: PageProps) {
  const testId = params.id;
  
  // Mock data for a completed test
  const testData = {
    testId: testId,
    testTitle: 'SAT Practice Test 1',
    score: 1420,
    maxScore: 1600,
    duration: '2h 45m',
    completedDate: '2023-06-15',
    sections: [
      {
        name: 'Reading',
        score: 38,
        maxScore: 40,
        questions: [
          {
            id: 'q1',
            question: 'According to the passage, what is the main reason for the decline in bee populations?',
            userAnswer: 'Pesticide use in agriculture',
            correctAnswer: 'Pesticide use in agriculture',
            isCorrect: true,
            explanation: 'The passage explicitly states that pesticide use in modern agriculture is the primary factor contributing to the decline in bee populations worldwide.'
          },
          {
            id: 'q2',
            question: 'What can be inferred from the author\'s tone in the final paragraph?',
            userAnswer: 'Optimism about future conservation efforts',
            correctAnswer: 'Urgency for immediate action',
            isCorrect: false,
            explanation: 'The author\'s tone in the final paragraph conveys a sense of urgency, emphasizing that immediate action is necessary to prevent further decline in bee populations.'
          },
          {
            id: 'q3',
            question: 'The word "critical" in line 45 most nearly means:',
            userAnswer: 'Essential',
            correctAnswer: 'Essential',
            isCorrect: true,
            explanation: 'In the context of the passage, "critical" refers to something that is absolutely essential or necessary, specifically regarding the role bees play in pollination.'
          }
        ]
      },
      {
        name: 'Writing',
        score: 35,
        maxScore: 40,
        questions: [
          {
            id: 'q4',
            question: 'Which choice best maintains the sentence pattern already established in the paragraph?',
            userAnswer: 'Option C',
            correctAnswer: 'Option C',
            isCorrect: true,
            explanation: 'Option C maintains the parallel structure established in the previous sentences, using the same grammatical form.'
          },
          {
            id: 'q5',
            question: 'The writer wants to add a sentence that further supports the main argument of the passage. Which choice best accomplishes this goal?',
            userAnswer: 'Option B',
            correctAnswer: 'Option A',
            isCorrect: false,
            explanation: 'Option A provides additional evidence that directly supports the main argument about the economic impact of the policy, while Option B introduces a tangential point.'
          }
        ]
      },
      {
        name: 'Math (No Calculator)',
        score: 18,
        maxScore: 20,
        questions: [
          {
            id: 'q6',
            question: 'If 3x + 7 = 22, what is the value of x?',
            userAnswer: '5',
            correctAnswer: '5',
            isCorrect: true,
            explanation: 'To solve for x, subtract 7 from both sides: 3x = 15. Then divide both sides by 3: x = 5.'
          },
          {
            id: 'q7',
            question: 'Which of the following is equivalent to (x² + 4x + 4) ÷ (x + 2)?',
            userAnswer: 'x + 2',
            correctAnswer: 'x + 2',
            isCorrect: true,
            explanation: 'The expression (x² + 4x + 4) can be factored as (x + 2)². Therefore, (x + 2)² ÷ (x + 2) = x + 2.'
          }
        ]
      },
      {
        name: 'Math (Calculator)',
        score: 36,
        maxScore: 40,
        questions: [
          {
            id: 'q8',
            question: 'In the xy-plane, line k passes through the points (0, 3) and (4, 0). Which of the following is the equation of line k?',
            userAnswer: 'y = -3/4x + 3',
            correctAnswer: 'y = -3/4x + 3',
            isCorrect: true,
            explanation: 'Using the slope formula: m = (y₂ - y₁)/(x₂ - x₁) = (0 - 3)/(4 - 0) = -3/4. Using point-slope form: y - 3 = -3/4(x - 0), which simplifies to y = -3/4x + 3.'
          },
          {
            id: 'q9',
            question: 'If f(x) = 2x² - 3x + 1, what is f(2)?',
            userAnswer: '5',
            correctAnswer: '5',
            isCorrect: true,
            explanation: 'Substitute x = 2 into the function: f(2) = 2(2)² - 3(2) + 1 = 2(4) - 6 + 1 = 8 - 6 + 1 = 3.'
          },
          {
            id: 'q10',
            question: 'The table shows the number of students in different grade levels at a school. What percentage of the students are in 11th grade?',
            userAnswer: '24%',
            correctAnswer: '25%',
            isCorrect: false,
            explanation: 'If there are 150 students in 11th grade out of a total of 600 students, the percentage is (150/600) × 100% = 25%.'
          }
        ]
      }
    ]
  };

  return (
    <TestResults 
      testId={testData.testId}
      testTitle={testData.testTitle}
      score={testData.score}
      maxScore={testData.maxScore}
      duration={testData.duration}
      completedDate={testData.completedDate}
      sections={testData.sections}
      onReviewTest={() => console.log('Review test')}
      onTakeNewTest={() => console.log('Take new test')}
    />
  );
}
