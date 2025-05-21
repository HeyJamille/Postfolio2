import React from 'react';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-16 lg:py-24 transition-all duration-700 ease-in-out transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <h2
        id="about"
        className="text-center text-4xl md:text-5xl font-extrabold text-[#cd51ff] mb-12 tracking-wider"
      >
        Sobre mim
      </h2>
      <div className="space-y-6 xl:px-16 text-justify">
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed ">
          Sou <span className="font-semibold text-white">Jamille Araujo de Freitas</span>, tenho 21 anos e estou cursando Ciência da Computação na Estácio de Sá.
          Atualmente, faço estágio no IFCE Campus Maracanaú, onde também concluí o curso técnico em Informática.
        </p>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Tenho conhecimento básico em inglês e espanhol e estou sempre buscando aprender mais.
          Atualmente, realizo cursos como <span className="text-white font-medium">Desenvolvimento Web Completo</span> e <span className="text-white font-medium">Design Gráfico com Figma</span>.
        </p>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Estou entusiasmada para ampliar meus horizontes na tecnologia e aplicar minhas habilidades em projetos desafiadores.
        </p>
      </div>
    </article>
  );
};

export default About;
