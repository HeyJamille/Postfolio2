import React from 'react';
import { useInView } from 'react-intersection-observer';
import image from '../assets/girl.png';

export const About = () => {
  return (
    <article className='max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16'>

      <section>
        <img src={image} className='rounded-3xl md:w-[500px] lg:w-full shadow-xl border-[2px] border-[#cd51ff]/40 hover:scale-105 transition-transform duration-500'/>
      </section>

      <section> 
        <h2
        id="about"
        className="text-center text-4xl md:text-5xl font-extrabold text-[#cd51ff] mb-12 tracking-wider"
      >
        Sobre mim
        </h2>
        <div className="space-y-6 xl:px-16 text-justify">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed ">
            Sou <span className="font-semibold text-[#cd51ff]">Jamille Araujo de Freitas</span>, tenho 21 anos e estou cursando Ciência da Computação na Estácio de Sá.
            Atualmente, faço estágio no IFCE Campus Maracanaú, onde também concluí o curso técnico em Informática.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Tenho conhecimento básico em inglês e espanhol e estou sempre buscando aprender mais.
            Atualmente, realizo cursos como <span className="text-[#cd51ff] font-medium">Desenvolvimento Web Completo</span> e <span className="text-[#cd51ff] font-medium">Design Gráfico com Figma</span>.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Estou entusiasmada para ampliar meus horizontes na tecnologia e aplicar minhas habilidades em projetos desafiadores.
          </p>
        </div>
      </section>
    </article>
  );
};

export default About;
