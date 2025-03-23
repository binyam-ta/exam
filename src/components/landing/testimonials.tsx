import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  stars: number;
}

interface TestimonialCardProps extends Testimonial {}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'SAT Student',
    image: '/images/testimonial-1.jpg',
    quote: 'The AI-generated questions were incredibly similar to what I saw on the actual SAT. I improved my score by 150 points after just one month of using this platform!',
    stars: 5
  },
  {
    name: 'Michael Chen',
    role: 'GRE Applicant',
    image: '/images/testimonial-2.jpg',
    quote: 'The adaptive learning system identified my weak areas in quantitative reasoning and helped me focus my studies. The detailed explanations made complex concepts much clearer.',
    stars: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'High School Teacher',
    image: '/images/testimonial-3.jpg',
    quote: 'I use this platform with my AP classes, and the results have been outstanding. The institutional plan gives me insights into each student\'s progress, allowing me to provide targeted help.',
    stars: 4
  },
  {
    name: 'David Okafor',
    role: 'GMAT Student',
    image: '/images/testimonial-4.jpg',
    quote: 'The gamification elements kept me motivated throughout my GMAT prep. Earning badges and competing on the leaderboard made studying feel less like a chore.',
    stars: 5
  },
  {
    name: 'Priya Patel',
    role: 'Medical School Applicant',
    image: '/images/testimonial-5.jpg',
    quote: 'Preparing for the MCAT was daunting, but this platform broke it down into manageable chunks. The analytics helped me track my improvement over time.',
    stars: 4
  },
  {
    name: 'James Wilson',
    role: 'Parent',
    image: '/images/testimonial-6.jpg',
    quote: 'My daughter used this for her college entrance exams. The personalized approach and detailed feedback gave her the confidence she needed to succeed.',
    stars: 5
  }
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, quote, stars }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={`h-4 w-4 ${i < stars ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">"{quote}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of students who have transformed their exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md">
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white dark:border-gray-800">
                  <Image 
                    src={`/images/user-${num}.jpg`} 
                    alt={`User ${num}`} 
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Joined by <span className="font-bold text-blue-600 dark:text-blue-400">10,000+</span> students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
