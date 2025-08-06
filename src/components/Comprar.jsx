import { useRef , useState} from "react";
import { Icon } from '@iconify/react';

const Comprar = ({ onClose, data }) => {
  const form = useRef();
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsApp = () => {
    const numero = "5491141460711"; // Tu número sin + ni espacios
    const texto = `Hola, quiero comprar "${data?.titulo}" por ${data?.precio}.\n\nComentario: ${mensaje}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };
  return (
    <div className="fixed top-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pt-70">
      <form
        ref={form}
        className="w-80 bg-white p-5 rounded shadow space-y-4 text-black relative"
        onSubmit={(e) => {
          e.preventDefault();
          // podés hacer algo acá (enviarEmail, etc.)
          enviarWhatsApp(); // Enviamos por WhatsApp
          onClose(); // cerrar modal después de enviar
        }}
      >

        <h3 className="text-xl font-semibold">Comprar</h3>
        <span className="text-emerald-600">Nombre: </span>
        <span className="">{data?.titulo}</span> <br />
        <span className="text-emerald-600">Precio: </span>
        <span className="">{data?.precio}</span>


        <textarea
          className="w-full px-2 py-1 border border-emerald-600 rounded-sm focus:outline-none"
           placeholder="Agregar comentario"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <div className="space-x-2 flex">
          <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded-sm flex items-center gap-2">
            Enviar pedido
            <Icon icon="ic:baseline-whatsapp" width={25}/>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-sm text-white bg-black/85 hover:bg-orange-400"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comprar;
