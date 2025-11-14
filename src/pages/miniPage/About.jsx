

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        
        {/* TEXTO */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Impulsamos tu <span className="text-blue-700">crecimiento digital</span>
          </h1>
          <p className="mt-5 text-gray-600">
            En Huila Explorer Marketing transformamos ideas en resultados.
            Combinamos tecnología, creatividad y estrategia para impulsar a
            emprendedores, negocios locales y empresas hacia un crecimiento real
            en Internet.
          </p>
          <p className="mt-3 font-medium text-gray-700">
            Nuestro enfoque es simple: ofrecer soluciones honestas, efectivas y modernas.
          </p>
        </div>

        {/* IMAGEN */}
        <div className="md:w-1/2">
          <img 
            src=''
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* MISIÓN – VISIÓN – VALORES */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* MISIÓN */}
          <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <img 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlB6kO_ZFOc93K0HT0NpQlFHLEAkI6Uu73JfFN9xvVGOiBqtrAcg9Y79B70Lb_jTDRyqU&usqp=CAU' 
              className="rounded-lg h-40 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Nuestra Misión</h3>
            <p className="text-sm text-gray-600">
              Impulsar negocios con estrategias de marketing digital y
              soluciones tecnológicas modernas, accesibles y eficientes.
            </p>
          </div>

          {/* VISIÓN */}
          <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <img 
              src='https://recfaces.com/wp-content/uploads/2021/06/la-vision-por-computadora-scaled.jpg'
              className="rounded-lg h-40 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Nuestra Visión</h3>
            <p className="text-sm text-gray-600">
              Ser la agencia líder en el sur del país, brindando innovación
              digital a empresas, marcas y emprendedores que buscan destacar.
            </p>
          </div>

          {/* VALORES */}
          <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Nuestros Valores</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Compromiso con tus resultados</li>
              <li>✔ Transparencia y honestidad</li>
              <li>✔ Innovación constante</li>
              <li>✔ Diseño y tecnología con propósito</li>
              <li>✔ Acompañamiento cercano</li>
              <li>✔ Brindamos ideas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-blue-900 text-white rounded-2xl p-10 md:p-16 text-center shadow-lg">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Porque no solo creamos diseños o estrategias.  
            Creamos **experiencias**, **soluciones reales** y **crecimiento medible**.  
            Sabemos lo que un negocio necesita para ser visible y escalar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="text-xl font-semibold">+3 Años</h3>
              <p className="text-sm mt-2">Experiencia impulsando marcas</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Tecnología</h3>
              <p className="text-sm mt-2">Desarrollo moderno y eficiente</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Resultados</h3>
              <p className="text-sm mt-2">Estrategias enfocadas en crecer</p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
