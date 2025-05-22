import image from '../assets/informations/girl.png';

export const About = () => {
  return (
    <article className='flex flex-col-reverse mx-auto lg:flex-row items-center justify-between gap-10'>

      <section className='max-w-[500px]'>
        <img src={image} className='rounded-3xl h-full shadow-xl border-[2px] border-[#cd51ff]/40 hover:scale-105 transition-transform duration-500 lg:w-full' />
      </section>

      <section>
        <h2
          id="about"
          className="text-center text-3xl lg:text-4xl font-extrabold text-[#cd51ff] mb-12 tracking-wider"
        >
          Sobre mim
        </h2>
        <div className="space-y-6 xl:px-16 text-justify">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Sou <span className="font-semibold text-[#cd51ff]">Jamille Araújo de Freitas</span>, tenho 21 anos e curso Ciência da Computação na Estácio. Concluí o técnico em Informática no IFCE Maracanaú, onde atuei como <span className="font-semibold text-[#cd51ff]">estagiária nas áreas de manutenção de computadores e desenvolvimento de software</span>.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Tenho conhecimento intermediário em inglês, básico em espanhol e sigo me aprimorando com cursos como <span className="font-semibold text-[#cd51ff]">Desenvolvimento Web Completo e Design com Figma</span>.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Estou animada para crescer na área de tecnologia e contribuir em projetos desafiadores.          
          </p>
        </div>
      </section>
    </article>
  );
};

export default About;
