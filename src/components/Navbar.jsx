import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 bg-opacity-95 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-gray-900 text-xl font-bold tracking-wide">Leonardo Valencia</div>
        <ul className="flex space-x-4 text-gray-800 text-sm font-medium">
          <li>
            <a
              href="#inicio"
              className="px-3 py-1 rounded-md bg-white shadow-sm hover:bg-blue-100 hover:text-blue-600 transition duration-200"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobremi"
              className="px-3 py-1 rounded-md bg-white shadow-sm hover:bg-blue-100 hover:text-blue-600 transition duration-200"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#portafolio"
              className="px-3 py-1 rounded-md bg-white shadow-sm hover:bg-blue-100 hover:text-blue-600 transition duration-200"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#habilidades"
              className="px-3 py-1 rounded-md bg-white shadow-sm hover:bg-blue-100 hover:text-blue-600 transition duration-200"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="px-3 py-1 rounded-md bg-white shadow-sm hover:bg-blue-100 hover:text-blue-600 transition duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
