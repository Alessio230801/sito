import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Logo */}
        <div className="w-12 h-12 ml-8">
          <img 
            src="/images/logo.png" 
            alt="Energy Logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden absolute left-16">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Center Text */}
        <div className="text-center flex-1">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider">2M NEXT ENERGY</h1>
        </div>
        
        {/* Right Logo */}
        <div className="w-32 h-12">
          <img 
            src="/images/logo-dark.png" 
            alt="Lamborghini Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 px-4 py-2 animate-fadeIn">
          <ul className="space-y-2 pb-3">
            <li><a href="#chi-siamo" className="block py-2 hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Chi Siamo</a></li>
            <li><a href="#gallery" className="block py-2 hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Galleria</a></li>
            <li><a href="#contatti" className="block py-2 hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>Contatti</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar