import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://instagram.com/leo.valencia0803"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-pink-500 hover:bg-pink-100 rounded-full p-3 shadow-md transition-transform transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://x.com/Leonard13118041?t=a1wi71p8wr5M7qtLPAsK_Q&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-400 hover:bg-blue-100 rounded-full p-3 shadow-md transition-transform transform hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1AXYkdApUE/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-blue-100 rounded-full p-3 shadow-md transition-transform transform hover:scale-110"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/david-valencia-80980736b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 hover:bg-blue-100 rounded-full p-3 shadow-md transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Leonardo Valencia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
