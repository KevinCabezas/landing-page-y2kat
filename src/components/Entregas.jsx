import { Icon } from '@iconify/react';

export default function Entregas() {

  const cards = [
    { 
      titulo: "Cómo adquirir el producto ", 
      parrafo: "algo", 
      mensaje: "Hola, quiero mas informacion sobre como puedo adquirir el producto, gracias"
    },
    { 
      titulo: "Cómo pagar el producto", 
      parrafo: "algo", 
      mensaje: "Hola, quiero mas informacion sobre como puedo pagar el producto, gracias"
    },
  ]

  const enviarWhatsApp = (texto) => {
    const numero = "5491141460711"; 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="metodos"
      className="container mx-auto px-4 py-8 h-screen pt-[70px] space-y-5"
    >
      <h2 className="text-orange-400 text-3xl border-b border-black border-spacing-2 flex justify-center">Detalles de Compra</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map((card, i) => (
          <div key={i} className="bg-orange-300 text-white p-3 rounded-sm flex  flex-col items-center ">
            <h3 className="text-xl font-semibold ">{card.titulo}</h3>
            <p>{card.parrafo}</p>
            <button
              className="bg-emerald-400 text-white px-4 py-2 rounded-sm flex items-center gap-2"
              onClick={() => enviarWhatsApp(card.mensaje) }
            >
              Más Info
              <Icon icon="ic:baseline-whatsapp" width={25} />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
