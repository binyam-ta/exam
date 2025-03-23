import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaGraduationCap, FaFire, FaCalendarCheck, FaChartLine, FaBook, FaLock } from 'react-icons/fa';
import { getColorClass } from '@/lib/utils';

export const metadata = {
  title: 'Achievements - ExamPrep AI',
  description: 'View your achievements and track your progress on ExamPrep AI.',
};

export default function AchievementsPage() {
  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      name: 'First Steps',
      description: 'Complete your first practice test',
      icon: FaTrophy,
      color: 'blue',
      completed: true,
      date: '2023-05-15',
      xp: 50,
    },
    {
      id: 2,
      name: 'Quick Learner',
      description: 'Score 80% or higher on a practice test',
      icon: FaGraduationCap,
      color: 'green',
      completed: true,
      date: '2023-05-20',
      xp: 100,
    },
    {
      id: 3,
      name: 'Consistent Effort',
      description: 'Complete at least one practice test for 5 consecutive days',
      icon: FaFire,
      color: 'orange',
      completed: true,
      date: '2023-05-25',
      xp: 150,
    },
    {
      id: 4,
      name: 'Math Whiz',
      description: 'Score 90% or higher on a math practice test',
      icon: FaChartLine,
      color: 'purple',
      completed: true,
      date: '2023-06-01',
      xp: 200,
    },
    {
      id: 5,
      name: 'Verbal Virtuoso',
      description: 'Score 90% or higher on a verbal practice test',
      icon: FaBook,
      color: 'indigo',
      completed: false,
      progress: 75,
      xp: 200,
    },
    {
      id: 6,
      name: 'Perfect Score',
      description: 'Achieve a perfect score on any practice test',
      icon: FaStar,
      color: 'yellow',
      completed: false,
      progress: 90,
      xp: 300,
    },
    {
      id: 7,
      name: 'Test Master',
      description: 'Complete 50 practice tests',
      icon: FaMedal,
      color: 'red',
      completed: false,
      progress: 48,
      xp: 500,
    },
    {
      id: 8,
      name: 'Study Marathon',
      description: 'Study for a total of 100 hours',
      icon: FaCalendarCheck,
      color: 'teal',
      completed: false,
      progress: 42,
      xp: 400,
    },
    {
      id: 9,
      name: 'Elite Scholar',
      description: 'Maintain an average score of 85% or higher across all tests',
      icon: FaGraduationCap,
      color: 'pink',
      completed: false,
      locked: true,
      xp: 1000,
    },
  ];

  // User stats
  const userStats = {
    level: 5,
    xp: 850,
    nextLevelXp: 1000,
    achievements: {
      total: achievements.length,
      completed: achievements.filter(a => a.completed).length,
      inProgress: achievements.filter(a => !a.completed && !a.locked).length,
      locked: achievements.filter(a => a.locked).length,
    },
    rank: 'Gold',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Track your progress and earn rewards as you improve
        </p>
      </div>

      {/* User Progress */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                  {userStats.level}
                </div>
                <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-800">
                  {userStats.rank}
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Level {userStats.level} Scholar</h2>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {userStats.xp} / {userStats.nextLevelXp} XP to next level
                </div>
                <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-blue-600" 
                    style={{ width: `${(userStats.xp / userStats.nextLevelXp) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{userStats.achievements.completed}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{userStats.achievements.inProgress}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{userStats.achievements.locked}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Locked</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border ${
              achievement.completed 
                ? 'border-green-200 dark:border-green-900' 
                : achievement.locked 
                  ? 'border-gray-200 dark:border-gray-700 opacity-60' 
                  : 'border-blue-200 dark:border-blue-900'
            }`}
          >
            <div className="p-6">
              <div className="flex items-start">
                <div className={`p-3 rounded-lg ${getColorClass(achievement.color, 'bg', '100')} ${getColorClass(achievement.color, 'text', '600', true)}`}>
                  {achievement.locked ? (
                    <FaLock className="h-6 w-6" />
                  ) : (
                    <achievement.icon className="h-6 w-6" />
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.name}</h3>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">+{achievement.xp} XP</div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  
                  {achievement.completed ? (
                    <div className="mt-3 flex items-center text-sm text-green-600 dark:text-green-400">
                      <FaCheck className="mr-1 h-4 w-4" />
                      <span>Completed on {new Date(achievement.date).toLocaleDateString()}</span>
                    </div>
                  ) : !achievement.locked ? (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getColorClass(achievement.color, 'bg')}`}
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 text-sm text-gray-500 dark:text-gray-500">
                      Complete other achievements to unlock
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Leaderboard</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {[
            { rank: 1, name: 'Sarah Johnson', level: 12, xp: 12500, avatar: '/images/user-1.jpg' },
            { rank: 2, name: 'Michael Chen', level: 10, xp: 10200, avatar: '/images/user-2.jpg' },
            { rank: 3, name: 'Emily Rodriguez', level: 9, xp: 9800, avatar: '/images/user-3.jpg' },
            { rank: 4, name: 'David Kim', level: 8, xp: 8600, avatar: '/images/user-4.jpg' },
            { rank: 5, name: 'You', level: 5, xp: 850, avatar: '/images/avatar.jpg', isUser: true },
          ].map((user) => (
            <div 
              key={user.rank}
              className={`px-6 py-4 ${user.isUser ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
            >
              <div className="flex items-center">
                <div className="w-8 text-center font-medium text-gray-700 dark:text-gray-300">
                  {user.rank}
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ml-4">
                  {/* This would be an actual image in a real app */}
                  <div className="h-full w-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name} {user.isUser && '(You)'}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Level {user.level}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user.xp.toLocaleString()} XP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper component for the check icon
const FaCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);
