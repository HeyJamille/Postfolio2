import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import foto from '../assets/foto_jamille.jpeg';

export const Informations = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animationRef = useRef();

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-20"
    >
      {/* Texto e botões */}
      <div
        ref={animationRef}
        className={`flex flex-col items-center lg:items-start text-center lg:text-left gap-6 transition-all duration-1000 ease-in-out 
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Olá, eu sou <span className="text-[#cd51ff]">Jamille Araujo</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Desenvolvedora Front-end apaixonada por criar experiências digitais incríveis com foco em performance, acessibilidade e design moderno.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full max-w-sm mt-4">
          <a
            href="/cv.pdf"
            download
            className="flex-1 h-12 rounded-lg bg-gradient-to-r from-[#cd51ff] to-[#7f5eff] text-white font-medium flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="flex-1 h-12 rounded-lg border border-[#cd51ff] text-white font-medium flex items-center justify-center shadow-lg hover:bg-[#cd51ff]/10 hover:scale-105 transition-transform"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      {/* Imagem */}
      <div className="relative w-full max-w-[320px] md:max-w-[360px] flex-shrink-0">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#cd51ff]/30 to-[#7f5eff]/20 blur-xl z-0 scale-105"></div>
        <img
          src={foto}
          alt="Jamille Araujo"
          className="relative z-10 rounded-3xl w-full shadow-lg border-[2px] border-[#cd51ff]/40 hover:scale-105 transition-transform duration-500"
        />
      </div>



    </section>
  );
};

export default Informations;
