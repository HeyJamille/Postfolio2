import React, { useState, useEffect } from 'react';
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactClick = () => {
    setIsMenuOpen(false);
    window.location.href = '#informations';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 py-4 px-8 flex justify-between items-center transition-all duration-300
      ${isScrolled ? 'bg-[#111] bg-opacity-90 border-b border-[#cd51ff]' : 'bg-transparent'}`}>

      {/* Título */}
      <a href="#" className="text-white text-2xl lg:text-3xl font-bold tracking-wide hover:text-[#cd51ff] transition-colors duration-300">
        Dev_<span className="text-[#cd51ff]">Jamille</span>
      </a>

      {/* Mobile Button */}
      <button 
        className="text-white text-3xl z-50 md:hidden focus:outline-none" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMenuOpen ? <MdClose className="w-10 h-10" /> : <IoIosMenu className="w-10 h-10" />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-white text-lg font-medium items-center">
        {[
          { id: '#about', text: 'Sobre Mim' },
          { id: '#projects', text: 'Projetos' },
          { id: '#skills', text: 'Habilidades' }
        ].map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}

        <li>
          <button
            onClick={handleContactClick}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#cd51ff] to-[#7f5eff] text-white font-semibold shadow-lg
              hover:scale-105 hover:shadow-2xl transition-transform duration-300
              focus:outline-none focus:ring-2 focus:ring-[#cd51ff] focus:ring-offset-2"
          >
            Contato
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#171717] flex flex-col items-center justify-center gap-10
        transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <MenuItem id="#about" text="Sobre Mim" onClick={toggleMenu} className="text-2xl" />
        <MenuItem id="#projects" text="Projetos" onClick={toggleMenu} className="text-2xl" />
        <MenuItem id="#skills" text="Habilidades" onClick={toggleMenu} className="text-2xl" />
        
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

const MenuItem = ({ text, id, onClick, className = '' }) => (
  <li className="relative group list-none">
    <a 
      href={id} 
      onClick={onClick}
      className={`text-white hover:text-[#cd51ff] transition-colors duration-300 ${className}`}
    >
      {text}
    </a>
    <div className="w-full h-0.5 bg-[#cd51ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </li>
);

export default Menu;
