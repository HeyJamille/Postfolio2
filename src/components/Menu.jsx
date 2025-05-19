import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 
        ${isScrolled ? 'bg-black/70 backdrop-blur-md shadow-md' : 'bg-transparent'} 
        flex items-center justify-between md:px-16`}
    >
      {/* Logo */}
      <div className="text-[#cd51ff] font-bold text-2xl tracking-wider">
        Dev<span className="text-white">_Jamille</span>
      </div>

      {/* Botão menu mobile */}
      <button className="text-white md:hidden z-50" onClick={toggleMenu}>
        {isMenuOpen ? <MdClose className="h-8 w-8" /> : <IoIosMenu className="h-8 w-8" />}
      </button>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <ul className="flex gap-12">
          <MenuItem id="#about" text="Sobre Mim" />
          <MenuItem id="#projects" text="Projetos" />
          <MenuItem id="#skills" text="Habilidades" />
        </ul>
      </div>

      {/* Botão "Contato" no desktop */}
      <div className="hidden md:block">
        <a href="#contact" className="px-5 py-2 rounded-xl bg-[#cd51ff] text-white hover:brightness-110 transition">
          Contato
        </a>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 bg-[#171717] text-white transform transition-transform duration-500 ease-in-out 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center gap-8 md:hidden`}
      >
        <MenuItem id="#about" text="Sobre Mim" onClick={toggleMenu} />
        <MenuItem id="#projects" text="Projetos" onClick={toggleMenu} />
        <MenuItem id="#skills" text="Habilidades" onClick={toggleMenu} />
        <a
          href="#contact"
          onClick={toggleMenu}
          className="text-lg font-semibold bg-[#cd51ff] px-6 py-2 rounded-lg"
        >
          Entrar em Contato
        </a>
      </div>
    </nav>
  );
};

const MenuItem = ({ text, id, onClick }) => (
  <div className="relative group">
    <a
      href={id}
      onClick={onClick}
      className="text-white text-lg md:text-xl transition duration-300 hover:text-[#cd51ff]"
    >
      {text}
    </a>
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#cd51ff] group-hover:w-full transition-all duration-500"></span>
  </div>
);

export default Menu;
