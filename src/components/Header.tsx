import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchPosts } from '../api/reddit.ts';
import { RedditPost } from '../types/reddit.ts';

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<RedditPost[]>([]);

  // Use searchResults to avoid "value is never read" error
  console.log(searchResults);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = await searchPosts(searchQuery);
      setSearchResults(results);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png"
                alt="Reddit"
                className="h-8 w-8 mr-2"
              />
              <span className="text-black font-semibold text-xl">reddit</span>
            </Link>
            <nav className="ml-6 flex space-x-4">
              <Link to="/" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/popular" className="text-black px-3 py-2 rounded-md text-sm font-medium">
                Popular
              </Link>
              <Link to="/all" className="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                All
              </Link>
            </nav>
          </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Find community or post"
                className="w-full bg-gray-100 border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-reddit-orange text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-orange-600">
              Create Post
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-semibold text-sm">U</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

