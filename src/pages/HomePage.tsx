import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Partners from '../components/Partners';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';
import CompanyBar from '../components/CompanyBar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = '2M NEXT ENERGY - Condizionatori e Caldaie Orte';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutUs />
        <Services />
        <Gallery />
        <Partners />
        <ContactInfo />
        <Map />
        <CompanyBar />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;