import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/reddit.ts';
import { RedditPost, SortOption } from '../types/reddit.ts';

const sortOptions: SortOption[] = ['hot', 'new', 'controversial', 'rising', 'top'];

export function PopularPosts() {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [sort, setSort] = useState<SortOption>('hot');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchPosts(sort);
      setPosts(fetchedPosts);
      setLoading(false);
    };
    loadPosts();
  }, [sort]);

  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-2xl font-bold">Popular</h1>
      
      <div className="flex space-x-2">
        {sortOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSort(option)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              sort === option
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.id} className="flex space-x-4 border rounded-lg p-4 hover:border-gray-300">
              <div className="flex flex-col items-center space-y-1">
                <button className="text-gray-400 hover:text-reddit-orange">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <span className="text-sm font-medium">{post.score}</span>
                <button className="text-gray-400 hover:text-blue-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-medium mb-2">{post.title}</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <span>Posted by u/{post.author}</span>
                  <span>{new Date(post.created_utc * 1000).toLocaleString()}</span>
                </div>
                
                <div className="flex items-center space-x-4 mt-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 px-2 py-1 rounded-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{post.num_comments} Comments</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-gray-500 hover:bg-gray-100 px-2 py-1 rounded-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>Share</span>
                  </button>
                  
                  <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

