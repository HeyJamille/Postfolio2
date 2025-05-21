import React from 'react';
import { useInView } from 'react-intersection-observer';

// Icons
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTelephonePlusFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"; // <-- Novo ícone de email

const Contacts = () => {
  const contacts = [
    {
      link: 'https://github.com/HeyJamille',
      icon: <FaGithub className="h-10 w-10" />,
      app: 'GitHub',
      account: 'HeyJamille',
    },
    {
      link: 'https://www.instagram.com/hey_jamillee/',
      icon: <FaInstagram className="h-10 w-10" />,
      app: 'Instagram',
      account: '@hey_jamillee',
    },
    {
      link: 'https://www.linkedin.com/in/jamille-araujo-1060a01a3/',
      icon: <FaLinkedin className="h-10 w-10" />,
      app: 'LinkedIn',
      account: 'Jamille Araujo',
    },
    {
      link: 'https://wa.me/5585999063736',
      icon: <BsTelephonePlusFill className="h-10 w-10" />,
      app: 'WhatsApp',
      account: '(85) 99906-3736',
    },
    {
      link: 'mailto:jamillearaujo.dev@gmail.com', // <-- link mailto:
      icon: <HiOutlineMail className="h-10 w-10" />,
      app: 'Email',
      account: 'Clique para acessar',
    },
  ];

  return (
    <article className='flex flex-col max-w-7xl mx-auto px-6 pt-24 lg:flex-row items-center justify-center gap-16'>
      <h2
        id="contacts-title"
        className="text-4xl text-justify font-bold text-gray-300 px-6 py-24 lg:w-[50%] lg:text-center tracking-wide drop-shadow"
      >
        Entre em contato e vamos desenvolver juntos a <span className="font-semibold text-[#cd51ff]">solução perfeita</span> para o seu negócio!" 
      </h2>

      <section className="w-full mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:w-[50%]">
        {contacts.map(({ link, icon, app, account }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-3 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 group"
            aria-label={`Link para ${app}`}
          >
            <div className="text-[#cd51ff] text-center mb-4 group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{app}</h3>
            <p className="text-gray-400 text-sm text-center">{account}</p>
          </a>
        ))}
      </section>
    </article>
  );
};

export default Contacts;
