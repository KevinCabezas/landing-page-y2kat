import { useRef, useState } from "react";
import { Icon } from '@iconify/react';
import FormComprar from "./FormComprar";

const Detalles = ({ onClose, data }) => {
  const form = useRef();
  const [mensaje, setMensaje] = useState("");
  const [dataDetalles, setDataDetalles] = useState(data.detalles)

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? dataDetalles.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === dataDetalles.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="fixed top-10 inset-0 bg-fondoUno flex flex-col justify-center items-center z-50 pt-70">
      <a href="#productos" className="flex ">
        <button onClick={onClose}>
          <Icon icon="mdi:close" className="text-2xl" />
        </button>
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-x-5">

        <div className="relative space-x- w-72 max-w-md mx-auto overflow-hidden bg-orange-200 p-5 shadow ron ">
          <img
            src={dataDetalles[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-64 object-contain rounded"
          />

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 py-1 text-white/50"
          >
            <Icon icon="weui:arrow-outlined" className="rotate-180" width={50} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 text-white/50"
          >
            <Icon icon="weui:arrow-outlined" width={50} />
          </button>
        </div>
        <FormComprar onClose={onClose} data={data} />
      </div>
    </div>
  );
};

export default Detalles;
