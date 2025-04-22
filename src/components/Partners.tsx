import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">I Nostri Partner</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Collaboriamo con i migliori marchi del settore per garantire qualità e affidabilità in tutti i nostri servizi.
          </p>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="bg-gray-50 py-8 px-12 rounded-lg shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lamborghini Clima</h3>
              <p className="text-gray-600">Partner Ufficiale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;