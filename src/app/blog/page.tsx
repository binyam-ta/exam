import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/landing';
import { Footer } from '@/components/layout';
import { FaCalendarAlt, FaUser, FaTag, FaClock } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Proven Strategies to Improve Your SAT Score',
      excerpt: 'Discover the most effective techniques used by top-scoring students to maximize their SAT performance and get into their dream colleges.',
      coverImage: '/images/blog/sat-strategies.jpg',
      date: 'March 15, 2025',
      author: {
        name: 'Dr. Emily Chen',
        avatar: '/images/authors/emily-chen.jpg'
      },
      category: 'SAT Prep',
      readTime: '8 min read',
      featured: true
    },
    {
      id: '2',
      title: 'How to Manage Test Anxiety: A Comprehensive Guide',
      excerpt: 'Learn practical techniques to overcome test anxiety and perform at your best when it matters most.',
      coverImage: '/images/blog/test-anxiety.jpg',
      date: 'March 10, 2025',
      author: {
        name: 'Dr. Michael Johnson',
        avatar: '/images/authors/michael-johnson.jpg'
      },
      category: 'Mental Health',
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'The Ultimate GMAT Study Schedule: 3 Months to Success',
      excerpt: 'Follow this detailed 3-month study plan to efficiently prepare for the GMAT and achieve your target score.',
      coverImage: '/images/blog/gmat-study.jpg',
      date: 'March 5, 2025',
      author: {
        name: 'Sarah Williams',
        avatar: '/images/authors/sarah-williams.jpg'
      },
      category: 'GMAT Prep',
      readTime: '10 min read'
    },
    {
      id: '4',
      title: 'AI in Education: How Technology is Transforming Test Prep',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way students prepare for standardized tests.',
      coverImage: '/images/blog/ai-education.jpg',
      date: 'February 28, 2025',
      author: {
        name: 'Alex Rodriguez',
        avatar: '/images/authors/alex-rodriguez.jpg'
      },
      category: 'EdTech',
      readTime: '7 min read',
      featured: true
    },
    {
      id: '5',
      title: 'MCAT Biology: Key Concepts You Need to Master',
      excerpt: 'A comprehensive overview of the most important biology concepts tested on the MCAT, with study tips and practice questions.',
      coverImage: '/images/blog/mcat-biology.jpg',
      date: 'February 20, 2025',
      author: {
        name: 'Dr. James Wilson',
        avatar: '/images/authors/james-wilson.jpg'
      },
      category: 'MCAT Prep',
      readTime: '12 min read'
    },
    {
      id: '6',
      title: 'From Average to Perfect Score: My GRE Success Story',
      excerpt: 'Read how one student went from an average initial practice test to achieving a perfect score on the GRE.',
      coverImage: '/images/blog/gre-success.jpg',
      date: 'February 15, 2025',
      author: {
        name: 'Priya Patel',
        avatar: '/images/authors/priya-patel.jpg'
      },
      category: 'Success Stories',
      readTime: '5 min read'
    }
  ];

  // Filter featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AMM Exam Prep Blog
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                Expert insights, study tips, and success stories to help you excel in your exams
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map(post => (
                  <div 
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="relative h-64 w-full">
                      <Image 
                        src={post.coverImage} 
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FaTag className="mr-1" />
                          <span>{post.category}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                          <Image 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {post.author.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <div 
                  key={post.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="relative h-48 w-full">
                    <Image 
                      src={post.coverImage} 
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-3">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FaTag className="mr-1" />
                        <span>{post.category}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                          <Image 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {post.author.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                        <FaClock className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-blue-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Get the latest study tips, exam updates, and exclusive content delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
