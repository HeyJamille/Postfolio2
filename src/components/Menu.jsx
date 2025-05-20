import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactClick = () => {
    setIsMenuOpen(false);
    window.location.href = '#contact';
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : ''
    }`}>
      {/* Título */}
      <a href="#" className="text-white text-2xl font-bold tracking-wide">
        dev<span className="text-[#cd51ff]">_jamille</span>
      </a>

      {/* Mobile Button */}
      <button className="text-white text-3xl md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <MdClose className="w-8 h-8" /> : <IoIosMenu className="w-8 h-8" />}
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
            Entrar em Contato
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#171717] flex flex-col items-center justify-center gap-10 transition-transform duration-500 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
