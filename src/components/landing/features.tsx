import React from 'react';
import Image from 'next/image';
import { FaBrain, FaChartBar, FaLightbulb, FaTrophy } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface FeatureItem {
  icon: IconType;
  text: string;
  color: string;
}

interface FeatureSection {
  title: string;
  features: FeatureItem[];
  image: string;
  imageAlt: string;
  bgGradient: string;
  reverse?: boolean;
}

const Features: React.FC = () => {
  const featureSections: FeatureSection[] = [
    {
      title: "AI-Generated Exam Questions",
      features: [
        {
          icon: FaBrain,
          text: "Questions dynamically created based on exam patterns (MCQs, short answers, etc.)",
          color: "blue"
        },
        {
          icon: FaChartBar,
          text: "AI adjusts difficulty based on your performance",
          color: "blue"
        },
        {
          icon: FaLightbulb,
          text: "Covers multiple subjects and topics (Math, Science, English, and more)",
          color: "blue"
        }
      ],
      image: "/images/ai-questions.png",
      imageAlt: "AI-Generated Questions",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950",
      reverse: true
    },
    {
      title: "Smart Practice & Adaptive Testing",
      features: [
        {
          icon: FaBrain,
          text: "Personalized tests based on your strengths and weaknesses",
          color: "purple"
        },
        {
          icon: FaChartBar,
          text: "AI adapts difficulty level as you progress",
          color: "purple"
        },
        {
          icon: FaLightbulb,
          text: "Time-based exams to simulate real test environments",
          color: "purple"
        }
      ],
      image: "/images/adaptive-learning.png",
      imageAlt: "Adaptive Learning",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950"
    },
    {
      title: "Gamification & Rewards",
      features: [
        {
          icon: FaTrophy,
          text: "Earn badges for streaks, milestones, and improvements",
          color: "amber"
        },
        {
          icon: FaChartBar,
          text: "Compete on leaderboards with friends and peers",
          color: "amber"
        },
        {
          icon: FaLightbulb,
          text: "Track your progress and celebrate your achievements",
          color: "amber"
        }
      ],
      image: "/images/gamification.png",
      imageAlt: "Gamification & Rewards",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950",
      reverse: true
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Supercharge Your Exam Preparation
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform offers everything you need to excel in your exams
          </p>
        </div>

        {featureSections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className={`${section.reverse ? 'order-2 md:order-1' : ''}`}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`flex-shrink-0 h-6 w-6 text-${feature.color}-600 dark:text-${feature.color}-400 mr-3`}>
                      <feature.icon />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${section.reverse ? 'order-1 md:order-2' : ''} bg-gradient-to-r ${section.bgGradient} p-6 rounded-2xl shadow-lg`}>
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
                <Image 
                  src={section.image} 
                  alt={section.imageAlt} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
