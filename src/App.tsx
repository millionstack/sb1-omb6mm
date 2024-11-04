import React from 'react';
import { Calculator } from './components/Calculator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ZakatProvider } from './context/ZakatContext';

function App() {
  return (
    <ZakatProvider>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Calculator />
        </main>
        <Footer />
      </div>
    </ZakatProvider>
  );
}

export default App;