import React from 'react';
import { useZakat } from '../context/ZakatContext';

interface AssetInputProps {
  label: string;
  type: string;
  description: string;
  isDebt?: boolean;
}

export function AssetInput({ label, type, description, isDebt = false }: AssetInputProps) {
  const { updateAsset, assets } = useZakat();

  return (
    <div className="relative">
      <label
        htmlFor={type}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          name={type}
          id={type}
          className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
          value={assets[type] || ''}
          onChange={(e) => updateAsset(type, parseFloat(e.target.value) || 0)}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">USD</span>
        </div>
      </div>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
}