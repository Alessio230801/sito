import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      id: 1,
      src: "src/risorse/foto felici.png",
      alt: "Negozio 2M NEXT ENERGY - Esterno",
      caption: "La nostra sede"
    },
    {
      id: 2,
      src: "src/risorse/zio comand.png",
      alt: "Negozio 2M NEXT ENERGY - Interno",
      caption: "Il nostro showroom"
    },
    {
      id: 3,
      src: "src/risorse/locandina png.png",
      alt: "Biglietto da visita 2M NEXT ENERGY",
      caption: "Biglietto da visita"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">La Nostra Sede</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md bg-white transform transition duration-300 hover:shadow-xl">
              <div className="relative pt-[75%]">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="absolute top-0 left-0 w-full h-full object-contain p-2"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-medium text-center text-gray-800">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery