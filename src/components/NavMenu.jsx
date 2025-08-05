import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function NavMen() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const secciones = [
    { texto: "inicio", icono: "ic:round-home" },
    { texto: "productos", icono: "mdi:hanger" }, // ícono de ropa en móvil
    { texto: "entregas", icono: "mdi:truck-delivery" },
    { texto: "pagos", icono: "mdi:credit-card-outline" },
    { texto: "sobre mi", icono: "mdi:account-circle-outline" }
  ];

  const redes = [
    { nombre: "mdi:instagram", estilo: "hover:text-fuchsia-500" },
    { nombre: "ic:baseline-facebook", estilo: "hover:text-blue-600" },
    { nombre: "ic:baseline-whatsapp", estilo: "hover:text-green-500" },
    { nombre: "mdi:gmail", estilo: "hover:text-red-600" }
  ];

  function capitalizar(frase) {
    return frase
      .split(" ")
      .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <header className="fixed  w-full lg:w-auto lg:right-[50px] lg:left-[50px] h-[55px] bg-white text-black flex items-center justify-between px-5 border-b border-green-300 z-50">

      {/* Hamburguesa (solo mobile/tablet) */}
      <button
        onClick={() => setMenuAbierto(true)}
        className="text-3xl lg:hidden"
      >
        <Icon icon="mdi:menu" />
      </button>

      {/* Logo (derecha en mobile, izquierda en desktop) */}
      <a href="/" className="shrink-0 flex items-center order-2 lg:order-1">
        <img src="/isotipo.png" alt="logo-y2kat" className="w-[45px]" />
      </a>

      {/* Menú horizontal solo en desktop */}
      <nav className="hidden lg:flex flex-1 justify-center gap-6 order-2">
        {secciones.map((secc, i) => (
          <a
            key={i}
            href={`#${secc.texto.replace(/\s+/g, "")}`}
            className="text-base hover:text-orange-400 duration-300"
          >
            {capitalizar(secc.texto)}
          </a>
        ))}
      </nav>

      {/* Redes sociales en desktop */}
      <div className="hidden lg:flex gap-3 order-3">
        {redes.map((icono, i) => (
          <Icon
            key={i}
            icon={icono.nombre}
            className={`text-xl duration-300 ${icono.estilo}`}
          />
        ))}
      </div>

      {/* Menú lateral mobile/tablet */}
      {menuAbierto && (
        <div className="fixed inset-0 z-40 flex lg:hidden">

          {/* Menú lateral desde la izquierda */}
          <div className="w-2/3 max-w-[300px] bg-white h-full p-6 flex flex-col gap-4 shadow-lg animate-slide-in-left ">
            <div className="flex justify-end">
              <button onClick={() => setMenuAbierto(false)}>
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </div>

            {secciones.map((secc, i) => (
              <a
                key={i}
                href={`#${secc.texto.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-lg hover:text-orange-400 duration-300"
                onClick={() => setMenuAbierto(false)}
              >
                <Icon icon={secc.icono} className="text-xl" />
                {capitalizar(secc.texto)}
              </a>
            ))}

            <div className="mt-auto flex gap-4 pt-6 border-t border-gray-200 justify-center">
              {redes.map((icono, i) => (
                <Icon
                  key={i}
                  icon={icono.nombre}
                  className={`text-2xl duration-300 ${icono.estilo}`}
                />
              ))}
            </div>
          </div>

          {/* Fondo oscuro derecho */}
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setMenuAbierto(false)}
          />
        </div>
      )}
    </header>
  );
}
