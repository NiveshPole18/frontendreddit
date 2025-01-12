import React from 'react';
import { Link } from 'react-router-dom';

const favorites = [
  { name: "r/funymore", count: 156, avatar: "F" },
  { name: "r/breakingnews", count: 12, avatar: "B" },
  { name: "r/lovestory", count: 0, avatar: "L" },
  { name: "r/gamingfun", count: 68, avatar: "G" },
];

const redditFeeds = [
  { name: "r/moview", count: 4, avatar: "M" },
  { name: "r/gaming", count: 0, avatar: "G" },
  { name: "r/pics", count: 32, avatar: "P" },
  { name: "r/gifs", count: 0, avatar: "G" },
];

const community = [
  { name: "r/funymore", avatar: "F" },
  { name: "r/breakingnews", avatar: "B" },
  { name: "r/gaming", count: 43, avatar: "G" },
  { name: "r/lovestory", count: 12, avatar: "L" },
];

export function Sidebar() {
  return (
    <aside className="w-64 space-y-6">
      <div>
        <button className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
          Filter by
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-gray-500">Favorites</h2>
          <Link to="#" className="text-xs text-gray-400">All</Link>
        </div>
        <ul className="space-y-2">
          {favorites.map((item) => (
            <li key={item.name}>
              <Link to="#" className="flex items-center space-x-2 hover:bg-gray-100 p-1 rounded">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{item.avatar}</span>
                </div>
                <span className="flex-1 text-sm">{item.name}</span>
                {item.count > 0 && <span className="text-xs text-gray-500">{item.count}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-gray-500">Reddit Feeds</h2>
          <Link to="#" className="text-xs text-gray-400">All</Link>
        </div>
        <ul className="space-y-2">
          {redditFeeds.map((item) => (
            <li key={item.name}>
              <Link to="#" className="flex items-center space-x-2 hover:bg-gray-100 p-1 rounded">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{item.avatar}</span>
                </div>
                <span className="flex-1 text-sm">{item.name}</span>
                {item.count > 0 && <span className="text-xs text-gray-500">{item.count}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-gray-500">Community</h2>
          <Link to="#" className="text-xs text-gray-400">All</Link>
        </div>
        <ul className="space-y-2">
          {community.map((item) => (
            <li key={item.name}>
              <Link to="#" className="flex items-center space-x-2 hover:bg-gray-100 p-1 rounded">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{item.avatar}</span>
                </div>
                <span className="flex-1 text-sm">{item.name}</span>
                {item.count > 0 && <span className="text-xs text-gray-500">{item.count}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

