import React from 'react';

export function Advertisement() {
  return (
    <aside className="w-64">
      <div className="border rounded-lg p-4">
        <div className="bg-gradient-to-br from-pink-100 to-orange-100 h-48 rounded-lg flex items-center justify-center mb-4">
          <span className="text-orange-500 font-bold text-xl">SUMMER BIG SALE</span>
        </div>
        <h3 className="text-lg font-bold text-center mb-1">SUMMER BIG SALE</h3>
        <p className="text-sm text-gray-500 text-center mb-2">Advertise on Reddit</p>
        <button className="w-full px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
          GET STARTED
        </button>
      </div>
    </aside>
  );
}

