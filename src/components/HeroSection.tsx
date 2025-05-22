import React from 'react';
import { Thermometer, Fan } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative pt-20 lg:pt-0">
      <div 
        className="text-white min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("/images/sfondo.png.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 bg-black/50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6 gap-4">
              <Thermometer size={36} className="text-yellow-300" />
              <Fan size={36} className="text-yellow-300" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Soluzioni di Climatizzazione e Riscaldamento
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Vendita, installazione e assistenza tecnica di condizionatori e caldaie per ambienti domestici e industriali
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#chi-siamo" 
                className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 transition-colors duration-300"
              >
                Scopri di Più
              </a>
              <a 
                href="#contatti" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-800 transition-colors duration-300"
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;