import React, { useEffect, useState } from "react";

const bgImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1650&q=80";

const Inicio = () => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    setTimeout(() => setMostrar(true), 100); // pequeño delay para que la animación se note
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-white text-center px-4"
      id="inicio"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`bg-black bg-opacity-60 p-8 rounded-xl shadow-lg max-w-xl transform transition-all duration-1000 ease-out ${
          mostrar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold mb-4">Leonardo Valencia – Mi Sitio Web Personal</h1>
        <p className="text-lg">Estudiante de la Universidad Técnica de Manabí</p>
        <p className="text-blue-300 mt-2">Instagram: @leo.valencia0803</p>
      </div>
    </section>
  );
};

export default Inicio;
