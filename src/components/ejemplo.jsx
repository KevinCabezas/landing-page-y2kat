import React from 'react';

const CardSection = () => {
  // Datos de ejemplo para las cards
  const cards = [
    { id: 1, title: 'Card 1', bgColor: 'bg-blue-500', content: 'Contenido de la card 1' },
    { id: 2, title: 'Card 2', bgColor: 'bg-green-500', content: 'Contenido de la card 2' },
    { id: 3, title: 'Card 3', bgColor: 'bg-yellow-500', content: 'Contenido de la card 3' },
    { id: 4, title: 'Card 4', bgColor: 'bg-red-500', content: 'Contenido de la card 4' },
    { id: 5, title: 'Card 5', bgColor: 'bg-purple-500', content: 'Contenido de la card 5' },
    { id: 6, title: 'Card 6', bgColor: 'bg-pink-500', content: 'Contenido de la card 6' },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Sección de Cards Responsive</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`${card.bgColor} rounded-lg shadow-lg p-6 text-white transition-transform duration-300 hover:scale-105`}
          >
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p>{card.content}</p>
            <button className="mt-4 px-4 py-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition">
              Ver más
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;