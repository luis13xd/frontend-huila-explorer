import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800 px-6 lg:px-20 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXTO + INFO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1128] mb-6">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Estamos aquí para ayudarte a impulsar tu negocio. Puedes escribirnos
            directamente o llenar el formulario, y nuestro equipo se pondrá en
            contacto contigo lo antes posible.
          </p>

          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-6 mt-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition">
              <i className="ri-phone-fill text-[#0a1128] text-2xl"></i>
              <div>
                <h3 className="font-semibold text-gray-900">Teléfono</h3>
                <p className="text-gray-600 text-sm">+57 313 8687 180</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition">
              <i className="ri-mail-fill text-[#0a1128] text-2xl"></i>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Correo electrónico
                </h3>
                <p className="text-gray-600 text-sm">
                  contacto@huilaexplorer.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition">
              <i className="ri-map-pin-fill text-[#0a1128] text-2xl"></i>
              <div>
                <h3 className="font-semibold text-gray-900">Ubicación</h3>
                <p className="text-gray-600 text-sm">Huila, Colombia</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-[#0a1128] mb-6">Escríbenos</h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0a1128] focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0a1128] focus:outline-none"
                placeholder="Tu correo electrónico"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                rows="4"
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0a1128] focus:outline-none"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0a1128] text-white py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      {/* MAPA DE ALGEcIRAS, HUILA */}
      <div className="mt-16">
        <h2 className="text-center text-2xl font-bold text-[#0a1128] mb-6">
          Estamos Ubicados en Algeciras, Huila
        </h2>

        <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border">
          <iframe
            title="Algeciras Huila"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.480513706616!2d-75.31426402534566!3d2.5234047572827546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2f9e9bdfaeefcf%3A0x74da6db9ce6ec65c!2sAlgeciras%2C%20Huila!5e0!3m2!1ses!2sco!4v1706654329122!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
