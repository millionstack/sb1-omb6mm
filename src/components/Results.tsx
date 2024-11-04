import React from 'react';
import { useZakat } from '../context/ZakatContext';
import { ArrowRight } from 'lucide-react';

export function Results() {
  const { calculateTotal, calculateZakat } = useZakat();
  const total = calculateTotal();
  const zakatDue = calculateZakat();
  const nisabThreshold = 5000; // Example threshold, should be dynamic based on gold price

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600">Total Eligible Assets:</span>
          <span className="text-lg font-semibold">${total.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
          <span className="text-emerald-800">Zakat Due (2.5%):</span>
          <span className="text-lg font-bold text-emerald-600">
            ${zakatDue.toLocaleString()}
          </span>
        </div>

        {total < nisabThreshold && (
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800 text-sm">
              Your total wealth is below the Nisab threshold. Zakat may not be obligatory.
            </p>
          </div>
        )}

        <button className="w-full mt-4 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
          Generate Detailed Report
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}