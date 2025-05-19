import React from 'react';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-16 lg:py-24 transition-all duration-700 ease-in-out
        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
    >
      <h2
        id="about"
        className="text-center text-4xl font-extrabold text-[#cd51ff] mb-10 tracking-wide"
      >
        Sobre mim
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed text-justify xl:px-16">
        Sou <span className="font-semibold text-white">Jamille Araujo de Freitas</span>, tenho 21 anos e estou cursando Ciência da Computação na Estácio de Sá. Atualmente, faço estágio no IFCE Campus Maracanaú, onde também concluí o curso técnico em Informática. Tenho conhecimento básico em inglês e espanhol e estou sempre buscando aprender mais. Atualmente, realizo cursos como Desenvolvimento Web Completo e Design Gráfico com Figma. Estou entusiasmada para ampliar meus horizontes na tecnologia e aplicar minhas habilidades em projetos desafiadores.
      </p>
    </article>
  );
};

export default About;
