import React from 'react';
import { HelpCircle } from 'lucide-react';

export function FAQ() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6" id="faq">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
      </div>

      {/* Basic Understanding */}
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Understanding Zakat</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What is Zakat?</h4>
              <p className="text-gray-600">
                Zakat is one of the five pillars of Islam. It's an annual obligation for Muslims who own wealth above a certain threshold (Nisab) to give 2.5% of their eligible wealth to those in need.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Why is Zakat important?</h4>
              <p className="text-gray-600">
                Zakat purifies wealth, helps establish social justice, and supports those in need within the community. It's a form of worship that combines spiritual growth with social responsibility.
              </p>
            </div>
          </div>
        </div>

        {/* Calculation Related */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Calculation & Eligibility</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">How is Nisab calculated?</h4>
              <p className="text-gray-600">
                Nisab is calculated based on either the value of 85 grams of gold or 595 grams of silver. If your eligible assets exceed either of these values, you are required to pay Zakat.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What assets are subject to Zakat?</h4>
              <p className="text-gray-600">
                Zakat is generally payable on:
                • Gold and silver
                • Cash and bank balances
                • Investments and stocks
                • Business inventory and profits
                • Rental property income
                Personal items like your primary residence, vehicle, and household items are typically exempt.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What debts can be deducted?</h4>
              <p className="text-gray-600">
                You can deduct immediate and short-term debts that are due. Long-term debts like mortgages are typically handled differently - consult a scholar for specific guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Timing & Payment */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Timing & Distribution</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">When should I pay my Zakat?</h4>
              <p className="text-gray-600">
                Zakat is paid annually once your wealth has been held for one lunar year (Hawl). While many Muslims choose to pay during Ramadan for additional blessings, it can be paid at any time during the year.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Who can receive Zakat?</h4>
              <p className="text-gray-600">
                The Quran specifies eight categories of eligible recipients:
                • The poor (Al-Fuqara)
                • The needy (Al-Masakin)
                • Zakat collectors (Al-Amelin)
                • Those whose hearts are to be reconciled (Al-Mu'allafat-ul-Qulub)
                • Freeing of slaves (Ar-Riqab)
                • Those in debt (Al-Gharimin)
                • In the cause of Allah (Fi Sabilillah)
                • The wayfarer (Ibn As-Sabil)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
        <p className="text-sm text-emerald-800">
          Note: While this calculator provides a general guideline, it's recommended to consult with a qualified Islamic scholar for specific rulings regarding your Zakat obligations.
        </p>
      </div>
    </section>
  );
}