import React from "react";
import portafolioImage from "../assets/Portafolio.png";

const bgImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1650&q=80";


const Portafolio = () => {
  return (
    <section
      className="p-8 text-white"
      id="portafolio"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">Portafolio</h2>
          <p className="text-justify leading-relaxed">
            Mis proyectos actuales están completamente orientados al ámbito gastronómico, ya que estoy próximo a
            graduarme. Estos incluyen platos desarrollados junto a mi grupo de compañeros y mi persona.
          </p>
        </div>
        <div>
          <img
            src={portafolioImage}
            alt="Portafolio gastronómico"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
