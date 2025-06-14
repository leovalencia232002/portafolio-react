import React from "react";
import habilidadesImage from "../assets/Habilidades.png";

const bgImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1650&q=80";


const Habilidades = () => {
  return (
    <section
      className="p-8 text-white"
      id="habilidades"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">Habilidades</h2>
          <ul className="list-disc list-inside space-y-2 text-justify">
            <li>Amplios conocimientos en cocina gastronómica profesional.</li>
            <li>Experiencia en atención al cliente por más de dos años.</li>
            <li>Capacidad para trabajar en equipo bajo presión.</li>
            <li>Experiencia en catering y organización de eventos.</li>
            <li>Conocimientos de contabilidad aplicada en negocios pequeños.</li>
          </ul>
        </div>
        <div>
          <img
            src={habilidadesImage}
            alt="Habilidades gastronómicas"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
