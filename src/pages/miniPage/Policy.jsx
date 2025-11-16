import React from "react";

const Policy = () => {
  return (
    <div className="bg-white text-gray-800 px-6 lg:px-20 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0a1128] mb-10">
          Política de Privacidad
        </h1>

        {/* Introducción */}
        <p className="text-lg text-gray-700 mb-6">
          En <span className="font-semibold text-[#0a1128]">Huila Explorer Marketing</span>, 
          valoramos y respetamos tu privacidad. Esta Política de Privacidad explica cómo
          recopilamos, utilizamos y protegemos tu información cuando utilizas nuestros servicios,
          sitio web o aplicaciones relacionadas.
        </p>

        {/* Secciones */}
        <div className="space-y-8">
          {/* Información que recopilamos */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0a1128] mb-3">
              1. Información que recopilamos
            </h2>
            <p className="text-gray-700">
              Podemos recopilar información personal como nombre, correo electrónico, número
              de teléfono, preferencias del usuario y otra información necesaria para ofrecer
              nuestros servicios. También recopilamos información técnica como dirección IP,
              tipo de dispositivo, navegador y datos de navegación.
            </p>
          </section>

          {/* Uso de la información */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0a1128] mb-3">
              2. Cómo usamos tu información
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
              <li>Personalizar contenido y recomendaciones.</li>
              <li>Procesar solicitudes, compras o suscripciones.</li>
              <li>Enviar notificaciones importantes o promocionales.</li>
            </ul>
          </section>

          {/* Protección */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0a1128] mb-3">
              3. Protección de tu información
            </h2>
            <p className="text-gray-700">
              Implementamos medidas de seguridad físicas, electrónicas y administrativas para
              proteger tus datos. Sin embargo, ningún sistema es completamente seguro, pero
              nos comprometemos a mantener tu información protegida.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0a1128] mb-3">
              4. Uso de cookies
            </h2>
            <p className="text-gray-700">
              Utilizamos cookies para mejorar el rendimiento del sitio, analizar tráfico y
              personalizar tu experiencia. Puedes desactivar las cookies desde la configuración
              de tu navegador.
            </p>
          </section>

          {/* Terceros */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0a1128] mb-3">
              5. Compartir información con terceros
            </h2>
            <p className="text-gray-700">
              No vendemos tu información personal. Podemos compartir datos únicamente con
              proveedores confiables que ayudan al funcionamiento de nuestros servicios,
              siempre bajo estrictos acuerdos de confidencialidad.
            </p>
          </section>

          {/* Derechos del usuario */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0a1128] mb-3">
              6. Tus derechos
            </h2>
            <p className="text-gray-700">
              Puedes solicitar acceso, corrección o eliminación de tu información personal
              enviando un mensaje a nuestro equipo de soporte.
            </p>
          </section>

          {/* Cambios */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0a1128] mb-3">
              7. Cambios en esta política
            </h2>
            <p className="text-gray-700">
              Esta política puede actualizarse ocasionalmente. Notificaremos cualquier cambio
              importante a través de nuestro sitio web o canales oficiales.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Policy;
