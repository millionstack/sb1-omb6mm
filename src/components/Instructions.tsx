import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

export function Instructions() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">How to Use This Calculator</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Step 1: Enter Your Assets</h3>
            <p className="text-gray-600">Input the current market value of your gold, silver, cash, and investments.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Step 2: Add Business Assets</h3>
            <p className="text-gray-600">Include any business assets that are eligible for Zakat calculation.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Step 3: Deduct Eligible Debts</h3>
            <p className="text-gray-600">Enter any debts that should be subtracted from your total assets.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-gray-900">Step 4: Review Your Results</h3>
            <p className="text-gray-600">The calculator will show your total eligible assets and Zakat due amount.</p>
          </div>
        </div>
      </div>
    </section>
  );
}