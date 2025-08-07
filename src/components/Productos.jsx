import { Icon } from '@iconify/react';
import { useState } from 'react';
import Comprar from "./Comprar";
import Detalles from './Detalles';

export default function Productos() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalDetalle, setMostrarModalDetalle] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);
  
  const abrirModalDetalle = () => setMostrarModalDetalle(true);
  const cerrarModalDetalle = () => setMostrarModalDetalle(false);

  const cards = [
    {
      imagen: "/campera.png",
      detalles: ["/campera.png", "/camisa.png", "/vestido.png", "/jardinero.png"],
      titulo: "Campera",
      precio: "$10.000,00",
      estado: "4.5",
    },
    {
      imagen: "/camisa.png",
      detalles: ["/campera.png", "/camisa.png", "/vestido.png", "/jardinero.png"],
      titulo: "Camisa",
      precio: "$10.000,00",
      estado: "4.5",
    },
    {
      imagen: "/vestido.png",
      detalles: ["/campera.png", "/camisa.png", "/vestido.png", "/jardinero.png"],
      titulo: "E-commers-3",
      precio: "$10.000,00",
      estado: "4.5",
    },
    {
      imagen: "/jardinero.png",
      detalles: ["/campera.png", "/camisa.png", "/vestido.png", "/jardinero.png"],
      titulo: "Jardinero",
      precio: "$16.000,00",
      estado: "5.0",
    },
    {
      imagen: "/campera.png",
      detalles: ["/campera.png", "/camisa.png", "/vestido.png", "/jardinero.png"],
      titulo: "E-commers-4",
      precio: "$10.000,00",
      estado: "4.5",
    },
    {
      imagen: "/campera.png",
      detalles: ["/campera.png", "/camisa.png", "/vestido.png", "/jardinero.png"],
      titulo: "E-commers-4",
      precio: "$10.000,00",
      estado: "3.5",
    }
  ]


  return (
    <section
      id="productos"
      className="container mx-auto px-6 lg:px-3  pt-[70px] space-y-5 h-[100vh] overflow-y-auto" // Añadí overflow-y-auto
    >
      <h2 className="text-orange-400 text-3xl border-b border-green-300 border-spacing-2 w-ful flex justify-center">Productos</h2>
      <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 `}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-red-5 text-black flex flex-col md:flex-row gap-2 w-full max-w-4xl mx-auto hover:scale-105 duration-500 ease-in-out"
          >
            {/* Cambios solo en este div y su imagen */}
            <div className="bg-emerald-100/20 overflow-hidden shadow-md rounded-sm flex-shrink-0 md:w-1/2 h-auto lg:h-[200px]">
              <img
                src={card.imagen}
                alt={card.titulo}
                className="w-full h-full object-cover" // Cambios aquí
              />
            </div>
            <div className="flex flex-col gap-[5px] w-full max-w-md mx-auto">
              <div className="bg-emerald-100/20 p-2 rounded-sm overflow-hidden shadow-md space-y-1">
                <h3 className="font-semibold text-base md:text-lg lg:text-xl">
                  {card.titulo}
                </h3>
                <p className="text-sm md:text-base lg:text-lg">{card.precio}</p>
                <div className="flex gap-1 items-center">
                  <Icon icon="tabler:star-filled" className="text-yellow-500 w-4 md:w-5 lg:w-6" />
                  <p className="text-sm md:text-base lg:text-lg">{card.estado}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-1 w-full">
                <button className="bg-orange-100/20 text-orange-600 border border-orange-300 rounded-sm w-full px-3 py-2 shadow-md
                  hover:shadow-none hover:bg-orange-400 hover:text-white transition"
                  onClick={() => {
                    setProductoSeleccionado(card);
                    abrirModalDetalle();
                  }}
                >
                  Ver Más
                </button>
                <button
                  className="bg-green-100/20 text-green-600 border border-green-300 rounded-sm w-full px-3 py-2 shadow-md
                   hover:shadow-none hover:bg-green-400 hover:text-white transition"
                  onClick={() => {
                    setProductoSeleccionado(card);
                    abrirModal();
                  }}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {mostrarModal && <Comprar onClose={cerrarModal} data={productoSeleccionado} />}
      {mostrarModalDetalle && <Detalles onClose={cerrarModalDetalle} data={productoSeleccionado} />}
    </section>
  );
}
