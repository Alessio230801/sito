import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">2M NEXT ENERGY</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Vendita, installazione e assistenza tecnica di condizionatori e caldaie 
              per ambienti domestici e industriali.
            </p>
            
            <div className="mt-8 flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/people/2M-NEXT-Energy/61557936797051/#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="https://www.tiktok.com/@2m.next.energy?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} 2M NEXT ENERGY. Tutti i diritti riservati.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="mr-2">Torna su</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;