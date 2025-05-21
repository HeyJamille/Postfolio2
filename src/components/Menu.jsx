import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactClick = () => {
    setIsMenuOpen(false);
    window.location.href = '#contact';
  };

  return (
    <nav className='fixed w-full z-50 py-5 px-8 flex flex-row justify-between transition-all duration-300'>
      {/* Título */}
      <a href="#" className="text-white text-2xl lg:text-3xl font-bold tracking-wide">
        Dev_<span className="text-[#cd51ff]">Jamille</span>
      </a>

      {/* Mobile Button */}
      <button className="text-white text-3xl z-40 md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <MdClose className="w-10 h-10" /> : <IoIosMenu className="w-10 h-10" />}
      </button>
      

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-white text-lg font-medium items-center">
        <MenuItem id="#about" text="Sobre Mim" />
        <MenuItem id="#projects" text="Projetos" />
        <MenuItem id="#skills" text="Habilidades" />
        {/* Botão Contato desktop */}
        <li>
          <button
            onClick={handleContactClick}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#cd51ff] to-[#7f5eff] text-white font-semibold shadow-md
              hover:scale-105 hover:shadow-xl transition-transform duration-300
              focus:outline-none focus:ring-2 focus:ring-[#cd51ff] focus:ring-offset-2"
          >
            Contato
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#171717] flex flex-col items-center justify-center gap-10 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <MenuItem id="#about" text="Sobre Mim" onClick={toggleMenu} />
        <MenuItem id="#projects" text="Projetos" onClick={toggleMenu} />
        <MenuItem id="#skills" text="Habilidades" onClick={toggleMenu} />
        {/* Botão Contato mobile */}
        <button
          onClick={handleContactClick}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#cd51ff] to-[#7f5eff] text-white font-semibold shadow-md
            hover:scale-105 hover:shadow-xl transition-transform duration-300
            focus:outline-none focus:ring-2 focus:ring-[#cd51ff] focus:ring-offset-2"
        >
          Entrar em Contato
        </button>
      </div>
    </nav>
  );
};

const MenuItem = ({ text, id, onClick }) => (
  <li className="relative group list-none">
    <a href={id} className="text-white text-[20px]" onClick={onClick}>
      {text}
    </a>
    <div className="w-full h-0.5 bg-[#cd51ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </li>
);

export default Menu;
