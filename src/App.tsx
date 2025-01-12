import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { PopularPosts } from './components/PopularPosts.tsx';
import { Advertisement } from './components/Advertisement.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FF7F7F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-white rounded-lg shadow-xl p-4">
            <Header />
            <main className="mt-4 flex space-x-4">
              <Sidebar />
              <PopularPosts />
              <Advertisement />
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

