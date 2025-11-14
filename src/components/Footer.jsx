export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* LOGO + DESCRIPCIÓN */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Huila Explorer Marketing
          </h2>
          <p className="mt-3 text-sm">
            Impulsamos negocios con marketing digital, desarrollo a la medida y
            soluciones tecnológicas que hacen crecer tu marca.
          </p>
        </div>

        {/* SERVICIOS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Marketing Digital</li>
            <li className="hover:text-blue-400 cursor-pointer">Desarrollo Web</li>
            <li className="hover:text-blue-400 cursor-pointer">Chatbots IA</li>
            <li className="hover:text-blue-400 cursor-pointer">Gestión de Redes Sociales</li>
            <li className="hover:text-blue-400 cursor-pointer">Software a la Medida</li>
          </ul>
        </div>

        {/* LINKS RÁPIDOS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Inicio</li>
            <li className="hover:text-blue-400 cursor-pointer">Explorar Negocios</li>
            <li className="hover:text-blue-400 cursor-pointer">Sobre Nosotros</li>
            <li className="hover:text-blue-400 cursor-pointer">Contáctanos</li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-blue-400 text-xl">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="#" className="hover:text-blue-400 text-xl">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="#" className="hover:text-blue-400 text-xl">
              <i className="ri-tiktok-fill"></i>
            </a>
            <a href="#" className="hover:text-blue-400 text-xl">
              <i className="ri-mail-fill"></i>
            </a>
          </div>
        </div>

      </div>

      <hr className="border-gray-700 mt-8" />

      {/* COPYRIGHT */}
      <div className="text-center text-sm mt-4">
        © {year} Huila Explorer Marketing — Todos los derechos reservados.
      </div>
    </footer>
  );
};
