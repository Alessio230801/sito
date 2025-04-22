import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Chi Siamo</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-gray-700 leading-relaxed">
              Siamo un'azienda specializzata nella vendita, installazione e assistenza tecnica di condizionatori e caldaie, 
              con anni di esperienza nel settore della climatizzazione domestica e industriale.
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Mettiamo al centro del nostro lavoro la soddisfazione del cliente, offrendo soluzioni efficienti, 
              tecnologiche e su misura per ogni esigenza. Che si tratti di climatizzazione estiva o riscaldamento invernale, 
              il nostro team di tecnici qualificati è pronto a garantire interventi rapidi e professionali, 
              sia per impianti domestici che commerciali.
            </p>
            
            <p className="mb-8 text-gray-700 leading-relaxed">
              Utilizziamo solo prodotti delle migliori marche come il marchio partner Lamborghini Clima.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Professionisti Certificati</h3>
              </div>
              <p className="text-gray-600">
                Il nostro team è formato da tecnici qualificati e certificati, pronti ad offrire un servizio di alta qualità.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Soluzioni Personalizzate</h3>
              </div>
              <p className="text-gray-600">
                Ogni cliente ha esigenze diverse. Offriamo soluzioni su misura per garantire comfort e risparmio energetico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;