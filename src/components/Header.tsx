import React from 'react';
import { Moon, Scale } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">Zakat Calculator</h1>
          </div>
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Toggle dark mode"
          >
            <Moon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}