
export default function Incio() {

  return (
    <section
      id="inicio"
      className="pt-[70px] w-full h-[95vh] lg:h-[100vh] flex items-center justify-end px-1 lg:px-[50px] pb-8"
    >
      <div
        className="w-full h-full bg-cover bg-center relative flex justify-center "
        style={{ backgroundImage: "url('/portada.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>


        <div className="relative z-10 text-white p-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-orange-400 font-medium mb-4">Ropa Vintage</h1>
          <p className="mb-4 text-2xl text-center">
            La moda vuelve.<br className="block md:hidden" />
            Vos la llevás primero
          </p>
          <a href="#productos">
            <button className="text-green-400 w-40 px-4 py-2 mt-52 border border-green-400 rounded hover:bg-green-400 hover:border-none hover:text-white">Ver Productos</button>
          </a>
        </div>
      </div>
    </section>

  )
}