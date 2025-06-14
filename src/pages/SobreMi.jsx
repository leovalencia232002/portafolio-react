import React from "react";
import SobreMiImg from "../assets/SobreMi.png";

const bgImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1650&q=80";

const sectionStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const SobreMi = () => {
  return (
    <section className="p-8 text-white" id="sobremi" style={sectionStyle}>
      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">Sobre mí</h2>
          <p className="text-justify leading-relaxed">
            Me llamo Leonardo Valencia y tengo 22 años. Actualmente me encuentro en
            5to semestre en mi carrera. También estudio gastronomía como segunda
            carrera y trabajo en una cafetería. Tengo más de dos años de experiencia
            en atención al cliente y como ayudante de cocina. Graduado de un colegio
            de contadores, tengo bases de contabilidad que he puesto en práctica.
          </p>
        </div>
        <div>
          <img
            src={SobreMiImg}
            alt="Sobre mí - Leonardo Valencia"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
