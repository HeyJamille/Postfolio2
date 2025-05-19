import React from 'react';
import { useInView } from 'react-intersection-observer';

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephonePlusFill } from "react-icons/bs";

const Contacts = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const contacts = [
    { link: 'https://github.com/HeyJamille', icon: <FaGithub className="h-12 w-12" />, app: 'GitHub', account: 'HeyJamille' },
    { link: 'https://www.instagram.com/hey_jamillee/', icon: <FaInstagram className="h-12 w-12" />, app: 'Instagram', account: 'Hey_Jamille' },
    { link: 'https://www.linkedin.com/in/jamille-araujo-1060a01a3/', icon: <FaLinkedin className="h-12 w-12" />, app: 'LinkedIn', account: 'Jamille Araujo' },
    { link: 'https://wa.me/5585999063736', icon: <BsTelephonePlusFill className="h-12 w-12" />, app: 'Telefone', account: '(85) 99906-3736' },
  ];

  return (
    <article
      ref={ref}
      className={`max-w-5xl mx-auto py-16 px-6 
        flex flex-col items-center transition-all duration-700 ease-in-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      aria-labelledby="contacts-title"
    >
      <h2 id="contacts-title" className="text-4xl font-bold text-[#cd51ff] mb-14 tracking-wide drop-shadow-lg">
        Contatos
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full">
        {contacts.map(({ link, icon, app, account }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            aria-label={`Link para ${app}`}
          >
            <div className="text-[#cd51ff] mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-white mb-1">{app}</h3>
            <p className="text-gray-400 text-sm text-center">{account}</p>
          </a>
        ))}
      </section>
    </article>
  );
};

export default Contacts;
