import React from 'react';
import { useInView } from 'react-intersection-observer';
import foto from '../assets/foto_jamille.jpeg';
import curriculo from '../assets/Currículo DEV - Jamille Araujo.pdf';

export const Informations = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 md:gap-20"
    >
      {/* Text and buttons */}
      <div
        className={`flex flex-col justify-center items-center lg:items-start gap-6 transition-all duration-1000 ease-in-out transform 
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight text-center lg:text-left">
          Olá, eu sou <span className="text-[#cd51ff]">Jamille Araujo</span>
        </h1>

        <p className="text-lg text-justify md:text-xl text-gray-300 max-w-xl leading-relaxed md:text-center lg:text-left">
          Desenvolvedora Front-end apaixonada por criar experiências digitais modernas, com foco em <span className="text-white font-semibold">performance</span>, <span className="text-white font-semibold">acessibilidade</span> e <span className="text-white font-semibold">design intuitivo</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-start items-start gap-4 mt-4 w-full max-w-md">
          <a
            href={curriculo}
            download="Curriculo_Jamille_Araujo.pdf"
            className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#cd51ff] to-[#7f5eff] text-white font-medium flex items-center justify-center shadow-md hover:scale-105 hover:shadow-xl transition-transform lg:h-12"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="w-full px-6 py-3 rounded-xl border border-[#cd51ff] text-white font-medium flex items-center justify-center shadow-md hover:bg-[#cd51ff]/10 hover:scale-105 hover:shadow-lg transition-transform lg:h-12"
          >
            Entrar em Contato
          </a>
        </div>


      </div>

      {/* Imagem */}
      <div className="relative w-full max-w-[320px] md:max-w-[360px] flex-shrink-0 group">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#cd51ff]/30 to-[#7f5eff]/20 blur-2xl scale-105 group-hover:scale-110 transition-transform duration-700" />
        <img
          src={foto}
          alt="Jamille Araujo"
          className="relative rounded-3xl w-full shadow-xl border-[2px] border-[#cd51ff]/40 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Informations;
