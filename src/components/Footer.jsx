import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#cd51ff]/40 py-4 px-6">
      <p className="text-center text-gray-300 text-sm md:text-base">
        Desenvolvido por{' '}
        <span className="text-[#cd51ff] font-semibold hover:underline cursor-pointer transition">
          Jamille Araujo
        </span>
      </p>
    </footer>
  );
};

export default Footer;
