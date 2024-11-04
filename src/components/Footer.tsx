import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500" />
            <p className="text-gray-600">
              Made with love for the Muslim Ummah
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
            <a href="#" className="hover:text-emerald-600">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600">Terms of Use</a>
          </nav>
          <p className="text-sm text-gray-500 text-center max-w-2xl">
            This calculator is for guidance purposes only. Please consult with a qualified scholar
            for specific rulings regarding your Zakat obligations. Values are calculated based on
            current market rates and may vary.
          </p>
        </div>
      </div>
    </footer>
  );
}