import React, { createContext, useContext, useState } from 'react';

interface ZakatContextType {
  assets: Record<string, number>;
  updateAsset: (type: string, value: number) => void;
  calculateTotal: () => number;
  calculateZakat: () => number;
}

const ZakatContext = createContext<ZakatContextType | undefined>(undefined);

export function ZakatProvider({ children }: { children: React.ReactNode }) {
  const [assets, setAssets] = useState<Record<string, number>>({});

  const updateAsset = (type: string, value: number) => {
    setAssets(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const calculateTotal = () => {
    const total = Object.entries(assets).reduce((sum, [type, value]) => {
      if (type === 'debts') {
        return sum - value;
      }
      return sum + value;
    }, 0);
    return Math.max(0, total);
  };

  const calculateZakat = () => {
    const total = calculateTotal();
    return total * 0.025; // 2.5% of total eligible assets
  };

  return (
    <ZakatContext.Provider value={{
      assets,
      updateAsset,
      calculateTotal,
      calculateZakat,
    }}>
      {children}
    </ZakatContext.Provider>
  );
}

export function useZakat() {
  const context = useContext(ZakatContext);
  if (context === undefined) {
    throw new Error('useZakat must be used within a ZakatProvider');
  }
  return context;
}