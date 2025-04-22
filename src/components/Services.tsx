import React from 'react';
import { Snowflake, Flame, PenTool as Tool, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Snowflake size={40} className="text-blue-500" />,
    title: "Climatizzazione",
    description: "Vendita e installazione di condizionatori e sistemi di climatizzazione per ambienti domestici e commerciali."
  },
  {
    id: 2,
    icon: <Flame size={40} className="text-orange-500" />,
    title: "Riscaldamento",
    description: "Caldaie e sistemi di riscaldamento efficienti per garantire il massimo comfort nella stagione invernale."
  },
  {
    id: 3,
    icon: <Tool size={40} className="text-gray-600" />,
    title: "Assistenza Tecnica",
    description: "Servizio di manutenzione e riparazione per tutti i tipi di impianti di climatizzazione e riscaldamento."
  },
  {
    id: 4,
    icon: <ShieldCheck size={40} className="text-green-500" />,
    title: "Garanzia e Supporto",
    description: "Prodotti garantiti e supporto tecnico continuo per la massima tranquillità del cliente."
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">I Nostri Servizi</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Offriamo soluzioni complete per la climatizzazione e il riscaldamento, dalla vendita all'assistenza tecnica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;