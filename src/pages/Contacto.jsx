import React from "react";

const bgImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1650&q=80";

const Contacto = () => {
  return (
    <section
      className="p-8 text-white"
      id="contacto"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contacto</h2>

        <div className="mb-6 text-center space-y-1">
          <p>Número de teléfono: <span className="font-medium">0980748245</span></p>
          <p>Correo electrónico: <span className="font-medium">valenciadavid031@gmail.com</span></p>
          <p>Redes Sociales: <span className="font-medium">@leo.valencia0803</span></p>
        </div>

        <form
          action="https://formspree.io/f/xpwrrweg"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              rows="4"
              required
              className="w-full p-2 rounded bg-white text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;