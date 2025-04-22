import React from 'react';
import { Phone, Mail, MapPin, Facebook, ExternalLink } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contatti" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contatti</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Informazioni di Contatto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Telefono</p>
                    <p className="text-gray-600">0761 771548</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">2mnextenergy@gmail.com</p>
                    <p className="text-gray-600 text-sm mt-1">PEC: minella.marcello@pec.it</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Indirizzo</p>
                    <p className="text-gray-600">Via dei Calafati, 13/C19<br />01028 Orte VT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Facebook className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">Social</p>
                    <div className="space-y-2 mt-1">
                      <a 
                        href="https://www.facebook.com/people/2M-NEXT-Energy/61557936797051/#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        Facebook <ExternalLink className="ml-1" size={14} />
                      </a>
                      <a 
                        href="https://www.tiktok.com/@2m.next.energy?is_from_webapp=1&sender_device=pc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        TikTok <ExternalLink className="ml-1" size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Orari di Apertura</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Lunedì - Venerdì:</span>
                  <span className="text-gray-600">9:00 - 13:00, 16:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sabato:</span>
                  <span className="text-gray-600">Chiuso</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domenica:</span>
                  <span className="text-gray-600">Chiuso</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Servizio Clienti</h3>
                <p className="text-gray-600 mb-4">
                  Per informazioni sui nostri servizi o per richiedere un preventivo gratuito,
                  non esitate a contattarci.
                </p>
                <a 
                  href="tel:0761771548" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Chiama Ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;