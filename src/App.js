import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Portafolio from "./pages/Portafolio";
import Habilidades from "./pages/Habilidades";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <Navbar />
      <Inicio />
      <SobreMi />
      <Portafolio />
      <Habilidades />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
