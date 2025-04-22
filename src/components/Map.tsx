import React from 'react';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dove Siamo</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            <MapPin className="inline-block mr-2" size={18} />
            Via dei Calafati, 13/C19, 01028 Orte VT
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.2985288206494!2d12.377825!3d42.340028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132eff9cba6471e5%3A0x3a80fe91dc000000!2sVia%20dei%20Calafati%2C%2013%2C%2001028%20Orte%20VT!5e0!3m2!1sit!2sit!4v1713456983200!5m2!1sit!2sit" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="2M NEXT ENERGY location"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;