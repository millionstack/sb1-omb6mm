import React from 'react';
import { useZakat } from '../context/ZakatContext';
import { AssetInput } from './AssetInput';
import { Results } from './Results';
import { Info, BookOpen } from 'lucide-react';
import { Instructions } from './Instructions';
import { FAQ } from './FAQ';

export function Calculator() {
  const { calculateTotal } = useZakat();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Islamic Zakat Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate your Zakat accurately and easily with our Shariah-compliant calculator
        </p>
      </section>

      <Instructions />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-emerald-600">
          <h2 className="text-2xl font-semibold text-white">Calculate Your Zakat</h2>
          <p className="text-emerald-100 mt-2">
            Enter your assets below to calculate your Zakat obligation
          </p>
        </div>
        
        <div className="p-6">
          <div className="mb-8 p-4 bg-emerald-50 rounded-lg flex items-start gap-3">
            <Info className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-emerald-800">
              Zakat is calculated at 2.5% of your eligible wealth once it reaches the Nisab threshold
              (approximately the value of 85g of gold or 595g of silver).
            </p>
          </div>

          <div className="space-y-6">
            <AssetInput
              label="Gold"
              type="gold"
              description="Enter the current market value of your gold"
            />
            <AssetInput
              label="Silver"
              type="silver"
              description="Enter the current market value of your silver"
            />
            <AssetInput
              label="Cash"
              type="cash"
              description="Include bank accounts and cash on hand"
            />
            <AssetInput
              label="Investments"
              type="investments"
              description="Stocks, bonds, and other investments"
            />
            <AssetInput
              label="Business Assets"
              type="business"
              description="Net value of business assets eligible for Zakat"
            />
            <AssetInput
              label="Debts to Subtract"
              type="debts"
              description="Enter any debts that should be subtracted"
              isDebt
            />
          </div>

          <Results />
        </div>
      </div>

      <FAQ />
    </div>
  );
}